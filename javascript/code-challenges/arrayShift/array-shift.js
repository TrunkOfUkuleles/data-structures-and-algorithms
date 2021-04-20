"use strict";

let arr = [2, 3, 4, 5, 6, 7, 8, 9];
let inp = 42;

function insertShiftArray (arr, num) {
  let result = [];
  //determine the index of the middle
  let target = Math.floor(arr.length / 2);
  console.log("here", target, arr.length);
  //loop over to a array, adding at the index to new array

  for (let i = 0; i < arr.length; ++i) {
    if (i === target) {
      result[i] = num;

      console.log("HOP: ", result[i], i);

      for (let j = i; j < arr.length; j++) {
        result[j + 1] = arr[j];
      }
      //return new array
      return result;
    } else {
      result[i] = arr[i];
      console.log("hup: ", arr[i], result[i]);
    }
  }
}
console.log(insertShiftArray(arr, inp));

function deleteShiftArray (arr, num) {
  let result = [];
  let target = Math.floor(arr.length / 2);
  console.log("here", target, arr.length);
  for (let i = 0; i < arr.length; ++i) {
    if (i === target) {
      result[i] = num;

      console.log("HOP: ", result[i], i);

      for (let j = i; j < arr.length; j++) {
        result[j - 1] = arr[j];
      }
      return result;
    } else {
      result[i] = arr[i];
      console.log("hup: ", arr[i], result[i]);
    }
  }
}

// let target = Math.floor(arr.length / 2)
// arr.splice(target, 0, num

module.exports = {
  insertShiftArray: (arr, num) => {
    insertShiftArray(arr, num);
  },
  deleteShiftArray: (arr, num) => {
    insertShiftArray(arr, num);
  },
};
