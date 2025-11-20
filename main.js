//1

function isEmptyString(str) {
  return str === "";
}
console.log(isEmptyString(""));
console.log(isEmptyString("hello"));

//2

function usdToGel(priceInUsd, exchangeRate) {
  return priceInUsd * exchangeRate;
}
console.log(usdToGel(10, 2.8));
console.log(usdToGel(50, 2.8));

//3

function getCountryByCurrencyCode(code) {
  const upperCode = code.toUpperCase();

  if (upperCode === "USD") {
    return "United States";
  } else if (upperCode === "EUR") {
    return "European Union";
  } else if (upperCode === "GEL") {
    return "Georgia";
  } else {
    return "Unknown currency";
  }
}
console.log(getCountryByCurrencyCode("USD"));
console.log(getCountryByCurrencyCode("EUR"));
console.log(getCountryByCurrencyCode("GEL"));
console.log(getCountryByCurrencyCode("ABC"));

// 4
function toLowerCaseString(str) {
  return str.toLowerCase();
}
console.log(toLowerCaseString("LUKA KLDIASHVILI"));

// 5
function getMoreThan100(numbers) {
  return numbers.filter((num) => num > 100);
}
console.log(getMoreThan100([10, 150, 200, 50, 101]));
