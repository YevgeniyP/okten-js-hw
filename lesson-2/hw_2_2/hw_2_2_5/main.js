// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt("Уведіть перше число");
let number2 = +prompt("Уведіть друге число");

if (number1 < number2) {
  console.log(`${number1} меньше ${number2}`);
} else if (number1 > number2) {
  console.log(`${number1} більше ${number2}`);
} else {
  console.log(`${number1} рівні ${number2}`);
}
