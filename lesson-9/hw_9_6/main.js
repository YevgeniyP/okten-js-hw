// - Є масив coursesArray котрий лежить в arrays.js
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png який лежить в папці з поточним файлом

const coursesArray = [
  {
    title: "JavaScript Complex",
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
    ],
  },
  {
    title: "Java Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "git",
      "java core",
      "java advanced",
    ],
  },
  {
    title: "Python Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "python core",
      "python advanced",
    ],
  },
  {
    title: "QA Complex",
    monthDuration: 4,
    hourDuration: 909,
    modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"],
  },
  {
    title: "FullStack",
    monthDuration: 7,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
      "python",
      "java",
    ],
  },
  {
    title: "Frontend",
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "sass",
    ],
  },
];

const wrap = document.createElement("div");
wrap.classList.add("wrap");
document.body.appendChild(wrap);

for (const courseItem of coursesArray) {
  const course = document.createElement("div");
  course.classList.add("course-item");
  wrap.append(course);

  const courseTitle = document.createElement("h2");
  courseTitle.classList.add("header");
  courseTitle.innerHTML = `Курс <i>${courseItem.title}</i>`;

  const courseMonthDuration = document.createElement("p");
  courseMonthDuration.classList.add("mduration");
  courseMonthDuration.innerText = `Тривалість курсу: ${courseItem.monthDuration} місяці(-в)`;

  const courseHourDuration = document.createElement("p");
  courseHourDuration.classList.add("hduration");
  courseHourDuration.innerText = `Тривалість курсу: ${courseItem.hourDuration} годин`;

  const courseModules = document.createElement("ul");
  courseModules.classList.add("modules");

  for (const moduleItem of courseItem.modules) {
    const module = document.createElement("li");
    courseModules.append(module);
    module.innerText = moduleItem;
  }

  course.append(
    courseTitle,
    courseMonthDuration,
    courseHourDuration,
    courseModules
  );
}
