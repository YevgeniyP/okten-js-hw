// Є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести числа тільки з непарним індексом
// 4. перебрати циклом for та вивести числа тільки з непарним індексом
// 5. перебрати циклом while та вивести числа тільки парні значення
// 6. перебрати циклом for та вивести числа тільки парні значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

const someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1 -----
let index = 0;
while (index < someArray.length) {
  console.log(someArray[index]);
  index++;
}

// 2 -----
for (const number of someArray) {
  console.log(number);
}

// 3 -----
index = 0;
while (index < someArray.length) {
  if (index % 2 === 1) console.log(someArray[index]);
  index++;
}

// 4 -----
for (let i = 0; i < someArray.length; i++) {
  if (i % 2 === 1) console.log(someArray[i]);
}

// 5 -----
index = 0;
while (index < someArray.length) {
  if (index % 2 === 0) console.log(someArray[index]);
  index++;
}

// 6 -----
for (let i = 0; i < someArray.length; i++) {
  if (i % 2 === 0) console.log(someArray[i]);
}

// 7 -----
const tempArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0; i < tempArray.length; i++) {
  const tempArrayElement = tempArray[i];
  if (tempArrayElement % 3 === 0) {
    tempArray[i] = "okten";
  }
}
console.log(tempArray);

// 8 -----
for (let i = someArray.length - 1; i >= 0; i--) {
  const someArrayElement = someArray[i];
  console.log(someArrayElement);
}

// 9 -----

index = someArray.length - 1;
while (index >= 0) {
  console.log(someArray[index]);
  index--;
}

for (let i = someArray.length - 1; i >= 0; i--) {
  const someArrayElement = someArray[i];
  console.log(someArrayElement);
}

index = someArray.length - 1;
while (index >= 0) {
  if (index % 2 === 1) console.log(someArray[index]);
  index--;
}

for (let i = someArray.length - 1; i >= 0; i--) {
  if (i % 2 === 1) console.log(someArray[i]);
}

index = someArray.length - 1;
while (index >= 0) {
  if (index % 2 === 0) console.log(someArray[index]);
  index--;
}

for (let i = someArray.length - 1; i >= 0; i--) {
  if (i % 2 === 0) console.log(someArray[i]);
}

const tempArray2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = tempArray2.length - 1; i >= 0; i--) {
  const tempArrayElement = tempArray2[i];
  if (tempArrayElement % 3 === 0) {
    tempArray2[i] = "okten";
  }
}
console.log(tempArray2);
