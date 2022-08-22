let dogPrice = (15.678);

let catPrice = (123.965);

let birdPrice = (90.2345);

let maxPrice = Math.max(dogPrice, catPrice, birdPrice);
document.writeln('<p><b>Максимальна ціна</b> = ' + maxPrice + '</p>');

let minPrice = Math.min(dogPrice, catPrice, birdPrice);
document.writeln('<p><b>Мінімальна ціна</b> = ' + minPrice + '</p>');

let petsSumPrice = (dogPrice + catPrice + birdPrice);
document.writeln('<p><b>Bартість всіх товарів</b> = ' + petsSumPrice + '</p>');

let petsCoinslessPrice = (Math.floor(dogPrice) + Math.floor(catPrice) + Math.floor(birdPrice));
document.writeln('<p><b>Bартість всіх товарів без копійок, округлена в меньшу сторону</b> = ' + petsCoinslessPrice + '</p>');

let sumRound = Math.round(petsSumPrice / 100) * 100;
document.writeln('<p><b>Cумa товарів математично округленa до сотень</b> = ' + sumRound + '</p>');

function even_or_odd(petsSumPrice) {
    return Math.floor(petsSumPrice) % 2 === 0 ? true : false
}
document.writeln('<p><b>Чи є сума всіх товарів (округлена в меньшу сторону) парним числом</b> = ' + even_or_odd() + '</p>');

let payment = 500;
function afterPayment() {
    return (petsSumPrice - payment) * -1
}
document.writeln('<p><b>Решта з 500 після оплати всіх товарів (без округлення)</b> = ' + afterPayment() + '</p>');

let petsQuantity = 3;
function petsMeanPrice() {
    return +(petsSumPrice / petsQuantity).toFixed(2)
}
document.writeln('<p><b>Середня ціна, округлена до другого знаку після коми</b> = ' + petsMeanPrice() + '</p>');

let randomSale = Math.random(0, 9);
document.writeln('<p><b>Випадкова знижка</b> = ' + randomSale + '</p>');

function clientRandomPrice() {
    return +(petsSumPrice - randomSale).toFixed(2)
}
document.writeln('<p><b>Сума до оплати зі знижкою, округлена до копійок</b> = ' + clientRandomPrice() + '</p>');

function clearEarn() {
    let clientPrice = (petsSumPrice - randomSale)
    let SumPrice = petsSumPrice / 2
    return (clientPrice - SumPrice)
}
document.writeln('<p><b>Чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни</b> = ' + clearEarn() + '</p>');

console.log(Math.max(dogPrice, catPrice, birdPrice)); //максимальне число
console.log(Math.min(dogPrice, catPrice, birdPrice)); //мінімальне число
console.log(petsSumPrice); //вартість всіх товарів
console.log(petsCoinslessPrice); //вартість всіх товарів без копійок, округлена в меньшу сторону
console.log(Math.round(petsSumPrice / 100) * 100); //сумa товарів округленa до сотень
console.log(even_or_odd()); //парне чи непарне
console.log(afterPayment()); //решта після 500
console.log(petsMeanPrice()); // середня ціна
console.log(randomSale); //випадкова знижка
console.log(clientRandomPrice()); //сума до оплати зі знижкою
console.log(clearEarn()); //чистий прибуток