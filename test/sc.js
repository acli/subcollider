"use strict";

import assert from "power-assert";
import sc from "../src/sc";

describe("sc", () => {
  before(() => {
    sc.addFunction("add", (a, b) => {
      return a + b;
    });
    sc.addFunction("mul", (a, b) => {
      return a * b;
    });
    sc.addFunction("at", (array, index) => {
      return array[index];
    }, { array: true });
  });
  after(() => {
    sc.removeFunction("add");
    sc.removeFunction("mul");
    sc.removeFunction("at");
  });

  describe("", () => {
    context("(value: any): SC", () => {
      it("should return a wrapped object for chaining methods", () => {
        assert(sc(1).add(2).mul(3).value() === 9);
      });
    });
    context("(value: any[]): SC", () => {
      it("should be an array when unwrapped", () => {
        assert.deepEqual(sc([ 1, 2, 3 ]).add(2).mul(3).value(), [ 9, 12, 15 ]);
      });
      it("if the function category is 'array'", () => {
        assert(sc([ 1, 2, 3 ]).at(1).value() === 2);
      });
    });
  });
  describe("expand multi arguments", () => {
    context("when given an array as arguments", () => {
      it("should deeply expand and return an array as a result", () => {
        assert.deepEqual(sc(100).add([ 20, 30, [ 40, 50 ] ]).value(), [
          120, 130, [ 140, 150 ]
        ]);
        assert.deepEqual(sc([ 1, 2, 3, 4, 5 ]).at([ 2, 4 ]).value(), [
          3, 5
        ]);
      });
    });
    context("when given a sc-wrapped array as arguments", () => {
      it("should not expand, use as an array argument", () => {
        assert.deepEqual(sc(100).add([ 20, 30, sc([ 40, 50 ]) ]).value(), [
          120, 130, 100 + [ 40, 50 ]
        ]);
      });
    });
  });
});
