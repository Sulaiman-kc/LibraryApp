function signUp()                                    
{ 
    var firstName = document.forms["RegForm"]["first_name"].value;               
    var lastName = document.forms["RegForm"]["last_name"].value;               
    var email = document.forms["RegForm"]["email"];    
    var phone = document.forms["RegForm"]["number"].value;  
    var password = document.forms["RegForm"]["password"].value;  
    var confirmPassword = document.forms["RegForm"]["confirm_password"].value;  
   
    if (firstName == "")                                  
    { 
        alert("Please enter your first name"); 
        return false; 
    } 
   
    if (lastName == "")                               
    { 
        alert("Please enter your last name"); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        alert("Please enter a valid e-mail address."); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        return false; 
    } 
    if (phone == "")                           
    { 
        alert("Please enter your mobile number."); 
        return false; 
    }   
    if (!Number.isInteger(Number(phone)))                           
    { 
        alert("Please a valid mobile number."); 
        return false; 
    } 
    if (phone.length != 10)                           
    { 
        alert("Please a valid mobile number."); 
        return false; 
    } 
   
    if (password == "")                        
    { 
        alert("Please enter your password"); 
        return false; 
    } 
    if (password.length < 8)                        
    { 
        alert("Password must contain 8 letters"); 
        return false; 
    } 
   
    if (confirmPassword == "")                        
    { 
        alert("Please enter your confirm Password"); 
        return false; 
    } 
    if (confirmPassword != password)                        
    { 
        alert("Missmatch on confirm password"); 
        return false; 
    } 
    window.location = "/src/views/dashboard.ejs";
    alert("Welcome " + firstName + " " + lastName);
    // return true; 
}
function signIn()
{


    var semail = document.forms["signin"]["semail"];    
    var spassword = document.forms["signin"]["spassword"].value;  



    if (semail.value == "")                                   
    { 
        alert("Please enter a valid e-mail address."); 
        return false; 
    } 
   
    if (semail.value.indexOf("@", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        return false; 
    } 
   
    if (semail.value.indexOf(".", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        return false; 
    } 
    if (spassword == "")                        
    { 
        alert("Please enter your password"); 
        return false; 
    } 
    if (spassword.length < 8)                        
    { 
        alert("Password must contain 8 letters"); 
        return false; 
    } 
    window.location = "/src/views/dashboard.ejs";
    alert("You are successfully signed in");
    // return true;
}
