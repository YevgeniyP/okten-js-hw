// Створити функцію, яка приймає масив чисел та повертає середнє арифметичне його значень

const averageNumber = (arrayOfNumber) => {
  let sum = 0;
  for (const element of arrayOfNumber) {
    sum += element;
  }

  return sum / arrayOfNumber.length;
};

console.log(averageNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
