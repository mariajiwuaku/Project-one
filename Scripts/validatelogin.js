try{
    function validatelogin(){
        let email = document.forms.login.email.value;
        let password = document.forms.login.password.value;

        if(!email){
            document.getElementById('emailErr').innerHTML= "<br>Input your email";
            document.forms.login.email.focus();
            return false;

        }
       
        if(!password){
            document.getElementById('passwordErr').innerHTML= "<br> Input your password";
            document.forms.login.password.focus();
            return false;

        }
        
        
    }
    function validateemail(){
        
    }
    function validatepassword(){
        let namepattern = /^[A-Za-z0-9]*$/;
        let password = document.forms.login.password.value;
        if(password){
            let x = namepattern.test(password);
            if(x == false){
                document.getElementById('passwordErr').innerHTML = "<br> Password contains only letters and numbers";
                document.forms.login.password.focus();
            }
            else{
                document.getElementById('passwordErr').innerHTML= "";
                document.forms.login.password.style.borderColor ='green';
            }
        }    
    }

}
catch(err){
    window.alert(err.message);

}
