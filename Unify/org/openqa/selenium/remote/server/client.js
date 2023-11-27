'use strict';
var f, l = this;
function n(a) {
  return void 0 !== a;
}
function p(a) {
  return "string" == typeof a;
}
function r() {
}
function aa(a) {
  a.Zb = void 0;
  a.Aa = function() {
    return a.Zb ? a.Zb : a.Zb = new a;
  };
}
function ba(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function t(a) {
  return "array" == ba(a);
}
function ca(a) {
  var b = ba(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function v(a) {
  return "function" == ba(a);
}
function da(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
function ea(a) {
  return a[fa] || (a[fa] = ++ha);
}
var fa = "closure_uid_" + (1e9 * Math.random() >>> 0), ha = 0;
function ja(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ka(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function w(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? w = ja : w = ka;
  return w.apply(null, arguments);
}
function la(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}
var ma = Date.now || function() {
  return +new Date;
};
function x(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.l = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.Qd = function(a, c, g) {
    for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
      d[e - 2] = arguments[e];
    }
    return b.prototype[c].apply(a, d);
  };
}
;function na(a, b) {
  this.code = a;
  this.state = y[a] || oa;
  this.message = b || "";
  a = this.state.replace(/((?:^|\s+)[a-z])/g, function(a) {
    return a.toUpperCase().replace(/^[\s\xa0]+/g, "");
  });
  b = a.length - 5;
  if (0 > b || a.indexOf("Error", b) != b) {
    a += "Error";
  }
  this.name = a;
  a = Error(this.message);
  a.name = this.name;
  this.stack = a.stack || "";
}
x(na, Error);
var oa = "unknown error", y = {15:"element not selectable", 11:"element not visible"};
y[31] = oa;
y[30] = oa;
y[24] = "invalid cookie domain";
y[29] = "invalid element coordinates";
y[12] = "invalid element state";
y[32] = "invalid selector";
y[51] = "invalid selector";
y[52] = "invalid selector";
y[17] = "javascript error";
y[405] = "unsupported operation";
y[34] = "move target out of bounds";
y[27] = "no such alert";
y[7] = "no such element";
y[8] = "no such frame";
y[23] = "no such window";
y[28] = "script timeout";
y[33] = "session not created";
y[10] = "stale element reference";
y[21] = "timeout";
y[25] = "unable to set cookie";
y[26] = "unexpected alert open";
y[13] = oa;
y[9] = "unknown command";
na.prototype.toString = function() {
  return this.name + ": " + this.message;
};
var pa;
function qa(a, b) {
  this.c = a;
  this.j = b;
  this.b = 0;
  this.a = null;
}
qa.prototype.get = function() {
  if (0 < this.b) {
    this.b--;
    var a = this.a;
    this.a = a.next;
    a.next = null;
  } else {
    a = this.c();
  }
  return a;
};
qa.prototype.put = function(a) {
  this.j(a);
  100 > this.b && (this.b++, a.next = this.a, this.a = a);
};
function ra(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ra);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
x(ra, Error);
ra.prototype.name = "CustomError";
function sa(a, b, c) {
  this.reset(a, b, c, void 0, void 0);
}
sa.prototype.a = null;
var va = 0;
sa.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || va++;
  this.j = d || ma();
  this.o = a;
  this.c = b;
  this.b = c;
  delete this.a;
};
function wa() {
  this.a = ma();
}
var xa = new wa;
wa.prototype.set = function(a) {
  this.a = a;
};
wa.prototype.reset = function() {
  this.set(ma());
};
wa.prototype.get = function() {
  return this.a;
};
var ya;
function za(a) {
  return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
}
function Aa(a) {
  a = String(a);
  if (za(a)) {
    try {
      return eval("(" + a + ")");
    } catch (b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
function Ba() {
}
function Ca(a, b) {
  var c = [];
  Da(a, b, c);
  return c.join("");
}
function Da(a, b, c) {
  if (null == b) {
    c.push("null");
  } else {
    if ("object" == typeof b) {
      if (t(b)) {
        var d = b;
        b = d.length;
        c.push("[");
        for (var e = "", g = 0; g < b; g++) {
          c.push(e), Da(a, d[g], c), e = ",";
        }
        c.push("]");
        return;
      }
      if (b instanceof String || b instanceof Number || b instanceof Boolean) {
        b = b.valueOf();
      } else {
        c.push("{");
        e = "";
        for (d in b) {
          Object.prototype.hasOwnProperty.call(b, d) && (g = b[d], "function" != typeof g && (c.push(e), Ea(d, c), c.push(":"), Da(a, g, c), e = ","));
        }
        c.push("}");
        return;
      }
    }
    switch(typeof b) {
      case "string":
        Ea(b, c);
        break;
      case "number":
        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
        break;
      case "boolean":
        c.push(String(b));
        break;
      case "function":
        c.push("null");
        break;
      default:
        throw Error("Unknown type: " + typeof b);
    }
  }
}
var Fa = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Ga = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
function Ea(a, b) {
  b.push('"', a.replace(Ga, function(a) {
    var b = Fa[a];
    b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), Fa[a] = b);
    return b;
  }), '"');
}
;function Ha(a, b) {
  this.width = a;
  this.height = b;
}
f = Ha.prototype;
f.toString = function() {
  return "(" + this.width + " x " + this.height + ")";
};
f.aspectRatio = function() {
  return this.width / this.height;
};
f.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
f.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
f.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
function Ia(a, b, c) {
  for (var d in a) {
    b.call(c, a[d], d, a);
  }
}
var Ja = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ka(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var g = 0; g < Ja.length; g++) {
      c = Ja[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
function La(a) {
  var b = arguments.length;
  if (1 == b && t(arguments[0])) {
    return La.apply(null, arguments[0]);
  }
  if (b % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var c = {}, d = 0; d < b; d += 2) {
    c[arguments[d]] = arguments[d + 1];
  }
  return c;
}
function Ma(a) {
  var b = arguments.length;
  if (1 == b && t(arguments[0])) {
    return Ma.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0; d < b; d++) {
    c[arguments[d]] = !0;
  }
  return c;
}
;function Na() {
}
Na.prototype.a = function() {
};
function Oa(a) {
  Oa[" "](a);
  return a;
}
Oa[" "] = r;
function Pa(a, b) {
  try {
    return Oa(a[b]), !0;
  } catch (c) {
  }
  return !1;
}
function Qa(a, b) {
  var c = Ra;
  return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
}
;function Sa(a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
    d += c.shift() + e.shift();
  }
  return d + c.join("%s");
}
var Ta = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function Ua(a) {
  if (!Va.test(a)) {
    return a;
  }
  -1 != a.indexOf("&") && (a = a.replace(Wa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Xa, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Ya, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Za, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace($a, "&#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(ab, "&#0;"));
  return a;
}
var Wa = /&/g, Xa = /</g, Ya = />/g, Za = /"/g, $a = /'/g, ab = /\x00/g, Va = /[\x00&<>"']/, bb = String.prototype.repeat ? function(a, b) {
  return a.repeat(b);
} : function(a, b) {
  return Array(b + 1).join(a);
};
function cb(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function db(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
function eb(a) {
  var b = p(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase();
  });
}
;function fb() {
}
aa(fb);
fb.prototype.a = 0;
function gb(a) {
  this.a = a;
  this.b = {};
}
function hb(a, b, c) {
  a.b[b] = c;
  return a;
}
;function ib(a) {
  var b = a.status;
  if (0 == b) {
    return a;
  }
  b = b || 13;
  a = a.value;
  if (!a || !da(a)) {
    throw new na(b, a + "");
  }
  throw new na(b, a.message + "");
}
;function z() {
  0 != jb && (kb[ea(this)] = this);
  this.pa = this.pa;
  this.Ha = this.Ha;
}
var jb = 0, kb = {};
z.prototype.pa = !1;
z.prototype.M = function() {
  if (!this.pa && (this.pa = !0, this.v(), 0 != jb)) {
    var a = ea(this);
    delete kb[a];
  }
};
function lb(a, b) {
  a.pa ? n(void 0) ? b.call(void 0) : b() : (a.Ha || (a.Ha = []), a.Ha.push(n(void 0) ? w(b, void 0) : b));
}
z.prototype.v = function() {
  if (this.Ha) {
    for (; this.Ha.length;) {
      this.Ha.shift()();
    }
  }
};
function A(a) {
  a && "function" == typeof a.M && a.M();
}
;function mb(a, b) {
  b.unshift(a);
  ra.call(this, Sa.apply(null, b));
  b.shift();
}
x(mb, ra);
mb.prototype.name = "AssertionError";
function nb(a, b) {
  throw new mb("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;(function() {
  for (var a = ["ms", "moz", "webkit", "o"], b = 0, c; c = a[b] && !l.requestAnimationFrame; ++b) {
    l.requestAnimationFrame = l[c + "RequestAnimationFrame"], l.cancelAnimationFrame = l[c + "CancelAnimationFrame"] || l[c + "CancelRequestAnimationFrame"];
  }
  if (!l.requestAnimationFrame) {
    var d = 0;
    l.requestAnimationFrame = function(a) {
      var b = (new Date).getTime(), c = Math.max(0, 16 - (b - d));
      d = b + c;
      return l.setTimeout(function() {
        a(b + c);
      }, c);
    };
    l.cancelAnimationFrame || (l.cancelAnimationFrame = function(a) {
      clearTimeout(a);
    });
  }
})();
var ob = [[], []], pb = 0, qb = !1, rb = 0;
function sb(a, b) {
  var c = rb++, d = {yd:{id:c, ma:a.measure, context:b}, Ad:{id:c, ma:a.zd, context:b}, state:{}, Z:void 0, Bb:!1};
  return function() {
    0 < arguments.length ? (d.Z || (d.Z = []), d.Z.length = 0, d.Z.push.apply(d.Z, arguments), d.Z.push(d.state)) : d.Z && 0 != d.Z.length ? (d.Z[0] = d.state, d.Z.length = 1) : d.Z = [d.state];
    d.Bb || (d.Bb = !0, ob[pb].push(d));
    qb || (qb = !0, window.requestAnimationFrame(tb));
  };
}
function tb() {
  qb = !1;
  var a = ob[pb], b = a.length;
  pb = (pb + 1) % 2;
  for (var c, d = 0; d < b; ++d) {
    c = a[d];
    var e = c.yd;
    c.Bb = !1;
    e.ma && e.ma.apply(e.context, c.Z);
  }
  for (d = 0; d < b; ++d) {
    c = a[d], e = c.Ad, c.Bb = !1, e.ma && e.ma.apply(e.context, c.Z), c.state = {};
  }
  a.length = 0;
}
;var ub = "closure_listenable_" + (1e6 * Math.random() | 0);
function vb(a) {
  return !(!a || !a[ub]);
}
var wb = 0;
var xb;
a: {
  var yb = l.navigator;
  if (yb) {
    var zb = yb.userAgent;
    if (zb) {
      xb = zb;
      break a;
    }
  }
  xb = "";
}
function B(a) {
  return -1 != xb.indexOf(a);
}
;function Ab() {
}
;function Bb(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  if ("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, k, m, q, u, E) {
    if ("%" == q) {
      return "%";
    }
    var e = c.shift();
    if ("undefined" == typeof e) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = e;
    return Db[q].apply(null, arguments);
  });
}
var Db = {s:function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + bb(" ", Number(c) - a.length) : bb(" ", Number(c) - a.length) + a;
}, f:function(a, b, c, d, e) {
  d = a.toString();
  isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
  var g = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= Number(a) && (d = g + d);
  if (isNaN(c) || d.length >= Number(c)) {
    return d;
  }
  d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
  a = Number(c) - d.length - g.length;
  return d = 0 <= b.indexOf("-", 0) ? g + d + bb(" ", a) : g + bb(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d;
}, d:function(a, b, c, d, e, g, h, k) {
  return Db.f(parseInt(a, 10), b, c, d, 0, g, h, k);
}};
Db.i = Db.d;
Db.u = Db.d;
var Eb = Array.prototype.indexOf ? function(a, b) {
  return Array.prototype.indexOf.call(a, b, void 0);
} : function(a, b) {
  if (p(a)) {
    return p(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
  }
  for (var c = 0; c < a.length; c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
}, C = Array.prototype.forEach ? function(a, b, c) {
  Array.prototype.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = p(a) ? a.split("") : a, g = 0; g < d; g++) {
    g in e && b.call(c, e[g], g, a);
  }
}, Fb = Array.prototype.filter ? function(a, b) {
  return Array.prototype.filter.call(a, b, void 0);
} : function(a, b) {
  for (var c = a.length, d = [], e = 0, g = p(a) ? a.split("") : a, h = 0; h < c; h++) {
    if (h in g) {
      var k = g[h];
      b.call(void 0, k, h, a) && (d[e++] = k);
    }
  }
  return d;
}, Gb = Array.prototype.map ? function(a, b) {
  return Array.prototype.map.call(a, b, void 0);
} : function(a, b) {
  for (var c = a.length, d = Array(c), e = p(a) ? a.split("") : a, g = 0; g < c; g++) {
    g in e && (d[g] = b.call(void 0, e[g], g, a));
  }
  return d;
}, Hb = Array.prototype.some ? function(a, b) {
  return Array.prototype.some.call(a, b, void 0);
} : function(a, b) {
  for (var c = a.length, d = p(a) ? a.split("") : a, e = 0; e < c; e++) {
    if (e in d && b.call(void 0, d[e], e, a)) {
      return !0;
    }
  }
  return !1;
}, Ib = Array.prototype.every ? function(a, b) {
  return Array.prototype.every.call(a, b, void 0);
} : function(a, b) {
  for (var c = a.length, d = p(a) ? a.split("") : a, e = 0; e < c; e++) {
    if (e in d && !b.call(void 0, d[e], e, a)) {
      return !1;
    }
  }
  return !0;
};
function Jb(a, b) {
  return 0 <= Eb(a, b);
}
function Kb(a, b) {
  b = Eb(a, b);
  var c;
  (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
  return c;
}
function Lb(a) {
  return Array.prototype.concat.apply([], arguments);
}
function Mb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) {
      c[d] = a[d];
    }
    return c;
  }
  return [];
}
function Nb(a, b, c, d) {
  Array.prototype.splice.apply(a, Ob(arguments, 1));
}
function Ob(a, b, c) {
  return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
}
;function Pb() {
  this.b = this.a = null;
}
var Rb = new qa(function() {
  return new Qb;
}, function(a) {
  a.reset();
});
Pb.prototype.add = function(a, b) {
  var c = Rb.get();
  c.set(a, b);
  this.b ? this.b.next = c : this.a = c;
  this.b = c;
};
function Sb() {
  var a = Tb, b = null;
  a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
  return b;
}
function Qb() {
  this.next = this.a = this.ma = null;
}
Qb.prototype.set = function(a, b) {
  this.ma = a;
  this.a = b;
  this.next = null;
};
Qb.prototype.reset = function() {
  this.next = this.a = this.ma = null;
};
function D(a, b) {
  this.type = a;
  this.j = this.target = b;
  this.o = !1;
  this.Rc = !0;
}
D.prototype.h = function() {
  this.o = !0;
};
D.prototype.b = function() {
  this.Rc = !1;
};
function Ub(a, b, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.xb = e;
  this.key = ++wb;
  this.Ra = this.jb = !1;
}
function Vb(a) {
  a.Ra = !0;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.xb = null;
}
;function Wb() {
  this.a = "";
  this.b = Xb;
}
Wb.prototype.zb = !0;
Wb.prototype.mb = function() {
  return this.a;
};
Wb.prototype.toString = function() {
  return "Const{" + this.a + "}";
};
function Yb(a) {
  if (a instanceof Wb && a.constructor === Wb && a.b === Xb) {
    return a.a;
  }
  nb("expected object of type Const, got '" + a + "'");
  return "type_error:Const";
}
var Xb = {};
function Zb(a) {
  var b = new Wb;
  b.a = a;
  return b;
}
Zb("");
function $b(a) {
  if (a.classList) {
    return a.classList;
  }
  a = a.className;
  return p(a) && a.match(/\S+/g) || [];
}
function ac(a, b) {
  a.classList ? a.classList.add(b) : (a.classList ? a.classList.contains(b) : Jb($b(a), b)) || (a.className += 0 < a.className.length ? " " + b : b);
}
function bc(a, b) {
  if (a.classList) {
    C(b, function(b) {
      ac(a, b);
    });
  } else {
    var c = {};
    C($b(a), function(a) {
      c[a] = !0;
    });
    C(b, function(a) {
      c[a] = !0;
    });
    a.className = "";
    for (var d in c) {
      a.className += 0 < a.className.length ? " " + d : d;
    }
  }
}
function cc(a, b) {
  if (a.classList) {
    a.classList.remove(b);
  } else {
    if (a.classList ? a.classList.contains(b) : Jb($b(a), b)) {
      a.className = Fb($b(a), function(a) {
        return a != b;
      }).join(" ");
    }
  }
}
function dc(a, b) {
  a.classList ? C(b, function(b) {
    cc(a, b);
  }) : a.className = Fb($b(a), function(a) {
    return !Jb(b, a);
  }).join(" ");
}
;function ec(a) {
  this.src = a;
  this.a = {};
  this.b = 0;
}
ec.prototype.add = function(a, b, c, d, e) {
  var g = a.toString();
  a = this.a[g];
  a || (a = this.a[g] = [], this.b++);
  var h = fc(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.jb = !1)) : (b = new Ub(b, this.src, g, !!d, e), b.jb = c, a.push(b));
  return b;
};
function gc(a, b) {
  var c = b.type;
  if (!(c in a.a)) {
    return !1;
  }
  var d = Kb(a.a[c], b);
  d && (Vb(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
  return d;
}
function hc(a) {
  var b = 0, c;
  for (c in a.a) {
    for (var d = a.a[c], e = 0; e < d.length; e++) {
      ++b, Vb(d[e]);
    }
    delete a.a[c];
    a.b--;
  }
}
ec.prototype.Wa = function(a, b, c, d) {
  a = this.a[a.toString()];
  var e = -1;
  a && (e = fc(a, b, c, d));
  return -1 < e ? a[e] : null;
};
function fc(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var g = a[e];
    if (!g.Ra && g.listener == b && g.capture == !!c && g.xb == d) {
      return e;
    }
  }
  return -1;
}
;function ic() {
  this.a = "";
  this.b = jc;
}
f = ic.prototype;
f.zb = !0;
f.mb = function() {
  return this.a;
};
f.Hc = !0;
f.Pb = function() {
  return 1;
};
f.toString = function() {
  return "TrustedResourceUrl{" + this.a + "}";
};
function kc(a) {
  if (a instanceof ic && a.constructor === ic && a.b === jc) {
    return a.a;
  }
  nb("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ba(a));
  return "type_error:TrustedResourceUrl";
}
var jc = {};
function lc(a) {
  var b = new ic;
  b.a = a;
  return b;
}
;var mc;
function nc() {
}
x(nc, Ab);
function oc() {
  a: {
    var a = mc;
    if (!a.a && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
        var d = b[c];
        try {
          new ActiveXObject(d);
          var e = a.a = d;
          break a;
        } catch (g) {
        }
      }
      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    e = a.a;
  }
  return e ? new ActiveXObject(e) : new XMLHttpRequest;
}
mc = new nc;
var pc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function qc(a, b) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="), e = null;
      if (0 <= d) {
        var g = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else {
        g = a[c];
      }
      b(g, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
  }
}
;function rc(a, b, c) {
  D.call(this, a, b);
  this.data = c;
}
x(rc, D);
function sc(a) {
  l.setTimeout(function() {
    throw a;
  }, 0);
}
var tc;
function uc() {
  var a = l.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !B("Presto") && (a = function() {
    var a = document.createElement("IFRAME");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow;
    a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
    a = w(function(a) {
      if (("*" == d || a.origin == d) && a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a && !B("Trident") && !B("MSIE")) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      if (n(c.next)) {
        c = c.next;
        var a = c.kc;
        c.kc = null;
        a();
      }
    };
    return function(a) {
      d.next = {kc:a};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
    var b = document.createElement("SCRIPT");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    l.setTimeout(a, 0);
  };
}
;function F(a, b) {
  this.a = n(a) ? a : 0;
  this.b = n(b) ? b : 0;
}
function vc(a) {
  return new F(a.a, a.b);
}
F.prototype.toString = function() {
  return "(" + this.a + ", " + this.b + ")";
};
function wc(a, b) {
  return new F(a.a - b.a, a.b - b.b);
}
F.prototype.ceil = function() {
  this.a = Math.ceil(this.a);
  this.b = Math.ceil(this.b);
  return this;
};
F.prototype.floor = function() {
  this.a = Math.floor(this.a);
  this.b = Math.floor(this.b);
  return this;
};
F.prototype.round = function() {
  this.a = Math.round(this.a);
  this.b = Math.round(this.b);
  return this;
};
function xc(a, b) {
  if (!a) {
    throw Error("Invalid class name " + a);
  }
  if (!v(b)) {
    throw Error("Invalid decorator function " + b);
  }
}
var yc = {};
var zc = B("Opera"), G = B("Trident") || B("MSIE"), Ac = B("Edge"), Bc = Ac || G, H = B("Gecko") && !(-1 != xb.toLowerCase().indexOf("webkit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"), I = -1 != xb.toLowerCase().indexOf("webkit") && !B("Edge"), Cc = B("Macintosh");
function Dc() {
  var a = l.document;
  return a ? a.documentMode : void 0;
}
var Ec;
a: {
  var Fc = "", Gc = function() {
    var a = xb;
    if (H) {
      return /rv:([^\);]+)(\)|;)/.exec(a);
    }
    if (Ac) {
      return /Edge\/([\d\.]+)/.exec(a);
    }
    if (G) {
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    }
    if (I) {
      return /WebKit\/(\S+)/.exec(a);
    }
    if (zc) {
      return /(?:Version)[ \/]?(\S+)/.exec(a);
    }
  }();
  Gc && (Fc = Gc ? Gc[1] : "");
  if (G) {
    var Hc = Dc();
    if (null != Hc && Hc > parseFloat(Fc)) {
      Ec = String(Hc);
      break a;
    }
  }
  Ec = Fc;
}
var Ra = {};
function J(a) {
  return Qa(a, function() {
    for (var b = 0, c = Ta(String(Ec)).split("."), d = Ta(String(a)).split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
      var h = c[g] || "", k = d[g] || "";
      do {
        h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
        k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
        if (0 == h[0].length && 0 == k[0].length) {
          break;
        }
        b = cb(0 == h[1].length ? 0 : parseInt(h[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || cb(0 == h[2].length, 0 == k[2].length) || cb(h[2], k[2]);
        h = h[3];
        k = k[3];
      } while (0 == b);
    }
    return 0 <= b;
  });
}
function Ic(a) {
  return Number(Jc) >= a;
}
var Kc;
var Lc = l.document;
Kc = Lc && G ? Dc() || ("CSS1Compat" == Lc.compatMode ? parseInt(Ec, 10) : 5) : void 0;
var Jc = Kc;
function Mc(a, b) {
  Nc || Oc();
  Pc || (Nc(), Pc = !0);
  Tb.add(a, b);
}
var Nc;
function Oc() {
  if (-1 != String(l.Promise).indexOf("[native code]")) {
    var a = l.Promise.resolve(void 0);
    Nc = function() {
      a.then(Qc);
    };
  } else {
    Nc = function() {
      var a = Qc;
      !v(l.setImmediate) || l.Window && l.Window.prototype && !B("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (tc || (tc = uc()), tc(a)) : l.setImmediate(a);
    };
  }
}
var Pc = !1, Tb = new Pb;
function Qc() {
  for (var a; a = Sb();) {
    try {
      a.ma.call(a.a);
    } catch (b) {
      sc(b);
    }
    Rb.put(a);
  }
  Pc = !1;
}
;var Rc = !G || Ic(9), Sc = !H && !G || G && Ic(9) || H && J("1.9.1"), Tc = G && !J("9");
var Uc = !G || Ic(9), Vc = !G || Ic(9), Wc = G && !J("9");
function Xc(a, b, c, d, e, g) {
  if (!(G || Ac || I && J("525"))) {
    return !0;
  }
  if (Cc && e) {
    return Yc(a);
  }
  if (e && !d) {
    return !1;
  }
  "number" == typeof b && (b = Zc(b));
  e = 17 == b || 18 == b || Cc && 91 == b;
  if ((!c || Cc) && e || Cc && 16 == b && (d || g)) {
    return !1;
  }
  if ((I || Ac) && d && c) {
    switch(a) {
      case 220:
      case 219:
      case 221:
      case 192:
      case 186:
      case 189:
      case 187:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
        return !1;
    }
  }
  if (G && d && b == a) {
    return !1;
  }
  switch(a) {
    case 13:
      return !0;
    case 27:
      return !(I || Ac);
  }
  return Yc(a);
}
function Yc(a) {
  if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (I || Ac) && 0 == a) {
    return !0;
  }
  switch(a) {
    case 32:
    case 43:
    case 63:
    case 64:
    case 107:
    case 109:
    case 110:
    case 111:
    case 186:
    case 59:
    case 189:
    case 187:
    case 61:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
    case 219:
    case 220:
    case 221:
      return !0;
    default:
      return !1;
  }
}
function Zc(a) {
  if (H) {
    a = $c(a);
  } else {
    if (Cc && I) {
      switch(a) {
        case 93:
          a = 91;
      }
    }
  }
  return a;
}
function $c(a) {
  switch(a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 173:
      return 189;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a;
  }
}
;function ad() {
  this.a = "";
  this.c = bd;
  this.b = null;
}
f = ad.prototype;
f.Hc = !0;
f.Pb = function() {
  return this.b;
};
f.zb = !0;
f.mb = function() {
  return this.a;
};
f.toString = function() {
  return "SafeHtml{" + this.a + "}";
};
function cd(a) {
  if (a instanceof ad && a.constructor === ad && a.c === bd) {
    return a.a;
  }
  nb("expected object of type SafeHtml, got '" + a + "' of type " + ba(a));
  return "type_error:SafeHtml";
}
function dd(a) {
  if (a instanceof ad) {
    return a;
  }
  if (a instanceof ad) {
    var b = a;
  } else {
    b = null, a.Hc && (b = a.Pb()), a = Ua(a.zb ? a.mb() : String(a)), b = ed(a, b);
  }
  a = cd(b).replace(/(\r\n|\r|\n)/g, "<br>");
  return ed(a, b.Pb());
}
var bd = {};
function ed(a, b) {
  var c = new ad;
  c.a = a;
  c.b = b;
  return c;
}
ed("<!DOCTYPE html>", 0);
var fd = ed("", 0);
ed("<br>", 0);
function K(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d;
}
K.prototype.toString = function() {
  return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
};
function gd(a, b) {
  var c = b.a < a.left ? b.a - a.left : b.a > a.right ? b.a - a.right : 0;
  a = b.b < a.top ? b.b - a.top : b.b > a.bottom ? b.b - a.bottom : 0;
  return Math.sqrt(c * c + a * a);
}
K.prototype.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this;
};
K.prototype.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this;
};
K.prototype.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this;
};
function hd(a, b) {
  this.b = {};
  this.a = [];
  this.c = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0; d < c; d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    if (a) {
      if (a instanceof hd) {
        var e = a.Va();
        d = a.ia();
      } else {
        c = [];
        var g = 0;
        for (e in a) {
          c[g++] = e;
        }
        e = c;
        c = [];
        g = 0;
        for (d in a) {
          c[g++] = a[d];
        }
        d = c;
      }
      for (c = 0; c < e.length; c++) {
        this.set(e[c], d[c]);
      }
    }
  }
}
f = hd.prototype;
f.ia = function() {
  id(this);
  for (var a = [], b = 0; b < this.a.length; b++) {
    a.push(this.b[this.a[b]]);
  }
  return a;
};
f.Va = function() {
  id(this);
  return this.a.concat();
};
function jd(a, b) {
  return kd(a.b, b);
}
function ld(a, b) {
  kd(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && id(a));
}
function id(a) {
  if (a.c != a.a.length) {
    for (var b = 0, c = 0; b < a.a.length;) {
      var d = a.a[b];
      kd(a.b, d) && (a.a[c++] = d);
      b++;
    }
    a.a.length = c;
  }
  if (a.c != a.a.length) {
    var e = {};
    for (c = b = 0; b < a.a.length;) {
      d = a.a[b], kd(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    }
    a.a.length = c;
  }
}
f.get = function(a, b) {
  return kd(this.b, a) ? this.b[a] : b;
};
f.set = function(a, b) {
  kd(this.b, a) || (this.c++, this.a.push(a));
  this.b[a] = b;
};
f.forEach = function(a, b) {
  for (var c = this.Va(), d = 0; d < c.length; d++) {
    var e = c[d], g = this.get(e);
    a.call(b, g, e, this);
  }
};
function kd(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
;function L(a) {
  this.a = md;
  this.m = void 0;
  this.j = this.b = this.c = null;
  this.o = this.h = !1;
  if (a != r) {
    try {
      var b = this;
      a.call(void 0, function(a) {
        nd(b, od, a);
      }, function(a) {
        if (!(a instanceof pd)) {
          try {
            if (a instanceof Error) {
              throw a;
            }
            throw Error("Promise rejected.");
          } catch (d) {
          }
        }
        nd(b, qd, a);
      });
    } catch (c) {
      nd(this, qd, c);
    }
  }
}
var md = 0, od = 2, qd = 3;
function rd() {
  this.next = this.context = this.b = this.c = this.a = null;
  this.j = !1;
}
rd.prototype.reset = function() {
  this.context = this.b = this.c = this.a = null;
  this.j = !1;
};
var sd = new qa(function() {
  return new rd;
}, function(a) {
  a.reset();
});
function td(a, b, c) {
  var d = sd.get();
  d.c = a;
  d.b = b;
  d.context = c;
  return d;
}
L.prototype.then = function(a, b, c) {
  return ud(this, v(a) ? a : null, v(b) ? b : null, c);
};
L.prototype.then = L.prototype.then;
L.prototype.$goog_Thenable = !0;
function vd(a, b) {
  ud(a, null, b, void 0);
}
L.prototype.cancel = function(a) {
  this.a == md && Mc(function() {
    var b = new pd(a);
    wd(this, b);
  }, this);
};
function wd(a, b) {
  if (a.a == md) {
    if (a.c) {
      var c = a.c;
      if (c.b) {
        for (var d = 0, e = null, g = null, h = c.b; h && (h.j || (d++, h.a == a && (e = h), !(e && 1 < d))); h = h.next) {
          e || (g = h);
        }
        e && (c.a == md && 1 == d ? wd(c, b) : (g ? (d = g, d.next == c.j && (c.j = d), d.next = d.next.next) : xd(c), yd(c, e, qd, b)));
      }
      a.c = null;
    } else {
      nd(a, qd, b);
    }
  }
}
function zd(a, b) {
  a.b || a.a != od && a.a != qd || Ad(a);
  a.j ? a.j.next = b : a.b = b;
  a.j = b;
}
function ud(a, b, c, d) {
  var e = td(null, null, null);
  e.a = new L(function(a, h) {
    e.c = b ? function(c) {
      try {
        var e = b.call(d, c);
        a(e);
      } catch (q) {
        h(q);
      }
    } : a;
    e.b = c ? function(b) {
      try {
        var e = c.call(d, b);
        !n(e) && b instanceof pd ? h(b) : a(e);
      } catch (q) {
        h(q);
      }
    } : h;
  });
  e.a.c = a;
  zd(a, e);
  return e.a;
}
L.prototype.K = function(a) {
  this.a = md;
  nd(this, od, a);
};
L.prototype.pa = function(a) {
  this.a = md;
  nd(this, qd, a);
};
function nd(a, b, c) {
  if (a.a == md) {
    a === c && (b = qd, c = new TypeError("Promise cannot resolve to itself"));
    a.a = 1;
    a: {
      var d = c, e = a.K, g = a.pa;
      if (d instanceof L) {
        zd(d, td(e || r, g || null, a));
        var h = !0;
      } else {
        if (d) {
          try {
            var k = !!d.$goog_Thenable;
          } catch (q) {
            k = !1;
          }
        } else {
          k = !1;
        }
        if (k) {
          d.then(e, g, a), h = !0;
        } else {
          if (da(d)) {
            try {
              var m = d.then;
              if (v(m)) {
                Bd(d, m, e, g, a);
                h = !0;
                break a;
              }
            } catch (q) {
              g.call(a, q);
              h = !0;
              break a;
            }
          }
          h = !1;
        }
      }
    }
    h || (a.m = c, a.a = b, a.c = null, Ad(a), b != qd || c instanceof pd || Cd(a, c));
  }
}
function Bd(a, b, c, d, e) {
  function g(a) {
    k || (k = !0, d.call(e, a));
  }
  function h(a) {
    k || (k = !0, c.call(e, a));
  }
  var k = !1;
  try {
    b.call(a, h, g);
  } catch (m) {
    g(m);
  }
}
function Ad(a) {
  a.h || (a.h = !0, Mc(a.D, a));
}
function xd(a) {
  var b = null;
  a.b && (b = a.b, a.b = b.next, b.next = null);
  a.b || (a.j = null);
  return b;
}
L.prototype.D = function() {
  for (var a; a = xd(this);) {
    yd(this, a, this.a, this.m);
  }
  this.h = !1;
};
function yd(a, b, c, d) {
  if (c == qd && b.b && !b.j) {
    for (; a && a.o; a = a.c) {
      a.o = !1;
    }
  }
  if (b.a) {
    b.a.c = null, Dd(b, c, d);
  } else {
    try {
      b.j ? b.c.call(b.context) : Dd(b, c, d);
    } catch (e) {
      Ed.call(null, e);
    }
  }
  sd.put(b);
}
function Dd(a, b, c) {
  b == od ? a.c.call(a.context, c) : a.b && a.b.call(a.context, c);
}
function Cd(a, b) {
  a.o = !0;
  Mc(function() {
    a.o && Ed.call(null, b);
  });
}
var Ed = sc;
function pd(a) {
  ra.call(this, a);
}
x(pd, ra);
pd.prototype.name = "cancel";
function Fd(a) {
  this.j = this.D = this.c = "";
  this.m = null;
  this.o = this.h = "";
  this.a = !1;
  if (a instanceof Fd) {
    this.a = n(void 0) ? void 0 : a.a;
    Gd(this, a.c);
    this.D = a.D;
    this.j = a.j;
    Hd(this, a.m);
    this.h = a.h;
    var b = a.b;
    var c = new Id;
    c.c = b.c;
    b.a && (c.a = new hd(b.a), c.b = b.b);
    Jd(this, c);
    this.o = a.o;
  } else {
    a && (b = String(a).match(pc)) ? (this.a = !1, Gd(this, b[1] || "", !0), this.D = Kd(b[2] || ""), this.j = Kd(b[3] || "", !0), Hd(this, b[4]), this.h = Kd(b[5] || "", !0), Jd(this, b[6] || "", !0), this.o = Kd(b[7] || "")) : (this.a = !1, this.b = new Id(null, this.a));
  }
}
Fd.prototype.toString = function() {
  var a = [], b = this.c;
  b && a.push(Ld(b, Md, !0), ":");
  var c = this.j;
  if (c || "file" == b) {
    a.push("//"), (b = this.D) && a.push(Ld(b, Md, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, null != c && a.push(":", String(c));
  }
  if (c = this.h) {
    this.j && "/" != c.charAt(0) && a.push("/"), a.push(Ld(c, "/" == c.charAt(0) ? Nd : Od, !0));
  }
  (c = this.b.toString()) && a.push("?", c);
  (c = this.o) && a.push("#", Ld(c, Pd));
  return a.join("");
};
function Gd(a, b, c) {
  a.c = c ? Kd(b, !0) : b;
  a.c && (a.c = a.c.replace(/:$/, ""));
}
function Hd(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.m = b;
  } else {
    a.m = null;
  }
}
function Jd(a, b, c) {
  b instanceof Id ? (a.b = b, Qd(a.b, a.a)) : (c || (b = Ld(b, Rd)), a.b = new Id(b, a.a));
}
function Kd(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function Ld(a, b, c) {
  return p(a) ? (a = encodeURI(a).replace(b, Sd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function Sd(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Md = /[#\/\?@]/g, Od = /[#\?:]/g, Nd = /[#\?]/g, Rd = /[#\?@]/g, Pd = /#/g;
function Id(a, b) {
  this.b = this.a = null;
  this.c = a || null;
  this.j = !!b;
}
function Td(a) {
  a.a || (a.a = new hd, a.b = 0, a.c && qc(a.c, function(b, c) {
    a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
  }));
}
f = Id.prototype;
f.add = function(a, b) {
  Td(this);
  this.c = null;
  a = Ud(this, a);
  var c = this.a.get(a);
  c || this.a.set(a, c = []);
  c.push(b);
  this.b += 1;
  return this;
};
function Vd(a, b) {
  Td(a);
  b = Ud(a, b);
  jd(a.a, b) && (a.c = null, a.b -= a.a.get(b).length, ld(a.a, b));
}
function Wd(a, b) {
  Td(a);
  b = Ud(a, b);
  return jd(a.a, b);
}
f.forEach = function(a, b) {
  Td(this);
  this.a.forEach(function(c, d) {
    C(c, function(c) {
      a.call(b, c, d, this);
    }, this);
  }, this);
};
f.Va = function() {
  Td(this);
  for (var a = this.a.ia(), b = this.a.Va(), c = [], d = 0; d < b.length; d++) {
    for (var e = a[d], g = 0; g < e.length; g++) {
      c.push(b[d]);
    }
  }
  return c;
};
f.ia = function(a) {
  Td(this);
  var b = [];
  if (p(a)) {
    Wd(this, a) && (b = Lb(b, this.a.get(Ud(this, a))));
  } else {
    a = this.a.ia();
    for (var c = 0; c < a.length; c++) {
      b = Lb(b, a[c]);
    }
  }
  return b;
};
f.set = function(a, b) {
  Td(this);
  this.c = null;
  a = Ud(this, a);
  Wd(this, a) && (this.b -= this.a.get(a).length);
  this.a.set(a, [b]);
  this.b += 1;
  return this;
};
f.get = function(a, b) {
  a = a ? this.ia(a) : [];
  return 0 < a.length ? String(a[0]) : b;
};
f.toString = function() {
  if (this.c) {
    return this.c;
  }
  if (!this.a) {
    return "";
  }
  for (var a = [], b = this.a.Va(), c = 0; c < b.length; c++) {
    var d = b[c], e = encodeURIComponent(String(d));
    d = this.ia(d);
    for (var g = 0; g < d.length; g++) {
      var h = e;
      "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
      a.push(h);
    }
  }
  return this.c = a.join("&");
};
function Ud(a, b) {
  b = String(b);
  a.j && (b = b.toLowerCase());
  return b;
}
function Qd(a, b) {
  b && !a.j && (Td(a), a.c = null, a.a.forEach(function(a, b) {
    var c = b.toLowerCase();
    b != c && (Vd(this, b), Vd(this, c), 0 < a.length && (this.c = null, this.a.set(Ud(this, c), Mb(a)), this.b += a.length));
  }, a));
  a.j = b;
}
;function Xd(a) {
  this.o = a;
  this.a = this.c = this.j = this.b = null;
}
function Yd(a, b) {
  this.name = a;
  this.value = b;
}
Yd.prototype.toString = function() {
  return this.name;
};
var Zd = new Yd("SHOUT", 1200), $d = new Yd("SEVERE", 1000), ae = new Yd("WARNING", 900), be = new Yd("INFO", 800), ce = new Yd("CONFIG", 700), de = new Yd("FINER", 400);
function ee(a) {
  if (a.j) {
    return a.j;
  }
  if (a.b) {
    return ee(a.b);
  }
  nb("Root logger has no level set.");
  return null;
}
Xd.prototype.log = function(a, b, c) {
  if (a.value >= ee(this).value) {
    for (v(b) && (b = b()), a = new sa(a, String(b), this.o), c && (a.a = c), c = "log:" + a.c, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this; c;) {
      var d = c, e = a;
      if (d.a) {
        for (var g = 0; b = d.a[g]; g++) {
          b(e);
        }
      }
      c = c.b;
    }
  }
};
function fe(a, b) {
  a.log(de, b, void 0);
}
var ge = {}, he = null;
function ie() {
  he || (he = new Xd(""), ge[""] = he, he.j = ce);
}
function je(a) {
  ie();
  var b;
  if (!(b = ge[a])) {
    b = new Xd(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1);
    c = je(a.substr(0, c));
    c.c || (c.c = {});
    c.c[d] = b;
    b.b = c;
    ge[a] = b;
  }
  return b;
}
;var ke = {MATH:!0, SCRIPT:!0, STYLE:!0, SVG:!0, TEMPLATE:!0};
function le(a, b) {
  if (ke[a.tagName.toUpperCase()]) {
    throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
  }
  a.innerHTML = cd(b);
}
;function M(a, b) {
  D.call(this, a ? a.type : "");
  this.relatedTarget = this.j = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.a = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.m = !1;
  this.c = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.j = b;
    (b = a.relatedTarget) ? H && (Pa(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
    this.button = a.button;
    this.a = a.keyCode || 0;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.m = Cc ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.c = a;
    a.defaultPrevented && this.b();
  }
}
x(M, D);
var me = [1, 4, 2];
function ne(a) {
  return (Uc ? 0 == a.c.button : "click" == a.type ? !0 : !!(a.c.button & me[0])) && !(I && Cc && a.ctrlKey);
}
M.prototype.h = function() {
  M.l.h.call(this);
  this.c.stopPropagation ? this.c.stopPropagation() : this.c.cancelBubble = !0;
};
M.prototype.b = function() {
  M.l.b.call(this);
  var a = this.c;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Wc) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
function oe() {
  this.a = new Ba;
}
function pe(a) {
  var b = new oe;
  if (null == a) {
    return [];
  }
  if (p(a)) {
    if (/^[\s\xa0]*$/.test(a)) {
      return [];
    }
    a = Aa(a);
  }
  var c = [];
  qe(b, a, c, 0);
  return c;
}
function qe(a, b, c, d) {
  var e = ba(b);
  switch(e) {
    case "null":
    case "boolean":
    case "number":
    case "string":
      a = Ca(a.a, b);
      c.push(re(a, e));
      break;
    case "array":
      c.push("[");
      for (e = 0; e < b.length; e++) {
        0 < e && c.push(","), c.push("\n"), c.push(bb(" ", d + 2)), qe(a, b[e], c, d + 2);
      }
      0 < e && (c.push("\n"), c.push(bb(" ", d)));
      c.push("]");
      break;
    case "object":
      c.push("{");
      e = 0;
      for (var g in b) {
        b.hasOwnProperty(g) && (0 < e && c.push(","), c.push("\n"), c.push(bb(" ", d + 2)), c.push(Ca(a.a, g)), c.push(":", " "), qe(a, b[g], c, d + 2), e++);
      }
      0 < e && (c.push("\n"), c.push(bb(" ", d)));
      c.push("}");
      break;
    default:
      a = Ca(a.a, ""), c.push(re(a, "unknown"));
  }
}
function re(a, b) {
  return Bb("", b) + a;
}
;function se(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d;
}
function ue(a) {
  return new K(a.top, a.left + a.width, a.top + a.height, a.left);
}
se.prototype.toString = function() {
  return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)";
};
se.prototype.ceil = function() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
se.prototype.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
se.prototype.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
function ve() {
  this.a = new hd;
}
function we(a) {
  var b = typeof a;
  return "object" == b && a || "function" == b ? "o" + ea(a) : b.charAt(0) + a;
}
ve.prototype.add = function(a) {
  this.a.set(we(a), a);
};
ve.prototype.ia = function() {
  return this.a.ia();
};
function xe(a) {
  this.j = a || "";
  this.o = xa;
}
xe.prototype.a = !0;
xe.prototype.b = !0;
xe.prototype.c = !1;
function ye(a) {
  return 10 > a ? "0" + a : String(a);
}
function ze(a, b) {
  a = (a.j - b) / 1000;
  b = a.toFixed(3);
  var c = 0;
  if (1 > a) {
    c = 2;
  } else {
    for (; 100 > a;) {
      c++, a *= 10;
    }
  }
  for (; 0 < c--;) {
    b = " " + b;
  }
  return b;
}
function Ae(a) {
  xe.call(this, a);
}
x(Ae, xe);
function N(a) {
  return a ? new Be(O(a)) : ya || (ya = new Be);
}
function Ce(a, b) {
  Ia(b, function(b, d) {
    b && b.zb && (b = b.mb());
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : De.hasOwnProperty(d) ? a.setAttribute(De[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var De = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", nonce:"nonce", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Ee(a) {
  a = a.document;
  a = Fe(a) ? a.documentElement : a.body;
  return new Ha(a.clientWidth, a.clientHeight);
}
function Ge(a) {
  var b = He(a);
  a = Ie(a);
  return G && J("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft, b.scrollTop) : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
}
function He(a) {
  return a.scrollingElement ? a.scrollingElement : !I && Fe(a) ? a.documentElement : a.body || a.documentElement;
}
function Je(a) {
  return a ? Ie(a) : window;
}
function Ie(a) {
  return a.parentWindow || a.defaultView;
}
function Ke(a, b, c) {
  return Le(document, arguments);
}
function Le(a, b) {
  var c = String(b[0]), d = b[1];
  if (!Rc && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', Ua(d.name), '"');
    if (d.type) {
      c.push(' type="', Ua(d.type), '"');
      var e = {};
      Ka(e, d);
      delete e.type;
      d = e;
    }
    c.push(">");
    c = c.join("");
  }
  c = a.createElement(c);
  d && (p(d) ? c.className = d : t(d) ? c.className = d.join(" ") : Ce(c, d));
  2 < b.length && Me(a, c, b, 2);
  return c;
}
function Me(a, b, c, d) {
  function e(c) {
    c && b.appendChild(p(c) ? a.createTextNode(c) : c);
  }
  for (; d < c.length; d++) {
    var g = c[d];
    !ca(g) || da(g) && 0 < g.nodeType ? e(g) : C(Ne(g) ? Mb(g) : g, e);
  }
}
function Fe(a) {
  return "CSS1Compat" == a.compatMode;
}
function Oe(a, b) {
  Me(O(a), a, arguments, 1);
}
function Pe(a) {
  for (var b; b = a.firstChild;) {
    a.removeChild(b);
  }
}
function Qe(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
}
function Re(a, b) {
  if (!a || !b) {
    return !1;
  }
  if (a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b);
  }
  if ("undefined" != typeof a.compareDocumentPosition) {
    return a == b || !!(a.compareDocumentPosition(b) & 16);
  }
  for (; b && a != b;) {
    b = b.parentNode;
  }
  return b == a;
}
function O(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function Se(a, b) {
  if ("textContent" in a) {
    a.textContent = b;
  } else {
    if (3 == a.nodeType) {
      a.data = b;
    } else {
      if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) {
          a.removeChild(a.lastChild);
        }
        a.firstChild.data = b;
      } else {
        Pe(a), a.appendChild(O(a).createTextNode(String(b)));
      }
    }
  }
}
var Te = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Ue = {IMG:" ", BR:"\n"};
function Ve(a, b) {
  b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"));
}
function We(a) {
  return G && !J("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex");
}
function Xe(a) {
  a = a.tabIndex;
  return "number" == typeof a && 0 <= a && 32768 > a;
}
function Ye(a) {
  var b = [];
  Ze(a, b, !1);
  return b.join("");
}
function Ze(a, b, c) {
  if (!(a.nodeName in Te)) {
    if (3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in Ue) {
        b.push(Ue[a.nodeName]);
      } else {
        for (a = a.firstChild; a;) {
          Ze(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
}
function Ne(a) {
  if (a && "number" == typeof a.length) {
    if (da(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (v(a)) {
      return "function" == typeof a.item;
    }
  }
  return !1;
}
function Be(a) {
  this.a = a || l.document || document;
}
f = Be.prototype;
f.g = function(a) {
  return p(a) ? this.a.getElementById(a) : a;
};
f.A = function(a, b, c) {
  return Le(this.a, arguments);
};
f.sc = Qe;
function $e(a) {
  return Sc && void 0 != a.children ? a.children : Fb(a.childNodes, function(a) {
    return 1 == a.nodeType;
  });
}
f.rc = Re;
f.Yc = Se;
var af = "closure_lm_" + (1e6 * Math.random() | 0), bf = {}, cf = 0;
function P(a, b, c, d, e) {
  if (t(b)) {
    for (var g = 0; g < b.length; g++) {
      P(a, b[g], c, d, e);
    }
    return null;
  }
  c = df(c);
  return vb(a) ? a.w(b, c, d, e) : ef(a, b, c, !1, d, e);
}
function ef(a, b, c, d, e, g) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var h = !!e, k = ff(a);
  k || (a[af] = k = new ec(a));
  c = k.add(b, c, d, e, g);
  if (c.proxy) {
    return c;
  }
  d = gf();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener) {
    a.addEventListener(b.toString(), d, h);
  } else {
    if (a.attachEvent) {
      a.attachEvent(hf(b.toString()), d);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  cf++;
  return c;
}
function gf() {
  var a = jf, b = Vc ? function(c) {
    return a.call(b.src, b.listener, c);
  } : function(c) {
    c = a.call(b.src, b.listener, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function kf(a, b, c, d, e) {
  if (t(b)) {
    for (var g = 0; g < b.length; g++) {
      kf(a, b[g], c, d, e);
    }
    return null;
  }
  c = df(c);
  return vb(a) ? a.Ic(b, c, d, e) : ef(a, b, c, !0, d, e);
}
function lf(a, b, c, d, e) {
  if (t(b)) {
    for (var g = 0; g < b.length; g++) {
      lf(a, b[g], c, d, e);
    }
  } else {
    c = df(c), vb(a) ? a.da(b, c, d, e) : a && (a = ff(a)) && (b = a.Wa(b, c, !!d, e)) && mf(b);
  }
}
function mf(a) {
  if ("number" == typeof a || !a || a.Ra) {
    return !1;
  }
  var b = a.src;
  if (vb(b)) {
    return gc(b.fa, a);
  }
  var c = a.type, d = a.proxy;
  b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(hf(c), d);
  cf--;
  (c = ff(b)) ? (gc(c, a), 0 == c.b && (c.src = null, b[af] = null)) : Vb(a);
  return !0;
}
function nf(a) {
  if (a) {
    if (vb(a)) {
      a.fa && hc(a.fa);
    } else {
      if (a = ff(a)) {
        var b = 0, c;
        for (c in a.a) {
          for (var d = a.a[c].concat(), e = 0; e < d.length; ++e) {
            mf(d[e]) && ++b;
          }
        }
      }
    }
  }
}
function hf(a) {
  return a in bf ? bf[a] : bf[a] = "on" + a;
}
function of(a, b, c, d) {
  var e = !0;
  if (a = ff(a)) {
    if (b = a.a[b.toString()]) {
      for (b = b.concat(), a = 0; a < b.length; a++) {
        var g = b[a];
        g && g.capture == c && !g.Ra && (g = pf(g, d), e = e && !1 !== g);
      }
    }
  }
  return e;
}
function pf(a, b) {
  var c = a.listener, d = a.xb || a.src;
  a.jb && mf(a);
  return c.call(d, b);
}
function jf(a, b) {
  if (a.Ra) {
    return !0;
  }
  if (!Vc) {
    if (!b) {
      a: {
        b = ["window", "event"];
        for (var c = l, d; d = b.shift();) {
          if (null != c[d]) {
            c = c[d];
          } else {
            b = null;
            break a;
          }
        }
        b = c;
      }
    }
    d = b;
    b = new M(d, this);
    c = !0;
    if (!(0 > d.keyCode || void 0 != d.returnValue)) {
      a: {
        var e = !1;
        if (0 == d.keyCode) {
          try {
            d.keyCode = -1;
            break a;
          } catch (h) {
            e = !0;
          }
        }
        if (e || void 0 == d.returnValue) {
          d.returnValue = !0;
        }
      }
      d = [];
      for (e = b.j; e; e = e.parentNode) {
        d.push(e);
      }
      a = a.type;
      for (e = d.length - 1; !b.o && 0 <= e; e--) {
        b.j = d[e];
        var g = of(d[e], a, !0, b);
        c = c && g;
      }
      for (e = 0; !b.o && e < d.length; e++) {
        b.j = d[e], g = of(d[e], a, !1, b), c = c && g;
      }
    }
    return c;
  }
  return pf(a, new M(b, this));
}
function ff(a) {
  a = a[af];
  return a instanceof ec ? a : null;
}
var qf = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
function df(a) {
  if (v(a)) {
    return a;
  }
  a[qf] || (a[qf] = function(b) {
    return a.handleEvent(b);
  });
  return a[qf];
}
;function rf(a, b) {
  a && a.log(ae, b, void 0);
}
function sf(a, b) {
  a && a.log(be, b, void 0);
}
;Ma("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
function tf(a, b) {
  b ? a.setAttribute("role", b) : a.removeAttribute("role");
}
function uf(a, b, c) {
  t(c) && (c = c.join(" "));
  var d = "aria-" + b;
  "" === c || void 0 == c ? (pa || (pa = {atomic:!1, autocomplete:"none", dropeffect:"none", haspopup:!1, live:"off", multiline:!1, multiselectable:!1, orientation:"vertical", readonly:!1, relevant:"additions text", required:!1, sort:"none", busy:!1, disabled:!1, hidden:!1, invalid:"false"}), c = pa, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c);
}
;function vf() {
  this.c = w(this.j, this);
  this.a = new Ae;
  this.a.b = !1;
  this.a.c = !1;
  this.b = this.a.a = !1;
  this.o = {};
}
function wf(a, b) {
  if (b != a.b) {
    ie();
    var c = he;
    if (b) {
      var d = a.c;
      c.a || (c.a = []);
      c.a.push(d);
    } else {
      (c = c.a) && Kb(c, a.c);
    }
    a.b = b;
  }
}
vf.prototype.j = function(a) {
  if (!this.o[a.b]) {
    var b = this.a;
    var c = [];
    c.push(b.j, " ");
    if (b.b) {
      var d = new Date(a.j);
      c.push("[", ye(d.getFullYear() - 2000) + ye(d.getMonth() + 1) + ye(d.getDate()) + " " + ye(d.getHours()) + ":" + ye(d.getMinutes()) + ":" + ye(d.getSeconds()) + "." + ye(Math.floor(d.getMilliseconds() / 10)), "] ");
    }
    c.push("[", ze(a, b.o.get()), "s] ");
    c.push("[", a.b, "] ");
    c.push(a.c);
    b.c && (d = a.a) && c.push("\n", d instanceof Error ? d.message : d.toString());
    b.a && c.push("\n");
    b = c.join("");
    if (c = xf) {
      switch(a.o) {
        case Zd:
          yf(c, "info", b);
          break;
        case $d:
          yf(c, "error", b);
          break;
        case ae:
          yf(c, "warn", b);
          break;
        default:
          yf(c, "debug", b);
      }
    }
  }
};
var xf = l.console;
function yf(a, b, c) {
  if (a[b]) {
    a[b](c);
  } else {
    a.log(c);
  }
}
;var zf = G ? lc(Yb(Zb('javascript:""'))) : lc(Yb(Zb("about:blank"))), Af = kc(zf), Bf = G ? lc(Yb(Zb('javascript:""'))) : lc(Yb(Zb("javascript:undefined")));
kc(Bf);
function Cf(a) {
  z.call(this);
  this.b = a;
  this.a = {};
}
x(Cf, z);
var Df = [];
f = Cf.prototype;
f.w = function(a, b, c, d) {
  t(b) || (b && (Df[0] = b.toString()), b = Df);
  for (var e = 0; e < b.length; e++) {
    var g = P(a, b[e], c || this.handleEvent, d || !1, this.b || this);
    if (!g) {
      break;
    }
    this.a[g.key] = g;
  }
  return this;
};
f.Ic = function(a, b, c, d) {
  return Ef(this, a, b, c, d);
};
function Ef(a, b, c, d, e, g) {
  if (t(c)) {
    for (var h = 0; h < c.length; h++) {
      Ef(a, b, c[h], d, e, g);
    }
  } else {
    b = kf(b, c, d || a.handleEvent, e, g || a.b || a);
    if (!b) {
      return a;
    }
    a.a[b.key] = b;
  }
  return a;
}
f.da = function(a, b, c, d, e) {
  if (t(b)) {
    for (var g = 0; g < b.length; g++) {
      this.da(a, b[g], c, d, e);
    }
  } else {
    c = c || this.handleEvent, e = e || this.b || this, c = df(c), d = !!d, b = vb(a) ? a.Wa(b, c, d, e) : a ? (a = ff(a)) ? a.Wa(b, c, d, e) : null : null, b && (mf(b), delete this.a[b.key]);
  }
  return this;
};
function Ff(a) {
  Ia(a.a, function(a, c) {
    this.a.hasOwnProperty(c) && mf(a);
  }, a);
  a.a = {};
}
f.v = function() {
  Cf.l.v.call(this);
  Ff(this);
};
f.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Q() {
  z.call(this);
  this.fa = new ec(this);
  this.Wc = this;
  this.Eb = null;
}
x(Q, z);
Q.prototype[ub] = !0;
f = Q.prototype;
f.gc = function(a) {
  this.Eb = a;
};
f.addEventListener = function(a, b, c, d) {
  P(this, a, b, c, d);
};
f.removeEventListener = function(a, b, c, d) {
  lf(this, a, b, c, d);
};
f.dispatchEvent = function(a) {
  var b, c = this.Eb;
  if (c) {
    for (b = []; c; c = c.Eb) {
      b.push(c);
    }
  }
  c = this.Wc;
  var d = a.type || a;
  if (p(a)) {
    a = new D(a, c);
  } else {
    if (a instanceof D) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new D(d, c);
      Ka(a, e);
    }
  }
  e = !0;
  if (b) {
    for (var g = b.length - 1; !a.o && 0 <= g; g--) {
      var h = a.j = b[g];
      e = Gf(h, d, !0, a) && e;
    }
  }
  a.o || (h = a.j = c, e = Gf(h, d, !0, a) && e, a.o || (e = Gf(h, d, !1, a) && e));
  if (b) {
    for (g = 0; !a.o && g < b.length; g++) {
      h = a.j = b[g], e = Gf(h, d, !1, a) && e;
    }
  }
  return e;
};
f.v = function() {
  Q.l.v.call(this);
  this.fa && hc(this.fa);
  this.Eb = null;
};
f.w = function(a, b, c, d) {
  return this.fa.add(String(a), b, !1, c, d);
};
f.Ic = function(a, b, c, d) {
  return this.fa.add(String(a), b, !0, c, d);
};
f.da = function(a, b, c, d) {
  var e = this.fa;
  a = String(a).toString();
  if (a in e.a) {
    var g = e.a[a];
    b = fc(g, b, c, d);
    -1 < b ? (Vb(g[b]), Array.prototype.splice.call(g, b, 1), 0 == g.length && (delete e.a[a], e.b--), e = !0) : e = !1;
  } else {
    e = !1;
  }
  return e;
};
function Gf(a, b, c, d) {
  b = a.fa.a[String(b)];
  if (!b) {
    return !0;
  }
  b = b.concat();
  for (var e = !0, g = 0; g < b.length; ++g) {
    var h = b[g];
    if (h && !h.Ra && h.capture == c) {
      var k = h.listener, m = h.xb || h.src;
      h.jb && gc(a.fa, h);
      e = !1 !== k.call(m, d) && e;
    }
  }
  return e && 0 != d.Rc;
}
f.Wa = function(a, b, c, d) {
  return this.fa.Wa(String(a), b, c, d);
};
function Hf(a, b, c) {
  if (p(b)) {
    (b = If(a, b)) && (a.style[b] = c);
  } else {
    for (var d in b) {
      c = a;
      var e = b[d], g = If(c, d);
      g && (c.style[g] = e);
    }
  }
}
var Jf = {};
function If(a, b) {
  var c = Jf[b];
  if (!c) {
    var d = db(b);
    c = d;
    void 0 === a.style[d] && (d = (I ? "Webkit" : H ? "Moz" : G ? "ms" : zc ? "O" : null) + eb(d), void 0 !== a.style[d] && (c = d));
    Jf[b] = c;
  }
  return c;
}
function Kf(a, b) {
  var c = O(a);
  return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "";
}
function Lf(a, b) {
  return Kf(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b];
}
function Mf(a, b, c) {
  if (b instanceof F) {
    var d = b.a;
    b = b.b;
  } else {
    d = b, b = c;
  }
  a.style.left = Nf(d, !1);
  a.style.top = Nf(b, !1);
}
function Of(a) {
  a = a ? O(a) : document;
  return !G || Ic(9) || Fe(N(a).a) ? a.documentElement : a.body;
}
function Pf(a) {
  try {
    var b = a.getBoundingClientRect();
  } catch (c) {
    return {left:0, top:0, right:0, bottom:0};
  }
  G && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b;
}
function Qf(a) {
  if (G && !Ic(8)) {
    return a.offsetParent;
  }
  var b = O(a), c = Lf(a, "position"), d = "fixed" == c || "absolute" == c;
  for (a = a.parentNode; a && a != b; a = a.parentNode) {
    if (11 == a.nodeType && a.host && (a = a.host), c = Lf(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a;
    }
  }
  return null;
}
function Rf(a) {
  for (var b = new K(0, Infinity, Infinity, 0), c = N(a), d = c.a.body, e = c.a.documentElement, g = He(c.a); a = Qf(a);) {
    if (!(G && 0 == a.clientWidth || I && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != Lf(a, "overflow")) {
      var h = Sf(a), k = new F(a.clientLeft, a.clientTop);
      h.a += k.a;
      h.b += k.b;
      b.top = Math.max(b.top, h.b);
      b.right = Math.min(b.right, h.a + a.clientWidth);
      b.bottom = Math.min(b.bottom, h.b + a.clientHeight);
      b.left = Math.max(b.left, h.a);
    }
  }
  d = g.scrollLeft;
  g = g.scrollTop;
  b.left = Math.max(b.left, d);
  b.top = Math.max(b.top, g);
  c = Ee(Ie(c.a) || window);
  b.right = Math.min(b.right, d + c.width);
  b.bottom = Math.min(b.bottom, g + c.height);
  return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null;
}
function Sf(a) {
  var b = O(a), c = new F(0, 0), d = Of(b);
  if (a == d) {
    return c;
  }
  a = Pf(a);
  b = Ge(N(b).a);
  c.a = a.left + b.a;
  c.b = a.top + b.b;
  return c;
}
function Tf(a, b, c) {
  if (b instanceof Ha) {
    c = b.height, b = b.width;
  } else {
    if (void 0 == c) {
      throw Error("missing height argument");
    }
  }
  a.style.width = Nf(b, !0);
  a.style.height = Nf(c, !0);
}
function Nf(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a;
}
function Uf(a) {
  var b = Vf;
  if ("none" != Lf(a, "display")) {
    return b(a);
  }
  var c = a.style, d = c.display, e = c.visibility, g = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  a = b(a);
  c.display = d;
  c.position = g;
  c.visibility = e;
  return a;
}
function Vf(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = I && !b && !c;
  return n(b) && !d || !a.getBoundingClientRect ? new Ha(b, c) : (a = Pf(a), new Ha(a.right - a.left, a.bottom - a.top));
}
function Wf(a) {
  var b = Sf(a);
  a = Uf(a);
  return new se(b.a, b.b, a.width, a.height);
}
function Xf(a, b) {
  a = a.style;
  "opacity" in a ? a.opacity = b : "MozOpacity" in a ? a.MozOpacity = b : "filter" in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")");
}
function R(a, b) {
  a.style.display = b ? "" : "none";
}
function Yf(a) {
  return "rtl" == Lf(a, "direction");
}
var Zf = H ? "MozUserSelect" : I || Ac ? "WebkitUserSelect" : null;
function $f(a, b, c) {
  c = c ? null : a.getElementsByTagName("*");
  if (Zf) {
    if (b = b ? "none" : "", a.style && (a.style[Zf] = b), c) {
      a = 0;
      for (var d; d = c[a]; a++) {
        d.style && (d.style[Zf] = b);
      }
    }
  } else {
    if (G || zc) {
      if (b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for (a = 0; d = c[a]; a++) {
          d.setAttribute("unselectable", b);
        }
      }
    }
  }
}
function ag(a, b) {
  if (/^\d+px?$/.test(b)) {
    return parseInt(b, 10);
  }
  var c = a.style.left, d = a.runtimeStyle.left;
  a.runtimeStyle.left = a.currentStyle.left;
  a.style.left = b;
  b = a.style.pixelLeft;
  a.style.left = c;
  a.runtimeStyle.left = d;
  return +b;
}
function bg(a, b) {
  return (b = a.currentStyle ? a.currentStyle[b] : null) ? ag(a, b) : 0;
}
var cg = {thin:2, medium:4, thick:6};
function dg(a, b) {
  if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) {
    return 0;
  }
  b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
  return b in cg ? cg[b] : ag(a, b);
}
;function eg() {
  this.gb = {};
}
eg.prototype.set = function(a, b) {
  null != b ? this.gb[a] = b : delete this.gb[a];
  return this;
};
eg.prototype.get = function(a) {
  var b = null;
  this.gb.hasOwnProperty(a) && (b = this.gb[a]);
  return null != b ? b : null;
};
eg.prototype.has = function(a) {
  return !!this.get(a);
};
function fg(a) {
  this.a = a;
  this.b = {};
  this.c = je("webdriver.http.Executor");
}
function gg(a, b) {
  var c = a.b[b.a] || hg[b.a];
  if (!c) {
    throw Error("Unrecognized command: " + b.a);
  }
  b = b.b;
  var d = ig(c.path, b), e = new jg(c.method, d, b), g = a.c;
  fe(g, function() {
    return ">>>\n" + e;
  });
  return kg(a.a, e).then(function(a) {
    fe(g, function() {
      return "<<<\n" + a;
    });
    return lg(a);
  });
}
function ig(a, b) {
  var c = a.match(/\/:(\w+)\b/g);
  if (c) {
    for (var d = 0; d < c.length; ++d) {
      var e = c[d].substring(2);
      if (e in b) {
        var g = b[e];
        g && g.ELEMENT && (g = g.ELEMENT);
        a = a.replace(c[d], "/" + g);
        delete b[e];
      } else {
        throw Error("Missing required parameter: " + e);
      }
    }
  }
  return a;
}
function lg(a) {
  try {
    return JSON.parse(a.body);
  } catch (c) {
  }
  var b = {status:0, value:a.body.replace(/\r\n/g, "\n")};
  199 < a.status && 300 > a.status || (b.status = 404 == a.status ? 9 : 13);
  return b;
}
var hg = function() {
  function a(a) {
    return c("POST", a);
  }
  function b(a) {
    return c("GET", a);
  }
  function c(a, b) {
    return {method:a, path:b};
  }
  return (new function() {
    var a = {};
    this.put = function(b, c) {
      a[b] = c;
      return this;
    };
    this.Xc = function() {
      return a;
    };
  }).put("getStatus", b("/status")).put("newSession", a("/session")).put("getSessions", b("/sessions")).put("getSessionCapabilities", b("/session/:sessionId")).put("quit", c("DELETE", "/session/:sessionId")).put("close", c("DELETE", "/session/:sessionId/window")).put("getCurrentWindowHandle", b("/session/:sessionId/window_handle")).put("getWindowHandles", b("/session/:sessionId/window_handles")).put("getCurrentUrl", b("/session/:sessionId/url")).put("get", a("/session/:sessionId/url")).put("goBack", 
  a("/session/:sessionId/back")).put("goForward", a("/session/:sessionId/forward")).put("refresh", a("/session/:sessionId/refresh")).put("addCookie", a("/session/:sessionId/cookie")).put("getCookies", b("/session/:sessionId/cookie")).put("deleteAllCookies", c("DELETE", "/session/:sessionId/cookie")).put("deleteCookie", c("DELETE", "/session/:sessionId/cookie/:name")).put("findElement", a("/session/:sessionId/element")).put("findElements", a("/session/:sessionId/elements")).put("getActiveElement", 
  a("/session/:sessionId/element/active")).put("findChildElement", a("/session/:sessionId/element/:id/element")).put("findChildElements", a("/session/:sessionId/element/:id/elements")).put("clearElement", a("/session/:sessionId/element/:id/clear")).put("clickElement", a("/session/:sessionId/element/:id/click")).put("sendKeysToElement", a("/session/:sessionId/element/:id/value")).put("submitElement", a("/session/:sessionId/element/:id/submit")).put("getElementText", b("/session/:sessionId/element/:id/text")).put("getElementTagName", 
  b("/session/:sessionId/element/:id/name")).put("isElementSelected", b("/session/:sessionId/element/:id/selected")).put("isElementEnabled", b("/session/:sessionId/element/:id/enabled")).put("isElementDisplayed", b("/session/:sessionId/element/:id/displayed")).put("getElementLocation", b("/session/:sessionId/element/:id/location")).put("getElementSize", b("/session/:sessionId/element/:id/size")).put("getElementAttribute", b("/session/:sessionId/element/:id/attribute/:name")).put("getElementValueOfCssProperty", 
  b("/session/:sessionId/element/:id/css/:propertyName")).put("elementEquals", b("/session/:sessionId/element/:id/equals/:other")).put("takeElementScreenshot", b("/session/:sessionId/element/:id/screenshot")).put("switchToWindow", a("/session/:sessionId/window")).put("maximizeWindow", a("/session/:sessionId/window/:windowHandle/maximize")).put("getWindowPosition", b("/session/:sessionId/window/:windowHandle/position")).put("setWindowPosition", a("/session/:sessionId/window/:windowHandle/position")).put("getWindowSize", 
  b("/session/:sessionId/window/:windowHandle/size")).put("setWindowSize", a("/session/:sessionId/window/:windowHandle/size")).put("switchToFrame", a("/session/:sessionId/frame")).put("getPageSource", b("/session/:sessionId/source")).put("getTitle", b("/session/:sessionId/title")).put("executeScript", a("/session/:sessionId/execute")).put("executeAsyncScript", a("/session/:sessionId/execute_async")).put("screenshot", b("/session/:sessionId/screenshot")).put("setTimeout", a("/session/:sessionId/timeouts")).put("setScriptTimeout", 
  a("/session/:sessionId/timeouts/async_script")).put("implicitlyWait", a("/session/:sessionId/timeouts/implicit_wait")).put("mouseMoveTo", a("/session/:sessionId/moveto")).put("mouseClick", a("/session/:sessionId/click")).put("mouseDoubleClick", a("/session/:sessionId/doubleclick")).put("mouseButtonDown", a("/session/:sessionId/buttondown")).put("mouseButtonUp", a("/session/:sessionId/buttonup")).put("mouseMoveTo", a("/session/:sessionId/moveto")).put("sendKeysToActiveElement", a("/session/:sessionId/keys")).put("touchSingleTap", 
  a("/session/:sessionId/touch/click")).put("touchDoubleTap", a("/session/:sessionId/touch/doubleclick")).put("touchDown", a("/session/:sessionId/touch/down")).put("touchUp", a("/session/:sessionId/touch/up")).put("touchMove", a("/session/:sessionId/touch/move")).put("touchScroll", a("/session/:sessionId/touch/scroll")).put("touchLongPress", a("/session/:sessionId/touch/longclick")).put("touchFlick", a("/session/:sessionId/touch/flick")).put("acceptAlert", a("/session/:sessionId/accept_alert")).put("dismissAlert", 
  a("/session/:sessionId/dismiss_alert")).put("getAlertText", b("/session/:sessionId/alert_text")).put("setAlertValue", a("/session/:sessionId/alert_text")).put("getLog", a("/session/:sessionId/log")).put("getAvailableLogTypes", b("/session/:sessionId/log/types")).put("getSessionLogs", a("/logs")).put("uploadFile", a("/session/:sessionId/file")).Xc();
}();
function mg(a) {
  var b = [], c;
  for (c in a) {
    b.push(c + ": " + a[c]);
  }
  return b.join("\n");
}
function jg(a, b, c) {
  this.method = a;
  this.path = b;
  this.data = c || {};
  this.headers = {Accept:"application/json; charset=utf-8"};
}
jg.prototype.toString = function() {
  return [this.method + " " + this.path + " HTTP/1.1", mg(this.headers), "", JSON.stringify(this.data)].join("\n");
};
function ng(a, b, c) {
  this.status = a;
  this.body = c;
  this.headers = {};
  for (var d in b) {
    this.headers[d.toLowerCase()] = b[d];
  }
}
function og(a) {
  var b = {};
  if (a.getAllResponseHeaders) {
    var c = a.getAllResponseHeaders();
    c && (c = c.replace(/\r\n/g, "\n").split("\n"), C(c, function(a) {
      a = a.split(/\s*:\s*/, 2);
      a[0] && (b[a[0]] = a[1] || "");
    }));
  }
  return new ng(a.status || 200, b, a.responseText.replace(/\0/g, ""));
}
ng.prototype.toString = function() {
  var a = mg(this.headers), b = ["HTTP/1.1 " + this.status, a];
  a && b.push("");
  this.body && b.push(this.body);
  return b.join("\n");
};
function pg(a, b, c) {
  if (v(a)) {
    c && (a = w(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = w(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
}
;function qg(a) {
  Q.call(this);
  this.a = a;
  a = G ? "focusout" : "blur";
  this.b = P(this.a, G ? "focusin" : "focus", this, !G);
  this.c = P(this.a, a, this, !G);
}
x(qg, Q);
qg.prototype.handleEvent = function(a) {
  var b = new M(a.c);
  b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
  this.dispatchEvent(b);
};
qg.prototype.v = function() {
  qg.l.v.call(this);
  mf(this.b);
  mf(this.c);
  delete this.a;
};
function rg(a, b) {
  Q.call(this);
  a && sg(this, a, b);
}
x(rg, Q);
f = rg.prototype;
f.La = null;
f.Cb = null;
f.$b = null;
f.Db = null;
f.ca = -1;
f.wa = -1;
f.Ib = !1;
var tg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ug = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, vg = G || 
Ac || I && J("525"), wg = Cc && H;
f = rg.prototype;
f.nd = function(a) {
  if (I || Ac) {
    if (17 == this.ca && !a.ctrlKey || 18 == this.ca && !a.altKey || Cc && 91 == this.ca && !a.metaKey) {
      this.wa = this.ca = -1;
    }
  }
  -1 == this.ca && (a.ctrlKey && 17 != a.a ? this.ca = 17 : a.altKey && 18 != a.a ? this.ca = 18 : a.metaKey && 91 != a.a && (this.ca = 91));
  vg && !Xc(a.a, this.ca, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.wa = Zc(a.a), wg && (this.Ib = a.altKey));
};
f.od = function(a) {
  this.wa = this.ca = -1;
  this.Ib = a.altKey;
};
f.handleEvent = function(a) {
  var b = a.c, c = b.altKey;
  if (G && "keypress" == a.type) {
    var d = this.wa;
    var e = 13 != d && 27 != d ? b.keyCode : 0;
  } else {
    (I || Ac) && "keypress" == a.type ? (d = this.wa, e = 0 <= b.charCode && 63232 > b.charCode && Yc(d) ? b.charCode : 0) : zc && !I ? (d = this.wa, e = Yc(d) ? b.keyCode : 0) : (d = b.keyCode || this.wa, e = b.charCode || 0, wg && (c = this.Ib), Cc && 63 == e && 224 == d && (d = 191));
  }
  var g = d = Zc(d);
  d ? 63232 <= d && d in tg ? g = tg[d] : 25 == d && a.shiftKey && (g = 9) : b.keyIdentifier && b.keyIdentifier in ug && (g = ug[b.keyIdentifier]);
  a = g == this.ca;
  this.ca = g;
  b = new xg(g, e, a, b);
  b.altKey = c;
  this.dispatchEvent(b);
};
f.g = function() {
  return this.La;
};
function sg(a, b, c) {
  a.Db && yg(a);
  a.La = b;
  a.Cb = P(a.La, "keypress", a, c);
  a.$b = P(a.La, "keydown", a.nd, c, a);
  a.Db = P(a.La, "keyup", a.od, c, a);
}
function yg(a) {
  a.Cb && (mf(a.Cb), mf(a.$b), mf(a.Db), a.Cb = null, a.$b = null, a.Db = null);
  a.La = null;
  a.ca = -1;
  a.wa = -1;
}
f.v = function() {
  rg.l.v.call(this);
  yg(this);
};
function xg(a, b, c, d) {
  M.call(this, d);
  this.type = "key";
  this.a = a;
  this.repeat = c;
}
x(xg, M);
function S(a) {
  Q.call(this);
  this.a = a || N();
  this.ya = zg;
  this.ka = null;
  this.J = !1;
  this.b = null;
  this.K = void 0;
  this.D = this.j = this.o = null;
}
x(S, Q);
S.prototype.hb = fb.Aa();
var zg = null;
function Ag(a, b) {
  switch(a) {
    case 1:
      return b ? "disable" : "enable";
    case 2:
      return b ? "highlight" : "unhighlight";
    case 4:
      return b ? "activate" : "deactivate";
    case 8:
      return b ? "select" : "unselect";
    case 16:
      return b ? "check" : "uncheck";
    case 32:
      return b ? "focus" : "blur";
    case 64:
      return b ? "open" : "close";
  }
  throw Error("Invalid component state");
}
f = S.prototype;
f.N = function() {
  return this.ka || (this.ka = ":" + (this.hb.a++).toString(36));
};
f.g = function() {
  return this.b;
};
function T(a) {
  a.K || (a.K = new Cf(a));
  return a.K;
}
function Bg(a, b) {
  if (a == b) {
    throw Error("Unable to set parent component");
  }
  if (b && a.o && a.ka && Cg(a.o, a.ka) && a.o != b) {
    throw Error("Unable to set parent component");
  }
  a.o = b;
  S.l.gc.call(a, b);
}
f.gc = function(a) {
  if (this.o && this.o != a) {
    throw Error("Method not supported");
  }
  S.l.gc.call(this, a);
};
f.I = function() {
  this.b = this.a.a.createElement("DIV");
};
function Dg(a, b, c) {
  if (a.J) {
    throw Error("Component already rendered");
  }
  a.b || a.I();
  b ? b.insertBefore(a.b, c || null) : a.a.a.body.appendChild(a.b);
  a.o && !a.o.J || a.S();
}
f.S = function() {
  this.J = !0;
  Eg(this, function(a) {
    !a.J && a.g() && a.S();
  });
};
f.aa = function() {
  Eg(this, function(a) {
    a.J && a.aa();
  });
  this.K && Ff(this.K);
  this.J = !1;
};
f.v = function() {
  this.J && this.aa();
  this.K && (this.K.M(), delete this.K);
  Eg(this, function(a) {
    a.M();
  });
  this.b && Qe(this.b);
  this.o = this.b = this.D = this.j = null;
  S.l.v.call(this);
};
f.ea = function(a, b) {
  this.ib(a, Fg(this), b);
};
f.ib = function(a, b, c) {
  if (a.J && (c || !this.J)) {
    throw Error("Component already rendered");
  }
  if (0 > b || b > Fg(this)) {
    throw Error("Child component index out of bounds");
  }
  this.D && this.j || (this.D = {}, this.j = []);
  if (a.o == this) {
    var d = a.N();
    this.D[d] = a;
    Kb(this.j, a);
  } else {
    d = this.D;
    var e = a.N();
    if (null !== d && e in d) {
      throw Error('The object already contains the key "' + e + '"');
    }
    d[e] = a;
  }
  Bg(a, this);
  Nb(this.j, b, 0, a);
  a.J && this.J && a.o == this ? (c = this.Ba(), b = c.childNodes[b] || null, b != a.g() && c.insertBefore(a.g(), b)) : c ? (this.b || this.I(), b = U(this, b + 1), Dg(a, this.Ba(), b ? b.b : null)) : this.J && !a.J && a.b && a.b.parentNode && 1 == a.b.parentNode.nodeType && a.S();
};
f.Ba = function() {
  return this.b;
};
function Gg(a) {
  null == a.ya && (a.ya = Yf(a.J ? a.b : a.a.a.body));
  return a.ya;
}
function Fg(a) {
  return a.j ? a.j.length : 0;
}
function Cg(a, b) {
  a.D && b ? (a = a.D, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
  return b;
}
function U(a, b) {
  return a.j ? a.j[b] || null : null;
}
function Eg(a, b, c) {
  a.j && C(a.j, b, c);
}
function Hg(a, b) {
  return a.j && b ? Eb(a.j, b) : -1;
}
f.removeChild = function(a, b) {
  if (a) {
    var c = p(a) ? a : a.N();
    a = Cg(this, c);
    if (c && a) {
      var d = this.D;
      c in d && delete d[c];
      Kb(this.j, a);
      b && (a.aa(), a.b && Qe(a.b));
      Bg(a, null);
    }
  }
  if (!a) {
    throw Error("Child is not in parent component");
  }
  return a;
};
function Ig(a) {
  this.c = a;
}
aa(Ig);
function Jg(a, b) {
  a && (a.tabIndex = b ? 0 : -1);
}
function Kg(a, b) {
  b = b.g();
  $f(b, !0, H);
  G && (b.hideFocus = !0);
  (a = a.c) && tf(b, a);
}
Ig.prototype.b = function() {
  return "goog-container";
};
Ig.prototype.a = function(a) {
  var b = this.b(), c = [b, a.xa == Lg ? b + "-horizontal" : b + "-vertical"];
  a.isEnabled() || c.push(b + "-disabled");
  return c;
};
function Mg(a, b) {
  this.c = a;
  this.b = b;
}
;function Ng(a, b) {
  this.b = a;
  a = new eg;
  b = b instanceof eg ? b.gb : b;
  for (var c in b) {
    b.hasOwnProperty(c) && a.set(c, b[c]);
  }
  this.a = a;
}
Ng.prototype.N = function() {
  return this.b;
};
Ng.prototype.toJSON = function() {
  return this.N();
};
function Og(a) {
  this.a = a;
}
function kg(a, b) {
  var c = a.a + b.path;
  return new L(function(a, e) {
    var d = oc();
    d.open(b.method, c, !0);
    d.onload = function() {
      a(og(d));
    };
    d.onerror = function() {
      e(Error(["Unable to send request: ", b.method, " ", c, "\nOriginal request:\n", b].join("")));
    };
    for (var h in b.headers) {
      d.setRequestHeader(h, b.headers[h] + "");
    }
    d.send(JSON.stringify(b.data));
  });
}
;function Pg(a, b, c) {
  Q.call(this);
  this.target = a;
  this.h = b || a;
  this.j = c || new se(NaN, NaN, NaN, NaN);
  this.c = O(a);
  this.a = new Cf(this);
  lb(this, la(A, this.a));
  this.deltaY = this.deltaX = this.K = this.D = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.o = !0;
  this.b = !1;
  P(this.h, ["touchstart", "mousedown"], this.Sc, !1, this);
}
x(Pg, Q);
var Qg = l.document && l.document.documentElement && !!l.document.documentElement.setCapture && !!l.document.releaseCapture;
f = Pg.prototype;
f.ja = function(a) {
  this.o = a;
};
f.v = function() {
  Pg.l.v.call(this);
  lf(this.h, ["touchstart", "mousedown"], this.Sc, !1, this);
  Ff(this.a);
  Qg && this.c.releaseCapture();
  this.h = this.target = null;
};
f.Sc = function(a) {
  var b = "mousedown" == a.type;
  if (!this.o || this.b || b && !ne(a)) {
    this.dispatchEvent("earlycancel");
  } else {
    if (this.dispatchEvent(new Rg("start", this, a.clientX, a.clientY, a))) {
      this.b = !0;
      b && a.b();
      b = this.c;
      var c = b.documentElement, d = !Qg;
      this.a.w(b, ["touchmove", "mousemove"], this.pd, d);
      this.a.w(b, ["touchend", "mouseup"], this.kb, d);
      Qg ? (c.setCapture(!1), this.a.w(c, "losecapture", this.kb)) : this.a.w(Je(b), "blur", this.kb);
      this.B && this.a.w(this.B, "scroll", this.Hd, d);
      this.clientX = this.D = a.clientX;
      this.clientY = this.K = a.clientY;
      this.screenX = a.screenX;
      this.screenY = a.screenY;
      this.deltaX = this.target.offsetLeft;
      this.deltaY = this.target.offsetTop;
      this.m = Ge(N(this.c).a);
    }
  }
};
f.kb = function(a, b) {
  Ff(this.a);
  Qg && this.c.releaseCapture();
  this.b ? (this.b = !1, this.dispatchEvent(new Rg("end", this, a.clientX, a.clientY, a, Sg(this, this.deltaX), Tg(this, this.deltaY), b || "touchcancel" == a.type))) : this.dispatchEvent("earlycancel");
};
f.pd = function(a) {
  if (this.o) {
    var b = a.clientX - this.clientX, c = a.clientY - this.clientY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    if (!this.b) {
      var d = this.D - this.clientX, e = this.K - this.clientY;
      if (0 < d * d + e * e) {
        if (this.dispatchEvent(new Rg("start", this, a.clientX, a.clientY, a))) {
          this.b = !0;
        } else {
          this.pa || this.kb(a);
          return;
        }
      }
    }
    c = Ug(this, b, c);
    b = c.a;
    c = c.b;
    this.b && this.dispatchEvent(new Rg("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (Vg(this, a, b, c), a.b());
  }
};
function Ug(a, b, c) {
  var d = Ge(N(a.c).a);
  b += d.a - a.m.a;
  c += d.b - a.m.b;
  a.m = d;
  a.deltaX += b;
  a.deltaY += c;
  return new F(Sg(a, a.deltaX), Tg(a, a.deltaY));
}
f.Hd = function(a) {
  var b = Ug(this, 0, 0);
  a.clientX = this.clientX;
  a.clientY = this.clientY;
  Vg(this, a, b.a, b.b);
};
function Vg(a, b, c, d) {
  a.target.style.left = c + "px";
  a.target.style.top = d + "px";
  a.dispatchEvent(new Rg("drag", a, b.clientX, b.clientY, b, c, d));
}
function Sg(a, b) {
  var c = a.j;
  a = isNaN(c.left) ? null : c.left;
  c = isNaN(c.width) ? 0 : c.width;
  return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b));
}
function Tg(a, b) {
  var c = a.j;
  a = isNaN(c.top) ? null : c.top;
  c = isNaN(c.height) ? 0 : c.height;
  return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b));
}
function Rg(a, b, c, d, e, g, h) {
  D.call(this, a);
  this.clientX = c;
  this.clientY = d;
  this.left = n(g) ? g : b.deltaX;
  this.top = n(h) ? h : b.deltaY;
}
x(Rg, D);
function Wg(a, b, c, d, e, g, h, k) {
  var m;
  if (m = c.offsetParent) {
    var q = "HTML" == m.tagName || "BODY" == m.tagName;
    if (!q || "static" != Lf(m, "position")) {
      var u = Sf(m);
      q || (q = (q = Yf(m)) && H ? -m.scrollLeft : !q || Bc && J("8") || "visible" == Lf(m, "overflowX") ? m.scrollLeft : m.scrollWidth - m.clientWidth - m.scrollLeft, u = wc(u, new F(q, m.scrollTop)));
    }
  }
  m = u || new F;
  u = Wf(a);
  if (q = Rf(a)) {
    var E = new se(q.left, q.top, q.right - q.left, q.bottom - q.top);
    q = Math.max(u.left, E.left);
    var Y = Math.min(u.left + u.width, E.left + E.width);
    if (q <= Y) {
      var ta = Math.max(u.top, E.top);
      E = Math.min(u.top + u.height, E.top + E.height);
      ta <= E && (u.left = q, u.top = ta, u.width = Y - q, u.height = E - ta);
    }
  }
  q = N(a);
  ta = N(c);
  if (q.a != ta.a) {
    Y = q.a.body;
    ta = Ie(ta.a);
    E = new F(0, 0);
    var ua = Je(O(Y));
    if (Pa(ua, "parent")) {
      var te = Y;
      do {
        if (ua == ta) {
          var Cb = Sf(te);
        } else {
          Cb = Pf(te), Cb = new F(Cb.left, Cb.top);
        }
        E.a += Cb.a;
        E.b += Cb.b;
      } while (ua && ua != ta && ua != ua.parent && (te = ua.frameElement) && (ua = ua.parent));
    }
    Y = wc(E, Sf(Y));
    !G || Ic(9) || Fe(q.a) || (Y = wc(Y, Ge(q.a)));
    u.left += Y.a;
    u.top += Y.b;
  }
  a = Xg(a, b);
  b = u.left;
  a & 4 ? b += u.width : a & 2 && (b += u.width / 2);
  b = new F(b, u.top + (a & 1 ? u.height : 0));
  b = wc(b, m);
  e && (b.a += (a & 4 ? -1 : 1) * e.a, b.b += (a & 1 ? -1 : 1) * e.b);
  var ia;
  h && (ia = Rf(c)) && (ia.top -= m.b, ia.right -= m.a, ia.bottom -= m.b, ia.left -= m.a);
  return Yg(b, c, d, g, ia, h, k);
}
function Yg(a, b, c, d, e, g, h) {
  a = vc(a);
  var k = Xg(b, c);
  c = Uf(b);
  h = h ? new Ha(h.width, h.height) : new Ha(c.width, c.height);
  a = vc(a);
  h = new Ha(h.width, h.height);
  var m = 0;
  if (d || 0 != k) {
    k & 4 ? a.a -= h.width + (d ? d.right : 0) : k & 2 ? a.a -= h.width / 2 : d && (a.a += d.left), k & 1 ? a.b -= h.height + (d ? d.bottom : 0) : d && (a.b += d.top);
  }
  if (g) {
    if (e) {
      d = a;
      k = h;
      m = 0;
      65 == (g & 65) && (d.a < e.left || d.a >= e.right) && (g &= -2);
      132 == (g & 132) && (d.b < e.top || d.b >= e.bottom) && (g &= -5);
      d.a < e.left && g & 1 && (d.a = e.left, m |= 1);
      if (g & 16) {
        var q = d.a;
        d.a < e.left && (d.a = e.left, m |= 4);
        d.a + k.width > e.right && (k.width = Math.min(e.right - d.a, q + k.width - e.left), k.width = Math.max(k.width, 0), m |= 4);
      }
      d.a + k.width > e.right && g & 1 && (d.a = Math.max(e.right - k.width, e.left), m |= 1);
      g & 2 && (m |= (d.a < e.left ? 16 : 0) | (d.a + k.width > e.right ? 32 : 0));
      d.b < e.top && g & 4 && (d.b = e.top, m |= 2);
      g & 32 && (q = d.b, d.b < e.top && (d.b = e.top, m |= 8), d.b + k.height > e.bottom && (k.height = Math.min(e.bottom - d.b, q + k.height - e.top), k.height = Math.max(k.height, 0), m |= 8));
      d.b + k.height > e.bottom && g & 4 && (d.b = Math.max(e.bottom - k.height, e.top), m |= 2);
      g & 8 && (m |= (d.b < e.top ? 64 : 0) | (d.b + k.height > e.bottom ? 128 : 0));
      e = m;
    } else {
      e = 256;
    }
    m = e;
  }
  g = new se(0, 0, 0, 0);
  g.left = a.a;
  g.top = a.b;
  g.width = h.width;
  g.height = h.height;
  e = m;
  if (e & 496) {
    return e;
  }
  Mf(b, new F(g.left, g.top));
  h = new Ha(g.width, g.height);
  c == h || c && h && c.width == h.width && c.height == h.height || (c = h, a = Fe(N(O(b)).a), !G || J("10") || a && J("8") ? (b = b.style, H ? b.MozBoxSizing = "border-box" : I ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px") : (h = b.style, a ? (G ? (a = bg(b, "paddingLeft"), g = bg(b, "paddingRight"), d = bg(b, "paddingTop"), k = bg(b, "paddingBottom"), a = new K(d, g, k, a)) : (a = Kf(b, "paddingLeft"), 
  g = Kf(b, "paddingRight"), d = Kf(b, "paddingTop"), k = Kf(b, "paddingBottom"), a = new K(parseFloat(d), parseFloat(g), parseFloat(k), parseFloat(a))), G && !Ic(9) ? (g = dg(b, "borderLeft"), d = dg(b, "borderRight"), k = dg(b, "borderTop"), b = dg(b, "borderBottom"), b = new K(k, d, b, g)) : (g = Kf(b, "borderLeftWidth"), d = Kf(b, "borderRightWidth"), k = Kf(b, "borderTopWidth"), b = Kf(b, "borderBottomWidth"), b = new K(parseFloat(k), parseFloat(d), parseFloat(b), parseFloat(g))), h.pixelWidth = 
  c.width - b.left - a.left - a.right - b.right, h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width, h.pixelHeight = c.height)));
  return e;
}
function Xg(a, b) {
  return (b & 8 && Yf(a) ? b ^ 4 : b) & -9;
}
;function Zg() {
}
var $g;
aa(Zg);
var ah = {button:"pressed", checkbox:"checked", menuitem:"selected", menuitemcheckbox:"checked", menuitemradio:"checked", radio:"checked", tab:"selected", treeitem:"selected"};
f = Zg.prototype;
f.ob = function() {
};
f.Na = function(a) {
  return a.a.A("DIV", bh(this, a).join(" "), a.Ca);
};
function ch(a, b, c) {
  if (a = a.g ? a.g() : a) {
    var d = [b];
    G && !J("7") && (d = dh($b(a), b), d.push(b));
    (c ? bc : dc)(a, d);
  }
}
f.vc = function(a) {
  Gg(a) && this.yc(a.g(), !0);
  a.isEnabled() && this.pb(a, !0);
};
f.xc = function(a, b) {
  $f(a, !b, !G && !zc);
};
f.yc = function(a, b) {
  ch(a, this.Oa() + "-rtl", b);
};
f.wc = function(a) {
  var b;
  return a.T & 32 && (b = a.g()) ? We(b) && Xe(b) : !1;
};
f.pb = function(a, b) {
  var c;
  if (a.T & 32 && (c = a.g())) {
    if (!b && a.O & 32) {
      try {
        c.blur();
      } catch (d) {
      }
      a.O & 32 && a.zc(null);
    }
    (We(c) && Xe(c)) != b && Ve(c, b);
  }
};
f.Sb = function(a, b, c) {
  var d = a.g();
  if (d) {
    var e = eh(this, b);
    e && ch(a, e, c);
    this.oa(d, b, c);
  }
};
f.oa = function(a, b, c) {
  $g || ($g = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  b = $g[b];
  var d = a.getAttribute("role") || null;
  d && (d = ah[d] || b, b = "checked" == b || "selected" == b ? d : b);
  b && uf(a, b, c);
};
function fh(a, b) {
  if (a && (Pe(a), b)) {
    if (p(b)) {
      Se(a, b);
    } else {
      var c = function(b) {
        if (b) {
          var c = O(a);
          a.appendChild(p(b) ? c.createTextNode(b) : b);
        }
      };
      t(b) ? C(b, c) : !ca(b) || "nodeType" in b ? c(b) : C(Mb(b), c);
    }
  }
}
f.Oa = function() {
  return "goog-control";
};
function bh(a, b) {
  var c = a.Oa(), d = [c], e = a.Oa();
  e != c && d.push(e);
  c = b.O;
  for (e = []; c;) {
    var g = c & -c;
    e.push(eh(a, g));
    c &= ~g;
  }
  d.push.apply(d, e);
  (a = b.pc) && d.push.apply(d, a);
  G && !J("7") && d.push.apply(d, dh(d));
  return d;
}
function dh(a, b) {
  var c = [];
  b && (a = Lb(a, [b]));
  C([], function(d) {
    !Ib(d, la(Jb, a)) || b && !Jb(d, b) || c.push(d.join("_"));
  });
  return c;
}
function eh(a, b) {
  if (!a.a) {
    var c = a.Oa();
    a.a = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"};
  }
  return a.a[b];
}
;function gh(a, b) {
  S.call(this, b);
  this.h = a || "";
}
var hh;
x(gh, S);
f = gh.prototype;
f.sa = null;
function ih() {
  null == hh && (hh = "placeholder" in document.createElement("INPUT"));
  return hh;
}
f.yb = !1;
f.I = function() {
  this.b = this.a.A("INPUT", {type:"text"});
};
f.S = function() {
  gh.l.S.call(this);
  var a = new Cf(this);
  a.w(this.g(), "focus", this.Dc);
  a.w(this.g(), "blur", this.ed);
  ih() ? this.c = a : (H && a.w(this.g(), ["keypress", "keydown", "keyup"], this.kd), a.w(Je(O(this.g())), "load", this.wd), this.c = a, jh(this));
  kh(this);
  this.g().a = this;
};
f.aa = function() {
  gh.l.aa.call(this);
  this.c && (this.c.M(), this.c = null);
  this.g().a = null;
};
function jh(a) {
  !a.m && a.c && a.g().form && (a.c.w(a.g().form, "submit", a.ld), a.m = !0);
}
f.v = function() {
  gh.l.v.call(this);
  this.c && (this.c.M(), this.c = null);
};
f.Dc = function() {
  this.yb = !0;
  cc(this.g(), "label-input-label");
  if (!ih() && !lh(this) && !this.B) {
    var a = this, b = function() {
      a.g() && (a.g().value = "");
    };
    G ? pg(b, 10) : b();
  }
};
f.ed = function() {
  ih() || (this.c.da(this.g(), "click", this.Dc), this.sa = null);
  this.yb = !1;
  kh(this);
};
f.kd = function(a) {
  27 == a.a && ("keydown" == a.type ? this.sa = this.g().value : "keypress" == a.type ? this.g().value = this.sa : "keyup" == a.type && (this.sa = null), a.b());
};
f.ld = function() {
  lh(this) || (this.g().value = "", pg(this.dd, 10, this));
};
f.dd = function() {
  lh(this) || (this.g().value = this.h);
};
f.wd = function() {
  kh(this);
};
function lh(a) {
  return !!a.g() && "" != a.g().value && a.g().value != a.h;
}
function mh(a) {
  a.g().value = "";
  null != a.sa && (a.sa = "");
}
f.reset = function() {
  lh(this) && (mh(this), kh(this));
};
function kh(a) {
  var b = a.g();
  ih() ? a.g().placeholder != a.h && (a.g().placeholder = a.h) : jh(a);
  uf(b, "label", a.h);
  lh(a) ? (b = a.g(), cc(b, "label-input-label")) : (a.B || a.yb || (b = a.g(), ac(b, "label-input-label")), ih() || pg(a.Nd, 10, a));
}
f.ja = function(a) {
  this.g().disabled = !a;
  var b = this.g();
  a ? cc(b, "label-input-label-disabled") : ac(b, "label-input-label-disabled");
};
f.isEnabled = function() {
  return !this.g().disabled;
};
f.Nd = function() {
  !this.g() || lh(this) || this.yb || (this.g().value = this.h);
};
function nh(a, b) {
  Q.call(this);
  this.c = new Cf(this);
  this.ec(a || null);
  b && (this.Ta = b);
}
x(nh, Q);
f = nh.prototype;
f.ba = null;
f.jc = null;
f.X = !1;
f.bc = -1;
f.Ta = "toggle_display";
f.g = function() {
  return this.ba;
};
f.ec = function(a) {
  if (this.X) {
    throw Error("Can not change this state of the popup while showing.");
  }
  this.ba = a;
};
f.va = function(a) {
  this.F && this.F.stop();
  this.B && this.B.stop();
  if (a) {
    if (!this.X && this.cc()) {
      if (!this.ba) {
        throw Error("Caller must call setElement before trying to show the popup");
      }
      this.ab();
      a = O(this.ba);
      this.c.w(a, "mousedown", this.Nc, !0);
      if (G) {
        try {
          var b = a.activeElement;
        } catch (d) {
        }
        for (; b && "IFRAME" == b.nodeName;) {
          try {
            var c = b.contentDocument || b.contentWindow.document;
          } catch (d) {
            break;
          }
          a = c;
          b = a.activeElement;
        }
        this.c.w(a, "mousedown", this.Nc, !0);
        this.c.w(a, "deactivate", this.Mc);
      } else {
        this.c.w(a, "blur", this.Mc);
      }
      "toggle_display" == this.Ta ? (this.ba.style.visibility = "visible", R(this.ba, !0)) : "move_offscreen" == this.Ta && this.ab();
      this.X = !0;
      this.bc = ma();
      this.F ? (kf(this.F, "end", this.ub, !1, this), this.F.play()) : this.ub();
    }
  } else {
    oh(this);
  }
};
f.ab = r;
function oh(a, b) {
  a.X && a.dispatchEvent({type:"beforehide", target:b}) && (a.c && Ff(a.c), a.X = !1, ma(), a.B ? (kf(a.B, "end", la(a.lc, b), !1, a), a.B.play()) : a.lc(b));
}
f.lc = function(a) {
  "toggle_display" == this.Ta ? this.xd() : "move_offscreen" == this.Ta && (this.ba.style.top = "-10000px");
  this.$a(a);
};
f.xd = function() {
  this.ba.style.visibility = "hidden";
  R(this.ba, !1);
};
f.cc = function() {
  return this.dispatchEvent("beforeshow");
};
f.ub = function() {
  this.dispatchEvent("show");
};
f.$a = function(a) {
  this.dispatchEvent({type:"hide", target:a});
};
f.Nc = function(a) {
  a = a.target;
  Re(this.ba, a) || ph(this, a) || 150 > ma() - this.bc || oh(this, a);
};
f.Mc = function(a) {
  var b = O(this.ba);
  if ("undefined" != typeof document.activeElement) {
    if (a = b.activeElement, !a || Re(this.ba, a) || "BODY" == a.tagName) {
      return;
    }
  } else {
    if (a.target != b) {
      return;
    }
  }
  150 > ma() - this.bc || oh(this);
};
function ph(a, b) {
  return Hb(a.jc || [], function(a) {
    return b === a || Re(a, b);
  });
}
f.v = function() {
  nh.l.v.call(this);
  this.c.M();
  A(this.F);
  A(this.B);
  delete this.ba;
  delete this.c;
  delete this.jc;
};
function qh() {
  this.c = "tablist";
}
x(qh, Ig);
aa(qh);
qh.prototype.b = function() {
  return "goog-tab-bar";
};
qh.prototype.a = function(a) {
  var b = qh.l.a.call(this, a);
  if (!this.j) {
    var c = this.b();
    this.j = La(rh, c + "-top", sh, c + "-bottom", th, c + "-start", uh, c + "-end");
  }
  b.push(this.j[a.c]);
  return b;
};
function vh() {
  S.call(this);
}
x(vh, S);
f = vh.prototype;
f.dc = null;
f.v = function() {
  nf(this.g());
  mf(this.dc);
  this.dc = null;
  vh.l.v.call(this);
};
f.I = function() {
  var a = this.a.A("DIV", "banner");
  Hf(a, "position", "absolute");
  Hf(a, "top", "0");
  Hf(a, "white-space", "pre");
  P(a, "click", w(this.Fb, this, !1));
  this.b = a;
  this.Gb();
  this.dc = P(Je(this.a.a) || window, "resize", this.Gb, !1, this);
};
f.Fb = function(a) {
  R(this.g(), a);
  this.Gb();
};
f.Gb = function() {
  if (!this.g().style.display) {
    var a = Je(this.a.a) || window, b = Ge(this.a.a).a, c = Uf(this.g());
    Mf(this.g(), Math.max(b + Ee(a || window).width / 2 - c.width / 2, 0), 0);
  }
};
function wh() {
  S.call(this);
}
x(wh, S);
wh.prototype.h = null;
wh.prototype.v = function() {
  delete this.h;
  wh.l.v.call(this);
};
wh.prototype.I = function() {
  this.b = this.a.A("DIV", "control-block");
  this.h && (C(this.h, this.c, this), this.h = null);
};
wh.prototype.c = function(a) {
  var b = this.g();
  b ? (b.childNodes.length && b.appendChild(this.a.a.createTextNode("\u00a0\u00a0|\u00a0\u00a0")), b.appendChild(a)) : (this.h || (this.h = []), this.h.push(a));
};
function xh(a) {
  S.call(this);
  this.R = a;
}
x(xh, S);
xh.prototype.v = function() {
  delete this.R;
  xh.l.v.call(this);
};
xh.prototype.I = function() {
  var a = this.a;
  this.b = a.A("FIELDSET", null, a.A("LEGEND", null, this.R), this.nc());
};
xh.prototype.nc = function() {
  return null;
};
function yh() {
  S.call(this);
}
x(yh, S);
yh.prototype.I = function() {
  this.b = this.a.A("DIV", "server-info");
  zh(this);
};
function zh(a, b, c, d) {
  var e = [];
  b && e.push(b);
  c && e.push("v" + c);
  d && e.push("r" + d);
  Se(a.g(), e.length ? e.join("\u00a0\u00a0|\u00a0\u00a0") : "Server info unavailable");
}
;function Ah(a, b, c) {
  this.b = a;
  this.c = b;
  this.j = c;
}
x(Ah, Na);
Ah.prototype.a = function(a, b, c) {
  Wg(this.b, this.c, a, b, void 0, c, this.j);
};
function Bh(a, b) {
  this.b = a instanceof F ? a : new F(a, b);
}
x(Bh, Na);
Bh.prototype.a = function(a, b, c) {
  Wg(Of(a), 0, a, b, this.b, c, null, void 0);
};
function Ch() {
}
x(Ch, Zg);
aa(Ch);
f = Ch.prototype;
f.ob = function() {
  return "button";
};
f.oa = function(a, b, c) {
  switch(b) {
    case 8:
    case 16:
      uf(a, "pressed", c);
      break;
    default:
    case 64:
    case 1:
      Ch.l.oa.call(this, a, b, c);
  }
};
f.Na = function(a) {
  var b = Ch.l.Na.call(this, a);
  this.Ea(b, a.Ka());
  var c = a.F;
  c && this.tc(b, c);
  a.T & 16 && this.oa(b, 16, !!(a.O & 16));
  return b;
};
f.tc = r;
f.Ka = function() {
  return (void 0).title;
};
f.Ea = function(a, b) {
  a && (b ? a.title = b : a.removeAttribute("title"));
};
f.Oa = function() {
  return "goog-button";
};
function V(a, b, c) {
  S.call(this, c);
  if (!b) {
    b = this.constructor;
    for (var d; b;) {
      d = ea(b);
      if (d = yc[d]) {
        break;
      }
      b = b.l ? b.l.constructor : null;
    }
    b = d ? v(d.Aa) ? d.Aa() : new d : null;
  }
  this.c = b;
  this.Ca = n(a) ? a : null;
}
x(V, S);
f = V.prototype;
f.Ca = null;
f.O = 0;
f.T = 39;
f.Jb = 255;
f.Fa = 0;
f.pc = null;
f.Wb = !0;
function Dh(a, b) {
  a.J && b != a.Wb && Eh(a, b);
  a.Wb = b;
}
f.I = function() {
  var a = this.c.Na(this);
  this.b = a;
  var b = this.c.ob();
  if (b) {
    var c = a.getAttribute("role") || null;
    b != c && tf(a, b);
  }
  this.c.xc(a, !1);
};
f.Ba = function() {
  return this.g();
};
f.S = function() {
  V.l.S.call(this);
  var a = this.c, b = this.b;
  this.isEnabled() || a.oa(b, 1, !this.isEnabled());
  this.T & 8 && a.oa(b, 8, !!(this.O & 8));
  this.T & 16 && a.oa(b, 16, !!(this.O & 16));
  this.T & 64 && a.oa(b, 64, !!(this.O & 64));
  this.c.vc(this);
  this.T & -2 && (this.Wb && Eh(this, !0), this.T & 32 && (a = this.g())) && (b = this.h || (this.h = new rg), sg(b, a), T(this).w(b, "key", this.Za).w(a, "focus", this.bd).w(a, "blur", this.zc));
};
function Eh(a, b) {
  var c = T(a), d = a.g();
  b ? (c.w(d, "mouseover", a.Ub).w(d, "mousedown", a.qb).w(d, "mouseup", a.wb).w(d, "mouseout", a.Xb), a.bb != r && c.w(d, "contextmenu", a.bb), G && (J(9) || c.w(d, "dblclick", a.Cc), a.B || (a.B = new Fh(a), lb(a, la(A, a.B))))) : (c.da(d, "mouseover", a.Ub).da(d, "mousedown", a.qb).da(d, "mouseup", a.wb).da(d, "mouseout", a.Xb), a.bb != r && c.da(d, "contextmenu", a.bb), G && (J(9) || c.da(d, "dblclick", a.Cc), A(a.B), a.B = null));
}
f.aa = function() {
  V.l.aa.call(this);
  this.h && yg(this.h);
  this.isEnabled() && this.c.pb(this, !1);
};
f.v = function() {
  V.l.v.call(this);
  this.h && (this.h.M(), delete this.h);
  delete this.c;
  this.B = this.pc = this.Ca = null;
};
function Gh(a) {
  a = a.Ca;
  if (!a) {
    return "";
  }
  if (!p(a)) {
    if (t(a)) {
      a = Gb(a, Ye).join("");
    } else {
      if (Tc && null !== a && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
      } else {
        var b = [];
        Ze(a, b, !0);
        a = b.join("");
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Tc || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""));
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
}
f.isEnabled = function() {
  return !(this.O & 1);
};
f.ja = function(a) {
  var b = this.o;
  b && "function" == typeof b.isEnabled && !b.isEnabled() || !Hh(this, 1, !a) || (a || (Ih(this, !1), Jh(this, !1)), this.c.pb(this, a), Kh(this, 1, !a, !0));
};
function Jh(a, b) {
  Hh(a, 2, b) && Kh(a, 2, b);
}
function Ih(a, b) {
  Hh(a, 4, b) && Kh(a, 4, b);
}
function Lh(a, b) {
  Hh(a, 8, b) && Kh(a, 8, b);
}
function Mh(a, b) {
  Hh(a, 64, b) && Kh(a, 64, b);
}
function Kh(a, b, c, d) {
  d || 1 != b ? a.T & b && c != !!(a.O & b) && (a.c.Sb(a, b, c), a.O = c ? a.O | b : a.O & ~b) : a.ja(!c);
}
function Nh(a, b, c) {
  if (a.J && a.O & b && !c) {
    throw Error("Component already rendered");
  }
  !c && a.O & b && Kh(a, b, !1);
  a.T = c ? a.T | b : a.T & ~b;
}
function W(a, b) {
  return !!(a.Jb & b) && !!(a.T & b);
}
function Hh(a, b, c) {
  return !!(a.T & b) && !!(a.O & b) != c && (!(a.Fa & b) || a.dispatchEvent(Ag(b, c))) && !a.pa;
}
f.Ub = function(a) {
  (!a.relatedTarget || !Re(this.g(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && W(this, 2) && Jh(this, !0);
};
f.Xb = function(a) {
  a.relatedTarget && Re(this.g(), a.relatedTarget) || !this.dispatchEvent("leave") || (W(this, 4) && Ih(this, !1), W(this, 2) && Jh(this, !1));
};
f.bb = r;
f.qb = function(a) {
  this.isEnabled() && (W(this, 2) && Jh(this, !0), ne(a) && (W(this, 4) && Ih(this, !0), this.c && this.c.wc(this) && this.g().focus()));
  ne(a) && a.b();
};
f.wb = function(a) {
  this.isEnabled() && (W(this, 2) && Jh(this, !0), this.O & 4 && this.cb(a) && W(this, 4) && Ih(this, !1));
};
f.Cc = function(a) {
  this.isEnabled() && this.cb(a);
};
f.cb = function(a) {
  if (W(this, 16)) {
    var b = !(this.O & 16);
    Hh(this, 16, b) && Kh(this, 16, b);
  }
  W(this, 8) && Lh(this, !0);
  W(this, 64) && Mh(this, !(this.O & 64));
  b = new D("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.m = a.m);
  return this.dispatchEvent(b);
};
f.bd = function() {
  W(this, 32) && Hh(this, 32, !0) && Kh(this, 32, !0);
};
f.zc = function() {
  W(this, 4) && Ih(this, !1);
  W(this, 32) && Hh(this, 32, !1) && Kh(this, 32, !1);
};
f.Za = function(a) {
  return this.isEnabled() && this.Tb(a) ? (a.b(), a.h(), !0) : !1;
};
f.Tb = function(a) {
  return 13 == a.a && this.cb(a);
};
if (!v(V)) {
  throw Error("Invalid component class " + V);
}
if (!v(Zg)) {
  throw Error("Invalid renderer class " + Zg);
}
var Oh = ea(V);
yc[Oh] = Zg;
xc("goog-control", function() {
  return new V(null);
});
function Fh(a) {
  z.call(this);
  this.b = a;
  this.a = !1;
  this.c = new Cf(this);
  lb(this, la(A, this.c));
  a = this.b.b;
  this.c.w(a, "mousedown", this.o).w(a, "mouseup", this.h).w(a, "click", this.j);
}
x(Fh, z);
var Ph = !G || Ic(9);
Fh.prototype.o = function() {
  this.a = !1;
};
Fh.prototype.h = function() {
  this.a = !0;
};
function Qh(a, b) {
  if (!Ph) {
    return a.button = 0, a.type = b, a;
  }
  var c = document.createEvent("MouseEvents");
  c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
  return c;
}
Fh.prototype.j = function(a) {
  if (this.a) {
    this.a = !1;
  } else {
    var b = a.c, c = b.button, d = b.type, e = Qh(b, "mousedown");
    this.b.qb(new M(e, a.j));
    e = Qh(b, "mouseup");
    this.b.wb(new M(e, a.j));
    Ph || (b.button = c, b.type = d);
  }
};
Fh.prototype.v = function() {
  this.b = null;
  Fh.l.v.call(this);
};
function Rh(a, b) {
  S.call(this, b);
  this.hc = !!a;
  this.B = null;
  this.qa = sb({zd:this.Hb}, this);
}
x(Rh, S);
f = Rh.prototype;
f.Ob = null;
f.ua = !1;
f.$ = null;
f.U = null;
f.ga = null;
f.Lb = !1;
f.rb = function() {
  return "goog-modalpopup";
};
f.lb = function() {
  return this.$;
};
f.I = function() {
  Rh.l.I.call(this);
  var a = this.g(), b = Ta(this.rb()).split(" ");
  bc(a, b);
  Ve(a, !0);
  R(a, !1);
  this.hc && !this.U && (this.U = this.a.A("IFRAME", {frameborder:0, style:"border:0;vertical-align:bottom;", src:Af}), this.U.className = this.rb() + "-bg", R(this.U, !1), Xf(this.U, 0));
  this.$ || (this.$ = this.a.A("DIV", this.rb() + "-bg"), R(this.$, !1));
  this.ga || (this.ga = this.a.a.createElement("SPAN"), R(this.ga, !1), Ve(this.ga, !0), this.ga.style.position = "absolute");
};
f.Qc = function() {
  this.Lb = !1;
};
f.S = function() {
  if (this.U) {
    var a = this.g();
    a.parentNode && a.parentNode.insertBefore(this.U, a);
  }
  a = this.g();
  a.parentNode && a.parentNode.insertBefore(this.$, a);
  Rh.l.S.call(this);
  a = this.g();
  a.parentNode && a.parentNode.insertBefore(this.ga, a.nextSibling);
  this.Ob = new qg(this.a.a);
  T(this).w(this.Ob, "focusin", this.Fd);
  Sh(this, !1);
};
f.aa = function() {
  this.ua && this.V(!1);
  A(this.Ob);
  Rh.l.aa.call(this);
  Qe(this.U);
  Qe(this.$);
  Qe(this.ga);
};
f.V = function(a) {
  if (a != this.ua) {
    if (this.F && this.F.stop(), this.R && this.R.stop(), this.C && this.C.stop(), this.H && this.H.stop(), this.J && Sh(this, a), a) {
      if (this.dispatchEvent("beforeshow")) {
        try {
          this.B = this.a.a.activeElement;
        } catch (e) {
        }
        this.Hb();
        Th(this);
        T(this).w(Ie(this.a.a), "resize", this.Hb).w(Ie(this.a.a), "orientationchange", this.qa);
        Uh(this, !0);
        this.qc();
        this.ua = !0;
        this.F && this.R ? (kf(this.F, "end", this.tb, !1, this), this.R.play(), this.F.play()) : this.tb();
      }
    } else {
      if (this.dispatchEvent("beforehide")) {
        T(this).da(Ie(this.a.a), "resize", this.Hb).da(Ie(this.a.a), "orientationchange", this.qa);
        this.ua = !1;
        this.C && this.H ? (kf(this.C, "end", this.sb, !1, this), this.H.play(), this.C.play()) : this.sb();
        a: {
          try {
            var b = this.a, c = b.a.body, d = b.a.activeElement || c;
            if (!this.B || this.B == c) {
              this.B = null;
              break a;
            }
            (d == c || b.rc(this.g(), d)) && this.B.focus();
          } catch (e) {
          }
          this.B = null;
        }
      }
    }
  }
};
function Sh(a, b) {
  a.Y || (a.Y = new Mg(a.b, a.a));
  a = a.Y;
  if (b) {
    a.a || (a.a = []);
    b = $e(a.b.a.body);
    for (var c = 0; c < b.length; c++) {
      var d = b[c], e;
      if (e = d != a.c) {
        e = d.getAttribute("aria-hidden"), e = !(null == e || void 0 == e ? 0 : String(e));
      }
      e && (uf(d, "hidden", !0), a.a.push(d));
    }
  } else {
    if (a.a) {
      for (c = 0; c < a.a.length; c++) {
        a.a[c].removeAttribute("aria-hidden");
      }
      a.a = null;
    }
  }
}
function Uh(a, b) {
  a.U && R(a.U, b);
  a.$ && R(a.$, b);
  R(a.g(), b);
  R(a.ga, b);
}
f.tb = function() {
  this.dispatchEvent("show");
};
f.sb = function() {
  Uh(this, !1);
  this.dispatchEvent("hide");
};
f.Hb = function() {
  this.U && R(this.U, !1);
  this.$ && R(this.$, !1);
  var a = this.a.a, b = Ee(Je(a) || window || window), c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth));
  a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
  this.U && (R(this.U, !0), Tf(this.U, c, a));
  this.$ && (R(this.$, !0), Tf(this.$, c, a));
};
function Th(a) {
  var b = Je(a.a.a) || window;
  if ("fixed" == Lf(a.g(), "position")) {
    var c = 0, d = 0;
  } else {
    d = Ge(a.a.a), c = d.a, d = d.b;
  }
  var e = Uf(a.g());
  b = Ee(b || window);
  c = Math.max(c + b.width / 2 - e.width / 2, 0);
  d = Math.max(d + b.height / 2 - e.height / 2, 0);
  Mf(a.g(), c, d);
  Mf(a.ga, c, d);
}
f.Fd = function(a) {
  this.Lb ? this.Qc() : a.target == this.ga && pg(this.qc, 0, this);
};
f.qc = function() {
  try {
    G && this.a.a.body.focus(), this.g().focus();
  } catch (a) {
  }
};
f.v = function() {
  A(this.F);
  this.F = null;
  A(this.C);
  this.C = null;
  A(this.R);
  this.R = null;
  A(this.H);
  this.H = null;
  Rh.l.v.call(this);
};
function Vh(a, b) {
  this.qa = b || void 0;
  nh.call(this, a);
}
x(Vh, nh);
Vh.prototype.ab = function() {
  if (this.qa) {
    var a = !this.X && "move_offscreen" != this.Ta, b = this.g();
    a && (b.style.visibility = "hidden", R(b, !0));
    this.qa.a(b, 8, this.hb);
    a && R(b, !1);
  }
};
function Wh() {
}
x(Wh, Zg);
aa(Wh);
f = Wh.prototype;
f.Oa = function() {
  return "goog-tab";
};
f.ob = function() {
  return "tab";
};
f.Na = function(a) {
  var b = Wh.l.Na.call(this, a);
  (a = a.Ka()) && this.Ea(b, a);
  return b;
};
f.Ka = function() {
  return (void 0).title || "";
};
f.Ea = function(a, b) {
  a && (a.title = b || "");
};
function Xh(a, b, c) {
  S.call(this, c);
  this.nb = b || Ig.Aa();
  this.xa = a || Yh;
}
x(Xh, S);
var Lg = "horizontal", Yh = "vertical";
f = Xh.prototype;
f.ac = null;
f.Xa = null;
f.nb = null;
f.xa = null;
f.Ya = !0;
f.Ma = !0;
f.G = -1;
f.P = null;
f.Qa = !1;
f.la = null;
function Zh(a) {
  return a.ac || a.g();
}
f.I = function() {
  this.b = this.a.A("DIV", this.nb.a(this).join(" "));
};
f.Ba = function() {
  return this.g();
};
f.S = function() {
  Xh.l.S.call(this);
  Eg(this, function(a) {
    a.J && $h(this, a);
  }, this);
  var a = this.g();
  Kg(this.nb, this);
  ai(this, this.Ya);
  T(this).w(this, "enter", this.jd).w(this, "highlight", this.md).w(this, "unhighlight", this.vd).w(this, "open", this.qd).w(this, "close", this.gd).w(a, "mousedown", this.ad).w(O(a), "mouseup", this.hd).w(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.fd);
  bi(this);
};
function bi(a) {
  var b = T(a), c = Zh(a);
  b.w(c, "focus", a.uc).w(c, "blur", a.Zc).w(a.Xa || (a.Xa = new rg(Zh(a))), "key", a.$c);
}
f.aa = function() {
  ci(this, -1);
  this.P && Mh(this.P, !1);
  this.Qa = !1;
  Xh.l.aa.call(this);
};
f.v = function() {
  Xh.l.v.call(this);
  this.Xa && (this.Xa.M(), this.Xa = null);
  this.nb = this.P = this.la = this.ac = null;
};
f.jd = function() {
  return !0;
};
f.md = function(a) {
  var b = Hg(this, a.target);
  if (-1 < b && b != this.G) {
    var c = U(this, this.G);
    c && Jh(c, !1);
    this.G = b;
    c = U(this, this.G);
    this.Qa && Ih(c, !0);
    this.P && c != this.P && (c.T & 64 ? Mh(c, !0) : Mh(this.P, !1));
  }
  b = this.g();
  null != a.target.g() && uf(b, "activedescendant", a.target.g().id);
};
f.vd = function(a) {
  a.target == U(this, this.G) && (this.G = -1);
  this.g().removeAttribute("aria-activedescendant");
};
f.qd = function(a) {
  (a = a.target) && a != this.P && a.o == this && (this.P && Mh(this.P, !1), this.P = a);
};
f.gd = function(a) {
  a.target == this.P && (this.P = null);
  var b = this.g(), c = a.target.g();
  b && a.target.O & 2 && c && (a = "", c && (a = c.id), uf(b, "activedescendant", a));
};
f.ad = function(a) {
  this.Ma && (this.Qa = !0);
  var b = Zh(this);
  b && We(b) && Xe(b) ? b.focus() : a.b();
};
f.hd = function() {
  this.Qa = !1;
};
f.fd = function(a) {
  a: {
    var b = a.target;
    if (this.la) {
      for (var c = this.g(); b && b !== c;) {
        var d = b.id;
        if (d in this.la) {
          b = this.la[d];
          break a;
        }
        b = b.parentNode;
      }
    }
    b = null;
  }
  if (b) {
    switch(a.type) {
      case "mousedown":
        b.qb(a);
        break;
      case "mouseup":
        b.wb(a);
        break;
      case "mouseover":
        b.Ub(a);
        break;
      case "mouseout":
        b.Xb(a);
        break;
      case "contextmenu":
        b.bb(a);
    }
  }
};
f.uc = function() {
};
f.Zc = function() {
  ci(this, -1);
  this.Qa = !1;
  this.P && Mh(this.P, !1);
};
f.$c = function(a) {
  return this.isEnabled() && this.Ya && (0 != Fg(this) || this.ac) && di(this, a) ? (a.b(), a.h(), !0) : !1;
};
function di(a, b) {
  var c = U(a, a.G);
  if (c && "function" == typeof c.Za && c.Za(b) || a.P && a.P != c && "function" == typeof a.P.Za && a.P.Za(b)) {
    return !0;
  }
  if (b.shiftKey || b.ctrlKey || b.metaKey || b.altKey) {
    return !1;
  }
  switch(b.a) {
    case 27:
      Zh(a).blur();
      break;
    case 36:
      ei(a);
      break;
    case 35:
      fi(a);
      break;
    case 38:
      if (a.xa == Yh) {
        gi(a);
      } else {
        return !1;
      }
      break;
    case 37:
      if (a.xa == Lg) {
        Gg(a) ? hi(a) : gi(a);
      } else {
        return !1;
      }
      break;
    case 40:
      if (a.xa == Yh) {
        hi(a);
      } else {
        return !1;
      }
      break;
    case 39:
      if (a.xa == Lg) {
        Gg(a) ? gi(a) : hi(a);
      } else {
        return !1;
      }
      break;
    default:
      return !1;
  }
  return !0;
}
function $h(a, b) {
  var c = b.g();
  c = c.id || (c.id = b.N());
  a.la || (a.la = {});
  a.la[c] = b;
}
f.ea = function(a, b) {
  Xh.l.ea.call(this, a, b);
};
f.ib = function(a, b, c) {
  a.Fa |= 2;
  a.Fa |= 64;
  Nh(a, 32, !1);
  Dh(a, !1);
  var d = a.o == this ? Hg(this, a) : -1;
  Xh.l.ib.call(this, a, b, c);
  a.J && this.J && $h(this, a);
  a = d;
  -1 == a && (a = Fg(this));
  a == this.G ? this.G = Math.min(Fg(this) - 1, b) : a > this.G && b <= this.G ? this.G++ : a < this.G && b > this.G && this.G--;
};
f.removeChild = function(a, b) {
  if (a = p(a) ? Cg(this, a) : a) {
    var c = Hg(this, a);
    -1 != c && (c == this.G ? (Jh(a, !1), this.G = -1) : c < this.G && this.G--);
    var d = a.g();
    d && d.id && this.la && (c = this.la, d = d.id, d in c && delete c[d]);
  }
  a = Xh.l.removeChild.call(this, a, b);
  Dh(a, !0);
  return a;
};
function ai(a, b) {
  a.Ya = b;
  var c = a.g();
  c && (R(c, b), Jg(Zh(a), a.Ma && a.Ya));
}
f.isEnabled = function() {
  return this.Ma;
};
f.ja = function(a) {
  this.Ma != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Ma = !0, Eg(this, function(a) {
    a.Vc ? delete a.Vc : a.ja(!0);
  })) : (Eg(this, function(a) {
    a.isEnabled() ? a.ja(!1) : a.Vc = !0;
  }), this.Qa = this.Ma = !1), Jg(Zh(this), a && this.Ya));
};
function ci(a, b) {
  (b = U(a, b)) ? Jh(b, !0) : -1 < a.G && Jh(U(a, a.G), !1);
}
function ei(a) {
  ii(a, function(a, c) {
    return (a + 1) % c;
  }, Fg(a) - 1);
}
function fi(a) {
  ii(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a;
  }, 0);
}
function hi(a) {
  ii(a, function(a, c) {
    return (a + 1) % c;
  }, a.G);
}
function gi(a) {
  ii(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a;
  }, a.G);
}
function ii(a, b, c) {
  c = 0 > c ? Hg(a, a.P) : c;
  var d = Fg(a);
  c = b.call(a, c, d);
  for (var e = 0; e <= d;) {
    var g = U(a, c);
    if (g && g.isEnabled() && g.T & 2) {
      a.fc(c);
      break;
    }
    e++;
    c = b.call(a, c, d);
  }
}
f.fc = function(a) {
  ci(this, a);
};
function X(a, b, c) {
  Rh.call(this, b, c);
  this.m = a || "modal-dialog";
  this.c = Z(Z(new ji, ki, !0), li, !1, !0);
}
x(X, Rh);
f = X.prototype;
f.Lc = !0;
f.Kb = 0.50;
f.Uc = "";
f.Vb = null;
f.ra = null;
f.Sa = null;
f.Ga = null;
f.Tc = null;
f.na = null;
f.Ua = null;
f.ha = null;
f.rb = function() {
  return this.m;
};
function mi(a, b) {
  a.Uc = b;
  a.Ga && Se(a.Ga, b);
}
function ni(a, b) {
  a.Vb = b;
  a.Ua && le(a.Ua, b);
}
f.Ba = function() {
  this.g() || Dg(this, void 0);
  return this.Ua;
};
f.lb = function() {
  this.g() || Dg(this, void 0);
  return X.l.lb.call(this);
};
function oi(a, b) {
  var c = Ta(a.m + "-title-draggable").split(" ");
  a.g() && (b ? bc(a.Sa, c) : dc(a.Sa, c));
  b && !a.ra ? (a.ra = new Pg(a.g(), a.Sa), bc(a.Sa, c), P(a.ra, "start", a.Od, !1, a)) : !b && a.ra && (a.ra.M(), a.ra = null);
}
f.I = function() {
  X.l.I.call(this);
  var a = this.g(), b = this.a;
  this.Sa = b.A("DIV", this.m + "-title", this.Ga = b.A("SPAN", {className:this.m + "-title-text", id:this.N()}, this.Uc), this.na = b.A("SPAN", this.m + "-title-close"));
  Oe(a, this.Sa, this.Ua = b.A("DIV", this.m + "-content"), this.ha = b.A("DIV", this.m + "-buttons"));
  tf(this.Ga, "heading");
  tf(this.na, "button");
  Ve(this.na, !0);
  uf(this.na, "label", pi);
  this.Tc = this.Ga.id;
  tf(a, "dialog");
  uf(a, "labelledby", this.Tc || "");
  this.Vb && le(this.Ua, this.Vb);
  R(this.na, !0);
  this.c && (a = this.c, a.ta = this.ha, qi(a));
  R(this.ha, !!this.c);
  this.Kb = this.Kb;
  this.g() && (a = this.lb()) && Xf(a, this.Kb);
};
f.S = function() {
  X.l.S.call(this);
  T(this).w(this.g(), "keydown", this.Oc).w(this.g(), "keypress", this.Oc);
  T(this).w(this.ha, "click", this.Bd);
  oi(this, !0);
  T(this).w(this.na, "click", this.Jd);
  var a = this.g();
  tf(a, "dialog");
  "" !== this.Ga.id && uf(a, "labelledby", this.Ga.id);
  if (!this.Lc) {
    this.Lc = !1;
    if (this.J) {
      a = this.a;
      var b = this.lb();
      a.sc(this.U);
      a.sc(b);
    }
    this.ua && Sh(this, !1);
  }
};
f.aa = function() {
  this.ua && this.V(!1);
  oi(this, !1);
  X.l.aa.call(this);
};
f.V = function(a) {
  a != this.ua && (this.J || Dg(this, void 0), X.l.V.call(this, a));
};
f.tb = function() {
  X.l.tb.call(this);
  this.dispatchEvent(ri);
};
f.sb = function() {
  X.l.sb.call(this);
  this.dispatchEvent(si);
};
f.Od = function() {
  var a = this.a.a, b = Ee(Je(a) || window || window), c = Math.max(a.body.scrollWidth, b.width);
  a = Math.max(a.body.scrollHeight, b.height);
  var d = Uf(this.g());
  "fixed" == Lf(this.g(), "position") ? this.ra.j = new se(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)) : this.ra.j = new se(0, 0, c - d.width, a - d.height);
};
f.Jd = function() {
  ti(this);
};
function ti(a) {
  var b = a.c, c = b && b.Mb;
  c ? (b = b.get(c), a.dispatchEvent(new ui(c, b)) && a.V(!1)) : a.V(!1);
}
f.v = function() {
  this.ha = this.na = null;
  X.l.v.call(this);
};
f.Bd = function(a) {
  a: {
    for (a = a.target; null != a && a != this.ha;) {
      if ("BUTTON" == a.tagName) {
        break a;
      }
      a = a.parentNode;
    }
    a = null;
  }
  if (a && !a.disabled) {
    a = a.name;
    var b = this.c.get(a);
    this.dispatchEvent(new ui(a, b)) && this.V(!1);
  }
};
f.Oc = function(a) {
  var b = !1, c = !1, d = this.c, e = a.target;
  if ("keydown" == a.type) {
    if (27 == a.a) {
      var g = d && d.Mb;
      e = "SELECT" == e.tagName && !e.disabled;
      g && !e ? (c = !0, b = d.get(g), b = this.dispatchEvent(new ui(g, b))) : e || (b = !0);
    } else {
      if (9 == a.a && a.shiftKey && e == this.g()) {
        this.Lb = !0;
        try {
          this.ga.focus();
        } catch (u) {
        }
        pg(this.Qc, 0, this);
      }
    }
  } else {
    if (13 == a.a) {
      if ("BUTTON" == e.tagName && !e.disabled) {
        g = e.name;
      } else {
        if (e == this.na) {
          ti(this);
        } else {
          if (d) {
            var h = d.Nb, k;
            if (k = h) {
              a: {
                k = (d.ta || document).getElementsByTagName("BUTTON");
                for (var m = 0, q; q = k[m]; m++) {
                  if (q.name == h || q.id == h) {
                    k = q;
                    break a;
                  }
                }
                k = null;
              }
            }
            e = ("TEXTAREA" == e.tagName || "SELECT" == e.tagName || "A" == e.tagName) && !e.disabled;
            !k || k.disabled || e || (g = h);
          }
        }
      }
      g && d && (c = !0, b = this.dispatchEvent(new ui(g, String(d.get(g)))));
    } else {
      e == this.na && 32 == a.a && ti(this);
    }
  }
  if (b || c) {
    a.h(), a.b();
  }
  b && this.V(!1);
};
function ui(a, b) {
  this.type = vi;
  this.key = a;
  this.caption = b;
}
x(ui, D);
var vi = "dialogselect", si = "afterhide", ri = "aftershow";
function ji(a) {
  a || N();
  hd.call(this);
}
x(ji, hd);
f = ji.prototype;
f.Nb = null;
f.ta = null;
f.Mb = null;
f.set = function(a, b, c, d) {
  hd.prototype.set.call(this, a, b);
  c && (this.Nb = a);
  d && (this.Mb = a);
  return this;
};
function Z(a, b, c, d) {
  return a.set(b.key, b.caption, c, d);
}
function qi(a) {
  if (a.ta) {
    le(a.ta, fd);
    var b = N(a.ta);
    a.forEach(function(a, d) {
      a = b.A("BUTTON", {name:d}, a);
      d == this.Nb && (a.className = "goog-buttonset-default");
      this.ta.appendChild(a);
    }, a);
  }
}
f.g = function() {
  return this.ta;
};
var pi = "Close", ki = {key:"ok", caption:"OK"}, li = {key:"cancel", caption:"Cancel"}, wi = {key:"yes", caption:"Yes"}, xi = {key:"no", caption:"No"}, yi = {key:"save", caption:"Save"}, zi = {key:"continue", caption:"Continue"};
"undefined" != typeof document && (Z(new ji, ki, !0, !0), Z(Z(new ji, ki, !0), li, !1, !0), Z(Z(new ji, wi, !0), xi, !1, !0), Z(Z(Z(new ji, wi), xi, !0), li, !1, !0), Z(Z(Z(new ji, zi), yi), li, !0, !0));
function Ai() {
}
x(Ai, Ch);
aa(Ai);
f = Ai.prototype;
f.ob = function() {
};
f.Na = function(a) {
  Dh(a, !1);
  a.Jb &= -256;
  Nh(a, 32, !1);
  return a.a.A("BUTTON", {"class":bh(this, a).join(" "), disabled:!a.isEnabled(), title:a.Ka() || "", value:a.F || ""}, Gh(a) || "");
};
f.vc = function(a) {
  T(a).w(a.g(), "click", a.cb);
};
f.xc = r;
f.yc = r;
f.wc = function(a) {
  return a.isEnabled();
};
f.pb = r;
f.Sb = function(a, b, c) {
  Ai.l.Sb.call(this, a, b, c);
  (a = a.g()) && 1 == b && (a.disabled = c);
};
f.tc = function(a, b) {
  a && (a.value = b);
};
f.oa = r;
function Bi(a, b, c) {
  V.call(this, a, b || Wh.Aa(), c);
  Nh(this, 8, !0);
  this.Fa |= 9;
}
x(Bi, V);
Bi.prototype.Ka = function() {
  return this.m;
};
Bi.prototype.Ea = function(a) {
  this.c.Ea(this.g(), a);
  this.m = a;
};
xc("goog-tab", function() {
  return new Bi(null);
});
function Ci(a, b, c) {
  this.b = c || (a ? N(p(a) ? document.getElementById(a) : a) : N());
  Vh.call(this, this.b.A("DIV", {style:"position:absolute;display:none;"}));
  this.o = new F(1, 1);
  this.D = new ve;
  this.h = null;
  a && Di(this, a);
  null != b && Se(this.g(), b);
}
x(Ci, Vh);
var Ei = [];
f = Ci.prototype;
f.L = null;
f.cd = "goog-tooltip";
f.Gc = 0;
function Di(a, b) {
  b = p(b) ? document.getElementById(b) : b;
  a.D.add(b);
  P(b, "mouseover", a.Bc, !1, a);
  P(b, "mouseout", a.vb, !1, a);
  P(b, "mousemove", a.Pa, !1, a);
  P(b, "focus", a.Ac, !1, a);
  P(b, "blur", a.vb, !1, a);
}
f.Qb = function() {
  return this.Gc;
};
f.ec = function(a) {
  var b = this.g();
  b && Qe(b);
  Ci.l.ec.call(this, a);
  a ? (b = this.b.a.body, b.insertBefore(a, b.lastChild), A(this.h), this.h = new qg(this.g()), lb(this, la(A, this.h)), P(this.h, "focusin", this.Ja, void 0, this), P(this.h, "focusout", this.eb, void 0, this)) : (A(this.h), this.h = null);
};
function Fi(a) {
  return a.j ? a.X ? 4 : 1 : a.K ? 3 : a.X ? 2 : 0;
}
f.Ab = function(a) {
  if (!this.X) {
    return !1;
  }
  var b = Sf(this.g()), c = Uf(this.g());
  return b.a <= a.a && a.a <= b.a + c.width && b.b <= a.b && a.b <= b.b + c.height;
};
f.cc = function() {
  if (!nh.prototype.cc.call(this)) {
    return !1;
  }
  if (this.a) {
    for (var a, b = 0; a = Ei[b]; b++) {
      Re(a.g(), this.a) || a.va(!1);
    }
  }
  Jb(Ei, this) || Ei.push(this);
  a = this.g();
  a.className = this.cd;
  this.Ja();
  P(a, "mouseover", this.Yb, !1, this);
  P(a, "mouseout", this.Ec, !1, this);
  Gi(this);
  return !0;
};
f.$a = function() {
  Kb(Ei, this);
  for (var a = this.g(), b, c = 0; b = Ei[c]; c++) {
    b.a && Re(a, b.a) && b.va(!1);
  }
  this.Ia && this.Ia.eb();
  lf(a, "mouseover", this.Yb, !1, this);
  lf(a, "mouseout", this.Ec, !1, this);
  this.a = void 0;
  0 == Fi(this) && (this.ka = !1);
  nh.prototype.$a.call(this);
};
f.Kc = function(a, b) {
  this.a == a && jd(this.D.a, we(this.a)) && (this.ka || !this.hc ? (this.va(!1), this.X || (this.a = a, this.qa = b || new Hi(vc(this.o)), this.X && this.ab(), this.va(!0))) : this.a = void 0);
  this.j = void 0;
};
f.Jc = function(a) {
  this.K = void 0;
  if (a == this.a) {
    a = this.b;
    a: {
      var b = a.a;
      try {
        var c = b && b.activeElement;
        break a;
      } catch (d) {
      }
      c = null;
    }
    c = c && this.g() && a.rc(this.g(), c);
    null != this.L && (this.L == this.g() || jd(this.D.a, we(this.L))) || c || this.m && this.m.L || this.va(!1);
  }
};
function Ii(a, b) {
  var c = Ge(a.b.a);
  a.o.a = b.clientX + c.a;
  a.o.b = b.clientY + c.b;
}
f.Bc = function(a) {
  var b = Ji(this, a.target);
  this.L = b;
  this.Ja();
  b != this.a && (this.a = b, this.j || (this.j = pg(w(this.Kc, this, b, void 0), 500)), Ki(this), Ii(this, a));
};
function Ji(a, b) {
  try {
    for (; b && !jd(a.D.a, we(b));) {
      b = b.parentNode;
    }
    return b;
  } catch (c) {
    return null;
  }
}
f.Pa = function(a) {
  Ii(this, a);
  this.ka = !0;
};
f.Ac = function(a) {
  this.L = a = Ji(this, a.target);
  this.ka = !0;
  if (this.a != a) {
    this.a = a;
    var b = new Li(this.L);
    this.Ja();
    this.j || (this.j = pg(w(this.Kc, this, a, b), 500));
    Ki(this);
  }
};
function Ki(a) {
  if (a.a) {
    for (var b, c = 0; b = Ei[c]; c++) {
      Re(b.g(), a.a) && (b.m = a, a.Ia = b);
    }
  }
}
f.vb = function(a) {
  var b = Ji(this, a.target), c = Ji(this, a.relatedTarget);
  b != c && (b == this.L && (this.L = null), Gi(this), this.ka = !1, !this.X || a.relatedTarget && Re(this.g(), a.relatedTarget) ? this.a = void 0 : this.eb());
};
f.Yb = function() {
  var a = this.g();
  this.L != a && (this.Ja(), this.L = a);
};
f.Ec = function(a) {
  var b = this.g();
  this.L != b || a.relatedTarget && Re(b, a.relatedTarget) || (this.L = null, this.eb());
};
function Gi(a) {
  a.j && (l.clearTimeout(a.j), a.j = void 0);
}
f.eb = function() {
  2 == Fi(this) && (this.K = pg(w(this.Jc, this, this.a), this.Qb()));
};
f.Ja = function() {
  this.K && (l.clearTimeout(this.K), this.K = void 0);
};
f.v = function() {
  var a;
  this.va(!1);
  Gi(this);
  for (var b = this.D.ia(), c = 0; a = b[c]; c++) {
    lf(a, "mouseover", this.Bc, !1, this), lf(a, "mouseout", this.vb, !1, this), lf(a, "mousemove", this.Pa, !1, this), lf(a, "focus", this.Ac, !1, this), lf(a, "blur", this.vb, !1, this);
  }
  b = this.D.a;
  b.b = {};
  b.a.length = 0;
  b.c = 0;
  this.g() && Qe(this.g());
  this.L = null;
  delete this.b;
  Ci.l.v.call(this);
};
function Hi(a, b) {
  Bh.call(this, a, b);
}
x(Hi, Bh);
Hi.prototype.a = function(a, b, c) {
  b = Of(a);
  b = Rf(b);
  c = c ? new K(c.top + 10, c.right, c.bottom, c.left + 10) : new K(10, 0, 0, 10);
  Yg(this.b, a, 8, c, b, 9) & 496 && Yg(this.b, a, 8, c, b, 5);
};
function Li(a) {
  Ah.call(this, a, 5);
}
x(Li, Ah);
Li.prototype.a = function(a, b, c) {
  var d = new F(10, 0);
  Wg(this.b, this.c, a, b, d, c, 9) & 496 && Wg(this.b, 4, a, 1, d, c, 5);
};
function Mi(a, b, c) {
  Ci.call(this, a, b, c);
}
x(Mi, Ci);
f = Mi.prototype;
f.oc = !1;
f.fb = !1;
f.ub = function() {
  Mi.l.ub.call(this);
  this.H = ue(Wf(this.g()));
  this.a && (this.ya = ue(Wf(this.a)));
  this.fb = this.oc;
  P(this.b.a, "mousemove", this.Pa, !1, this);
};
f.$a = function() {
  lf(this.b.a, "mousemove", this.Pa, !1, this);
  this.ya = this.H = null;
  this.fb = !1;
  Mi.l.$a.call(this);
};
f.Ab = function(a) {
  if (this.C) {
    var b = Sf(this.g()), c = Uf(this.g());
    return b.a - this.C.left <= a.a && a.a <= b.a + c.width + this.C.right && b.b - this.C.top <= a.b && a.b <= b.b + c.height + this.C.bottom;
  }
  return Mi.l.Ab.call(this, a);
};
function Ni(a, b) {
  var c;
  if (c = a.ya) {
    c = (c = a.ya) && b ? b instanceof K ? b.left >= c.left && b.right <= c.right && b.top >= c.top && b.bottom <= c.bottom : b.a >= c.left && b.a <= c.right && b.b >= c.top && b.b <= c.bottom : !1;
  }
  if (c || a.Ab(b)) {
    return !0;
  }
  a = a.m;
  return !!a && a.Ab(b);
}
f.Jc = function(a) {
  this.K = void 0;
  a != this.a || Ni(this, this.o) || this.L || this.m && this.m.L || H && 0 == this.o.a && 0 == this.o.b || this.va(!1);
};
f.Pa = function(a) {
  var b = this.X;
  if (this.H) {
    var c = Ge(this.b.a);
    c = new F(a.clientX + c.a, a.clientY + c.b);
    Ni(this, c) ? b = !1 : this.fb && (b = gd(this.H, c) >= gd(this.H, this.o));
  }
  if (b) {
    if (this.eb(), this.L = null, b = this.m) {
      b.L = null;
    }
  } else {
    3 == Fi(this) && this.Ja();
  }
  Mi.l.Pa.call(this, a);
};
f.Yb = function() {
  this.L != this.g() && (this.fb = !1, this.L = this.g());
};
f.Qb = function() {
  return this.fb ? 100 : Mi.l.Qb.call(this);
};
function Oi(a, b, c) {
  V.call(this, a, b || Ai.Aa(), c);
}
x(Oi, V);
f = Oi.prototype;
f.Ka = function() {
  return this.C;
};
f.Ea = function(a) {
  this.C = a;
  this.c.Ea(this.g(), a);
};
f.v = function() {
  Oi.l.v.call(this);
  delete this.F;
  delete this.C;
};
f.S = function() {
  Oi.l.S.call(this);
  if (this.T & 32) {
    var a = this.g();
    a && T(this).w(a, "keyup", this.Tb);
  }
};
f.Tb = function(a) {
  return 13 == a.a && "key" == a.type || 32 == a.a && "keyup" == a.type ? this.cb(a) : 32 == a.a;
};
xc("goog-button", function() {
  return new Oi(null);
});
function Pi(a, b, c) {
  a = a || rh;
  if (this.g()) {
    throw Error("Component already rendered");
  }
  this.xa = a == th || a == uh ? Yh : Lg;
  this.c = a;
  Xh.call(this, this.xa, b || qh.Aa(), c);
  Qi(this);
}
x(Pi, Xh);
var rh = "top", sh = "bottom", th = "start", uh = "end";
f = Pi.prototype;
f.W = null;
f.S = function() {
  Pi.l.S.call(this);
  Qi(this);
};
f.v = function() {
  Pi.l.v.call(this);
  this.W = null;
};
f.removeChild = function(a, b) {
  Ri(this, a);
  return Pi.l.removeChild.call(this, a, b);
};
f.fc = function(a) {
  Pi.l.fc.call(this, a);
  Si(this, U(this, a));
};
function Si(a, b) {
  b ? Lh(b, !0) : a.W && Lh(a.W, !1);
}
function Ri(a, b) {
  if (b && b == a.W) {
    for (var c = Hg(a, b), d = c - 1; b = U(a, d); d--) {
      if (b.isEnabled()) {
        Si(a, b);
        return;
      }
    }
    for (c += 1; b = U(a, c); c++) {
      if (b.isEnabled()) {
        Si(a, b);
        return;
      }
    }
    Si(a, null);
  }
}
f.td = function(a) {
  this.W && this.W != a.target && Lh(this.W, !1);
  this.W = a.target;
};
f.ud = function(a) {
  a.target == this.W && (this.W = null);
};
f.rd = function(a) {
  Ri(this, a.target);
};
f.sd = function(a) {
  Ri(this, a.target);
};
f.uc = function() {
  U(this, this.G) || ci(this, Hg(this, this.W || U(this, 0)));
};
function Qi(a) {
  T(a).w(a, "select", a.td).w(a, "unselect", a.ud).w(a, "disable", a.rd).w(a, "hide", a.sd);
}
xc("goog-tab-bar", function() {
  return new Pi;
});
function Ti(a) {
  X.call(this, void 0, !0);
  mi(this, a);
  P(this, vi, this.Ia, !1, this);
}
x(Ti, X);
Ti.prototype.I = function() {
  Ti.l.I.call(this);
  var a = this.Ba(), b = this.mc();
  a.appendChild(b);
};
Ti.prototype.V = function(a) {
  Ti.l.V.call(this, a);
  a && this.dispatchEvent("show");
};
Ti.prototype.Ia = function(a) {
  "ok" == a.key && this.Fc() && this.dispatchEvent("action");
};
function Ui() {
  X.call(this, void 0, !0);
  this.c = Z(new ji, ki, !0, !0);
  if (this.ha) {
    if (this.c) {
      var a = this.c;
      a.ta = this.ha;
      qi(a);
    } else {
      le(this.ha, fd);
    }
    R(this.ha, !!this.c);
  }
  Vi(this, Wi);
}
x(Ui, X);
var Wi = 0;
Ui.prototype.h = Wi;
Ui.prototype.v = function() {
  delete this.h;
  Ui.l.v.call(this);
};
function Vi(a, b) {
  a.h = b;
  switch(b) {
    case 1:
      mi(a, "Screenshot");
      break;
    default:
      mi(a, "Taking Screenshot..."), ni(a, dd(""));
  }
}
;function Xi(a) {
  Ti.call(this, "Create a New Session");
  this.h = Gb(a, function(a) {
    return p(a) ? {browserName:a} : a;
  });
  P(this, "show", this.Ld, !1, this);
}
x(Xi, Ti);
f = Xi.prototype;
f.za = null;
f.v = function() {
  delete this.h;
  delete this.za;
  Xi.l.v.call(this);
};
f.mc = function() {
  function a(a) {
    var c = a.browserName;
    (a = a.version) && (c += " " + a);
    return b.A("OPTION", null, c);
  }
  var b = this.a;
  this.za = b.A("SELECT", null, a(""));
  C(this.h, function(b) {
    b = a(b);
    this.za.appendChild(b);
  }, this);
  return b.A("LABEL", null, "Browser:\u00a0", this.za);
};
f.Rb = function() {
  return this.h[this.za.selectedIndex - 1];
};
f.Fc = function() {
  return !!this.za.selectedIndex;
};
f.Ld = function() {
  this.za.selectedIndex = 0;
};
function Yi() {
  Ci.call(this, void 0, void 0, void 0);
  var a = this.b;
  this.Y = a.a.createElement("PRE");
  this.R = a.A("BUTTON", null, "Close");
  P(this.R, "click", w(this.va, this, !1));
  a = a.A("DIV", null, this.Y, a.a.createElement("HR"), a.A("DIV", {style:"text-align: center;"}, this.R));
  this.g().appendChild(a);
}
x(Yi, Mi);
Yi.prototype.v = function() {
  nf(this.R);
  delete this.R;
  delete this.Y;
  Yi.l.v.call(this);
};
function Zi() {
  Ti.call(this, "Open WebDriverJS Script");
  P(this, "show", this.Md, !1, this);
  this.h = new gh("Script URL");
  this.ea(this.h);
}
x(Zi, Ti);
f = Zi.prototype;
f.v = function() {
  delete this.h;
  Zi.l.v.call(this);
};
f.mc = function() {
  var a = Ke("A", {href:"https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs", target:"_blank"}, "WebDriverJS");
  this.h.I();
  ac(this.h.g(), "url-input");
  var b = this.a;
  return b.A("DIV", null, b.A("P", null, "Open a page that has the ", a, " client. The page will be opened with the query parameters required to communicate with the server."), this.h.g());
};
f.Md = function() {
  mh(this.h);
  this.h.g().focus();
  this.h.g().blur();
};
f.Rb = function() {
  var a = this.h;
  return null != a.sa ? a.sa : lh(a) ? a.g().value : "";
};
f.Fc = function() {
  return lh(this.h);
};
function $i() {
  S.call(this);
  this.c = new wh;
  this.ea(this.c);
  this.m = new X(void 0, !0);
  mi(this.m, "Delete session?");
  ni(this.m, dd("Are you sure you want to delete this session?"));
  P(this.m, vi, this.qa, !1, this);
  this.B = new Oi("Delete Session");
  this.ea(this.B);
  P(this.B, "action", w(this.m.V, this.m, !0));
  this.C = new Oi("Take Screenshot");
  this.ea(this.C);
  P(this.C, "action", this.Ia, !1, this);
  this.h = new Yi;
  this.h.C = new K(5, 5, 5, 5);
  this.h.oc = !0;
  var a = this.h, b = new K(10, 0, 0, 0);
  null == b || b instanceof K ? a.hb = b : a.hb = new K(b, void 0, void 0, void 0);
  a.X && a.ab();
  this.h.Gc = 250;
}
x($i, S);
$i.prototype.v = function() {
  this.h.M();
  this.m.M();
  delete this.c;
  delete this.F;
  delete this.H;
  delete this.R;
  delete this.m;
  delete this.h;
  delete this.C;
  delete this.B;
  delete this.Y;
  $i.l.v.call(this);
};
$i.prototype.I = function() {
  this.C.I();
  this.B.I();
  this.c.I();
  var a = this.a;
  this.F = a.A("DIV", "goog-tab-content empty-view", "No Sessions");
  this.R = a.a.createElement("SPAN");
  this.Y = a.A("DIV", "todo", "\u00a0");
  this.Y.disabled = !0;
  this.c.c(this.R);
  var b;
  this.c.c(b = a.A("SPAN", "session-capabilities", "Capabilities"));
  this.c.c(this.C.g());
  this.c.c(this.B.g());
  this.H = a.A("DIV", "goog-tab-content", this.c.g(), this.Y);
  this.b = a.A("DIV", null, this.F, this.H, a.A("DIV", "goog-tab-bar-clear"));
  aj(this, null);
  Di(this.h, b);
};
function aj(a, b) {
  var c = !!b;
  R(a.F, !c);
  R(a.H, c);
  if (b) {
    Se(a.R, b.N());
    a = a.h.Y;
    b = pe(b.a || {});
    c = "";
    for (var d = 0; d < b.length; d++) {
      var e = b[d];
      c += e instanceof ad ? cd(e) : e;
    }
    a.innerHTML = c;
  }
}
$i.prototype.qa = function(a) {
  "ok" == a.key && this.dispatchEvent("delete");
};
$i.prototype.Ia = function() {
  this.dispatchEvent("screenshot");
};
function bj() {
  Oi.call(this, "Load Script");
  this.m = new Zi;
  P(this.m, "action", this.H, !1, this);
  P(this, "action", w(this.m.V, this.m, !0));
}
x(bj, Oi);
bj.prototype.v = function() {
  this.m.M();
  delete this.m;
  bj.l.v.call(this);
};
bj.prototype.H = function() {
  this.dispatchEvent(new rc("loadscript", this, this.m.Rb()));
};
function cj(a) {
  xh.call(this, "Sessions");
  this.c = new Pi(th, null);
  this.m = new $i;
  this.B = new Xi(a);
  this.F = this.a.A("BUTTON", null, "Create Session");
  this.H = this.a.A("BUTTON", null, "Refresh Sessions");
  this.C = new wh;
  this.h = [];
  this.Y = setInterval(w(this.Pd, this), 300);
  this.ea(this.c);
  this.ea(this.m);
  this.ea(this.C);
  this.ja(!1);
  this.C.c(this.F);
  this.C.c(this.H);
  P(this.F, "click", w(this.B.V, this.B, !0));
  P(this.H, "click", w(this.dispatchEvent, this, "refresh"));
  P(this.c, "select", this.Id, !1, this);
  P(this.B, "action", this.Cd, !1, this);
}
x(cj, xh);
f = cj.prototype;
f.v = function() {
  nf(this.F);
  nf(this.H);
  clearInterval(this.Y);
  this.B.M();
  delete this.B;
  delete this.c;
  delete this.m;
  delete this.C;
  delete this.h;
  delete this.Y;
  cj.l.v.call(this);
};
f.nc = function() {
  this.c.I();
  this.m.I();
  this.C.I();
  return this.a.A("DIV", "session-container", this.C.g(), this.c.g(), this.m.g());
};
f.ja = function(a) {
  a ? (this.F.removeAttribute("disabled"), this.H.removeAttribute("disabled")) : (this.F.setAttribute("disabled", "disabled"), this.H.setAttribute("disabled", "disabled"));
};
function dj(a) {
  return (a = a.c.W) ? a.Da : null;
}
f.Pd = function() {
  if (this.h.length) {
    var a = this.h[0].Ca;
    a = 5 === a.length ? "." : a + ".";
    C(this.h, function(b) {
      var c = a;
      fh(b.g(), c);
      b.Ca = c;
    });
  }
};
function ej(a) {
  var b = Uf(a.c.g());
  a = a.m;
  b = b.height + 20;
  Hf(a.F, "height", b + "px");
  Hf(a.H, "height", b + "px");
}
f.ic = function(a) {
  a = new fj(a);
  var b = this.h.shift(), c = Hg(this.c, b);
  0 > c ? this.c.ea(a, !0) : (this.c.ib(a, c, !0), this.c.removeChild(b, !0));
  ej(this);
  Si(this.c, a);
};
function gj(a, b) {
  var c = new hd;
  C(b, function(a) {
    c.set(a.N(), a);
  });
  var d = a.c, e = d.W;
  b = [];
  for (var g = Fg(d) - a.h.length, h = 0; h < g; ++h) {
    b.push(U(d, h));
  }
  C(b, function(a) {
    var b = a.Da.N(), g = c.get(b);
    g ? (ld(c, b), a.Da = g) : (d.removeChild(a, !0), e === a && (e = null));
  }, a);
  C(a.h, function(a) {
    d.removeChild(a, !0);
  });
  a.h = [];
  C(c.ia(), a.ic, a);
  e ? (aj(a.m, e.Da), Si(d, e)) : Fg(d) ? Si(d, U(d, 0)) : aj(a.m, null);
}
f.Cd = function() {
  var a = ".";
  this.h.length && (a = this.h[0].Ca);
  a = new Bi(a, null, this.a);
  a.ja(!1);
  this.h.push(a);
  this.c.ea(a, !0);
  ej(this);
  this.dispatchEvent(new rc("create", this, this.B.Rb()));
};
f.Id = function() {
  var a = this.c.W;
  aj(this.m, a ? a.Da : null);
};
function fj(a) {
  var b = a.a.get("browserName") || "unknown browser";
  b = b.toLowerCase().replace(/(^|\b)[a-z]/g, function(a) {
    return a.toUpperCase();
  });
  Bi.call(this, b);
  this.Da = a;
}
x(fj, Bi);
fj.prototype.v = function() {
  delete this.Da;
  fj.l.v.call(this);
};
function hj(a, b) {
  z.call(this);
  this.b = je("remote.ui.Client");
  this.h = new vf;
  wf(this.h, !0);
  this.K = a;
  this.m = b;
  this.c = new vh;
  this.D = new yh;
  this.a = new cj(ij);
  this.j = new Ui;
  this.o = new bj;
  P(this.a, "create", this.Dd, !1, this);
  P(this.a, "delete", this.Ed, !1, this);
  P(this.a, "refresh", this.Pc, !1, this);
  P(this.a, "screenshot", this.Kd, !1, this);
  P(this.o, "loadscript", this.Gd, !1, this);
}
x(hj, z);
var ij = "android;chrome;firefox;internet explorer;iphone;opera".split(";");
f = hj.prototype;
f.v = function() {
  this.c.M();
  this.a.M();
  this.j.M();
  this.o.M();
  wf(this.h, !1);
  delete this.b;
  delete this.m;
  delete this.h;
  delete this.a;
  delete this.c;
  delete this.j;
  delete this.o;
  hj.l.v.call(this);
};
function jj(a) {
  Dg(a.c, void 0);
  a.c.Fb(!1);
  Dg(a.a, void 0);
  Dg(a.D, void 0);
  Dg(a.o, void 0);
  a.a.m.c.c(a.o.g());
  kj(a).then(w(function() {
    this.a.ja(!0);
    this.Pc();
  }, a));
}
function lj(a, b) {
  a.c.Fb(!1);
  return gg(a.m, b).then(ib);
}
function mj(a, b, c) {
  var d = a.b;
  d && d.log($d, b + "\n" + c, void 0);
  d = a.c;
  d.a.Yc(d.g(), b + "\n\n" + c);
  d.Gb();
  a.c.Fb(!0);
}
function kj(a) {
  sf(a.b, "Retrieving server status...");
  return lj(a, new gb("getStatus")).then(w(function(a) {
    var b = a.value || {};
    (a = b.os) && a.name && (a = a.name + (a.version ? " " + a.version : ""));
    b = b.build;
    zh(this.D, a, b && b.version, b && b.revision);
  }, a));
}
f.Pc = function() {
  sf(this.b, "Refreshing sessions...");
  var a = this;
  vd(lj(this, new gb("getSessions")).then(function(b) {
    b = b.value;
    b = Gb(b, function(a) {
      return new Ng(a.id, a.capabilities);
    });
    gj(a.a, b);
  }), function(b) {
    mj(a, "Unable to refresh session list.", b);
  });
};
f.Dd = function(a) {
  sf(this.b, "Creating new session for " + a.data.browserName);
  a = hb(new gb("newSession"), "desiredCapabilities", a.data);
  var b = this;
  vd(lj(this, a).then(function(a) {
    a = new Ng(a.sessionId, a.value);
    b.a.ic(a);
  }), function(a) {
    mj(b, "Unable to create new session.", a);
    a = b.a;
    var c = a.h.shift();
    c && (a.c.removeChild(c, !0), ej(a));
  });
};
f.Ed = function() {
  var a = dj(this.a);
  if (a) {
    sf(this.b, "Deleting session: " + a.N());
    var b = hb(new gb("quit"), "sessionId", a.N()), c = this;
    vd(lj(this, b).then(function() {
      for (var b = c.a, e = b.c.W, g, h = Fg(b.c), k = 0; k < h; ++k) {
        var m = U(b.c, k);
        if (m.Da.N() == a.N()) {
          g = m;
          break;
        }
      }
      g && (b.c.removeChild(g, !0), g.M(), e == g && Fg(b.c) ? (b = b.c, Si(b, U(b, 0))) : aj(b.m, null));
    }), function(a) {
      mj(c, "Unable to delete session.", a);
    });
  } else {
    rf(this.b, "Cannot delete session; no session selected!");
  }
};
f.Gd = function(a) {
  var b = dj(this.a);
  if (b) {
    a = new Fd(a.data);
    a.b.add("wdsid", b.N());
    a.b.add("wdurl", this.K);
    var c = hb(hb(new gb("get"), "sessionId", b.N()), "url", a.toString());
    sf(this.b, "In session(" + b.N() + "), loading " + a);
    vd(lj(this, c), w(function(a) {
      mj(this, "Unable to load URL", a);
    }, this));
  } else {
    rf(this.b, "Cannot load url: " + a.data + "; no session selected!");
  }
};
f.Kd = function() {
  var a = dj(this.a);
  if (a) {
    sf(this.b, "Taking screenshot: " + a.N());
    a = hb(new gb("screenshot"), "sessionId", a.N());
    Vi(this.j, Wi);
    this.j.V(!0);
    var b = this;
    vd(lj(this, a).then(function(a) {
      var c = b.j;
      a = a.value;
      if (c.ua) {
        Vi(c, 1);
        a = "data:image/png;base64," + a;
        var e = c.a;
        a = e.A("A", {href:a, target:"_blank"}, e.A("IMG", {src:a}));
        ni(c, dd(""));
        c.Ba().appendChild(a);
        Th(c);
      }
    }), function(a) {
      b.j.V(!1);
      mj(b, "Unable to take screenshot.", a);
    });
  } else {
    rf(this.b, "Cannot take screenshot; no session selected!");
  }
};
function nj() {
  var a = window.location;
  a = [a.protocol, "//", a.host, a.pathname.replace(/\/static\/resource(?:\/[^\/]*)?$/, "")].join("");
  var b = new fg(new Og(a));
  jj(new hj(a, b));
}
var oj = ["init"], pj = l;
oj[0] in pj || !pj.execScript || pj.execScript("var " + oj[0]);
for (var qj; oj.length && (qj = oj.shift());) {
  !oj.length && n(nj) ? pj[qj] = nj : pj[qj] && pj[qj] !== Object.prototype[qj] ? pj = pj[qj] : pj = pj[qj] = {};
}
;
