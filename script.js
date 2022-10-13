var email = document.getElementById("email").value;
var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var r = 0;
function validate() {
    var branch =document.getElementById("branchName")
    var branchVal =document.getElementById("branchName").value
    var user = document.getElementById("fname").value;
    var spa1  = document.getElementById('sp1')
    var user1 = document.getElementById("fname");
    var email = document.getElementById("email").value;
    var email2 = document.getElementById("email");
    var entry = document.getElementById("cpass").value;
    var entry1 = document.getElementById("cpass");
    var passwor = document.getElementById('Pass');
    var passwo = document.getElementById('Pass').value;
    var phone = document.getElementById('phone').value
    var phone1 = document.getElementById('phone')
     var rege = /^[0-9]{10}/
    var re = /^[a-zA-Z]/;
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     var password =/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;
 if (re.test(user) ) {
    //  alert("done");
         user1.style.border = "green solid 3px"
         document.getElementById('sp').style.display = 'none' ;     }
     else if(user == " "){
          user1.style.border = "red solid 3px"
          document.getElementById('sp').style.display = 'block' ;
          r++;
           }
    else{
        user1.style.border = "red solid 3px"
        document.getElementById('sp').style.display = 'block' ;
        r++;
    }
 if (reg.test(email) ) {
    //  alert("done");
         email2.style.border = "green solid 3px"
         spa1.style.display = 'none' ;
     }
     else {
         email2.style.border = "red solid 3px"
          spa1.style.display = 'block' ;
          r++ ;
           }
 if (rege.test(phone) ) {
    //  alert("done");
         phone1.style.border = "green solid 3px"

         document.getElementById('sp2').style.display = 'none' ;
     }
     else {
         phone1.style.border = "red solid 3px"
          document.getElementById('sp2').style.display = 'block' ;
          r++;
           }
    if(document.getElementById("female").checked == true || document.getElementById("male").checked == true || document.getElementById("other").checked== true)
    {
        document.getElementById("fs").style.border = "green solid 3px";
    }
    else{
    document.getElementById("fs").style.border = "red solid 3px";
    r++;}
    if(password.test(passwo))
    {
       // passwor.style.border = "green solid 3px"
        document.getElementById('sp2').style.display = 'none' ;
        if(entry != passwo)
        {
            entry1.style.border = "red solid 3px"
            r++
        }
        else
           { entry1.style.border = "green solid 3px"
               }
    }
    else {
        passwor.style.border = "red solid 3px"
         r++;
    }
    if(branchVal == "0")
    {
        document.getElementById("branchError").style.display= "block"
    }
    else{
        document.getElementById("branchError").style.display= "none"

    }
    
           return checkbox();
        };
        function checkbox()
        {
           if(r>=1)
           {
            document.getElementById("alert").style.display = "block"
         //   alert("done")
           }
           else
           {
            // var user = document.getElementById("fname").value;
            // var email = document.getElementById("email").value;
            // var phone = document.getElementById('phone').value;
            document.getElementById("alert1").style.display = "block"
            // console.log(user)
            // console.log(email)
            // console.log(phone)
           }
        };
    

let timeout;
let password = document.getElementById('Pass')
let strength = document.getElementById('Strength')
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

function StrengthChecker(PasswordParameter){

    if(strongPassword.test(PasswordParameter)) {
        strength.style.backgroundColor = "green"
        strength.textContent = 'Strong'
    } else if(mediumPassword.test(PasswordParameter)){
        strength.style.backgroundColor = 'blue'
        strength.textContent = 'Medium'
    } else{
        strength.style.backgroundColor = 'red'
        strength.textContent = 'Weak'
    }

}
password.addEventListener("input", () => {
    strength.style.display= 'block'
    clearTimeout(timeout);
    timeout = setTimeout(() => StrengthChecker(password.value), 500);
    if(password.value.length !== 0){
        strength.style.display != 'block'
    } else{
        strength.style.display = 'none'
    }
 
});
function reset()
{
    document.getElementById("alert1").style.display ="none"

};
function reset1()
{document.getElementById("alert").style.display ="none"};
