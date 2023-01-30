try{
    function validatesignup(){
        let firstname = document.forms.signup.firstname.value;
        let middlename = document.forms.signup.middlename.value;
        let lastname = document.forms.signup.lastname.value;
        let email = document.forms.signup.email.value;
        let phone = document.forms.signup.phone.value;
        let male = document.forms.signup.male.value;
        let female = document.forms.signup.female.value;
        let password = document.forms.signup.password.value;
        let confirmpassword = document.forms.signup.confirmpassword.value;

        if(!firstname){
            document.getElementById('firstnameErr').innerHTML = "<br>Name is required";
            document.forms.signup.firstname.focus();
            return false;
        }
        else{
            document.getElementById('firstnameErr').innerHTML = "";
        }

        if(!lastname){
            document.getElementById('lastnameErr').innerHTML = "<br>Name is required";
            document.forms.signup.lastname.focus();
            return false;
        }
        if(!email){
            document.getElementById('emailErr').innerHTML = "<br>Input your email";
            document.forms.signup.email.focus();
            return false;
        }

        if(!phone){
            document.getElementById('phoneErr').innerHTML = "<br>Name is required";
            document.forms.signup.phone.focus();
            return false;
        }
        if(!password){
            document.getElementById('passwordErr').innerHTML = "<br> Enter your password";
            document.forms.signup.password.focus();
            return false;
        }
        if(!confirmpassword){
            document.getElementById('confirmpasswordErr').innerHTML = "<br>Confirm Password";
            document.forms.signup.password.focus();
            return false;
        }

    }
    function validatefirstname(){
        let namepattern = /^[A-Za-z\s]*$/;
        let firstname = document.forms.signup.firstname.value;
        if(firstname){
            let x = namepattern.test(firstname);
            if(x == false){
                document.getElementById('firstnameErr').innerHTML = "<br> First name contains only letters and white space";
            }
            else{
                document.getElementById('firstnameErr').innerHTML= "";
                document.forms.signup.firstname.style.borderColor ='green';
            }
        }


    }
    function validateemail(){}
}
catch(err){
    window.alert(err.message);
}