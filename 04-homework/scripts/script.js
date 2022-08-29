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
// document.writeln(
//   `<br /><br /><b>Пари студентів</b> - <b>${pairs(students)}</b>`
// );
console.log(pairs(students));


let studentsThemes = pairs(students) + themes;
console.log(studentsThemes);