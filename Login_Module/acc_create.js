function createAccount() {
    // Get datas that user inserted
    var email = document.getElementById("email").value;
    var password = encodeURIComponent(document.getElementById("password").value);
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    if(email == "" ||
        password == "" ||
        fname == "" ||
        lname == "" 
    ) {} else {
        localStorage.setItem("email", email);
        localStorage.setItem("pwd", password);
        localStorage.setItem("fname", fname);
        localStorage.setItem("lname", lname);
        window.open("./setupme.html", "_parent");
    }
}