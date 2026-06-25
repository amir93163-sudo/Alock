const API_URL = "http://localhost:5000/api";


async function sendOtp(data) {

    const response = await fetch(`${API_URL}/auth/send-otp`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    });

    return await response.json();

}

async function verifyOtp(data) {

    const response = await fetch(`${API_URL}/auth/verify-otp`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    });

    return await response.json();

}