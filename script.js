const open = document.getElementById("navigation")
const close = document.getElementById("menuCloser")
open.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)

// FUNCTION OPEN MENU
function openMenu() {
    open.classList.add("active")
}

// FUNCTION CLOSE MENU

function closeMenu(){
    setTimeout(() => {
        open.classList.remove("active")
    }, 100);
}

// FUNCTION WAITING FOR FULL PAGE LOAD TO SHOW CONTENT

onload=function(){
    document.body.style.visibility="visible"
}