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