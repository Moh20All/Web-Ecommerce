let myElement = document.getElementById("menu");
let myMenu = document.getElementById("my-menu");
let mydrop = document.getElementById("my-drop");
const mediaQuery = window.matchMedia('(max-width: 768px)')
function append() {
    if (myMenu.style.display === 'none' && window.innerWidth < 768) {
        myMenu.style.display = 'block';
    }
    else {
        if (window.innerWidth < 768)
            myMenu.style.display = 'none'
    }
}

// -----------------------------
function dropmenu() {
    if (document.querySelector('.drop-down').style.display == 'block') {
        document.querySelector('.drop-down').style.display = 'none';
    } else {
        document.querySelector('.drop-down').style.display = 'block';
    }
}