import React, { useState, useRef } from 'react';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var retrieveImageData = function retrieveImageData() {
  var imageData = localStorage.getItem('croppedImage');
  console.log(imageData);
  return imageData;
};
var CropCanvas = function CropCanvas(_ref) {
  var style = _ref.style,
    canvasStyle = _ref.canvasStyle,
    aspectRatio = _ref.aspectRatio;
    _ref.customAspectRatio;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    range = _useState2[0],
    setRange = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    imgSrc = _useState4[0],
    setImgSrc = _useState4[1];
  var canvas = useRef(null);
  var canvas1 = useRef(null);
  var canvas2 = useRef(null);
  var canvas3 = useRef(null);
  var _useState5 = useState('none'),
    _useState6 = _slicedToArray(_useState5, 2),
    display = _useState6[0],
    setDisplay = _useState6[1];
  var _useState7 = useState({}),
    _useState8 = _slicedToArray(_useState7, 2),
    init = _useState8[0],
    setInit = _useState8[1];
  var oldValue = useRef(0);
  var img = useRef(null);
  var isDragging = useRef(false);
  var _useState9 = useState(null),
    _useState10 = _slicedToArray(_useState9, 2),
    posX = _useState10[0],
    setPosX = _useState10[1];
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    posY = _useState12[0],
    setPosY = _useState12[1];
  document.addEventListener('mousemove', drag);
  var holeX = useRef(null);
  var holeY = useRef(null);
  var holeRadius = useRef(null);
  var aspectRatioDimensions = useRef(null);
  function holdDown(event) {
    isDragging.current = true;
    setPosX(event.clientX - canvas1.current.offsetLeft);
    setPosY(event.clientY - canvas1.current.offsetTop);
  }
  function release() {
    isDragging.current = false;
    var condition1 = canvas1.current.offsetLeft >= 0;
    var condition2 = canvas1.current.offsetLeft <= -(canvas1.current.width - canvas.current.width);
    var condition3 = canvas1.current.offsetTop >= 0;
    var condition4 = canvas1.current.offsetTop <= -(canvas1.current.height - canvas.current.height);
    var left = canvas1.current.offsetLeft;
    var top = canvas1.current.offsetTop;
    var right = canvas1.current.offsetLeft + canvas1.current.width - canvas.current.width;
    var bottom = canvas1.current.offsetTop + canvas1.current.height - canvas.current.height;

    // ANIMATE REVERT
    // left
    if (condition1) {
      for (var i = left; i > 0; i--) {
        canvas1.current.style.left = canvas1.current.offsetLeft - 1 + 'px';
      }
    }
    // right
    if (condition2) {
      for (var _i = 0; _i < -right; _i++) {
        canvas1.current.style.left = canvas1.current.offsetLeft + 1 + 'px';
      }
    }
    // top
    if (condition3) {
      for (var _i2 = top; _i2 > 0; _i2--) {
        canvas1.current.style.top = canvas1.current.offsetTop - 1 + 'px';
      }
    }
    // bottom
    if (condition4) {
      for (var _i3 = 0; _i3 < -bottom; _i3++) {
        canvas1.current.style.top = canvas1.current.offsetTop + 1 + 'px';
      }
    }
  }
  function drag(event) {
    var bound;
    if (isDragging.current) {
      bound = canvas.current.getBoundingClientRect();
      var isOutOfBounds = event.clientX < Math.floor(bound.x) || event.clientX > Math.floor(bound.x) + canvas.current.width || event.clientY < Math.floor(bound.y) || event.clientY > Math.floor(bound.y) + canvas.current.height;
      canvas1.current.offsetLeft + range / 20 * canvas1.current.width + (canvas1.current.width - canvas.current.width);
      var deltaX = event.clientX - posX;
      var deltaY = event.clientY - posY;
      canvas1.current.style.left = deltaX + 'px';
      canvas1.current.style.top = deltaY + 'px';
      if (isOutOfBounds) {
        release();
      }
    }
  }
  function finishCropCanvas() {
    // Getting image data from canvas1
    var imageData = canvas1.current.getContext('2d').getImageData(aspectRatioDimensions.current.x, aspectRatioDimensions.current.y, aspectRatioDimensions.current.w, aspectRatioDimensions.current.h);

    // Update canvas1 with modified image data
    canvas3.current.height = 2 * holeRadius.current;
    canvas3.current.width = 2 * holeRadius.current;
    canvas3.current.getContext('2d').putImageData(imageData, 0, 0);
    var imageDataURL = canvas3.current.toDataURL('image/png'); // Specifying image format (e.g., 'image/jpeg')
    localStorage.setItem('croppedImage', imageDataURL);
  }
  function fitImageInCanvas(width, height) {
    console.log(height, width);
    var w, h;
    if (width <= height) {
      h = canvas.current.height * (height / width);
      w = canvas.current.width;
    } else {
      w = canvas.current.width * (width / height);
      h = canvas.current.height;
    }
    return {
      w: w,
      h: h
    };
  }
  function ZoomImage(_x) {
    return _ZoomImage.apply(this, arguments);
  }
  function _ZoomImage() {
    _ZoomImage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var context1, newValue, top, left;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setRange(event.target.value);
            context1 = canvas1.current.getContext('2d');
            newValue = event.target.value;
            console.log(img.current);
            top = canvas1.current.offsetTop;
            left = canvas1.current.offsetLeft;
            canvas1.current.height = init.h * (1 + newValue / 20);
            canvas1.current.width = init.w * (1 + newValue / 20);
            _context.next = 10;
            return context1.drawImage(img.current, 0, 0, canvas1.current.width, canvas1.current.height);
          case 10:
            canvas1.current.style.left = newValue < oldValue ? left * (1 - newValue / 20) + 'px' : left * (1 + newValue / 20) + 'px';
            canvas1.current.style.top = newValue < oldValue ? top * (1 - newValue / 20) + 'px' : top * (1 + newValue / 20) + 'px';
            oldValue.current = newValue;
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _ZoomImage.apply(this, arguments);
  }
  function draw(_x2, _x3, _x4) {
    return _draw.apply(this, arguments);
  }
  function _draw() {
    _draw = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(imgWidth, imgHeight, img) {
      var context, context1, context2, dimensions, coverWidth, coverHeight;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            context = canvas.current.getContext('2d');
            context1 = canvas1.current.getContext('2d');
            context2 = canvas2.current.getContext('2d');
            dimensions = fitImageInCanvas(imgWidth, imgHeight);
            coverWidth = 0.9 * canvas.current.width;
            coverHeight = coverWidth / 3;
            holeRadius.current = 0.4 * canvas.current.height;
            holeX.current = canvas.current.width / 2;
            holeY.current = canvas.current.height / 2;
            setInit(dimensions);
            canvas1.current.width = dimensions.w;
            canvas1.current.height = dimensions.h;
            context.fillStyle = 'rgba(0, 0, 0)';
            context.fillRect(0, 0, 500, 500);
            context1.drawImage(img, 0, 0, dimensions.w, dimensions.h);
            context2.fillStyle = 'rgba(0, 0, 0, 0.7)'; // Adjust opacity (0 - 2)
            context2.fillRect(0, 0, 500, 500);

            // Clearing a circular area to create the hole
            context2.beginPath();
            if (aspectRatio == 'profile') {
              context2.arc(holeX.current, holeY.current, holeRadius.current, 0, 2 * Math.PI);
              // Outline around the hole (for better visibility)
              context2.strokeStyle = 'rgba(255, 255, 255)';
              context2.lineWidth = 8;
              context2.beginPath();
              context2.arc(holeX.current, holeY.current, holeRadius.current, 0, 2 * Math.PI);
              context2.stroke();

              // Relocating the crop circle
              holeX.current = 0.1 * canvas.current.width - canvas1.current.offsetLeft;
              holeY.current = 0.1 * canvas.current.height - canvas1.current.offsetTop;
              aspectRatioDimensions.current = {
                x: holeX.current,
                y: holeY.current,
                w: canvas.current.width,
                h: canvas.current.height
              };
            } else if (aspectRatio == 'cover') {
              context2.rect(0.05 * canvas.current.width, (canvas.current.height - coverHeight) / 2, coverWidth, coverHeight);
              // Outline around the hole (for better visibility)
              context2.strokeStyle = 'rgba(255, 255, 255)';
              context2.lineWidth = 8;
              context2.beginPath();
              context2.rect(0.05 * canvas.current.width, (canvas.current.height - coverHeight) / 2, coverWidth, coverHeight);
              context2.stroke();
              aspectRatioDimensions.current = {
                x: 0.05 * canvas.current.width,
                y: (canvas.current.height - coverHeight) / 2,
                w: coverWidth,
                h: coverHeight
              };
            }
            context2.clip();
            context2.clearRect(0, 0, canvas.current.width, canvas.current.height);
          case 21:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _draw.apply(this, arguments);
  }
  function putImageInCanvas(_x5) {
    return _putImageInCanvas.apply(this, arguments);
  }
  function _putImageInCanvas() {
    _putImageInCanvas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(event) {
      var img;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setRange(0);
            setDisplay('flex');
            img = new Image();
            img.src = URL.createObjectURL(event.target.files[0]);
            setImgSrc(img.src);
            img.onload = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return draw(this.width, this.height, img);
                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          case 6:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return _putImageInCanvas.apply(this, arguments);
  }
  function unmountCanvas() {
    console.log('blown');
    setDisplay('none');
  }

  // Style
  var container = {
    display: 'flex',
    flexDirection: 'column'
  };
  var button = _objectSpread2({
    margin: 'auto',
    borderRadius: '8px',
    backgroundColor: 'teal',
    color: 'white',
    padding: '.8rem 2rem'
  }, style);
  var page = _objectSpread2({
    display: display,
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    background: '#00000082',
    top: 0,
    left: 0,
    justifyContent: 'center',
    flexDirection: 'column'
  }, canvasStyle);
  var cropper = {
    zIndex: 20000,
    display: display,
    flexDirection: 'column',
    margin: 'auto',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw'
  };
  var rangeStyle = {
    width: '80%',
    display: 'flex',
    margin: '0 auto 1.5rem',
    flexDirection: 'column'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "file",
    style: button
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    name: "file",
    id: "file",
    style: {
      display: 'none'
    },
    onChange: putImageInCanvas
  }), 'Select File'), /*#__PURE__*/React.createElement("img", {
    ref: img,
    src: imgSrc,
    alt: "hidden image",
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: page
  }, /*#__PURE__*/React.createElement("div", {
    className: "cropper",
    style: cropper
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 25,
      top: 10,
      color: 'white',
      fontSize: '4rem'
    },
    onClick: unmountCanvas
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    className: "image-container",
    style: {
      position: 'relative',
      margin: 'auto',
      width: 500,
      height: 500,
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvas,
    width: 500,
    height: 500
  }), /*#__PURE__*/React.createElement("canvas", {
    ref: canvas1,
    width: 500,
    height: 500,
    style: {
      position: 'absolute',
      zIndex: 1,
      top: 0,
      left: 0
    }
  }), /*#__PURE__*/React.createElement("canvas", {
    ref: canvas2,
    width: 500,
    height: 500,
    style: {
      position: 'absolute',
      zIndex: 2,
      top: 0,
      left: 0
    },
    onMouseDown: holdDown,
    onMouseUp: release
  })), /*#__PURE__*/React.createElement("div", {
    style: rangeStyle
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      width: '70%',
      margin: '.5rem auto'
    },
    type: "range",
    value: range,
    min: 0,
    max: "20",
    onChange: ZoomImage
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'auto'
    },
    id: "valueDisplay"
  }, "Zoom: ", range, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    id: "crop",
    style: button,
    onClick: finishCropCanvas
  }, "done")))), /*#__PURE__*/React.createElement("canvas", {
    ref: canvas3,
    style: {}
  }));
};

export { CropCanvas, retrieveImageData };
