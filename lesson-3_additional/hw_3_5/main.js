// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

const someArray1 = [];
for (let i = 0; i < 10; i++) {
  if (i === 0 || i === 3 || i === 6 || i === 9) {
    someArray1[i] = 100;
  } else if (i === 2 || i === 4 || i === 6 || i === 8) {
    someArray1[i] = "Some long string";
  } else {
    someArray1[i] = false;
  }
}
console.log(someArray1);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

document.write(`<h2>Цикл for на 10 ітерацій з кроком 1</h2>`);
for (let i = 1; i <= 10; i++) {
  console.log(i);
  document.write(`<p>${i}</p>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

document.write(`<h2>Цикл for на 100 ітерацій з кроком 1</h2>`);
for (let i = 1; i <= 100; i++) {
  console.log(i);
  document.write(`<p>${i}</p>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

document.write(`<h2>Цикл for на 100 ітерацій з кроком 2</h2>`);
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
  document.write(`<p>${i}</p>`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

document.write(`<h2>Цикл for на 100 ітерацій з парним кроком</h2>`);
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
    document.write(`<p>${i}</p>`);
  }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

document.write(`<h2>Цикл for на 100 ітерацій з непарним кроком</h2>`);
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
    document.write(`<p>${i}</p>`);
  }
}
