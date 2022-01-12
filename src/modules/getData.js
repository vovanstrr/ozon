const getData = (str) => {
    //console.log(str)
    return fetch('https://test-ozon-d244c-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        return response.json()
    })
    // .then((data) => {
    //     console.log(data)
    // })

    // .then(response => response.json())
    // .then(json => console.log(json))
}

export default getData