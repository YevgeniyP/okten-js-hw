// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині

let i = 1;

while (i <= 20) {
  document.write(`<h1>${i}. Some prettier text</h1>`);
  i++;
}
