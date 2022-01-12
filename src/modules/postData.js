const postData = (cart) => {
    //console.log(str)
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(cart),
            // {
        // title: "Игра Onrush (PS4 Sony)123",
		// price: 1794,
		// sale: true,
		// img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
		// category: "Игры и софт"
        // }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8' 
        },
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    // .then(response => response.json())
    // .then(json => console.log(json))
}

export default postData