//main tags
let fnamev = document.getElementById("fname");
let lnamev = document.getElementById("lname");
let emailv = document.getElementById("email");
let cityv = document.getElementById("city");
let zipv = document.getElementById("zip");
let feedbackv = document.getElementById("showp");
//span tag
let fnameE = document.getElementById("fnameE");
let lnameE = document.getElementById("lnameE");
let emailE = document.getElementById("emailE");
let cityE = document.getElementById("cityE");
let zipE = document.getElementById("zipE");
let feedbackE = document.getElementById("feedbackE");

    // console.log("Hello");


function validateFName() {
    fnameE.innerHTML = "";
    let fname = fnamev.value;
    if (fname=="") {
        fnameE.innerHTML = "<b>Enter a valid First Name.</b>";
    }
}
function validateLName() {
    lnameE.innerHTML = "";
    let lname = lnamev.value;
    if (lname=="") {
        lnameE.innerHTML = "<b>Enter a valid Last Name.</b>";
    }
}
function validateEmail() {
    emailE.innerHTML = "";
    let email = emailv.value;
    let ss=email.substring(email.indexOf("@")+1);
    if (email=="") {
        emailE.innerHTML = "<b>This Field is Required.</b>";
    }
    else if (!email.includes("@") || ss===""){
        emailE.innerHTML = "<b>Invaild Email Id</b>";
    }
}
function validateCity() {
    cityE.innerHTML = "";
    let city = cityv.value;
    if (city=="") {
        cityE.innerHTML = "<b>Enter a valid City.</b>";
    }
}
function validateZip() {
    zipE.innerHTML = "";
    let zip = zipv.value;
    if (zip=="") {
        zipE.innerHTML = "<b>Enter a valid Zip code.</b>";
    }
}
function validateFeedback() {
    feedbackE.innerHTML = "";
    let feedback = feedbackv.value;
    if (feedback=="") {
        feedbackE.innerHTML = "<b>Enter a valid Feedback.</b>";
    }
}