document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("phoneContainer").style.display = "none";
    document.getElementById("sensitivityOutput").style.display = "none";
});

function checkLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "flamemastergamer" && password === "Go10k") {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("phoneContainer").style.display = "block";
    } else {
        document.getElementById("errorMessage").innerText = "Incorrect username or password. Try again.";
    }
}

const phones = [
    "Samsung Galaxy S21", "iPhone 13", "Google Pixel 6", "OnePlus 9", "Xiaomi Redmi Note 10",
    "Samsung Galaxy A52", "iPhone 12", "Redmi Note 11", "Realme 8", "Oppo A74",
    "Vivo Y20", "Samsung Galaxy A32", "Huawei P40 Lite", "Moto G Power", "Poco X3 Pro",
    "Samsung Galaxy S20", "iPhone SE", "Google Pixel 5", "OnePlus 8", "Nokia G20",
    "Samsung Galaxy A12", "iPhone 11", "Redmi Note 9", "Realme 7", "Oppo A15",
    "Vivo Y12", "Samsung Galaxy A72", "Huawei P30 Lite", "Moto G Stylus", "Poco M3"
];

const sensitivityData = {
    "Samsung Galaxy S21": { general: 90, redDot: 85, scope2x: 80, scope4x: 75, sniperScope: 70, freeLook: 60 },
    "iPhone 13": { general: 95, redDot: 90, scope2x: 85, scope4x: 80, sniperScope: 75, freeLook: 65 },
    "Google Pixel 6": { general: 85, redDot: 80, scope2x: 75, scope4x: 70, sniperScope: 65, freeLook: 55 },
    "OnePlus 9": { general: 88, redDot: 83, scope2x: 78, scope4x: 73, sniperScope: 68, freeLook: 58 },
    "Xiaomi Redmi Note 10": { general: 86, redDot: 81, scope2x: 76, scope4x: 71, sniperScope: 66, freeLook: 56 }
};

const phoneList = document.getElementById("phoneList");
phones.forEach(phone => {
    const button = document.createElement("button");
    button.innerText = phone;
    button.onclick = () => redirectToSensitivity(phone);
    phoneList.appendChild(button);
});

function redirectToSensitivity(phoneName) {
    document.getElementById("phoneContainer").style.display = "none";
    document.getElementById("sensitivityOutput").style.display = "block";
    document.getElementById("selectedPhone").innerText = phoneName;

    if (sensitivityData[phoneName]) {
        document.getElementById("general").innerText = sensitivityData[phoneName].general;
        document.getElementById("redDot").innerText = sensitivityData[phoneName].redDot;
        document.getElementById("scope2x").innerText = sensitivityData[phoneName].scope2x;
        document.getElementById("scope4x").innerText = sensitivityData[phoneName].scope4x;
        document.getElementById("sniperScope").innerText = sensitivityData[phoneName].sniperScope;
        document.getElementById("freeLook").innerText = sensitivityData[phoneName].freeLook;
    } else {
        document.getElementById("general").innerText = "No data available";
        document.getElementById("redDot").innerText = "No data available";
        document.getElementById("scope2x").innerText = "No data available";
        document.getElementById("scope4x").innerText = "No data available";
        document.getElementById("sniperScope").innerText = "No data available";
        document.getElementById("freeLook").innerText = "No data available";
    }
}

function goBack() {
    document.getElementById("sensitivityOutput").style.display = "none";
    document.getElementById("phoneContainer").style.display = "block";
    }

