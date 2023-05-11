// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') => 250

function exchange(sum, currencyValuesArray, exchangeCurrency) {
  for (const currencyValuesArrayElement of currencyValuesArray) {
    if (currencyValuesArrayElement.currency === exchangeCurrency) {
      return sum / currencyValuesArrayElement.value;
    }
  }
}

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
