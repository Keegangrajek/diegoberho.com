var showContactContentBoxBoolean;

document.addEventListener('DOMContentLoaded', () => {
    showContactContentBoxBoolean = false;
});

function showContactContentBox() {
    if(showContactContentBoxBoolean == false){
        console.log("Open");
        showContactContentBoxBoolean = true;
        return;
    } if(showContactContentBoxBoolean == true){
        console.log("Close");
        showContactContentBoxBoolean = false;
        return;
    } else {
        console.log("Error Enlisted In showContactContentBox()");
        return;
    }
}

/* function headerLinkContactHoverOn() {
    document.getElementsByClassName('header-link-contact')[0].style.color = "red"
};

function headerLinkContactHoverOff() {
    document.getElementsByClassName('header-link-contact')[0].style.color = "black";
}
 */