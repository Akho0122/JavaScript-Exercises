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

const addUpp = function (numb) {
  let sum = 0;
  for (let i = 1; i <= numb; i++) {
    sum += i;
  }
  return sum;
};
console.log(addUpp(4));
