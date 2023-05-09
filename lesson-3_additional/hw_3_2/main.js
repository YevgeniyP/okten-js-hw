// Створити пустий масив.
// Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль

const someArray = [];

for (let i = 1; i < 60; i += 3) {
  someArray[someArray.length] = ((i * 20) / 3) ** 0.5;
}

console.log(someArray);
