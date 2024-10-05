// For user  to add username and password
let isAuthenticated = false;
let basket = [];

function authenticateUser(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        isAuthenticated = true;
        alert("Welcome, " + username + "!");
        document.getElementById("auth").style.display = "none";
        document.getElementById("build-box").style.display = "block";
    }
}

// Shows user the selection of chocolates to add in the basket
function showChocolateGallery() {
    const occasion = document.getElementById("occasion-select").value;
    if (occasion) {
        document.getElementById("build-box").style.display = "none";
        document.getElementById("chocolate-gallery").style.display = "block";
    } else {
        alert("Please select an occasion before proceeding.");
    }
}

// Adds chocolate to the user
function addToBasket(chocolate) {
    basket.push(chocolate);
    alert(chocolate + " added to your basket!");
}

// Shows user the chocolate basket
function viewBasket() {
    if (basket.length === 0) {
        alert("Your basket is empty.");
    } else {
        alert("Your basket contains: " + basket.join(", "));
    }
}
