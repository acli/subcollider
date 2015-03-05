"use strict";

import sc from "./sc";
import * as array from "./array";
import * as boolean from "./boolean";
import * as number from "./number";
import * as object from "./object";

Object.keys(array).forEach((key) => {
  sc.addFunction(key, number[key], {
    array: true
  });
});

Object.keys(boolean).forEach((key) => {
  sc.addFunction(key, number[key]);
});

Object.keys(number).forEach((key) => {
  sc.addFunction(key, number[key]);
});

Object.keys(object).forEach((key) => {
  sc.addFunction(key, number[key]);
});

export default sc;
