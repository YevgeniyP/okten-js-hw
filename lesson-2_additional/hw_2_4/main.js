// - Маємо будь яке число від -100, 0, +100.
// потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let someNumber = 99;

if (someNumber > 0) {
  console.log("Додатнє число");
} else if (someNumber < 0) {
  console.log("Від'ємне число");
} else {
  console.log("Число рівне нулю");
}

let diff =
  someNumber > 0
    ? "Додатнє число"
    : someNumber < 0
    ? "Від'ємне число"
    : "Число рівне нулю";
console.log(diff);
