// Створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function cylinderArea(radius, height) {
  return 2 * Math.PI * radius * (radius + height);
}

console.log(cylinderArea(8, 8));
