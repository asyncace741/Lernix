let type = 0;
function markme(element) {
    type = element.innerText;
    localStorage.setItem("userType", type)
    element.style.background = "#58a6ff";
    element.parentElement.childNodes[1].setAttribute("disabled", "")
    element.parentElement.childNodes[3].setAttribute("disabled", "")    
}
function setType() {
    document.getElementById("welcome-user-msg").innerHTML = "The tools you need to explore.";
    document.getElementById("expr1").innerHTML = "Soup to nuts, Lernix has it all.";
    document.getElementById("question").innerHTML = "What are special features are you interested in using?";
    document.getElementById("button-container").innerHTML = " <div class=\"feature\"><input type=\"checkbox\" name=\"\" id=\"spp\"><p class=\"title\">Smart Past paper</p><p class=\"about\">Can play a mcq papers as a game. simple easy and faster.</p></div>";
    document.getElementById("button-container").innerHTML += " <div class=\"feature\"><input type=\"checkbox\" name=\"\" id=\"ncva\"><p class=\"title\">Nebula Chat</p><p class=\"about\">You can discuss the papers with lernix virtual assistant \"Nebula\".</p></div>";
    document.getElementById("button-container").innerHTML += "<div class=\"feature\"><input type=\"checkbox\" name=\"\" id=\"gnbsc\"><p class=\"title\">Notification</p><p class=\"about\">Get all updates and information for Scriptora Company.</p></div>";
    document.getElementById("continue").innerHTML = "Finish";
    document.getElementById("continue").removeAttribute("onclick");
    document.getElementById("continue").setAttribute("onclick", "finishAndContinue()");
}
function finishAndContinue() {
    localStorage.setItem("userType", type);
    window.open("../Home_Module/homepage.html", "_parent")
}