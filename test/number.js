"use strict";

import assert from "power-assert";
import * as _ from "../src/number";

let closeTo = (actual, expected, delta) => Math.abs(actual - expected) <= delta;

describe("number", () => {
  describe("cpsmidi", () => {
    context("(cps: number): number", () => {
      it("should convert cycles per second to MIDI note", () => {
        assert(closeTo(_.cpsmidi(261.625565300), 60, 1e-6));
        assert(closeTo(_.cpsmidi(293.664767917), 62, 1e-6));
        assert(closeTo(_.cpsmidi(329.627556912), 64, 1e-6));
        assert(closeTo(_.cpsmidi(349.228231433), 65, 1e-6));
        assert(closeTo(_.cpsmidi(391.995435981), 67, 1e-6));
        assert(closeTo(_.cpsmidi(440.000000000), 69, 1e-6));
        assert(closeTo(_.cpsmidi(493.883301256), 71, 1e-6));
        assert(closeTo(_.cpsmidi(523.251130601), 72, 1e-6));
      });
    });
  });
  describe("expexp", () => {
    context("(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number", () => {
      it("map a value from an exponential range to an exponential range", () => {
        assert(closeTo(_.expexp(60, 1, 128, 0.01, 1), 0.48717279404853, 1e-6));
        assert(closeTo(_.expexp(62, 1, 128, 0.01, 1), 0.50257276019915, 1e-6));
        assert(closeTo(_.expexp(64, 1, 128, 0.01, 1), 0.51794746792312, 1e-6));
        assert(closeTo(_.expexp(65, 1, 128, 0.01, 1), 0.52562561103797, 1e-6));
        assert(closeTo(_.expexp(67, 1, 128, 0.01, 1), 0.54096396939991, 1e-6));
        assert(closeTo(_.expexp(69, 1, 128, 0.01, 1), 0.55627904696757, 1e-6));
        assert(closeTo(_.expexp(71, 1, 128, 0.01, 1), 0.57157155255786, 1e-6));
        assert(closeTo(_.expexp(72, 1, 128, 0.01, 1), 0.57920955107702, 1e-6));
      });
    });
  });
  describe("explin", () => {
    context("(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number", () => {
      it("should map a value from an exponential range to a linear range", () => {
        assert(closeTo(_.explin(60, 1, 128, 0, 1), 0.8438415136583, 1e-6));
        assert(closeTo(_.explin(62, 1, 128, 0, 1), 0.8505994729124, 1e-6));
        assert(closeTo(_.explin(64, 1, 128, 0, 1), 0.8571428571428, 1e-6));
        assert(closeTo(_.explin(65, 1, 128, 0, 1), 0.8603382590040, 1e-6));
        assert(closeTo(_.explin(67, 1, 128, 0, 1), 0.8665841700654, 1e-6));
        assert(closeTo(_.explin(69, 1, 128, 0, 1), 0.8726463509683, 1e-6));
        assert(closeTo(_.explin(71, 1, 128, 0, 1), 0.8785353027863, 1e-6));
        assert(closeTo(_.explin(72, 1, 128, 0, 1), 0.8814178573489, 1e-6));
      });
    });
  });
  describe("linexp", () => {
    context("(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number", () => {
      it("should map a value from a linear range to an exponential range", () => {
        assert(closeTo(_.linexp(60, 0, 128, 0.01, 1), 0.0865964323360, 1e-6));
        assert(closeTo(_.linexp(62, 0, 128, 0.01, 1), 0.0930572040929, 1e-6));
        assert(closeTo(_.linexp(64, 0, 128, 0.01, 1), 0.1000000000000, 1e-6));
        assert(closeTo(_.linexp(65, 0, 128, 0.01, 1), 0.1036632928437, 1e-6));
        assert(closeTo(_.linexp(67, 0, 128, 0.01, 1), 0.1113973859994, 1e-6));
        assert(closeTo(_.linexp(69, 0, 128, 0.01, 1), 0.1197085030495, 1e-6));
        assert(closeTo(_.linexp(71, 0, 128, 0.01, 1), 0.1286396944937, 1e-6));
        assert(closeTo(_.linexp(72, 0, 128, 0.01, 1), 0.1333521432163, 1e-6));
      });
    });
  });
  describe("linlin", () => {
    context("(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number", () => {
      it("should map a value from a linear range to a linear range", () => {
        assert(closeTo(_.linlin(60, 0, 128, 0, 1), 0.4687500, 1e-6));
        assert(closeTo(_.linlin(62, 0, 128, 0, 1), 0.4843750, 1e-6));
        assert(closeTo(_.linlin(64, 0, 128, 0, 1), 0.5000000, 1e-6));
        assert(closeTo(_.linlin(65, 0, 128, 0, 1), 0.5078125, 1e-6));
        assert(closeTo(_.linlin(67, 0, 128, 0, 1), 0.5234375, 1e-6));
        assert(closeTo(_.linlin(69, 0, 128, 0, 1), 0.5390625, 1e-6));
        assert(closeTo(_.linlin(71, 0, 128, 0, 1), 0.5546875, 1e-6));
        assert(closeTo(_.linlin(72, 0, 128, 0, 1), 0.5625000, 1e-6));
      });
    });
  });
  describe("midicps", () => {
    context("(midi: number): number", () => {
      it("should convert MIDI note to cycles per second", () => {
        assert(closeTo(_.midicps(60), 261.625565300, 1e-6));
        assert(closeTo(_.midicps(62), 293.664767917, 1e-6));
        assert(closeTo(_.midicps(64), 329.627556912, 1e-6));
        assert(closeTo(_.midicps(65), 349.228231433, 1e-6));
        assert(closeTo(_.midicps(67), 391.995435981, 1e-6));
        assert(closeTo(_.midicps(69), 440.000000000, 1e-6));
        assert(closeTo(_.midicps(71), 493.883301256, 1e-6));
        assert(closeTo(_.midicps(72), 523.251130601, 1e-6));
      });
    });
  });
  describe("midiratio", () => {
    context("(midi: number): number", () => {
      it("should convert an interval in semitones to a ratio", () => {
        assert(closeTo(_.midiratio( 0), 1.0000000000000, 1e-6));
        assert(closeTo(_.midiratio( 2), 1.1224620483089, 1e-6));
        assert(closeTo(_.midiratio( 4), 1.2599210498937, 1e-6));
        assert(closeTo(_.midiratio( 5), 1.3348398541685, 1e-6));
        assert(closeTo(_.midiratio( 7), 1.4983070768743, 1e-6));
        assert(closeTo(_.midiratio( 9), 1.6817928305039, 1e-6));
        assert(closeTo(_.midiratio(11), 1.8877486253586, 1e-6));
        assert(closeTo(_.midiratio(12), 1.9999999999945, 1e-6));
      });
    });
  });
  describe("ratiomidi", () => {
    context("(ratio: number): number", () => {
      it("should convert a ratio to an interval in semitones", () => {
        assert(closeTo(_.ratiomidi(1.0000000000000),  0, 1e-6));
        assert(closeTo(_.ratiomidi(1.1224620483089),  2, 1e-6));
        assert(closeTo(_.ratiomidi(1.2599210498937),  4, 1e-6));
        assert(closeTo(_.ratiomidi(1.3348398541685),  5, 1e-6));
        assert(closeTo(_.ratiomidi(1.4983070768743),  7, 1e-6));
        assert(closeTo(_.ratiomidi(1.6817928305039),  9, 1e-6));
        assert(closeTo(_.ratiomidi(1.8877486253586), 11, 1e-6));
        assert(closeTo(_.ratiomidi(1.9999999999945), 12, 1e-6));
      });
    });
  });
});
