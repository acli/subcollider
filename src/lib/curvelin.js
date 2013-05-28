(function(sc) {
  "use strict";

  sc.register("curvelin", {
    Number: function(inMin, inMax, outMin, outMax, curve, clip) {
      if (Array.isArray(inMin) || Array.isArray(inMax) ||
          Array.isArray(outMin) || Array.isArray(outMax)) {
        return [this,inMin,inMax,outMin,outMax].flop().map(function(items) {
          return items[0].curvelin(items[1],items[2],items[3],items[4],curve,clip);
        });
      }
      inMin  = inMin  === void 0 ?  0 : inMin;
      inMax  = inMax  === void 0 ?  1 : inMax;
      outMin = outMin === void 0 ?  0 : outMin;
      outMax = outMax === void 0 ?  1 : outMax;
      curve  = curve  === void 0 ? -4 : curve;
      switch (clip) {
      case "min":
        if (this <= inMin) { return outMin; }
        break;
      case "max":
        if (this >= inMax) { return outMax; }
        break;
      case "minmax":
        /* falls through */
      default:
        if (this <= inMin) { return outMin; }
        if (this >= inMax) { return outMax; }
        break;
      }
      if (Math.abs(curve) < 0.001) {
        return this.linlin(inMin, inMax, outMin, outMax);
      }
      var grow = Math.exp(curve);
      var a = (outMax - outMin) / (1.0 - grow);
      var b = outMin + a;
      var scaled = (this - inMin) / (inMax - inMin);
      return Math.log((b - scaled) / a) / curve;
    },
    Array: function(inMin, inMax, outMin, outMax, curve, clip) {
      return this.map(function(x) { return x.curvelin(inMin, inMax, outMin, outMax, curve, clip); });
    }
  });

})(sc);