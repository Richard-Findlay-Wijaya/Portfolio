let feedback = document.getElementById("inputFeedback");

function validateInput(){
    if(feedback.value == ""){
        alert("Feedback tidak boleh dibiarkan kosong!");
    }
    else{
        alert("Terimakasih atas feedback yang diberikan!");
    }

    feedback.value = "";
}