const Customer = require("../models/Customer");

const registerCustomer = async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body;

        if (!firstName || !lastName || !email) {
            return res.status(400).json({
                success: false,
                message: "First name, last name and email are required"
            });
        }

        const existingCustomer = await Customer.findOne({ email });

        if (existingCustomer) {
            return res.status(409).json({
                success: false,
                message: "Customer already exists"
            });
        }

        const customer = await Customer.create({
            firstName,
            lastName,
            email
        });

        res.status(201).json({
            success: true,
            message: "Customer registered successfully",
            data: customer
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
    registerCustomer
};