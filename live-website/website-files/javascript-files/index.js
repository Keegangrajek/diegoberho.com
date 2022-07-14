const navbarHoverEffects = false;

var elementOneGroupContact;
var elementTwoGroupContact;
var mobileNavbarState; // Open = true; Closed = false;

document.addEventListener('DOMContentLoaded', () => {  
    elementOneGroupContact = document.getElementsByClassName("header-link-div-contact");
    elementTwoGroupContact = document.getElementsByClassName("header-link-contact-dropdown");
    mobileNavbarState = false; // Open = true; Closed = false;
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

function toggleMobileNavbar() {
    var elm = document.getElementsByClassName("header-link-mobilemenu-dropdown");
    try {
        if (!mobileNavbarState) {
            console.log("uh-oh2");
            console.log(mobileNavbarState);
            elm[0].classList.toggle("header-link-mobilemenu-dropdown-display-not");
            elm[0].classList.toggle("header-link-mobilemen-dropdown-display-yes");
            document.getElementById('span-1').className = 'mobile-menu-bars-span-animation-1';
            document.getElementById('span-2').className = 'mobile-menu-bars-span-animation-2';
            document.getElementById('span-3').className = 'mobile-menu-bars-span-animation-3';
            mobileNavbarState = true;
            return;
        } 
        if (mobileNavbarState) {
            console.log("uh-oh1");
            console.log(mobileNavbarState);
            elm[0].classList.toggle("header-link-mobilemenu-dropdown-display-not");
            elm[0].classList.toggle("header-link-mobilemenu-dropdown-display-yes");
            document.getElementById('span-1').className = 'mobile-menu-bars-span-animation-1-not';
            document.getElementById('span-2').className = 'mobile-menu-bars-span-animation-2-not';
            document.getElementById('span-3').className = 'mobile-menu-bars-span-animation-3-not';
            mobileNavbarState = false;
            return;
        }
    } catch {
        console.log("error");
    }
}

/* // This doesn't work right now I will try and fix this.
var element = document.getElementsByClassName('go-back-button');
element[0].setAttribute('href', document.referrer);

element.onclick = function() {
    window.history.go(-1);
    return false;
} */