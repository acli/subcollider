"use strict";

export let defaults = (...args) => {
  for (let i = 0; i < args.length; i++) {
    if (args[i] !== undefined) {
      return args[i];
    }
  }
  return null;
};
