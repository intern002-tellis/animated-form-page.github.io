function toggleForm() {
    const formTitle = document.getElementById("formTitle");
    const welcomeText = document.getElementById("welcomeText");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const formButton = document.getElementById("formButton");
    const emailBox = document.getElementById("emailBox");
    const formToggle = document.getElementById("formToggle");

    if (formTitle.innerHTML === "Sign Up") {
        // Switch to Login form
        formTitle.innerHTML = "Login";
        welcomeText.innerHTML = "WELCOME BACK!";
        welcomeMessage.innerHTML = "Log in to your account.";
        formButton.innerHTML = "Login";
        emailBox.style.display = "none"; // Hide email input for login form
        formToggle.innerHTML = `Don't have an account? <a href="#" onclick="toggleForm()">Sign Up</a>`;
    } else {
        // Switch back to Sign Up form
        formTitle.innerHTML = "Sign Up";
        welcomeText.innerHTML = "WELCOME BACK!";
        welcomeMessage.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing.";
        formButton.innerHTML = "Sign Up";
        emailBox.style.display = "block"; // Show email input for sign up form
        formToggle.innerHTML = `Already have an account? <a href="#" onclick="toggleForm()">Login</a>`;
    }
}
