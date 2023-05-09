// Створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

const arrayOfNumber = [1, 2.3, 4, 6, 8];
for (const number of arrayOfNumber) {
  console.log(number);
}

const arrayOfString = ["Some", "string", "array", "foo", "bar"];
for (const string of arrayOfString) {
  console.log(string);
}

const mixedArray = [1, "Some", true, 2.3, "string", false];
for (const mixedArrayElement of mixedArray) {
  console.log(mixedArrayElement);
}
