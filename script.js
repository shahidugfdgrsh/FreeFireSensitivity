// Check Login Credentials
function checkLogin() {
    var username = document.getElementById("username").value.toLowerCase();
    var password = document.getElementById("password").value;

    if (username === "flamemastergamer" && password === "go10k") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("error-msg").innerHTML = "Wrong username or password!";
    }
}

// Redirect to Sensitivity Page
function redirectToSensitivity(phone) {
    var sensitivityData = {
        "ZTE A35": "General: 85, Red Dot: 90, 2x Scope: 80, 4x Scope: 75, AWM Scope: 50",
        "Samsung Galaxy A12": "General: 90, Red Dot: 95, 2x Scope: 85, 4x Scope: 80, AWM Scope: 55",
        "iPhone 13": "General: 100, Red Dot: 100, 2x Scope: 90, 4x Scope: 85, AWM Scope: 60",
        "Poco X3 Pro": "General: 95, Red Dot: 97, 2x Scope: 90, 4x Scope: 85, AWM Scope: 60",
        "Redmi Note 10 Pro": "General: 92, Red Dot: 94, 2x Scope: 88, 4x Scope: 83, AWM Scope: 58",
        "Realme 8": "General: 90, Red Dot: 92, 2x Scope: 85, 4x Scope: 80, AWM Scope: 55",
        "OnePlus 9": "General: 93, Red Dot: 95, 2x Scope: 87, 4x Scope: 82, AWM Scope: 57",
        "Xiaomi Mi 11": "General: 94, Red Dot: 96, 2x Scope: 89, 4x Scope: 84, AWM Scope: 58",
        "Oppo Reno 5": "General: 91, Red Dot: 93, 2x Scope: 86, 4x Scope: 81, AWM Scope: 56",
        "Vivo V21": "General: 90, Red Dot: 92, 2x Scope: 85, 4x Scope: 80, AWM Scope: 54",
        "Huawei P40": "General: 97, Red Dot: 98, 2x Scope: 91, 4x Scope: 86, AWM Scope: 62",
        "Google Pixel 5": "General: 96, Red Dot: 97, 2x Scope: 90, 4x Scope: 85, AWM Scope: 61",
        "Asus ROG Phone 5": "General: 99, Red Dot: 99, 2x Scope: 92, 4x Scope: 87, AWM Scope: 63",
        "Sony Xperia 5 II": "General: 94, Red Dot: 95, 2x Scope: 89, 4x Scope: 82, AWM Scope: 56",
        "Nokia 8.3": "General: 90, Red Dot: 90, 2x Scope: 80, 4x Scope: 75, AWM Scope: 50",
        "Motorola Moto G Power": "General: 88, Red Dot: 92, 2x Scope: 84, 4x Scope: 79, AWM Scope: 55",
        "Samsung Galaxy S21": "General: 97, Red Dot: 98, 2x Scope: 91, 4x Scope: 86, AWM Scope: 62",
        "Apple iPhone 12": "General: 95, Red Dot: 97, 2x Scope: 
        
