"use strict";

import SCPser from "./pser";

export class SCPseq extends SCPser {
  constructor(list, repeats = 1, offset = 0) {
    super(list, repeats * list.length, offset);
  }
}

export default SCPseq;
