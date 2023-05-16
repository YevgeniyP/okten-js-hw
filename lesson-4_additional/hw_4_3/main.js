// Створити функцію, яка приймає масив чисел та повертає середнє арифметичне його значень

function averageNumber(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum / args.length;
}

console.log(averageNumber(1, 2, 3, 4, 5, 6, 7, 8, 9));
