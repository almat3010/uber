let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.menu-list')

hamburger.addEventListener('click',()=>{
    if(hamburger.className.includes('hamburger-active')){
        hamburger.className = 'hamburger'
        menu.className = 'menu-list'
    }else{
        hamburger.className += ' hamburger-active'
        menu.className += ' menu-list-active'
    }
})