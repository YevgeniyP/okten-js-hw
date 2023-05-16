// Створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

const cylinderArea = (radius, height) =>
  2 * Math.PI * radius * (radius + height);

console.log(cylinderArea(8, 8));
