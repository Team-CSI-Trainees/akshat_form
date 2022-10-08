//function validate2() {

  //  var user2 = document.getElementById("lname").value;
  //  var user3 = document.getElementById("lname");
  //  var re = /^[a-zA-Z]/;
  //  if (re.test(user2))
  //   {
  //      alert("done");
  //      console.log(user3);
  //      return true;
  //  }
 //   else 
 //   {
 //        user3.style.border = "red solid 3px"
//              document.getElementById('spa1').style.display = 'block' 
//             return false;}};
function validate()
{
var username = document.getElementById('fname').value;
var  email= document.getElementById('email').value;
var pass = document.getElementById('pass').value;
var cpass= document.getElementById('cpass').value;
var phone = document.getElementById('phone').value;
var usercheck = /^[a-zA-Z. ]{3,30}$/;
var password = /^(?=,*[0-9])(?=,*[!@#$%^&*])[a-zA-Z0-9]{8,16}$/;
var cpassword = /^(?=,*[0-9])(?=,*[!@#$%^&*])[a-zA-Z0-9]{8,16}$/;
var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var mobile = /^[0-9]{10}$/;

if(usercheck.test(username)){
   document.getElementById("spa").innerHTML = " ";
}
else
{document.getElementById("spa").innerHTML = "**Invalid";
return false;}
if(password.test(pass)){
    document.getElementById("spa1").innerHTML = " ";
}
else
{document.getElementById("spa1").innerHTML = "**Invalid ";
return false;}
}