// - створити блок,

const div = document.createElement("div");
div.innerText = "Some string";

// - додати йому класи wrap, collapse, alpha, beta

div.classList.add("wrap", "collapse", "alpha", "beta");

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

div.style.background = "gold";
div.style.fontSize = "18px";
div.style.color = "green";

// - додати цей блок в body.

document.body.append(div);

// - клонувати його повністю, та додати клон в body.

const div2 = div.cloneNode(true);
document.body.append(div2);
