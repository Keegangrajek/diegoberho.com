function displayOutsideBoxToggle() {
    var element = document.getElementsByClassName("stack-top");
    element[0].classList.toggle("display-box");
    var elementTwo = document.getElementsByClassName("dropdown");
    elementTwo[0].classList.toggle("display-dropdown");
    elementTwo[0].classList.toggle("display-dropdown-not");
    console.log("happened");
}

// If hovering over link, show dropdown and box
// If hovering over drop-down or box show dropdown
// If not hovering over drop-down or box do not show dropdown

// Ok this works I just have to fix the spamming to the console.