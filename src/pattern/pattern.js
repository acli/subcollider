"use strict";

import * as object from "../object";

export class SCPattern {
  next() {
    return { value: null, done: true };
  }

  nextN(n) {
    let result = new Array(n);

    for (let i = 0; i < n; i++) {
      result[i] = this.next().value;
    }

    return result;
  }

  map(fun, ...args) {
    let newPattern = new SCPattern();

    newPattern.next = () => {
      let iterValue = this.next();
      let value = fun.apply(null, [ iterValue.value ].concat(args).map((arg) => {
        return SCPattern.valueOf(arg).value;
      }));

      return { value: value, done: iterValue.done };
    };

    return newPattern;
  }

  static valueOf(item) {
    let value = object.respondsTo(item, "next") ? item.next() : item;

    if (!value || typeof value !== "object") {
      value = { value: value, done: false };
    }

    return value;
  }
}

export default SCPattern;
