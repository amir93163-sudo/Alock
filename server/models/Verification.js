const mongoose = require("mongoose");

const verificationSchema = new mongoose.Schema(
    {
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: true
        },

        otpCode: {
            type: String,
            required: true
        },

        expiresAt: {
            type: Date,
            required: true
        },

        verified: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Verification", verificationSchema);