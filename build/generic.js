"use strict";
const last = (arr) => arr.slice(-1)[0];
const prepend = (arr, item) => {
    arr.unshift(item);
    return arr[0];
};
console.log(last([1, "2", 3, "4", 5]));
console.log(prepend([1, "2", 3, "4", 5], "new"));
