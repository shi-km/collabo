function myFunction(){
    var name = document.getElementById("name").value
    var email=document.getElementById("email").value
    var message=document.getElementById("msg").value
    if(name===""||message===""||email===""){
        alert(" Fields cant't be empty!! Please fill in ");
    }

    else {
        alert(" Hi " + name + " we've received your feedback thanks for choosing us to serve you " + ".");
    };
   
};

