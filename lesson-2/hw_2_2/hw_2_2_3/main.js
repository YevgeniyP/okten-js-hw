// У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю)

let day = 32;

console.log("if else");
if (day >= 1 && day <= 10) {
  console.log("Перша декада");
} else if (day > 10 && day <= 20) {
  console.log("Друга декада");
} else if (day > 20 && day <= 31) {
  console.log("Третя декада");
} else {
  console.log("Доступний діапазон від 1 до 31");
}

console.log("ternary");
const res =
  day >= 1 && day <= 10
    ? "Перша декада"
    : day > 10 && day <= 20
    ? "Друга декада"
    : day > 20 && day <= 31
    ? "Третя декада"
    : "Доступний діапазон від 1 до 31";
console.log(res);

console.log("switch");
switch (true) {
  case day >= 1 && day <= 10:
    console.log("Перша декада");
    break;
  case day > 10 && day <= 20:
    console.log("Друга декада");
    break;
  case day > 20 && day <= 31:
    console.log("Третя декада");
    break;
  default:
    console.log("Доступний діапазон від 1 до 31");
}
