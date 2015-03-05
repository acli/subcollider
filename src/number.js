"use strict";

/// # abs
/// Math.abs
/// ## Interface
/// `sc.abs(x: number): number`
export let abs = Math.abs;

/// # acos
/// Math.acos
/// ## Interface
/// `sc.acos(x: number): number`
export let acos = Math.acos;

/// # asin
/// Math.asin
/// ## Interface
/// `sc.asin(x: number): number`
export let asin = Math.asin;

/// # atan
/// Math.atan
/// ## Interface
/// `sc.atan(x: number): number`
export let atan = Math.atan;

/// # atan2
/// Math.atan2
/// ## Interface
/// `sc.atan(y: number, x: number): number`
export let atan2 = Math.atan2;

/// # ceil
/// Math.ceil
/// ## Interface
/// `sc.ceil(x: number): number`
export let ceil = Math.ceil;

/// # cos
/// Math.cos
/// ## Interface
/// `sc.cos(x: number): number`
export let cos = Math.cos;

/// # cosh
/// hyperbolic cosine
/// ## Interface
/// `sc.cosh(x: number): number`
export let cosh = (x) => {
  return (Math.pow(Math.E, x) + Math.pow(Math.E, -x)) * 0.5;
};

/// # cpsmidi
/// convert cycles per second to MIDI note
/// ## Interface
/// `sc.cpsmidi(cps: number): number`
/// ## Example
/// ```js
/// sc.cpsmidi(440); // => 69
/// ```
export let cpsmidi = (cps) => {
  return Math.log(cps * 1 / 440) * Math.LOG2E * 12 + 69;
};

/// # degrad
/// converts degree to radian
/// ## Interface
/// `sc.degrad(deg: number): number`
export let degrad = (deg) => {
  return deg * Math.PI / 180;
};

/// # exp
/// Math.exp
/// ## Interface
/// `sc.exp(x: number): number`
export let exp = Math.exp;

/// # expexp
/// map a value from an exponential range to an exponential range
/// ## Interface
/// `sc.expexp(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number`
export let expexp = (value, inMin, inMax, outMin, outMax) => {
  return Math.pow(outMax / outMin, Math.log(value / inMin) / Math.log(inMax / inMin)) * outMin;
};

/// # explin
/// map a value from an exponential range to a linear range
/// ## Interface
/// `sc.explin(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number`
export let explin = (value, inMin, inMax, outMin, outMax) => {
  return (((Math.log(value / inMin)) / (Math.log(inMax / inMin))) * (outMax - outMin)) + outMin;
};

/// # floor
/// Math.floor
/// ## Interface
/// `sc.floor(x: number): number`
export let floor = Math.floor;

/// # linexp
/// map a value from a linear range to an exponential range
/// ## Interface
/// `sc.linexp(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number`
export let linexp = (value, inMin, inMax, outMin, outMax) => {
  return Math.pow(outMax / outMin, (value - inMin) / (inMax - inMin)) * outMin;
};

/// # linlin
/// map a value from a linear range to a linear range
/// ## Interface
/// `sc.linlin(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number`
export let linlin = (value, inMin, inMax, outMin, outMax) => {
  return (value - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
};

/// # log
/// Math.log
/// ## Interface
/// `sc.log(x: number): number`
export let log = Math.log;

/// # log10
/// base 10 logarithm
/// ## Interface
/// `sc.log10(x: number): number`
export let log10 = (x) => {
  return Math.log(x) * Math.LOG10E;
};

/// # log2
/// base 2 logarithm
/// ## Interface
/// `sc.log2(x: number): number`
export let log2 = (x) => {
  return Math.log(x) * Math.LOG2E;
};

/// # max
/// maximum
/// ## Interface
/// `sc.max(a: number, b: number): number`
export let max = (a, b) => {
  return Math.max(a, b);
};

/// # midicps
/// convert MIDI note to cycles per second
/// ## Interface
/// `sc.midicps(midi: number): number`
/// ## Example
/// ```js
/// sc.midicps(69); // => 440
/// ```
export let midicps = (midi) => {
  return 440 * Math.pow(2, (midi - 69) * 1 / 12);
};

/// # midiratio
/// convert an interval in semitones to a ratio
/// ## Interface
/// `sc.midiratio(midi: number): number`
/// ## Example
/// ```js
/// sc.midiratio(7); // => 1.4983070768743
/// ```
export let midiratio = (midi) => {
  return Math.pow(2, midi * 1 / 12);
};

/// # min
/// minimum
/// ## Interface
/// `sc.min(a: number, b: number): number`
export let min = (a, b) => {
  return Math.min(a, b);
};

/**doc:md
  # pow
  Math.pow
  ## Interface
  `sc.pow(base: number, exponent: number): number`
*/
export let pow = Math.pow;

/// # raddeg
/// converts radian to degree
/// ## Interface
/// `sc.raddeg(deg: number): number`
export let raddeg = (rad) => {
  return rad * 180 / Math.PI;
};

/// # ratiomidi
/// convert a ratio to an interval in semitone
/// ## Interface
/// `sc.ratiomidi(ratio: number): number`
/// ## Example
/// ```js
/// sc.ratiomidi(1.5); // => 7.0195500086539
/// ```
export let ratiomidi = (ratio) => {
  return Math.log(ratio) * Math.LOG2E * 12;
};

/// # round
/// Math.round
/// ## Interface
/// `sc.round(x: number): number`
export let round = Math.round;

/// # sin
/// Math.sin
/// ## Interface
/// `sc.sin(x: number): number`
export let sin = Math.sin;

/// # sinh
/// hyperbolic sine
/// ## Interface
/// `sc.sinh(x: number): number`
export let sinh = (x) => {
  return (Math.pow(Math.E, x) - Math.pow(Math.E, -x)) * 0.5;
};

/// # sqrt
/// Math.sqrt
/// ## Interface
/// `sc.sqrt(x: number): number`
export let sqrt = Math.sqrt;

/// # tan
/// Math.tan
/// ## Interface
/// `sc.tan(x: number): number`
export let tan = Math.tan;

/// # tanh
/// hyperbolic tangent
/// ## Interface
/// `sc.tanh(x: number): number`
export let tanh = (x) => {
  return sinh(x) / cosh(x);
};
