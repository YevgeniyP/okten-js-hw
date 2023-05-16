// Створити функцію, яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено)

function minMaxNumber(...args) {
  let minNumber = args[0];
  let maxNumber = args[0];
  for (let i = 1; i < args.length; i++) {
    if (minNumber > args[i]) {
      minNumber = args[i];
    }
    if (maxNumber < args[i]) {
      maxNumber = args[i];
    }
  }
  console.log(maxNumber);
  return minNumber;
}

document.write(
  `<h1>${minMaxNumber(67, 12, 39, 92, 55, 24, 81, 3, 17, 46)}</h1>`
);
