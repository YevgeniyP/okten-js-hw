// Створити функцію, яка приймає масив об'єктів з наступними полями
// id, name, age та виводить їх в документ.
// Для кожного об'єкту окремий блок.

const objectPrinter = (array) => {
  document.write(`<div>`);
  for (const element of array) {
    document.write(`
      <div>
        <strong>${element.id}</strong>
        <h2>${element.name} - ${element.age}</h2></div>
    `);
  }
  document.write(`</div>`);
};

const testArray = [
  { id: 100, name: "vasya", age: 31 },
  { id: 101, name: "petya", age: 30 },
  { id: 102, name: "kolya", age: 29 },
  { id: 103, name: "olya", age: 28 },
  { id: 104, name: "max", age: 30 },
  { id: 105, name: "anya", age: 31 },
  { id: 106, name: "oleg", age: 28 },
  { id: 107, name: "andrey", age: 29 },
  { id: 108, name: "masha", age: 30 },
  { id: 109, name: "olya", age: 31 },
  { id: 110, name: "max", age: 31 },
];

objectPrinter(testArray);
