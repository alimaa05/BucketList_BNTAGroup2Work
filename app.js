// dark mode button //
darkModeButton = document.getElementById("dark-mode-button")

handleButtonClick = function(){
    document.body.style.backgroundColor = "#091d1e"
    document.body.style.color = "#aaaaaa"
}

darkModeButton.addEventListener("click", handleButtonClick)

//light mode button // 

lightModeButton=document.getElementById('light-mode-button')
handleButtonClick= function(){
    document.body.style.backgroundColor="#d0efff"
    document.body.style.color="black"
}
lightModeButton.addEventListener("click",handleButtonClick) 

//Navbar//try2//

const mobileMenu= document.getElementById("mobile-menu-id")
    nav= document.querySelector("nav")
    mobileExit= document.getElementById("mobile-exit-id")
mobileMenu.addEventListener('click',() => {
    nav.classList.add('menu');
})
mobileExit.addEventListener('click',()=>{
    nav.classList.remove('menu');
})


