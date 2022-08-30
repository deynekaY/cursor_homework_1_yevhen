let students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

let themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];

let marks = [4, 5, 5, 3, 4, 5];

students[6] = students[0];

function pairs(students, size = 2) {
  return students
    .map((x, i) => i % size == 1 && students.slice(i, i + size))
    .filter((x) => x);
}
console.log(pairs(students));

let studentsPairs = [pairs(students)];

function studentsPairsThemes(studentsPairs, themes) {
  for (let i = 0; studentsPairs.length;)
  themes.splice(i++ * 2, 0, studentsPairs.shift());
  return themes;
}

console.log(studentsPairsThemes(studentsPairs, themes));