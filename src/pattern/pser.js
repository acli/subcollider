"use strict";

import SCPattern from "./pattern";
import SCListPattern from "./list-pattern";
import * as object from "../object";

export class SCPser extends SCListPattern {
  constructor(list, repeats = 1, offset = 0) {
    super(list, repeats, offset);
  }

  next() {
    if (this._repeats <= this._count) {
      return { value: null, done: true };
    }

    let index = (this._count + this._offset) % this._list.length;
    let item = this._list[index];
    let value = SCPattern.valueOf(item);

    if (value.done) {
      object.perform(item, "reset");
      this._count += 1;
      return this.next();
    }

    if (!object.respondsTo(item, "next")) {
      this._count += 1;
    }

    return value;
  }
}

export default SCPser;
