"use strict";

import assert from "power-assert";
import * as _ from "../src/array";

describe("array", () => {
  describe("at", () => {
    context("(array: any[], index: number): any", () => {
      it("return the item at the index", () => {
        let array = [ 0, 2, 4, 5, 7, 9, 11 ];

        assert(_.at(array, -9) === undefined);
        assert(_.at(array, -8) === undefined);
        assert(_.at(array, -7) === undefined);
        assert(_.at(array, -6) === undefined);
        assert(_.at(array, -5) === undefined);
        assert(_.at(array, -4) === undefined);
        assert(_.at(array, -3) === undefined);
        assert(_.at(array, -2) === undefined);
        assert(_.at(array, -1) === undefined);
        assert(_.at(array,  0) === 0);
        assert(_.at(array,  1) === 2);
        assert(_.at(array,  2) === 4);
        assert(_.at(array,  3) === 5);
        assert(_.at(array,  4) === 7);
        assert(_.at(array,  5) === 9);
        assert(_.at(array,  6) === 11);
        assert(_.at(array,  7) === undefined);
        assert(_.at(array,  8) === undefined);
        assert(_.at(array,  9) === undefined);
      });
    });
  });
  describe("clipAt", () => {
    context("(array: any[], index: number): any", () => {
      it("same as `at`, but values for index greater than the size of the Array will be clipped to the last index", () => {
        let array = [ 0, 2, 4, 5, 7, 9, 11 ];

        assert(_.clipAt(array, -9) === 0);
        assert(_.clipAt(array, -8) === 0);
        assert(_.clipAt(array, -7) === 0);
        assert(_.clipAt(array, -6) === 0);
        assert(_.clipAt(array, -5) === 0);
        assert(_.clipAt(array, -4) === 0);
        assert(_.clipAt(array, -3) === 0);
        assert(_.clipAt(array, -2) === 0);
        assert(_.clipAt(array, -1) === 0);
        assert(_.clipAt(array,  0) === 0);
        assert(_.clipAt(array,  1) === 2);
        assert(_.clipAt(array,  2) === 4);
        assert(_.clipAt(array,  3) === 5);
        assert(_.clipAt(array,  4) === 7);
        assert(_.clipAt(array,  5) === 9);
        assert(_.clipAt(array,  6) === 11);
        assert(_.clipAt(array,  7) === 11);
        assert(_.clipAt(array,  8) === 11);
        assert(_.clipAt(array,  9) === 11);
      });
    });
  });
  describe("flop", () => {
    context("(array: any[]): any[][]", () => {
      it("invert rows and colums in a two dimensional Array", () => {
        assert.deepEqual(_.flop([]), [ [ ] ]);
        assert.deepEqual(_.flop([ [ 1, 2, 3 ], [ 4, 5, 6 ], 7 ]), [
          [ 1, 4, 7 ],
          [ 2, 5, 7 ],
          [ 3, 6, 7 ],
        ]);
      });
    });
  });
  describe("foldAt", () => {
    context("(array: any[], index: number): any", () => {
      it("same as `at`, but values for *index* greater than the size of the Array will be folded back", () => {
        let array = [ 0, 2, 4, 5, 7, 9, 11 ];

        assert(_.foldAt(array, -9) === 5);
        assert(_.foldAt(array, -8) === 7);
        assert(_.foldAt(array, -7) === 9);
        assert(_.foldAt(array, -6) === 11);
        assert(_.foldAt(array, -5) === 9);
        assert(_.foldAt(array, -4) === 7);
        assert(_.foldAt(array, -3) === 5);
        assert(_.foldAt(array, -2) === 4);
        assert(_.foldAt(array, -1) === 2);
        assert(_.foldAt(array,  0) === 0);
        assert(_.foldAt(array,  1) === 2);
        assert(_.foldAt(array,  2) === 4);
        assert(_.foldAt(array,  3) === 5);
        assert(_.foldAt(array,  4) === 7);
        assert(_.foldAt(array,  5) === 9);
        assert(_.foldAt(array,  6) === 11);
        assert(_.foldAt(array,  7) === 9);
        assert(_.foldAt(array,  8) === 7);
        assert(_.foldAt(array,  9) === 5);
      });
    });
  });
  describe("wrapAt", () => {
    context("(array: any[], index: number): any", () => {
      it("same as `at`, but values for index greater than the size of the Array will be wrapped around to 0", () => {
        let array = [ 0, 2, 4, 5, 7, 9, 11 ];

        assert(_.wrapAt(array, -9) === 9);
        assert(_.wrapAt(array, -8) === 11);
        assert(_.wrapAt(array, -7) === 0);
        assert(_.wrapAt(array, -6) === 2);
        assert(_.wrapAt(array, -5) === 4);
        assert(_.wrapAt(array, -4) === 5);
        assert(_.wrapAt(array, -3) === 7);
        assert(_.wrapAt(array, -2) === 9);
        assert(_.wrapAt(array, -1) === 11);
        assert(_.wrapAt(array,  0) === 0);
        assert(_.wrapAt(array,  1) === 2);
        assert(_.wrapAt(array,  2) === 4);
        assert(_.wrapAt(array,  3) === 5);
        assert(_.wrapAt(array,  4) === 7);
        assert(_.wrapAt(array,  5) === 9);
        assert(_.wrapAt(array,  6) === 11);
        assert(_.wrapAt(array,  7) === 0);
        assert(_.wrapAt(array,  8) === 2);
        assert(_.wrapAt(array,  9) === 4);
      });
    });
  });
  describe("blendAt", () => {
    context("(array: any[], index: number, method='clipAt'): any", () => {
      it("return a linearly interpolated value between the two closest indices", () => {
        let array = [ 0, 2, 4, 5, 7, 9, 11 ];

        assert(_.blendAt(array, 0.00) === 0.0);
        assert(_.blendAt(array, 1.25) === 2.5);
        assert(_.blendAt(array, 2.50) === 4.5);
        assert(_.blendAt(array, 3.75) === 6.5);
        assert(_.blendAt(array, 4.00) === 7.0);
        assert(_.blendAt(array, 20.5, "xxxxAt") === 11);
        assert(_.blendAt(array, 20.5, "wrapAt") === 5.5);
        assert(_.blendAt(array, 20.5, "foldAt") === 6.0);
      });
    });
  });
});
