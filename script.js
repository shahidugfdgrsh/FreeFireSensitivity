document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("phoneContainer").style.display = "none";
    document.getElementById("sensitivityOutput").style.display = "none";
});

function checkLogin() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (usernameInput.trim() === "flamemastergamer" && passwordInput.trim() === "Go10k") {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("phoneContainer").style.display = "block";
    } else {
        document.getElementById("errorMessage").innerText = "Incorrect username or password. Please try again.";
    }
}

function redirectToSensitivity(phoneName) {
    const sensitivityData = {
        "Samsung Galaxy S21": "DPI: 800, Sensitivity: 50",
        "iPhone 13": "DPI: 1000, Sensitivity: 60",
        "Google Pixel 6": "DPI: 900, Sensitivity: 55",
        "OnePlus 9": "DPI: 750, Sensitivity: 53",
        "Xiaomi Redmi Note 10": "DPI: 850, Sensitivity: 52",
    };

    document.getElementById("phoneContainer").style.display = "none";
    document.getElementById("sensitivityOutput").style.display = "block";
    document.getElementById("selectedPhone").innerText = phoneName;
    document.getElementById("sensitivityData").innerText = sensitivityData[phoneName] || "No data available.";
}

function goBack() {
    document.getElementById("sensitivityOutput").style.display = "none";
    document.getElementById("phoneContainer").style.display = "block";
}
