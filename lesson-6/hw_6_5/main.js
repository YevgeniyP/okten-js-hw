// Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const str = "Ревуть воли як ясла повні";

const stringToArray = (string) => {
  return string.split(" ");
};

console.log(stringToArray(str));
