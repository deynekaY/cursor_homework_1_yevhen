function getNumberFromUser(numberName) {
    let number;
    while (!number) {
        number = +prompt(`Введіть число ${numberName}`);
        if (number === 0) {
            break;
        }
        if (!number) {
            alert("Це не число");
        }
        if (!Number.isInteger(number)) {
            alert("Введіть ціле число");
            number = null;
        }
    }
    return number;
}

let number_n = getNumberFromUser("N");
let number_m = getNumberFromUser("M");

let skipEven = confirm("Пропустити парні числа?");

let sum = 0;

for (let i = number_n; i <= number_m; i++) {
    sum += skipEven ? (!(i % 2) ? 0 : i) : i;
}

console.log(sum);

document.getElementById("info").innerHTML = `
  <p><b>Число N</b> = ${number_n}</p>
  <p><b>Число M</b> = ${number_m}</p>
  <p><b>Пропустити парні числа</b> = ${skipEven}</p>
  <p><b>Сума</b> = ${sum}</p>
  `;