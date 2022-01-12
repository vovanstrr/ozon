import getData from "./getData"
import renderGoods from "./renderGoods"
import { searchFilter } from "./filters"
import { categoryFilter, saleFilter } from "./filters"

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button')
    const catalogModat = document.querySelector('.catalog')
    const catalogModatItem = document.querySelectorAll('.catalog li')
    // const catalogSale = document.querySelector('.filter-check_checkmark')
   
  
    // console.dir('catalogSale', catalogSale) 
    let isOpen = false

    btnCatalog.addEventListener('click', () => {
        // console.log('modal')
        isOpen = !isOpen
        if (isOpen) {
            catalogModat.style.display = 'block'
        } else {
            catalogModat.style.display = ''
        }
        
    })

    catalogModatItem.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.textContent
        // console.log(text)
        getData().then((data) => {
            renderGoods(categoryFilter(data, text))
        })
        })
    })

    // catalogSale.addEventListener('click', () => {
    //     //  console.log(event)
    //      getData().then((data) => {
    //         renderGoods(saleFilter(data))
    //      })

    // })
    
    
}

export default catalog
