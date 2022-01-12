export const searchFilter = (goods, value) => {
    // console.log(goods)
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())   //includes ищет совпадение по подстроке
    })
}

export const categoryFilter = (goods, value) => {
    // console.log(goods)
    return goods.filter((goodsItem) => {
        return goodsItem.category === value
    })
}

export const saleFilter = (goods, value) => {
    
    return goods.filter((goodsItem) => {
        // console.log('value', value)
        if (value) {
            return goodsItem.sale === true
        } else {
            return goodsItem
        }
        
    })
}

export const priceFilter = (goods, min, max) => {
    
    return goods.filter((goodsItem) => {
        if (min === '' && max === '') {
            return goodsItem
        } else if (min !== '' && max !== '') {
            return goodsItem.price > +min && goodsItem.price < +max 
        }
         else if (min !== '' && max === '') {
            return goodsItem.price > +min
        }
        else if (min === '' && max !== '') {
            return goodsItem.price < +max
        }


        return goodsItem.sale === true
    })
}





// export default searchFilter