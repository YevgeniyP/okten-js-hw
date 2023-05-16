// Створити функцію, яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий

const listPrinter = (text) => {
  document.write(`
    <ul>
      <li>${text}</li>
      <li>${text}</li>
      <li>${text}</li>
    </ul>
  `);
};

listPrinter("some list");
