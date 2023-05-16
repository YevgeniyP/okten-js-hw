// Створити функцію, яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxNumber(...args) {
  let maxNumber = args[0];
  for (let i = 1; i < args.length; i++) {
    if (maxNumber < args[i]) {
      maxNumber = args[i];
    }
  }
  return maxNumber;
}

console.log(maxNumber(1, 2, 3, 100, 1000000, 100500, -1, -2, -3));
