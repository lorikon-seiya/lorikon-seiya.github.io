import "./chunk-BUSYA2B4.js";

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/isString.js
var t = (t10) => "string" == typeof t10;

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/isNode.js
var n = (n13) => n13 && null !== n13 && n13 instanceof Element && "nodeType" in n13;

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/getScrollableParent.js
var e = function(e10) {
  if (!(e10 && e10 instanceof Element && e10.offsetParent)) return false;
  let n13 = false, i7 = false;
  if (e10.scrollWidth > e10.clientWidth) {
    const i8 = window.getComputedStyle(e10).overflowX, t10 = -1 !== i8.indexOf("hidden"), o9 = -1 !== i8.indexOf("clip"), d4 = -1 !== i8.indexOf("visible");
    n13 = !t10 && !o9 && !d4;
  }
  if (e10.scrollHeight > e10.clientHeight) {
    const n14 = window.getComputedStyle(e10).overflowY, t10 = -1 !== n14.indexOf("hidden"), o9 = -1 !== n14.indexOf("clip"), d4 = -1 !== n14.indexOf("visible");
    i7 = !t10 && !o9 && !d4;
  }
  return n13 || i7;
};
var n2 = function(i7, t10 = void 0) {
  return !i7 || i7 === document.body || t10 && i7 === t10 ? null : e(i7) ? i7 : n2(i7.parentElement, t10);
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/strToHtml.js
var e2 = function(e10) {
  var t10 = new DOMParser().parseFromString(e10, "text/html").body;
  if (t10.childElementCount > 1) {
    for (var n13 = document.createElement("div"); t10.firstChild; ) n13.appendChild(t10.firstChild);
    return n13;
  }
  let r7 = t10.firstChild;
  return !r7 || r7 instanceof HTMLElement ? r7 : ((n13 = document.createElement("div")).appendChild(r7), n13);
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/clamp.js
var t2 = function(t10 = 0, n13 = 0, a6 = 0) {
  return Math.max(Math.min(n13, a6), t10);
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/isPlainObject.js
var t3 = (t10) => "object" == typeof t10 && null !== t10 && t10.constructor === Object && "[object Object]" === Object.prototype.toString.call(t10);

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/isEqual.js
function e3(e10) {
  return t3(e10) || Array.isArray(e10);
}
function n3(t10, r7) {
  const o9 = Object.keys(t10), c6 = Object.keys(r7);
  return o9.length === c6.length && o9.every((o10) => {
    const c7 = t10[o10], i7 = r7[o10];
    return "function" == typeof c7 ? `${c7}` == `${i7}` : e3(c7) && e3(i7) ? n3(c7, i7) : c7 === i7;
  });
}

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/libs/tween.js
var e4 = function(n13) {
  for (const t10 of u) t10.getState() === i.Running && t10.tick(a ? n13 - a : 0);
  a = n13, s = window.requestAnimationFrame(e4);
};
var i;
var o;
var r;
!(function(n13) {
  n13[n13.Initializing = 0] = "Initializing", n13[n13.Running = 1] = "Running", n13[n13.Paused = 2] = "Paused", n13[n13.Completed = 3] = "Completed", n13[n13.Destroyed = 4] = "Destroyed";
})(i || (i = {})), (function(n13) {
  n13[n13.Spring = 0] = "Spring", n13[n13.Ease = 1] = "Ease";
})(o || (o = {})), (function(n13) {
  n13[n13.Loop = 0] = "Loop", n13[n13.Reverse = 1] = "Reverse";
})(r || (r = {}));
var u = /* @__PURE__ */ new Set();
var s = null;
var a = 0;
function c() {
  let a6 = i.Initializing, f3 = o.Ease, l6 = 0, p3 = 0, g3 = c.Easings.Linear, m3 = 500, d4 = 0, S2 = 0, h3 = 0, y3 = 0, E3 = 1 / 0, R2 = 0.01, b3 = 0.01, M5 = false, w3 = {}, v4 = null, C = {}, L = {}, I2 = {}, D2 = 0, z2 = 0, N2 = r.Loop, V = c.Easings.Linear;
  const j = /* @__PURE__ */ new Map();
  function q2(n13, ...t10) {
    for (const e10 of j.get(n13) || []) e10(...t10);
  }
  function x3(n13) {
    return p3 = 0, n13 ? v4 = setTimeout(() => {
      A();
    }, n13) : A(), P;
  }
  function A() {
    a6 = i.Running, q2("start", C, L);
  }
  function F2() {
    if (a6 = i.Completed, I2 = {}, q2("end", C), a6 === i.Completed) if (l6 < D2) {
      if (l6++, N2 === r.Reverse) {
        const n13 = { ...w3 };
        w3 = { ...L }, L = n13;
      }
      x3(z2);
    } else l6 = 0;
    return P;
  }
  const P = { getState: function() {
    return a6;
  }, easing: function(n13) {
    return g3 = n13, f3 = o.Ease, I2 = {}, P;
  }, duration: function(n13) {
    return m3 = n13, P;
  }, spring: function(n13 = {}) {
    f3 = o.Spring;
    const t10 = { velocity: 0, mass: 1, tension: 170, friction: 26, restDelta: 0.1, restSpeed: 0.1, maxSpeed: 1 / 0, clamp: true }, { velocity: e10, mass: i7, tension: r7, friction: u6, restDelta: s13, restSpeed: a7, maxSpeed: c6, clamp: l7 } = { ...t10, ...n13 };
    return d4 = e10, S2 = i7, h3 = r7, y3 = u6, b3 = s13, R2 = a7, E3 = c6, M5 = l7, I2 = {}, P;
  }, isRunning: function() {
    return a6 === i.Running;
  }, isSpring: function() {
    return f3 === o.Spring;
  }, from: function(n13) {
    return C = { ...n13 }, P;
  }, to: function(n13) {
    return L = n13, P;
  }, repeat: function(n13, t10 = 0, e10 = r.Loop, i7) {
    return D2 = n13, z2 = t10, N2 = e10, V = i7 || g3, P;
  }, on: function(n13, t10) {
    var e10, i7;
    return e10 = n13, i7 = t10, j.set(e10, [...j.get(e10) || [], i7]), P;
  }, off: function(n13, t10) {
    var e10, i7;
    return e10 = n13, i7 = t10, j.has(e10) && j.set(e10, j.get(e10).filter((n14) => n14 !== i7)), P;
  }, start: function(n13) {
    return n3(C, L) || (a6 = i.Initializing, w3 = { ...C }, u.add(this), s || (s = window.requestAnimationFrame(e4)), x3(n13)), P;
  }, pause: function() {
    return v4 && (clearTimeout(v4), v4 = null), a6 === i.Running && (a6 = i.Paused, q2("pause", C)), P;
  }, end: F2, tick: function(e10) {
    e10 > 50 && (e10 = 50), p3 += e10;
    let u6 = 0, s13 = false;
    if (a6 !== i.Running) return P;
    if (f3 === o.Ease) {
      u6 = t2(0, p3 / m3, 1), s13 = 1 === u6;
      const t10 = N2 === r.Reverse ? V : g3;
      for (const n13 in C) C[n13] = w3[n13] + (L[n13] - w3[n13]) * t10(u6);
    }
    if (f3 === o.Spring) {
      const t10 = 1e-3 * e10;
      let i7 = 0;
      for (const e11 in C) {
        const o9 = L[e11];
        let r7 = C[e11];
        if ("number" != typeof o9 || isNaN(o9) || "number" != typeof r7 || isNaN(r7)) continue;
        if (Math.abs(o9 - r7) <= b3) {
          C[e11] = o9, I2[e11] = 0;
          continue;
        }
        I2[e11] || ("object" == typeof d4 && "number" == typeof d4[e11] ? I2[e11] = d4[e11] : I2[e11] = "number" == typeof d4 ? d4 : 0);
        let u7 = I2[e11];
        u7 = t2(-1 * Math.abs(E3), u7, Math.abs(E3));
        const s14 = u7 * S2 * y3;
        u7 += ((r7 > o9 ? -1 : 1) * (Math.abs(o9 - r7) * h3) - s14) / S2 * t10, r7 += u7 * t10;
        const a7 = C[e11] > o9 ? r7 < o9 : r7 > o9;
        let c7 = Math.abs(u7) < R2 && Math.abs(o9 - r7) <= b3;
        M5 && a7 && (c7 = true), c7 ? (r7 = o9, u7 = 0) : i7++, C[e11] = r7, I2[e11] = u7;
      }
      s13 = !i7;
    }
    const c6 = { ...L };
    return q2("step", C, w3, L, u6), s13 && a6 === i.Running && n3(L, c6) && (a6 = i.Completed, F2()), P;
  }, getStartValues: function() {
    return w3;
  }, getCurrentValues: function() {
    return C;
  }, getCurrentVelocities: function() {
    return I2;
  }, getEndValues: function() {
    return L;
  }, destroy: function() {
    a6 = i.Destroyed, v4 && (clearTimeout(v4), v4 = null), w3 = C = L = {}, u.delete(this);
  } };
  return P;
}
c.destroy = () => {
  for (const n13 of u) n13.destroy();
  s && (cancelAnimationFrame(s), s = null);
}, c.Easings = { Linear: function(n13) {
  return n13;
}, EaseIn: function(n13) {
  return 0 === n13 ? 0 : Math.pow(2, 10 * n13 - 10);
}, EaseOut: function(n13) {
  return 1 === n13 ? 1 : 1 - Math.pow(2, -10 * n13);
}, EaseInOut: function(n13) {
  return 0 === n13 ? 0 : 1 === n13 ? 1 : n13 < 0.5 ? Math.pow(2, 20 * n13 - 10) / 2 : (2 - Math.pow(2, -20 * n13 + 10)) / 2;
} };

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/libs/gestures.js
function e5(e10) {
  return "undefined" != typeof TouchEvent && e10 instanceof TouchEvent;
}
function t4(t10, n13) {
  const o9 = [], s13 = e5(t10) ? t10[n13] : t10 instanceof MouseEvent && ("changedTouches" === n13 || "mouseup" !== t10.type) ? [t10] : [];
  for (const e10 of s13) o9.push({ x: e10.clientX, y: e10.clientY, ts: Date.now() });
  return o9;
}
function n4(e10) {
  return t4(e10, "touches");
}
function o2(e10) {
  return t4(e10, "targetTouches");
}
function s2(e10) {
  return t4(e10, "changedTouches");
}
function i2(e10) {
  const t10 = e10[0], n13 = e10[1] || t10;
  return { x: (t10.x + n13.x) / 2, y: (t10.y + n13.y) / 2, ts: n13.ts };
}
function r2(e10) {
  const t10 = e10[0], n13 = e10[1] || e10[0];
  return t10 && n13 ? -1 * Math.sqrt((n13.x - t10.x) * (n13.x - t10.x) + (n13.y - t10.y) * (n13.y - t10.y)) : 0;
}
var c2 = (e10) => {
  e10.cancelable && e10.preventDefault();
};
var u2 = { passive: false };
var a2 = { panThreshold: 5, swipeThreshold: 3, ignore: ["textarea", "input", "select", "[contenteditable]", "[data-selectable]", "[data-draggable]"] };
var d = false;
var f = true;
var l = (e10, t10) => {
  let l6, h3, v4, p3, g3, m3 = { ...a2, ...t10 }, E3 = true, w3 = [], y3 = [], T2 = [], b3 = false, M5 = false, L = false, x3 = false, P = 0, D2 = 0, X = 0, Y = 0, k3 = 0, R2 = 0, z2 = 0, A = 0, S2 = 0, j = [];
  const q2 = /* @__PURE__ */ new Map();
  function C(e11) {
    const t11 = r2(y3), n13 = r2(T2), o9 = t11 && n13 ? t11 / n13 : 0, s13 = Math.abs(z2) > Math.abs(A) ? z2 : A, i7 = { srcEvent: l6, isPanRecognized: b3, isSwipeRecognized: M5, firstTouch: w3, previousTouch: T2, currentTouch: y3, deltaX: X, deltaY: Y, offsetX: k3, offsetY: R2, velocityX: z2, velocityY: A, velocity: s13, angle: S2, axis: v4, scale: o9, center: h3 };
    for (const t12 of q2.get(e11) || []) t12(i7);
  }
  function H2(e11) {
    const t11 = e11.target, n13 = e11.composedPath()[0], o9 = m3.ignore.join(","), s13 = (e12) => e12 && e12 instanceof HTMLElement && (e12.matches(o9) || e12.closest(o9));
    if (s13(t11) || s13(n13)) return false;
  }
  function I2(e11) {
    const t11 = Date.now();
    if (j = j.filter((e12) => !e12.ts || e12.ts > t11 - 100), e11 && j.push(e11), z2 = 0, A = 0, j.length > 3) {
      const e12 = j[0], t12 = j[j.length - 1];
      if (e12 && t12) {
        const n13 = t12.x - e12.x, o9 = t12.y - e12.y, s13 = e12.ts && t12.ts ? t12.ts - e12.ts : 0;
        s13 > 0 && (z2 = Math.abs(n13) > 3 ? n13 / (s13 / 30) : 0, A = Math.abs(o9) > 3 ? o9 / (s13 / 30) : 0);
      }
    }
  }
  function B2(e11) {
    if (!E3) return;
    if (false === H2(e11)) return;
    if ("undefined" != typeof MouseEvent && e11 instanceof MouseEvent) {
      if (d) return;
    } else d = true;
    if ("undefined" != typeof MouseEvent && e11 instanceof MouseEvent) {
      if (!e11.buttons || 0 !== e11.button) return;
      c2(e11);
    }
    e11 instanceof MouseEvent && (window.addEventListener("mousemove", F2), window.addEventListener("mouseup", G)), window.addEventListener("blur", J), l6 = e11, y3 = o2(e11), w3 = [...y3], T2 = [], D2 = y3.length, h3 = i2(y3), 1 === D2 && (b3 = false, M5 = false, L = false), D2 && I2(i2(y3));
    const t11 = Date.now(), n13 = t11 - (P || t11);
    x3 = n13 > 0 && n13 <= 250 && 1 === D2, P = t11, clearTimeout(p3), C("start");
  }
  function F2(e11) {
    if (!w3.length) return;
    if (e11.defaultPrevented) return;
    if (false === H2(e11)) return;
    l6 = e11, T2 = [...y3], y3 = n4(e11);
    const t11 = i2(T2), o9 = i2(n4(e11));
    if (I2(o9), D2 = y3.length, h3 = o9, T2.length === y3.length ? (X = o9.x - t11.x, Y = o9.y - t11.y) : (X = 0, Y = 0), w3.length) {
      const e12 = i2(w3);
      k3 = o9.x - e12.x, R2 = o9.y - e12.y;
    }
    if (y3.length > 1) {
      const e12 = r2(y3), t12 = r2(T2);
      Math.abs(e12 - t12) >= 0.1 && (L = true, C("pinch"));
    }
    b3 || (b3 = Math.abs(k3) >= m3.panThreshold || Math.abs(R2) >= m3.panThreshold, b3 && (f = false, clearTimeout(g3), g3 = void 0, S2 = Math.abs(180 * Math.atan2(R2, k3) / Math.PI), v4 = S2 > 45 && S2 < 135 ? "y" : "x", w3 = [...y3], T2 = [...y3], k3 = 0, R2 = 0, X = 0, Y = 0, window.getSelection()?.removeAllRanges(), C("panstart"))), b3 && (X || Y) && C("pan"), C("move");
  }
  function G(e11) {
    if (l6 = e11, !w3.length) return;
    const t11 = o2(e11), n13 = s2(e11);
    if (D2 = t11.length, h3 = i2(n13), n13.length && I2(i2(n13)), T2 = [...y3], y3 = [...t11], w3 = [...t11], D2 > 0) C("end"), b3 = false, M5 = false, j = [];
    else {
      const e12 = m3.swipeThreshold;
      (Math.abs(z2) > e12 || Math.abs(A) > e12) && (M5 = true), b3 && C("panend"), M5 && C("swipe"), b3 || M5 || L || (C("tap"), x3 ? C("doubleTap") : p3 = setTimeout(function() {
        C("singleTap");
      }, 250)), C("end"), K();
    }
  }
  function J() {
    clearTimeout(p3), K(), b3 && C("panend"), C("end");
  }
  function K() {
    d = false, b3 = false, M5 = false, x3 = false, D2 = 0, j = [], y3 = [], T2 = [], w3 = [], X = 0, Y = 0, k3 = 0, R2 = 0, z2 = 0, A = 0, S2 = 0, v4 = void 0, window.removeEventListener("mousemove", F2), window.removeEventListener("mouseup", G), window.removeEventListener("blur", J), f || g3 || (g3 = setTimeout(() => {
      f = true, g3 = void 0;
    }, 100));
  }
  function N2(e11) {
    const t11 = e11.target;
    d = false, t11 && !e11.defaultPrevented && (f || (c2(e11), e11.stopPropagation()));
  }
  const O2 = { init: function() {
    return e10 && (e10.addEventListener("click", N2, u2), e10.addEventListener("mousedown", B2, u2), e10.addEventListener("touchstart", B2, u2), e10.addEventListener("touchmove", F2, u2), e10.addEventListener("touchend", G), e10.addEventListener("touchcancel", G)), O2;
  }, on: function(e11, t11) {
    return (function(e12, t12) {
      q2.set(e12, [...q2.get(e12) || [], t12]);
    })(e11, t11), O2;
  }, off: function(e11, t11) {
    return q2.has(e11) && q2.set(e11, q2.get(e11).filter((e12) => e12 !== t11)), O2;
  }, enable: function() {
    return E3 = true, O2;
  }, disable: function() {
    return E3 = false, w3.length && (M5 = false, z2 = 0, A = 0, X = 0, Y = 0, C("end")), K(), O2;
  }, isPointerDown: () => D2 > 0, destroy: function() {
    clearTimeout(p3), clearTimeout(g3), g3 = void 0, e10 && (e10.removeEventListener("click", N2, u2), e10.removeEventListener("mousedown", B2, u2), e10.removeEventListener("touchstart", B2, u2), e10.removeEventListener("touchmove", F2, u2), e10.removeEventListener("touchend", G), e10.removeEventListener("touchcancel", G)), e10 = null, K();
  } };
  return O2;
};
l.isClickAllowed = () => f;

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/panzoom/l10n/en_EN.js
var e6 = { IMAGE_ERROR: "This image couldn't be loaded. <br /> Please try again later.", MOVE_UP: "Move up", MOVE_DOWN: "Move down", MOVE_LEFT: "Move left", MOVE_RIGHT: "Move right", ZOOM_IN: "Zoom in", ZOOM_OUT: "Zoom out", TOGGLE_FULL: "Toggle zoom level", TOGGLE_1TO1: "Toggle zoom level", ITERATE_ZOOM: "Toggle zoom level", ROTATE_CCW: "Rotate counterclockwise", ROTATE_CW: "Rotate clockwise", FLIP_X: "Flip horizontally", FLIP_Y: "Flip vertically", RESET: "Reset", TOGGLE_FS: "Toggle fullscreen" };

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/addClass.js
var s3 = (s13, t10 = "") => {
  s13 && s13.classList && t10.split(" ").forEach((t11) => {
    t11 && s13.classList.add(t11);
  });
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/removeClass.js
var s4 = (s13, t10 = "") => {
  s13 && s13.classList && t10.split(" ").forEach((t11) => {
    t11 && s13.classList.remove(t11);
  });
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/toggleClass.js
var s5 = (s13, t10 = "", c6) => {
  s13 && s13.classList && t10.split(" ").forEach((t11) => {
    t11 && s13.classList.toggle(t11, c6 || false);
  });
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/panzoom/panzoom.js
var g = (e10) => {
  e10.cancelable && e10.preventDefault();
};
var m = (e10, t10 = 1e4) => (e10 = parseFloat(e10 + "") || 0, Math.round((e10 + Number.EPSILON) * t10) / t10);
var p = (e10) => e10 instanceof HTMLImageElement;
var v;
var y;
!(function(e10) {
  e10.Reset = "reset", e10.Zoom = "zoom", e10.ZoomIn = "zoomIn", e10.ZoomOut = "zoomOut", e10.ZoomTo = "zoomTo", e10.ToggleCover = "toggleCover", e10.ToggleFull = "toggleFull", e10.ToggleMax = "toggleMax", e10.IterateZoom = "iterateZoom", e10.Pan = "pan", e10.Swipe = "swipe", e10.Move = "move", e10.MoveLeft = "moveLeft", e10.MoveRight = "moveRight", e10.MoveUp = "moveUp", e10.MoveDown = "moveDown", e10.RotateCCW = "rotateCCW", e10.RotateCW = "rotateCW", e10.FlipX = "flipX", e10.FlipY = "flipY", e10.ToggleFS = "toggleFS";
})(v || (v = {})), (function(e10) {
  e10.Cover = "cover", e10.Full = "full", e10.Max = "max";
})(y || (y = {}));
var x = { x: 0, y: 0, scale: 1, angle: 0, flipX: 1, flipY: 1 };
var b;
!(function(e10) {
  e10[e10.Init = 0] = "Init", e10[e10.Loading = 1] = "Loading", e10[e10.Error = 2] = "Error", e10[e10.Ready = 3] = "Ready", e10[e10.Destroyed = 4] = "Destroyed";
})(b || (b = {}));
var w = { bounds: true, classes: { container: "f-panzoom", wrapper: "f-panzoom__wrapper", content: "f-panzoom__content", viewport: "f-panzoom__viewport" }, clickAction: v.ToggleFull, dblClickAction: false, gestures: {}, height: "auto", l10n: e6, maxScale: 4, minScale: 1, mouseMoveFactor: 1, panMode: "drag", protected: false, singleClickAction: false, spinnerTpl: '<div class="f-spinner"></div>', wheelAction: v.Zoom, width: "auto" };
var M;
var E = 0;
var S = 0;
var k = 0;
var T = (l6, y3 = {}, b3 = {}) => {
  let T2, A, C, F2, Z, L, P, R2, X = 0, Y = { ...w, ...y3 }, j = {}, z2 = { ...x }, D2 = { ...x };
  const I2 = [];
  function O2(e10) {
    let t10 = Y[e10];
    return t10 && "function" == typeof t10 ? t10(Se) : t10;
  }
  function W() {
    return l6 && l6.parentElement && T2 && 3 === X;
  }
  const $ = /* @__PURE__ */ new Map();
  function q2(e10, ...t10) {
    const n13 = [...$.get(e10) || []];
    Y.on && n13.push(Y.on[e10]);
    for (const e11 of n13) e11 && "function" == typeof e11 && e11(Se, ...t10);
    "*" !== e10 && q2("*", e10, ...t10);
  }
  function H2(e10) {
    if (!W()) return;
    const t10 = e10.target;
    if (n2(t10)) return;
    const o9 = Date.now(), r7 = [-e10.deltaX || 0, -e10.deltaY || 0, -e10.detail || 0].reduce(function(e11, t11) {
      return Math.abs(t11) > Math.abs(e11) ? t11 : e11;
    }), a6 = t2(-1, r7, 1);
    q2("wheel", e10, a6);
    const s13 = O2("wheelAction");
    if (!s13) return;
    if (e10.defaultPrevented) return;
    const c6 = D2.scale;
    let l7 = c6 * (a6 > 0 ? 1.5 : 0.5);
    if (s13 === v.Zoom) {
      const t11 = Math.abs(e10.deltaY) < 100 && Math.abs(e10.deltaX) < 100;
      if (o9 - S < (t11 ? 200 : 45)) return void g(e10);
      S = o9;
      const n13 = ne(), r8 = re();
      if (m(l7) < m(n13) && m(c6) <= m(n13) ? (k += Math.abs(a6), l7 = n13) : m(l7) > m(r8) && m(c6) >= m(r8) ? (k += Math.abs(a6), l7 = r8) : (k = 0, l7 = t2(n13, l7, r8)), k > 7) return;
    }
    switch (g(e10), s13) {
      case v.Pan:
        le(s13, { srcEvent: e10, deltaX: 2 * -e10.deltaX, deltaY: 2 * -e10.deltaY });
        break;
      case v.Zoom:
        le(v.ZoomTo, { srcEvent: e10, scale: l7, center: { x: e10.clientX, y: e10.clientY } });
        break;
      default:
        le(s13, { srcEvent: e10 });
    }
  }
  function _2(e10) {
    const n13 = e10.composedPath()[0];
    if (!l.isClickAllowed()) return;
    if (!n(n13) || e10.defaultPrevented) return;
    if (!l6?.contains(n13)) return;
    if (n13.hasAttribute("disabled") || n13.hasAttribute("aria-disabled") || n13.hasAttribute("data-carousel-go-prev") || n13.hasAttribute("data-carousel-go-next")) return;
    const o9 = n13.closest("[data-panzoom-action]"), i7 = o9?.dataset?.panzoomAction, r7 = o9?.dataset?.panzoomValue || "";
    if (i7) {
      switch (g(e10), i7) {
        case v.ZoomTo:
        case v.ZoomIn:
        case v.ZoomOut:
          le(i7, { scale: parseFloat(r7 || "") || void 0 });
          break;
        case v.MoveLeft:
        case v.MoveRight:
          le(i7, { deltaX: parseFloat(r7 || "") || void 0 });
          break;
        case v.MoveUp:
        case v.MoveDown:
          le(i7, { deltaY: parseFloat(r7 || "") || void 0 });
          break;
        case v.ToggleFS:
          Me();
          break;
        default:
          le(i7);
      }
      return;
    }
    if (!T2?.contains(n13)) return;
    const a6 = { srcEvent: e10 };
    if (le(O2("clickAction"), a6), O2("dblClickAction")) {
      const e11 = Date.now(), t10 = e11 - (E || e11);
      E = e11, t10 > 0 && t10 <= 250 ? (M && (clearTimeout(M), M = void 0), le(O2("dblClickAction"), a6)) : M = setTimeout(() => {
        le(O2("singleClickAction"), a6);
      }, 250);
    }
  }
  function B2(e10) {
    if (R2 = e10, !W() || !Q()) return;
    if (z2.scale <= 1 || D2.scale <= 1) return;
    if ((T2?.dataset.animationName || "").indexOf("zoom") > -1) return;
    const t10 = ee(D2.scale);
    if (!t10) return;
    const { x: n13, y: o9 } = t10;
    le(v.Pan, { deltaX: n13 - D2.x, deltaY: o9 - D2.y });
  }
  function N2() {
    l6 && (s4(l6, "is-loading"), l6.querySelector(".f-spinner")?.remove());
  }
  function V() {
    if (!l6 || !A) return;
    if (N2(), p(A) && (!A.complete || !A.naturalWidth)) return X = 2, T2?.classList.add("has-error"), void q2("error");
    q2("loaded");
    const { width: e10, height: t10 } = J();
    p(A) && (A.setAttribute("width", e10 + ""), A.setAttribute("height", t10 + "")), T2 && (s4(T2, "has-error"), p(A) && (T2.setAttribute("width", e10 + ""), T2.setAttribute("height", t10 + ""), T2.style.aspectRatio = `${e10 / t10 || ""}`)), L = c().on("start", (e11, t11) => {
      void 0 !== t11.angle && (t11.angle = 90 * Math.round(t11.angle / 90)), void 0 !== t11.flipX && (t11.flipX = t11.flipX > 0 ? 1 : -1), void 0 !== t11.flipY && (t11.flipY = t11.flipY > 0 ? 1 : -1), D2 = { ...x, ...t11 }, ce(), q2("animationStart");
    }).on("pause", (e11) => {
      D2 = { ...x, ...e11 };
    }).on("step", (e11) => {
      if (!W()) return void L?.end();
      if (z2 = { ...x, ...e11 }, Q() || !O2("bounds") || xe() || D2.scale > z2.scale || D2.scale < oe()) return void ue();
      const t11 = ae(D2.scale);
      let n14 = false, o9 = false, r7 = false, a6 = false;
      z2.x < t11.x[0] && (n14 = true), z2.x > t11.x[1] && (o9 = true), z2.y < t11.y[0] && (a6 = true), z2.y > t11.y[1] && (r7 = true);
      let s13 = false, c6 = false, l7 = false, u6 = false;
      D2.x < t11.x[0] && (s13 = true), D2.x > t11.x[1] && (c6 = true), D2.y < t11.y[0] && (u6 = true), D2.y > t11.y[1] && (l7 = true);
      let f3 = false;
      (o9 && c6 || n14 && s13) && (D2.x = t2(t11.x[0], D2.x, t11.x[1]), f3 = true), (r7 && l7 || a6 && u6) && (D2.y = t2(t11.y[0], D2.y, t11.y[1]), f3 = true), f3 && L && L.spring({ tension: 94, friction: 17, maxSpeed: 555 * D2.scale, restDelta: 0.1, restSpeed: 0.1, velocity: L.getCurrentVelocities() }).from(z2).to(D2).start(), ue();
    }).on("end", () => {
      Z?.isPointerDown() || se(), L?.isRunning() || (ce(), q2("animationEnd"));
    }), (function() {
      const e11 = O2("gestures");
      if (!e11) return;
      if (!F2 || !A) return;
      let t11 = false;
      Z = l(F2, e11).on("start", (e12) => {
        if (!O2("gestures")) return;
        if (!L) return;
        if (!W() || Q()) return;
        const n14 = e12.srcEvent;
        (z2.scale > 1 || ye(z2.angle) || e12.currentTouch.length > 1) && (n14?.stopPropagation(), L.pause(), t11 = true), 1 === e12.currentTouch.length && q2("touchStart");
      }).on("move", (e12) => {
        t11 && (1 !== D2.scale || ye(D2.angle) || e12.currentTouch.length > 1) && (g(e12.srcEvent), e12.srcEvent?.stopPropagation());
      }).on("pan", (e12) => {
        if (!t11) return;
        const n14 = e12.srcEvent;
        (1 !== D2.scale || ye(D2.angle) || e12.currentTouch.length > 1) && (g(n14), le(v.Pan, e12));
      }).on("swipe", (e12) => {
        t11 && (D2.scale > 1 || ye(D2.angle)) && le(v.Swipe, e12);
      }).on("tap", (e12) => {
        q2("click", e12);
      }).on("singleTap", (e12) => {
        q2("singleClick", e12);
      }).on("doubleTap", (e12) => {
        q2("dblClick", e12);
      }).on("pinch", (e12) => {
        t11 && (e12.scale > oe() ? le(v.ZoomIn, e12) : e12.scale < oe() ? le(v.ZoomOut, e12) : le(v.Pan, e12));
      }).on("end", (e12) => {
        t11 && (e12.currentTouch.length ? (e12.srcEvent.stopPropagation(), g(e12.srcEvent), L?.end()) : (t11 = false, ce(), se(), q2("touchEnd")));
      }).init();
    })(), F2 && (F2.addEventListener("wheel", H2, { passive: false }), I2.push(() => {
      F2?.removeEventListener("wheel", H2, { passive: false });
    })), l6?.addEventListener("click", _2), document?.addEventListener("mousemove", B2), I2.push(() => {
      l6?.removeEventListener("click", _2), document?.removeEventListener("mousemove", B2);
    });
    const n13 = U();
    z2 = { ...n13 }, D2 = { ...n13 }, X = 3, ue(), ce(), q2("ready"), requestAnimationFrame(() => {
      3 === X && (N2(), F2 && (F2.style.visibility = ""));
    });
  }
  function U() {
    const e10 = { ...O2("startPos") || {} };
    let t10 = e10.scale, n13 = 1;
    n13 = "string" == typeof t10 ? te(t10) : "number" == typeof t10 ? t10 : oe();
    const o9 = { ...x, ...e10, scale: n13 }, i7 = Q() ? ee(n13) : void 0;
    if (i7) {
      const { x: e11, y: t11 } = i7;
      o9.x = e11, o9.y = t11;
    }
    return o9;
  }
  function G() {
    const e10 = { top: 0, left: 0, width: 0, height: 0 };
    if (T2) {
      const t10 = T2.getBoundingClientRect();
      ye(D2.angle) ? (e10.top = t10.top + 0.5 * t10.height - 0.5 * t10.width, e10.left = t10.left + 0.5 * t10.width - 0.5 * t10.height, e10.width = t10.height, e10.height = t10.width) : (e10.top = t10.top, e10.left = t10.left, e10.width = t10.width, e10.height = t10.height);
    }
    return e10;
  }
  function J() {
    let t10 = O2("width"), n13 = O2("height");
    if (A && "auto" === t10) {
      const e10 = A.getAttribute("width");
      t10 = e10 ? parseFloat(e10 + "") : void 0 !== A.dataset.width ? parseFloat(A.dataset.width + "") : p(F2) ? F2.naturalWidth : p(A) ? A.naturalWidth : T2?.getBoundingClientRect().width || 0;
    } else t10 = t(t10) ? parseFloat(t10) : t10;
    if (A && "auto" === n13) {
      const e10 = A.getAttribute("height");
      n13 = e10 ? parseFloat(e10 + "") : void 0 !== A.dataset.height ? parseFloat(A.dataset.height + "") : p(F2) ? F2.naturalHeight : p(A) ? A.naturalHeight : T2?.getBoundingClientRect().height || 0;
    } else n13 = t(n13) ? parseFloat(n13) : n13;
    return { width: t10, height: n13 };
  }
  function K() {
    const e10 = G();
    return { width: e10.width, height: e10.height };
  }
  function Q() {
    return "mousemove" === O2("panMode") && matchMedia("(hover: hover)").matches;
  }
  function ee(e10) {
    const t10 = R2 || O2("event"), n13 = T2?.getBoundingClientRect();
    if (!t10 || !n13 || e10 <= 1) return { x: 0, y: 0 };
    const o9 = (t10.clientX || 0) - n13.left, r7 = (t10.clientY || 0) - n13.top, { width: a6, height: s13 } = K(), c6 = ae(e10);
    if (e10 > 1) {
      const t11 = O2("mouseMoveFactor");
      t11 > 1 && (e10 *= t11);
    }
    let l7 = a6 * e10, u6 = s13 * e10, f3 = 0.5 * (l7 - a6) - o9 / a6 * 100 / 100 * (l7 - a6), d4 = 0.5 * (u6 - s13) - r7 / s13 * 100 / 100 * (u6 - s13);
    return f3 = t2(c6.x[0], f3, c6.x[1]), d4 = t2(c6.y[0], d4, c6.y[1]), { x: f3, y: d4 };
  }
  function te(e10) {
    if (!e10) return D2.scale;
    if (!l6) return 1;
    const t10 = l6.getBoundingClientRect(), n13 = G(), { width: o9, height: r7 } = J(), a6 = (e11) => {
      if ("number" == typeof e11) return e11;
      switch (e11) {
        case "min":
        case "base":
          return 1;
        case "cover":
          return Math.max(t10.height / n13.height, t10.width / n13.width) || 1;
        case "full":
        case "max": {
          const e12 = ye(D2.angle) ? r7 : o9;
          return e12 && n13.width ? e12 / n13.width : 1;
        }
      }
    }, s13 = O2("minScale"), c6 = O2("maxScale"), u6 = Math.min(a6("full"), a6(s13)), f3 = "number" == typeof c6 ? a6("full") * c6 : Math.min(a6("full"), a6(c6));
    switch (e10) {
      case "min":
        return u6;
      case "base":
        return t2(u6, 1, f3);
      case "cover":
        return a6("cover");
      case "full":
        return Math.min(f3, a6("full"));
      case "max":
        return f3;
    }
  }
  function ne() {
    return te("min");
  }
  function oe() {
    return te("base");
  }
  function ie() {
    return te("full");
  }
  function re() {
    return te("max");
  }
  function ae(e10) {
    const t10 = { x: [0, 0], y: [0, 0] }, n13 = l6?.getBoundingClientRect();
    if (!n13) return t10;
    const o9 = G(), i7 = n13.width, r7 = n13.height;
    let a6 = o9.width, s13 = o9.height, c6 = e10 = void 0 === e10 ? D2.scale : e10, u6 = e10;
    if (Q() && e10 > 1) {
      const t11 = O2("mouseMoveFactor");
      t11 > 1 && (a6 * e10 > i7 + 0.01 && (c6 *= t11), s13 * e10 > r7 + 0.01 && (u6 *= t11));
    }
    if (a6 *= c6, s13 *= u6, a6 > i7) {
      t10.x[0] = 0.5 * (i7 - a6), t10.x[1] = 0.5 * (a6 - i7);
      const e11 = 0.5 * (o9.left - n13.left), r8 = 0.5 * (o9.left + o9.width - n13.right);
      t10.x[0] -= e11 + r8, t10.x[1] -= e11 + r8;
    }
    if (s13 > r7) {
      t10.y[0] = 0.5 * (r7 - s13), t10.y[1] = 0.5 * (s13 - r7);
      const e11 = 0.5 * (o9.top - n13.top), i8 = 0.5 * (o9.top + o9.height - n13.bottom);
      t10.y[0] -= e11 + i8, t10.y[1] -= e11 + i8;
    }
    return t10;
  }
  function se() {
    if (!W()) return;
    if (!O2("bounds")) return;
    if (!L) return;
    const e10 = ne(), t10 = re(), n13 = t2(e10, D2.scale, t10);
    if (D2.scale < e10 - 0.01 || D2.scale > t10 + 0.01) return void le(v.ZoomTo, { scale: n13 });
    if (L.isRunning()) return;
    if (xe()) return;
    const o9 = ae(n13);
    D2.x < o9.x[0] || D2.x > o9.x[1] || D2.y < o9.y[0] || D2.y > o9.y[1] ? (D2.x = t2(o9.x[0], D2.x, o9.x[1]), D2.y = t2(o9.y[0], D2.y, o9.y[1]), L.spring({ tension: 170, friction: 17, restDelta: 1e-3, restSpeed: 1e-3, maxSpeed: 1 / 0, velocity: L.getCurrentVelocities() }), L.from(z2).to(D2).start()) : ue();
  }
  function ce(e10) {
    if (!W()) return;
    const t10 = ve(), n13 = xe(), o9 = be(), i7 = we(), r7 = de(), a6 = he();
    s5(T2, "is-fullsize", i7), s5(T2, "is-expanded", o9), s5(T2, "is-dragging", n13), s5(T2, "can-drag", t10), s5(T2, "will-zoom-in", r7), s5(T2, "will-zoom-out", a6);
    const s13 = me(), c6 = pe(), u6 = ge(), f3 = !W();
    for (const t11 of (e10 || l6)?.querySelectorAll("[data-panzoom-action]") || []) {
      const e11 = t11.dataset.panzoomAction;
      let n14 = false;
      if (f3) n14 = true;
      else switch (e11) {
        case v.ZoomIn:
          s13 || (n14 = true);
          break;
        case v.ZoomOut:
          u6 || (n14 = true);
          break;
        case v.ToggleFull: {
          c6 || u6 || (n14 = true);
          const e12 = t11.querySelector("g");
          e12 && (e12.style.display = i7 && !n14 ? "none" : "");
          break;
        }
        case v.IterateZoom: {
          s13 || u6 || (n14 = true);
          const e12 = t11.querySelector("g");
          e12 && (e12.style.display = s13 || n14 ? "" : "none");
          break;
        }
        case v.ToggleCover:
        case v.ToggleMax:
          s13 || u6 || (n14 = true);
      }
      n14 ? (t11.setAttribute("aria-disabled", ""), t11.setAttribute("tabindex", "-1")) : (t11.removeAttribute("aria-disabled"), t11.removeAttribute("tabindex"));
    }
  }
  function le(e10, t10) {
    if (!(e10 && l6 && A && L && W())) return;
    if (e10 === v.Swipe && Math.abs(L.getCurrentVelocities().scale) > 0.01) return;
    const n13 = { ...D2 };
    let o9 = { ...D2 }, r7 = ae(Q() ? n13.scale : z2.scale);
    const c6 = L.getCurrentVelocities(), u6 = G();
    t10 = t10 || {};
    const f3 = (t10.currentTouch?.length || 0) > 1, d4 = t10.velocityX || 0, g3 = t10.velocityY || 0;
    let m3 = t10.center;
    t10.srcEvent && (m3 = i2(s2(t10.srcEvent)));
    let p3 = t10.deltaX || 0, y4 = t10.deltaY || 0;
    switch (e10) {
      case v.MoveRight:
        p3 = t10.deltaX || 100;
        break;
      case v.MoveLeft:
        p3 = t10.deltaX || -100;
        break;
      case v.MoveUp:
        y4 = t10.deltaY || -100;
        break;
      case v.MoveDown:
        y4 = t10.deltaY || 100;
    }
    let b4 = [];
    if ("number" == typeof e10) o9.scale = e10;
    else switch (e10) {
      case v.Reset:
        o9 = { ...x }, o9.scale = oe();
        break;
      case v.ZoomTo:
      case v.ZoomIn:
      case v.ZoomOut:
      case v.ToggleCover:
      case v.ToggleFull:
      case v.ToggleMax:
      case v.IterateZoom:
      case v.Zoom:
        o9.scale = fe(e10, t10);
        break;
      case v.Pan:
      case v.Move:
      case v.MoveLeft:
      case v.MoveRight:
      case v.MoveUp:
      case v.MoveDown:
        if (xe()) {
          let e11 = 1, t11 = 1;
          o9.x <= r7.x[0] && d4 <= 0 && (e11 = Math.max(0.01, 1 - Math.abs(1 / u6.width * Math.abs(o9.x - r7.x[0]))), e11 *= 0.2), o9.x >= r7.x[1] && d4 >= 0 && (e11 = Math.max(0.01, 1 - Math.abs(1 / u6.width * Math.abs(o9.x - r7.x[1]))), e11 *= 0.2), o9.y <= r7.y[0] && g3 <= 0 && (t11 = Math.max(0.01, 1 - Math.abs(1 / u6.height * Math.abs(o9.y - r7.y[0]))), t11 *= 0.2), o9.y >= r7.y[1] && g3 >= 0 && (t11 = Math.max(0.01, 1 - Math.abs(1 / u6.height * Math.abs(o9.y - r7.y[1]))), t11 *= 0.2), o9.x += p3 * e11, o9.y += y4 * t11;
        } else o9.x = t2(r7.x[0], o9.x + p3, r7.x[1]), o9.y = t2(r7.y[0], o9.y + y4, r7.y[1]);
        break;
      case v.Swipe:
        const n14 = (e11 = 0) => Math.sign(e11) * Math.pow(Math.abs(e11), 1.5);
        o9.x += t2(-1e3, n14(d4), 1e3), o9.y += t2(-1e3, n14(g3), 1e3), g3 && !d4 && (o9.x = t2(r7.x[0], o9.x, r7.x[1])), !g3 && d4 && (o9.y = t2(r7.y[0], o9.y, r7.y[1])), c6.x = d4, c6.y = g3;
        break;
      case v.RotateCW:
        o9.angle += 90;
        break;
      case v.RotateCCW:
        o9.angle -= 90;
        break;
      case v.FlipX:
        o9.flipX *= -1;
        break;
      case v.FlipY:
        o9.flipY *= -1;
    }
    if (void 0 !== z2.angle && Math.abs(z2.angle) >= 360 && (o9.angle -= 360 * Math.floor(z2.angle / 360), z2.angle -= 360 * Math.floor(z2.angle / 360)), b4.length) {
      const e11 = b4.findIndex((e12) => e12 > o9.scale + 1e-4);
      o9.scale = b4[e11] || b4[0];
    }
    if (f3 && (o9.scale = t2(ne() * (f3 ? 0.8 : 1), o9.scale, re() * (f3 ? 1.6 : 1))), Q()) {
      const e11 = ee(o9.scale);
      if (e11) {
        const { x: t11, y: n14 } = e11;
        o9.x = t11, o9.y = n14;
      }
    } else if (Math.abs(o9.scale - n13.scale) > 1e-4) {
      let e11 = 0, t11 = 0;
      if (m3) e11 = m3.x, t11 = m3.y;
      else {
        const n14 = l6.getBoundingClientRect();
        e11 = n14.x + 0.5 * n14.width, t11 = n14.y + 0.5 * n14.height;
      }
      let a6 = e11 - u6.left, s13 = t11 - u6.top;
      a6 -= 0.5 * u6.width, s13 -= 0.5 * u6.height;
      const c7 = (a6 - n13.x) / n13.scale, d5 = (s13 - n13.y) / n13.scale;
      o9.x = a6 - c7 * o9.scale, o9.y = s13 - d5 * o9.scale, !f3 && O2("bounds") && (r7 = ae(o9.scale), o9.x = t2(r7.x[0], o9.x, r7.x[1]), o9.y = t2(r7.y[0], o9.y, r7.y[1]));
    }
    if (e10 === v.Swipe) {
      let e11 = 94, t11 = 17, n14 = 500 * o9.scale, i7 = c6;
      L.spring({ tension: e11, friction: t11, maxSpeed: n14, restDelta: 0.1, restSpeed: 0.1, velocity: i7 });
    } else e10 === v.Pan || f3 ? L.spring({ tension: 900, friction: 17, restDelta: 0.01, restSpeed: 0.01, maxSpeed: 1 }) : L.spring({ tension: 170, friction: 17, restDelta: 1e-3, restSpeed: 1e-3, maxSpeed: 1 / 0, velocity: c6 });
    if (0 === t10.velocity || n3(z2, o9)) z2 = { ...o9 }, D2 = { ...o9 }, L.end(), ue(), ce();
    else {
      if (n3(D2, o9)) return;
      L.from(z2).to(o9).start();
    }
    q2("action", e10);
  }
  function ue() {
    if (!A || !T2 || !F2) return;
    const { width: e10, height: t10 } = J();
    Object.assign(T2.style, { maxWidth: `min(${e10}px, 100%)`, maxHeight: `min(${t10}px, 100%)` });
    const n13 = (function() {
      const { width: e11, height: t11 } = J(), { width: n14, height: o10 } = K();
      if (!l6) return { x: 0, y: 0, width: 0, height: 0, scale: 0, flipX: 0, flipY: 0, angle: 0, fitWidth: n14, fitHeight: o10, fullWidth: e11, fullHeight: t11 };
      let { x: i8, y: r8, scale: a7, angle: s14, flipX: c7, flipY: u7 } = z2, f4 = 1 / ie(), d5 = e11, h3 = t11, g3 = z2.scale * f4, m3 = D2.scale * f4;
      const p3 = Math.max(n14, o10), v4 = Math.min(n14, o10);
      e11 > t11 ? (d5 = p3, h3 = v4) : (d5 = v4, h3 = p3);
      g3 = e11 > t11 ? p3 * a7 / e11 || 1 : p3 * a7 / t11 || 1;
      let y4 = d5 ? e11 * m3 : 0, x3 = h3 ? t11 * m3 : 0, b4 = d5 && h3 ? e11 * g3 / y4 : 0;
      return i8 = i8 + 0.5 * d5 - 0.5 * y4, r8 = r8 + 0.5 * h3 - 0.5 * x3, { x: i8, y: r8, width: y4, height: x3, scale: b4, flipX: c7, flipY: u7, angle: s14, fitWidth: n14, fitHeight: o10, fullWidth: e11, fullHeight: t11 };
    })(), { x: o9, y: i7, width: r7, height: a6, scale: s13, angle: c6, flipX: u6, flipY: f3 } = n13;
    let d4 = `translate(${m(o9, 100)}px, ${m(i7, 100)}px)`;
    d4 += 1 !== u6 || 1 !== f3 ? ` scaleX(${m(s13 * u6)}) scaleY(${m(s13 * f3)})` : ` scale(${m(s13)})`, 0 !== c6 && (d4 += ` rotate(${c6}deg)`), F2.style.width = `${m(r7)}px`, F2.style.height = `${m(a6)}px`, F2.style.transform = `${d4}`, q2("render");
  }
  function fe(e10 = O2("clickAction"), t10 = {}) {
    let n13 = D2.scale, o9 = oe(), r7 = [];
    if ("number" == typeof e10) o9 = e10;
    else if (e10) {
      switch (e10) {
        case v.ZoomTo:
          o9 = t10.scale || 1;
          break;
        case v.ZoomIn:
          o9 = n13 * (t10.scale || 2);
          break;
        case v.ZoomOut:
          o9 = n13 * (t10.scale || 0.5);
          break;
        case v.ToggleCover:
          r7 = [oe(), te("cover")];
          break;
        case v.ToggleFull:
          r7 = [oe(), ie()];
          break;
        case v.ToggleMax:
          r7 = [oe(), re()];
          break;
        case v.IterateZoom:
          r7 = [oe(), ie(), re()];
          break;
        case v.Zoom: {
          const e11 = ie();
          o9 = n13 >= e11 - 0.05 ? oe() : Math.min(e11, n13 * (t10.scale || 2));
          break;
        }
      }
      if (r7.length) {
        o9 = r7.find((e11) => e11 > n13 + 1e-4) ?? oe();
      }
    }
    return e10 !== v.ZoomTo && (o9 = t2(ne(), o9, re())), o9;
  }
  function de() {
    return !!(W() && fe() > D2.scale);
  }
  function he() {
    return !!(W() && fe() < D2.scale);
  }
  function ge() {
    return !!(W() && D2.scale > ne());
  }
  function me() {
    return !!(W() && D2.scale < re());
  }
  function pe() {
    return !!(W() && D2.scale < ie());
  }
  function ve() {
    return !(!W() || !be() && !ye(D2.angle) || !Z || Q());
  }
  function ye(e10) {
    return 90 === Math.abs(e10 % 180);
  }
  function xe() {
    return !(!W() || !Z?.isPointerDown() || Q());
  }
  function be() {
    return !!(W() && D2.scale > oe());
  }
  function we() {
    return !!(W() && D2.scale >= ie());
  }
  function Me() {
    const e10 = "in-fullscreen", t10 = "with-panzoom-in-fullscreen";
    l6?.classList.toggle(e10);
    const n13 = l6?.classList.contains(e10);
    n13 ? (document.documentElement.classList.add(t10), document.addEventListener("keydown", Ee, true)) : (document.documentElement.classList.remove(t10), document.removeEventListener("keydown", Ee, true)), ue(), q2(n13 ? "enterFS" : "exitFS");
  }
  function Ee(e10) {
    "Escape" !== e10.key || e10.defaultPrevented || Me();
  }
  const Se = { canDrag: ve, canZoomIn: me, canZoomOut: ge, canZoomToFull: pe, destroy: function() {
    q2("destroy");
    for (const e10 of Object.values(j)) e10?.destroy(Se);
    for (const e10 of I2) e10();
    return T2 && (T2.style.aspectRatio = "", T2.style.maxWidth = "", T2.style.maxHeight = ""), F2 && (F2.style.width = "", F2.style.height = "", F2.style.transform = ""), T2 = void 0, A = void 0, F2 = void 0, z2 = { ...x }, D2 = { ...x }, L?.destroy(), L = void 0, Z?.destroy(), Z = void 0, X = 4, Se;
  }, emit: q2, execute: le, getBoundaries: ae, getContainer: function() {
    return l6;
  }, getContent: function() {
    return A;
  }, getFullDim: J, getGestures: function() {
    return Z;
  }, getMousemovePos: ee, getOptions: function() {
    return Y;
  }, getPlugins: function() {
    return j;
  }, getScale: te, getStartPosition: U, getState: function() {
    return X;
  }, getTransform: function(e10) {
    return true === e10 ? D2 : z2;
  }, getTween: function() {
    return L;
  }, getViewport: function() {
    return F2;
  }, getWrapper: function() {
    return T2;
  }, init: function() {
    return X = 0, q2("init"), (function() {
      for (const [e10, t10] of Object.entries({ ...b3, ...Y.plugins || {} })) if (e10 && !j[e10] && t10 instanceof Function) {
        const n13 = t10();
        n13.init(Se), j[e10] = n13;
      }
      q2("initPlugins");
    })(), (function() {
      const e10 = { ...w.classes, ...O2("classes") }, t10 = e10.content?.split(" ").shift(), n13 = e10.wrapper?.split(" ").shift(), o9 = e10.viewport?.split(" ").shift();
      if (!t10 || !n13 || !o9) return;
      if (!l6) return;
      if (s3(l6, e10.container), A = l6.querySelector(`.${t10}:not(.is-clone)`), !A) return;
      A.setAttribute("draggable", "false"), T2 = l6.querySelector(`.${n13}`), T2 || (T2 = document.createElement("div"), s3(T2, e10.wrapper), A.insertAdjacentElement("beforebegin", T2), T2.insertAdjacentElement("afterbegin", A));
      F2 = l6.querySelector(`.${o9}`), F2 || (F2 = document.createElement("div"), s3(F2, e10.viewport), T2.insertAdjacentElement("beforeend", F2));
      F2.contains(A) || F2.insertAdjacentElement("afterbegin", A);
      C = l6.querySelector(`.${t10}.is-clone`), C || (C = A.cloneNode(true), C.removeAttribute("id"), s3(C, "is-clone"), T2.insertAdjacentElement("afterbegin", C));
      A instanceof HTMLPictureElement && (A = A.querySelector("img"));
      C instanceof HTMLPictureElement && (C = C.querySelector("img"));
      F2 instanceof HTMLPictureElement && (F2 = F2.querySelector("img"));
      if (F2 && (F2.style.visibility = "hidden", O2("protected"))) {
        F2.addEventListener("contextmenu", (e12) => {
          g(e12);
        });
        const e11 = document.createElement("div");
        s3(e11, "f-panzoom__protected"), F2.appendChild(e11);
      }
      q2("initLayout");
    })(), (function() {
      if (l6 && T2 && !P) {
        let e10 = null;
        P = new ResizeObserver(() => {
          W() && (e10 = e10 || requestAnimationFrame(() => {
            W() && (ce(), se(), q2("refresh")), e10 = null;
          }));
        }), P.observe(T2), I2.push(() => {
          P?.disconnect(), P = void 0, e10 && (cancelAnimationFrame(e10), e10 = null);
        });
      }
    })(), (function() {
      if (!l6 || !A) return;
      if (!p(A) || !p(C)) return void V();
      const e10 = () => {
        A && p(A) && A.decode().then(() => {
          V();
        }).catch(() => {
          V();
        });
      };
      if (X = 1, l6.classList.add("is-loading"), q2("loading"), C.src && C.complete) return void e10();
      (function() {
        if (!l6) return;
        const e11 = l6?.querySelector(".f-spinner");
        if (e11) return;
        const t10 = O2("spinnerTpl"), n13 = e2(t10);
        n13 && (n13.classList.add("f-spinner"), l6.classList.add("is-loading"), T2?.insertAdjacentElement("afterbegin", n13));
      })(), C.addEventListener("load", e10, false), C.addEventListener("error", e10, false), I2.push(() => {
        C?.removeEventListener("load", e10, false), C?.removeEventListener("error", e10, false);
      });
    })(), Se;
  }, isDragging: xe, isExpanded: be, isFullsize: we, isMousemoveMode: Q, localize: function(e10, t10 = []) {
    const n13 = O2("l10n") || {};
    e10 = String(e10).replace(/\{\{(\w+)\}\}/g, (e11, t11) => n13[t11] || e11);
    for (let n14 = 0; n14 < t10.length; n14++) e10 = e10.split(t10[n14][0]).join(t10[n14][1]);
    return e10 = e10.replace(/\{\{(.*?)\}\}/g, (e11, t11) => t11);
  }, off: function(e10, t10) {
    for (const n13 of e10 instanceof Array ? e10 : [e10]) $.has(n13) && $.set(n13, $.get(n13).filter((e11) => e11 !== t10));
    return Se;
  }, on: function(e10, t10) {
    for (const n13 of e10 instanceof Array ? e10 : [e10]) $.set(n13, [...$.get(n13) || [], t10]);
    return Se;
  }, toggleFS: Me, updateControls: ce, version: "6.1.15", willZoomIn: de, willZoomOut: he };
  return Se;
};
T.l10n = { en_EN: e6 }, T.getDefaults = () => w;

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/getDirectChildren.js
var e7 = (e10, o9) => {
  let t10 = [];
  return e10.childNodes.forEach((e11) => {
    e11.nodeType !== Node.ELEMENT_NODE || o9 && !e11.matches(o9) || t10.push(e11);
  }), t10;
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/extend.js
var r3 = (t10, ...e10) => {
  const n13 = e10.length;
  for (let c6 = 0; c6 < n13; c6++) {
    const n14 = e10[c6] || {};
    Object.entries(n14).forEach(([e11, n15]) => {
      const c7 = Array.isArray(n15) ? [] : {};
      t10[e11] || Object.assign(t10, { [e11]: c7 }), t3(n15) ? Object.assign(t10[e11], r3(t10[e11], n15)) : Array.isArray(n15) ? Object.assign(t10, { [e11]: [...n15] }) : Object.assign(t10, { [e11]: n15 });
    });
  }
  return t10;
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/map.js
var t5 = function(t10 = 0, n13 = 0, r7 = 0, c6 = 0, m3 = 0, p3 = false) {
  const s13 = (t10 - n13) / (r7 - n13) * (m3 - c6) + c6;
  return p3 ? c6 < m3 ? t2(c6, s13, m3) : t2(m3, s13, c6) : s13;
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/carousel/l10n/en_EN.js
var o3 = { ...e6, ERROR: "Something went wrong. <br /> Please try again later.", NEXT: "Next page", PREV: "Previous page", GOTO: "Go to page #%d", DOWNLOAD: "Download", TOGGLE_FULLSCREEN: "Toggle full-screen mode", TOGGLE_EXPAND: "Toggle full-size mode", TOGGLE_THUMBS: "Toggle thumbnails", TOGGLE_AUTOPLAY: "Toggle slideshow" };

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/carousel/carousel.state.js
var o4;
var d2;
!(function(o9) {
  o9[o9.Init = 0] = "Init", o9[o9.Ready = 1] = "Ready", o9[o9.Destroyed = 2] = "Destroyed";
})(o4 || (o4 = {})), (function(o9) {
  o9[o9.Loading = 0] = "Loading", o9[o9.Loaded = 1] = "Loaded", o9[o9.Error = 2] = "Error";
})(d2 || (d2 = {}));

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/carousel/carousel.js
var h = (t10) => {
  t10.cancelable && t10.preventDefault();
};
var v2 = { adaptiveHeight: false, center: true, classes: { container: "f-carousel", isEnabled: "is-enabled", isLTR: "is-ltr", isRTL: "is-rtl", isHorizontal: "is-horizontal", isVertical: "is-vertical", hasAdaptiveHeight: "has-adaptive-height", viewport: "f-carousel__viewport", slide: "f-carousel__slide", isSelected: "is-selected" }, dragFree: false, enabled: true, errorTpl: '<div class="f-html">{{ERROR}}</div>', fill: true, infinite: true, initialPage: 0, l10n: o3, rtl: false, slides: [], slidesPerPage: "auto", spinnerTpl: '<div class="f-spinner"></div>', transition: "fade", tween: { clamp: true, mass: 1, tension: 160, friction: 25, restDelta: 1, restSpeed: 1, velocity: 0 }, vertical: false };
var b2;
var y2;
var E2 = 0;
var x2 = (t10) => document.getElementById(`${t10.split("#").pop()}`);
var M2 = (g3, w3 = {}, S2 = {}) => {
  E2++;
  let A, L, P, T2, j, R2 = 0, C = { ...v2 }, H2 = { ...v2 }, V = {}, O2 = null, $ = null, D2 = 0, I2 = 0, q2 = 0, k3 = false, F2 = false, z2 = false, B2 = "height", N2 = 0, _2 = true, G = 0, X = 0, Y = 0, W = 0, J = "*", K = [], Q = [];
  const U = /* @__PURE__ */ new Set();
  let Z = [], tt = [], et = 0, nt = 0, it = 0;
  function ot(t10, ...e10) {
    let n13 = H2[t10];
    return n13 && n13 instanceof Function ? n13(zt, ...e10) : n13;
  }
  function st(t10, e10 = []) {
    const n13 = ot("l10n") || {};
    t10 = String(t10).replace(/\{\{(\w+)\}\}/g, (t11, e11) => n13[e11] || t11);
    for (let n14 = 0; n14 < e10.length; n14++) t10 = t10.split(e10[n14][0]).join(e10[n14][1]);
    return t10 = t10.replace(/\{\{(.*?)\}\}/g, (t11, e11) => e11);
  }
  const rt = /* @__PURE__ */ new Map();
  function lt(t10, ...e10) {
    const n13 = [...rt.get(t10) || []];
    H2.on && n13.push(H2.on[t10]);
    for (const t11 of n13) t11 && t11 instanceof Function && t11(zt, ...e10);
    "click" === t10 && Ct(e10[0]), "*" !== t10 && lt("*", t10, ...e10);
  }
  function at() {
    const e10 = r3({}, v2, C);
    let n13 = "";
    const i7 = C.breakpoints || {};
    for (const [t10, o9] of Object.entries(i7)) window.matchMedia(t10).matches && (n13 += t10, r3(e10, o9));
    if (void 0 === j || n13 !== j) {
      if (j = n13, 0 !== R2) {
        let t10 = tt[G]?.slides[0]?.index;
        void 0 === t10 && (t10 = H2.initialSlide), e10.initialSlide = t10, e10.slides = [];
        for (const t11 of K) t11.isVirtual && e10.slides.push(t11);
      }
      qt(), H2 = e10, false !== ot("enabled") && (R2 = 0, lt("init"), (function() {
        for (const [t10, e11] of Object.entries({ ...S2, ...H2.plugins || {} })) if (t10 && !V[t10] && e11 instanceof Function) {
          const n14 = e11();
          n14.init(zt, M2), V[t10] = n14;
        }
        lt("initPlugins");
      })(), (function() {
        if (!O2) return;
        const e11 = ot("classes") || {};
        s3(O2, e11.container);
        const n14 = ot("style");
        if (n14 && t3(n14)) for (const [t10, e12] of Object.entries(n14)) O2.style.setProperty(t10, e12);
        $ = Array.from(O2.querySelectorAll(`.${e11.viewport}`)).filter((t10) => t10.closest(`.${e11.container}`) === O2).pop() || null, $ || ($ = document.createElement("div"), s3($, e11.viewport), $.append(...e7(O2, `.${e11.slide}`)), O2.insertAdjacentElement("afterbegin", $)), O2.carousel = zt, lt("initLayout");
      })(), (function() {
        if (!$) return;
        const t10 = ot("classes") || {};
        K = [], [...e7($, `.${t10.slide}`)].forEach((t11) => {
          if (t11.parentElement) {
            const e11 = xt({ el: t11, isVirtual: false, ...t11.dataset || {} });
            lt("createSlide", e11), K.push(e11);
          }
        }), At();
        for (const t11 of K) lt("addSlide", t11);
        Et(ot("slides"));
        for (const t11 of K) {
          const e11 = t11.el;
          e11?.parentElement === $ && (s3(e11, H2.classes.slide), s3(e11, t11.class), Ot(t11), lt("attachSlideEl", t11));
        }
        lt("initSlides");
      })(), Lt(), R2 = 1, s3(O2, (ot("classes") || {}).isEnabled || ""), It(), pt(), L = c().on("start", () => {
        A && A.isPointerDown() || (dt(), It());
      }).on("step", (t10) => {
        const e11 = N2;
        N2 = t10.pos, N2 !== e11 && (_2 = false, It());
      }).on("end", (t10) => {
        A?.isPointerDown() || (N2 = t10.pos, L && !k3 && (N2 < Y || N2 > W) ? L.spring({ clamp: true, mass: 1, tension: 200, friction: 25, velocity: 0, restDelta: 1, restSpeed: 1 }).from({ pos: N2 }).to({ pos: t2(Y, N2, W) }).start() : _2 || (_2 = true, lt("settle")));
      }), ft(), (function() {
        if (!O2 || !$) return;
        O2.addEventListener("click", Rt), document.addEventListener("mousemove", ct), y2 || (y2 = function(t11) {
          const e11 = t11.target;
          if (!(e11 instanceof Element)) return;
          const n14 = e11.closest("[data-carousel-target]"), i8 = n14?.dataset?.carouselTarget;
          if (i8) {
            const e12 = x2(i8), n15 = e12?.carousel;
            n15?.emit("click", t11);
          }
        }, document.addEventListener("click", y2));
        const t10 = $.getBoundingClientRect();
        if (et = t10.height, nt = t10.width, !P) {
          let t11 = null;
          P = new ResizeObserver(() => {
            t11 || (t11 = requestAnimationFrame(() => {
              !(function() {
                if (1 !== R2 || !$) return;
                const t12 = tt.length, e11 = $.getBoundingClientRect(), n14 = e11.height, i8 = e11.width;
                t12 > 1 && (z2 && Math.abs(n14 - et) < 0.5 || !z2 && Math.abs(i8 - nt) < 0.5) || (Lt(), ft(), et = n14, nt = i8, z2 && !et || !z2 && !nt || O2 && $ && (t12 === tt.length && A?.isPointerDown() || (ot("dragFree") && (k3 || N2 > Y && N2 < W) ? (dt(), It()) : $t(G, { transition: false }))));
              })(), t11 = null;
            }));
          }), P.observe($);
        }
      })(), lt("ready"));
    }
  }
  function ct(t10) {
    b2 = t10;
  }
  function ft() {
    false === ot("gestures") ? A && (A.destroy(), A = void 0) : A || (function() {
      const t10 = ot("gestures");
      !A && false !== t10 && $ && (A = l($, t10).on("start", (t11) => {
        if (!L) return;
        if (false === ot("gestures", t11)) return;
        const { srcEvent: e10 } = t11;
        z2 && e5(e10) && !n2(e10.target) && h(e10), L.pause(), L.getCurrentVelocities().pos = 0;
        const n13 = tt[G]?.slides[0], o9 = n13?.el;
        n13 && U.has(n13.index) && o9 && (N2 = n13.offset || 0, N2 += ((function(t12) {
          const e11 = window.getComputedStyle(t12), n14 = new DOMMatrixReadOnly(e11.transform);
          return { width: n14.m41 || 0, height: n14.m42 || 0 };
        })(o9)[B2] || 0) * (F2 && !z2 ? 1 : -1)), Tt(), k3 || (N2 < Y || N2 > W) && L.spring({ clamp: true, mass: 1, tension: 500, friction: 25, velocity: L.getCurrentVelocities()?.pos || 0, restDelta: 1, restSpeed: 1 }).from({ pos: N2 }).to({ pos: t2(Y, N2, W) }).start();
      }).on("move", (t11) => {
        if (false === ot("gestures", t11)) return;
        const { srcEvent: e10, axis: n13, deltaX: o9, deltaY: s13 } = t11;
        if (e5(e10) && e10.touches?.length > 1) return;
        const r7 = e10.target, l6 = n2(r7), a6 = l6 ? l6.scrollHeight > l6.clientHeight ? "y" : "x" : void 0;
        if (l6 && l6 !== $ && (!n13 || n13 === a6)) return;
        if (!n13) return h(e10), e10.stopPropagation(), void e10.stopImmediatePropagation();
        if ("y" === n13 && !z2 || "x" === n13 && z2) return;
        if (h(e10), e10.stopPropagation(), !L) return;
        const c6 = F2 && !z2 ? 1 : -1, f3 = z2 ? s13 : o9;
        let u6 = L?.isRunning() ? L.getEndValues().pos : N2, d4 = 1;
        k3 || (u6 <= Y && f3 * c6 < 0 ? (d4 = Math.max(0.01, 1 - (Math.abs(1 / vt() * Math.abs(u6 - Y)) || 0)), d4 *= 0.2) : u6 >= W && f3 * c6 > 0 && (d4 = Math.max(0.01, 1 - (Math.abs(1 / vt() * Math.abs(u6 - W)) || 0)), d4 *= 0.2)), u6 += f3 * d4 * c6, L.spring({ clamp: true, mass: 1, tension: 700, friction: 25, velocity: L.getCurrentVelocities()?.pos || 0, restDelta: 1, restSpeed: 1 }).from({ pos: N2 }).to({ pos: u6 }).start();
      }).on("panstart", (t11) => {
        false !== ot("gestures", t11) && t11?.axis === (z2 ? "y" : "x") && s3($, "is-dragging");
      }).on("panend", (t11) => {
        false !== ot("gestures", t11) && s4($, "is-dragging");
      }).on("end", (t11) => {
        if (false === ot("gestures", t11)) return;
        const { srcEvent: e10, axis: n13, velocityX: o9, velocityY: s13, currentTouch: r7 } = t11;
        if (r7.length > 0 || !L) return;
        const l6 = e10.target, c6 = n2(l6), f3 = c6 ? c6.scrollHeight > c6.clientHeight ? "y" : "x" : void 0, u6 = c6 && (!n13 || n13 === f3);
        z2 && e5(e10) && !n13 && Rt(e10);
        const d4 = tt.length, p3 = ot("dragFree");
        if (!d4) return;
        let g4 = u6 ? 0 : ot("vertical") ? s13 : o9;
        n13 !== (z2 ? "y" : "x") && (g4 = 0);
        let h3 = L?.isRunning() ? L.getEndValues().pos : N2;
        const v4 = F2 && !z2 ? 1 : -1;
        if (u6 || (h3 += g4 * (p3 ? 5 : 1) * v4), !k3 && (g4 * v4 <= 0 && h3 < Y || g4 * v4 >= 0 && h3 > W)) {
          let t12 = 0;
          return Math.abs(g4) > 0 && (t12 = 2 * Math.abs(g4), t12 = Math.min(0.3 * vt(), t12)), h3 = t2(Y + -1 * t12, h3, W + t12), void L.spring({ clamp: true, mass: 1, tension: 380, friction: 25, velocity: -1 * g4, restDelta: 1, restSpeed: 1 }).from({ pos: N2 }).to({ pos: h3 }).start();
        }
        if (p3 || V.Autoscroll?.isEnabled()) return void (Math.abs(g4) > 10 ? L.spring({ clamp: true, mass: 1, tension: 150, friction: 25, velocity: -1 * g4, restDelta: 1, restSpeed: 1 }).from({ pos: N2 }).to({ pos: h3 }).start() : L.isRunning() || _2 || (_2 = true, lt("settle")));
        if (!p3 && !V.Autoscroll?.isEnabled() && (!t11.offsetX && !t11.offsetY || "y" === n13 && !z2 || "x" === n13 && z2)) return void $t(G, { transition: "tween" });
        let b3 = gt(h3);
        Math.abs(g4) > 10 && b3 === G && (b3 += g4 > 0 ? F2 && !z2 ? 1 : -1 : F2 && !z2 ? -1 : 1), $t(b3, { transition: "tween", tween: { velocity: -1 * g4 } });
      }).init());
    })(), s5($, "is-draggable", !!A && tt.length > 0);
  }
  function ut(t10 = "*") {
    const e10 = [];
    for (const n13 of K) ("*" === t10 || n13.class && n13.class.includes(t10) || n13.el && n13.el?.classList.contains(t10)) && e10.push(n13);
    T2 = void 0, J = t10, Q = [...e10];
  }
  function dt() {
    if (!L) return;
    const t10 = gt(L?.isRunning() ? L.getEndValues().pos : N2);
    t10 !== G && (T2 = G, G = t10, Ot(), pt(), mt(), lt("change", G, T2));
  }
  function pt() {
    if (!O2) return;
    for (const t11 of O2.querySelectorAll("[data-carousel-index]")) t11.innerHTML = G + "";
    for (const t11 of O2.querySelectorAll("[data-carousel-page]")) t11.innerHTML = G + 1 + "";
    for (const t11 of O2.querySelectorAll("[data-carousel-pages]")) t11.innerHTML = tt.length + "";
    const t10 = ot("classes") || {}, e10 = Array.from(O2.querySelectorAll("[data-carousel-go-to]")).filter((e11) => e11.closest(`.${t10.container}`) === O2);
    for (const t11 of e10) {
      parseInt(t11.dataset?.carouselGoTo || "-1", 10) === G ? t11.setAttribute("aria-current", "true") : t11.removeAttribute("aria-current");
    }
    for (const t11 of O2.querySelectorAll("[data-carousel-go-prev]")) t11.toggleAttribute("aria-disabled", !kt()), kt() ? t11.removeAttribute("tabindex") : t11.setAttribute("tabindex", "-1");
    for (const t11 of O2.querySelectorAll("[data-carousel-go-next]")) t11.toggleAttribute("aria-disabled", !Ft()), Ft() ? t11.removeAttribute("tabindex") : t11.setAttribute("tabindex", "-1");
    let n13 = false;
    const i7 = tt[G]?.slides[0];
    i7 && (i7.downloadSrc || "image" === i7.type && i7.src) && (n13 = true);
    for (const t11 of O2.querySelectorAll("[data-carousel-download]")) t11.toggleAttribute("aria-disabled", !n13);
  }
  function mt(t10) {
    t10 || (t10 = tt[G]?.slides[0]);
    const e10 = t10?.el;
    if (e10) for (const n13 of e10.querySelectorAll("[data-slide-index]")) n13.innerHTML = t10.index + 1 + "";
  }
  function gt(t10) {
    if (!tt.length) return 0;
    const e10 = bt();
    let n13 = t10;
    k3 ? n13 -= Math.floor((t10 - tt[0]?.pos) / e10) * e10 || 0 : n13 = t2(tt[0]?.pos, t10, tt[tt.length - 1]?.pos);
    const i7 = /* @__PURE__ */ new Map();
    let o9 = 0;
    for (const t11 of tt) {
      const s14 = Math.abs(t11.pos - n13), r7 = Math.abs(t11.pos - n13 - e10), l6 = Math.abs(t11.pos - n13 + e10), a6 = Math.min(s14, r7, l6);
      i7.set(o9, a6), o9++;
    }
    const s13 = i7.size > 0 ? [...i7.entries()].reduce((t11, e11) => e11[1] < t11[1] ? e11 : t11) : [G, 0];
    return parseInt(s13[0]);
  }
  function ht() {
    return it;
  }
  function vt() {
    return D2;
  }
  function bt(t10 = true) {
    return Q.length ? Q.reduce((t11, e10) => t11 + e10.dim, 0) + (Q.length - (k3 && t10 ? 0 : 1)) * it : 0;
  }
  function yt(t10) {
    const e10 = bt(), n13 = vt();
    if (!e10 || !$ || !n13) return [];
    const i7 = [];
    t10 = void 0 === t10 ? N2 : t10, k3 && (t10 -= Math.floor(t10 / e10) * e10 || 0);
    let o9 = 0;
    for (let s13 of Q) {
      const r7 = (e11 = 0) => {
        i7.indexOf(s13) > -1 || (s13.pos = o9 - t10 + e11 || 0, s13.offset + e11 > t10 - s13.dim - I2 + 0.51 && s13.offset + e11 < t10 + n13 + q2 - 0.51 && i7.push(s13));
      };
      s13.offset = o9, k3 && (r7(e10), r7(-1 * e10)), r7(), o9 += s13.dim + it;
    }
    return i7;
  }
  function Et(t10, e10) {
    const n13 = [];
    for (const e11 of Array.isArray(t10) ? t10 : [t10]) {
      const t11 = xt({ ...e11, isVirtual: true });
      t11.el || (t11.el = document.createElement("div")), lt("createSlide", t11), n13.push(t11);
    }
    K.splice(void 0 === e10 ? K.length : e10, 0, ...n13), At();
    for (const t11 of n13) lt("addSlide", t11), Mt(t11);
    return ut(J), n13;
  }
  function xt(t10) {
    return (t(t10) || t10 instanceof HTMLElement) && (t10 = { html: t10 }), { index: -1, el: void 0, class: "", isVirtual: true, dim: 0, pos: 0, offset: 0, html: "", src: "", ...t10 };
  }
  function Mt(t10) {
    let e10 = t10.el;
    if (!t10 || !e10) return;
    const n13 = t10.html ? t10.html instanceof HTMLElement ? t10.html : e2(t10.html) : void 0;
    n13 && (s3(n13, "f-html"), t10.htmlEl = n13, s3(e10, "has-html"), e10.append(n13), lt("contentReady", t10));
  }
  function wt(t10) {
    if (!$ || !t10) return;
    let e10 = t10.el;
    if (e10) {
      if (e10.setAttribute("index", t10.index + ""), e10.parentElement !== $) {
        let n13;
        s3(e10, H2.classes.slide), s3(e10, t10.class), Ot(t10);
        for (const e11 of K) if (e11.index > t10.index) {
          n13 = e11.el;
          break;
        }
        $.insertBefore(e10, n13 && $.contains(n13) ? n13 : null), lt("attachSlideEl", t10);
      }
      return mt(t10), e10;
    }
  }
  function St(t10) {
    const e10 = t10?.el;
    e10 && (e10.remove(), Pt(e10), lt("detachSlideEl", t10));
  }
  function At() {
    for (let t10 = 0; t10 < K.length; t10++) {
      const e10 = K[t10], n13 = e10.el;
      n13 && (e10.index !== t10 && Pt(n13), n13.setAttribute("index", `${t10}`)), e10.index = t10;
    }
  }
  function Lt() {
    if (!O2 || !$) return;
    F2 = ot("rtl"), z2 = ot("vertical"), B2 = z2 ? "height" : "width";
    const t10 = ot("classes");
    if (s5(O2, t10.isLTR, !F2), s5(O2, t10.isRTL, F2), s5(O2, t10.isHorizontal, !z2), s5(O2, t10.isVertical, z2), s5(O2, t10.hasAdaptiveHeight, ot("adaptiveHeight")), D2 = 0, I2 = 0, q2 = 0, it = 0, $) {
      $.childElementCount || ($.style.display = "grid");
      const t11 = $.getBoundingClientRect();
      D2 = $.getBoundingClientRect()[B2] || 0;
      const e10 = window.getComputedStyle($);
      it = parseFloat(e10.getPropertyValue("--f-carousel-gap")) || 0;
      "visible" === e10.getPropertyValue("overflow-" + (z2 ? "y" : "x")) && (I2 = Math.abs(t11[z2 ? "top" : "left"]), q2 = Math.abs(window[z2 ? "innerHeight" : "innerWidth"] - t11[z2 ? "bottom" : "right"])), $.style.display = "";
    }
    if (!D2) return;
    const n13 = (function() {
      let t11 = 0;
      if ($) {
        let e10 = document.createElement("div");
        e10.style.display = "block", s3(e10, H2.classes.slide), $.appendChild(e10), t11 = e10.getBoundingClientRect()[B2], e10.remove(), e10 = void 0;
      }
      return t11;
    })();
    for (const t11 of Q) {
      const i7 = t11.el;
      let o9 = 0;
      if (!t11.isVirtual && i7 && n(i7)) {
        let t12 = false;
        i7.parentElement && i7.parentElement === $ || ($.appendChild(i7), t12 = true), o9 = i7.getBoundingClientRect()[B2], t12 && i7.parentElement?.removeChild(i7);
      } else o9 = n13;
      t11.dim = o9;
    }
    if (k3 = false, ot("infinite")) {
      k3 = true;
      const t11 = bt();
      let e10 = D2 + I2 + q2;
      for (let n14 = 0; n14 < Q.length; n14++) {
        const i7 = Q[n14]?.dim + it;
        if (t11 - i7 < e10 && t11 - i7 - e10 < i7) {
          k3 = false;
          break;
        }
      }
    }
    !(function() {
      if (!O2) return;
      const t11 = vt(), e10 = bt(false);
      let n14 = ot("slidesPerPage");
      n14 = "auto" === n14 ? 1 / 0 : parseFloat(n14 + ""), tt = [];
      let i7 = 0, o9 = 0;
      for (const e11 of Q) (!tt.length || i7 + e11.dim - t11 > 0.05 || o9 >= n14) && (tt.push({ index: tt.length, slides: [], dim: 0, offset: 0, pos: 0 }), i7 = 0, o9 = 0), tt[tt.length - 1]?.slides.push(e11), i7 += e11.dim + it, o9++;
      const s13 = ot("center"), r7 = ot("fill");
      let l6 = 0;
      for (const n15 of tt) {
        n15.dim = (n15.slides.length - 1) * it;
        for (const t12 of n15.slides) n15.dim += t12.dim;
        n15.offset = l6, n15.pos = l6, false !== s13 && (n15.pos -= 0.5 * (t11 - n15.dim)), r7 && !k3 && e10 > t11 && (n15.pos = t2(0, n15.pos, e10 - t11)), l6 += n15.dim + it;
      }
      const c6 = [];
      let f3;
      for (const t12 of tt) {
        const e11 = { ...t12 };
        f3 && Math.abs(e11.pos - f3.pos) < 0.1 ? (f3.dim += e11.dim, f3.slides = [...f3.slides, ...e11.slides]) : (f3 = e11, e11.index = c6.length, c6.push(e11));
      }
      tt = c6, G = t2(0, G, tt.length - 1);
    })(), Y = tt[0]?.pos || 0, W = tt[tt.length - 1]?.pos || 0, 0 === R2 ? (function() {
      T2 = void 0, G = ot("initialPage");
      const t11 = ot("initialSlide") || void 0;
      void 0 !== t11 && (G = zt.getPageIndex(t11) || 0), G = t2(0, G, tt.length - 1), N2 = tt[G]?.pos || 0, X = N2;
    })() : X = tt[G || 0]?.pos || 0, lt("refresh"), pt();
  }
  function Pt(t10) {
    if (!t10 || !n(t10)) return;
    const n13 = parseInt(t10.getAttribute("index") || "-1");
    let i7 = "";
    for (const e10 of Array.from(t10.classList)) {
      const t11 = e10.match(/^f-(\w+)(Out|In)$/);
      t11 && t11[1] && (i7 = t11[1] + "");
    }
    if (!t10 || !i7) return;
    const o9 = [`f-${i7}Out`, `f-${i7}In`, "to-prev", "to-next", "from-prev", "from-next"];
    t10.removeEventListener("animationend", jt), s4(t10, o9.join(" ")), U.delete(n13);
  }
  function Tt() {
    if (!$) return;
    const t10 = U.size > 0;
    for (const t11 of Q) Pt(t11.el);
    U.clear(), t10 && It();
  }
  function jt(t10) {
    "f-" === t10.animationName?.substring(0, 2) && (Pt(t10.target), U.size || (s4(O2, "in-transition"), !_2 && Math.abs(zt.getPosition(true) - X) < 0.5 && (_2 = true, lt("settle"))), It());
  }
  function Rt(t10) {
    Ct(t10), lt("click", t10);
  }
  function Ct(t10) {
    if (t10.defaultPrevented) return;
    const e10 = t10.composedPath()[0], n13 = e10.closest("[data-carousel-target]"), i7 = n13?.dataset?.carouselTarget;
    if (i7) {
      if (x2(i7) !== O2) return;
    }
    if (e10.closest("[data-carousel-go-prev]")) return h(t10), void zt.prev();
    if (e10.closest("[data-carousel-go-next]")) return h(t10), void zt.next();
    const o9 = e10.closest("[data-carousel-go-to]");
    if (o9) return h(t10), void zt.goTo(parseFloat(o9.dataset.carouselGoTo || "") || 0);
    if (e10.closest("[data-carousel-download]")) {
      h(t10);
      const e11 = tt[G]?.slides[0];
      if (e11 && (e11.downloadSrc || "image" === e11.type && e11.src)) {
        const t11 = e11.downloadFilename, n14 = document.createElement("a"), i8 = e11.downloadSrc || e11.src || "";
        n14.href = i8, n14.target = "_blank", n14.download = t11 || i8, n14.click();
      }
      return;
    }
  }
  function Ht(t10) {
    const e10 = t10.el;
    e10 && e10.querySelector(".f-spinner")?.remove();
  }
  function Vt(t10) {
    const e10 = t10.el;
    e10 && (e10.querySelector(".f-html.is-error")?.remove(), s4(e10, "has-error"));
  }
  function Ot(t10) {
    t10 || (t10 = tt[G]?.slides[0]);
    const e10 = t10?.el;
    if (!e10) return;
    let i7 = ot("formatCaption", t10);
    void 0 === i7 && (i7 = t10.caption), i7 = i7 || "";
    const o9 = ot("captionEl");
    if (o9 && o9 instanceof HTMLElement) {
      if (t10.index !== G) return;
      if (t(i7) && (o9.innerHTML = st(i7 + "")), i7 instanceof HTMLElement) {
        if (i7.parentElement === o9) return;
        o9.innerHTML = "", i7.parentElement && (i7 = i7.cloneNode(true)), o9.append(i7);
      }
      return;
    }
    if (!i7) return;
    let s13 = t10.captionEl || e10.querySelector(".f-caption");
    !s13 && i7 instanceof HTMLElement && i7.classList.contains("f-caption") && (s13 = i7), s13 || (s13 = document.createElement("div"), s3(s13, "f-caption"), t(i7) ? s13.innerHTML = st(i7 + "") : i7 instanceof HTMLElement && (i7.parentElement && (i7 = i7.cloneNode(true)), s13.append(i7)));
    const r7 = `f-caption-${E2}_${t10.index}`;
    s13.setAttribute("id", r7), s13.dataset.selectable = "true", s3(e10, "has-caption"), e10.setAttribute("aria-labelledby", r7), t10.captionEl = s13, e10.insertAdjacentElement("beforeend", s13);
  }
  function $t(e10, i7 = {}) {
    let { transition: o9, tween: r7 } = { transition: H2.transition, tween: H2.tween, ...i7 || {} };
    if (!O2 || !L) return;
    const l6 = tt.length;
    if (!l6) return;
    if ((function(t10, e11) {
      if (!(O2 && D2 && L && e11 && t(e11) && "tween" !== e11)) return false;
      for (const t11 of Z) if (D2 - t11.dim > 0.5) return false;
      if (I2 > 0.5 || q2 > 0.5) return;
      const i8 = tt.length;
      let o10 = t10 > G ? 1 : -1;
      t10 = k3 ? (t10 % i8 + i8) % i8 : t2(0, t10, i8 - 1), F2 && (o10 *= -1);
      const s13 = tt[G]?.slides[0], r8 = s13?.index, l7 = tt[t10]?.slides[0], u7 = l7?.index, d5 = tt[t10]?.pos;
      if (void 0 === u7 || void 0 === r8 || r8 === u7 || N2 === d5 || Math.abs(D2 - (l7?.dim || 0)) > 1) return false;
      _2 = false, L.pause(), Tt(), s3(O2, "in-transition"), N2 = X = d5;
      const p3 = wt(s13), m3 = wt(l7);
      return dt(), p3 && (U.add(r8), p3.style.transform = "", p3.addEventListener("animationend", jt), s4(p3, H2.classes.isSelected), p3.inert = false, s3(p3, `f-${e11}Out to-${o10 > 0 ? "next" : "prev"}`)), m3 && (U.add(u7), m3.style.transform = "", m3.addEventListener("animationend", jt), s3(m3, H2.classes.isSelected), m3.inert = false, s3(m3, `f-${e11}In from-${o10 > 0 ? "prev" : "next"}`)), It(), true;
    })(e10, o9)) return;
    e10 = k3 ? (e10 % l6 + l6) % l6 : t2(0, e10, l6 - 1);
    const u6 = tt[e10 || 0]?.pos || 0;
    X = u6;
    const d4 = L.isRunning() ? L.getEndValues().pos : N2;
    if (Math.abs(X - d4) < 1) return N2 = X, G !== e10 && (Ot(), T2 = G, G = e10, pt(), mt(), lt("change", G, T2)), It(), void (_2 || (_2 = true, lt("settle")));
    if (L.pause(), Tt(), k3) {
      const t10 = bt(), e11 = Math.floor((d4 - tt[0]?.pos) / t10) || 0, n13 = X + e11 * t10;
      X = [n13 + t10, n13, n13 - t10].reduce(function(t11, e12) {
        return Math.abs(e12 - d4) < Math.abs(t11 - d4) ? e12 : t11;
      });
    }
    false !== o9 && t3(r7) ? L.spring(r3({}, H2.tween, r7)).from({ pos: N2 }).to({ pos: X }).start() : (N2 = X, dt(), It(), _2 || (_2 = true, lt("settle")));
  }
  function Dt(t10) {
    let e10 = N2;
    if (k3 && true !== t10) {
      const t11 = bt();
      e10 -= (Math.floor((N2 - tt[0]?.pos || 0) / t11) || 0) * t11;
    }
    return e10;
  }
  function It() {
    if (!O2 || !$) return;
    Z = yt();
    const t10 = /* @__PURE__ */ new Set(), e10 = [], n13 = tt[G], i7 = H2.setTransform;
    let s13;
    for (const i8 of Q) {
      const o9 = U.has(i8.index), r7 = Z.indexOf(i8) > -1, l6 = n13?.slides?.indexOf(i8) > -1;
      if (i8.isVirtual && !o9 && !r7) continue;
      let a6 = wt(i8);
      if (a6 && (e10.push(i8), l6 && t10.add(a6), ot("adaptiveHeight") && l6)) {
        const t11 = (a6.lastElementChild || a6).getBoundingClientRect().height;
        s13 = null == s13 ? t11 : Math.max(s13, t11);
      }
    }
    $ && s13 && ($.style.height = `${s13}px`), [...e7($, `.${H2.classes.slide}`)].forEach((e11) => {
      s5(e11, H2.classes.isSelected, t10.has(e11));
      const n14 = K[parseInt(e11.getAttribute("index") || "-1")];
      if (!n14) return e11.remove(), void Pt(e11);
      const o9 = U.has(n14.index), s14 = Z.indexOf(n14) > -1;
      if (n14.isVirtual && !o9 && !s14) return void St(n14);
      if (e11.inert = !s14, false === i7) return;
      let l6 = n14.pos ? Math.round(1e4 * n14.pos) / 1e4 : 0, a6 = 0, c6 = 0, f3 = 0, d4 = 0;
      o9 || (a6 = z2 ? 0 : F2 ? -1 * l6 : l6, c6 = z2 ? l6 : 0, f3 = t5(a6, 0, n14.dim, 0, 100), d4 = t5(c6, 0, n14.dim, 0, 100)), i7 instanceof Function && !o9 ? i7(zt, n14, { x: a6, y: c6, xPercent: f3, yPercent: d4 }) : e11.style.transform = a6 || c6 ? `translate3d(${f3}%, ${d4}%,0)` : "";
    }), lt("render", e10);
  }
  function qt() {
    O2?.removeEventListener("click", Rt), document.removeEventListener("mousemove", ct), U.clear(), P?.disconnect(), P = void 0;
    for (const t10 of K) {
      let n13 = t10.el;
      n13 && n(n13) && (t10.state = void 0, Ht(t10), Vt(t10), t10.isVirtual ? (St(t10), t10.el = void 0) : (Pt(n13), n13.style.transform = "", $ && !$.contains(n13) && $.appendChild(n13)));
    }
    for (const t10 of Object.values(V)) t10?.destroy();
    V = {}, A?.destroy(), A = void 0, L?.destroy(), L = void 0;
    for (const [t10, e10] of Object.entries(H2.classes || {})) "container" !== t10 && s4(O2, e10);
    s4($, "is-draggable");
  }
  function kt() {
    return k3 || G > 0;
  }
  function Ft() {
    return k3 || G < tt.length - 1;
  }
  const zt = { add: function(t10, e10) {
    let n13 = N2;
    const i7 = G, o9 = bt(), s13 = L?.isRunning() ? L.getEndValues().pos : N2, r7 = o9 && Math.floor((s13 - (tt[0]?.pos || 0)) / o9) || 0;
    return Et(t10, e10), ut(J), Lt(), L && o9 && (i7 === G && (n13 -= r7 * o9), n13 === X ? N2 = X : L.spring({ clamp: true, mass: 1, tension: 300, friction: 25, restDelta: 1, restSpeed: 1 }).from({ pos: n13 }).to({ pos: X }).start()), It(), zt;
  }, canGoPrev: kt, canGoNext: Ft, destroy: function() {
    return lt("destroy"), window.removeEventListener("resize", at), qt(), rt.clear(), O2 = null, tt = [], K = [], H2 = { ...v2 }, V = {}, Q = [], j = void 0, J = "*", R2 = 2, zt;
  }, emit: lt, filter: function(t10 = "*") {
    return ut(t10), Lt(), N2 = t2(Y, N2, W), It(), lt("filter", t10), zt;
  }, getContainer: function() {
    return O2;
  }, getGapDim: ht, getGestures: function() {
    return A;
  }, getLastMouseMove: function() {
    return b2;
  }, getOption: function(t10) {
    return ot(t10);
  }, getOptions: function() {
    return H2;
  }, getPage: function() {
    return tt[G];
  }, getPageIndex: function(t10) {
    if (void 0 !== t10) {
      for (const e10 of tt || []) for (const n13 of e10.slides) if (n13.index === t10) return e10.index;
      return -1;
    }
    return G;
  }, getPageIndexFromPosition: gt, getPageProgress: function(t10, e10) {
    void 0 === t10 && (t10 = G);
    const n13 = tt[t10];
    if (!n13) return t10 > G ? -1 : 1;
    const i7 = bt(), o9 = ht();
    let s13 = n13.pos, r7 = Dt();
    if (k3 && true !== e10) {
      const t11 = Math.floor((r7 - tt[0]?.pos) / i7) || 0;
      r7 -= t11 * i7, s13 = [s13 + i7, s13, s13 - i7].reduce(function(t12, e11) {
        return Math.abs(e11 - r7) < Math.abs(t12 - r7) ? e11 : t12;
      });
    }
    return (r7 - s13) / (n13.dim + o9) || 0;
  }, getPageVisibility: function(t10) {
    void 0 === t10 && (t10 = G);
    const e10 = tt[t10];
    if (!e10) return t10 > G ? -1 : 1;
    const n13 = Dt(), i7 = vt();
    let o9 = e10.pos;
    if (k3) {
      const t11 = bt(), e11 = o9 + (Math.floor((n13 - tt[0]?.pos) / t11) || 0) * t11;
      o9 = [e11 + t11, e11, e11 - t11].reduce(function(t12, e12) {
        return Math.abs(e12 - n13) < Math.abs(t12 - n13) ? e12 : t12;
      });
    }
    return o9 > n13 && o9 + e10.dim < n13 + i7 ? 1 : o9 < n13 ? (o9 + e10.dim - n13) / e10.dim || 0 : o9 + e10.dim > n13 + i7 && (n13 + i7 - o9) / e10.dim || 0;
  }, getPages: function() {
    return tt;
  }, getPlugins: function() {
    return V;
  }, getPosition: Dt, getSlides: function() {
    return K;
  }, getState: function() {
    return R2;
  }, getTotalSlideDim: bt, getTween: function() {
    return L;
  }, getViewport: function() {
    return $;
  }, getViewportDim: vt, getVisibleSlides: function(t10) {
    return void 0 === t10 ? Z : yt(t10);
  }, goTo: $t, hasNavigated: function() {
    return void 0 !== T2;
  }, hideError: Vt, hideLoading: Ht, init: function() {
    if (!g3 || !n(g3)) throw new Error("No Element found");
    return 0 !== R2 && (qt(), R2 = 0), O2 = g3, C = w3, window.removeEventListener("resize", at), C.breakpoints && window.addEventListener("resize", at), at(), zt;
  }, isInfinite: function() {
    return k3;
  }, isInTransition: function() {
    return U.size > 0;
  }, isRTL: function() {
    return F2;
  }, isSettled: function() {
    return _2;
  }, isVertical: function() {
    return z2;
  }, localize: st, next: function(t10 = {}) {
    return $t(G + 1, t10), zt;
  }, off: function(t10, e10) {
    for (const n13 of t10 instanceof Array ? t10 : [t10]) rt.has(n13) && rt.set(n13, rt.get(n13).filter((t11) => t11 !== e10));
    return zt;
  }, on: function(t10, e10) {
    for (const n13 of t10 instanceof Array ? t10 : [t10]) rt.set(n13, [...rt.get(n13) || [], e10]);
    return zt;
  }, prev: function(t10 = {}) {
    return $t(G - 1, t10), zt;
  }, reInit: function(e10 = {}, n13) {
    return qt(), R2 = 0, j = void 0, J = "*", w3 = e10, C = e10, t3(n13) && (S2 = n13), at(), zt;
  }, remove: function(t10) {
    void 0 === t10 && (t10 = K.length - 1);
    const e10 = K[t10];
    return e10 && (lt("removeSlide", e10), e10.el && (Pt(e10.el), e10.el.remove(), e10.el = void 0), K.splice(t10, 1), ut(J), Lt(), N2 = t2(Y, N2, W), It()), zt;
  }, setPosition: function(t10) {
    N2 = t10, dt(), It();
  }, showError: function(t10, e10) {
    if (1 === R2) {
      Ht(t10), Vt(t10);
      const n13 = t10.el;
      if (n13) {
        const i7 = document.createElement("div");
        s3(i7, "f-html"), s3(i7, "is-error"), i7.innerHTML = st(e10 || "<p>{{ERROR}}</p>"), t10.htmlEl = i7, s3(n13, "has-html has-error"), n13.insertAdjacentElement("afterbegin", i7), lt("contentReady", t10);
      }
    }
    return zt;
  }, showLoading: function(t10) {
    const e10 = t10.el, n13 = e10?.querySelector(".f-spinner");
    if (!e10 || n13) return zt;
    const i7 = ot("spinnerTpl"), o9 = e2(i7);
    return o9 && (s3(o9, "f-spinner"), e10.insertAdjacentElement("beforeend", o9)), zt;
  }, version: "6.1.15" };
  return zt;
};
M2.l10n = { en_EN: o3 }, M2.getDefaults = () => v2;

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/scrollLock.js
var t6 = (t10 = true, e10 = "--f-scrollbar-compensate", s13 = "--f-body-margin", o9 = "hide-scrollbar") => {
  const n13 = document, r7 = n13.body, l6 = n13.documentElement;
  if (t10) {
    if (r7.classList.contains(o9)) return;
    let t11 = window.innerWidth - l6.getBoundingClientRect().width;
    t11 < 0 && (t11 = 0), l6.style.setProperty(e10, `${t11}px`);
    const n14 = parseFloat(window.getComputedStyle(r7).marginRight);
    n14 && r7.style.setProperty(s13, `${n14}px`), r7.classList.add(o9);
  } else r7.classList.remove(o9), r7.style.setProperty(s13, ""), n13.documentElement.style.setProperty(e10, "");
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/canUseDOM.js
function e8() {
  return !("undefined" == typeof window || !window.document || !window.document.createElement);
}

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/utils/replaceAll.js
var n5 = function(n13 = "", t10 = "", o9 = "") {
  return n13.split(t10).join(o9);
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/carousel/carousel.zoomable.js
var a3 = { tpl: (t10) => `<img class="f-panzoom__content" 
    ${t10.srcset ? 'data-lazy-srcset="{{srcset}}"' : ""} 
    ${t10.sizes ? 'data-lazy-sizes="{{sizes}}"' : ""} 
    data-lazy-src="{{src}}" alt="{{alt}}" />` };
var s6 = () => {
  let s13;
  function c6(e10, o9) {
    const n13 = s13?.getOptions().Zoomable;
    let i7 = (t3(n13) ? { ...a3, ...n13 } : a3)[e10];
    return i7 && "function" == typeof i7 && o9 ? i7(o9) : i7;
  }
  function r7() {
    s13 && false !== s13.getOptions().Zoomable && (s13.on("addSlide", d4), s13.on("removeSlide", m3), s13.on("attachSlideEl", p3), s13.on("click", f3), s13.on("change", l6), s13.on("ready", l6));
  }
  function l6() {
    u6();
    const t10 = s13?.getVisibleSlides() || [];
    if (t10.length > 1 || "slide" === s13?.getOption("transition")) for (const e10 of t10) {
      const t11 = e10.panzoomRef;
      t11 && (s13?.getPage().slides || []).indexOf(e10) < 0 && t11.execute(v.ZoomTo, { ...t11.getStartPosition() });
    }
  }
  function f3(t10, e10) {
    const o9 = e10.target;
    o9 && !e10.defaultPrevented && o9.dataset.panzoomAction && g3(o9.dataset.panzoomAction);
  }
  function d4(t10, i7) {
    const a6 = i7.el;
    if (!s13 || !a6 || i7.panzoomRef) return;
    const r8 = i7.src || i7.lazySrc || "", l7 = i7.alt || i7.caption || `Image #${i7.index}`, f4 = i7.srcset || i7.lazySrcset || "", d5 = i7.sizes || i7.lazySizes || "";
    if (r8 && t(r8) && !i7.html && (!i7.type || "image" === i7.type)) {
      i7.type = "image", i7.thumbSrc = i7.thumbSrc || r8;
      let t11 = c6("tpl", i7);
      t11 = n5(t11, "{{src}}", r8 + ""), t11 = n5(t11, "{{srcset}}", f4 + ""), t11 = n5(t11, "{{sizes}}", d5 + ""), a6.insertAdjacentHTML("afterbegin", t11);
    }
    const m4 = a6.querySelector(".f-panzoom__content");
    if (!m4) return;
    m4.setAttribute("alt", l7 + "");
    const p4 = i7.width && "auto" !== i7.width ? parseFloat(i7.width + "") : "auto", g4 = i7.height && "auto" !== i7.height ? parseFloat(i7.height + "") : "auto", z2 = T(a6, { width: p4, height: g4, classes: { container: "f-zoomable" }, event: () => s13?.getLastMouseMove(), spinnerTpl: () => s13?.getOption("spinnerTpl") || "", ...c6("Panzoom") });
    z2.on("*", (t11, e10, ...o9) => {
      s13 && ("loading" === e10 && (i7.state = 0), "loaded" === e10 && (i7.state = 1), "error" === e10 && (i7.state = 2, s13?.showError(i7, "{{IMAGE_ERROR}}")), s13.emit(`panzoom:${e10}`, i7, ...o9), "loading" === e10 && s13.emit("contentLoading", i7), "ready" === e10 && s13.emit("contentReady", i7), i7.index === s13?.getPageIndex() && u6());
    }), i7.panzoomRef = z2;
  }
  function m3(t10, e10) {
    e10.panzoomRef && (e10.panzoomRef.destroy(), e10.panzoomRef = void 0);
  }
  function p3(t10, e10) {
    const o9 = e10.panzoomRef;
    if (o9) switch (o9.getState()) {
      case 0:
        o9.init();
        break;
      case 3:
        o9.execute(v.ZoomTo, { ...o9.getStartPosition(), velocity: 0 });
    }
  }
  function u6() {
    const t10 = s13?.getContainer() || void 0, e10 = s13?.getPage()?.slides[0]?.panzoomRef;
    if (t10) if (e10) e10.updateControls(t10);
    else for (const e11 of t10.querySelectorAll("[data-panzoom-action]") || []) e11.setAttribute("aria-disabled", ""), e11.setAttribute("tabindex", "-1");
  }
  function g3(t10, ...e10) {
    s13?.getPage().slides[0].panzoomRef?.execute(t10, ...e10);
  }
  return { init: function(t10) {
    s13 = t10, s13.on("initPlugins", r7);
  }, destroy: function() {
    if (s13) {
      s13.off("initPlugins", r7), s13.off("addSlide", d4), s13.off("removeSlide", m3), s13.off("attachSlideEl", p3), s13.off("click", f3), s13.off("change", l6), s13.off("ready", l6);
      for (const t10 of s13.getSlides()) m3(0, t10);
    }
    s13 = void 0;
  }, execute: g3 };
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/carousel/carousel.sync.js
var n6 = { syncOnChange: false, syncOnClick: true, syncOnHover: false };
var t7 = () => {
  let t10, i7;
  function o9() {
    const i8 = t10?.getOptions().Sync;
    return t3(i8) ? { ...n6, ...i8 } : n6;
  }
  function s13(e10) {
    t10 && e10 && (i7 = e10, t10.getOptions().classes = { ...t10.getOptions().classes, isSelected: "" }, t10.getOptions().initialSlide = i7.getPage()?.slides[0]?.index || 0, o9().syncOnChange && t10.on("change", r7), o9().syncOnClick && t10.on("click", a6), o9().syncOnHover && t10.getViewport()?.addEventListener("mouseover", d4), (function() {
      if (!t10 || !i7) return;
      t10.on("ready", g3), t10.on("refresh", l6), i7.on("change", f3), i7.on("filter", u6);
    })());
  }
  function c6() {
    const e10 = o9().target;
    t10 && e10 && s13(e10);
  }
  function g3() {
    v4();
  }
  function r7() {
    if (t10 && i7) {
      const e10 = t10.getPage()?.slides || [], n13 = i7.getPageIndex(e10[0].index || 0);
      n13 > -1 && i7.goTo(n13, t10.hasNavigated() ? void 0 : { tween: false, transition: false }), v4();
    }
  }
  function f3() {
    if (t10 && i7) {
      const e10 = t10.getPageIndex(i7.getPage()?.slides[0].index || 0);
      e10 > -1 && t10.goTo(e10, i7.hasNavigated() ? void 0 : { tween: false, transition: false }), v4();
    }
  }
  function a6(e10, n13) {
    if (!t10 || !i7) return;
    if (t10.getTween()?.isRunning()) return;
    const o10 = t10?.getOptions().classes.slide;
    if (!o10) return;
    const s14 = n13.target.closest(`.${o10}`);
    if (s14) {
      const e11 = parseInt(s14.getAttribute("index") || "") || 0, n14 = i7.getPageIndex(e11);
      i7.goTo(n14);
    }
  }
  function d4(e10) {
    t10 && a6(0, e10);
  }
  function l6() {
    if (t10 && i7) {
      const e10 = t10.getPageIndex(i7.getPage()?.slides[0].index || 0);
      e10 > -1 && t10.goTo(e10, { tween: false, transition: false }), v4();
    }
  }
  function u6(e10, n13) {
    t10 && i7 && (t10.filter(n13), f3());
  }
  function v4() {
    if (!i7) return;
    const e10 = i7.getPage()?.slides[0]?.index || 0;
    for (const n13 of t10?.getSlides() || []) n13.el?.classList.toggle("is-selected", n13.index === e10);
  }
  return { init: function(e10) {
    t10 = e10, t10.on("initSlides", c6);
  }, destroy: function() {
    t10?.off("ready", g3), t10?.off("refresh", l6), t10?.off("change", r7), t10?.off("click", a6), t10?.getViewport()?.removeEventListener("mouseover", d4), i7?.off("change", f3), i7?.off("filter", u6), i7 = void 0, t10?.off("initSlides", c6), t10 = void 0;
  }, getTarget: function() {
    return i7;
  } };
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/carousel/carousel.lazyload.js
var s7 = { showLoading: true, preload: 1 };
var o5 = "is-lazyloading";
var i3 = "is-lazyloaded";
var l2 = "has-lazyerror";
var n7 = () => {
  let n13;
  function d4() {
    const e10 = n13?.getOptions().Lazyload;
    return t3(e10) ? { ...s7, ...e10 } : s7;
  }
  function r7(t10) {
    const s13 = t10.el;
    if (!s13) return;
    const r8 = d4(), c7 = "[data-lazy-src],[data-lazy-srcset],[data-lazy-bg]", f3 = Array.from(s13.querySelectorAll(c7));
    s13.matches(c7) && f3.push(s13);
    for (const s14 of f3) {
      const d5 = s14.dataset.lazySrc, c8 = s14.dataset.lazySrcset, f4 = s14.dataset.lazySizes, y3 = s14.dataset.lazyBg, z2 = (s14 instanceof HTMLImageElement || s14 instanceof HTMLSourceElement) && (d5 || c8), m3 = !!y3;
      if (!z2 && !m3) continue;
      const g3 = d5 || c8 || y3;
      if (g3) {
        if (z2) {
          const y4 = s14.parentElement?.classList.contains("f-panzoom__wrapper");
          r8.showLoading && n13?.showLoading(t10), s14.addEventListener("load", () => {
            n13?.hideLoading(t10), s4(s14, l2), s14 instanceof HTMLImageElement ? s14.decode().finally(() => {
              s4(s14, o5), s3(s14, i3);
            }).catch(() => {
            }) : (s4(s14, o5), s3(s14, i3)), y4 || n13?.emit("lazyLoad:loaded", t10, s14, g3);
          }), s14.addEventListener("error", () => {
            n13?.hideLoading(t10), s4(s14, o5), s3(s14, l2), y4 || n13?.emit("lazyLoad:error", t10, s14, g3);
          }), s14.classList.add("f-lazyload"), s14.classList.add(o5), y4 || n13?.emit("lazyLoad:load", t10, s14, g3), d5 && (s14.src = d5), c8 && (s14.srcset = c8), f4 && (s14.sizes = f4);
        } else m3 && (s14.style.backgroundImage = `url('${y3}')`);
        delete s14.dataset.lazySrc, delete s14.dataset.lazySrcset, delete s14.dataset.lazySizes, delete s14.dataset.lazyBg;
      }
    }
  }
  function c6() {
    if (!n13) return;
    const e10 = [...n13.getVisibleSlides()], t10 = d4().preload;
    if (t10 > 0) {
      const a6 = n13.getPosition(), s13 = n13.getViewportDim();
      e10.push(...n13.getVisibleSlides(a6 + s13 * t10), ...n13.getVisibleSlides(a6 - s13 * t10));
    }
    for (const t11 of e10) r7(t11);
  }
  return { init: function(e10) {
    n13 = e10, n13.on("render", c6);
  }, destroy: function() {
    n13?.off("render", c6), n13 = void 0;
  } };
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/carousel/carousel.arrows.js
var n8 = '<svg width="24" height="24" viewBox="0 0 24 24" tabindex="-1">';
var i4 = "</svg>";
var s8 = { prevTpl: n8 + '<path d="M15 3l-9 9 9 9"></path>' + i4, nextTpl: n8 + '<path d="M9 3l9 9-9 9"></path>' + i4 };
var a4 = () => {
  let n13, i7, a6;
  function l6(r7) {
    const i8 = (function() {
      const t10 = n13?.getOptions().Arrows;
      return t3(t10) ? { ...s8, ...t10 } : s8;
    })(), a7 = `<button data-carousel-go-${r7} tabindex="0" class="f-button is-arrow is-${r7}" title="{{${r7.toUpperCase()}}}">` + i8[`${r7}Tpl`] + "</button>", l7 = e2(n13.localize(a7)) || void 0;
    return l7 && s3(l7, i8[`${r7}Class`]), l7;
  }
  function c6() {
    i7?.remove(), i7 = void 0, a6?.remove(), a6 = void 0, n13?.getContainer()?.classList.remove("has-arrows");
  }
  function g3() {
    n13 && false !== n13.getOptions().Arrows && n13.getPages().length > 1 ? (!(function() {
      if (!n13) return;
      const t10 = n13.getViewport();
      t10 && (i7 || (i7 = l6("prev"), i7 && t10.insertAdjacentElement("beforebegin", i7)), a6 || (a6 = l6("next"), a6 && t10.insertAdjacentElement("afterend", a6)), s5(n13.getContainer(), "has-arrows", true));
    })(), n13 && (i7?.toggleAttribute("aria-disabled", !n13.canGoPrev()), a6?.toggleAttribute("aria-disabled", !n13.canGoNext()))) : c6();
  }
  return { init: function(t10) {
    n13 = t10.on(["change", "refresh"], g3);
  }, destroy: function() {
    c6(), n13?.off(["change", "refresh"], g3), n13 = void 0;
  } };
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/shared/buttons.js
var t8 = '<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/>';
var M3 = '<g><line x1="11" y1="8" x2="11" y2="14"></line></g>' + t8;
var o6 = { moveLeft: ["moveLeft", "MOVE_LEFT", '<path d="M5 12h14M5 12l6 6M5 12l6-6"/>'], moveRight: ["moveRight", "MOVE_RIGHT", '<path d="M5 12h14M13 18l6-6M13 6l6 6"/>'], moveUp: ["moveUp", "MOVE_UP", '<path d="M12 5v14M18 11l-6-6M6 11l6-6"/>'], moveDown: ["moveDown", "MOVE_DOWN", '<path d="M12 5v14M18 13l-6 6M6 13l6 6"/>'], zoomOut: ["zoomOut", "ZOOM_OUT", t8], zoomIn: ["zoomIn", "ZOOM_IN", M3], toggleFull: ["toggleFull", "TOGGLE_FULL", M3], iterateZoom: ["iterateZoom", "ITERATE_ZOOM", M3], toggle1to1: ["toggleFull", "TOGGLE_FULL", '<path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/>'], rotateCCW: ["rotateCCW", "ROTATE_CCW", '<path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/>'], rotateCW: ["rotateCW", "ROTATE_CW", '<path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/>'], flipX: ["flipX", "FLIP_X", '<path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/>'], flipY: ["flipY", "FLIP_Y", '<path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/>'], reset: ["reset", "RESET", '<path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>'], toggleFS: ["toggleFS", "TOGGLE_FS", '<g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g>'] };
var v3 = {};
for (const t10 of Object.keys(o6)) {
  const M5 = o6[t10];
  v3[t10] = { tpl: `<button data-panzoom-action="${M5[0]}" class="f-button" title="{{${M5[1]}}}"><svg>${M5[2]}</svg></button>` };
}

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/carousel/carousel.toolbar.js
var s9;
!(function(t10) {
  t10.Left = "left", t10.middle = "middle", t10.right = "right";
})(s9 || (s9 = {}));
var r4 = { counter: { tpl: '<div class="f-counter"><span data-carousel-page></span>/<span data-carousel-pages></span></div>' }, download: { tpl: '<button data-carousel-download class="f-button" title="{{DOWNLOAD}}"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></button>' }, autoplay: { tpl: '<button data-autoplay-action="toggle" class="f-button" title="{{TOGGLE_AUTOPLAY}}"><svg><g><path d="M5 3.5 19 12 5 20.5Z"/></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>' }, thumbs: { tpl: '<button data-thumbs-action="toggle" class="f-button" title="{{TOGGLE_THUMBS}}"><svg><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1M9 21h1M14 21h1M19 21h1"/></svg></button>' }, ...v3 };
var u3 = { absolute: false, display: { left: [], middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY", "reset"], right: [] }, enabled: "auto", items: {} };
var c3 = () => {
  let s13, c6;
  function d4(e10) {
    const o9 = s13?.getOptions().Toolbar;
    let n13 = (t3(o9) ? { ...u3, ...o9 } : u3)[e10];
    return n13 && "function" == typeof n13 && s13 ? n13(s13) : n13;
  }
  function f3() {
    if (!s13 || c6) return;
    if (false === s13?.getOptions().Toolbar) return;
    const a6 = s13.getContainer();
    if (!a6) return;
    let u6 = d4("enabled");
    if (!u6) return;
    const f4 = d4("absolute"), p3 = s13.getSlides().length > 1;
    let g3 = false, m3 = false;
    for (const t10 of s13.getSlides()) t10.panzoomRef && (g3 = true), (t10.downloadSrc || "image" === t10.type && t10.src) && (m3 = true);
    const b3 = s13.getPlugins().Thumbs?.isEnabled() || false, h3 = p3 && s13.getPlugins().Autoplay || false, v4 = s13.getPlugins().Fullscreen && (document.fullscreenEnabled || document.webkitFullscreenEnabled);
    if ("auto" === u6 && (u6 = g3), !u6) return;
    c6 = a6.querySelector(".f-carousel__toolbar") || void 0, c6 || (c6 = document.createElement("div"), s3(c6, "f-carousel__toolbar"));
    const y3 = d4("display"), E3 = r3({}, r4, d4("items"));
    for (const i7 of ["left", "middle", "right"]) {
      const a7 = y3[i7] || [], r7 = document.createElement("div");
      s3(r7, `f-carousel__toolbar__column is-${i7}`);
      for (const i8 of a7) {
        let l6;
        if (t(i8)) {
          if ("counter" === i8 && !p3) continue;
          if ("autoplay" === i8 && !h3) continue;
          if (Object.prototype.hasOwnProperty.call(v3, i8) && !g3) continue;
          if ("fullscreen" === i8 && !v4) continue;
          if ("thumbs" === i8 && !b3) continue;
          if ("download" === i8 && !m3) continue;
          l6 = E3[i8];
        }
        if (t3(i8) && (l6 = i8), l6 && l6.tpl) {
          let t10 = s13.localize(l6.tpl);
          t10 = t10.split("<svg>").join('<svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24">');
          const e10 = e2(t10);
          e10 && ("function" == typeof l6.click && s13 && e10.addEventListener("click", (t11) => {
            t11.preventDefault(), t11.stopPropagation(), "function" == typeof l6.click && s13 && l6.click(s13, t11);
          }), r7.append(e10));
        }
      }
      c6.append(r7);
    }
    if (c6.childElementCount) {
      if (f4 && s3(c6, "is-absolute"), !c6.parentElement) {
        const t10 = d4("parentEl");
        t10 ? t10.insertAdjacentElement("afterbegin", c6) : a6.insertAdjacentElement("afterbegin", c6);
      }
      a6.contains(c6) && (s3(a6, "has-toolbar"), f4 && s3(a6, "has-absolute-toolbar"));
    }
  }
  return { init: function(t10) {
    s13 = t10, s13?.on("initSlides", f3);
  }, destroy: function() {
    s13?.off("initSlides", f3), s4(s13?.getContainer(), "has-toolbar has-absolute-toolbar"), c6?.remove(), c6 = void 0;
  }, add: function(t10, e10) {
    r4[t10] = e10;
  }, isEnabled: function() {
    return !!c6;
  } };
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/carousel/carousel.autoplay.js
var n9 = { autoStart: true, pauseOnHover: true, showProgressbar: true, timeout: 2e3 };
var o7 = () => {
  let o9, i7, s13 = false, a6 = false, r7 = false, u6 = null;
  function f3(e10) {
    const i8 = o9?.getOptions().Autoplay;
    let s14 = (t3(i8) ? { ...n9, ...i8 } : n9)[e10];
    return s14 && "function" == typeof s14 && o9 ? s14(o9) : s14;
  }
  function l6() {
    clearTimeout(i7), i7 = void 0;
  }
  function g3() {
    if (!o9 || !s13 || r7 || a6 || i7 || !o9.isSettled() || (function() {
      const t11 = o9?.getPage()?.slides || [];
      for (const e10 of t11) if (0 === e10.state) return true;
      return false;
    })()) return;
    !(function() {
      if (!o9) return;
      if (m3(), !f3("showProgressbar")) return;
      let t11 = f3("progressbarParentEl");
      !t11 && o9.getPlugins().Toolbar?.isEnabled() && (t11 = o9.getContainer());
      if (!t11 && true !== o9.getPlugins().Toolbar?.isEnabled()) {
        const e10 = o9.getPages()[0]?.slides || [], n14 = o9.getPage()?.slides || [];
        1 === e10.length && 1 === n14.length && (t11 = n14[0].el);
      }
      t11 || (t11 = o9.getViewport());
      if (!t11) return;
      u6 = document.createElement("div"), s3(u6, "f-progressbar"), t11.prepend(u6);
      const n13 = f3("timeout") || 1e3;
      u6.style.animationDuration = `${n13}ms`;
    })();
    const t10 = f3("timeout");
    i7 = setTimeout(() => {
      o9 && s13 && !a6 && (o9.isInfinite() || o9.getPageIndex() !== o9.getPages().length - 1 ? o9.next() : o9.goTo(0));
    }, t10);
  }
  function c6() {
    if (!o9 || o9.getPages().length < 2 || false === o9.getOptions().Autoplay) return;
    if (s13) return;
    s13 = true, o9.emit("autoplay:start", f3("timeout")), s3(o9.getContainer(), "has-autoplay"), o9.getTween()?.on("start", b3);
    const t10 = o9?.getContainer();
    t10 && f3("pauseOnHover") && matchMedia("(hover: hover)").matches && (t10.addEventListener("mouseenter", E3, false), t10.addEventListener("mouseleave", w3, false)), o9.on("change", P), o9.on("settle", y3), o9.on("contentReady", h3), o9.on("panzoom:touchStart", d4), o9.on("panzoom:wheel", d4), o9.isSettled() && g3();
  }
  function d4() {
    if (l6(), m3(), o9) {
      if (s13) {
        o9.emit("autoplay:end"), o9.getTween()?.off("start", b3);
        const t10 = o9.getContainer();
        t10 && (t10.classList.remove("has-autoplay"), t10.removeEventListener("mouseenter", E3, false), t10.removeEventListener("mouseleave", w3, false));
      }
      o9.off("change", P), o9.off("settle", y3), o9.off("contentReady", h3), o9.off("panzoom:touchStart", d4), o9.off("panzoom:wheel", d4);
    }
    s13 = false, a6 = false;
  }
  function m3() {
    u6 && (u6.remove(), u6 = null);
  }
  function p3() {
    o9 && o9.getPages().length > 1 && f3("autoStart") && c6();
  }
  function h3() {
    g3();
  }
  function v4(t10, e10) {
    const n13 = e10.target;
    n13 && !e10.defaultPrevented && "toggle" === n13.dataset.autoplayAction && S2.toggle();
  }
  function P() {
    !o9 || !o9?.isInfinite() && o9.getPageIndex() === o9.getPages().length - 1 ? d4() : (l6(), m3());
  }
  function y3() {
    g3();
  }
  function b3() {
    l6(), m3();
  }
  function E3() {
    r7 = true, s13 && (l6(), m3());
  }
  function w3() {
    r7 = false, s13 && !a6 && o9?.isSettled() && g3();
  }
  const S2 = { init: function(t10) {
    o9 = t10, o9.on("ready", p3), o9.on("click", v4);
  }, destroy: function() {
    d4(), o9?.off("ready", p3), o9?.off("click", v4), o9 = void 0;
  }, isEnabled: () => s13, pause: function() {
    a6 = true, l6(), m3();
  }, resume: function() {
    a6 = false, s13 && !r7 && g3();
  }, start() {
    c6();
  }, stop() {
    d4();
  }, toggle() {
    s13 ? d4() : c6();
  } };
  return S2;
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/carousel/carousel.thumbs.js
var l3 = { Carousel: { Lazyload: { showLoading: false } }, minCount: 2, showOnStart: true, thumbTpl: '<button aria-label="Slide to #{{page}}"><img draggable="false" alt="{{alt}}" data-lazy-src="{{src}}" /></button>', type: "modern" };
var c4;
var u4 = () => {
  let u6, f3, d4, m3, g3, h3 = 0, p3 = 0, b3 = true;
  function y3(e10) {
    const n13 = u6?.getOptions().Thumbs;
    let o9 = (t3(n13) ? { ...l3, ...n13 } : l3)[e10];
    return o9 && "function" == typeof o9 && u6 ? o9(u6) : o9;
  }
  function v4() {
    if (!u6) return false;
    if (false === u6?.getOptions().Thumbs) return false;
    let t10 = 0;
    for (const e10 of u6.getSlides()) e10.thumbSrc && t10++;
    return t10 >= y3("minCount");
  }
  function x3() {
    return "modern" === y3("type");
  }
  function S2() {
    return "scrollable" === y3("type");
  }
  function C() {
    const t10 = [], e10 = u6?.getSlides() || [];
    for (const n13 of e10) t10.push({ index: n13.index, class: n13.thumbClass, html: T2(n13) });
    return t10;
  }
  function T2(t10) {
    const e10 = t10.thumb ? t10.thumb instanceof HTMLImageElement ? t10.thumb.src : t10.thumb : t10.thumbSrc || void 0, o9 = void 0 === t10.thumbAlt ? `Thumbnail #${(t10.index || 0) + 1}` : t10.thumbAlt + "";
    let r7 = y3("thumbTpl");
    return r7 = n5(r7, "{{alt}}", o9), r7 = n5(r7, "{{src}}", e10 + ""), r7 = n5(r7, "{{index}}", `${t10.index || 0}`), r7 = n5(r7, "{{page}}", `${(t10.index || 0) + 1}`), r7;
  }
  function L(t10) {
    return `<div index="${t10.index || 0}" class="f-thumbs__slide ${t10.class || ""}">${t10.html || ""}</div>`;
  }
  function E3(t10 = false) {
    const e10 = u6?.getContainer();
    if (!u6 || !e10 || d4 || !v4()) return;
    const n13 = y3("Carousel")?.classes || {};
    if (n13.container = n13.container || "f-thumbs", !d4) {
      const t11 = e10.nextElementSibling;
      t11?.classList.contains(n13.container) && (d4 = t11);
    }
    if (!d4) {
      d4 = document.createElement("div");
      const t11 = y3("parentEl");
      t11 ? t11.insertAdjacentElement("beforeend", d4) : e10.insertAdjacentElement("afterend", d4);
    }
    s3(d4, n13.container), s3(d4, "f-thumbs"), s3(d4, `is-${y3("type")}`), t10 && s3(d4, "is-hidden");
  }
  function P() {
    if (!d4 || !S2()) return;
    m3 = document.createElement("div"), s3(m3, "f-thumbs__viewport");
    let t10 = "";
    for (const e10 of C()) {
      "string" == typeof (e10.html || "") && (t10 += L(e10));
    }
    m3.innerHTML = t10, d4.append(m3), d4.addEventListener("click", (t11) => {
      t11.preventDefault();
      const e10 = t11.target.closest("[index]"), n13 = parseInt(e10?.getAttribute("index") || "-1");
      u6 && n13 > -1 && u6.goTo(n13);
    }), g3 = new IntersectionObserver((t11) => {
      t11.forEach((t12) => {
        t12.isIntersecting && t12.target instanceof HTMLImageElement && (t12.target.src = t12.target.getAttribute("data-lazy-src") + "", t12.target.removeAttribute("data-lazy-src"), g3?.unobserve(t12.target));
      });
    }, { root: m3, rootMargin: "100px" }), d4.querySelectorAll("[data-lazy-src]").forEach((t11) => {
      g3?.observe(t11);
    }), u6?.emit("thumbs:ready");
  }
  function w3() {
    if (!c4 || !u6 || !d4 || S2() || f3) return;
    const t10 = C();
    if (!t10.length) return;
    const n13 = r3({}, { Sync: { target: u6 }, Lazyload: { preload: 1 }, slides: t10, classes: { container: "f-thumbs", viewport: "f-thumbs__viewport", slide: "f-thumbs__slide" }, center: true, fill: !x3(), infinite: false, dragFree: true, rtl: u6.getOptions().rtl || false, slidesPerPage: (t11) => {
      let e10 = 0;
      return x3() && (!(function() {
        if (!x3()) return;
        if (!d4) return;
        const t12 = (t13) => d4 && parseFloat(getComputedStyle(d4).getPropertyValue("--f-thumb-" + t13)) || 0;
        h3 = t12("width"), p3 = t12("clip-width");
      })(), e10 = 4 * (h3 - p3)), t11 && t11.getTotalSlideDim() <= t11.getViewportDim() - e10 ? 1 / 0 : 1;
    } }, l3.Carousel || {}, y3("Carousel") || {});
    f3 = c4(d4, n13, { Sync: t7, Lazyload: n7 }), f3.on("ready", () => {
      s3(d4, "is-syncing"), u6?.emit("thumbs:ready"), x3() && u6?.on("render", $);
    }), f3.on("destroy", () => {
      u6?.emit("thumbs:destroy");
    }), f3.init(), f3.getGestures()?.on("start", () => {
      b3 = false;
    }), f3.on("click", (t11, e10) => {
      const n14 = e10.target;
      if (n14) {
        const t12 = n14.matches("button") ? n14 : n14.firstElementChild;
        t12 && t12.matches("button") && (e10.preventDefault(), t12.focus({ preventScroll: true }));
      }
    }), s3(u6.getContainer(), "has-thumbs"), R2();
  }
  function j() {
    v4() && y3("showOnStart") && (E3(), P());
  }
  function A() {
    v4() && (w3(), u6?.on("addSlide", _2), u6?.on("removeSlide", I2), u6?.on("click", O2), u6?.on("refresh", q2), u6?.getGestures()?.on("start", M5), D2(true));
  }
  function M5() {
    b3 = true;
    const t10 = document.activeElement?.closest(".f-thumbs");
    t10 && document.activeElement?.blur();
  }
  function $() {
    d4?.classList.toggle("is-syncing", false === u6?.hasNavigated() || u6?.getTween()?.isRunning()), R2(), u6?.getGestures()?.isPointerDown() && (function() {
      if (!x3()) return;
      if (!u6 || !f3) return;
      if (!b3) return;
      const t10 = f3.getTween(), e10 = f3.getPages(), n13 = u6.getPageIndex() || 0, r7 = u6.getPageProgress() || 0;
      if (!(u6 && e10 && e10[n13] && t10)) return;
      const s13 = t10.isRunning() ? t10.getCurrentValues().pos : f3.getPosition();
      if (void 0 === s13) return;
      let i7 = e10[n13].pos + r7 * (h3 - p3);
      i7 = t2(e10[0].pos, i7, e10[e10.length - 1].pos), t10.from({ pos: s13 }).to({ pos: i7 }).start();
    })();
  }
  function z2() {
    b3 = true, D2();
  }
  function _2(t10, e10) {
    const n13 = { html: T2(e10) };
    if (f3) f3.add(n13, e10.index);
    else if (m3) {
      const t11 = e2(L(n13));
      if (t11) {
        m3.append(t11);
        const e11 = t11.querySelector("img");
        e11 && g3?.observe(e11);
      }
    }
  }
  function I2(t10, e10) {
    f3 ? f3.remove(e10.index) : m3 && m3.querySelector(`[index="${e10.index}"]`)?.remove();
  }
  function O2(t10, e10) {
    const n13 = e10.target;
    e10.defaultPrevented || "toggle" !== n13?.dataset?.thumbsAction || (d4 || (E3(true), P(), w3()), d4 && d4.classList.toggle("is-hidden"));
  }
  function q2() {
    D2();
  }
  function D2(t10 = false) {
    if (!u6 || !m3 || !S2()) return;
    const e10 = u6.getPageIndex();
    m3.querySelectorAll(".is-selected").forEach((t11) => {
      t11.classList.remove("is-selected");
    });
    const n13 = m3.querySelector(`[index="${e10}"]`);
    if (n13) {
      n13.classList.add("is-selected");
      const e11 = m3.getBoundingClientRect(), o9 = n13.getBoundingClientRect(), r7 = n13.offsetTop - m3.offsetTop - 0.5 * e11.height + 0.5 * o9.height, s13 = n13.scrollLeft - m3.scrollLeft - 0.5 * e11.width + 0.5 * o9.width;
      m3.scrollTo({ top: r7, left: s13, behavior: t10 ? "instant" : "smooth" });
    }
  }
  function R2() {
    if (!x3()) return;
    if (!u6 || !f3) return;
    const t10 = f3?.getSlides() || [];
    let e10 = -0.5 * h3;
    for (const n13 of t10) {
      const t11 = n13.el;
      if (!t11) continue;
      let o9 = u6.getPageProgress(n13.index) || 0;
      o9 = Math.max(-1, Math.min(1, o9)), o9 > -1 && o9 < 1 && (e10 += 0.5 * h3 * (1 - Math.abs(o9))), o9 = Math.round(1e4 * o9) / 1e4, e10 = Math.round(1e4 * e10) / 1e4, t11.style.setProperty("--progress", `${Math.abs(o9)}`), t11.style.setProperty("--shift", `${u6?.isRTL() ? -1 * e10 : e10}px`), o9 > -1 && o9 < 1 && (e10 += 0.5 * h3 * (1 - Math.abs(o9)));
    }
  }
  return { init: function(t10, e10) {
    c4 = e10, u6 = t10, u6.on("ready", A), u6.on("initSlides", j), u6.on("change", z2);
  }, destroy: function() {
    S2() && u6?.emit("thumbs:destroy"), u6?.off("ready", A), u6?.off("initSlides", j), u6?.off("change", z2), u6?.off("render", $), u6?.off("addSlide", _2), u6?.off("click", O2), u6?.off("refresh", q2), u6?.getGestures()?.off("start", M5), u6?.getContainer()?.classList.remove("has-thumbs"), u6 = void 0, f3?.destroy(), f3 = void 0, d4?.remove(), d4 = void 0;
  }, getCarousel: function() {
    return f3;
  }, getContainer: function() {
    return d4;
  }, getType: function() {
    return y3("type");
  }, isEnabled: v4 };
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/carousel/carousel.html.js
var n10 = { autosize: false, iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" }, preload: false };
var s10 = () => {
  let s13;
  function l6() {
    const e10 = s13?.getOptions().Html;
    return t3(e10) ? r3({}, n10, e10) : n10;
  }
  function r7() {
    return false !== s13?.getOptions().Html;
  }
  function c6(t10) {
    return "iframe" === t10.type || "pdf" === t10.type || "gmap" === t10.type;
  }
  function d4(t10) {
    const e10 = `${t10}`;
    return e10.match(/^\d+$/) ? `${e10}px` : e10;
  }
  function p3(t10) {
    if (void 0 === t10 || "" === t10) return;
    const e10 = `${t10}`.trim();
    if (!e10.match(/^\d+(\.\d+)?(px)?$/)) return;
    const o9 = parseFloat(e10);
    return Number.isFinite(o9) ? o9 : void 0;
  }
  function h3(t10, e10) {
    const o9 = t10[e10] ?? l6()[e10];
    return "true" === o9 || "false" !== o9 && o9;
  }
  function m3(t10, o9) {
    if (!r7()) return;
    let i7 = o9.type, a6 = o9.src;
    if (!i7 && t(a6)) {
      if ("#" === a6.charAt(0) ? i7 = "inline" : a6.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.((a)?png|avif|gif|jp(g|eg)|pjp(eg)?|jfif|svg|webp|bmp|ico|tif(f)?)((\?|#).*)?$)/i) ? i7 = "image" : a6.match(/\.(pdf)((\?|#).*)?$/i) ? i7 = "pdf" : a6.match(/\.(html|php)((\?|#).*)?$/i) && (i7 = "iframe"), !i7) {
        const t11 = a6.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+\.?\d+?)z))|(?:\?ll=))(.*)?/i);
        t11 && (a6 = `https://maps.google.${t11[1]}/?ll=${(t11[2] ? t11[2] + "&z=" + Math.floor(parseFloat(t11[3])) + (t11[4] ? t11[4].replace(/^\//, "&") : "") : t11[4] + "").replace(/\?/, "&")}&output=${t11[4] && t11[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, i7 = "gmap");
      }
      if (!i7) {
        const t11 = a6.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i);
        t11 && (a6 = `https://maps.google.${t11[1]}/maps?q=${t11[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, i7 = "gmap");
      }
      i7 && (o9.src = a6, o9.type = i7);
    }
  }
  function f3(t10, e10) {
    r7() && c6(e10) && (function(t11) {
      const e11 = t11.el, o9 = t11.src;
      if (!s13 || !e11 || !o9) return;
      const n13 = document.createElement("iframe");
      s3(n13, "f-iframe");
      for (const [t12, e12] of Object.entries(l6().iframeAttr || {})) n13.setAttribute(t12, e12);
      n13.onerror = () => {
        t11.state = 2, s13?.showError(t11, "{{IFRAME_ERROR}}");
      };
      const r8 = document.createElement("div");
      s3(r8, "f-html"), r8.append(n13), t11.htmlEl = r8, t11.contentEl = n13, s3(e11, `has-html has-iframe has-${t11.type}`), e11.prepend(r8), y3(t11);
      const c7 = h3(t11, "preload"), d5 = h3(t11, "autosize");
      "iframe" === t11.type && (c7 || d5) ? (t11.state = 0, s13.showLoading(t11), s3(e11, "is-loading"), n13.onload = () => {
        if (!s13 || 2 === s13.getState() || !n13.src.length || t11.contentEl !== n13 || !n13.isConnected) return;
        t11.state = 1;
        const o10 = "true" !== n13.dataset.ready;
        n13.dataset.ready = "true", w3(t11), s13.hideLoading(t11), o10 && s13.emit("contentReady", t11), s4(e11, "is-loading");
      }, n13.src = `${o9}`) : (n13.src = `${o9}`, s13.emit("contentReady", t11));
    })(e10);
  }
  function g3(t10, e10) {
    if (c6(e10)) {
      const t11 = e10.el;
      s13?.hideError(e10), e10.contentEl?.remove(), e10.contentEl = void 0, e10.htmlEl?.remove(), e10.htmlEl = void 0, t11 && (s4(t11, "has-html has-iframe has-pdf has-gmap"), s4(t11, "is-loading"));
    }
  }
  function u6() {
    for (const t10 of s13?.getSlides() || []) c6(t10) && (y3(t10), 1 === t10.state && w3(t10));
  }
  function y3(t10) {
    const e10 = t10.htmlEl;
    if (e10 && c6(t10) && (e10.style.aspectRatio = "", e10.style.width = "", e10.style.height = "", e10.style.maxWidth = "", e10.style.maxHeight = "", t10.width && (e10.style.maxWidth = d4(t10.width)), t10.height && (e10.style.maxHeight = d4(t10.height)), t10.aspectRatio)) {
      const o9 = t10.aspectRatio.split("/"), i7 = parseFloat(o9[0].trim()), a6 = o9[1] ? parseFloat(o9[1].trim()) : 0, n13 = i7 && a6 ? i7 / a6 : i7;
      e10.offsetHeight;
      const s14 = e10.getBoundingClientRect(), l7 = n13 < (s14.width || 1) / (s14.height || 1);
      e10.style.aspectRatio = `${t10.aspectRatio}`, e10.style.width = l7 ? "auto" : "", e10.style.height = l7 ? "" : "auto";
    }
  }
  function w3(t10) {
    const e10 = t10.contentEl, o9 = e10?.parentElement, i7 = o9?.style;
    let a6 = h3(t10, "autosize"), n13 = p3(t10.width) || 0, s14 = p3(t10.height) || 0;
    if (n13 && s14 && (a6 = false), e10 && o9 && i7 && a6) {
      try {
        const t11 = window.getComputedStyle(o9), a7 = parseFloat(t11.paddingLeft) + parseFloat(t11.paddingRight), l7 = parseFloat(t11.paddingTop) + parseFloat(t11.paddingBottom), r8 = e10.contentWindow;
        if (r8) {
          const t12 = r8.document, e11 = t12.getElementsByTagName("html")[0], o10 = t12.body;
          i7.width = "";
          const c7 = window.getComputedStyle(o10), d5 = parseFloat(c7.marginLeft) + parseFloat(c7.marginRight), p4 = o10.style.overflow || "";
          o10.style.overflow = "hidden", n13 = n13 || o10.scrollWidth + d5 + a7, i7.flex = "0 0 auto", i7.width = `${n13}px`, i7.height = `${o10.scrollHeight}px`, o10.style.overflow = p4;
          s14 = Math.max(e11.scrollHeight, Math.ceil(e11.getBoundingClientRect().height)) + l7;
        }
      } catch {
      }
      (n13 || s14) && Object.assign(i7, { flex: "0 1 auto", width: n13 ? `${n13}px` : "", height: s14 ? `${s14}px` : "" });
    }
  }
  return { init: function(t10) {
    s13 = t10, s13.on("addSlide", m3), s13.on("attachSlideEl", f3), s13.on("detachSlideEl", g3), s13.on("refresh", u6);
  }, destroy: function() {
    s13?.off("addSlide", m3), s13?.off("attachSlideEl", f3), s13?.off("detachSlideEl", g3), s13?.off("refresh", u6), s13 = void 0;
  } };
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/carousel/carousel.video.js
var i5 = (t10, e10 = {}) => {
  const o9 = new URL(t10), n13 = new URLSearchParams(o9.search), i7 = new URLSearchParams();
  for (const [t11, o10] of [...n13, ...Object.entries(e10)]) {
    let e11 = o10 + "";
    if ("t" === t11) {
      let t12 = e11.match(/((\d*)m)?(\d*)s?/);
      t12 && i7.set("start", 60 * parseInt(t12[2] || "0") + parseInt(t12[3] || "0") + "");
    } else i7.set(t11, e11);
  }
  let s13 = i7 + "", r7 = t10.match(/#t=((.*)?\d+s)/);
  return r7 && (s13 += `#t=${r7[1]}`), s13;
};
var s11 = { autoplay: false, html5videoTpl: `<video class="f-html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
    <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`, iframeAttr: { allow: "autoplay; fullscreen", scrolling: "no", referrerPolicy: "strict-origin-when-cross-origin", credentialless: "" }, vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 }, youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 } };
var r5 = () => {
  let r7, c6 = false;
  function l6() {
    const t10 = r7?.getOptions().Video;
    return t3(t10) ? { ...s11, ...t10 } : s11;
  }
  function a6() {
    return r7?.getPage()?.slides[0];
  }
  const m3 = (t10) => {
    try {
      let e10 = JSON.parse(t10.data);
      if ("https://player.vimeo.com" === t10.origin) {
        if ("ready" === e10.event) for (let e11 of Array.from(r7?.getContainer()?.getElementsByClassName("f-iframe") || [])) e11 instanceof HTMLIFrameElement && e11.contentWindow === t10.source && (e11.dataset.ready = "true");
      } else if (t10.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === e10.event) {
        const t11 = document.getElementById(e10.id);
        t11 && (t11.dataset.ready = "true");
      }
    } catch (t11) {
    }
  };
  function d4(t10, e10) {
    const n13 = e10.src;
    if (!t(n13)) return;
    let s13 = e10.type;
    if (!s13 || "html5video" === s13) {
      const t11 = n13.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i);
      t11 && (s13 = "html5video", e10.html5videoFormat = e10.html5videoFormat || "video/" + ("ogv" === t11[1] ? "ogg" : t11[1]));
    }
    if (!s13 || "youtube" === s13) {
      const t11 = n13.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i);
      if (t11) {
        const o9 = { ...l6().youtube, ...e10.youtube || {} }, r8 = `www.youtube${o9.nocookie ? "-nocookie" : ""}.com`, c7 = i5(n13, o9), a7 = encodeURIComponent(t11[2]);
        e10.videoId = a7, e10.src = `https://${r8}/embed/${a7}?${c7}`, e10.thumb = e10.thumb || `https://i.ytimg.com/vi/${a7}/mqdefault.jpg`, s13 = "youtube";
      }
    }
    if (!s13 || "vimeo" === s13) {
      const t11 = n13.match(/^.+vimeo.com\/(?:\/)?(video\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/);
      if (t11) {
        const o9 = { ...l6().vimeo, ...e10.vimeo || {} }, r8 = i5(n13, o9), c7 = encodeURIComponent(t11[2]), a7 = t11[5] || "";
        e10.videoId = c7, e10.src = `https://player.vimeo.com/video/${c7}?${a7 ? `h=${a7}${r8 ? "&" : ""}` : ""}${r8}`, s13 = "vimeo";
      }
    }
    e10.type = s13;
  }
  function u6(e10, i7) {
    "html5video" === i7.type && (function(e11) {
      const i8 = e11.el, s13 = e11.src;
      if (!r7 || !i8 || !s13) return;
      const c7 = e11.html5videoTpl || l6().html5videoTpl, a7 = e11.html5videoFormat || l6().html5videoFormat;
      if (!c7) return;
      const m4 = e11.poster || (e11.thumb && t(e11.thumb) ? e11.thumb : ""), d5 = e2(c7.replace(/\{\{src\}\}/gi, s13 + "").replace(/\{\{format\}\}/gi, a7 || "").replace(/\{\{poster\}\}/gi, m4 + ""));
      if (!d5) return;
      const u7 = document.createElement("div");
      s3(u7, "f-html"), u7.append(d5), e11.contentEl = d5, e11.htmlEl = u7, s3(i8, `has-${e11.type}`), i8.prepend(u7), y3(e11), r7.emit("contentReady", e11);
    })(i7), "youtube" !== i7.type && "vimeo" !== i7.type || (function(e11) {
      const o9 = e11.el, n13 = e11.src;
      if (!r7 || !o9 || !n13) return;
      const i8 = document.createElement("iframe");
      s3(i8, "f-iframe"), i8.setAttribute("id", `f-iframe_${e11.videoId}`);
      for (const [t10, e12] of Object.entries(l6().iframeAttr || {})) i8.setAttribute(t10, e12);
      "youtube" === e11.type && (i8.onload = () => {
        1 === r7?.getState() && i8.contentWindow?.postMessage(JSON.stringify({ event: "listening", id: i8.getAttribute("id") }), "*");
      }), i8.onerror = () => {
        r7?.showError(e11, "{{IFRAME_ERROR}}");
      };
      const s13 = document.createElement("div");
      s3(s13, "f-html"), s13.append(i8), e11.contentEl = i8, e11.htmlEl = s13, s3(o9, `has-html has-iframe has-${e11.type}`), i8.src = `${e11.src}`, o9.prepend(s13), y3(e11), r7.emit("contentReady", e11);
    })(i7);
  }
  function f3(t10, e10) {
    "html5video" !== e10.type && "youtube" !== e10.type && "vimeo" !== e10.type || (e10.contentEl?.remove(), e10.contentEl = void 0, e10.htmlEl?.remove(), e10.htmlEl = void 0), e10.poller && clearTimeout(e10.poller);
  }
  function p3() {
    c6 = false;
  }
  function h3() {
    if (c6) return;
    c6 = true;
    const t10 = a6();
    (t10 && void 0 !== t10.autoplay ? t10.autoplay : l6().autoplay) && ((function() {
      const t11 = a6(), e10 = t11?.el;
      if (e10 && "html5video" === t11?.type) try {
        const t12 = e10.querySelector("video");
        if (t12) {
          const e11 = t12.play();
          void 0 !== e11 && e11.then(() => {
          }).catch((e12) => {
            t12.muted = true, t12.play();
          });
        }
      } catch (t12) {
      }
      const o9 = t11?.htmlEl;
      o9 instanceof HTMLIFrameElement && o9.contentWindow?.postMessage('{"event":"command","func":"stopVideo","args":""}', "*");
    })(), (function() {
      const t11 = a6(), e10 = t11?.type, o9 = t11?.el;
      if (!o9 || "youtube" !== e10 && "vimeo" !== e10) return;
      const n13 = () => {
        if (t11.contentEl && t11.contentEl instanceof HTMLIFrameElement && t11.contentEl.contentWindow) {
          let e11;
          if ("true" === t11.contentEl.dataset.ready) return e11 = "youtube" === t11.type ? { event: "command", func: "playVideo" } : { method: "play", value: "true" }, e11 && t11.contentEl.contentWindow.postMessage(JSON.stringify(e11), "*"), void (t11.poller = void 0);
          "youtube" === t11.type && (e11 = { event: "listening", id: t11.contentEl.getAttribute("id") }, t11.contentEl.contentWindow.postMessage(JSON.stringify(e11), "*"));
        }
        t11.poller = setTimeout(n13, 250);
      };
      n13();
    })());
  }
  function y3(t10) {
    const e10 = t10?.htmlEl;
    if (t10 && e10 && ("html5video" === t10.type || "youtube" === t10.type || "vimeo" === t10.type)) {
      if (e10.style.aspectRatio = "", e10.style.width = "", e10.style.height = "", e10.style.maxWidth = "", e10.style.maxHeight = "", t10.width) {
        let o9 = `${t10.width}`;
        o9.match(/^\d+$/) && (o9 += "px"), e10.style.maxWidth = `${o9}`;
      }
      if (t10.height) {
        let o9 = `${t10.height}`;
        o9.match(/^\d+$/) && (o9 += "px"), e10.style.maxHeight = `${o9}`;
      }
      if (t10.aspectRatio) {
        const o9 = t10.aspectRatio.split("/"), n13 = parseFloat(o9[0].trim()), i7 = o9[1] ? parseFloat(o9[1].trim()) : 0, s13 = n13 && i7 ? n13 / i7 : n13;
        e10.offsetHeight;
        const r8 = e10.getBoundingClientRect(), c7 = s13 < (r8.width || 1) / (r8.height || 1);
        e10.style.aspectRatio = `${t10.aspectRatio}`, e10.style.width = c7 ? "auto" : "", e10.style.height = c7 ? "" : "auto";
      }
    }
  }
  function v4() {
    y3(a6());
  }
  return { init: function(t10) {
    r7 = t10, r7.on("addSlide", d4), r7.on("attachSlideEl", u6), r7.on("detachSlideEl", f3), r7.on("ready", h3), r7.on("change", p3), r7.on("settle", h3), r7.on("refresh", v4), window.addEventListener("message", m3);
  }, destroy: function() {
    r7?.off("addSlide", d4), r7?.off("attachSlideEl", u6), r7?.off("detachSlideEl", f3), r7?.off("ready", h3), r7?.off("change", p3), r7?.off("settle", h3), r7?.off("refresh", v4), window.removeEventListener("message", m3), r7 = void 0;
  } };
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/carousel/carousel.fullscreen.js
var t9 = { autoStart: false, btnTpl: '<button data-fullscreen-action="toggle" class="f-button" title="{{TOGGLE_FULLSCREEN}}"><svg><g><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>' };
var n11 = "in-fullscreen-mode";
var l4 = () => {
  let l6;
  function u6(n13) {
    const u7 = l6?.getOptions().Fullscreen;
    let c7 = (t3(u7) ? { ...t9, ...u7 } : t9)[n13];
    return c7 && "function" == typeof c7 && l6 ? c7(l6) : c7;
  }
  function c6() {
    l6?.getPlugins().Toolbar?.add("fullscreen", { tpl: u6("btnTpl") });
  }
  function o9() {
    if (u6("autoStart")) {
      const e10 = i7();
      e10 && a6(e10);
    }
  }
  function s13(e10, t10) {
    const n13 = t10.target;
    n13 && !t10.defaultPrevented && "toggle" === n13.dataset.fullscreenAction && d4();
  }
  function i7() {
    return u6("el") || l6?.getContainer() || void 0;
  }
  function r7() {
    const e10 = document;
    return e10.fullscreenEnabled ? !!e10.fullscreenElement : !!e10.webkitFullscreenEnabled && !!e10.webkitFullscreenElement;
  }
  function a6(e10) {
    const t10 = document;
    let l7;
    return e10 || (e10 = t10.documentElement), t10.fullscreenEnabled ? l7 = e10.requestFullscreen() : t10.webkitFullscreenEnabled && (l7 = e10.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)), l7 && l7.then(() => {
      e10.classList.add(n11);
    }), l7;
  }
  function f3() {
    const e10 = document;
    let t10;
    return e10.fullscreenEnabled ? t10 = e10.fullscreenElement && e10.exitFullscreen() : e10.webkitFullscreenEnabled && (t10 = e10.webkitFullscreenElement && e10.webkitExitFullscreen()), t10 && t10.then(() => {
      i7()?.classList.remove(n11);
    }), t10;
  }
  function d4() {
    if (r7()) f3();
    else {
      const e10 = i7();
      e10 && a6(e10);
    }
  }
  return { init: function(e10) {
    l6 = e10, l6.on("initPlugins", c6), l6.on("ready", o9), l6.on("click", s13);
  }, destroy: function() {
    l6?.off("initPlugins", c6), l6?.off("ready", o9), l6?.off("click", s13);
  }, exit: f3, inFullscreen: r7, request: a6, toggle: d4 };
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/fancybox/fancybox.hash.js
var n12;
var o8;
var r6 = false;
var i6 = false;
var s12 = false;
var a5 = false;
var l5 = () => {
  const t10 = new URL(document.URL).hash, e10 = t10.slice(1).split("-"), n13 = e10[e10.length - 1], o9 = n13 && /^\+?\d+$/.test(n13) && parseInt(e10.pop() || "1", 10) || 1;
  return { urlHash: t10, urlSlug: e10.join("-"), urlIndex: o9 };
};
var c5 = () => {
  const t10 = n12?.getInstance(), e10 = t10?.getState();
  return !(!t10 || 0 !== e10 && 1 !== e10);
};
var u5 = () => {
  if (!n12) return;
  if (c5()) return;
  const { urlSlug: t10, urlIndex: e10 } = l5();
  if (!t10) return;
  let o9 = document.querySelector(`[data-slug="${t10}"]`);
  o9 && n12.fromTriggerEl(o9), c5() || (o9 = document.querySelectorAll(`[data-fancybox="${t10}"]`)[e10 - 1], o9 && n12.fromTriggerEl(o9, { startIndex: e10 - 1 })), c5() && o9 && !o9.closest("[inert]") && o9.scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
};
var d3 = (t10) => {
  const n13 = t10.getOptions().Hash, o9 = t10.getSlide();
  return o9 && (o9.slug || o9.fancybox || (t3(n13) ? n13.slug : "")) || "";
};
var g2 = (t10) => {
  const e10 = d3(t10), n13 = t10.getSlide();
  if (!n13 || !e10) return "";
  let o9 = parseInt(n13.index + "", 10) + 1, r7 = n13.slug ? `#${n13.slug}` : `#${e10}-${o9}`;
  return (t10.getCarousel()?.getPages()?.length || 0) < 2 && (r7 = `#${e10}`), r7;
};
var f2 = () => {
  if (!n12) return;
  if (s12) return;
  const t10 = n12?.getInstance(), o9 = t10?.getCarousel(), { urlSlug: r7, urlIndex: c6 } = l5(), d4 = t10?.getOptions().Hash;
  if (false !== d4) {
    if (t10 && 1 === t10.getState() && o9) {
      const n13 = o9.getSlides();
      for (const t11 of n13 || []) if (t11.slug === r7 || (t11.fancybox === r7 || t3(d4) && d4.slug === r7) && t11.index === c6 - 1) return i6 = false, void o9.goTo(t11.index);
      a5 = true, t10.close(), a5 = false;
    }
    u5();
  }
};
var h2 = () => {
  n12 && (o8 = setTimeout(() => {
    r6 = true, u5(), r6 = false;
  }, 300), window.addEventListener("hashchange", f2, false));
};
var w2;
function m2() {
  history.scrollRestoration && w2 && (history.scrollRestoration = w2, w2 = void 0);
}
var p2 = () => {
  let t10, e10 = "";
  function c6() {
    if (!t10 || !t10.isTopMost() || false === t10.getOptions().Hash) return;
    if (r6) {
      const e11 = t10.getOptions().sync;
      e11 && e11.goTo(t10?.getCarousel()?.getPageIndex() || 0, { transition: false, tween: false });
    }
    const n13 = t10.getCarousel();
    if (!n13) return;
    if (!t10.getSlide()) return;
    const o9 = d3(t10);
    if (!o9) return;
    const { urlHash: s13, urlSlug: a6 } = l5(), c7 = g2(t10);
    s13 !== c7 && (e10 = s13), history.scrollRestoration && !w2 && (w2 = history.scrollRestoration, history.scrollRestoration = "manual", window.addEventListener("beforeunload", m2)), n13.on("change", u6);
    const f4 = o9 !== a6;
    try {
      window.history[f4 ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + c7), f4 && (i6 = true);
    } catch (t11) {
    }
  }
  function u6() {
    if (!t10 || !t10.isTopMost() || false === t10.getOptions().Hash) return;
    if (!t10.getSlide()) return;
    if (!d3(t10)) return;
    const e11 = g2(t10);
    s12 = true;
    try {
      window.history.replaceState({}, document.title, window.location.pathname + window.location.search + e11);
    } catch (t11) {
    }
    s12 = false;
  }
  function f3() {
    if (!t10 || !t10.isTopMost() || false === t10.getOptions().Hash || a5) return;
    if (d3(t10)) {
      s12 = true;
      try {
        i6 && !(function() {
          if (window.parent === window) return false;
          try {
            var t11 = window.frameElement;
          } catch (e11) {
            t11 = null;
          }
          return null === t11 ? "data:" === location.protocol : t11.hasAttribute("sandbox");
        })() && "IFRAME" !== document.activeElement?.nodeName ? window.history.back() : window.history.replaceState({}, document.title, window.location.pathname + window.location.search + e10);
      } catch (t11) {
      }
      s12 = false;
    }
  }
  return { init: function(e11) {
    clearTimeout(o8), t10 = e11, t10.on("ready", c6), t10.on("close", f3);
  }, destroy: function() {
    t10?.off("ready", c6), t10?.off("close", f3);
    const e11 = t10?.getCarousel();
    e11 && e11.off("change", u6), t10 = void 0, n12?.getInstance() || (m2(), window.removeEventListener("beforeunload", m2));
  } };
};
p2.getInfoFromURL = l5, p2.startFromUrl = u5, p2.setup = function(e10) {
  n12 || (n12 = e10, e8() && (/complete|interactive|loaded/.test(document.readyState) ? h2() : document.addEventListener("DOMContentLoaded", h2)));
};

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/fancybox/l10n/en_EN.js
var e9 = { ...o3, CLOSE: "Close", NEXT: "Next", PREV: "Previous", MODAL: "You can close this modal content with the ESC key", ELEMENT_NOT_FOUND: "HTML Element Not Found", IFRAME_ERROR: "Error Loading Page", NO_CAPTION: "No Caption", TOGGLE_SIDEBAR: "Toggle sidebar" };

// node_modules/.pnpm/@fancyapps+ui@6.1.15/node_modules/@fancyapps/ui/dist/fancybox/fancybox.js
var M4 = '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><path d="M19.286 4.714 4.714 19.286M4.714 4.714l14.572 14.572" /></svg></button>';
c3().add("close", { tpl: M4 });
var k2 = (e10) => {
  e10.cancelable && e10.preventDefault();
};
var R = (e10 = null, t10 = "", n13) => {
  if (!e10 || !e10.parentElement || !t10) return void (n13 && n13());
  _(e10);
  const o9 = (s13) => {
    s13.target === e10 && e10.dataset.animationName && (e10.removeEventListener("animationend", o9), delete e10.dataset.animationName, n13 && n13(), e10.classList.remove(t10));
  };
  e10.dataset.animationName = t10, e10.addEventListener("animationend", o9), s3(e10, t10);
};
var _ = (e10) => {
  e10 && e10.dispatchEvent(new CustomEvent("animationend", { bubbles: false, cancelable: true, currentTarget: e10 }));
};
var I;
!(function(e10) {
  e10[e10.Init = 0] = "Init", e10[e10.Ready = 1] = "Ready", e10[e10.Closing = 2] = "Closing", e10[e10.Destroyed = 3] = "Destroyed";
})(I || (I = {}));
var z = { ajax: null, backdropClick: "close", Carousel: {}, closeButton: "auto", closeButtonTpl: M4, closeExisting: false, delegateEl: void 0, dragToClose: true, fadeEffect: true, groupAll: false, groupAttr: "data-fancybox", hideClass: "f-fadeOut", hideScrollbar: true, id: void 0, idle: false, keyboard: { Escape: "close", Delete: "close", Backspace: "close", PageUp: "next", PageDown: "prev", ArrowUp: "prev", ArrowDown: "next", ArrowRight: "next", ArrowLeft: "prev" }, l10n: e9, mainClass: "", mainStyle: {}, mainTpl: '<dialog class="fancybox__dialog">\n    <div class="fancybox__container" tabindex="0" aria-label="{{MODAL}}">\n      <div class="fancybox__backdrop"></div>\n      <div class="fancybox__carousel"></div>\n    </div>\n  </dialog>', modal: true, on: {}, parentEl: void 0, placeFocusBack: true, showClass: "f-zoomInUp", startIndex: 0, sync: void 0, theme: "dark", triggerEl: void 0, triggerEvent: void 0, zoomEffect: true };
var O = /* @__PURE__ */ new Map();
var H = 0;
var B = "with-fancybox";
var D = () => {
  let a6, j, A, M5, D2, q2, N2, V, W = I.Init, $ = { ...z }, X = -1, K = {}, U = [], Y = false, G = true, Z = 0;
  function J(e10, ...t10) {
    let n13 = $[e10];
    return n13 && "function" == typeof n13 ? n13(ze, ...t10) : n13;
  }
  function Q(e10, t10 = []) {
    const n13 = J("l10n") || {};
    e10 = String(e10).replace(/\{\{(\w+)\}\}/g, (e11, t11) => n13[t11] || e11);
    for (let n14 = 0; n14 < t10.length; n14++) e10 = e10.split(t10[n14][0]).join(t10[n14][1]);
    return e10 = e10.replace(/\{\{(.*?)\}\}/g, (e11, t11) => t11);
  }
  const ee = /* @__PURE__ */ new Map();
  function te(e10, ...t10) {
    const n13 = [...ee.get(e10) || []];
    for (const [t11, o9] of Object.entries($.on || {})) (t11 === e10 || t11.split(" ").indexOf(e10) > -1) && n13.push(o9);
    for (const e11 of n13) e11 && "function" == typeof e11 && e11(ze, ...t10);
    "*" !== e10 && te("*", e10, ...t10);
  }
  function ne() {
    s4(j, "is-revealing");
    try {
      if (document.activeElement === a6) {
        (j?.querySelector("[autofocus]") || j).focus();
      }
    } catch (e10) {
    }
  }
  function oe(e10, n13) {
    ve(n13), fe(), n13.el?.addEventListener("click", re), "inline" !== n13.type && "clone" !== n13.type || (function(e11) {
      if (!M5 || !e11 || !e11.el) return;
      let n14 = null;
      if (t(e11.src)) {
        const t10 = e11.src.split("#", 2).pop();
        n14 = t10 ? document.getElementById(t10) : null;
      }
      if (n14) {
        if (s3(n14, "f-html"), "clone" === e11.type || n14.closest(".fancybox__carousel")) {
          n14 = n14.cloneNode(true);
          const t10 = n14.dataset.animationName;
          t10 && (n14.classList.remove(t10), delete n14.dataset.animationName);
          let o9 = n14.getAttribute("id");
          o9 = o9 ? `${o9}--clone` : `clone-${X}-${e11.index}`, n14.setAttribute("id", o9);
        } else if (n14.parentNode) {
          const t10 = document.createElement("div");
          t10.inert = true, n14.parentNode.insertBefore(t10, n14), e11.placeholderEl = t10;
        }
        e11.htmlEl = n14, s3(e11.el, "has-html"), e11.el.prepend(n14), n14.classList.remove("hidden"), "none" === n14.style.display && (n14.style.display = ""), "none" === getComputedStyle(n14).getPropertyValue("display") && (n14.style.display = n14.dataset.display || "flex"), M5?.emit("contentReady", e11);
      } else M5?.showError(e11, "{{ELEMENT_NOT_FOUND}}");
    })(n13), "ajax" === n13.type && (function(e11) {
      const t10 = e11.el;
      if (!t10) return;
      if (e11.htmlEl || e11.xhr) return;
      M5?.showLoading(e11), e11.state = 0;
      const n14 = new XMLHttpRequest();
      n14.onreadystatechange = function() {
        if (n14.readyState === XMLHttpRequest.DONE && W === I.Ready) if (M5?.hideLoading(e11), e11.state = 1, 200 === n14.status) {
          let o10 = n14.responseText + "", s13 = null, r7 = null;
          if (e11.filter) {
            const t11 = document.createElement("div");
            t11.innerHTML = o10, r7 = t11.querySelector(e11.filter + "");
          }
          r7 && r7 instanceof HTMLElement ? s13 = r7 : (s13 = document.createElement("div"), s13.innerHTML = o10), s13.classList.add("f-html"), e11.htmlEl = s13, t10.classList.add("has-html"), t10.classList.add("has-ajax"), t10.prepend(s13), M5?.emit("contentReady", e11);
        } else M5?.showError(e11);
      };
      const o9 = J("ajax") || null;
      n14.open(o9 ? "POST" : "GET", e11.src + ""), n14.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n14.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n14.send(o9), e11.xhr = n14;
    })(n13);
  }
  function se(e10, t10) {
    Ee(t10), t10.el?.removeEventListener("click", re), "inline" !== t10.type && "clone" !== t10.type || (function(e11) {
      const t11 = e11.htmlEl, n13 = e11.placeholderEl;
      t11 && ("none" !== getComputedStyle(t11).getPropertyValue("display") && (t11.style.display = "none"), t11.offsetHeight);
      n13 && (t11 && n13.parentNode && n13.parentNode.insertBefore(t11, n13), n13.remove());
      e11.htmlEl = void 0, e11.placeholderEl = void 0;
    })(t10), t10.xhr && (t10.xhr.abort(), t10.xhr = void 0);
  }
  function re(e10) {
    if (!we()) return;
    if (W !== I.Ready) return k2(e10), void e10.stopPropagation();
    if (e10.defaultPrevented) return;
    if (!l.isClickAllowed()) return;
    const t10 = e10.composedPath()[0];
    t10.closest(".fancybox__carousel") && t10.classList.contains("fancybox__slide") && ge(e10);
  }
  function ie() {
    G = false, j && M5 && j.classList.remove("is-revealing"), fe();
    const e10 = J("sync");
    if (M5 && e10) {
      const t10 = e10.getPageIndex(M5.getPageIndex()) || 0;
      e10.goTo(t10, { transition: false, tween: false });
    }
  }
  function ae() {
    !(function() {
      const e11 = M5?.getViewport();
      if (!M5 || !e11) return;
      if (D2 = l(e11).init(), !D2) return;
      be();
      let t10 = false, n13 = 0, o9 = 0, r7 = {}, i7 = 1;
      function a7() {
        q2?.spring({ clamp: true, mass: 1, tension: 0 === o9 ? 140 : 960, friction: 17, restDelta: 0.1, restSpeed: 0.1, maxSpeed: 1 / 0 }).from({ y: n13 }).to({ y: o9 }).start();
        const e12 = M5?.getViewport()?.getBoundingClientRect().height || 0, t11 = Le()?.panzoomRef;
        if (e12 && t11) if (0 === o9) t11.execute(v.Reset);
        else {
          const o10 = t5(Math.abs(n13), 0, 0.33 * e12, i7, 0.77 * i7, false);
          t11.execute(v.ZoomTo, { scale: o10 });
        }
      }
      const l6 = (e12) => {
        const t11 = e12.srcEvent, n14 = t11.target;
        return J("dragToClose") && M5 && !(e5(t11) && t11.touches?.length > 1) && n14 && !n2(n14);
      };
      q2 = c().on("step", (t11) => {
        if (j && e11 && W === I.Ready) {
          const o10 = e11.getBoundingClientRect().height;
          n13 = Math.min(o10, Math.max(-1 * o10, t11.y));
          const s13 = t5(Math.abs(n13), 0, 0.65 * o10, 1, 0.2, true);
          j.style.setProperty("--f-drag-opacity", s13 + ""), j.style.setProperty("--f-drag-offset", n13 + "px");
        }
      }), D2.on("start", function() {
        t10 || (q2?.pause(), o9 = n13);
      }).on("panstart", (e12) => {
        if (!t10 && l6(e12) && "y" === e12.axis) {
          k2(e12.srcEvent), t10 = true, ke(), M5?.getViewport()?.classList.add("is-dragging");
          const n14 = Le()?.panzoomRef;
          if (n14) {
            i7 = n14.getTransform().scale || 1;
            const e13 = n14.getOptions();
            r7 = { ...e13 }, e13.bounds = false, e13.gestures = false;
          }
        } else t10 = false;
      }).on("pan", function(e12) {
        t10 && l6(e12) && (k2(e12.srcEvent), e12.srcEvent.stopPropagation(), "y" === e12.axis && (o9 += e12.deltaY, a7()));
      }).on("end", (e12) => {
        if (M5?.getViewport()?.classList.remove("is-dragging"), t10) {
          const t11 = Le()?.panzoomRef;
          if (t11) {
            t11.getTween()?.end();
            const e13 = t11.getOptions();
            e13.bounds = r7.bounds || false, e13.gestures = r7.gestures || false;
          }
          l6(e12) && "y" === e12.axis && (Math.abs(e12.velocityY) > 5 || Math.abs(n13) > 50) && Re(e12.srcEvent, "f-throwOut" + (e12.velocityY > 0 ? "Down" : "Up"));
        }
        t10 = false, W === I.Ready && 0 !== n13 && (o9 = 0, a7());
      });
    })(), document.body.addEventListener("click", he), document.body.addEventListener("pointerdown", me, { capture: true }), document.body.addEventListener("keydown", ye, { passive: false, capture: true }), fe(), Te();
    const e10 = J("sync");
    M5 && e10 && e10.getTween()?.start(), xe(Le());
  }
  function ce() {
    M5?.canGoNext() ? Te() : Me();
  }
  function le(e10, t10) {
    ve(t10);
  }
  function ue(e10, t10) {
    ve(t10), xe(t10);
  }
  function de() {
    const e10 = M5?.getPlugins().Thumbs;
    s5(j, "has-thumbs", e10?.isEnabled() || false), s5(j, "has-vertical-thumbs", !!e10 && ("scrollable" === e10.getType() || true === e10.getCarousel()?.isVertical()));
  }
  function fe() {
    if (!j) return;
    const e10 = M5?.getPages().length || 0, t10 = M5?.getPageIndex() || 0, n13 = j.querySelectorAll("[data-fancybox-index],[data-fancybox-page],[data-fancybox-pages]");
    for (const o9 of n13) o9.hasAttribute("data-fancybox-index") ? o9.textContent = String(t10) : o9.hasAttribute("data-fancybox-page") ? o9.textContent = String(t10 + 1) : o9.textContent = String(e10);
  }
  function me(e10) {
    be(), V = { x: e10.clientX, y: e10.clientY };
  }
  function ge(e10) {
    if (!!e10.composedPath()[0].closest("[data-fancybox-close]")) return void Re(e10);
    if ((function(e11) {
      if (!V) return false;
      const t10 = "clientX" in e11 ? e11 : e11.changedTouches[0];
      return !!t10 && (Math.abs(t10.clientX - V.x) > 10 || Math.abs(t10.clientY - V.y) > 10);
    })(e10)) return;
    if (te("backdropClick", e10), e10.defaultPrevented) return;
    J("backdropClick") && Re(e10);
  }
  function pe() {
    Ae();
  }
  function ye(e10) {
    if (!we()) return;
    if (W !== I.Ready) return;
    const t10 = e10.key, o9 = J("keyboard");
    if (!o9) return;
    if (e10.ctrlKey || e10.altKey || e10.shiftKey) return;
    const s13 = e10.composedPath()[0];
    if (!n(s13)) return;
    if ("Escape" !== t10 && ((e11) => {
      const t11 = ["input", "textarea", "select", "option", "video", "iframe", "[contenteditable]", "[data-selectable]", "[data-draggable]"].join(",");
      return e11.matches(t11) || e11.closest(t11);
    })(s13)) return;
    if (te("keydown", e10), e10.defaultPrevented) return;
    const r7 = o9[t10];
    if (r7) switch (r7) {
      case "close":
        Re(e10);
        break;
      case "next":
        k2(e10), M5?.next();
        break;
      case "prev":
        k2(e10), M5?.prev();
    }
  }
  function he(e10) {
    if (!we()) return;
    if (W !== I.Ready) return;
    if (Ae(), e10.defaultPrevented) return;
    const t10 = e10.composedPath()[0], n13 = !!t10.closest("[data-fancybox-close]"), o9 = t10.classList.contains("fancybox__backdrop");
    (n13 || o9) && ge(e10);
  }
  function be() {
    D2 && (J("dragToClose") ? D2.enable() : D2.disable());
  }
  function ve(e10) {
    const { el: t10, htmlEl: n13, panzoomRef: s13, closeButtonEl: r7 } = e10, i7 = s13 ? s13.getWrapper() : n13;
    if (!t10 || !t10.parentElement || !i7) return;
    let a7 = J("closeButton");
    if ("auto" === a7 && (a7 = true !== M5?.getPlugins().Toolbar?.isEnabled()), a7) {
      if (!r7) {
        const n14 = e2(Q(J("closeButtonTpl")));
        n14 && (s3(n14, "is-close-button"), e10.closeButtonEl = i7.insertAdjacentElement("afterbegin", n14), s3(t10, "has-close-btn"));
      }
    } else Ee(e10);
  }
  function Ee(e10) {
    e10.closeButtonEl && (e10.closeButtonEl.remove(), e10.closeButtonEl = void 0), s4(e10.el, "has-close-btn");
  }
  function xe(e10) {
    if (!(G && M5 && 1 === M5.getState() && e10 && e10.index === M5.getOptions().initialPage && e10.el && e10.el.parentElement)) return;
    if (void 0 !== e10.state && 1 !== e10.state) return;
    G = false;
    const t10 = e10.panzoomRef, n13 = t10?.getTween(), o9 = J("zoomEffect") && n13 ? Ce(e10) : void 0;
    if (t10 && n13 && o9) {
      const { x: e11, y: s14, scale: r7 } = t10.getStartPosition();
      return void n13.spring({ tension: 215, friction: 25, restDelta: 1e-3, restSpeed: 1e-3, maxSpeed: 1 / 0 }).from(o9).to({ x: e11, y: s14, scale: r7 }).start();
    }
    const s13 = t10?.getContent() || e10.htmlEl;
    s13 && R(s13, J("showClass", e10));
  }
  function we() {
    return F.getInstance()?.getId() === X;
  }
  function Le() {
    return M5?.getPage()?.slides[0];
  }
  function Se() {
    const e10 = Le();
    return e10 ? e10.triggerEl || J("triggerEl") : void 0;
  }
  function Ce(e10) {
    const t10 = e10.thumbEl;
    if (!t10 || !((e11) => {
      const t11 = e11.getBoundingClientRect(), n14 = e11.closest("[style]"), o10 = n14?.parentElement;
      if (n14 && n14.style.transform && o10) {
        const e12 = o10.getBoundingClientRect();
        if (t11.left < e12.left || t11.left > e12.left + e12.width - t11.width) return false;
        if (t11.top < e12.top || t11.top > e12.top + e12.height - t11.height) return false;
      }
      const s14 = Math.max(document.documentElement.clientHeight, window.innerHeight), r8 = Math.max(document.documentElement.clientWidth, window.innerWidth);
      return !(t11.bottom < 0 || t11.top - s14 >= 0 || t11.right < 0 || t11.left - r8 >= 0);
    })(t10)) return;
    const n13 = e10.panzoomRef?.getWrapper()?.getBoundingClientRect(), o9 = n13?.width, s13 = n13?.height;
    if (!o9 || !s13) return;
    const r7 = t10.getBoundingClientRect();
    let i7 = r7.width, a7 = r7.height, c6 = r7.left, l6 = r7.top;
    if (!r7 || !i7 || !a7) return;
    if (t10 instanceof HTMLImageElement) {
      const e11 = window.getComputedStyle(t10).getPropertyValue("object-fit");
      if ("contain" === e11 || "scale-down" === e11) {
        const { width: n14, height: o10 } = ((e12, t11, n15, o11, s14 = "contain") => {
          if ("contain" === s14 || e12 > n15 || t11 > o11) {
            const s15 = n15 / e12, r8 = o11 / t11, i8 = Math.min(s15, r8);
            e12 *= i8, t11 *= i8;
          }
          return { width: e12, height: t11 };
        })(t10.naturalWidth, t10.naturalHeight, i7, a7, e11);
        c6 += 0.5 * (i7 - n14), l6 += 0.5 * (a7 - o10), i7 = n14, a7 = o10;
      }
    }
    if (Math.abs(o9 / s13 - i7 / a7) > 0.1) return;
    return { x: c6 + 0.5 * i7 - (n13.left + 0.5 * o9), y: l6 + 0.5 * a7 - (n13.top + 0.5 * s13), scale: i7 / o9 };
  }
  function Pe() {
    N2 && clearTimeout(N2), N2 = void 0, document.removeEventListener("mousemove", pe);
  }
  function Te() {
    if (Y) return;
    if (N2) return;
    const e10 = J("idle");
    e10 && (N2 = setTimeout(je, e10));
  }
  function je() {
    j && (Pe(), s3(j, "is-idle"), document.addEventListener("mousemove", pe), Y = true);
  }
  function Ae() {
    Y && (Me(), Te());
  }
  function Me() {
    Pe(), j?.classList.remove("is-idle"), Y = false;
  }
  function ke() {
    const e10 = Se();
    var t10;
    !e10 || (t10 = e10.getBoundingClientRect()).bottom > 0 && t10.right > 0 && t10.left < (window.innerWidth || document.documentElement.clientWidth) && t10.top < (window.innerHeight || document.documentElement.clientHeight) || e10.closest("[inert]") || e10.scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
  }
  function Re(e10, t10) {
    if (W === I.Closing || W === I.Destroyed) return;
    const n13 = new Event("shouldClose", { bubbles: true, cancelable: true });
    if (te("shouldClose", n13, e10), n13.defaultPrevented) return;
    if (Pe(), e10) {
      if (e10.defaultPrevented) return;
      k2(e10), e10.stopPropagation(), e10.stopImmediatePropagation();
    }
    if (W = I.Closing, q2?.pause(), D2?.destroy(), M5) {
      M5.getGestures()?.destroy(), M5.getTween()?.pause();
      for (const e11 of M5.getSlides()) {
        const t11 = e11.panzoomRef;
        t11 && (r3(t11.getOptions(), { clickAction: false, dblClickAction: false, wheelAction: false, bounds: false, minScale: 0, maxScale: 1 / 0 }), t11.getGestures()?.destroy(), t11.getTween()?.pause());
      }
    }
    const o9 = M5?.getPlugins();
    o9?.Autoplay?.stop();
    const s13 = o9?.Fullscreen;
    s13 && s13.inFullscreen() ? Promise.resolve(s13.exit()).then(() => {
      setTimeout(() => {
        _e(e10, t10);
      }, 150);
    }) : _e(e10, t10);
  }
  function _e(e10, t10) {
    if (W !== I.Closing) return;
    te("close", e10), G = false, document.body.removeEventListener("click", he), document.body.removeEventListener("pointerdown", me, { capture: true }), document.body.removeEventListener("keydown", ye, { passive: false, capture: true }), V = void 0, J("placeFocusBack") && ke();
    const n13 = document.activeElement;
    n13 && a6?.contains(n13) && n13.blur(), J("fadeEffect") && (j?.classList.remove("is-ready"), j?.classList.add("is-hiding")), j?.classList.add("is-closing");
    const o9 = Le(), s13 = o9?.el, r7 = o9?.panzoomRef, i7 = o9?.panzoomRef?.getTween(), c6 = t10 || J("hideClass");
    let l6 = false, u6 = false;
    if (M5 && o9 && s13 && r7 && i7) {
      let e11;
      if (J("zoomEffect") && 1 === o9.state && (e11 = Ce(o9)), e11) {
        l6 = true;
        const t11 = () => {
          e11 = Ce(o9), e11 ? i7.to({ ...x, ...e11 }) : Ie();
        };
        r7.on("refresh", () => {
          t11();
        }), i7.easing(c.Easings.EaseOut).duration(350).from({ ...r7.getTransform() }).to({ ...x, ...e11 }).start(), s13?.getAnimations() && (s13.style.animationPlayState = "paused", requestAnimationFrame(() => {
          t11();
        }));
      }
    }
    const d4 = o9?.htmlEl || o9?.panzoomRef?.getWrapper();
    d4 && _(d4), !l6 && c6 && d4 && (u6 = true, R(d4, c6, () => {
      Ie();
    })), l6 || u6 ? setTimeout(() => {
      Ie();
    }, 350) : Ie();
  }
  function Ie() {
    if (W === I.Destroyed) return;
    W = I.Destroyed;
    const e10 = Se();
    te("destroy"), J("sync")?.getPlugins().Autoplay?.resume(), J("sync")?.getPlugins().Autoscroll?.resume(), a6 instanceof HTMLDialogElement && a6.close(), M5?.getContainer()?.classList.remove("is-idle"), M5?.destroy();
    for (const e11 of Object.values(K)) e11?.destroy();
    if (K = {}, a6?.remove(), a6 = void 0, j = void 0, M5 = void 0, O.delete(X), !O.size && (t6(false), document.documentElement.classList.remove(B), J("placeFocusBack") && e10 && !e10.closest("[inert]"))) try {
      e10?.focus({ preventScroll: true });
    } catch (e11) {
    }
  }
  const ze = { close: Re, destroy: Ie, getCarousel: function() {
    return M5;
  }, getContainer: function() {
    return j;
  }, getId: function() {
    return X;
  }, getOptions: function() {
    return $;
  }, getPlugins: function() {
    return K;
  }, getSlide: function() {
    return Le();
  }, getState: function() {
    return W;
  }, init: function(t10 = [], n13 = {}) {
    W !== I.Init && (ze.destroy(), W = I.Init), $ = r3({}, z, n13), X = J("id") || "fancybox-" + ++H;
    const c6 = O.get(X);
    if (c6 && c6.destroy(), O.set(X, ze), te("init"), (function() {
      for (const [e10, t11] of Object.entries({ ...F.Plugins, ...$.plugins || {} })) if (e10 && !K[e10] && t11 instanceof Function) {
        const n14 = t11();
        n14.init(ze), K[e10] = n14;
      }
      te("initPlugins");
    })(), (function(e10 = []) {
      te("initSlides", e10), U = [...e10];
    })(t10), (function() {
      const t11 = J("parentEl") || document.body;
      if (!(t11 && t11 instanceof HTMLElement)) return;
      const n14 = Q(J("mainTpl") || "");
      if (a6 = e2(n14) || void 0, !a6) return;
      if (j = a6.querySelector(".fancybox__container"), !(j && j instanceof HTMLElement)) return;
      const i7 = J("mainClass");
      i7 && s3(j, i7);
      const c7 = J("mainStyle");
      if (c7 && t3(c7)) for (const [e10, t12] of Object.entries(c7)) j.style.setProperty(e10, t12);
      const u6 = J("theme"), d4 = "auto" === u6 ? window.matchMedia("(prefers-color-scheme:light)").matches : "light" === u6;
      j.setAttribute("theme", d4 ? "light" : "dark"), a6.setAttribute("id", `${X}`), a6.addEventListener("keydown", (e10) => {
        "Escape" === e10.key && k2(e10);
      }), a6.addEventListener("wheel", (e10) => {
        const t12 = e10.target;
        let n15 = J("wheel", e10);
        t12.closest(".f-thumbs") && (n15 = "slide");
        const o9 = "slide" === n15, r7 = [-e10.deltaX || 0, -e10.deltaY || 0, -e10.detail || 0].reduce(function(e11, t13) {
          return Math.abs(t13) > Math.abs(e11) ? t13 : e11;
        }), i8 = Math.max(-1, Math.min(1, r7)), a7 = Date.now();
        Z && a7 - Z < 300 ? o9 && k2(e10) : (Z = a7, te("wheel", e10, i8), e10.defaultPrevented || ("close" === n15 ? Re(e10) : "slide" === n15 && M5 && !n2(t12) && (k2(e10), M5[i8 > 0 ? "prev" : "next"]())));
      }, { capture: true, passive: false }), a6.addEventListener("cancel", (e10) => {
        Re(e10);
      }), t11.append(a6), 1 === O.size && (J("hideScrollbar") && t6(true), document.documentElement.classList.add(B));
      te("initLayout"), a6 instanceof HTMLDialogElement && (J("modal") ? a6.showModal() : a6.show());
    })(), (function() {
      if (A = a6?.querySelector(".fancybox__carousel") || void 0, !A) return;
      A.fancybox = ze;
      const e10 = r3({}, { Autoplay: { autoStart: false, pauseOnHover: false, progressbarParentEl: (e11) => {
        const t11 = e11.getContainer();
        return t11?.querySelector(".f-carousel__toolbar [data-autoplay-action]") || t11;
      } }, Fullscreen: { el: j }, Toolbar: { absolute: true, items: { counter: { tpl: '<div class="f-counter"><span data-fancybox-page></span>/<span data-fancybox-pages></span></div>' } }, display: { left: ["counter"], right: ["toggleFull", "autoplay", "fullscreen", "thumbs", "close"] } }, Video: { autoplay: true }, Thumbs: { minCount: 2, Carousel: { classes: { container: "fancybox__thumbs" } } }, classes: { container: "fancybox__carousel", viewport: "fancybox__viewport", slide: "fancybox__slide" }, spinnerTpl: '<div class="f-spinner" data-fancybox-close></div>', dragFree: false, slidesPerPage: 1, plugins: { Sync: t7, Arrows: a4, Lazyload: n7, Zoomable: s6, Html: s10, Video: r5, Autoplay: o7, Fullscreen: l4, Thumbs: u4, Toolbar: c3 } }, J("Carousel") || {}, { slides: U, enabled: true, initialPage: J("startIndex") || 0, l10n: J("l10n") });
      M5 = M2(A, e10), te("initCarousel", M5), M5.on("*", (e11, t11, ...n14) => {
        te(`Carousel.${t11}`, e11, ...n14);
      }), M5.on("attachSlideEl", oe), M5.on("detachSlideEl", se), M5.on("contentLoading", le), M5.on("contentReady", ue), M5.on("ready", ae), M5.on("change", ie), M5.on("settle", ce), M5.on("thumbs:ready", de), M5.on("thumbs:destroy", de), M5.init();
    })(), a6 && j) {
      if (J("closeExisting")) for (const [e10, t11] of O.entries()) e10 !== X && t11.close();
      J("fadeEffect") ? (setTimeout(() => {
        ne();
      }, 500), s3(j, "is-revealing")) : ne(), j.classList.add("is-ready"), W = I.Ready, te("ready");
    }
  }, isCurrentSlide: function(e10) {
    const t10 = Le();
    return !(!e10 || !t10) && t10.index === e10.index;
  }, isTopMost: function() {
    return we();
  }, localize: Q, off: function(e10, t10) {
    return ee.has(e10) && ee.set(e10, ee.get(e10).filter((e11) => e11 !== t10)), ze;
  }, on: function(e10, t10) {
    return ee.set(e10, [...ee.get(e10) || [], t10]), ze;
  }, toggleIdle(e10) {
    (Y || true === e10) && je(), Y && false !== e10 || Me();
  } };
  return ze;
};
function q() {
  for (const e10 of Object.values(F.Plugins)) {
    const t10 = e10.setup;
    "function" == typeof t10 && t10(F);
  }
}
function N(e10, t10 = {}) {
  if (!(e10 && e10 instanceof Element)) return;
  let n13, o9, s13, r7, a6 = {};
  for (const [t11, c7] of F.openers) if (t11.contains(e10)) for (const [l7, u7] of c7) {
    let c8;
    if (l7) {
      for (const n14 of t11.querySelectorAll(l7)) if (n14.contains(e10)) {
        c8 = n14;
        break;
      }
      if (!c8) continue;
    }
    for (const [l8, d5] of u7) {
      let u8 = null;
      try {
        u8 = e10.closest(l8);
      } catch (e11) {
      }
      u8 && (o9 = t11, s13 = c8, n13 = u8, r7 = l8, r3(a6, d5 || {}));
    }
  }
  if (!o9 || !r7 || !n13) return;
  const c6 = r3({}, z, t10, a6, { triggerEl: n13 });
  let l6 = [].slice.call((s13 || o9).querySelectorAll(r7));
  const u6 = n13.closest(".f-carousel"), d4 = u6?.carousel;
  if (d4 && (!s13 || !u6.contains(s13))) {
    const e11 = [];
    for (const t11 of d4?.getSlides()) {
      const n14 = t11.el;
      n14 && (n14.matches(r7) ? e11.push(n14) : e11.push(...[].slice.call(n14.querySelectorAll(r7))));
    }
    e11.length && (l6 = [...e11], d4.getPlugins().Autoplay?.pause(), d4.getPlugins().Autoscroll?.pause(), c6.sync = d4);
  }
  if (false === c6.groupAll) {
    const e11 = c6.groupAttr, t11 = e11 && n13 ? n13.getAttribute(`${e11}`) : "";
    l6 = e11 && t11 && "true" !== t11 ? l6.filter((n14) => n14.getAttribute(`${e11}`) === t11) : [n13];
  }
  if (!l6.length) return;
  c6.triggerEvent?.preventDefault();
  const f3 = F.getInstance(), m3 = f3?.getState();
  if (f3 && (m3 === I.Init || m3 === I.Ready)) {
    const e11 = f3.getOptions().triggerEl;
    if (e11 && l6.indexOf(e11) > -1) return;
  }
  return { ...c6.Carousel || {} }.rtl && (l6 = l6.reverse()), n13 && void 0 === t10.startIndex && (c6.startIndex = l6.indexOf(n13)), F.fromNodes(l6, c6);
}
var F = { Plugins: { Hash: p2 }, version: "6.1.15", openers: /* @__PURE__ */ new Map(), bind: function(e10, n13, o9, s13) {
  if (!e8()) return;
  let r7 = document.body, i7 = null, c6 = "[data-fancybox]", l6 = {};
  e10 instanceof Element && (r7 = e10), t(e10) && t(n13) ? (i7 = e10, c6 = n13) : t(n13) && t(o9) ? (i7 = n13, c6 = o9) : t(n13) ? c6 = n13 : t(e10) && (c6 = e10), "object" == typeof n13 && (l6 = n13 || {}), "object" == typeof o9 && (l6 = o9 || {}), "object" == typeof s13 && (l6 = s13 || {}), (function(e11, t10, n14, o10 = {}) {
    if (!(e11 && e11 instanceof Element && n14)) return;
    const s14 = F.openers.get(e11) || /* @__PURE__ */ new Map(), r8 = s14.get(t10) || /* @__PURE__ */ new Map();
    r8.set(n14, o10), s14.set(t10, r8), F.openers.set(e11, s14), 1 === s14.size && e11.addEventListener("click", F.fromEvent), q();
  })(r7, i7, c6, l6);
}, close: function(e10 = true, ...t10) {
  if (e10) for (const e11 of O.values()) e11.close(...t10);
  else {
    const e11 = F.getInstance();
    e11 && e11.close(...t10);
  }
}, destroy: function() {
  let e10;
  for (; e10 = F.getInstance(); ) e10.destroy();
  for (const e11 of F.openers.keys()) e11.removeEventListener("click", F.fromEvent);
  F.openers.clear();
}, fromEvent: function(e10) {
  if (e10.defaultPrevented) return;
  if (e10.button && 0 !== e10.button) return;
  if (e10.ctrlKey || e10.metaKey || e10.shiftKey) return;
  let t10 = e10.composedPath()[0];
  const n13 = { triggerEvent: e10 };
  if (t10.closest(".fancybox__container.is-hiding")) return k2(e10), void e10.stopPropagation();
  const o9 = t10.closest("[data-fancybox-delegate]") || void 0;
  if (o9) {
    const e11 = o9.dataset.fancyboxDelegate || "", s13 = document.querySelectorAll(`[data-fancybox="${e11}"]`), r7 = parseInt(o9.dataset.fancyboxIndex || "", 10) || 0;
    t10 = s13[r7] || s13[0], r3(n13, { delegateEl: o9, startIndex: r7 });
  }
  return N(t10, n13);
}, fromNodes: function(e10, t10) {
  t10 = r3({}, z, t10 || {});
  const n13 = [], o9 = (e11) => e11 instanceof HTMLImageElement ? e11 : e11 instanceof HTMLElement ? e11.querySelector("img:not([aria-hidden])") : void 0;
  for (const s13 of e10) {
    const r7 = s13.dataset || {}, i7 = t10.delegateEl && e10.indexOf(s13) === t10.startIndex ? t10.delegateEl : void 0, a6 = o9(s13), c6 = o9(i7) || a6 || void 0, l6 = r7.src || s13.getAttribute("href") || s13.getAttribute("currentSrc") || s13.getAttribute("src") || void 0, u6 = r7.thumb || r7.thumbSrc || c6?.getAttribute("currentSrc") || c6?.getAttribute("src") || c6?.dataset.lazySrc || void 0, d4 = { src: l6, alt: r7.alt || a6?.getAttribute("alt") || c6?.getAttribute("alt") || void 0, thumbSrc: u6, thumbEl: c6, triggerEl: s13, delegateEl: i7 };
    for (const e11 in r7) {
      let t11 = r7[e11] + "";
      d4[e11] = "true" === t11 ? "fancybox" !== e11 || "" : "false" !== t11 && t11;
    }
    n13.push(d4);
  }
  return F.show(n13, t10);
}, fromSelector: function(e10, n13, o9, s13) {
  if (!e8()) return;
  let r7 = document.body, i7 = null, c6 = "[data-fancybox]", l6 = {};
  e10 instanceof Element && (r7 = e10), t(e10) && t(n13) ? (i7 = e10, c6 = n13) : t(n13) && t(o9) ? (i7 = n13, c6 = o9) : t(n13) ? c6 = n13 : t(e10) && (c6 = e10), "object" == typeof n13 && (l6 = n13 || {}), "object" == typeof o9 && (l6 = o9 || {}), "object" == typeof s13 && (l6 = s13 || {});
  for (const [e11, t10] of F.openers) for (const [n14, o10] of t10) for (const [t11, s14] of o10) if (e11 === r7 && n14 === i7) {
    const e12 = r7.querySelector((n14 ? `${n14} ` : "") + c6);
    if (e12 && e12.matches(t11)) return F.fromTriggerEl(e12, l6);
  }
}, fromTriggerEl: N, getCarousel: function() {
  return F.getInstance()?.getCarousel() || void 0;
}, getDefaults: function() {
  return z;
}, getInstance: function(e10) {
  if (e10) {
    const t10 = O.get(e10);
    return t10 && t10.getState() !== I.Destroyed ? t10 : void 0;
  }
  return Array.from(O.values()).reverse().find((e11) => {
    if (e11.getState() !== I.Destroyed) return e11;
  }) || void 0;
}, getSlide: function() {
  return F.getInstance()?.getSlide() || void 0;
}, show: function(e10 = [], t10 = {}) {
  return q(), D().init(e10, t10);
}, unbind: function(e10, n13, o9) {
  if (!e8()) return;
  let s13 = document.body, r7 = null, i7 = "[data-fancybox]";
  e10 instanceof Element && (s13 = e10), t(e10) && t(n13) ? (r7 = e10, i7 = n13) : t(n13) && t(o9) ? (r7 = n13, i7 = o9) : t(n13) ? i7 = n13 : t(e10) && (i7 = e10), (function(e11, t10, n14) {
    if (!(e11 && e11 instanceof Element && n14)) return;
    const o10 = F.openers.get(e11) || /* @__PURE__ */ new Map(), s14 = o10.get(t10) || /* @__PURE__ */ new Map();
    s14 && n14 && s14.delete(n14), s14.size && n14 || o10.delete(t10), o10.size || (F.openers.delete(e11), e11.removeEventListener("click", F.fromEvent));
  })(s13, r7, i7);
} };
export {
  a4 as Arrows,
  o7 as Autoplay,
  M2 as Carousel,
  d2 as CarouselSlideContentState,
  o4 as CarouselState,
  F as Fancybox,
  I as FancyboxState,
  l4 as Fullscreen,
  s10 as Html,
  n7 as Lazyload,
  x as PANZOOM_DEFAULT_POS,
  T as Panzoom,
  v as PanzoomAction,
  b as PanzoomState,
  y as PanzoomZoomLevel,
  t7 as Sync,
  u4 as Thumbs,
  c3 as Toolbar,
  s9 as ToolbarColumn,
  r5 as Video,
  s6 as Zoomable
};
//# sourceMappingURL=@fancyapps_ui.js.map
