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
    "Samsung Galaxy S21": "DPI: 800, Sensitivity: 50",
    "iPhone 13": "DPI: 1000, Sensitivity: 60",
    "Google Pixel 6": "DPI: 900, Sensitivity: 55",
    "OnePlus 9": "DPI: 750, Sensitivity: 53",
    "Xiaomi Redmi Note 10": "DPI: 850, Sensitivity: 52",
};

const phoneList = document.getElementById("phoneList");
phones.forEach(phone => {
    const listItem = document.createElement("li");
    listItem.innerText = phone;
    listItem.style.cursor = "pointer";
    listItem.onclick = () => redirectToSensitivity(phone);
    phoneList.appendChild(listItem);
});

function redirectToSensitivity(phoneName) {
    document.getElementById("phoneContainer").style.display = "none";
    document.getElementById("sensitivityOutput").style.display = "block";
    document.getElementById("selectedPhone").innerText = phoneName;
    document.getElementById("sensitivityData").innerText = sensitivityData[phoneName] || "No data available.";
}

function goBack() {
    document.getElementById("sensitivityOutput").style.display = "none";
    document.getElementById("phoneContainer").style.display = "block";
                            }
