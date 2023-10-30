function create() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let password = 1234;
    
    if (password === 1234) {
        alert(fullName + "Welcome back")
    } else {
        alert("Wrong login information")
    }
}
