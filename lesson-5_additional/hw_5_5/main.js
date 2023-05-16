// Створити функцію, яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні
// від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

const arrayRandomGenerator = (arrayLength) => {
  const array = [];
  for (let i = 0; i < arrayLength; i++) {
    array[i] = Math.round(Math.random() * 100);
  }

  return array;
};

document.write(arrayRandomGenerator(10));
