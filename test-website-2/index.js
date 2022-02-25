function displayOutsideBoxToggle() {
    var element = document.getElementsByClassName("stack-top");
    element[0].classList.toggle("display-box");
    var elementTwo = document.getElementsByClassName("dropdown");
    elementTwo[0].classList.toggle("display-dropdown");
    elementTwo[0].classList.toggle("display-dropdown-not");
    console.log("happened");
}