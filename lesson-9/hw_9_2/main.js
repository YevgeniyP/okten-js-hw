// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const menuList = ["Main", "Products", "About us", "Contacts"];

const menu = document.createElement("ul");

document.body.appendChild(menu);

for (const item of menuList) {
  const li = document.createElement("li");
  li.innerHTML = `${item}`;
  menu.appendChild(li);
}
