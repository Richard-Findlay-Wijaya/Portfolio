var nama = document.getElementById("inputNama");
var username = document.getElementById("inputUsername");
var password = document.getElementById("inputPassword");
var genderPria = document.getElementById("genderPria");
var genderWanita = document.getElementById("genderWanita");
var tanggal = document.getElementById("inputTanggal");
var bulan = document.getElementById("inputBulan");
var tahun = document.getElementById("inputTahun");
var email = document.getElementById("inputEmail");

function validate(){
    errornama.innerHTML="";
    errorusername.innerHTML="";
    errorpassword.innerHTML="";
    errorgender.innerHTML="";
    errorlahir.innerHTML="";
    erroremail.innerHTML="";

    
    var date = tanggal.options[tanggal.selectedIndex].text;
    var mon = bulan.options[bulan.selectedIndex].text;
    var year = tahun.options[tahun.selectedIndex].text;

    var flag = true;

    if(nama.value == ""){
        flag = false;
        errornama.innerHTML="Nama tidak boleh kosong";
    }
    if(username.value == ""){
        flag = false;
        errorusername.innerHTML="Username tidak boleh kosong";
    }
    if(password.value == ""){
        flag = false;
        errorpassword.innerHTML="Password tidak boleh kosong";
    }
    else if(password.value.length < 8){
        flag = false;
        errorpassword.innerHTML="Password minimal 8 huruf/angka";
    }
    if(!genderPria.checked && !genderWanita.checked){
        flag = false;
        errorgender.innerHTML = "Harus dipilih";
    }
    if(date == "Tanggal" || mon == "Bulan" || year == "Tahun"){
        flag = false;
        errorlahir.innerHTML = "Tanggal lahir tidak sesuai";
    }
    if(email.value == ""){
        flag = false;
        erroremail.innerHTML = "Email tidak boleh kosong";
    }
    else if(!email.value.includes("@") || !email.value.endsWith(".com")){
        flag = false;
        erroremail.innerHTML = "email harus ada @ dan berakhiran .com";
    }

    if(flag==true){
        let gender = "";
        if(genderPria.checked) gender="Pria"
        else if(genderWanita) gender="Wanita"

        if(confirm(`
        Apakah kamu yakin dengan datanya?

        Nama               : ${nama.value}
        Username        : ${username.value}
        Password         : ${password.value}
        Jenis Kelamin  : ${gender}
        Tanggal Lahir  : ${date} ${mon} ${year}
        Email               : ${email.value}
        `)){
            alert("Selamat Bergabung!");

            location.href = "index.html";
        }else{
            alert("Registrasi gagal");
        }
    }

}