const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    try {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            throw new Error("Please complete all required fields.");
        }

        formMessage.textContent =
            'Thank you, ${name}! Your message has been sent successfully.';

        contactForm.reset();

    } catch (error) {

        formMessage.textContent = error.message;

    }

});
