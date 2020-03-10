"use strict";

const logItems = function(array) {
  for (let i = 0; i < array.length; i++) {
    const counter = i + 1;
    const value = array[i];
    console.log(counter + "-" + value);
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
