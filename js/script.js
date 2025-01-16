// Typewriter Effect
const tagline = "3rd Year Undergraduate | Computer Science Enthusiast | Aspiring Innovator";
let index = 0;

function typeWriterEffect() {
    const element = document.getElementById("dynamic-tagline");
    if (index < tagline.length) {
        element.textContent += tagline.charAt(index);
        index++;
        setTimeout(typeWriterEffect, 100);
    }
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Replace with your EmailJS credentials
    const serviceID = "service_tx8kn1t";
    const templateID = "template_elc64w5";
    const publicKey = "BE2LOesi7DIQZXs9V";

    emailjs.init(publicKey);

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            document.getElementById("status-message").textContent = "Message sent successfully!";
            this.reset();
        })
        .catch((error) => {
            document.getElementById("status-message").textContent = "Failed to send message. Please try again.";
            console.error("Error:", error);
        });
});


document.addEventListener("DOMContentLoaded", () => {
    typeWriterEffect();

    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
