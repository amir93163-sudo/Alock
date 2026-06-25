const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendOtpEmail = async (email, otp) => {
    const { data, error } = await resend.emails.send({
        from: process.env.EMAIL_FROM || "ALock <onboarding@resend.dev>",
        to: email,
        subject: "🔐 קוד האימות שלך ל־ALock",
        html: `
        <div style="background:#111;padding:40px;font-family:Arial;color:white;text-align:center;">
            <h1 style="color:#d4af37;">🔐 ALock</h1>
            <h2>קוד האימות שלך</h2>
            <div style="font-size:42px;letter-spacing:8px;color:#d4af37;margin:30px 0;">
                ${otp}
            </div>
            <p>הקוד תקף למשך <strong>10 דקות</strong></p>
            <hr>
            <p style="color:#888;">אם לא ביקשת קוד אימות, ניתן להתעלם מהמייל.</p>
        </div>
        `
    });

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

module.exports = {
    sendOtpEmail
};