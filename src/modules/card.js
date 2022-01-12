import renderCart from "./renderCart"
import postData from "./postData"

const cart = () => {     //инкапсуляция кода, изолирование кода в функци
    console.log(document) //глобалльный бъект document

    const cartBtn = document.getElementById('cart')   //метод ищет первый элемент с id cart только в объекте document
    const cartModat = document.querySelector('.cart')     //#-инедтификатор   .-класс , если теги то не добавляем другие символы
    const cartCloseBtn = cartModat.querySelector('.cart-close')     // ищем в объекте cartModat
    const cartTotal = cartModat.querySelector('.cart-total > span')    
    const cartSendBtn = cartModat.querySelector('.cart-confirm')    
    const goodsWrapper = document.querySelector('.goods')
    const cartWrapper = document.querySelector('.cart-wrapper')
    let cartNumber = document.querySelector('.counter')

    

    // cart-total
    // console.log(cartBtn)
    // console.log('cartModat', cartModat)
    console.dir(cartBtn)     //медот console.dir выводит элементы в консоль в виде объектов 

    //cartBtn.style.width = '10px' изменяем высоту
    // cartBtn.onclick = function() {  //Если несколько методов onclick то выполняеться только последний, предыдущие затираються
    //     console.log('clicked')
    //     openCard()
    // }
    const openCard = () => {
        const cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : []

        cartModat.style.display = 'flex'
        // console.log(cart)
        renderCart(cart)
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)     
    }

    const closeCard = () => {
        cartModat.style.display = ''
    }

    cartBtn.addEventListener('click', openCard)
    cartCloseBtn.addEventListener('click', closeCard)


    goodsWrapper.addEventListener('click', (event) => { 
        // console.log('click', event.target)
        if (event.target.classList.contains('btn-primary')) {   //Клик по кнопке В корзину
            const card = event.target.closest('.card')
            const key = card.dataset.key
            const goods = JSON.parse(localStorage.getItem('goods'))
            const cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : []
            const goodItem = goods.find((item) => {
                return item.id === +key
            })
            cart.push(goodItem)
            localStorage.setItem('cart', JSON.stringify(cart))
            
            // let cartNumbNow = String(JSON.parse(localStorage.cart).length)
            // console.dir(cartNumber)
            cartNumber.innerHTML = String(JSON.parse(localStorage.cart).length)
            // console.log(cart)
        }
    })

    cartWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : [] 
            const card = event.target.closest('.card')
            const key = card.dataset.key
            
            const index = cart.findIndex((item) => {
                return item.id === +key
            })
            // console.log(index)
            cart.splice(index, 1)

            localStorage.setItem('cart', JSON.stringify(cart)) 
            cartNumber.innerHTML = String(JSON.parse(localStorage.cart).length)

            renderCart(cart)
            cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)  
        }
    })
    
    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : [] 

            postData(cart).then(() => {
                localStorage.removeItem('cart')
                renderCart([])
                cartTotal.textContent = 0
            })
    })
}

export default cart