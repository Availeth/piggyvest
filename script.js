function admissions () {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let score = document.getElementById("score").value;
    let passMark = 200;
    
    if (score >= passMark) {
        alert(firstName + lastName + "Admissions Granted")
    } else {
        alert("Denied olodo")
    }
}
