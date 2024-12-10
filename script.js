
// Display an alert message when the "Learn More" button is clicked
function showMessage() {
    alert("Welcome to XYZ College! Explore our website to learn more.");
}

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("formMessage").innerText = Thank you, ${name}! We have received your message and will get back to you soon.;
    this.reset(); // Reset the form fields
});
