// Створити функцію, яка приймає три числа та виводить найменьше. (Без Math.min!)

function minNumber(...args) {
  let minNumber = args[0];
  for (let i = 1; i < args.length; i++) {
    if (minNumber > args[i]) {
      minNumber = args[i];
    }
  }
  return minNumber;
}

console.log(minNumber(100500, -100500, 1, 100, 123, 456, 98));
