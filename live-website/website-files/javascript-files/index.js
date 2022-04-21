const navbarHoverEffects = true;

var elementOneGroupContact;
var elementTwoGroupContact;

document.addEventListener('DOMContentLoaded', () => {  
    elementOneGroupContact = document.getElementsByClassName("header-link-div-contact");
    elementTwoGroupContact = document.getElementsByClassName("header-link-contact-dropdown");
});

function displayOutsideBoxToggle() {
    if(navbarHoverEffects){
        elementOneGroupContact[0].classList.toggle("hover-box-contact-switch-off");
        elementOneGroupContact[1].classList.toggle("hover-box-contact-switch-off");
        elementTwoGroupContact[0].classList.toggle("header-link-contact-dropdown-display");
        elementTwoGroupContact[0].classList.toggle("header-link-contact-dropdown-display-not");
    }
}

var previousNum1 = "default";
var previousNum2 = "default";

function switchPicture(num1, num2) {
    document.getElementsByClassName("picture-box")[num1].classList.toggle("picture-"+num2);
    document.getElementsByClassName("a-link-" + num1 + "" + num2 )[0].classList.add("photo-selection-clicked-button");
    console.log("num1: ("+ num1 +")");
    console.log("num2: ("+ num2 +")");
    console.log("num1 and num2:" + num1 + "" + num2);
    removeOldPicture(previousNum1, previousNum2);
    previousNum1 = num1;
    previousNum2 = num2;
}

function removeOldPicture(num1, num2) {
    if (previousNum1 == "default"){
        document.getElementsByClassName("picture-box")[0].classList.toggle("picture-0");
    } else {
        document.getElementsByClassName("picture-box")[num1].classList.toggle("picture-"+num2);
    } if (previousNum2 == "default") {
        document.getElementsByClassName("a-link-00")[0].classList.remove("photo-selection-clicked-button");
    } else {
        document.getElementsByClassName("a-link-"+num1+num2)[0].classList.remove("photo-selection-clicked-button");
    }
    
}

function purchasePaintingImageSelection(num1, num2){
    var elm = document.getElementsByClassName("bb5b-b-" + num1);
    var elm2 = document.getElementsByClassName("a-link-b-"+num1+ "" +num2);
    var elm3 = document.getElementsByClassName("bb5b-picture-"+num1);
    for(index = 0; index < elm[0].children.length; index++){
        document.getElementsByClassName("a-link-b-"+num1+ "" +index)[0].classList.remove("photo-selection-clicked-button");
    }
    for(index = 0; index < 6; index++){
        elm3[0].classList.remove("ps-picture-"+num1+""+index);
        console.log("happened");
    }
    elm2[0].classList.add("photo-selection-clicked-button");
    elm3[0].classList.add("ps-picture-"+num1+""+num2);
    console.log("ps-picture-"+num1+""+num2);
    return;
}

function originalsPaintingImageSelection(num1, num2){
    console.log("originalsPainting num1 = " + num1 + " num2 = " + num2);
    return;
}

/* // This doesn't work right now I will try and fix this.
var element = document.getElementsByClassName('go-back-button');
element[0].setAttribute('href', document.referrer);

element.onclick = function() {
    window.history.go(-1);
    return false;
} */