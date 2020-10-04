var username = document.getElementById("inputUsername");
var password = document.getElementById("inputPassword");

function validate(){
    errorusername.innerHTML="";
    errorpassword.innerHTML="";

    var flag = true;

    if(username.value == ""){
        flag = false;
        errorusername.innerHTML="Username tidak boleh kosong";
    }
    else if(username.value !== "user"){
        flag = false;
        errorusername.innerHTML="Username yang benar adalah [user]";
    }
    if(password.value == ""){
        flag = false;
        errorpassword.innerHTML="Password harus diisi";
    }
    else if(password.value !== "user12345"){
        flag = false;
        errorpassword.innerHTML="Password yang benar adalah [user12345]";
    }
    if(flag==true){
        alert("Selamat datang "+ username.value);

        location.href = "index.html";
    }
}