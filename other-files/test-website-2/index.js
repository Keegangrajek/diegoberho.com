const navbarHoverEffects = true;

var element;
var elementTwo;

document.addEventListener('DOMContentLoaded', () => {
    element = document.getElementsByClassName("stack-top");
    elementTwo = document.getElementsByClassName("dropdown");
});

function displayOutsideBoxToggle() {
    if(navbarHoverEffects) {
        element[0].classList.toggle("display-box");
        elementTwo[0].classList.toggle("display-dropdown");
        elementTwo[0].classList.toggle("display-dropdown-not");
    }
}


////////////////////////////////// SEPARATE CODE (TEST)
/*
    // Elements I am referencing in this logic
    if(elementLink[0].classList.contains('link-hover-true')) {

    } else {

    }
*/
/*
var dropdownActive = true;

// booleanValue should be set to true when hovering over
function hoverCheckAbout(booleanValue, elm) {
    if(dropdownActive) {
        if(!booleanValue){
            document.getElementsByClassName(elm)[0].classList.toggle
        }
    }
    if()
}

function hoverCheckContact(booleanValue, elem) {
    if(dropdownActive) {
        
    }
}

function hoverCheckInstagram(booleanValue, elm) {
    if(dropdownActive) {
        
    }
}

function hoverCheckTickTok(booleanValue, elm) {
    if(dropdownActive) {
        
    }
}
function hoverCheckYouTube(booleanValue, elm) {
    if(dropdownActive) {
        
    }
}

function hoverCheckCart(booleanValue, elm) {
    if(dropdownActive) {
        
    }
}
*/
// Options:
// Check which element is being hovered on (may have a ton/multiple dropdowns) then decide whether to dropdown or not
// I think I should have different hover functions per group, so it doesn't keep calling the same function
// Lets just do this with parameters (hover is true, which element)
// Check which element, if it is in this group, run specific logic for that group (ex. instagram logic)
// How do I identify that the dropdown is active
//  check for a class within dropdown

// If hovering over link, show dropdown and box
// If hovering over drop-down or box show dropdown
// If not hovering over drop-down or box do not show dropdown

// Ok this works I just have to fix the spamming to the console.