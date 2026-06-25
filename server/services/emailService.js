const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000
});

const sendOtpEmail = async (email, otp) => {

    await transporter.sendMail({

        from: `"ALock Security" <${process.env.EMAIL_USER}>`,

        to: email,

        subject: "🔐 קוד האימות שלך ל־ALock",

        html: `

        <div style="background:#111;
                    padding:40px;
                    font-family:Arial;
                    color:white;
                    text-align:center;">

            <h1 style="color:#d4af37;">
                🔐 ALock
            </h1>

            <h2>
                קוד האימות שלך
            </h2>

            <div
            style="
            font-size:42px;
            letter-spacing:8px;
            color:#d4af37;
            margin:30px 0;">

                ${otp}

            </div>

            <p>

                הקוד תקף למשך
                <strong>10 דקות</strong>

            </p>

            <hr>

            <p style="color:#888;">

                אם לא ביקשת קוד אימות,
                ניתן להתעלם מהמייל.

            </p>

        </div>

        `

    });

};

module.exports = {

    sendOtpEmail

};