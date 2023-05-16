// Створити функцію, яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const listPrinter = (text, count) => {
  document.write(`<ul>`);
  for (let i = 0; i < count; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write(`</ul>`);
};

listPrinter("Hello Okten", 30);
