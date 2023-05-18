// Є масив чисел [10,8,-7,55,987,-1011,0,1050,0].
// За допомоги map перетворити всі об'єкти в масиві на стрінгові

const arrayOfNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

const arrayOfStrings = arrayOfNumbers.map((number) => String(number));

console.log(arrayOfStrings);
