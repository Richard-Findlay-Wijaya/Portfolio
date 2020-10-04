let error = document.querySelectorAll("span");


let btnSubmit = document.getElementById("btn-submit");

let validate = function(e){
    e.preventDefault();

    let fullname = document.getElementById("full-name");
    let email = document.getElementById("emailTxt");
    let username = document.getElementById("usernameTxt");
    let password = document.getElementById("passTxt");
    let confirmPass = document.getElementById("conPass");
    let male = document.getElementById("genderMale");
    let female = document.getElementById("genderFemale");
    let qty = document.getElementById("quantity");
    let address = document.getElementById("addressTxt");
    let checkbox = document.getElementById("agreement");

    // letters only
    let lettersOnly = (fullname) => {
        let angka = ['1','2','3','4','5','6','7','8','9','0']
            for(x of angka){
                if(fullname.includes(x)) return true;
            }
            return false
        }

    let isSymbol2 = (fullname) => {
            let symbol = ['~','!','#','$','%','^','&','*','(',')','-','_','+','=','|',';','>','<','?','/','@','.']
                for(s of symbol){
                    if(fullname.includes(s)) return true;
            }
            return false
        }
    // letters only

    //alphanumeric
    let numeric = (password) => {
        let angka = ['1','2','3','4','5','6','7','8','9','0']
            for(x of angka){
                if(password.includes(x)) return true;
            }
            return false
        }
    
    let letters = (password) => {
            let huruf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
                for(x of huruf){
                    if(password.includes(x)) return true;
                }
                return false
            }
    
    let isSymbol1 = (password) => {
                let symbol = ['~','!','#','$','%','^','&','*','(',')','-','_','+','=','|',';','>','<','?','/','@','.']
                    for(s of symbol){
                        if(password.includes(s)) return true;
                }
                return false
            }
    //alphanumeric
    
    let isSymbol = (email) => {
    let symbol = ['~','!','#','$','%','^','&','*','(',')','-','_','+','=','|',';','>','<','?','/']
        for(s of symbol){
            if(email.includes(s)) return true;
        }
        return false
    }

    let result = true;

    if(fullname.value.length == 0)
    {
        error[0].innerHTML = "Name must be filled!";
        result = false;
        return;
    } 
    else error[0].innerHTML = "";

    if(lettersOnly(fullname.value))
    {
        error[0].innerHTML = "Name must consist of letters only!";
        result = false;
        return;
    } 
    else error[0].innerHTML = "";

    if(isSymbol2(fullname.value))
    {
        error[0].innerHTML = "Name must consist of letters only (no Symbols)!";
        result = false;
        return;
    } 
    else error[0].innerHTML = "";

    if(email.value.length == 0){
        error[1].innerHTML = "Email must be filled!";
        result = false;
        return;
    }
    else error[1].innerHTML = "";

    if(!email.value.includes("@") || !email.value.includes(".")){
        error[1].innerHTML = "Email must contains '@' and '.'!";
        result = false;
        return;
    }
    else error[1].innerHTML = "";

    if(email.value.includes("@.") || email.value.includes(".@")){
        error[1].innerHTML = "'@' and '.' cannot be side by side!";
        result = false;
        return;
    }
    else error[1].innerHTML = "";

    if(isSymbol(email.value)){
        error[1].innerHTML = "No other Symbols!";
        result = false;
        return;
    }
    else error[1].innerHTML = "";

    if(username.value.length <= 6){
        error[2].innerHTML = "Username must be greater than 6 characters";
        result = false;
        return;
    }
    else error[2].innerHTML = "";

    if(username.value.includes(" ")){
        error[2].innerHTML = "Username cannot contain space!";
        result = false;
        return;
    }
    else error[2].innerHTML = "";

    if(password.value.length <= 8){
        error[3].innerHTML = "Passwords must be greater than 8 characters!";
        result = false;
        return;
    }
    else error[3].innerHTML = "";

    //alphanumeric
    if(isSymbol1(password.value) || !letters(password.value) || !numeric(password.value)){
        error[3].innerHTML = "Passwords must be alphanumeric!";
        result = false;
        return;
    }
    else error[3].innerHTML = "";
    //alphanumeric

    if(confirmPass.value != password.value){
        error[4].innerHTML = "Must be the same as Password!";
        result = false;
        return;
    }
    else error[4].innerHTML = "";
    
    if(!male.checked && !female.checked){
        error[5].innerHTML = "Gender must be chosen!";
        result = false;
        return;
    }
    else error[5].innerHTML = "";

    if(qty.value <= 0){
        error[6].innerHTML = "Must be greater than 0!";
        result = false;
        return;
    }
    else error[6].innerHTML = "";

    if(!address.value.endsWith(" Street")){
        error[7].innerHTML = "Must ends with ‘ Street’ (case sensitive)!";
        result = false;
        return;
    }
    else error[7].innerHTML = "";

    if(!checkbox.checked){
        error[8].innerHTML = "Must be checked!";
        result = false;
        return;
    }
    else error[8].innerHTML = "";

    if(result)
    {
        fullname.value = "";
        email.value = "";
        password.value = "";
        username.value ="";
        confirmPass.value = "";
        male.checked = false;
        female.checked = false;
        address.value = "";
        qty.value = "";
        checkbox.checked = false;
        alert("Successfully Added product!");
    }

}

btnSubmit.addEventListener("click", e => validate(e));