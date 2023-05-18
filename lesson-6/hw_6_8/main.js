// Є масив

// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

const sortArray = coursesAndDurationArray.sort(
  (a, b) => b.monthDuration - a.monthDuration
);

console.log(sortArray);

const filterArray = coursesAndDurationArray.filter(
  (course) => course.monthDuration > 5
);

console.log(filterArray);

const newArray = coursesAndDurationArray.map((course, index) => {
  const element = { ...course };
  element.id = index + 1;
  return element;
});

console.log(newArray);
