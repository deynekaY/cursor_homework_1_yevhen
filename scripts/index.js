let dogPrice = (15.678);

let catPrice = (123.965);

let birdPrice = (90.2345);

let petsSumPrice = (dogPrice + catPrice + birdPrice);

let petsCoinslessPrice = (Math.floor(dogPrice) + Math.floor(catPrice) + Math.floor(birdPrice));

function even_or_odd(petsSumPrice) {
    return Math.floor(petsSumPrice) % 2 === 0 ? true : false
}

let payment = 500;
function afterPayment() {
    return (petsSumPrice - payment) * -1
}

let petsQuantity = 3;
function petsMeanPrice() {
    return +(petsSumPrice / petsQuantity).toFixed(2)
}

let randomSale = Math.random(0, 9);

function clientRandomPrice() {
    return +(petsSumPrice - randomSale).toFixed(2)
}

function clearEarn() {
    let clientPrice = (petsSumPrice - randomSale)
    let SumPrice = petsSumPrice / 2
    return (clientPrice - SumPrice)
}

// let price = 260 / 2;
// let sale = 260 / 10;
// function earn() {
//     return (price - sale).toFixed()
// }


console.log(Math.max(dogPrice, catPrice, birdPrice)); //максимальне число
console.log(Math.min(dogPrice, catPrice, birdPrice)); //мінімальне число
console.log(petsSumPrice); //вартість всіх товарів
console.log(petsCoinslessPrice); //вартість всіх товарів без копійок, округлена в меньшу сторону
console.log(Math.ceil(petsSumPrice / 100) * 100); //сумa товарів округленa до сотень
console.log(even_or_odd()); //парне чи непарне
console.log(afterPayment()); //решта після 500
console.log(petsMeanPrice()); // середня ціна
console.log(randomSale); //випадкова знижка
console.log(clientRandomPrice()); //сума до оплати зі знижкою
console.log(clearEarn()); //чистий прибуток
// console.log(earn()); //чистий прибуток за прикладом

