import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter, saleFilter } from "./filters"

const filter = () => {
    const priseMax = document.getElementById('max')
    const priseMin = document.getElementById('min')
    const ckeckboxInput = document.getElementById('discount-checkbox')
    const ckeckboxSpan = document.querySelector('.filter-check_checkmark')
  
    
    priseMin.addEventListener('input', () => {
        priseMin.addEventListener('input', () => {
            console.log(priseMin.value)

            getData().then((data) => {
                renderGoods(priceFilter(saleFilter(data, ckeckboxInput.checked), priseMin.value, priseMax.value))
            })
        })
        
        // console.log(priseMin.value)
        // console.log(priseMax.value)
    })

    priseMax.addEventListener('input', () => {
        console.log(priseMax.value)

        priseMax.addEventListener('input', () => {
            getData().then((data) => {
                renderGoods(priceFilter(saleFilter(data, ckeckboxInput.checked), priseMin.value, priseMax.value))
            })
        })
        
    })

    ckeckboxInput.addEventListener('change', () => {
        console.log('change')
        console.log(ckeckboxInput.checked) 
        if (ckeckboxInput.checked) {
            ckeckboxSpan.classList.add('checked')
        } else {
            ckeckboxSpan.classList.remove('checked')
        }
        
        getData().then((data) => {
            renderGoods(priceFilter(saleFilter(data, ckeckboxInput.checked), priseMin.value, priseMax.value))
            // renderGoods(saleFilter(data, ckeckboxInput.checked))
        })
    })
}

export default filter