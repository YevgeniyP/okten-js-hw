// Створити функцію swap(arr,index1,index2).
// Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) => [22,11,33,44]

const swap = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  return array;
};

const testArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(swap(testArray, 1, 7));
