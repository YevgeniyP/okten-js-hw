// Створити функцію, яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено)

const minMaxNumber = (...args) => {
  let minNumber = args[0];
  let maxNumber = args[0];

  for (const element of args) {
    if (minNumber > element) {
      minNumber = element;
    }
    if (maxNumber < element) {
      maxNumber = element;
    }
  }

  console.log(maxNumber);
  return minNumber;
};

document.write(
  `<h1>${minMaxNumber(67, 12, 39, 92, 55, 24, 81, 3, 17, 46)}</h1>`
);
