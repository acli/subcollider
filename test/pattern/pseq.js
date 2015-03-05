"use strict";

import assert from "power-assert";
import SCPseq from "../../src/pattern/pseq";

describe("SCPseq", () => {
  describe("constructor", () => {
    context("(list: any[], repeats: number, offset:number)", () => {
      it("should return a new SCPseq", () => {
        let p = new SCPseq([ 0, 1, 2, 3 ], 10, 2);

        assert(p instanceof SCPseq);
      });
    });
  });
  describe("#next", () => {
    context("(): iter-value", () => {
      it("should return an iterator value", () => {
        let p = new SCPseq([ 0, new SCPseq([ 1 ]), 2, 3 ], 3, 2);

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
        assert.deepEqual(p.next(), { value: 0, done: false }, 10);
        assert.deepEqual(p.next(), { value: 1, done: false }, 11);
        assert.deepEqual(p.next(), { value: null, done: true }, 12);
      });
    });
  });
});
