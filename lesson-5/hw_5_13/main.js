// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') => 250

const exchange = (amountOfMoney, arrayOfExchange, exchangeCurrency) => {
  for (const element of arrayOfExchange) {
    if (element.currency === exchangeCurrency) {
      return amountOfMoney / element.value;
    }
  }
};

console.log(
  exchange(
    10000,
    [
      { currency: "USD", value: 40 },
      { currency: "EUR", value: 42 },
    ],
    "EUR"
  )
);
