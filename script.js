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
    var user2 = document.getElementById("pass").value;
    var user3 = document.getElementById("pass");
    var entry = document.getElementById("cpass").value;
    var entry1 = document.getElementById("cpass");
    var re = /^[a-zA-Z]/;
    console.log(email);
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var password = /^(?=,*[0-9])(?=,*[!@#$%^&*])[a-zA-Z0-9]{8,16}$/;
    if (re.test(user)) {
        alert("done");
        console.log(user);
        return true;
    }
    else {
         user1.style.border = "red solid 3px"
         document.getElementById('spa').style.display = 'block' 
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
            if (password.match(entry))
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
    

        
