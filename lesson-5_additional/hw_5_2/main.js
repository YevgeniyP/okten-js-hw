// Створити функцію, яка приймає три числа та виводить найбільше. (Без Math.max!)

const maxNumber = (number1, number2, number3) => {
  switch (true) {
    case number1 > number2 && number1 > number3:
      return number1;
    case number2 > number1 && number2 > number3:
      return number2;
    case number3 > number1 && number3 > number2:
      return number3;
    default:
      return null;
  }
};

console.log(maxNumber(100500, -100500, 1));
