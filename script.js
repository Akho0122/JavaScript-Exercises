// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(`...${data1[0]}C... ${data1[1]}C... ${data1[2]}C...`);

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}C in ${i + 1} days ...`;
//   }
//   console.log('...' + str);
// };
// printForecast(data2);

// const addUpp = function (numb) {
//   let sum = 0;
//   for (let i = 1; i <= numb; i++) {
//     sum += i;
//   }
//   return sum;
// };
// console.log(addUpp(4));

// const minMax = function (arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// };
// console.log(minMax([1, 2, 3, 4, 5, 6]));

const strToCamelCase = function (...str) {
  let camelCase = str[0].toLowerCase().trim() + str[1].toUpperCase();
  console.log(camelCase);
};
strToCamelCase(' AkhO ', 'oribjonov');
