import getData from "./getData"
import renderGoods from "./renderGoods"


const load = () => {
    //console.log("second web212 ")
    // console.log(getData())

    
    getData().then((data) => {
        //console.log(data)
        renderGoods(data)
    })
}



export default load