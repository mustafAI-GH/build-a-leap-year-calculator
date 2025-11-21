let year = 1900;
let result = isLeapYear(year);

function isLeapYear(year) {
 if (typeof year === "number") {
 if (year % 4 === 0) {
  if ((year % 100 === 0) && (year % 400 !== 0)) {
   return year + " is not a leap year.";
  } else {
  return year + " is a leap year.";
  }
} else {
 return year + " is not a leap year.";
}
 }
}

console.log(result);