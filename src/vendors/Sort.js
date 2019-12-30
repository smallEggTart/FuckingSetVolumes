// function shell(arr) {
//     let newArr = arr.slice(), length = Math.floor(newArr.length / 2) + 1;
//
//     while (length > 0) {
//         for (let i = 0; i < length; i++) {
//             let j = i;
//             while (j < newArr.length) {
//                 let temp = newArr[j];
//                 if (temp > newArr[j + length]) {
//                     newArr[j] = newArr[j + length];
//                     newArr[j + length] = temp;
//                 }
//                 j += length;
//             }
//         }
//         length = Math.floor(length / 2)
//     }
//
//     return newArr;
// }
//
// // console.log(shell([1, 8, 7, 6, 5, 1, 2, 3, 0, 0]));
//
// function quick(arr) {
//     let standard = arr[1];
//
//     return (function loop(arr, standard) {
//         if (arr.length <= 1) {
//             return arr
//         }
//         let arr1 = [], arr2 = [];
//         let flag = false;
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > standard) {
//                 arr2.push(arr[i]);
//             } else if (arr[i] === standard) {
//                 if (flag) {
//                     arr2.push(arr[i]);
//                 } else {
//                     arr1.push(arr[i]);
//                 }
//                 flag = !flag;
//             } else {
//                 arr1.push(arr[i]);
//             }
//         }
//         return [...loop(arr1, arr1[Math.round(Math.random() * arr1.length)]), ...loop(arr2, arr2[Math.round(Math.random() * arr2.length)])];
//     })(arr, standard);
// }
//
// // console.log(quick([1, 8, 7, 6, 5, 1, 2, 3, 0, 0]));
//
// function count(arr) {
//     let arr1 = [], arr2 = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr1[arr[i]]) {
//             arr1[arr[i]]++;
//         } else {
//             arr1[arr[i]] = 1;
//         }
//     }
//
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] > 0) {
//             arr2.push(i);
//             arr1[i]--;
//             i--;
//         }
//     }
//
//     return arr2
// }
//
// // console.log(count([1, 8, 7, 6, 5, 1, 2, 3, 0, 0]));
//
// function bucket(arr, bucketSize = 3) {
//     let min = arr[0], max = arr[0], bucketNum;
//     let arrs = [], finallyArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     bucketNum = Math.floor((max - min) / bucketSize);
//     arrs.length = bucketNum;
//     for (let i = 0; i < arr.length; i++) {
//         let index = Math.floor((arr[i] - min) / bucketSize);
//         if (arrs[index]) {
//             arrs[index].push(arr[i]);
//         } else {
//             arrs[index] = [arr[i]];
//         }
//     }
//     for (let i = 0; i < arrs.length; i++) {
//         finallyArr = [...finallyArr, ...count(arrs[i])]
//     }
//     return finallyArr;
// }
//
// // console.log(bucket([1, 8, 7, 6, 5, 1, 2, 3, 0, 0, 0, 4, 4, 6, 2, 4, 1, 9, 3, 3, 3]));
//
// function radix(arr) {
//     let radixArr = [], index = 0, flag = true, resultArr = [];
//     radixArr.length = 10;
//
//     while (flag) {
//         flag = false;
//         for (let i = 0; i < arr.length; i++) {
//             let length = arr[i].toString().length, arrIndex = 0;
//             if (length - index > 0) {
//                 flag = true;
//                 arrIndex = arr[i].toString()[index];
//             }
//             if (radixArr[arrIndex]) {
//                 radixArr[arrIndex].push(arr[i]);
//             } else {
//                 radixArr[arrIndex] = [arr[i]];
//             }
//         }
//         if (flag) {
//             resultArr = [];
//             for (let i = 0; i < radixArr.length; i++) {
//                 resultArr = [...resultArr, ...radixArr[i]];
//             }
//         }
//
//         radixArr = [];
//         index++;
//     }
//
//     return resultArr;
// }
//
// console.log(radix([1, 8, 7, 6, 5, 1, 2, 3, 0, 0, 0, 4, 4, 6, 2, 4, 1, 9, 3, 3, 3]));
