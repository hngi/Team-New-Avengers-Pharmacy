const cart = document.querySelector('.cart')
const cartIcon = document.querySelector('.cart-cont') 
const close  =document.querySelector('.close-me')

cartIcon.addEventListener('click',()=>{
    cart.style.display = 'block'
})

close.addEventListener('click',()=>{
    cart.style.display = 'none'
})

console.log(cart,cartIcon)