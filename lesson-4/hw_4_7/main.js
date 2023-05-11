// Створити функцію, яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function arrayPrinter(printText, numberRepetitions) {
  document.write(`<ul>`);
  for (let i = 0; i < numberRepetitions; i++) {
    document.write(`<li>${printText}</li>`);
  }
  document.write(`</ul>`);
}

arrayPrinter("Hello Okten", 7);
