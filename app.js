let cart = JSON.parse(localStorage.getItem("cart")) || [];
function login(e) {
    e.preventDefault();
    window.location.href = "login.html";
}
function register(e) {
    e.preventDefault();
    alert("Registration Successful");
    window.location.href = "register.html";
}
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart");
}
function loadCart() {
    const cartDiv = document.getElementById("cart");
    if (!cartDiv) return;

    let total = 0;
    cartDiv.innerHTML = "";

    cart.forEach(item => {
        total += item.price;
        cartDiv.innerHTML += `<div>${item.name} - ₹${item.price}</div>`;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}
loadCart();
function validateRegister() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;     

    if (username.length < 3) {
        alert("Username must be at least 3 characters");
        return false;
    }

    if (password.length < 6||password.length > 16) {
        alert("Password must be at least 6 characters");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    alert("Registration Successful");
    return true;
}

function validateLogin() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (user === "" || pass === "") {
        alert("All fields are required");
        return false;
    }

    alert("Login Successful");
    return true;
}

