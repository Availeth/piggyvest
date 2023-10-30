// function create() {
//     let fullName = document.getElementById("fullName").value;
//     let email = document.getElementById("email").value;
//     let tel = document.getElementById("tel").value;
//     let password = 1234;
    
//     if (password === 1234) {
//         alert(fullName + "Welcome back")
//     } else {
//         alert("Wrong login information")
//     }
// }




var names = ['data'];



function store(){
        var fullName = document.getElementById('fullName').value;
        var email = document.getElementById('email').value;
        var tel = document.getElementById('tel').value;
        var password = document.getElementById('password').value;
        var refCode = document.getElementById('refCode').value;
	    // localStorage.setItem('fullname', fullName);
	    // localStorage.setItem('email', email);
	    // localStorage.setItem('tel', tel);
	    // localStorage.setItem('password', password);
	    // localStorage.setItem('refCode', refCode);
        names.push(fullName, email, tel, password, refCode);
        localStorage.setItem('names', JSON.stringify(names));
        JSON.stringify(localStorage.setItem('names', names));
        console.log(names);
	}
	
        function login(){
                var names  = localStorage.getItem('names');
        }