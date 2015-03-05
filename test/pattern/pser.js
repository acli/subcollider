"use strict";

import assert from "power-assert";
import SCPser from "../../src/pattern/pser";

describe("SCPser", () => {
  describe("constructor", () => {
    context("(list: any[], repeats: number, offset:number)", () => {
      it("should return a new SCPser", () => {
        let p = new SCPser([ 0, 1, 2, 3 ], 10, 2);

        assert(p instanceof SCPser);
      });
    });
  });
  describe("#next", () => {
    context("(): iter-value", () => {
      it("should return an iterator value", () => {
        let p = new SCPser([ 0, new SCPser([ 1 ]), 2, 3 ], 10, 2);

        assert.deepEqual(p.next(), { value: 2, done: false }, 0);
        assert.deepEqual(p.next(), { value: 3, done: false }, 1);
        assert.deepEqual(p.next(), { value: 0, done: false }, 2);
        assert.deepEqual(p.next(), { value: 1, done: false }, 3);
        assert.deepEqual(p.next(), { value: 2, done: false }, 4);
        assert.deepEqual(p.next(), { value: 3, done: false }, 5);
        assert.deepEqual(p.next(), { value: 0, done: false }, 6);
        assert.deepEqual(p.next(), { value: 1, done: false }, 7);
        assert.deepEqual(p.next(), { value: 2, done: false }, 8);
        assert.deepEqual(p.next(), { value: 3, done: false }, 9);
        assert.deepEqual(p.next(), { value: null, done: true }, 10);
      });
    });
  });
});
