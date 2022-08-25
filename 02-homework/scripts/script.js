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
  
  const number_n = getNumberFromUser("N");
  const number_m = getNumberFromUser("M");
  
  const skipEven = confirm("Пропустити парні числа?");
  
  let sum = 0;
  
  for (let i = number_n; i <= number_m; i++) {  
      sum += skipEven ? ( !(i % 2) ? 0 : i) : i;
  }
  
  console.log(sum);
  
  document.getElementById("info").innerHTML = `
  <p> Число N = ${number_n}</p>
  <p> Число M = ${number_m}</p>
  <p> Пропустити парні числа = ${skipEven}</p>
  <p> Сума = ${sum}</p>
  `;