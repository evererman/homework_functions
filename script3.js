'use strict';

const CountryNameArray = ["Australia", "Germany", "United Statesof America"];

function findLongestCountryName(CountryNameArray) {
   let longestCountryName = CountryNameArray.reduce(function (a, b) {
      return (a.length > b.length) ? a : b;
   });
   return longestCountryName;
}
const result = findLongestCountryName(CountryNameArray);
console.log(result);