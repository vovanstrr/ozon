import getData from "./getData"
import renderGoods from "./renderGoods"
import { searchFilter } from "./filters"


const search = () => {
    console.log('search')
    const searchInput = document.querySelector('.search-wrapper_input')
    
    searchInput.addEventListener('input', (event) => {
        // console.log(event)
        const value = event.target.value
        // console.log(value)
        getData().then((data) => {
            renderGoods(searchFilter(data, value))
        })
   })
}

export default search
