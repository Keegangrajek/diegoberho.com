var trueOrFalse = false;

document.addEventListener('DOMContentLoaded', () => {
    trueOrFalse = false;
});

function ani() {
    if (!trueOrFalse) {
        trueOrFalse = true;
        document.getElementById('img').className = 'classname';
        console.log("Boolean Check 1");
        return;
    }
    if (trueOrFalse) {
        trueOrFalse = false;
        document.getElementById('img').className = 'classnamenot';
        console.log("Boolean Check 1");
        return;
    }
}