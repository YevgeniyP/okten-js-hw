// Описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//   color:'', // 'red','black'
// }

const deckOfCards = [
  { color: "black", cardSuit: "spade", value: "6" },
  { color: "black", cardSuit: "spade", value: "7" },
  { color: "black", cardSuit: "spade", value: "8" },
  { color: "black", cardSuit: "spade", value: "9" },
  { color: "black", cardSuit: "spade", value: "10" },
  { color: "black", cardSuit: "spade", value: "jack" },
  { color: "black", cardSuit: "spade", value: "queen" },
  { color: "black", cardSuit: "spade", value: "king" },
  { color: "black", cardSuit: "spade", value: "ace" },
  { color: "red", cardSuit: "diamond", value: "6" },
  { color: "red", cardSuit: "diamond", value: "7" },
  { color: "red", cardSuit: "diamond", value: "8" },
  { color: "red", cardSuit: "diamond", value: "9" },
  { color: "red", cardSuit: "diamond", value: "10" },
  { color: "red", cardSuit: "diamond", value: "jack" },
  { color: "red", cardSuit: "diamond", value: "queen" },
  { color: "red", cardSuit: "diamond", value: "king" },
  { color: "red", cardSuit: "diamond", value: "ace" },
  { color: "red", cardSuit: "heart", value: "6" },
  { color: "red", cardSuit: "heart", value: "7" },
  { color: "red", cardSuit: "heart", value: "8" },
  { color: "red", cardSuit: "heart", value: "9" },
  { color: "red", cardSuit: "heart", value: "10" },
  { color: "red", cardSuit: "heart", value: "jack" },
  { color: "red", cardSuit: "heart", value: "queen" },
  { color: "red", cardSuit: "heart", value: "king" },
  { color: "red", cardSuit: "heart", value: "ace" },
  { color: "black", cardSuit: "clubs", value: "6" },
  { color: "black", cardSuit: "clubs", value: "7" },
  { color: "black", cardSuit: "clubs", value: "8" },
  { color: "black", cardSuit: "clubs", value: "9" },
  { color: "black", cardSuit: "clubs", value: "10" },
  { color: "black", cardSuit: "clubs", value: "jack" },
  { color: "black", cardSuit: "clubs", value: "queen" },
  { color: "black", cardSuit: "clubs", value: "king" },
  { color: "black", cardSuit: "clubs", value: "ace" },
];

const filterSpadeAce = deckOfCards.filter(
  (card) => card.cardSuit === "spade" && card.value === "ace"
);

console.log(filterSpadeAce);

const allSixFilter = deckOfCards.filter((card) => card.value === "6");

console.log(allSixFilter);

const redCardsFilter = deckOfCards.filter((card) => card.color === "red");

console.log(redCardsFilter);

const diamondCardsFilter = deckOfCards.filter(
  (card) => card.cardSuit === "diamond"
);

console.log(diamondCardsFilter);

const clubsCardFilter = deckOfCards.filter(
  (card) =>
    card.cardSuit === "clubs" &&
    (+card.value >= 9 ||
      card.value === "jack" ||
      card.value === "queen" ||
      card.value === "king" ||
      card.value === "ace")
);

console.log(clubsCardFilter);
