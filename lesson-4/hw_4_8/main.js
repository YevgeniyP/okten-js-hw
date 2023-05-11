// Створити функцію, яка приймає масив примітивних елементів (числа, стрінги, булеві)
// та будує для них список

function arrayGenerator(...args) {
  const array = [];
  for (const arg of args) {
    array[array.length] = arg;
  }

  return array;
}

const someArray = arrayGenerator(1, true, "string", 2, false, "string");
console.log(someArray);
