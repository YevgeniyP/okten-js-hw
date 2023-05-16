// Створити функцію, яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону

const arrayRandomGenerator = (arrayLength, limit) => {
  const array = [];
  for (let i = 0; i < arrayLength; i++) {
    array[i] = Math.round(Math.random() * limit);
  }

  return array;
};

document.write(arrayRandomGenerator(10, 1000000));
