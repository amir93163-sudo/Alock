# 🔐 ALock – Full Stack Locksmith Website

ALock is a full-stack locksmith website developed as part of a Software Engineering project.

The system allows customers to register for an exclusive 20% discount, verify their email using a One-Time Password (OTP), receive a personal coupon, and instantly contact the locksmith through WhatsApp for a price quotation.

---

# 🚀 Features

### 🔐 Email OTP Authentication
Customers receive a one-time verification code via email before receiving their discount.

### 🎟️ Automatic Coupon Generator
After successful verification, a unique 20% discount coupon is automatically generated.

### 💬 WhatsApp Integration
Once the coupon is created, customers can immediately send a pre-filled WhatsApp message requesting a quotation.

### ☁️ MongoDB Atlas Database
Customer information, verification codes and coupons are securely stored in MongoDB Atlas.

### 📱 Responsive Website
Fully responsive interface designed for desktop and mobile devices.

---

# 🛠️ Technologies

## Frontend

- HTML5
- CSS3
- JavaScript (Vanilla)

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Nodemailer
- dotenv
- CORS

---

# 📂 Project Structure

```
Alock
│
├── client
│   ├── images
│   ├── js
│   │   ├── api.js
│   │   ├── modal.js
│   │   └── discount.js
│   ├── index.html
│   ├── style.css
│   ├── car-lockout.html
│   ├── smart-locks.html
│   └── cylinder-replacement.html
│
└── server
    ├── config
    ├── controllers
    ├── models
    ├── routes
    ├── services
    ├── utils
    ├── package.json
    └── app.js
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/amir93163-sudo/Alock.git
```

Go to the backend folder

```bash
cd Alock/server
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

EMAIL_USER=YOUR_GMAIL

EMAIL_PASS=YOUR_APP_PASSWORD
```

Run the backend

```bash
npm run dev
```

Open the frontend

```
client/index.html
```

using **Live Server** in Visual Studio Code.

---

# 🔄 Application Flow

```
Customer

      │

      ▼

Enter Details

      │

      ▼

Receive OTP by Email

      │

      ▼

Verify OTP

      │

      ▼

Generate Coupon

      │

      ▼

Open WhatsApp

      │

      ▼

Receive Price Quote
```

---

# 📸 Screenshots

You can add screenshots here later.

Example:

```
/screenshots/homepage.png
/screenshots/coupon.png
/screenshots/email.png
```

---

# 🔒 Security

- Email verification using OTP
- Unique coupon generation
- MongoDB Atlas cloud database
- Environment variables stored using `.env`
- Sensitive credentials excluded using `.gitignore`

---

# 📌 Future Improvements

- Admin Dashboard
- Customer Management System
- Online Booking
- Service History
- Coupon Expiration Notifications
- SMS Verification
- JWT Authentication
- Google Maps Integration

---

# 👨‍💻 Author

**Amir Ben Ari**

Software Engineering Student

Shenkar College of Engineering, Design and Art

---

# 📄 License

This project is intended for educational and portfolio purposes.
