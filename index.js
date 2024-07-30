const btnCart = document.querySelector('.container-icon')
const containerCartProductos = document.querySelector('.container-cart-productos')

btnCart.addEventListener('click', () => { containerCartProductos.classList.toggle('hidden-cart')})