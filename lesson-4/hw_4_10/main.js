// Створити функцію, яка повертає найменьше число з масиву

function minNumber(arrayOfNumber) {
  let minNumber = arrayOfNumber[0];
  for (let i = 1; i < arrayOfNumber.length; i++) {
    if (minNumber > arrayOfNumber[i]) {
      minNumber = arrayOfNumber[i];
    }
  }
  return minNumber;
}

const testArray = [12, 100, 100500, 1, -100500];

console.log(minNumber(testArray));
