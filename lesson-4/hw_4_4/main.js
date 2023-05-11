// Створити функцію, яка приймає масив та виводить кожен його елемент

function arrayPrinter(array) {
  for (const arrayElement of array) {
    console.log(arrayElement);
  }
}

const testArray = [12, 100500, "some string"];

arrayPrinter(testArray);
