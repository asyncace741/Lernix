function wishSent() {
    document.getElementById("User").innerHTML = localStorage.getItem("fname");
    var date = new Date();
    var time = date.getHours();
    if(time < 12) {
        document.getElementById("wish").innerHTML = "Good Morning!"
    } else if(time < 17) {
        document.getElementById("wish").innerHTML = "Good Afternoon!"
    }  else if(time < 20) {
        document.getElementById("wish").innerHTML = "Good Evening!"
    } else if(time < 24) {
        document.getElementById("wish").innerHTML = "Good Night!"
    }
}
wishSent();
setInterval(() => {
    wishSent();
},60000)


if(localStorage.getItem("lname") && localStorage.getItem("fname") && localStorage.getItem("email")) {} else {
    window.open("../index.html", "_parent")
}

function logoutAccountPage() {
    window.open("../Logout_Module/out.html", "_parent")
}