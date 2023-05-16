// Створити функцію, яка створює параграф з текстом. Текст задати через аргумент

const paragraphPrinter = (text) => {
  document.write(`<p>${text}</p>`);
};

const testParagraph =
  "У WHATWG відмовилися від принципу «версійності» на користь «вічної розробки» під час прийняття HTML специфікації. Таке рішення було викликане спробою прискорити втілення стандарту в життя, тобто розробникам веб-браузерів не потрібно чекати, поки вийде офіційно затверджена версія специфікації (тобто специфікація перейде в стан recomendation), вони можуть втілювати певні частини специфікації вже зараз. Тому за версією WHATWG існує лише одна специфікація, яка постійно розвивається – HTML.";

paragraphPrinter(testParagraph);
