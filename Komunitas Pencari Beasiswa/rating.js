var home1 = document.getElementById("home1");
var home2 = document.getElementById("home2");
var home3 = document.getElementById("home3");
var home4 = document.getElementById("home4");
var login1 = document.getElementById("login1");
var login2 = document.getElementById("login2");
var login3 = document.getElementById("login3");
var login4 = document.getElementById("login4");
var regist1 = document.getElementById("regist1");
var regist2 = document.getElementById("regist2");
var regist3 = document.getElementById("regist3");
var regist4 = document.getElementById("regist4");
var feedback1 = document.getElementById("feedback1");
var feedback2 = document.getElementById("feedback2");
var feedback3 = document.getElementById("feedback3");
var feedback4 = document.getElementById("feedback4");
var rating1 = document.getElementById("rating1");
var rating2 = document.getElementById("rating2");
var rating3 = document.getElementById("rating3");
var rating4 = document.getElementById("rating4");
var forum1 = document.getElementById("forum1");
var forum2 = document.getElementById("forum2");
var forum3 = document.getElementById("forum3");
var forum4 = document.getElementById("forum4");

function validate(){
    errorhome.innerHTML="";
    errorlogin.innerHTML="";
    errorregist.innerHTML="";
    errorfeedback.innerHTML="";
    errorrating.innerHTML="";
    errorforum.innerHTML="";

    var flag = true;

    if(!home1.checked && !home2.checked && !home3.checked && !home4.checked){
        flag = false;
        errorhome.innerHTML = "Harus dipilih";
    }
    if(!login1.checked && !login2.checked && !login3.checked && !login4.checked){
        flag = false;
        errorlogin.innerHTML = "Harus dipilih";
    }
    if(!regist1.checked && !regist2.checked && !regist3.checked && !regist4.checked){
        flag = false;
        errorregist.innerHTML = "Harus dipilih";
    }
    if(!feedback1.checked && !feedback2.checked && !feedback3.checked && !feedback4.checked){
        flag = false;
        errorfeedback.innerHTML = "Harus dipilih";
    }
    if(!rating1.checked && !rating2.checked && !rating3.checked && !rating4.checked){
        flag = false;
        errorrating.innerHTML = "Harus dipilih";
    }
    if(!forum1.checked && !forum2.checked && !forum3.checked && !forum4.checked){
        flag = false;
        errorforum.innerHTML = "Harus dipilih";
    }
    if(flag==true){
        alert("Terima kasih atas rating yang diberikan");

        var selection = document.getElementsByClassName("radio-input");
        for(var i=0;i<selection.length;i++)
        selection[i].checked = false;
    }
}