// Створити функцію, яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий

function listPrinter(string) {
  document.write(`
    <ul>
      <li>${string}</li>
      <li>${string}</li>
      <li>${string}</li>
    </ul>`);
}

const testData = "some string";

listPrinter(testData);
