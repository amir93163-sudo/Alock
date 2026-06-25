const Customer = require("../models/Customer");
const Verification = require("../models/Verification");
const Coupon = require("../models/Coupon");

const { sendOtpEmail } = require("../services/emailService");
const { generateOtp, generateCouponCode } = require("../utils/generators");

const sendOtp = async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body;

        if (!firstName || !lastName || !email) {
            return res.status(400).json({
                success: false,
                message: "First name, last name and email are required"
            });
        }

        let customer = await Customer.findOne({ email });

        if (!customer) {
            customer = await Customer.create({
                firstName,
                lastName,
                email
            });
        }

        const otpCode = generateOtp();
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

        await Verification.create({
            customerId: customer._id,
            otpCode,
            expiresAt
        });

        try {
            console.log("📧 Sending OTP email to:", email);

            await sendOtpEmail(email, otpCode);

            console.log("✅ OTP email sent");
        } catch (emailError) {
            console.error("❌ Email sending failed:");
            console.error(emailError.message);

            return res.status(500).json({
                success: false,
                message: "Customer saved, but email sending failed",
                error: emailError.message
            });
        }

        return res.status(200).json({
            success: true,
            message: "OTP sent to your email.",
            customerId: customer._id
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};
const verifyOtp = async (req, res) => {
    try {
        const { customerId, otpCode } = req.body;

        if (!customerId || !otpCode) {
            return res.status(400).json({
                success: false,
                message: "Customer ID and OTP code are required"
            });
        }

        const verification = await Verification.findOne({
            customerId,
            otpCode,
            verified: false
        }).sort({ createdAt: -1 });

        if (!verification) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP code"
            });
        }

        if (verification.expiresAt < new Date()) {
            return res.status(400).json({
                success: false,
                message: "OTP code expired"
            });
        }

        verification.verified = true;
        await verification.save();

        const customer = await Customer.findByIdAndUpdate(
            customerId,
            { isVerified: true },
            { new: true }
        );

        const couponCode = generateCouponCode();

        const coupon = await Coupon.create({
            customerId: customer._id,
            code: couponCode,
            discountPercent: 20,
            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        });

        res.status(200).json({
            success: true,
            message: "OTP verified successfully. Coupon created.",
            data: {
                customer,
                coupon
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};

module.exports = {
    sendOtp,
    verifyOtp
};