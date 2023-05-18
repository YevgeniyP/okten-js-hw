// Створити функцію sortNums(nums, direction), яка приймає масив чисел та сортує його
// від більшого до меншого або навпаки в залежності від значення аргументу direction.
//   let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// const sortNums = (nums, direction = "ascending") => {
//   if (direction === "ascending") {
//     return nums.sort((a, b) => a - b);
//   } else if (direction === "descending") {
//     return nums.sort((a, b) => b - a);
//   }
// };

const sortNums = (nums, direction = "ascending") => {
  switch (direction) {
    case "ascending":
      return nums.sort((a, b) => a - b);
    case "descending":
      return nums.sort((a, b) => b - a);
  }
};

const nums = [11, 21, 3];

console.log(sortNums(nums, "ascending"));
console.log(sortNums(nums, "descending"));
