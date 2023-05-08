// є масив
// let users = [
//   {name: 'vasya', age: 31, status: false},
//   {name: 'petya', age: 30, status: true},
//   {name: 'kolya', age: 29, status: true},
//   {name: 'olya', age: 28, status: false},
//   {name: 'max', age: 30, status: true},
//   {name: 'anya', age: 31, status: false},
//   {name: 'oleg', age: 28, status: false},
//   {name: 'andrey', age: 29, status: true},
//   {name: 'masha', age: 30, status: true},
//   {name: 'olya', age: 31, status: false},
//   {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 30, status: true },
  { name: "kolya", age: 29, status: true },
  { name: "olya", age: 28, status: false },
  { name: "max", age: 30, status: true },
  { name: "anya", age: 31, status: false },
  { name: "oleg", age: 28, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 30, status: true },
  { name: "olya", age: 31, status: false },
  { name: "max", age: 31, status: true },
];

document.write(`<h2>Користувачі зі статусом true</h2>`);
document.write(`<ol>`);
for (const user of users) {
  if (user.status) {
    document.write(`<li>${user.name} - age:${user.age}</li>`);
  }
}
document.write(`</ol>`);

document.write(`<h2>Користувачі зі статусом fasle</h2>`);
document.write(`<ol>`);
for (const user of users) {
  if (!user.status) {
    document.write(`<li>${user.name} - age:${user.age}</li>`);
  }
}
document.write(`</ol>`);

document.write(`<h2>Користувачі, які старше 30 років</h2>`);
document.write(`<ol>`);
for (const user of users) {
  if (user.age >= 30) {
    document.write(`<li>${user.name} - age:${user.age}</li>`);
  }
}
document.write(`</ol>`);
