const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

const generateCouponCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomPart = "";

    for (let i = 0; i < 6; i++) {
        randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return `ALOCK-${randomPart}`;
};

module.exports = {
    generateOtp,
    generateCouponCode
};