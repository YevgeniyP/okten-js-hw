// Функція приймає масив та робить з нього новий масив у зворотньому порядку.
// [1,2,3] -> [3, 2, 1]

function arrayReverse(array) {
  const arrayReverse = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayReverse[arrayReverse.length] = array[i];
  }
  return arrayReverse;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayReverse(testArray));
