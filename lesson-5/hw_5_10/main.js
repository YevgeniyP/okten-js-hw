// Створити функцію, яка повертає найменьше число з масиву

const minNumber = (arrayOfNumber) => {
  let result = arrayOfNumber[0];
  for (let i = 1; i < arrayOfNumber.length; i++) {
    if (result > arrayOfNumber[i]) {
      result = arrayOfNumber[i];
    }
  }
  return result;
};

const testArray = [12, 100, 100500, 1, -100500];

console.log(minNumber(testArray));
