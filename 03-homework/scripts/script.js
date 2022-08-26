let userName = "жЕНя";
function nameFormater(userName) {
    if (!userName) return userName;
    return userName[0].toUpperCase() + userName.toLowerCase().slice(1);
}
document.writeln(`<b>Функція №1:</b> "жЕНя" перетворюється на  <b>${(nameFormater(userName))}</b>`)

let randomDigits = (19358746);
function getMaxDigit(randomDigits, _max = -Infinity) {
    let str = (randomDigits + '');
    return str.length > 1 ?
        getMaxDigit(str.slice(1), Math.max(str[0], _max)) :
        +Math.max(str[0], _max);
}
document.writeln(`<br /><br /><b>Функція №2:</b> Найбільшою цифрою з числа 1904523867 є <b>${(getMaxDigit(randomDigits))}</b>`)

let salary = 1000;
let incomeTax = 18;
let militaryTax = 1.5;
function myMoney(salary, incomeTax, militaryTax) {
    return (salary - (salary / 100 * (incomeTax + militaryTax)));
}

document.writeln(`<br /><br /><b>Функція №3:</b> Після оплати податків (18% та 1.5%) з 1000 залишається <b>${(myMoney(salary, incomeTax, militaryTax))}</b> грн`)

let sentence = "Harrold felt confident that nobody would ever suspect his spy pigeon";
function deleteLetters(sentence) {
    return sentence.split('t').join('');
}
document.writeln(`<br /><br /><b>Функція №4:</b> З речення "Harrold felt confident that nobody would ever suspect his spy pigeon" після видалення букви "t" залишається <b>${(deleteLetters(sentence))}</b>`)

let minNum = 1;
let maxNum = 9;
function randomNumber(minNum, maxNum) {
    min = Math.ceil(minNum);
    max = Math.floor(maxNum);
    return Math.round(Math.random() * (max - min)) + min;
}
document.writeln(`<br /><br /><b>Функція №5:</b> Випадковим числом з діапазону від 1 до 9 є <b>${(randomNumber(minNum, maxNum))}</b>`)

let word = "ababbagalamagaa";    
function countLetter(word) {
    return word.split("a").length - 1;
}
document.writeln(`<br /><br /><b>Функція №6:</b> Літера "а" зустрічається в слові "ababbagalamagaa" <b>${(countLetter(word))}</b> разів`)
