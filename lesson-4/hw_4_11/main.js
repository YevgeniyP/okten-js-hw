// Створити функцію sum(arr), яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sum(array) {
  let sum = 0;
  for (const arrayElement of array) {
    sum += arrayElement;
  }
  return sum;
}

const testArray = [1, 2, 10, -10, -1, -2, 100500];

console.log(sum(testArray));
