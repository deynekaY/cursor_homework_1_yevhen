function getRandomArray(lenght, min, max) {
  return new Array(lenght)
    .fill(0)
    .map((e) => Math.floor(Math.random() * (max - min + 1) + min));
}

function getModa(...arr) {
  arr = arr.filter((e) => Number.isInteger(e));
  let moda = arr[0],
    maxCount = 0,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    count = arr.filter((e) => e === arr[i]).length;
    if (maxCount < count) {
      moda = arr[i];
      maxCount = count;
    }
  }
  return moda;
}

function getAverage(...arr) {
  return (
    arr
      .filter((e) => Number.isInteger(e))
      .reduce((prev, cur) => prev + cur, 0) / arr.length
  );
}

function getMedian(...arr) {
  arr = arr.filter((e) => Number.isInteger(e)).sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);
  return arr.length % 2 === 0 ? (arr[mid] + arr[mid - 1]) / 2 : arr[mid];
}

function filterEvenNumbers(...arr) {
  return arr.filter((e) => e % 2 != 0);
}

function countPositiveNumbers(...arr) {
  return arr.filter((e) => e > 0).length;
}

document.getElementById("info").innerHTML = `
<p><b>Масив випадкових цілих чисел -</b> ${getRandomArray(15, 1, 100)}</p>
<p><b>Мода переданих аргументів -</b> ${getModa(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
)}</p>
<p><b>Середнє арифметичне переданих аргументів -</b> ${getAverage(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
)}</p>
<p><b>Медіана переданих аргументів -</b> ${getMedian(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
)}</p>
<p><b>Фільтр парних чисел переданих як аргументи -</b> ${filterEvenNumbers(
  1,
  2,
  3,
  4,
  5,
  6
)}</p>
<p><b>Кількість чисел більших за "0" -</b> ${countPositiveNumbers(
  1,
  -2,
  3,
  -4,
  -5,
  6
)}</p>
`;
