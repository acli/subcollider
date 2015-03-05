"use strict";

export class SCRandom {
  constructor(seed) {
    if (typeof seed !== "number" || !isFinite(seed)) {
      seed = Date.now();
    }

    seed += ~(seed <<  15);
    seed ^=   seed >>> 10;
    seed +=   seed <<  3;
    seed ^=   seed >>> 6;
    seed += ~(seed <<  11);
    seed ^=   seed >>> 16;

    let s1 = (1243598713 ^ seed) >>> 0;
    let s2 = (3093459404 ^ seed) >>> 0;
    let s3 = (1821928721 ^ seed) >>> 0;

    /* istanbul ignore next */
    if (s1 <  2) {
      s1 = 1243598713;
    }
    /* istanbul ignore next */
    if (s2 <  8) {
      s2 = 3093459404;
    }
    /* istanbul ignore next */
    if (s3 < 16) {
      s3 = 1821928721;
    }

    this.random = () => {
      s1 = ((s1 & 4294967294) << 12) ^ (((s1 << 13) ^  s1) >>> 19);
      s2 = ((s2 & 4294967288) <<  4) ^ (((s2 <<  2) ^  s2) >>> 25);
      s3 = ((s3 & 4294967280) << 17) ^ (((s3 <<  3) ^  s3) >>> 11);
      return ((s1 ^ s2 ^ s3) >>> 0) / 4294967296;
    };
  }

  next() {
    return { value: this.random(), done: false };
  }

  valueOf() {
    return this.random();
  }
}

export default SCRandom;
