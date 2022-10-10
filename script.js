// function errorMessage(){
//     var error = getElementById("spa")
//     if(Number.isNaN(document.getElementById("name").value))
//     {
//         spa.textContent = "Error"
//     }
// };
              
         //validate
        //  function Validate(){
        //  validate();
        //  validate1();
        //  validate2()
        //  };
function validate() {
    var user = document.getElementById("fname").value;
    var user1 = document.getElementById("fname");
    var email = document.getElementById("email").value;
    var email2 = document.getElementById("email");
    // var user2 = document.getElementById("pass").value;
    // var user3 = document.getElementById("pass");
    var entry = document.getElementById("cpass").value;
    var entry1 = document.getElementById("cpass");
    var re = /^[a-zA-Z ]/;
    console.log(email);
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     var password =/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
 if (re.test(user) && re.test(email)) {
     alert("done");
         console.log(user);
         user1.style.border = "green solid 3px"
         document.getElementById('sp').style.display = 'none' ;
         document.getElementById('sp1').style.display = 'none' ;
         return true;
     }
     else {
          user1.style.border = "red solid 3px"
          document.getElementById('sp').style.display = 'block' ;
         email1.style.border = "red solid 3px"
          document.getElementById('sp1').style.display = 'block' ;
           return false;}
        //email
          if (re.test(email)) {
          alert("done");
          return true;
               }
          else {
               email2.style.border = "red solid 3px";
           return false;
               }
       //password
          if (password.test(user2))
           {
              alert("done");
              console.log(user3);
              return true;
               }
               else 
               {
                  user3.style.border = "red solid 3px"
                  document.getElementById('spa1').style.display = 'block' 
                  return false;}
              //confirm password
              if (entry == user2)
              {
              alert("done");
              console.log(user3);
              return true;
               }
               else 
              {
                  user3.style.border = "red solid 3px"
                  document.getElementById('spa1').style.display = 'block' 
                 return false;} 
    };
    //  function check()
    // {
    //     document.getElementById("male").reset();    
    // };
    
// timeout before a callback is called

let timeout;

// traversing the DOM and getting the input and span using their IDs

let password = document.getElementById('PassEntry')
let strengthBadge = document.getElementById('StrengthDisp')

// The strong and weak password Regex pattern checker

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

function StrengthChecker(PasswordParameter){
    // We then change the badge's color and text based on the password strength

    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong'
    } else if(mediumPassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = 'blue'
        strengthBadge.textContent = 'Medium'
    } else{
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Weak'
    }

}
password.addEventListener("input", () => {
    strengthBadge.style.display= 'block'
    clearTimeout(timeout);
    timeout = setTimeout(() => StrengthChecker(password.value), 500);
    if(password.value.length !== 0){
        strengthBadge.style.display != 'block'
    } else{
        strengthBadge.style.display = 'none'
    }
 if(password!=entry)
 {
    alert("YOUR password")
 }   

});
        
