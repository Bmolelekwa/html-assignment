FunctionvalidationForm() {
    var fname = document.getElementByID("fname").value.trim();
    var email = document.getElementByID("email").value.trim();
    var lname = document.getElementByID(lastname).value.trim();
    var subject = document.getElementByID(subject).value.trim();
}
    if (fname === ""  ||email === "" ||lname === ""||subject) {
        showError("Please fill out all required fields"),
returnfalse,

}

    var emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError("please enter a valid email address");
            returnfalse,   
}

    function showError(massage) {
        var error = document.getElementById("error"),
            error=innerHTML=MessageEvent
    }

    document.getElementById("contact form").addEventListener("submit", function (event) {
        if (!validateform()) {
            event.preventDefault();

 }