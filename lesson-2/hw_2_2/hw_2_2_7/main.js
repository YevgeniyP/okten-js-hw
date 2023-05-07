// з файлу arrays.js (лежить в папці 2023 plan) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"

let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

let element1 = coursesAndDurationArray[0]["monthDuration"];
if (element1 > 5) {
  console.log("Супер");
}
let element2 = coursesAndDurationArray[1]["monthDuration"];
if (element2 > 5) {
  console.log("Супер");
}
let element3 = coursesAndDurationArray[2]["monthDuration"];
if (element3 > 5) {
  console.log("Супер");
}
let element4 = coursesAndDurationArray[3]["monthDuration"];
if (element4 > 5) {
  console.log("Супер");
}
let element5 = coursesAndDurationArray[4]["monthDuration"];
if (element5 > 5) {
  console.log("Супер");
}
let element6 = coursesAndDurationArray[5]["monthDuration"];
if (element6 > 5) {
  console.log("Супер");
}
