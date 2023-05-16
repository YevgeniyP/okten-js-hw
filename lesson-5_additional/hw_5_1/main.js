// Створити функцію, яка приймає три числа та виводить найменьше. (Без Math.min!)

const minNumber = (number1, number2, number3) => {
  switch (true) {
    case number1 < number2 && number1 < number3:
      return number1;
    case number2 < number1 && number2 < number3:
      return number2;
    case number3 < number1 && number3 < number2:
      return number3;
    default:
      return null;
  }
};

console.log(minNumber(100500, -100500, 1));
