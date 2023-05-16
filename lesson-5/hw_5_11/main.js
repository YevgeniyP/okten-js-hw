// Створити функцію sum(arr), яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

const sum = (arrayOfNumbers) => {
  let result = 0;

  for (const element of arrayOfNumbers) {
    result += element;
  }

  return result;
};

const testArray = [1, 2, 10, -10, -1, -2, 100500];

console.log(sum(testArray));
