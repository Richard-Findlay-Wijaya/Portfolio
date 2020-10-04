let thread = document.getElementById("inputThread");

function validateInput(){
    if(thread.value == ""){
        alert("Thread masih kosong!");
    }
    else{
        alert("Thread berhasil dibuat!");
    }

    thread.value ="";
}