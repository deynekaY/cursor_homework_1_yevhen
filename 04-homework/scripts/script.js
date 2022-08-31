let students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

let themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];

let marks = [4, 5, 5, 3, 4, 5];

function pairs(students, size = 2) {
  students[6] = students[0];
  return students
    .map((x, i) => i % size == 1 && students.slice(i, i + size))
    .filter((x) => x);
}
console.log(pairs(students));

let teamProject = [];

function studentsPairsThemes(pairs, themes) {
  for (let i = 0; i < pairs.length; i++) {
    teamProject.push([pairs[i], themes[i]].flat());
  }
  return teamProject;
}

let pairsProject = studentsPairsThemes(pairs(students), themes);

console.log(pairsProject);

let studentsMarks = [];

students.pop();

for (var i = 0; i < students.length; i++) {
  studentsMarks.push([students[i], marks[i]]);
}
console.log(studentsMarks);

let teamProjectMarks = [];

function studentsPairsThemesMarks(pairsProject, marks) {
  for (let i = 0; i < pairsProject.length; i++) {
    teamProjectMarks.push([pairsProject[i], marks[i]].flat());
  }
  return teamProjectMarks;
}

let pairsProjectMarks = studentsPairsThemesMarks(pairsProject, marks);

console.log(pairsProjectMarks);
