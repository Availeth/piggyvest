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




// var names = ['data'];



// function store(){
//         var fullName = document.getElementById('fullName').value;
//         var email = document.getElementById('email').value;
//         var tel = document.getElementById('tel').value;
//         var password = document.getElementById('password').value;
//         var refCode = document.getElementById('refCode').value;
// 	    localStorage.setItem('fullname', fullName);
// 	    localStorage.setItem('email', email);
// 	    localStorage.setItem('tel', tel);
// 	    localStorage.setItem('password', password);
// 	    localStorage.setItem('refCode', refCode);
//         names.push(fullName, email, tel, password, refCode);
//         localStorage.setItem('names', JSON.stringify(names));
//         JSON.stringify(localStorage.setItem('names', names));
//         console.log(names);
// 	}
	
//         function login(){
//                 var email  = localStorage.getItem('email');
//                 var password = localStorage.getItem('password');
//                 console.log(email, password);

//                 var emailLog  = localStorage.getItem('email');
//                 var passwordLogin = localStorage.getItem('password');

//                 if (email == emailLog && password == passwordLogin){
//                         alert("login successful")
//                 }
//         }
let customers;
         if(localStorage.customers){
                customers = JSON.parse(localStorage.getItem("customer"))
         }else{
             customers =[]   
         }

        function store(){
                let full_Name = document.getElementById('fullName').value;
                let email = document.getElementById('email').value;
                // let tel = document.getElementById('tel').value;
                let password = document.getElementById('password').value;
                // let refCode = document.getElementById('refCode').value;
        
                let thiscustomers = {fulls: full_Name, e_mail: email, pword: password};
                

                customers.push(thiscustomers);
                localStorage.setItem('customer', JSON.stringify(customers));
               
                showDatabase()
            }
          


// Get an array from local storage

// Retrieve the array from local storage

// let table = document.idSelector('#table')
//        fNamesZero.innerHTML = showData[0].fulldetails;
//        emailDbZero.innerHTML = showData[0].email;
//        passDbZero.innerHTML = showData[0].password;

//        fNamesOne.innerHTML = showData[1].fulldetails;
//        emailDbOne.innerHTML = showData[1].email;
//        passDbOne.innerHTML = showData[1].password;

//        fNamesTwo.innerHTML = showData[2].fulldetails;
//        emailDbTwo.innerHTML = showData[2].email;
//        passDbTwo.innerHTML = showData[2].password;

function showDatabase(){
       
        let dbData = localStorage.getItem("customer");
        let showData = JSON.parse(dbData);
        let display = "";
        for(let i =0; i< showData.length; i++){
                console.log(showData[i]);
                
                display += "<tr> <td contenteditable=''>"+ (i+1) +"</td> <td contenteditable=''>"+ showData[i].fulls + "</td> <td contenteditable=''>"+ showData[i].e_mail +"</td> <td contenteditabe=''>"+ showData[i].pword +"</td><td> <button class='btn btn-danger' m-lg-1 onclick='edit("+i+")'>edit</button></td><td> <button class='btn btn-primary' m-lg-1 onclick='update("+i+")'>delete</button></td></tr>";
                
        }

        tableContent.innerHTML = display;       
        
        let displayed = document.querySelector('td');
 
}


// make it editable




function del(index){
        localStorage.splice('customer', JSON.stringify(customers));
}

//make it deleteable

function edit(index){
        let full_Name = document.getElementById('fullName').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

                
        let dbData = localStorage.getItem("customer");
        let showData = JSON.parse(dbData);
        
        full_Name.value = showData[index].firstname
        email.value = showData[index].firstname
        password.value = showData[index].firstname

}


function update(index){
        let f_name = document.getElementById("firstName");
        let l_name = document.getElementById("lastName");
        let age = document.getElementById("age");
        let interest = document.getElementById("interest");
        let password = document.getElementById("password");
      
        let st_List = localStorage.getItem("customers");
        let studentList = JSON.parse(st_List);
      
        studentList[index].firstName =  f_name.value
        studentList[index].lastName = l_name.value
        studentList[index].interest = interest.value
        studentList[index].age = age.value
      
        localStorage.setItem("customers", JSON.stringify(studentList))
        writeStudentList()
      }