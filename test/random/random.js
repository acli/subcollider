"use strict";

import assert from "power-assert";
import SCRandom from "../../src/random/random";

let closeTo = (actual, expected, delta) => Math.abs(actual - expected) <= delta;

describe("SCRandom", () => {
  describe("constructor", () => {
    context("()", () => {
      it("should return a new SCRandom", () => {
        let random = new SCRandom();

        assert(random instanceof SCRandom);
      });
    });
    context("(seed: number)", () => {
      it("should return a new SCRandom that has the given seed", () => {
        let random = new SCRandom(1234);

        assert(random instanceof SCRandom);
      });
    });
  });
  describe("#random", () => {
    context("(): number", () => {
      it("should return a random number, this method is bound to the instance", () => {
        let random = new SCRandom(1234).random;

        assert(closeTo(random(), 0.50053668022156, 1e-6), 0);
        assert(closeTo(random(), 0.75012230873108, 1e-6), 1);
        assert(closeTo(random(), 0.97789621353149, 1e-6), 2);
        assert(closeTo(random(), 0.18794584274292, 1e-6), 3);
        assert(closeTo(random(), 0.42901861667633, 1e-6), 4);
        assert(closeTo(random(), 0.78861820697784, 1e-6), 5);
        assert(closeTo(random(), 0.72664785385132, 1e-6), 6);
        assert(closeTo(random(), 0.47415328025818, 1e-6), 7);
        assert(closeTo(random(), 0.28603541851044, 1e-6), 8);
        assert(closeTo(random(), 0.61377775669098, 1e-6), 9);
      });
    });
  });
  describe("#next", () => {
    context("(): iter-value", () => {
      it("should return an iterator value with a random number", () => {
        let rand1 = new SCRandom(1234);
        let rand2 = new SCRandom(1234);

        assert.deepEqual(rand1.next(), { value: rand2.random(), done: false }, 0);
        assert.deepEqual(rand1.next(), { value: rand2.random(), done: false }, 1);
        assert.deepEqual(rand1.next(), { value: rand2.random(), done: false }, 2);
        assert.deepEqual(rand1.next(), { value: rand2.random(), done: false }, 3);
        assert.deepEqual(rand1.next(), { value: rand2.random(), done: false }, 4);
        assert.deepEqual(rand1.next(), { value: rand2.random(), done: false }, 5);
        assert.deepEqual(rand1.next(), { value: rand2.random(), done: false }, 6);
        assert.deepEqual(rand1.next(), { value: rand2.random(), done: false }, 7);
        assert.deepEqual(rand1.next(), { value: rand2.random(), done: false }, 8);
        assert.deepEqual(rand1.next(), { value: rand2.random(), done: false }, 9);
      });
    });
  });
});
