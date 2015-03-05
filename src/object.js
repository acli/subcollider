"use strict";

export let respondsTo = (obj, methodName) => {
  return !!(obj && typeof obj[methodName] === "function");
};

export let perform = (obj, methodName, ...args) => {
  if (respondsTo(obj, methodName)) {
    return obj[methodName].apply(obj, args);
  }
  return null;
};
