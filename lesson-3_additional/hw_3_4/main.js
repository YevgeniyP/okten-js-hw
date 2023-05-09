// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

const someArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of someArray1) {
  console.log(number);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

const someArray2 = [
  "some",
  "string",
  "array",
  "some",
  "string",
  "array",
  "some",
  "string",
  "array",
  "some",
];
for (let i = 0; i < someArray2.length; i++) {
  const someArray2Element = someArray2[i];
  console.log(someArray2Element);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

const someArray3 = [1, "some", true, 2, 1, "some", true, 2, "string", false];
for (let i = 0; i < someArray3.length; i++) {
  const someArray3Element = someArray3[i];
  console.log(someArray3Element);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

const someArray4 = [1, "some", true, 2, 1, "some", false, 2, "string", true];
for (const someArray4Element of someArray4) {
  if (typeof someArray4Element === "boolean") {
    console.log(someArray4Element);
  }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

const someArray5 = [1, "some", true, 2, 1, "some", false, 2, "string", true];
for (let i = 0; i < someArray5.length; i++) {
  const someArray5Element = someArray5[i];
  if (typeof someArray5Element === "number") {
    console.log(someArray5Element);
  }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

const someArray6 = [1, "some", true, 2, 1, "foo", false, 2, "string", true];
for (let i = 0; i < someArray6.length; i++) {
  const someArray6Element = someArray6[i];
  if (typeof someArray6Element === "string") {
    console.log(someArray6Element);
  }
}
