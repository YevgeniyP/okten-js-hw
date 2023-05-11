// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') => 250

function exchange(sum, currencyValuesArray, exchangeCurrency) {
  let value = 0;
  for (const currencyValuesArrayElement of currencyValuesArray) {
    if (currencyValuesArrayElement.currency === exchangeCurrency) {
      value = currencyValuesArrayElement.value;
    }
  }
  return sum / value;
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
