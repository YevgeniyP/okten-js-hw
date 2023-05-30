// - Є масив
// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'>,
// в якому буде <h1 class='heading'> з title елементу та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

const coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

const wrap = document.createElement("div");
wrap.classList.add("wrap");
document.body.appendChild(wrap);

for (const courseItem of coursesAndDurationArray) {
  const item = document.createElement("div");
  item.classList.add("item");
  wrap.appendChild(item);

  const heading = document.createElement("h2");
  heading.classList.add("heading");
  heading.innerText = `Назва курсу: ${courseItem.title}`;

  const description = document.createElement("p");
  description.classList.add("description");
  description.innerText = `Тривалість курсу: ${courseItem.monthDuration} місяці(-в).`;

  item.append(heading, description);
}
