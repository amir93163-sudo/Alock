const modal = document.getElementById("discountModal");

const openBtn = document.getElementById("openDiscountModal");

const closeBtn = document.getElementById("closeModal");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

openBtn.addEventListener("click", (e) => {

    e.preventDefault();

    modal.style.display = "flex";

    step1.style.display = "block";
    step2.style.display = "none";
    step3.style.display = "none";

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});
let currentCustomerId = "";

const sendOtpBtn = document.getElementById("sendOtpBtn");

sendOtpBtn.addEventListener("click", async () => {

    const firstName = document.getElementById("firstName").value;

    const lastName = document.getElementById("lastName").value;

    const email = document.getElementById("email").value;

    if (!firstName || !lastName || !email) {

        alert("יש למלא את כל השדות");

        return;

    }

    sendOtpBtn.innerText = "שולח...";

    try{

        const result = await sendOtp({

            firstName,

            lastName,

            email

        });

        currentCustomerId = result.customerId;

        step1.style.display = "none";

        step2.style.display = "block";

    }

    catch(err){

        alert("אירעה שגיאה");

    }

    sendOtpBtn.innerText = "שלח קוד אימות";

});
const verifyOtpBtn = document.getElementById("verifyOtpBtn");

verifyOtpBtn.addEventListener("click", async () => {

    const otpCode = document.getElementById("otpCode").value;

    if (!otpCode) {

        alert("יש להזין קוד אימות");

        return;

    }

    verifyOtpBtn.innerText = "מאמת...";

    try {

        const result = await verifyOtp({

            customerId: currentCustomerId,

            otpCode

        });

        step2.style.display = "none";
        step3.style.display = "block";

        document.getElementById("couponCode").innerText =
            result.data.coupon.code;

        const message =
`🔐 שלום ALock,

קיבלתי קופון דרך האתר.

קוד הקופון שלי:

${result.data.coupon.code}

אשמח לקבל הצעת מחיר.

תודה!`;

        document.getElementById("whatsappLink").href =
            `https://wa.me/972507447934?text=${encodeURIComponent(message)}`;

    }

    catch(err){

    console.error(err);

    alert(err.message);

}

});