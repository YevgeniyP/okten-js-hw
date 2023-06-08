// Зробити файл users.html
// З ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// Вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX
// (замість ХХХ - id юзера)
// При кліку на посилання перехід на відповідну сторінку,
// на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит
// (https://jsonplaceholder.typicode.com/users/XXX ХХХ - id користувача)

const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json()
);

const userList = document.createElement("div");
userList.classList.add("userList");
document.body.append(userList);

for (const user of users) {
  const wrapper = document.createElement("p");
  userList.append(wrapper);
  const userInfo = document.createElement("a");
  userInfo.href = `users-details.html?id=${user.id}`;
  userInfo.innerText = `${user.id}. ${user.name}`;
  wrapper.append(userInfo);
}
