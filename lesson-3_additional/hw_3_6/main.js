// Створити масив книжок (назва, кількість сторінок, автори , жанри).

const booksArray = [
  {
    title: "Книга 451 за Фаренгейтом",
    pages: 272,
    genre: ["Фантастика", "Фентезі"],
    authors: ["Рей Бредбері"],
  },
  {
    title: "Книга Гаррі Поттер i в'язень Азкабану",
    pages: 384,
    genre: ["Фантастика", "Фентезі", "Для дітей"],
    authors: ["Джоан Роулінг"],
  },
  {
    title: "Книга Подолати минуле. Глобальна історія України",
    pages: 432,
    genre: ["Менеджмент та лідерство"],
    authors: ["Ярослав Грицак", "Володимир Станчишин"],
  },
  {
    title: "Стіни в моїй голові. Жити з тривожністю і депресією",
    pages: 176,
    genre: ["Психологія"],
    authors: ["Володимир Станчишин"],
  },
  {
    title: "Німецька мова за 4 тижні. Інтенсивний курс німецької мови",
    pages: 320,
    genre: ["Саморозвиток І Мотивація"],
    authors: ["Михайло Смолій", "Г. Рауш-Діяс", "Пшемислав Вольскі"],
  },
];

// - знайти найбільшу книжку
let biggerBook;
let indexBiggerBook = 0;
for (const booksArrayElement of booksArray) {
  if (indexBiggerBook < booksArrayElement.pages) {
    indexBiggerBook = booksArrayElement.pages;
    biggerBook = booksArrayElement.title;
  }
}
console.log(biggerBook);

// - знайти книжку/ки з найбільшою кількістю жанрів
let biggerGenreBook;
let indexBiggerGenreBook = 0;
for (const booksArrayElement of booksArray) {
  if (indexBiggerGenreBook < booksArrayElement.genre.length) {
    indexBiggerGenreBook = booksArrayElement.genre.length;
    biggerGenreBook = booksArrayElement.title;
  }
}
console.log(biggerGenreBook);

// - знайти книжку/ки з найдовшою назвою
let longerTitleBook;
let indexLongerTitleBook = 0;
for (const booksArrayElement of booksArray) {
  if (indexLongerTitleBook < booksArrayElement.title.length) {
    indexLongerTitleBook = booksArrayElement.title.length;
    longerTitleBook = booksArrayElement.title;
  }
}
console.log(longerTitleBook);

// - знайти книжку/ки які писали 2 автори
let arrayTwoAuthorsBook = [];
for (const booksArrayElement of booksArray) {
  if (booksArrayElement.authors.length === 2) {
    arrayTwoAuthorsBook[arrayTwoAuthorsBook.length] = booksArrayElement.title;
  }
}
console.log(arrayTwoAuthorsBook);

// - знайти книжку/ки які писав 1 автор
let arrayOneAuthorsBook = [];
for (const booksArrayElement of booksArray) {
  if (booksArrayElement.authors.length === 1) {
    arrayOneAuthorsBook[arrayOneAuthorsBook.length] = booksArrayElement.title;
  }
}
console.log(arrayOneAuthorsBook);
