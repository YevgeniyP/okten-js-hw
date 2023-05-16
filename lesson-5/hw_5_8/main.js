// Створити функцію, яка приймає масив примітивних елементів (числа, стрінги, булеві)
// та будує для них список

const arrayBuilder = (...args) => {
  const array = [];
  for (const element of args) {
    array[array.length] = element;
  }
  return array;
};

console.log(
  arrayBuilder(1, true, "string", 2, false, "string", 123, "lksdjflksdjf")
);
