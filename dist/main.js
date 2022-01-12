/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/card */ \"./src/modules/card.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\n \r\n\r\n(0,_modules_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/card.js":
/*!*****************************!*\
  !*** ./src/modules/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\n\r\nconst cart = () => {     //инкапсуляция кода, изолирование кода в функци\r\n    console.log(document) //глобалльный бъект document\r\n\r\n    const cartBtn = document.getElementById('cart')   //метод ищет первый элемент с id cart только в объекте document\r\n    const cartModat = document.querySelector('.cart')     //#-инедтификатор   .-класс , если теги то не добавляем другие символы\r\n    const cartCloseBtn = cartModat.querySelector('.cart-close')     // ищем в объекте cartModat\r\n    const cartTotal = cartModat.querySelector('.cart-total > span')    \r\n    const cartSendBtn = cartModat.querySelector('.cart-confirm')    \r\n    const goodsWrapper = document.querySelector('.goods')\r\n    const cartWrapper = document.querySelector('.cart-wrapper')\r\n    let cartNumber = document.querySelector('.counter')\r\n\r\n    \r\n\r\n    // cart-total\r\n    // console.log(cartBtn)\r\n    // console.log('cartModat', cartModat)\r\n    console.dir(cartBtn)     //медот console.dir выводит элементы в консоль в виде объектов \r\n\r\n    //cartBtn.style.width = '10px' изменяем высоту\r\n    // cartBtn.onclick = function() {  //Если несколько методов onclick то выполняеться только последний, предыдущие затираються\r\n    //     console.log('clicked')\r\n    //     openCard()\r\n    // }\r\n    const openCard = () => {\r\n        const cart = localStorage.getItem('cart') ? \r\n                JSON.parse(localStorage.getItem('cart')) : []\r\n\r\n        cartModat.style.display = 'flex'\r\n        // console.log(cart)\r\n        ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n        cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n            return sum + goodItem.price\r\n        }, 0)     \r\n    }\r\n\r\n    const closeCard = () => {\r\n        cartModat.style.display = ''\r\n    }\r\n\r\n    cartBtn.addEventListener('click', openCard)\r\n    cartCloseBtn.addEventListener('click', closeCard)\r\n\r\n\r\n    goodsWrapper.addEventListener('click', (event) => { \r\n        // console.log('click', event.target)\r\n        if (event.target.classList.contains('btn-primary')) {   //Клик по кнопке В корзину\r\n            const card = event.target.closest('.card')\r\n            const key = card.dataset.key\r\n            const goods = JSON.parse(localStorage.getItem('goods'))\r\n            const cart = localStorage.getItem('cart') ? \r\n                JSON.parse(localStorage.getItem('cart')) : []\r\n            const goodItem = goods.find((item) => {\r\n                return item.id === +key\r\n            })\r\n            cart.push(goodItem)\r\n            localStorage.setItem('cart', JSON.stringify(cart))\r\n            \r\n            // let cartNumbNow = String(JSON.parse(localStorage.cart).length)\r\n            // console.dir(cartNumber)\r\n            cartNumber.innerHTML = String(JSON.parse(localStorage.cart).length)\r\n            // console.log(cart)\r\n        }\r\n    })\r\n\r\n    cartWrapper.addEventListener('click', (event) => {\r\n        if (event.target.classList.contains('btn-primary')) {\r\n            const cart = localStorage.getItem('cart') ? \r\n                JSON.parse(localStorage.getItem('cart')) : [] \r\n            const card = event.target.closest('.card')\r\n            const key = card.dataset.key\r\n            \r\n            const index = cart.findIndex((item) => {\r\n                return item.id === +key\r\n            })\r\n            // console.log(index)\r\n            cart.splice(index, 1)\r\n\r\n            localStorage.setItem('cart', JSON.stringify(cart)) \r\n            cartNumber.innerHTML = String(JSON.parse(localStorage.cart).length)\r\n\r\n            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n            cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n            return sum + goodItem.price\r\n        }, 0)  \r\n        }\r\n    })\r\n    \r\n    cartSendBtn.addEventListener('click', () => {\r\n        const cart = localStorage.getItem('cart') ? \r\n                JSON.parse(localStorage.getItem('cart')) : [] \r\n\r\n            ;(0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n                localStorage.removeItem('cart')\r\n                ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([])\r\n                cartTotal.textContent = 0\r\n            })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://ozon/./src/modules/card.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\n\nconst catalog = () => {\n    const btnCatalog = document.querySelector('.catalog-button > button')\n    const catalogModat = document.querySelector('.catalog')\n    const catalogModatItem = document.querySelectorAll('.catalog li')\n    // const catalogSale = document.querySelector('.filter-check_checkmark')\n   \n  \n    // console.dir('catalogSale', catalogSale) \n    let isOpen = false\n\n    btnCatalog.addEventListener('click', () => {\n        // console.log('modal')\n        isOpen = !isOpen\n        if (isOpen) {\n            catalogModat.style.display = 'block'\n        } else {\n            catalogModat.style.display = ''\n        }\n        \n    })\n\n    catalogModatItem.forEach(item => {\n        item.addEventListener('click', () => {\n            const text = item.textContent\n        // console.log(text)\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text))\n        })\n        })\n    })\n\n    // catalogSale.addEventListener('click', () => {\n    //     //  console.log(event)\n    //      getData().then((data) => {\n    //         renderGoods(saleFilter(data))\n    //      })\n\n    // })\n    \n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n\n//# sourceURL=webpack://ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst filter = () => {\r\n    const priseMax = document.getElementById('max')\r\n    const priseMin = document.getElementById('min')\r\n    const ckeckboxInput = document.getElementById('discount-checkbox')\r\n    const ckeckboxSpan = document.querySelector('.filter-check_checkmark')\r\n  \r\n    \r\n    priseMin.addEventListener('input', () => {\r\n        priseMin.addEventListener('input', () => {\r\n            console.log(priseMin.value)\r\n\r\n            ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n                ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, ckeckboxInput.checked), priseMin.value, priseMax.value))\r\n            })\r\n        })\r\n        \r\n        // console.log(priseMin.value)\r\n        // console.log(priseMax.value)\r\n    })\r\n\r\n    priseMax.addEventListener('input', () => {\r\n        console.log(priseMax.value)\r\n\r\n        priseMax.addEventListener('input', () => {\r\n            ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n                ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, ckeckboxInput.checked), priseMin.value, priseMax.value))\r\n            })\r\n        })\r\n        \r\n    })\r\n\r\n    ckeckboxInput.addEventListener('change', () => {\r\n        console.log('change')\r\n        console.log(ckeckboxInput.checked) \r\n        if (ckeckboxInput.checked) {\r\n            ckeckboxSpan.classList.add('checked')\r\n        } else {\r\n            ckeckboxSpan.classList.remove('checked')\r\n        }\r\n        \r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, ckeckboxInput.checked), priseMin.value, priseMax.value))\r\n            // renderGoods(saleFilter(data, ckeckboxInput.checked))\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n//# sourceURL=webpack://ozon/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"saleFilter\": () => (/* binding */ saleFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\n    // console.log(goods)\n    return goods.filter((goodsItem) => {\n        return goodsItem.title.toLowerCase().includes(value.toLowerCase())   //includes ищет совпадение по подстроке\n    })\n}\n\nconst categoryFilter = (goods, value) => {\n    // console.log(goods)\n    return goods.filter((goodsItem) => {\n        return goodsItem.category === value\n    })\n}\n\nconst saleFilter = (goods, value) => {\n    \n    return goods.filter((goodsItem) => {\n        // console.log('value', value)\n        if (value) {\n            return goodsItem.sale === true\n        } else {\n            return goodsItem\n        }\n        \n    })\n}\n\nconst priceFilter = (goods, min, max) => {\n    \n    return goods.filter((goodsItem) => {\n        if (min === '' && max === '') {\n            return goodsItem\n        } else if (min !== '' && max !== '') {\n            return goodsItem.price > +min && goodsItem.price < +max \n        }\n         else if (min !== '' && max === '') {\n            return goodsItem.price > +min\n        }\n        else if (min === '' && max !== '') {\n            return goodsItem.price < +max\n        }\n\n\n        return goodsItem.sale === true\n    })\n}\n\n\n\n\n\n// export default searchFilter\n\n//# sourceURL=webpack://ozon/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (str) => {\n    //console.log(str)\n    return fetch('https://test-ozon-d244c-default-rtdb.firebaseio.com/goods.json')\n    .then((response) => {\n        return response.json()\n    })\n    // .then((data) => {\n    //     console.log(data)\n    // })\n\n    // .then(response => response.json())\n    // .then(json => console.log(json))\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\nconst load = () => {\r\n    //console.log(\"second web212 \")\r\n    // console.log(getData())\r\n\r\n    \r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        //console.log(data)\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\r\n    })\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://ozon/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = (cart) => {\n    //console.log(str)\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\n        method: 'POST',\n        body: JSON.stringify(cart),\n            // {\n        // title: \"Игра Onrush (PS4 Sony)123\",\n\t\t// price: 1794,\n\t\t// sale: true,\n\t\t// img: \"https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg\",\n\t\t// category: \"Игры и софт\"\n        // }),\n        headers: {\n            'Content-type': 'application/json; charset=UTF-8' \n        },\n    })\n    .then((response) => {\n        return response.json()\n    })\n    .then((data) => {\n        console.log(data)\n    })\n    // .then(response => response.json())\n    // .then(json => console.log(json))\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://ozon/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\n    \n    const cartWrapper = document.querySelector('.cart-wrapper')\n    console.log(cartWrapper)\n    // localStorage.setItem('goods', JSON.stringify(goods))\n    console.log('renderCart')\n    cartWrapper.innerHTML = ''\n    if (goods.length === 0) {\n        cartWrapper.insertAdjacentHTML('beforeend', `\n                <div id=\"cart-empty\">\n\t\t\t\t\tВаша корзина пока пуста\n\t\t\t\t</div>\n        `)\n    } else {\n        \n    goods.forEach((goodsItem) => {\n        // console.log('goodsItem.id', goodsItem);\n        cartWrapper.insertAdjacentHTML('beforeend', `\n      \n        <div class=\"card\" data-key=\"${goodsItem.id}\">\n            ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\n            <div class=\"card-img-wrapper\">\n                <span class=\"card-img-top\"\n                    style=\"background-image: url('${goodsItem.img}')\"></span>\n            </div>\n            <div class=\"card-body justify-content-between\"> \n                <div class=\"card-price\">${goodsItem.price} ₽</div>\n                <h5 class=\"card-title\">${goodsItem.title}</h5>\n                <button class=\"btn btn-primary\">Удалить</button>\n            </div>\n        </div>\n    \n        `)\n    }) \n    }\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n//# sourceURL=webpack://ozon/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\n    \n    const goodsWrapper = document.querySelector('.goods')\n\n    localStorage.setItem('goods', JSON.stringify(goods))\n\n    goodsWrapper.innerHTML = ''\n        \n    goods.forEach((goodsItem) => {\n        // console.log('goodsItem.id', goodsItem);\n        goodsWrapper.insertAdjacentHTML('beforeend', `\n        <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n        <div class=\"card\" data-key=\"${goodsItem.id}\">\n            ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\n            <div class=\"card-img-wrapper\">\n                <span class=\"card-img-top\"\n                    style=\"background-image: url('${goodsItem.img}')\"></span>\n            </div>\n            <div class=\"card-body justify-content-between\">\n                <div class=\"card-price\">${goodsItem.price} ₽</div>\n                <h5 class=\"card-title\">${goodsItem.title}</h5>\n                <button class=\"btn btn-primary\">В корзину</button>\n            </div>\n        </div>\n    </div>\n        `)\n    })\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://ozon/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\n\nconst search = () => {\n    console.log('search')\n    const searchInput = document.querySelector('.search-wrapper_input')\n    \n    searchInput.addEventListener('input', (event) => {\n        // console.log(event)\n        const value = event.target.value\n        // console.log(value)\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value))\n        })\n   })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n\n//# sourceURL=webpack://ozon/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;