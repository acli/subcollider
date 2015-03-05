"use strict";

import SCPattern from "./pattern";

export class SCListPattern extends SCPattern {
  constructor(list, repeats, offset) {
    super();
    this._list = list;
    this._repeats = repeats !== Infinity ? Math.max(0, repeats|0) : Infinity;
    this._offset = Math.max(0, offset|0);
    this._count = 0;
  }

  reset() {
    this._count = 0;
  }
}

export default SCListPattern;
