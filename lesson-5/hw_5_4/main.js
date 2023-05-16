// Створити функцію, яка приймає масив та виводить кожен його елемент

const arrayPrinter = (array) => {
  for (const element of array) {
    console.log(element);
  }
};

const testArray = [12, 100500, "some string"];

arrayPrinter(testArray);
