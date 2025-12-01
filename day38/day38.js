//1.Auto Logout after 30sec, before that 25 sec you need to show warning.

let logoutTime = 15;
let warningTime = 10; 

let timer = setInterval(() => {

    logoutTime--;

    if (logoutTime === (15 - warningTime)) {
        document.getElementById("warning").style.display = "block";
    }

    if (logoutTime === 0) {
        clearInterval(timer);
        alert("Logged out automatically!");
        window.location.href = "logout.html"; 
    }

}, 1000);