// Функція приймає масив та робить з нього новий масив у зворотньому порядку.
// [1,2,3] -> [3, 2, 1]

const arrayReverse = (arrayOfNumbers) => {
  const array = [];

  for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
    array[array.length] = arrayOfNumbers[i];
  }

  return array;
};

console.log(arrayReverse([1, 2, 3, 4, 5, 6, 7, 8, 9]));
