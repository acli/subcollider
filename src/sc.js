"use strict";

import * as array from "./array";

class SC {
  constructor(value) {
    this._value = value;
  }

  value() {
    return this._value;
  }
}

let sc = (value) => {
  return new SC(value);
};

let peel = (value) => {
  return value instanceof SC ? value.value() : value;
};

sc.addFunction = (name, func, opts) => {
  sc[name] = func;

  let isArray = !!(opts ? opts.array : false);

  SC.prototype[name] = function(...args) {
    let value;

    args = array.flop(args);

    if (!isArray && Array.isArray(this._value)) {
      value = new Array(Math.max(this._value.length, args.length));
      for (let i = 0; i < value.length; i++) {
        let that = sc(this._value[i % this._value.length]);
        value[i] = peel(this[name].apply(that, args[i % args.length]));
      }
    } else {
      if (args.length === 1) {
        value = func.apply(null, [ this._value ].concat(args[0].map(peel)));
      } else {
        value = args.map(args => peel(this[name].apply(this, args)));
      }
    }

    return new SC(value);
  };
};

sc.removeFunction = (name) => {
  delete sc[name];
  delete SC.prototype[name];
};

export default sc;
