document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "none"; 

    if (!fullname || !email || !password || !confirmPassword) {
        errorMessage.textContent = "All fields are required!";
        errorMessage.style.display = "block";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Password and confirm password do not match!";
        errorMessage.style.display = "block";
        return;
    }

    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === email) {
        errorMessage.textContent = "Email is already registered!";
        errorMessage.style.display = "block";
        return;
    }

    const user = { fullname, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Sign Up berhasil! Silakan login.");
    window.location.href = "figma.html";
});
