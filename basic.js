// // REMOVE THE DUPLICATE FROM THE ARRAY

// let my_array = [1, 2, 4, 2, 32, 24, 32];

// let ans = [];

// for (let i = 0; i < my_array.length; i++) {
//   console.log(my_array[i]);
//   let is_duplicate = false;
//   for (let j = 0; j < ans.length; j++) {
//     console.log(ans[j]);
//     if (ans[j] === my_array[i]) {
//       is_duplicate = true;
//       break;
//     }
//   }
//   if (!is_duplicate) {
//     ans.push(my_array[i]);
//   }
// }

// // FIND THE SUM OF THE ARRAY

// let array = [2, 3, 232, 4];

// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }

// // FIND THE FACTORIAL OF THE NUMBER

// let num = 4;

// function fact(num) {
//   console.log(num);
//   let ans = 1;
//   for (let i = 1; i <= num; i++) {
//     ans = ans * i;
//   }
//   return ans;
// }

// ans = fact(num);

// //MOVE ALL ZEROS TO END

// let array = [2, 0, 32, 23, 4, 0];

// let j = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] != 0) {
//     [array[i], array[j]] = [array[j], array[i]];
//     j++;
//   }
// }

// console.log(array, "arrayDataaa");

// //REMOVE DUPICATES FROM TEH SORTED ARRAY
