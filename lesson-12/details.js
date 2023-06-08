const userId = new URLSearchParams(document.location.search).get("id");
const user = await fetch(
  `https://jsonplaceholder.typicode.com/users/${userId}`
).then((response) => response.json());

const wrapper = document.createElement("div");
document.body.append(wrapper);
document.title = `${user.name}`;

function userPrinter(obj) {
  for (const param in obj) {
    if (typeof obj[param] === "object") {
      userPrinter(obj[param]);
      continue;
    }
    const block = document.createElement("p");
    block.innerText = `${param}: ${obj[param]}`;
    wrapper.append(block);
  }
}

userPrinter(user);

const backLink = document.createElement("a");
backLink.innerText = "До списку";
backLink.href = "users.html";
document.body.append(backLink);
