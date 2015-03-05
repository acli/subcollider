"use strict";

import assert from "power-assert";
import SCPattern from "../../src/pattern/pattern";

describe("SCPattern", () => {
  describe("constructor", () => {
    context("()", () => {
      it("should return a new SCPattern", () => {
        let p = new SCPattern();

        assert(p instanceof SCPattern);
      });
    });
  });
  describe("#next", () => {
    context("(): iter-value", () => {
      it("should return an iterator value", () => {
        let p = new SCPattern();

        assert.deepEqual(p.next(), { value: null, done: true }, 0);
        assert.deepEqual(p.next(), { value: null, done: true }, 1);
        assert.deepEqual(p.next(), { value: null, done: true }, 2);
        assert.deepEqual(p.next(), { value: null, done: true }, 3);
        assert.deepEqual(p.next(), { value: null, done: true }, 4);
      });
    });
  });
  describe("#nextN", () => {
    context("(n: number): any[]", () => {
      it("should return an array", () => {
        let p = new SCPattern();

        assert.deepEqual(p.nextN(5), [ null, null, null, null, null ]);
      });
    });
  });
  describe("#map", () => {
    context("(fun: function): SCPattern", () => {
      it("create a new SCPattern that returns a mapped value by given function", () => {
        let p = new SCPattern();

        p = p.map(() => true);

        assert.deepEqual(p.nextN(5), [ true, true, true, true, true ]);
      });
    });
  });
  describe(".valueOf", () => {
    context("(item: any): iter-value", () => {
      it("should return an iter-value", () => {
        let iter = {
          next: () => {
            return { value: 1, done: true };
          }
        };
        assert.deepEqual(SCPattern.valueOf(0), { value: 0, done: false });
        assert.deepEqual(SCPattern.valueOf(iter), { value: 1, done: true });
      });
    });
  });
});
