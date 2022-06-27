const navbarHoverEffects = false;

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

function purchasePaintingImageSelection(num1, num2){
    var elm = document.getElementsByClassName("bb5b-b-" + num1);
    var elm2 = document.getElementsByClassName("a-link-b-"+num1+ "" +num2);
    var elm3 = document.getElementsByClassName("bb5b-picture-"+num1);
    for(index = 0; index < elm[0].children.length; index++){
        document.getElementsByClassName("a-link-b-"+num1+ "" +index)[0].classList.remove("photo-selection-clicked-button");
    }
    for(index = 0; index < elm[0].children.length; index++){
        elm3[0].classList.remove("ps-picture-"+num1+""+index);
    }
    elm2[0].classList.add("photo-selection-clicked-button");
    elm3[0].classList.add("ps-picture-"+num1+""+num2);
    return;
}

function originalsPaintingImageSelection(num1, num2){
    var elm = document.getElementsByClassName("o-bb5b-" + num1);
    var elm2 = document.getElementsByClassName("a-link-"+num1+ "" +num2);
    var elm3 = document.getElementsByClassName("o-picture-"+num1);
    for(index = 0; index < elm[0].children.length; index++){
        document.getElementsByClassName("a-link-"+num1+ "" +index)[0].classList.remove("photo-selection-clicked-button");
    }
    for(index = 0; index < elm[0].children.length; index++){
        elm3[0].classList.remove("o-picture-"+num1+""+index);
    }
    elm2[0].classList.add("photo-selection-clicked-button");
    elm3[0].classList.add("o-picture-"+num1+""+num2);
    return;
}

var mobileNavbarState = "false"; // Open = true; Closed = false;

function toggleMobileNavbar() {
    var elm = document.getElementsByClassName("");
    var elm2 = document.getElementsByClassName(""); 
    if (mobileNavbarState == false) {
        
    } else if (mobileNavbarState == true) {

    } else {
        console.log("uh-oh");
    }

}

/* // This doesn't work right now I will try and fix this.
var element = document.getElementsByClassName('go-back-button');
element[0].setAttribute('href', document.referrer);

element.onclick = function() {
    window.history.go(-1);
    return false;
} */