import "./chunk-BUSYA2B4.js";

// node_modules/.pnpm/reveal.js@6.0.2/node_modules/reveal.js/dist/reveal.mjs
var e = (e2, t2) => {
  for (let n2 in t2) e2[n2] = t2[n2];
  return e2;
};
var t = (e2, t2) => Array.from(e2.querySelectorAll(t2));
var n = (e2, t2, n2) => {
  n2 ? e2.classList.add(t2) : e2.classList.remove(t2);
};
var r = (e2) => {
  if (typeof e2 == "string") {
    if (e2 === "null") return null;
    if (e2 === "true") return true;
    if (e2 === "false") return false;
    if (e2.match(/^-?[\d\.]+$/)) return parseFloat(e2);
  }
  return e2;
};
var i = (e2, t2) => {
  e2.style.transform = t2;
};
var a = (e2, t2) => {
  let n2 = e2.matches || e2.matchesSelector || e2.msMatchesSelector;
  return !!(n2 && n2.call(e2, t2));
};
var o = (e2, t2) => {
  if (e2 && typeof e2.closest == "function") return e2.closest(t2);
  for (; e2; ) {
    if (a(e2, t2)) return e2;
    e2 = e2.parentElement;
  }
  return null;
};
var s = (e2) => {
  e2 = e2 || document.documentElement;
  let t2 = e2.requestFullscreen || e2.webkitRequestFullscreen || e2.webkitRequestFullScreen || e2.mozRequestFullScreen || e2.msRequestFullscreen;
  t2 && t2.apply(e2);
};
var c = (e2, t2, n2, r2 = "") => {
  let i2 = e2.querySelectorAll("." + n2);
  for (let t3 = 0; t3 < i2.length; t3++) {
    let n3 = i2[t3];
    if (n3.parentNode === e2) return n3;
  }
  let a2 = document.createElement(t2);
  return a2.className = n2, a2.innerHTML = r2, e2.appendChild(a2), a2;
};
var l = (e2) => {
  let t2 = document.createElement("style");
  return e2 && e2.length > 0 && t2.appendChild(document.createTextNode(e2)), document.head.appendChild(t2), t2;
};
var u = () => {
  let e2 = {};
  location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, (t2) => {
    let n2 = t2.split("=").shift(), r2 = t2.split("=").pop();
    return n2 && r2 !== void 0 && (e2[n2] = r2), t2;
  });
  for (let t2 in e2) {
    let n2 = e2[t2];
    e2[t2] = r(unescape(n2));
  }
  return e2.dependencies !== void 0 && delete e2.dependencies, e2;
};
var d = (e2, t2 = 0) => {
  if (e2) {
    var n2;
    let r2, i2 = e2.style.height;
    return e2.style.height = "0px", e2.parentElement && (e2.parentElement.style.height = "auto"), r2 = t2 - (((n2 = e2.parentElement) == null ? void 0 : n2.offsetHeight) || 0), e2.style.height = i2 + "px", e2.parentElement && e2.parentElement.style.removeProperty("height"), r2;
  }
  return t2;
};
var f = {
  mp4: "video/mp4",
  m4a: "video/mp4",
  ogv: "video/ogg",
  mpeg: "video/mpeg",
  webm: "video/webm"
};
var p = (e2 = "") => {
  let t2 = e2.split(".").pop();
  return t2 ? f[t2] : void 0;
};
var m = (e2 = "") => encodeURI(e2).replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[!'()*]/g, (e3) => `%${e3.charCodeAt(0).toString(16).toUpperCase()}`);
var h = navigator.userAgent;
var g = /(iphone|ipod|ipad|android)/gi.test(h) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
/chrome/i.test(h) && /edge/i.test(h);
var _ = /android/gi.test(h);
var v = (function(e2) {
  if (e2) {
    var t2 = function(e3) {
      return [].slice.call(e3);
    }, n2 = 0, r2 = 1, i2 = 2, a2 = 3, o2 = [], s2 = null, c2 = "requestAnimationFrame" in e2 ? function() {
      var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { sync: false };
      e2.cancelAnimationFrame(s2);
      var n3 = function() {
        return u2(o2.filter((function(e3) {
          return e3.dirty && e3.active;
        })));
      };
      if (t3.sync) return n3();
      s2 = e2.requestAnimationFrame(n3);
    } : function() {
    }, l2 = function(e3) {
      return function(t3) {
        o2.forEach((function(t4) {
          return t4.dirty = e3;
        })), c2(t3);
      };
    }, u2 = function(e3) {
      e3.filter((function(e4) {
        return !e4.styleComputed;
      })).forEach((function(e4) {
        e4.styleComputed = m2(e4);
      })), e3.filter(h2).forEach(g2);
      var t3 = e3.filter(p2);
      t3.forEach(f2), t3.forEach((function(e4) {
        g2(e4), d2(e4);
      })), t3.forEach(_2);
    }, d2 = function(e3) {
      return e3.dirty = n2;
    }, f2 = function(e3) {
      e3.availableWidth = e3.element.parentNode.clientWidth, e3.currentWidth = e3.element.scrollWidth, e3.previousFontSize = e3.currentFontSize, e3.currentFontSize = Math.min(Math.max(e3.minSize, e3.availableWidth / e3.currentWidth * e3.previousFontSize), e3.maxSize), e3.whiteSpace = e3.multiLine && e3.currentFontSize === e3.minSize ? "normal" : "nowrap";
    }, p2 = function(e3) {
      return e3.dirty !== i2 || e3.dirty === i2 && e3.element.parentNode.clientWidth !== e3.availableWidth;
    }, m2 = function(t3) {
      var n3 = e2.getComputedStyle(t3.element, null);
      return t3.currentFontSize = parseFloat(n3.getPropertyValue("font-size")), t3.display = n3.getPropertyValue("display"), t3.whiteSpace = n3.getPropertyValue("white-space"), true;
    }, h2 = function(e3) {
      var t3 = false;
      return !e3.preStyleTestCompleted && (/inline-/.test(e3.display) || (t3 = true, e3.display = "inline-block"), e3.whiteSpace !== "nowrap" && (t3 = true, e3.whiteSpace = "nowrap"), e3.preStyleTestCompleted = true, t3);
    }, g2 = function(e3) {
      e3.element.style.whiteSpace = e3.whiteSpace, e3.element.style.display = e3.display, e3.element.style.fontSize = e3.currentFontSize + "px";
    }, _2 = function(e3) {
      e3.element.dispatchEvent(new CustomEvent("fit", { detail: {
        oldValue: e3.previousFontSize,
        newValue: e3.currentFontSize,
        scaleFactor: e3.currentFontSize / e3.previousFontSize
      } }));
    }, v2 = function(e3, t3) {
      return function(n3) {
        e3.dirty = t3, e3.active && c2(n3);
      };
    }, y2 = function(e3) {
      return function() {
        o2 = o2.filter((function(t3) {
          return t3.element !== e3.element;
        })), e3.observeMutations && e3.observer.disconnect(), e3.element.style.whiteSpace = e3.originalStyle.whiteSpace, e3.element.style.display = e3.originalStyle.display, e3.element.style.fontSize = e3.originalStyle.fontSize;
      };
    }, b2 = function(e3) {
      return function() {
        e3.active || (e3.active = true, c2());
      };
    }, x2 = function(e3) {
      return function() {
        return e3.active = false;
      };
    }, S2 = function(e3) {
      e3.observeMutations && (e3.observer = new MutationObserver(v2(e3, r2)), e3.observer.observe(e3.element, e3.observeMutations));
    }, ee2 = {
      minSize: 16,
      maxSize: 512,
      multiLine: true,
      observeMutations: "MutationObserver" in e2 && {
        subtree: true,
        childList: true,
        characterData: true
      }
    }, C2 = null, w2 = function() {
      e2.clearTimeout(C2), C2 = e2.setTimeout(l2(i2), E2.observeWindowDelay);
    }, te2 = ["resize", "orientationchange"];
    return Object.defineProperty(E2, "observeWindow", { set: function(t3) {
      var n3 = `${t3 ? "add" : "remove"}EventListener`;
      te2.forEach((function(t4) {
        e2[n3](t4, w2);
      }));
    } }), E2.observeWindow = true, E2.observeWindowDelay = 100, E2.fitAll = l2(a2), E2;
  }
  function T2(e3, t3) {
    var n3 = Object.assign({}, ee2, t3), r3 = e3.map((function(e4) {
      var t4 = Object.assign({}, n3, {
        element: e4,
        active: true
      });
      return (function(e5) {
        e5.originalStyle = {
          whiteSpace: e5.element.style.whiteSpace,
          display: e5.element.style.display,
          fontSize: e5.element.style.fontSize
        }, S2(e5), e5.newbie = true, e5.dirty = true, o2.push(e5);
      })(t4), {
        element: e4,
        fit: v2(t4, a2),
        unfreeze: b2(t4),
        freeze: x2(t4),
        unsubscribe: y2(t4)
      };
    }));
    return c2(), r3;
  }
  function E2(e3) {
    var n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return typeof e3 == "string" ? T2(t2(document.querySelectorAll(e3)), n3) : T2([e3], n3)[0];
  }
})(typeof window > "u" ? null : window);
function y(e2) {
  "@babel/helpers - typeof";
  return y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, y(e2);
}
function b(e2, t2) {
  if (y(e2) != "object" || !e2) return e2;
  var n2 = e2[Symbol.toPrimitive];
  if (n2 !== void 0) {
    var r2 = n2.call(e2, t2 || "default");
    if (y(r2) != "object") return r2;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t2 === "string" ? String : Number)(e2);
}
function x(e2) {
  var t2 = b(e2, "string");
  return y(t2) == "symbol" ? t2 : t2 + "";
}
function S(e2, t2, n2) {
  return (t2 = x(t2)) in e2 ? Object.defineProperty(e2, t2, {
    value: n2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[t2] = n2, e2;
}
var ee = class {
  constructor(e2) {
    S(this, "allowedToPlayAudio", null), this.Reveal = e2, this.startEmbeddedMedia = this.startEmbeddedMedia.bind(this), this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this), this.preventIframeAutoFocus = this.preventIframeAutoFocus.bind(this), this.ensureMobileMediaPlaying = this.ensureMobileMediaPlaying.bind(this), this.failedAudioPlaybackTargets = /* @__PURE__ */ new Set(), this.failedVideoPlaybackTargets = /* @__PURE__ */ new Set(), this.failedMutedVideoPlaybackTargets = /* @__PURE__ */ new Set(), this.renderMediaPlayButton();
  }
  renderMediaPlayButton() {
    this.mediaPlayButton = document.createElement("button"), this.mediaPlayButton.className = "r-overlay-button r-media-play-button", this.mediaPlayButton.addEventListener("click", () => {
      this.resetTemporarilyMutedMedia(), (/* @__PURE__ */ new Set([
        ...this.failedAudioPlaybackTargets,
        ...this.failedVideoPlaybackTargets,
        ...this.failedMutedVideoPlaybackTargets
      ])).forEach((e2) => {
        this.startEmbeddedMedia({ target: e2 });
      }), this.clearMediaPlaybackErrors();
    });
  }
  shouldPreload(e2) {
    if (this.Reveal.isScrollView()) return true;
    let t2 = this.Reveal.getConfig().preloadIframes;
    return typeof t2 != "boolean" && (t2 = e2.hasAttribute("data-preload")), t2;
  }
  load(e2, n2 = {}) {
    let r2 = this.Reveal.getConfig().display;
    if (r2.includes("!important")) {
      let t2 = r2.replace(/\s*!important\s*$/, "").trim();
      e2.style.setProperty("display", t2, "important");
    } else e2.style.display = r2;
    t(e2, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((e3) => {
      let t2 = e3.tagName === "IFRAME";
      (!t2 || this.shouldPreload(e3)) && (e3.setAttribute("src", e3.getAttribute("data-src")), e3.setAttribute("data-lazy-loaded", ""), e3.removeAttribute("data-src"), t2 && e3.addEventListener("load", this.preventIframeAutoFocus));
    }), t(e2, "video, audio").forEach((e3) => {
      let n3 = 0;
      t(e3, "source[data-src]").forEach((e4) => {
        e4.setAttribute("src", e4.getAttribute("data-src")), e4.removeAttribute("data-src"), e4.setAttribute("data-lazy-loaded", ""), n3 += 1;
      }), g && e3.tagName === "VIDEO" && e3.setAttribute("playsinline", ""), n3 > 0 && e3.load();
    });
    let i2 = e2.slideBackgroundElement;
    if (i2) {
      i2.style.display = "block";
      let t2 = e2.slideBackgroundContentElement, r3 = e2.getAttribute("data-background-iframe");
      if (i2.hasAttribute("data-loaded") === false) {
        i2.setAttribute("data-loaded", "true");
        let a3 = e2.getAttribute("data-background-image"), o2 = e2.getAttribute("data-background-video"), s2 = e2.hasAttribute("data-background-video-loop"), c2 = e2.hasAttribute("data-background-video-muted");
        if (a3) /^data:/.test(a3.trim()) ? t2.style.backgroundImage = `url(${a3.trim()})` : t2.style.backgroundImage = a3.split(",").map((e3) => `url(${m(decodeURI(e3.trim()))})`).join(",");
        else if (o2) {
          let e3 = document.createElement("video");
          s2 && e3.setAttribute("loop", ""), (c2 || this.Reveal.isSpeakerNotes()) && (e3.muted = true), g && e3.setAttribute("playsinline", ""), o2.split(",").forEach((t3) => {
            let n3 = document.createElement("source");
            n3.setAttribute("src", t3);
            let r4 = p(t3);
            r4 && n3.setAttribute("type", r4), e3.appendChild(n3);
          }), t2.appendChild(e3);
        } else if (r3 && n2.excludeIframes !== true) {
          let e3 = document.createElement("iframe");
          e3.setAttribute("allowfullscreen", ""), e3.setAttribute("mozallowfullscreen", ""), e3.setAttribute("webkitallowfullscreen", ""), e3.setAttribute("allow", "autoplay"), e3.setAttribute("data-src", r3), e3.style.width = "100%", e3.style.height = "100%", e3.style.maxHeight = "100%", e3.style.maxWidth = "100%", t2.appendChild(e3);
        }
      }
      let a2 = t2.querySelector("iframe[data-src]");
      a2 && this.shouldPreload(i2) && !/autoplay=(1|true|yes)/gi.test(r3) && a2.getAttribute("src") !== r3 && a2.setAttribute("src", r3);
    }
    this.layout(e2);
  }
  layout(e2) {
    Array.from(e2.querySelectorAll(".r-fit-text")).forEach((e3) => {
      v(e3, {
        minSize: 24,
        maxSize: this.Reveal.getConfig().height * 0.8,
        observeMutations: false,
        observeWindow: false
      });
    });
  }
  unload(e2) {
    e2.style.display = "none";
    let n2 = this.Reveal.getSlideBackground(e2);
    n2 && (n2.style.display = "none", t(n2, "iframe[src]").forEach((e3) => {
      e3.removeAttribute("src");
    })), t(e2, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((e3) => {
      e3.setAttribute("data-src", e3.getAttribute("src")), e3.removeAttribute("src");
    }), t(e2, "video[data-lazy-loaded] source[src], audio source[src]").forEach((e3) => {
      e3.setAttribute("data-src", e3.getAttribute("src")), e3.removeAttribute("src");
    });
  }
  formatEmbeddedContent() {
    let e2 = (e3, n2, r2) => {
      t(this.Reveal.getSlidesElement(), "iframe[" + e3 + '*="' + n2 + '"]').forEach((t2) => {
        let n3 = t2.getAttribute(e3);
        n3 && n3.indexOf(r2) === -1 && t2.setAttribute(e3, n3 + (/\?/.test(n3) ? "&" : "?") + r2);
      });
    };
    e2("src", "youtube.com/embed/", "enablejsapi=1"), e2("data-src", "youtube.com/embed/", "enablejsapi=1"), e2("src", "player.vimeo.com/", "api=1"), e2("data-src", "player.vimeo.com/", "api=1");
  }
  startEmbeddedContent(e2) {
    if (e2) {
      let n2 = this.Reveal.isSpeakerNotes();
      t(e2, 'img[src$=".gif"]').forEach((e3) => {
        e3.setAttribute("src", e3.getAttribute("src"));
      }), t(e2, "video, audio").forEach((e3) => {
        if (o(e3, ".fragment") && !o(e3, ".fragment.visible")) return;
        let t2 = this.Reveal.getConfig().autoPlayMedia;
        if (typeof t2 != "boolean" && (t2 = e3.hasAttribute("data-autoplay") || !!o(e3, ".slide-background")), t2 && typeof e3.play == "function") {
          if (n2 && !e3.muted) return;
          e3.readyState > 1 ? this.startEmbeddedMedia({ target: e3 }) : g ? (e3.addEventListener("canplay", this.ensureMobileMediaPlaying), this.playMediaElement(e3)) : (e3.removeEventListener("loadeddata", this.startEmbeddedMedia), e3.addEventListener("loadeddata", this.startEmbeddedMedia));
        }
      }), n2 || (t(e2, "iframe[src]").forEach((e3) => {
        o(e3, ".fragment") && !o(e3, ".fragment.visible") || this.startEmbeddedIframe({ target: e3 });
      }), t(e2, "iframe[data-src]").forEach((e3) => {
        o(e3, ".fragment") && !o(e3, ".fragment.visible") || e3.getAttribute("src") !== e3.getAttribute("data-src") && (e3.removeEventListener("load", this.startEmbeddedIframe), e3.addEventListener("load", this.startEmbeddedIframe), e3.setAttribute("src", e3.getAttribute("data-src")));
      }));
    }
  }
  ensureMobileMediaPlaying(e2) {
    let t2 = e2.target;
    typeof t2.getVideoPlaybackQuality == "function" && setTimeout(() => {
      let e3 = t2.paused === false, n2 = t2.getVideoPlaybackQuality().totalVideoFrames;
      e3 && n2 === 0 && (t2.load(), t2.play());
    }, 1e3);
  }
  startEmbeddedMedia(e2) {
    let t2 = !!o(e2.target, "html"), n2 = !!o(e2.target, ".present");
    t2 && n2 && (e2.target.paused || e2.target.ended) && (e2.target.currentTime = 0, this.playMediaElement(e2.target)), e2.target.removeEventListener("loadeddata", this.startEmbeddedMedia);
  }
  playMediaElement(e2) {
    let t2 = e2.play();
    t2 && typeof t2.catch == "function" && t2.then(() => {
      e2.muted || (this.allowedToPlayAudio = true);
    }).catch((t3) => {
      if (t3.name === "NotAllowedError") {
        if (this.allowedToPlayAudio = false, e2.tagName === "VIDEO") {
          this.onVideoPlaybackNotAllowed(e2);
          let t4 = !!o(e2, "html"), n2 = !!o(e2, ".present"), r2 = e2.muted;
          t4 && n2 && !r2 && (e2.setAttribute("data-muted-by-reveal", "true"), e2.muted = true, e2.play().catch(() => {
            this.onMutedVideoPlaybackNotAllowed(e2);
          }));
        } else e2.tagName === "AUDIO" && this.onAudioPlaybackNotAllowed(e2);
      }
    });
  }
  startEmbeddedIframe(e2) {
    let t2 = e2.target;
    if (this.preventIframeAutoFocus(e2), t2 && t2.contentWindow) {
      let n2 = !!o(e2.target, "html"), r2 = !!o(e2.target, ".present");
      if (n2 && r2) {
        let e3 = this.Reveal.getConfig().autoPlayMedia;
        typeof e3 != "boolean" && (e3 = t2.hasAttribute("data-autoplay") || !!o(t2, ".slide-background")), /youtube\.com\/embed\//.test(t2.getAttribute("src")) && e3 ? t2.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t2.getAttribute("src")) && e3 ? t2.contentWindow.postMessage('{"method":"play"}', "*") : t2.contentWindow.postMessage("slide:start", "*");
      }
    }
  }
  stopEmbeddedContent(n2, r2 = {}) {
    r2 = e({ unloadIframes: true }, r2), n2 && n2.parentNode && (t(n2, "video, audio").forEach((e2) => {
      !e2.hasAttribute("data-ignore") && typeof e2.pause == "function" && (e2.setAttribute("data-paused-by-reveal", ""), e2.pause(), g && e2.removeEventListener("canplay", this.ensureMobileMediaPlaying));
    }), t(n2, "iframe").forEach((e2) => {
      e2.contentWindow && e2.contentWindow.postMessage("slide:stop", "*"), e2.removeEventListener("load", this.preventIframeAutoFocus), e2.removeEventListener("load", this.startEmbeddedIframe);
    }), t(n2, 'iframe[src*="youtube.com/embed/"]').forEach((e2) => {
      !e2.hasAttribute("data-ignore") && e2.contentWindow && typeof e2.contentWindow.postMessage == "function" && e2.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
    }), t(n2, 'iframe[src*="player.vimeo.com/"]').forEach((e2) => {
      !e2.hasAttribute("data-ignore") && e2.contentWindow && typeof e2.contentWindow.postMessage == "function" && e2.contentWindow.postMessage('{"method":"pause"}', "*");
    }), r2.unloadIframes === true && t(n2, "iframe[data-src]").forEach((e2) => {
      e2.setAttribute("src", "about:blank"), e2.removeAttribute("src");
    }));
  }
  isAllowedToPlayAudio() {
    return this.allowedToPlayAudio;
  }
  showPlayOrUnmuteButton() {
    let e2 = this.failedAudioPlaybackTargets.size, t2 = this.failedVideoPlaybackTargets.size, n2 = this.failedMutedVideoPlaybackTargets.size, r2 = "Play media";
    n2 > 0 ? r2 = "Play video" : t2 > 0 ? r2 = "Unmute video" : e2 > 0 && (r2 = "Play audio"), this.mediaPlayButton.textContent = r2, this.Reveal.getRevealElement().appendChild(this.mediaPlayButton);
  }
  onAudioPlaybackNotAllowed(e2) {
    this.failedAudioPlaybackTargets.add(e2), this.showPlayOrUnmuteButton(e2);
  }
  onVideoPlaybackNotAllowed(e2) {
    this.failedVideoPlaybackTargets.add(e2), this.showPlayOrUnmuteButton();
  }
  onMutedVideoPlaybackNotAllowed(e2) {
    this.failedMutedVideoPlaybackTargets.add(e2), this.showPlayOrUnmuteButton();
  }
  resetTemporarilyMutedMedia() {
    (/* @__PURE__ */ new Set([
      ...this.failedAudioPlaybackTargets,
      ...this.failedVideoPlaybackTargets,
      ...this.failedMutedVideoPlaybackTargets
    ])).forEach((e2) => {
      e2.hasAttribute("data-muted-by-reveal") && (e2.muted = false, e2.removeAttribute("data-muted-by-reveal"));
    });
  }
  clearMediaPlaybackErrors() {
    this.resetTemporarilyMutedMedia(), this.failedAudioPlaybackTargets.clear(), this.failedVideoPlaybackTargets.clear(), this.failedMutedVideoPlaybackTargets.clear(), this.mediaPlayButton && this.mediaPlayButton.parentNode && this.mediaPlayButton.remove();
  }
  preventIframeAutoFocus(e2) {
    let t2 = e2.target;
    if (t2 && this.Reveal.getConfig().preventIframeAutoFocus) {
      let e3 = 0, n2 = () => {
        document.activeElement === t2 ? document.activeElement.blur() : e3 < 1e3 && (e3 += 100, setTimeout(n2, 100));
      };
      setTimeout(n2, 100);
    }
  }
  afterSlideChanged() {
    this.clearMediaPlaybackErrors();
  }
};
var C = ".slides section";
var w = ".slides>section";
var te = ".slides>section.present>section";
var T = ".backgrounds>.slide-background";
var E = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview|previewIframe/;
var ne = class {
  constructor(e2) {
    this.Reveal = e2;
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element);
  }
  configure(e2, t2) {
    let n2 = "none";
    e2.slideNumber && !this.Reveal.isPrintView() && (e2.showSlideNumber === "all" || e2.showSlideNumber === "speaker" && this.Reveal.isSpeakerNotes()) && (n2 = "block"), this.element.style.display = n2;
  }
  update() {
    this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber());
  }
  getSlideNumber(e2 = this.Reveal.getCurrentSlide()) {
    let t2 = this.Reveal.getConfig(), n2, r2 = "h.v";
    if (typeof t2.slideNumber == "function") n2 = t2.slideNumber(e2);
    else {
      typeof t2.slideNumber == "string" && (r2 = t2.slideNumber), !/c/.test(r2) && this.Reveal.getHorizontalSlides().length === 1 && (r2 = "c");
      let i3 = e2 && e2.dataset.visibility === "uncounted" ? 0 : 1;
      switch (n2 = [], r2) {
        case "c":
          n2.push(this.Reveal.getSlidePastCount(e2) + i3);
          break;
        case "c/t":
          n2.push(this.Reveal.getSlidePastCount(e2) + i3, "/", this.Reveal.getTotalSlides());
          break;
        default:
          let t3 = this.Reveal.getIndices(e2);
          n2.push(t3.h + i3);
          let a2 = r2 === "h/v" ? "/" : ".";
          this.Reveal.isVerticalSlide(e2) && n2.push(a2, t3.v + 1);
      }
    }
    let i2 = "#" + this.Reveal.location.getHash(e2);
    return this.formatNumber(n2[0], n2[1], n2[2], i2);
  }
  formatNumber(e2, t2, n2, r2 = "#" + this.Reveal.location.getHash()) {
    return typeof n2 == "number" && !isNaN(n2) ? `<a href="${r2}">
					<span class="slide-number-a">${e2}</span>
					<span class="slide-number-delimiter">${t2}</span>
					<span class="slide-number-b">${n2}</span>
					</a>` : `<a href="${r2}">
					<span class="slide-number-a">${e2}</span>
					</a>`;
  }
  destroy() {
    this.element.remove();
  }
};
var re = class {
  constructor(e2) {
    this.Reveal = e2, this.onInput = this.onInput.bind(this), this.onBlur = this.onBlur.bind(this), this.onKeyDown = this.onKeyDown.bind(this);
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "jump-to-slide", this.jumpInput = document.createElement("input"), this.jumpInput.type = "text", this.jumpInput.className = "jump-to-slide-input", this.jumpInput.placeholder = "Jump to slide", this.jumpInput.addEventListener("input", this.onInput), this.jumpInput.addEventListener("keydown", this.onKeyDown), this.jumpInput.addEventListener("blur", this.onBlur), this.element.appendChild(this.jumpInput);
  }
  show() {
    this.indicesOnShow = this.Reveal.getIndices(), this.Reveal.getRevealElement().appendChild(this.element), this.jumpInput.focus();
  }
  hide() {
    this.isVisible() && (this.element.remove(), this.jumpInput.value = "", clearTimeout(this.jumpTimeout), delete this.jumpTimeout);
  }
  isVisible() {
    return !!this.element.parentNode;
  }
  jump() {
    clearTimeout(this.jumpTimeout), delete this.jumpTimeout;
    let e2 = this.jumpInput.value.trim(""), t2;
    if (/^\d+$/.test(e2)) {
      let n2 = this.Reveal.getConfig().slideNumber;
      if (n2 === "c" || n2 === "c/t") {
        let n3 = this.Reveal.getSlides()[parseInt(e2, 10) - 1];
        n3 && (t2 = this.Reveal.getIndices(n3));
      }
    }
    return t2 || (/^\d+\.\d+$/.test(e2) && (e2 = e2.replace(".", "/")), t2 = this.Reveal.location.getIndicesFromHash(e2, { oneBasedIndex: true })), !t2 && /\S+/i.test(e2) && e2.length > 1 && (t2 = this.search(e2)), t2 && e2 !== "" ? (this.Reveal.slide(t2.h, t2.v, t2.f), true) : (this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f), false);
  }
  jumpAfter(e2) {
    clearTimeout(this.jumpTimeout), this.jumpTimeout = setTimeout(() => this.jump(), e2);
  }
  search(e2) {
    let t2 = RegExp("\\b" + e2.trim() + "\\b", "i"), n2 = this.Reveal.getSlides().find((e3) => t2.test(e3.innerText));
    return n2 ? this.Reveal.getIndices(n2) : null;
  }
  cancel() {
    this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f), this.hide();
  }
  confirm() {
    this.jump(), this.hide();
  }
  destroy() {
    this.jumpInput.removeEventListener("input", this.onInput), this.jumpInput.removeEventListener("keydown", this.onKeyDown), this.jumpInput.removeEventListener("blur", this.onBlur), this.element.remove();
  }
  onKeyDown(e2) {
    e2.keyCode === 13 ? this.confirm() : e2.keyCode === 27 && (this.cancel(), e2.stopImmediatePropagation());
  }
  onInput(e2) {
    this.jumpAfter(200);
  }
  onBlur() {
    setTimeout(() => this.hide(), 1);
  }
};
var D = (e2) => {
  let t2 = e2.match(/^#([0-9a-f]{3})$/i);
  if (t2 && t2[1]) {
    let e3 = t2[1];
    return {
      r: parseInt(e3.charAt(0), 16) * 17,
      g: parseInt(e3.charAt(1), 16) * 17,
      b: parseInt(e3.charAt(2), 16) * 17
    };
  }
  let n2 = e2.match(/^#([0-9a-f]{6})$/i);
  if (n2 && n2[1]) {
    let e3 = n2[1];
    return {
      r: parseInt(e3.slice(0, 2), 16),
      g: parseInt(e3.slice(2, 4), 16),
      b: parseInt(e3.slice(4, 6), 16)
    };
  }
  let r2 = e2.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
  if (r2) return {
    r: parseInt(r2[1], 10),
    g: parseInt(r2[2], 10),
    b: parseInt(r2[3], 10)
  };
  let i2 = e2.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
  return i2 ? {
    r: parseInt(i2[1], 10),
    g: parseInt(i2[2], 10),
    b: parseInt(i2[3], 10),
    a: parseFloat(i2[4])
  } : null;
};
var ie = (e2) => (typeof e2 == "string" && (e2 = D(e2)), e2 ? (e2.r * 299 + e2.g * 587 + e2.b * 114) / 1e3 : null);
var ae = class {
  constructor(e2) {
    this.Reveal = e2;
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element);
  }
  create() {
    this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach((e2) => {
      let n2 = this.createBackground(e2, this.element);
      t(e2, "section").forEach((e3) => {
        this.createBackground(e3, n2), n2.classList.add("stack");
      });
    }), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = 'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")', this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout(() => {
      this.Reveal.getRevealElement().classList.add("has-parallax-background");
    }, 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background"));
  }
  createBackground(e2, t2) {
    let n2 = document.createElement("div");
    n2.className = "slide-background " + e2.className.replace(/present|past|future/, "");
    let r2 = document.createElement("div");
    return r2.className = "slide-background-content", n2.appendChild(r2), t2.appendChild(n2), e2.slideBackgroundElement = n2, e2.slideBackgroundContentElement = r2, this.sync(e2), n2;
  }
  sync(e2) {
    let t2 = e2.slideBackgroundElement, n2 = e2.slideBackgroundContentElement, r2 = {
      background: e2.getAttribute("data-background"),
      backgroundSize: e2.getAttribute("data-background-size"),
      backgroundImage: e2.getAttribute("data-background-image"),
      backgroundVideo: e2.getAttribute("data-background-video"),
      backgroundIframe: e2.getAttribute("data-background-iframe"),
      backgroundColor: e2.getAttribute("data-background-color"),
      backgroundGradient: e2.getAttribute("data-background-gradient"),
      backgroundRepeat: e2.getAttribute("data-background-repeat"),
      backgroundPosition: e2.getAttribute("data-background-position"),
      backgroundTransition: e2.getAttribute("data-background-transition"),
      backgroundOpacity: e2.getAttribute("data-background-opacity")
    }, i2 = e2.hasAttribute("data-preload");
    e2.classList.remove("has-dark-background"), e2.classList.remove("has-light-background"), t2.removeAttribute("data-loaded"), t2.removeAttribute("data-background-hash"), t2.removeAttribute("data-background-size"), t2.removeAttribute("data-background-transition"), t2.style.backgroundColor = "", n2.style.backgroundSize = "", n2.style.backgroundRepeat = "", n2.style.backgroundPosition = "", n2.style.backgroundImage = "", n2.style.opacity = "", n2.innerHTML = "", r2.background && (/^(http|file|\/\/)/gi.test(r2.background) || /\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(r2.background) ? e2.setAttribute("data-background-image", r2.background) : t2.style.background = r2.background), (r2.background || r2.backgroundColor || r2.backgroundGradient || r2.backgroundImage || r2.backgroundVideo || r2.backgroundIframe) && t2.setAttribute("data-background-hash", r2.background + r2.backgroundSize + r2.backgroundImage + r2.backgroundVideo + r2.backgroundIframe + r2.backgroundColor + r2.backgroundGradient + r2.backgroundRepeat + r2.backgroundPosition + r2.backgroundTransition + r2.backgroundOpacity), r2.backgroundSize && t2.setAttribute("data-background-size", r2.backgroundSize), r2.backgroundColor && (t2.style.backgroundColor = r2.backgroundColor), r2.backgroundGradient && (t2.style.backgroundImage = r2.backgroundGradient), r2.backgroundTransition && t2.setAttribute("data-background-transition", r2.backgroundTransition), i2 && t2.setAttribute("data-preload", ""), r2.backgroundSize && (n2.style.backgroundSize = r2.backgroundSize), r2.backgroundRepeat && (n2.style.backgroundRepeat = r2.backgroundRepeat), r2.backgroundPosition && (n2.style.backgroundPosition = r2.backgroundPosition), r2.backgroundOpacity && (n2.style.opacity = r2.backgroundOpacity);
    let a2 = this.getContrastClass(e2);
    typeof a2 == "string" && e2.classList.add(a2);
  }
  getContrastClass(e2) {
    let t2 = e2.slideBackgroundElement, n2 = e2.getAttribute("data-background-color");
    if (!n2 || !D(n2)) {
      let e3 = window.getComputedStyle(t2);
      e3 && e3.backgroundColor && (n2 = e3.backgroundColor);
    }
    if (n2) {
      let e3 = D(n2);
      if (e3 && e3.a !== 0) return ie(n2) < 128 ? "has-dark-background" : "has-light-background";
    }
    return null;
  }
  bubbleSlideContrastClassToElement(e2, t2) {
    ["has-light-background", "has-dark-background"].forEach((n2) => {
      e2.classList.contains(n2) ? t2.classList.add(n2) : t2.classList.remove(n2);
    }, this);
  }
  update(e2 = false) {
    let n2 = this.Reveal.getConfig(), r2 = this.Reveal.getCurrentSlide(), i2 = this.Reveal.getIndices(), a2 = null, o2 = n2.rtl ? "future" : "past", s2 = n2.rtl ? "past" : "future";
    if (Array.from(this.element.childNodes).forEach((n3, r3) => {
      n3.classList.remove("past", "present", "future"), r3 < i2.h ? n3.classList.add(o2) : r3 > i2.h ? n3.classList.add(s2) : (n3.classList.add("present"), a2 = n3), (e2 || r3 === i2.h) && t(n3, ".slide-background").forEach((e3, t2) => {
        e3.classList.remove("past", "present", "future");
        let n4 = typeof i2.v == "number" ? i2.v : 0;
        t2 < n4 ? e3.classList.add("past") : t2 > n4 ? e3.classList.add("future") : (e3.classList.add("present"), r3 === i2.h && (a2 = e3));
      });
    }), this.previousBackground && !this.previousBackground.closest("body") && (this.previousBackground = null), a2 && this.previousBackground) {
      let e3 = this.previousBackground.getAttribute("data-background-hash"), t2 = a2.getAttribute("data-background-hash");
      if (t2 && t2 === e3 && a2 !== this.previousBackground) {
        this.element.classList.add("no-transition");
        let e4 = a2.querySelector("video"), t3 = this.previousBackground.querySelector("video");
        if (e4 && t3) {
          let n3 = e4.parentNode;
          t3.parentNode.appendChild(e4), n3.appendChild(t3);
        }
      }
    }
    let c2 = a2 !== this.previousBackground;
    if (c2 && this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, { unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground) }), c2 && a2) {
      this.Reveal.slideContent.startEmbeddedContent(a2);
      let e3 = a2.querySelector(".slide-background-content");
      if (e3) {
        let t2 = e3.style.backgroundImage || "";
        /\.gif/i.test(t2) && (e3.style.backgroundImage = "", window.getComputedStyle(e3).opacity, e3.style.backgroundImage = t2);
      }
      this.previousBackground = a2;
    }
    r2 && this.bubbleSlideContrastClassToElement(r2, this.Reveal.getRevealElement()), setTimeout(() => {
      this.element.classList.remove("no-transition");
    }, 10);
  }
  updateParallax() {
    let e2 = this.Reveal.getIndices();
    if (this.Reveal.getConfig().parallaxBackgroundImage) {
      let t2 = this.Reveal.getHorizontalSlides(), n2 = this.Reveal.getVerticalSlides(), r2 = this.element.style.backgroundSize.split(" "), i2, a2;
      r2.length === 1 ? i2 = a2 = parseInt(r2[0], 10) : (i2 = parseInt(r2[0], 10), a2 = parseInt(r2[1], 10));
      let o2 = this.element.offsetWidth, s2 = t2.length, c2, l2;
      c2 = typeof this.Reveal.getConfig().parallaxBackgroundHorizontal == "number" ? this.Reveal.getConfig().parallaxBackgroundHorizontal : s2 > 1 ? (i2 - o2) / (s2 - 1) : 0, l2 = c2 * e2.h * -1;
      let u2 = this.element.offsetHeight, d2 = n2.length, f2, p2;
      f2 = typeof this.Reveal.getConfig().parallaxBackgroundVertical == "number" ? this.Reveal.getConfig().parallaxBackgroundVertical : (a2 - u2) / (d2 - 1), p2 = d2 > 0 ? f2 * e2.v : 0, this.element.style.backgroundPosition = l2 + "px " + -p2 + "px";
    }
  }
  destroy() {
    this.element.remove();
  }
};
var O = 0;
var oe = class {
  constructor(e2) {
    this.Reveal = e2;
  }
  run(e2, t2) {
    this.reset();
    let n2 = this.Reveal.getSlides(), r2 = n2.indexOf(t2), i2 = n2.indexOf(e2);
    if (e2 && t2 && e2.hasAttribute("data-auto-animate") && t2.hasAttribute("data-auto-animate") && e2.getAttribute("data-auto-animate-id") === t2.getAttribute("data-auto-animate-id") && !(r2 > i2 ? t2 : e2).hasAttribute("data-auto-animate-restart")) {
      this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || l();
      let n3 = this.getAutoAnimateOptions(t2);
      e2.dataset.autoAnimate = "pending", t2.dataset.autoAnimate = "pending", n3.slideDirection = r2 > i2 ? "forward" : "backward";
      let a2 = e2.style.display === "none";
      a2 && (e2.style.display = this.Reveal.getConfig().display);
      let o2 = this.getAutoAnimatableElements(e2, t2).map((e3) => this.autoAnimateElements(e3.from, e3.to, e3.options || {}, n3, O++));
      if (a2 && (e2.style.display = "none"), t2.dataset.autoAnimateUnmatched !== "false" && this.Reveal.getConfig().autoAnimateUnmatched === true) {
        let e3 = n3.duration * 0.8, r3 = n3.duration * 0.2;
        this.getUnmatchedAutoAnimateElements(t2).forEach((e4) => {
          let t3 = this.getAutoAnimateOptions(e4, n3), r4 = "unmatched";
          (t3.duration !== n3.duration || t3.delay !== n3.delay) && (r4 = "unmatched-" + O++, o2.push(`[data-auto-animate="running"] [data-auto-animate-target="${r4}"] { transition: opacity ${t3.duration}s ease ${t3.delay}s; }`)), e4.dataset.autoAnimateTarget = r4;
        }, this), o2.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e3}s ease ${r3}s; }`);
      }
      this.autoAnimateStyleSheet.innerHTML = o2.join(""), requestAnimationFrame(() => {
        this.autoAnimateStyleSheet && (getComputedStyle(this.autoAnimateStyleSheet).fontWeight, t2.dataset.autoAnimate = "running");
      }), this.Reveal.dispatchEvent({
        type: "autoanimate",
        data: {
          fromSlide: e2,
          toSlide: t2,
          sheet: this.autoAnimateStyleSheet
        }
      });
    }
  }
  reset() {
    t(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach((e2) => {
      e2.dataset.autoAnimate = "";
    }), t(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach((e2) => {
      delete e2.dataset.autoAnimateTarget;
    }), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null);
  }
  autoAnimateElements(e2, t2, n2, r2, i2) {
    e2.dataset.autoAnimateTarget = "", t2.dataset.autoAnimateTarget = i2;
    let a2 = this.getAutoAnimateOptions(t2, r2);
    n2.delay !== void 0 && (a2.delay = n2.delay), n2.duration !== void 0 && (a2.duration = n2.duration), n2.easing !== void 0 && (a2.easing = n2.easing);
    let o2 = this.getAutoAnimatableProperties("from", e2, n2), s2 = this.getAutoAnimatableProperties("to", t2, n2);
    if (t2.classList.contains("fragment") && delete s2.styles.opacity, n2.translate !== false || n2.scale !== false) {
      let e3 = this.Reveal.getScale(), t3 = {
        x: (o2.x - s2.x) / e3,
        y: (o2.y - s2.y) / e3,
        scaleX: o2.width / s2.width,
        scaleY: o2.height / s2.height
      };
      t3.x = Math.round(t3.x * 1e3) / 1e3, t3.y = Math.round(t3.y * 1e3) / 1e3, t3.scaleX = Math.round(t3.scaleX * 1e3) / 1e3, t3.scaleX = Math.round(t3.scaleX * 1e3) / 1e3;
      let r3 = n2.translate !== false && (t3.x !== 0 || t3.y !== 0), i3 = n2.scale !== false && (t3.scaleX !== 0 || t3.scaleY !== 0);
      if (r3 || i3) {
        let e4 = [];
        r3 && e4.push(`translate(${t3.x}px, ${t3.y}px)`), i3 && e4.push(`scale(${t3.scaleX}, ${t3.scaleY})`), o2.styles.transform = e4.join(" "), o2.styles["transform-origin"] = "top left", s2.styles.transform = "none";
      }
    }
    for (let e3 in s2.styles) {
      let t3 = s2.styles[e3], n3 = o2.styles[e3];
      t3 === n3 ? delete s2.styles[e3] : (t3.explicitValue === true && (s2.styles[e3] = t3.value), n3.explicitValue === true && (o2.styles[e3] = n3.value));
    }
    let c2 = "", l2 = Object.keys(s2.styles);
    if (l2.length > 0) {
      o2.styles.transition = "none", s2.styles.transition = `all ${a2.duration}s ${a2.easing} ${a2.delay}s`, s2.styles["transition-property"] = l2.join(", "), s2.styles["will-change"] = l2.join(", ");
      let e3 = Object.keys(o2.styles).map((e4) => e4 + ": " + o2.styles[e4] + " !important;").join(""), t3 = Object.keys(s2.styles).map((e4) => e4 + ": " + s2.styles[e4] + " !important;").join("");
      c2 = '[data-auto-animate-target="' + i2 + '"] {' + e3 + '}[data-auto-animate="running"] [data-auto-animate-target="' + i2 + '"] {' + t3 + "}";
    }
    return c2;
  }
  getAutoAnimateOptions(t2, n2) {
    let r2 = {
      easing: this.Reveal.getConfig().autoAnimateEasing,
      duration: this.Reveal.getConfig().autoAnimateDuration,
      delay: 0
    };
    if (r2 = e(r2, n2), t2.parentNode) {
      let e2 = o(t2.parentNode, "[data-auto-animate-target]");
      e2 && (r2 = this.getAutoAnimateOptions(e2, r2));
    }
    return t2.dataset.autoAnimateEasing && (r2.easing = t2.dataset.autoAnimateEasing), t2.dataset.autoAnimateDuration && (r2.duration = parseFloat(t2.dataset.autoAnimateDuration)), t2.dataset.autoAnimateDelay && (r2.delay = parseFloat(t2.dataset.autoAnimateDelay)), r2;
  }
  getAutoAnimatableProperties(e2, t2, n2) {
    let r2 = this.Reveal.getConfig(), i2 = { styles: [] };
    if (n2.translate !== false || n2.scale !== false) {
      let e3;
      if (typeof n2.measure == "function") e3 = n2.measure(t2);
      else if (r2.center) e3 = t2.getBoundingClientRect();
      else {
        let n3 = this.Reveal.getScale();
        e3 = {
          x: t2.offsetLeft * n3,
          y: t2.offsetTop * n3,
          width: t2.offsetWidth * n3,
          height: t2.offsetHeight * n3
        };
      }
      i2.x = e3.x, i2.y = e3.y, i2.width = e3.width, i2.height = e3.height;
    }
    let a2 = getComputedStyle(t2);
    return (n2.styles || r2.autoAnimateStyles).forEach((t3) => {
      let n3;
      typeof t3 == "string" && (t3 = { property: t3 }), t3.from !== void 0 && e2 === "from" ? n3 = {
        value: t3.from,
        explicitValue: true
      } : t3.to !== void 0 && e2 === "to" ? n3 = {
        value: t3.to,
        explicitValue: true
      } : (t3.property === "line-height" && (n3 = parseFloat(a2["line-height"]) / parseFloat(a2["font-size"])), isNaN(n3) && (n3 = a2[t3.property])), n3 !== "" && (i2.styles[t3.property] = n3);
    }), i2;
  }
  getAutoAnimatableElements(e2, t2) {
    let n2 = (typeof this.Reveal.getConfig().autoAnimateMatcher == "function" ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e2, t2), r2 = [];
    return n2.filter((e3, t3) => {
      if (r2.indexOf(e3.to) === -1) return r2.push(e3.to), true;
    });
  }
  getAutoAnimatePairs(e2, t2) {
    let n2 = [], r2 = "h1, h2, h3, h4, h5, h6, p, li";
    return this.findAutoAnimateMatches(n2, e2, t2, "[data-id]", (e3) => e3.nodeName + ":::" + e3.getAttribute("data-id")), this.findAutoAnimateMatches(n2, e2, t2, r2, (e3) => e3.nodeName + ":::" + e3.textContent.trim()), this.findAutoAnimateMatches(n2, e2, t2, "img, video, iframe", (e3) => e3.nodeName + ":::" + (e3.getAttribute("src") || e3.getAttribute("data-src"))), this.findAutoAnimateMatches(n2, e2, t2, "pre", (e3) => e3.nodeName + ":::" + e3.textContent.trim()), n2.forEach((e3) => {
      a(e3.from, r2) ? e3.options = { scale: false } : a(e3.from, "pre") && (e3.options = {
        scale: false,
        styles: ["width", "height"]
      }, this.findAutoAnimateMatches(n2, e3.from, e3.to, ".hljs .hljs-ln-code", (e4) => e4.textContent, {
        scale: false,
        styles: [],
        measure: this.getLocalBoundingBox.bind(this)
      }), this.findAutoAnimateMatches(n2, e3.from, e3.to, ".hljs .hljs-ln-numbers[data-line-number]", (e4) => e4.getAttribute("data-line-number"), {
        scale: false,
        styles: ["width"],
        measure: this.getLocalBoundingBox.bind(this)
      }));
    }, this), n2;
  }
  getLocalBoundingBox(e2) {
    let t2 = this.Reveal.getScale();
    return {
      x: Math.round(e2.offsetLeft * t2 * 100) / 100,
      y: Math.round(e2.offsetTop * t2 * 100) / 100,
      width: Math.round(e2.offsetWidth * t2 * 100) / 100,
      height: Math.round(e2.offsetHeight * t2 * 100) / 100
    };
  }
  findAutoAnimateMatches(e2, t2, n2, r2, i2, a2) {
    let o2 = {}, s2 = {};
    [].slice.call(t2.querySelectorAll(r2)).forEach((e3, t3) => {
      let n3 = i2(e3);
      typeof n3 == "string" && n3.length && (o2[n3] = o2[n3] || [], o2[n3].push(e3));
    }), [].slice.call(n2.querySelectorAll(r2)).forEach((t3, n3) => {
      let r3 = i2(t3);
      s2[r3] = s2[r3] || [], s2[r3].push(t3);
      let c2;
      if (o2[r3]) {
        let e3 = s2[r3].length - 1, t4 = o2[r3].length - 1;
        o2[r3][e3] ? (c2 = o2[r3][e3], o2[r3][e3] = null) : o2[r3][t4] && (c2 = o2[r3][t4], o2[r3][t4] = null);
      }
      c2 && e2.push({
        from: c2,
        to: t3,
        options: a2
      });
    });
  }
  getUnmatchedAutoAnimateElements(e2) {
    return [].slice.call(e2.children).reduce((e3, t2) => {
      let n2 = t2.querySelector("[data-auto-animate-target]");
      return !t2.hasAttribute("data-auto-animate-target") && !n2 && e3.push(t2), t2.querySelector("[data-auto-animate-target]") && (e3 = e3.concat(this.getUnmatchedAutoAnimateElements(t2))), e3;
    }, []);
  }
};
var k = 500;
var se = 4;
var ce = 6;
var A = 8;
var le = class {
  constructor(e2) {
    this.Reveal = e2, this.active = false, this.activeProgressBarPage = null, this.activeProgressBarTrigger = null, this.activatedCallbacks = [], this.onScroll = this.onScroll.bind(this);
  }
  activate() {
    if (this.active) return;
    let e2 = this.Reveal.getState();
    this.active = true, this.slideHTMLBeforeActivation = this.Reveal.getSlidesElement().innerHTML;
    let n2 = t(this.Reveal.getRevealElement(), w), r2 = t(this.Reveal.getRevealElement(), T);
    this.viewportElement.classList.add("loading-scroll-mode", "reveal-scroll");
    let i2, a2 = window.getComputedStyle(this.viewportElement);
    a2 && a2.background && (i2 = a2.background);
    let o2 = [], s2 = n2[0].parentNode, c2, l2 = (e3, t2, n3, a3) => {
      let s3;
      if (c2 && this.Reveal.shouldAutoAnimateBetween(c2, e3)) s3 = document.createElement("div"), s3.className = "scroll-page-content scroll-auto-animate-page", s3.style.display = "none", c2.closest(".scroll-page-content").parentNode.appendChild(s3);
      else {
        let e4 = document.createElement("div");
        if (e4.className = "scroll-page", o2.push(e4), a3 && r2.length > t2) {
          let n5 = r2[t2], a4 = window.getComputedStyle(n5);
          a4 && a4.background ? e4.style.background = a4.background : i2 && (e4.style.background = i2);
        } else i2 && (e4.style.background = i2);
        let n4 = document.createElement("div");
        n4.className = "scroll-page-sticky", e4.appendChild(n4), s3 = document.createElement("div"), s3.className = "scroll-page-content", n4.appendChild(s3);
      }
      s3.appendChild(e3), e3.classList.remove("past", "future"), e3.removeAttribute("inert"), e3.setAttribute("data-index-h", t2), e3.setAttribute("data-index-v", n3), e3.slideBackgroundElement && (e3.slideBackgroundElement.remove("past", "future"), s3.insertBefore(e3.slideBackgroundElement, e3)), c2 = e3;
    };
    n2.forEach((e3, t2) => {
      this.Reveal.isVerticalStack(e3) ? e3.querySelectorAll("section").forEach((e4, n3) => {
        l2(e4, t2, n3, true);
      }) : l2(e3, t2, 0);
    }, this), this.createProgressBar(), t(this.Reveal.getRevealElement(), ".stack").forEach((e3) => e3.remove()), o2.forEach((e3) => s2.appendChild(e3)), this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()), this.Reveal.layout(), this.Reveal.setState(e2), this.activatedCallbacks.forEach((e3) => e3()), this.activatedCallbacks = [], this.restoreScrollPosition(), this.viewportElement.classList.remove("loading-scroll-mode"), this.viewportElement.addEventListener("scroll", this.onScroll, { passive: true });
  }
  deactivate() {
    if (!this.active) return;
    let e2 = this.Reveal.getState();
    this.active = false, this.viewportElement.removeEventListener("scroll", this.onScroll), this.viewportElement.classList.remove("reveal-scroll"), this.pendingScrollRaf && (cancelAnimationFrame(this.pendingScrollRaf), this.pendingScrollRaf = 0), this.removeProgressBar(), this.Reveal.getSlidesElement().innerHTML = this.slideHTMLBeforeActivation, this.Reveal.sync(), this.Reveal.setState(e2), this.slideHTMLBeforeActivation = null;
  }
  toggle(e2) {
    typeof e2 == "boolean" ? e2 ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
  }
  isActive() {
    return this.active;
  }
  createProgressBar() {
    this.progressBar = document.createElement("div"), this.progressBar.className = "scrollbar", this.progressBarInner = document.createElement("div"), this.progressBarInner.className = "scrollbar-inner", this.progressBar.appendChild(this.progressBarInner), this.progressBarPlayhead = document.createElement("div"), this.progressBarPlayhead.className = "scrollbar-playhead", this.progressBarInner.appendChild(this.progressBarPlayhead), this.viewportElement.insertBefore(this.progressBar, this.viewportElement.firstChild);
    let e2 = (e3) => {
      let t3 = (e3.clientY - this.progressBarInner.getBoundingClientRect().top) / this.progressBarHeight;
      t3 = Math.max(Math.min(t3, 1), 0), this.viewportElement.scrollTop = t3 * (this.viewportElement.scrollHeight - this.viewportElement.offsetHeight);
    }, t2 = (n2) => {
      this.draggingProgressBar = false, this.showProgressBar(), document.removeEventListener("mousemove", e2), document.removeEventListener("mouseup", t2);
    };
    this.progressBarInner.addEventListener("mousedown", (n2) => {
      n2.preventDefault(), this.draggingProgressBar = true, document.addEventListener("mousemove", e2), document.addEventListener("mouseup", t2), e2(n2);
    });
  }
  removeProgressBar() {
    this.progressBar && (this.progressBar.remove(), this.progressBar = null), this.activeProgressBarPage = null, this.activeProgressBarTrigger = null;
  }
  layout() {
    this.isActive() && (this.syncPages(), this.syncScrollPosition());
  }
  syncPages() {
    let e2 = this.Reveal.getConfig(), t2 = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight), n2 = this.Reveal.getScale(), r2 = e2.scrollLayout === "compact", i2 = this.viewportElement.offsetHeight, a2 = t2.height * n2, o2 = r2 ? a2 : i2;
    this.scrollTriggerHeight = r2 ? a2 : i2, this.viewportElement.style.setProperty("--page-height", o2 + "px"), this.viewportElement.style.scrollSnapType = typeof e2.scrollSnap == "string" ? `y ${e2.scrollSnap}` : "", this.slideTriggers = [];
    let s2 = Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));
    this.pages = s2.map((n3) => {
      let a3 = this.createPage({
        pageElement: n3,
        slideElement: n3.querySelector("section"),
        stickyElement: n3.querySelector(".scroll-page-sticky"),
        contentElement: n3.querySelector(".scroll-page-content"),
        backgroundElement: n3.querySelector(".slide-background"),
        autoAnimateElements: n3.querySelectorAll(".scroll-auto-animate-page"),
        autoAnimatePages: []
      });
      a3.pageElement.style.setProperty("--slide-height", e2.center === true ? "auto" : t2.height + "px"), this.slideTriggers.push({
        page: a3,
        activate: () => this.activatePage(a3),
        deactivate: () => this.deactivatePage(a3)
      }), this.createFragmentTriggersForPage(a3), a3.autoAnimateElements.length > 0 && this.createAutoAnimateTriggersForPage(a3);
      let s3 = Math.max(a3.scrollTriggers.length - 1, 0);
      s3 += a3.autoAnimatePages.reduce((e3, t3) => e3 + Math.max(t3.scrollTriggers.length - 1, 0), a3.autoAnimatePages.length), a3.pageElement.querySelectorAll(".scroll-snap-point").forEach((e3) => e3.remove());
      for (let e3 = 0; e3 < s3 + 1; e3++) {
        let t3 = document.createElement("div");
        t3.className = "scroll-snap-point", t3.style.height = this.scrollTriggerHeight + "px", t3.style.scrollSnapAlign = r2 ? "center" : "start", a3.pageElement.appendChild(t3), e3 === 0 && (t3.style.marginTop = -this.scrollTriggerHeight + "px");
      }
      return r2 && a3.scrollTriggers.length > 0 ? (a3.pageHeight = i2, a3.pageElement.style.setProperty("--page-height", i2 + "px")) : (a3.pageHeight = o2, a3.pageElement.style.removeProperty("--page-height")), a3.scrollPadding = this.scrollTriggerHeight * s3, a3.totalHeight = a3.pageHeight + a3.scrollPadding, a3.pageElement.style.setProperty("--page-scroll-padding", a3.scrollPadding + "px"), s3 > 0 ? (a3.stickyElement.style.position = "sticky", a3.stickyElement.style.top = Math.max((i2 - a3.pageHeight) / 2, 0) + "px") : (a3.stickyElement.style.position = "relative", a3.pageElement.style.scrollSnapAlign = a3.pageHeight < i2 ? "center" : "start"), a3;
    }), this.setTriggerRanges(), this.viewportElement.setAttribute("data-scrollbar", e2.scrollProgress), e2.scrollProgress && this.totalScrollTriggerCount > 1 ? (this.progressBar || this.createProgressBar(), this.syncProgressBar()) : this.removeProgressBar();
  }
  setTriggerRanges() {
    this.totalScrollTriggerCount = this.slideTriggers.reduce((e3, t2) => e3 + Math.max(t2.page.scrollTriggers.length, 1), 0);
    let e2 = 0;
    this.slideTriggers.forEach((t2, n2) => {
      t2.range = [e2, e2 + Math.max(t2.page.scrollTriggers.length, 1) / this.totalScrollTriggerCount];
      let r2 = (t2.range[1] - t2.range[0]) / t2.page.scrollTriggers.length;
      t2.page.scrollTriggers.forEach((t3, n3) => {
        t3.range = [e2 + n3 * r2, e2 + (n3 + 1) * r2];
      }), e2 = t2.range[1];
    }), this.slideTriggers[this.slideTriggers.length - 1].range[1] = 1;
  }
  createFragmentTriggersForPage(e2, t2) {
    t2 = t2 || e2.slideElement;
    let n2 = this.Reveal.fragments.sort(t2.querySelectorAll(".fragment"), true);
    return n2.length && (e2.fragments = this.Reveal.fragments.sort(t2.querySelectorAll(".fragment:not(.disabled)")), e2.scrollTriggers.push({ activate: () => {
      this.Reveal.fragments.update(-1, e2.fragments, t2);
    } }), n2.forEach((n3, r2) => {
      e2.scrollTriggers.push({ activate: () => {
        this.Reveal.fragments.update(r2, e2.fragments, t2);
      } });
    })), e2.scrollTriggers.length;
  }
  createAutoAnimateTriggersForPage(e2) {
    e2.autoAnimateElements.length > 0 && this.slideTriggers.push(...Array.from(e2.autoAnimateElements).map((t2, n2) => {
      let r2 = this.createPage({
        slideElement: t2.querySelector("section"),
        contentElement: t2,
        backgroundElement: t2.querySelector(".slide-background")
      });
      return this.createFragmentTriggersForPage(r2, r2.slideElement), e2.autoAnimatePages.push(r2), {
        page: r2,
        activate: () => this.activatePage(r2),
        deactivate: () => this.deactivatePage(r2)
      };
    }));
  }
  createPage(e2) {
    return e2.scrollTriggers = [], e2.indexh = parseInt(e2.slideElement.getAttribute("data-index-h"), 10), e2.indexv = parseInt(e2.slideElement.getAttribute("data-index-v"), 10), e2;
  }
  syncProgressBar() {
    this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach((e3) => e3.remove()), this.activeProgressBarPage = null, this.activeProgressBarTrigger = null, this.getAllPages().forEach((e3) => {
      e3.progressBarSlide = null, e3.scrollTriggers.forEach((e4) => e4.progressBarElement = null);
    });
    let e2 = this.viewportElement.scrollHeight, t2 = this.viewportElement.offsetHeight, n2 = t2 / e2;
    this.progressBarHeight = this.progressBarInner.offsetHeight, this.playheadHeight = Math.max(n2 * this.progressBarHeight, A), this.progressBarScrollableHeight = this.progressBarHeight - this.playheadHeight;
    let r2 = t2 / e2 * this.progressBarHeight, i2 = Math.min(r2 / 8, se);
    this.progressBarPlayhead.style.height = this.playheadHeight - i2 + "px", r2 > ce && this.slideTriggers.forEach((e3) => {
      let { page: t3 } = e3;
      t3.progressBarSlide = document.createElement("div"), t3.progressBarSlide.className = "scrollbar-slide", t3.progressBarSlide.style.top = e3.range[0] * this.progressBarHeight + "px", t3.progressBarSlide.style.height = (e3.range[1] - e3.range[0]) * this.progressBarHeight - i2 + "px", t3.progressBarSlide.classList.toggle("has-triggers", t3.scrollTriggers.length > 0), this.progressBarInner.appendChild(t3.progressBarSlide), t3.scrollTriggers.forEach((n3, r3) => {
        let a2 = document.createElement("div");
        a2.className = "scrollbar-trigger", a2.style.top = (n3.range[0] - e3.range[0]) * this.progressBarHeight + "px", a2.style.height = (n3.range[1] - n3.range[0]) * this.progressBarHeight - i2 + "px", t3.progressBarSlide.appendChild(a2), r3 === 0 && (a2.style.display = "none"), n3.progressBarElement = a2;
      });
    });
  }
  syncScrollPosition() {
    let e2 = this.viewportElement.offsetHeight, t2 = e2 / this.viewportElement.scrollHeight, n2 = this.viewportElement.scrollTop, r2 = this.viewportElement.scrollHeight - e2, i2 = Math.max(Math.min(n2 / r2, 1), 0), a2 = Math.max(Math.min((n2 + e2 / 2) / this.viewportElement.scrollHeight, 1), 0), o2, s2 = null;
    this.slideTriggers.forEach((e3) => {
      let { page: n3 } = e3, r3 = i2 >= e3.range[0] - t2 * 2 && i2 <= e3.range[1] + t2 * 2;
      r3 && !n3.loaded ? (n3.loaded = true, this.Reveal.slideContent.load(n3.slideElement)) : !r3 && n3.loaded && (n3.loaded = false, this.Reveal.slideContent.unload(n3.slideElement)), i2 >= e3.range[0] && i2 <= e3.range[1] ? (this.activateTrigger(e3), o2 = e3.page) : e3.active && this.deactivateTrigger(e3);
    }), o2 && o2.scrollTriggers.forEach((e3) => {
      a2 >= e3.range[0] && a2 <= e3.range[1] ? (this.activateTrigger(e3), s2 = e3) : e3.active && this.deactivateTrigger(e3);
    }), this.setProgressBarValue(n2 / (this.viewportElement.scrollHeight - e2), o2, s2);
  }
  setProgressBarValue(e2, t2 = null, n2 = null) {
    if (this.progressBar) {
      if (this.progressBarPlayhead.style.transform = `translateY(${e2 * this.progressBarScrollableHeight}px)`, this.activeProgressBarPage !== t2) {
        var r2, i2;
        (r2 = this.activeProgressBarPage) == null || (r2 = r2.progressBarSlide) == null || r2.classList.remove("active"), t2 == null || (i2 = t2.progressBarSlide) == null || i2.classList.add("active"), this.activeProgressBarPage = t2;
      }
      if (this.activeProgressBarTrigger !== n2) {
        var a2, o2;
        (a2 = this.activeProgressBarTrigger) == null || (a2 = a2.progressBarElement) == null || a2.classList.remove("active"), n2 == null || (o2 = n2.progressBarElement) == null || o2.classList.add("active"), this.activeProgressBarTrigger = n2;
      }
      this.showProgressBar();
    }
  }
  showProgressBar() {
    this.progressBar.classList.add("visible"), clearTimeout(this.hideProgressBarTimeout), this.Reveal.getConfig().scrollProgress === "auto" && !this.draggingProgressBar && (this.hideProgressBarTimeout = setTimeout(() => {
      this.progressBar && this.progressBar.classList.remove("visible");
    }, k));
  }
  prev() {
    this.viewportElement.scrollTop -= this.scrollTriggerHeight;
  }
  next() {
    this.viewportElement.scrollTop += this.scrollTriggerHeight;
  }
  scrollToSlide(e2) {
    if (!this.active) this.activatedCallbacks.push(() => this.scrollToSlide(e2));
    else {
      let t2 = this.getScrollTriggerBySlide(e2);
      t2 && (this.viewportElement.scrollTop = t2.range[0] * (this.viewportElement.scrollHeight - this.viewportElement.offsetHeight));
    }
  }
  storeScrollPosition() {
    clearTimeout(this.storeScrollPositionTimeout), this.storeScrollPositionTimeout = setTimeout(() => {
      sessionStorage.setItem("reveal-scroll-top", this.viewportElement.scrollTop), sessionStorage.setItem("reveal-scroll-origin", location.origin + location.pathname), this.storeScrollPositionTimeout = null;
    }, 50);
  }
  restoreScrollPosition() {
    let e2 = sessionStorage.getItem("reveal-scroll-top"), t2 = sessionStorage.getItem("reveal-scroll-origin");
    e2 && t2 === location.origin + location.pathname && (this.viewportElement.scrollTop = parseInt(e2, 10));
  }
  activatePage(e2) {
    if (!e2.active) {
      e2.active = true;
      let { slideElement: t2, backgroundElement: n2, contentElement: r2, indexh: i2, indexv: a2 } = e2;
      r2.style.display = "block", t2.classList.add("present"), n2 && n2.classList.add("present"), this.Reveal.setCurrentScrollPage(t2, i2, a2), this.Reveal.backgrounds.bubbleSlideContrastClassToElement(t2, this.viewportElement), Array.from(r2.parentNode.querySelectorAll(".scroll-page-content")).forEach((e3) => {
        e3 !== r2 && (e3.style.display = "none");
      });
    }
  }
  deactivatePage(e2) {
    e2.active && (e2.active = false, e2.slideElement && e2.slideElement.classList.remove("present"), e2.backgroundElement && e2.backgroundElement.classList.remove("present"));
  }
  activateTrigger(e2) {
    e2.active || (e2.active = true, e2.activate());
  }
  deactivateTrigger(e2) {
    e2.active && (e2.active = false, e2.deactivate && e2.deactivate());
  }
  getSlideByIndices(e2, t2) {
    let n2 = this.getAllPages().find((n3) => n3.indexh === e2 && n3.indexv === t2);
    return n2 ? n2.slideElement : null;
  }
  getScrollTriggerBySlide(e2) {
    return this.slideTriggers.find((t2) => t2.page.slideElement === e2);
  }
  getAllPages() {
    return this.pages.flatMap((e2) => [e2, ...e2.autoAnimatePages || []]);
  }
  onScroll() {
    this.pendingScrollRaf || (this.pendingScrollRaf = requestAnimationFrame(() => {
      this.pendingScrollRaf = 0, this.syncScrollPosition(), this.storeScrollPosition();
    }));
  }
  get viewportElement() {
    return this.Reveal.getViewportElement();
  }
};
function j(e2, t2, n2, r2, i2, a2, o2) {
  try {
    var s2 = e2[a2](o2), c2 = s2.value;
  } catch (e3) {
    n2(e3);
    return;
  }
  s2.done ? t2(c2) : Promise.resolve(c2).then(r2, i2);
}
function M(e2) {
  return function() {
    var t2 = this, n2 = arguments;
    return new Promise(function(r2, i2) {
      var a2 = e2.apply(t2, n2);
      function o2(e3) {
        j(a2, r2, i2, o2, s2, "next", e3);
      }
      function s2(e3) {
        j(a2, r2, i2, o2, s2, "throw", e3);
      }
      o2(void 0);
    });
  };
}
var ue = class {
  constructor(e2) {
    this.Reveal = e2;
  }
  activate() {
    var e2 = this;
    return M(function* () {
      let n2 = e2.Reveal.getConfig(), r2 = t(e2.Reveal.getRevealElement(), C), i2 = n2.slideNumber && /all|print/i.test(n2.showSlideNumber), a2 = e2.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight), o2 = Math.floor(a2.width * (1 + n2.margin)), s2 = Math.floor(a2.height * (1 + n2.margin)), c2 = a2.width, u2 = a2.height;
      yield new Promise(requestAnimationFrame), l("@page{size:" + o2 + "px " + s2 + "px; margin: 0px;}"), l(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + c2 + "px; max-height:" + u2 + "px}"), document.documentElement.classList.add("reveal-print", "print-pdf"), document.body.style.width = o2 + "px", document.body.style.height = s2 + "px";
      let d2 = e2.Reveal.getViewportElement(), f2;
      if (d2) {
        let e3 = window.getComputedStyle(d2);
        e3 && e3.background && (f2 = e3.background);
      }
      yield new Promise(requestAnimationFrame), e2.Reveal.layoutSlideContents(c2, u2), yield new Promise(requestAnimationFrame);
      let p2 = r2.map((e3) => e3.scrollHeight), m2 = [], h2 = r2[0].parentNode, g2 = 1;
      r2.forEach(function(e3, r3) {
        if (e3.classList.contains("stack") === false) {
          let a3 = (o2 - c2) / 2, l2 = (s2 - u2) / 2, d3 = p2[r3], h3 = Math.max(Math.ceil(d3 / s2), 1);
          h3 = Math.min(h3, n2.pdfMaxPagesPerSlide), (h3 === 1 && n2.center || e3.classList.contains("center")) && (l2 = Math.max((s2 - d3) / 2, 0));
          let _2 = document.createElement("div");
          if (m2.push(_2), _2.className = "pdf-page", _2.style.height = (s2 + n2.pdfPageHeightOffset) * h3 + "px", f2 && (_2.style.background = f2), _2.appendChild(e3), e3.style.left = a3 + "px", e3.style.top = l2 + "px", e3.style.width = c2 + "px", this.Reveal.slideContent.layout(e3), e3.slideBackgroundElement && _2.insertBefore(e3.slideBackgroundElement, e3), n2.showNotes) {
            let t2 = this.Reveal.getSlideNotes(e3);
            if (t2) {
              let e4 = typeof n2.showNotes == "string" ? n2.showNotes : "inline", r4 = document.createElement("div");
              r4.classList.add("speaker-notes"), r4.classList.add("speaker-notes-pdf"), r4.setAttribute("data-layout", e4), r4.innerHTML = t2, e4 === "separate-page" ? m2.push(r4) : (r4.style.left = "8px", r4.style.bottom = "8px", r4.style.width = o2 - 16 + "px", _2.appendChild(r4));
            }
          }
          if (i2) {
            let e4 = document.createElement("div");
            e4.classList.add("slide-number"), e4.classList.add("slide-number-pdf"), e4.innerHTML = g2++, _2.appendChild(e4);
          }
          if (n2.pdfSeparateFragments) {
            let e4 = this.Reveal.fragments.sort(_2.querySelectorAll(".fragment"), true), t2;
            e4.forEach(function(e5, n3) {
              t2 && t2.forEach(function(e6) {
                e6.classList.remove("current-fragment");
              }), e5.forEach(function(e6) {
                e6.classList.add("visible", "current-fragment");
              }, this);
              let r4 = _2.cloneNode(true);
              if (i2) {
                let e6 = r4.querySelector(".slide-number-pdf"), t3 = n3 + 1;
                e6.innerHTML += "." + t3;
              }
              m2.push(r4), t2 = e5;
            }, this), e4.forEach(function(e5) {
              e5.forEach(function(e6) {
                e6.classList.remove("visible", "current-fragment");
              });
            });
          } else t(_2, ".fragment:not(.fade-out)").forEach(function(e4) {
            e4.classList.add("visible");
          });
        }
      }, e2), yield new Promise(requestAnimationFrame), m2.forEach((e3) => h2.appendChild(e3)), e2.Reveal.slideContent.layout(e2.Reveal.getSlidesElement()), e2.Reveal.dispatchEvent({ type: "pdf-ready" }), d2.classList.remove("loading-scroll-mode");
    })();
  }
  isActive() {
    return this.Reveal.getConfig().view === "print";
  }
};
var de = class {
  constructor(e2) {
    this.Reveal = e2;
  }
  configure(e2, t2) {
    e2.fragments === false ? this.disable() : t2.fragments === false && this.enable();
  }
  disable() {
    t(this.Reveal.getSlidesElement(), ".fragment").forEach((e2) => {
      e2.classList.add("visible"), e2.classList.remove("current-fragment");
    });
  }
  enable() {
    t(this.Reveal.getSlidesElement(), ".fragment").forEach((e2) => {
      e2.classList.remove("visible"), e2.classList.remove("current-fragment");
    });
  }
  availableRoutes() {
    let e2 = this.Reveal.getCurrentSlide();
    if (e2 && this.Reveal.getConfig().fragments) {
      let t2 = e2.querySelectorAll(".fragment:not(.disabled)"), n2 = e2.querySelectorAll(".fragment:not(.disabled):not(.visible)");
      return {
        prev: t2.length - n2.length > 0,
        next: !!n2.length
      };
    }
    return {
      prev: false,
      next: false
    };
  }
  sort(e2, t2 = false) {
    e2 = Array.from(e2);
    let n2 = [], r2 = [], i2 = [];
    e2.forEach((e3) => {
      if (e3.hasAttribute("data-fragment-index")) {
        let t3 = parseInt(e3.getAttribute("data-fragment-index"), 10);
        n2[t3] || (n2[t3] = []), n2[t3].push(e3);
      } else r2.push([e3]);
    }), n2 = n2.concat(r2);
    let a2 = 0;
    return n2.forEach((e3) => {
      e3.forEach((e4) => {
        i2.push(e4), e4.setAttribute("data-fragment-index", a2);
      }), a2++;
    }), t2 === true ? n2 : i2;
  }
  sortAll() {
    this.Reveal.getHorizontalSlides().forEach((e2) => {
      let n2 = t(e2, "section");
      n2.forEach((e3, t2) => {
        this.sort(e3.querySelectorAll(".fragment"));
      }, this), n2.length === 0 && this.sort(e2.querySelectorAll(".fragment"));
    });
  }
  update(e2, t2, n2 = this.Reveal.getCurrentSlide()) {
    let r2 = {
      shown: [],
      hidden: []
    };
    if (n2 && this.Reveal.getConfig().fragments && (t2 = t2 || this.sort(n2.querySelectorAll(".fragment")), t2.length)) {
      let i2 = 0;
      if (typeof e2 != "number") {
        let t3 = this.sort(n2.querySelectorAll(".fragment.visible")).pop();
        t3 && (e2 = parseInt(t3.getAttribute("data-fragment-index") || 0, 10));
      }
      Array.from(t2).forEach((t3, n3) => {
        if (t3.hasAttribute("data-fragment-index") && (n3 = parseInt(t3.getAttribute("data-fragment-index"), 10)), i2 = Math.max(i2, n3), n3 <= e2) {
          let i3 = t3.classList.contains("visible");
          t3.classList.add("visible"), t3.classList.remove("current-fragment"), n3 === e2 && (this.Reveal.announceStatus(this.Reveal.getStatusText(t3)), t3.classList.add("current-fragment"), this.Reveal.slideContent.startEmbeddedContent(t3)), i3 || (r2.shown.push(t3), this.Reveal.dispatchEvent({
            target: t3,
            type: "visible",
            bubbles: false
          }));
        } else {
          let e3 = t3.classList.contains("visible");
          t3.classList.remove("visible"), t3.classList.remove("current-fragment"), e3 && (this.Reveal.slideContent.stopEmbeddedContent(t3), r2.hidden.push(t3), this.Reveal.dispatchEvent({
            target: t3,
            type: "hidden",
            bubbles: false
          }));
        }
      }), e2 = typeof e2 == "number" ? e2 : -1, e2 = Math.max(Math.min(e2, i2), -1), n2.setAttribute("data-fragment", e2);
    }
    return r2.hidden.length && this.Reveal.dispatchEvent({
      type: "fragmenthidden",
      data: {
        fragment: r2.hidden[0],
        fragments: r2.hidden
      }
    }), r2.shown.length && this.Reveal.dispatchEvent({
      type: "fragmentshown",
      data: {
        fragment: r2.shown[0],
        fragments: r2.shown
      }
    }), r2;
  }
  sync(e2 = this.Reveal.getCurrentSlide()) {
    return this.sort(e2.querySelectorAll(".fragment"));
  }
  goto(e2, t2 = 0) {
    let n2 = this.Reveal.getCurrentSlide();
    if (n2 && this.Reveal.getConfig().fragments) {
      let r2 = this.sort(n2.querySelectorAll(".fragment:not(.disabled)"));
      if (r2.length) {
        if (typeof e2 != "number") {
          let t3 = this.sort(n2.querySelectorAll(".fragment:not(.disabled).visible")).pop();
          e2 = t3 ? parseInt(t3.getAttribute("data-fragment-index") || 0, 10) : -1;
        }
        e2 += t2;
        let i2 = this.update(e2, r2);
        return this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !!(i2.shown.length || i2.hidden.length);
      }
    }
    return false;
  }
  next() {
    return this.goto(null, 1);
  }
  prev() {
    return this.goto(null, -1);
  }
};
var fe = class {
  constructor(e2) {
    this.Reveal = e2, this.active = false, this.onSlideClicked = this.onSlideClicked.bind(this);
  }
  activate() {
    if (this.Reveal.getConfig().overview && !this.Reveal.isScrollView() && !this.isActive()) {
      this.active = true, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), C).forEach((e3) => {
        e3.classList.contains("stack") || e3.addEventListener("click", this.onSlideClicked, true);
      });
      let e2 = this.Reveal.getComputedSlideSize();
      this.overviewSlideWidth = e2.width + 70, this.overviewSlideHeight = e2.height + 70, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout();
      let n2 = this.Reveal.getIndices();
      this.Reveal.dispatchEvent({
        type: "overviewshown",
        data: {
          indexh: n2.h,
          indexv: n2.v,
          currentSlide: this.Reveal.getCurrentSlide()
        }
      });
    }
  }
  layout() {
    this.Reveal.getHorizontalSlides().forEach((e2, n2) => {
      e2.setAttribute("data-index-h", n2), i(e2, "translate3d(" + n2 * this.overviewSlideWidth + "px, 0, 0)"), e2.classList.contains("stack") && t(e2, "section").forEach((e3, t2) => {
        e3.setAttribute("data-index-h", n2), e3.setAttribute("data-index-v", t2), i(e3, "translate3d(0, " + t2 * this.overviewSlideHeight + "px, 0)");
      });
    }), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e2, n2) => {
      i(e2, "translate3d(" + n2 * this.overviewSlideWidth + "px, 0, 0)"), t(e2, ".slide-background").forEach((e3, t2) => {
        i(e3, "translate3d(0, " + t2 * this.overviewSlideHeight + "px, 0)");
      });
    });
  }
  update() {
    let e2 = Math.min(window.innerWidth, window.innerHeight), t2 = Math.max(e2 / 5, 150) / e2, n2 = this.Reveal.getIndices();
    this.Reveal.transformSlides({ overview: [
      "scale(" + t2 + ")",
      "translateX(" + -n2.h * this.overviewSlideWidth + "px)",
      "translateY(" + -n2.v * this.overviewSlideHeight + "px)"
    ].join(" ") });
  }
  deactivate() {
    if (this.Reveal.getConfig().overview) {
      this.active = false, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout(() => {
        this.Reveal.getRevealElement().classList.remove("overview-deactivating");
      }, 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), C).forEach((e3) => {
        i(e3, ""), e3.removeEventListener("click", this.onSlideClicked, true);
      }), t(this.Reveal.getBackgroundsElement(), ".slide-background").forEach((e3) => {
        i(e3, "");
      }), this.Reveal.transformSlides({ overview: "" });
      let e2 = this.Reveal.getIndices();
      this.Reveal.slide(e2.h, e2.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({
        type: "overviewhidden",
        data: {
          indexh: e2.h,
          indexv: e2.v,
          currentSlide: this.Reveal.getCurrentSlide()
        }
      });
    }
  }
  toggle(e2) {
    typeof e2 == "boolean" ? e2 ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
  }
  isActive() {
    return this.active;
  }
  onSlideClicked(e2) {
    if (this.isActive()) {
      e2.preventDefault();
      let t2 = e2.target;
      for (; t2 && !t2.nodeName.match(/section/gi); ) t2 = t2.parentNode;
      if (t2 && !t2.classList.contains("disabled") && (this.deactivate(), t2.nodeName.match(/section/gi))) {
        let e3 = parseInt(t2.getAttribute("data-index-h"), 10), n2 = parseInt(t2.getAttribute("data-index-v"), 10);
        this.Reveal.slide(e3, n2);
      }
    }
  }
};
var pe = class {
  constructor(e2) {
    this.Reveal = e2, this.shortcuts = {}, this.bindings = {}, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
  }
  configure(e2, t2) {
    e2.navigationMode === "linear" ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts["P  ,  Shift SPACE"] = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"] = "Navigate without fragments", this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"] = "Jump to first/last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts.G = "Jump to slide", this.shortcuts["ESC, O"] = "Slide overview";
  }
  bind() {
    document.addEventListener("keydown", this.onDocumentKeyDown, false);
  }
  unbind() {
    document.removeEventListener("keydown", this.onDocumentKeyDown, false);
  }
  addKeyBinding(e2, t2) {
    typeof e2 == "object" && e2.keyCode ? this.bindings[e2.keyCode] = {
      callback: t2,
      key: e2.key,
      description: e2.description
    } : this.bindings[e2] = {
      callback: t2,
      key: null,
      description: null
    };
  }
  removeKeyBinding(e2) {
    delete this.bindings[e2];
  }
  triggerKey(e2) {
    this.onDocumentKeyDown({ keyCode: e2 });
  }
  registerKeyboardShortcut(e2, t2) {
    this.shortcuts[e2] = t2;
  }
  getShortcuts() {
    return this.shortcuts;
  }
  getBindings() {
    return this.bindings;
  }
  onDocumentKeyDown(e2) {
    let t2 = this.Reveal.getConfig();
    if (typeof t2.keyboardCondition == "function" && t2.keyboardCondition(e2) === false || t2.keyboardCondition === "focused" && !this.Reveal.isFocused()) return true;
    let n2 = e2.keyCode, r2 = !this.Reveal.isAutoSliding();
    this.Reveal.onUserInput(e2);
    let i2 = document.activeElement && document.activeElement.isContentEditable === true, a2 = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName), o2 = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className), c2 = !([
      32,
      37,
      38,
      39,
      40,
      63,
      78,
      80,
      191
    ].indexOf(e2.keyCode) !== -1 && e2.shiftKey || e2.altKey) && (e2.shiftKey || e2.altKey || e2.ctrlKey || e2.metaKey);
    if (i2 || a2 || o2 || c2) return;
    let l2 = [
      66,
      86,
      190,
      191,
      112
    ], u2;
    if (typeof t2.keyboard == "object") for (u2 in t2.keyboard) t2.keyboard[u2] === "togglePause" && l2.push(parseInt(u2, 10));
    if (this.Reveal.isOverlayOpen() && ![
      "Escape",
      "f",
      "c",
      "b",
      "."
    ].includes(e2.key) || this.Reveal.isPaused() && l2.indexOf(n2) === -1) return false;
    let d2 = t2.navigationMode === "linear" || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(), f2 = false;
    if (typeof t2.keyboard == "object") {
      for (u2 in t2.keyboard) if (parseInt(u2, 10) === n2) {
        let n3 = t2.keyboard[u2];
        typeof n3 == "function" ? n3.apply(null, [e2]) : typeof n3 == "string" && typeof this.Reveal[n3] == "function" && this.Reveal[n3].call(), f2 = true;
      }
    }
    if (f2 === false) {
      for (u2 in this.bindings) if (parseInt(u2, 10) === n2) {
        let t3 = this.bindings[u2].callback;
        typeof t3 == "function" ? t3.apply(null, [e2]) : typeof t3 == "string" && typeof this.Reveal[t3] == "function" && this.Reveal[t3].call(), f2 = true;
      }
    }
    f2 === false && (f2 = true, n2 === 80 || n2 === 33 ? this.Reveal.prev({ skipFragments: e2.altKey }) : n2 === 78 || n2 === 34 ? this.Reveal.next({ skipFragments: e2.altKey }) : n2 === 72 || n2 === 37 ? e2.shiftKey ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && d2 ? t2.rtl ? this.Reveal.next({ skipFragments: e2.altKey }) : this.Reveal.prev({ skipFragments: e2.altKey }) : this.Reveal.left({ skipFragments: e2.altKey }) : n2 === 76 || n2 === 39 ? e2.shiftKey ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : !this.Reveal.overview.isActive() && d2 ? t2.rtl ? this.Reveal.prev({ skipFragments: e2.altKey }) : this.Reveal.next({ skipFragments: e2.altKey }) : this.Reveal.right({ skipFragments: e2.altKey }) : n2 === 75 || n2 === 38 ? e2.shiftKey ? this.Reveal.slide(void 0, 0) : !this.Reveal.overview.isActive() && d2 ? this.Reveal.prev({ skipFragments: e2.altKey }) : this.Reveal.up({ skipFragments: e2.altKey }) : n2 === 74 || n2 === 40 ? e2.shiftKey ? this.Reveal.slide(void 0, Number.MAX_VALUE) : !this.Reveal.overview.isActive() && d2 ? this.Reveal.next({ skipFragments: e2.altKey }) : this.Reveal.down({ skipFragments: e2.altKey }) : n2 === 36 ? this.Reveal.slide(0) : n2 === 35 ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : n2 === 32 ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), e2.shiftKey ? this.Reveal.prev({ skipFragments: e2.altKey }) : this.Reveal.next({ skipFragments: e2.altKey })) : [
      58,
      59,
      66,
      86,
      190
    ].includes(n2) || n2 === 191 && !e2.shiftKey ? this.Reveal.togglePause() : n2 === 70 ? s(t2.embedded ? this.Reveal.getViewportElement() : document.documentElement) : n2 === 65 ? t2.autoSlideStoppable && this.Reveal.toggleAutoSlide(r2) : n2 === 71 ? t2.jumpToSlide && this.Reveal.toggleJumpToSlide() : n2 === 67 && this.Reveal.isOverlayOpen() ? this.Reveal.closeOverlay() : (n2 === 63 || n2 === 191) && e2.shiftKey || n2 === 112 ? this.Reveal.toggleHelp() : f2 = false), f2 ? e2.preventDefault && e2.preventDefault() : n2 === 27 || n2 === 79 ? (this.Reveal.closeOverlay() === false && this.Reveal.overview.toggle(), e2.preventDefault && e2.preventDefault()) : n2 === 13 && this.Reveal.overview.isActive() && (this.Reveal.overview.deactivate(), e2.preventDefault && e2.preventDefault()), this.Reveal.cueAutoSlide();
  }
};
function N(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function P(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] == null ? {} : arguments[t2];
    t2 % 2 ? N(Object(n2), true).forEach(function(t3) {
      S(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : N(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
var me = class {
  constructor(e2) {
    S(this, "MAX_REPLACE_STATE_FREQUENCY", 1e3), this.Reveal = e2, this.writeURLTimeout = 0, this.replaceStateTimestamp = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this);
  }
  bind() {
    window.addEventListener("hashchange", this.onWindowHashChange, false);
  }
  unbind() {
    window.removeEventListener("hashchange", this.onWindowHashChange, false);
  }
  getIndicesFromHash(e2 = window.location.hash, t2 = {}) {
    let n2 = e2.replace(/^#\/?/, ""), r2 = n2.split("/");
    if (!/^[0-9]*$/.test(r2[0]) && n2.length) {
      let e3, t3;
      /\/[-\d]+$/g.test(n2) && (t3 = parseInt(n2.split("/").pop(), 10), t3 = isNaN(t3) ? void 0 : t3, n2 = n2.split("/").shift());
      try {
        let t4 = decodeURIComponent(n2);
        e3 = (document.getElementById(t4) || document.querySelector(`[data-id="${t4}"]`)).closest(".slides section");
      } catch (e4) {
      }
      if (e3) return P(P({}, this.Reveal.getIndices(e3)), {}, { f: t3 });
    } else {
      let e3 = this.Reveal.getConfig(), n3 = e3.hashOneBasedIndex || t2.oneBasedIndex ? 1 : 0, i2 = parseInt(r2[0], 10) - n3 || 0, a2 = parseInt(r2[1], 10) - n3 || 0, o2;
      return e3.fragmentInURL && (o2 = parseInt(r2[2], 10), isNaN(o2) && (o2 = void 0)), {
        h: i2,
        v: a2,
        f: o2
      };
    }
    return null;
  }
  readURL() {
    let e2 = this.Reveal.getIndices(), t2 = this.getIndicesFromHash();
    t2 ? (t2.h !== e2.h || t2.v !== e2.v || t2.f !== void 0) && this.Reveal.slide(t2.h, t2.v, t2.f) : this.Reveal.slide(e2.h || 0, e2.v || 0);
  }
  writeURL(e2) {
    let t2 = this.Reveal.getConfig(), n2 = this.Reveal.getCurrentSlide();
    if (clearTimeout(this.writeURLTimeout), typeof e2 == "number") this.writeURLTimeout = setTimeout(this.writeURL, e2);
    else if (n2) {
      let e3 = this.getHash();
      t2.history ? window.location.hash = e3 : t2.hash && (e3 === "/" ? this.debouncedReplaceState(window.location.pathname + window.location.search) : this.debouncedReplaceState("#" + e3));
    }
  }
  replaceState(e2) {
    window.history.replaceState(null, null, e2), this.replaceStateTimestamp = Date.now();
  }
  debouncedReplaceState(e2) {
    clearTimeout(this.replaceStateTimeout), Date.now() - this.replaceStateTimestamp > this.MAX_REPLACE_STATE_FREQUENCY ? this.replaceState(e2) : this.replaceStateTimeout = setTimeout(() => this.replaceState(e2), this.MAX_REPLACE_STATE_FREQUENCY);
  }
  getHash(e2) {
    let t2 = "/", n2 = e2 || this.Reveal.getCurrentSlide(), r2 = n2 ? n2.getAttribute("id") : null;
    r2 && (r2 = encodeURIComponent(r2));
    let i2 = this.Reveal.getIndices(e2);
    if (this.Reveal.getConfig().fragmentInURL || (i2.f = void 0), typeof r2 == "string" && r2.length) t2 = "/" + r2, i2.f >= 0 && (t2 += "/" + i2.f);
    else {
      let e3 = +!!this.Reveal.getConfig().hashOneBasedIndex;
      (i2.h > 0 || i2.v > 0 || i2.f >= 0) && (t2 += i2.h + e3), (i2.v > 0 || i2.f >= 0) && (t2 += "/" + (i2.v + e3)), i2.f >= 0 && (t2 += "/" + i2.f);
    }
    return t2;
  }
  onWindowHashChange(e2) {
    this.readURL();
  }
};
var he = class {
  constructor(e2) {
    this.Reveal = e2, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this), this.onEnterFullscreen = this.onEnterFullscreen.bind(this);
  }
  render() {
    let e2 = this.Reveal.getConfig().rtl, n2 = this.Reveal.getRevealElement();
    this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = `<button class="navigate-left" aria-label="${e2 ? "next slide" : "previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${e2 ? "previous slide" : "next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`, this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = t(n2, ".navigate-left"), this.controlsRight = t(n2, ".navigate-right"), this.controlsUp = t(n2, ".navigate-up"), this.controlsDown = t(n2, ".navigate-down"), this.controlsPrev = t(n2, ".navigate-prev"), this.controlsNext = t(n2, ".navigate-next"), this.controlsFullscreen = t(n2, ".enter-fullscreen"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down");
  }
  configure(e2, t2) {
    let n2 = e2.controls === "speaker" || e2.controls === "speaker-only";
    this.element.style.display = e2.controls && (!n2 || this.Reveal.isSpeakerNotes()) ? "block" : "none", this.element.setAttribute("data-controls-layout", e2.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e2.controlsBackArrows);
  }
  bind() {
    let e2 = ["touchstart", "click"];
    _ && (e2 = ["touchend"]), e2.forEach((e3) => {
      this.controlsLeft.forEach((t2) => t2.addEventListener(e3, this.onNavigateLeftClicked, false)), this.controlsRight.forEach((t2) => t2.addEventListener(e3, this.onNavigateRightClicked, false)), this.controlsUp.forEach((t2) => t2.addEventListener(e3, this.onNavigateUpClicked, false)), this.controlsDown.forEach((t2) => t2.addEventListener(e3, this.onNavigateDownClicked, false)), this.controlsPrev.forEach((t2) => t2.addEventListener(e3, this.onNavigatePrevClicked, false)), this.controlsNext.forEach((t2) => t2.addEventListener(e3, this.onNavigateNextClicked, false)), this.controlsFullscreen.forEach((t2) => t2.addEventListener(e3, this.onEnterFullscreen, false));
    });
  }
  unbind() {
    [
      "touchstart",
      "touchend",
      "click"
    ].forEach((e2) => {
      this.controlsLeft.forEach((t2) => t2.removeEventListener(e2, this.onNavigateLeftClicked, false)), this.controlsRight.forEach((t2) => t2.removeEventListener(e2, this.onNavigateRightClicked, false)), this.controlsUp.forEach((t2) => t2.removeEventListener(e2, this.onNavigateUpClicked, false)), this.controlsDown.forEach((t2) => t2.removeEventListener(e2, this.onNavigateDownClicked, false)), this.controlsPrev.forEach((t2) => t2.removeEventListener(e2, this.onNavigatePrevClicked, false)), this.controlsNext.forEach((t2) => t2.removeEventListener(e2, this.onNavigateNextClicked, false)), this.controlsFullscreen.forEach((t2) => t2.removeEventListener(e2, this.onEnterFullscreen, false));
    });
  }
  update() {
    let e2 = this.Reveal.availableRoutes();
    [
      ...this.controlsLeft,
      ...this.controlsRight,
      ...this.controlsUp,
      ...this.controlsDown,
      ...this.controlsPrev,
      ...this.controlsNext
    ].forEach((e3) => {
      e3.classList.remove("enabled", "fragmented"), e3.setAttribute("disabled", "disabled");
    }), e2.left && this.controlsLeft.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    }), e2.right && this.controlsRight.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    }), e2.up && this.controlsUp.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    }), e2.down && this.controlsDown.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    }), (e2.left || e2.up) && this.controlsPrev.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    }), (e2.right || e2.down) && this.controlsNext.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    });
    let t2 = this.Reveal.getCurrentSlide();
    if (t2) {
      let e3 = this.Reveal.fragments.availableRoutes();
      e3.prev && this.controlsPrev.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      }), e3.next && this.controlsNext.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      });
      let n2 = this.Reveal.isVerticalSlide(t2), r2 = n2 && t2.parentElement && t2.parentElement.querySelectorAll(":scope > section").length > 1;
      n2 && r2 ? (e3.prev && this.controlsUp.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      }), e3.next && this.controlsDown.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      })) : (e3.prev && this.controlsLeft.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      }), e3.next && this.controlsRight.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      }));
    }
    if (this.Reveal.getConfig().controlsTutorial) {
      let t3 = this.Reveal.getIndices();
      !this.Reveal.hasNavigatedVertically() && e2.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && e2.left && t3.v === 0 ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && e2.right && t3.v === 0 ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight"));
    }
  }
  destroy() {
    this.unbind(), this.element.remove();
  }
  onNavigateLeftClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.getConfig().navigationMode === "linear" ? this.Reveal.prev() : this.Reveal.left();
  }
  onNavigateRightClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.getConfig().navigationMode === "linear" ? this.Reveal.next() : this.Reveal.right();
  }
  onNavigateUpClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up();
  }
  onNavigateDownClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down();
  }
  onNavigatePrevClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev();
  }
  onNavigateNextClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next();
  }
  onEnterFullscreen(e2) {
    let t2 = this.Reveal.getConfig(), n2 = this.Reveal.getViewportElement();
    s(t2.embedded ? n2 : n2.parentElement);
  }
};
var ge = class {
  constructor(e2) {
    this.Reveal = e2, this.onProgressClicked = this.onProgressClicked.bind(this);
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar);
  }
  configure(e2, t2) {
    this.element.style.display = e2.progress ? "block" : "none";
  }
  bind() {
    this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, false);
  }
  unbind() {
    this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, false);
  }
  update() {
    if (this.Reveal.getConfig().progress && this.bar) {
      let e2 = this.Reveal.getProgress();
      this.Reveal.getTotalSlides() < 2 && (e2 = 0), this.bar.style.transform = "scaleX(" + e2 + ")";
    }
  }
  getMaxWidth() {
    return this.Reveal.getRevealElement().offsetWidth;
  }
  onProgressClicked(e2) {
    this.Reveal.onUserInput(e2), e2.preventDefault();
    let t2 = this.Reveal.getSlides(), n2 = t2.length, r2 = Math.floor(e2.clientX / this.getMaxWidth() * n2);
    this.Reveal.getConfig().rtl && (r2 = n2 - r2);
    let i2 = this.Reveal.getIndices(t2[r2]);
    this.Reveal.slide(i2.h, i2.v);
  }
  destroy() {
    this.element.remove();
  }
};
var _e = class {
  constructor(e2) {
    this.Reveal = e2, this.lastMouseWheelStep = 0, this.cursorHidden = false, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this);
  }
  configure(e2, t2) {
    e2.mouseWheel ? document.addEventListener("wheel", this.onDocumentMouseScroll, false) : document.removeEventListener("wheel", this.onDocumentMouseScroll, false), e2.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, false), document.addEventListener("mousedown", this.onDocumentCursorActive, false)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, false), document.removeEventListener("mousedown", this.onDocumentCursorActive, false));
  }
  showCursor() {
    this.cursorHidden && (this.cursorHidden = false, this.Reveal.getRevealElement().style.cursor = "");
  }
  hideCursor() {
    this.cursorHidden === false && (this.cursorHidden = true, this.Reveal.getRevealElement().style.cursor = "none");
  }
  destroy() {
    this.showCursor(), document.removeEventListener("wheel", this.onDocumentMouseScroll, false), document.removeEventListener("mousemove", this.onDocumentCursorActive, false), document.removeEventListener("mousedown", this.onDocumentCursorActive, false);
  }
  onDocumentCursorActive(e2) {
    this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime);
  }
  onDocumentMouseScroll(e2) {
    if (Date.now() - this.lastMouseWheelStep > 1e3) {
      this.lastMouseWheelStep = Date.now();
      let t2 = e2.detail || -e2.wheelDelta;
      t2 > 0 ? this.Reveal.next() : t2 < 0 && this.Reveal.prev();
    }
  }
};
var ve = (e2, t2) => {
  let n2 = document.createElement("script");
  n2.type = "text/javascript", n2.async = false, n2.defer = false, n2.src = e2, typeof t2 == "function" && (n2.onload = (e3) => {
    e3.type === "load" && (n2.onload = n2.onerror = null, t2());
  }, n2.onerror = (e3) => {
    n2.onload = n2.onerror = null, t2(Error("Failed loading script: " + n2.src + "\n" + e3));
  });
  let r2 = document.querySelector("head");
  r2 && r2.insertBefore(n2, r2.lastChild);
};
var ye = class {
  constructor(e2) {
    this.Reveal = e2, this.state = "idle", this.registeredPlugins = {}, this.asyncDependencies = [];
  }
  load(e2, t2) {
    return this.state = "loading", e2.forEach(this.registerPlugin.bind(this)), new Promise((e3) => {
      let n2 = [], r2 = 0;
      if (t2.forEach((e4) => {
        (!e4.condition || e4.condition()) && (e4.async ? this.asyncDependencies.push(e4) : n2.push(e4));
      }), n2.length) {
        r2 = n2.length;
        let t3 = (t4) => {
          t4 && typeof t4.callback == "function" && t4.callback(), --r2 === 0 && this.initPlugins().then(e3);
        };
        n2.forEach((e4) => {
          typeof e4.id == "string" ? (this.registerPlugin(e4), t3(e4)) : typeof e4.src == "string" ? ve(e4.src, () => t3(e4)) : (console.warn("Unrecognized plugin format", e4), t3());
        });
      } else this.initPlugins().then(e3);
    });
  }
  initPlugins() {
    return new Promise((e2) => {
      let t2 = Object.values(this.registeredPlugins), n2 = t2.length;
      if (n2 === 0) this.loadAsync().then(e2);
      else {
        let r2, i2 = () => {
          --n2 === 0 ? this.loadAsync().then(e2) : r2();
        }, a2 = 0;
        r2 = () => {
          let e3 = t2[a2++];
          if (typeof e3.init == "function") {
            let t3 = e3.init(this.Reveal);
            t3 && typeof t3.then == "function" ? t3.then(i2) : i2();
          } else i2();
        }, r2();
      }
    });
  }
  loadAsync() {
    return this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach((e2) => {
      ve(e2.src, e2.callback);
    }), Promise.resolve();
  }
  registerPlugin(e2) {
    arguments.length === 2 && typeof arguments[0] == "string" ? (e2 = arguments[1], e2.id = arguments[0]) : typeof e2 == "function" && (e2 = e2());
    let t2 = e2.id;
    typeof t2 == "string" ? this.registeredPlugins[t2] === void 0 ? (this.registeredPlugins[t2] = e2, this.state === "loaded" && typeof e2.init == "function" && e2.init(this.Reveal)) : console.warn('reveal.js: "' + t2 + '" plugin has already been registered') : console.warn("Unrecognized plugin format; can't find plugin.id", e2);
  }
  hasPlugin(e2) {
    return !!this.registeredPlugins[e2];
  }
  getPlugin(e2) {
    return this.registeredPlugins[e2];
  }
  getRegisteredPlugins() {
    return this.registeredPlugins;
  }
  destroy() {
    Object.values(this.registeredPlugins).forEach((e2) => {
      typeof e2.destroy == "function" && e2.destroy();
    }), this.registeredPlugins = {}, this.asyncDependencies = [];
  }
};
var be = class {
  constructor(e2) {
    this.Reveal = e2, this.onSlidesClicked = this.onSlidesClicked.bind(this), this.iframeTriggerSelector = null, this.mediaTriggerSelector = "[data-preview-image], [data-preview-video]", this.stateProps = [
      "previewIframe",
      "previewImage",
      "previewVideo",
      "previewFit"
    ], this.state = {};
  }
  update() {
    this.iframeTriggerSelector = this.Reveal.getConfig().previewLinks ? "a[href]:not([data-preview-link=false]), [data-preview-link]:not(a):not([data-preview-link=false])" : "[data-preview-link]:not([data-preview-link=false])";
    let e2 = this.Reveal.getSlidesElement().querySelectorAll(this.iframeTriggerSelector).length > 0, t2 = this.Reveal.getSlidesElement().querySelectorAll(this.mediaTriggerSelector).length > 0;
    e2 || t2 ? this.Reveal.getSlidesElement().addEventListener("click", this.onSlidesClicked, false) : this.Reveal.getSlidesElement().removeEventListener("click", this.onSlidesClicked, false);
  }
  createOverlay(e2) {
    this.dom = document.createElement("div"), this.dom.classList.add("r-overlay"), this.dom.classList.add(e2), this.viewport = document.createElement("div"), this.viewport.classList.add("r-overlay-viewport"), this.dom.appendChild(this.viewport), this.Reveal.getRevealElement().appendChild(this.dom);
  }
  previewIframe(e2) {
    if (typeof e2 != "string") return;
    let t2;
    try {
      t2 = new URL(e2, document.baseURI);
    } catch (e3) {
      return;
    }
    if (t2.protocol === "file:" && window.location.protocol !== "file:" || ![
      "http:",
      "https:",
      "file:"
    ].includes(t2.protocol) && t2.href !== "about:blank") return;
    this.close(), this.state = { previewIframe: e2 }, this.createOverlay("r-overlay-preview"), this.dom.dataset.state = "loading", this.viewport.innerHTML = `<header class="r-overlay-header">
				<a class="r-overlay-header-button r-overlay-external" target="_blank" rel="noopener"><span class="icon"></span></a>
				<button class="r-overlay-header-button r-overlay-close"><span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content">
				<iframe></iframe>
				<small class="r-overlay-content-inner">
					<span class="r-overlay-error x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`;
    let n2 = this.dom.querySelector("iframe");
    n2.addEventListener("load", (e3) => {
      this.dom.dataset.state = "loaded";
    }, false), n2.src = t2.href, this.dom.querySelector(".r-overlay-external").href = t2.href, this.dom.querySelector(".r-overlay-close").addEventListener("click", (e3) => {
      this.close(), e3.preventDefault();
    }, false), this.dom.querySelector(".r-overlay-external").addEventListener("click", (e3) => {
      this.close();
    }, false), this.Reveal.dispatchEvent({
      type: "previewiframe",
      data: { url: e2 }
    });
  }
  previewMedia(e2, t2, n2) {
    if (t2 !== "image" && t2 !== "video") {
      console.warn("Please specify a valid media type to preview (image|video)");
      return;
    }
    this.close(), n2 = n2 || "scale-down", this.createOverlay("r-overlay-preview"), this.dom.dataset.state = "loading", this.dom.dataset.previewFit = n2, this.viewport.innerHTML = '<header class="r-overlay-header">\n				<button class="r-overlay-header-button r-overlay-close">Esc <span class="icon"></span></button>\n			</header>\n			<div class="r-overlay-spinner"></div>\n			<div class="r-overlay-content"></div>';
    let r2 = this.dom.querySelector(".r-overlay-content");
    if (t2 === "image") {
      this.state = {
        previewImage: e2,
        previewFit: n2
      };
      let t3 = document.createElement("img", {});
      t3.src = e2, r2.appendChild(t3), t3.addEventListener("load", () => {
        this.dom.dataset.state = "loaded";
      }, false), t3.addEventListener("error", () => {
        this.dom.dataset.state = "error", r2.innerHTML = '<span class="r-overlay-error">Unable to load image.</span>';
      }, false), this.dom.style.cursor = "zoom-out", this.dom.addEventListener("click", (e3) => {
        this.close();
      }, false), this.Reveal.dispatchEvent({
        type: "previewimage",
        data: { url: e2 }
      });
    } else if (t2 === "video") {
      this.state = {
        previewVideo: e2,
        previewFit: n2
      };
      let t3 = document.createElement("video");
      t3.autoplay = this.dom.dataset.previewAutoplay !== "false", t3.controls = this.dom.dataset.previewControls !== "false", t3.loop = this.dom.dataset.previewLoop === "true", t3.muted = this.dom.dataset.previewMuted === "true", t3.playsInline = true, t3.src = e2, r2.appendChild(t3), t3.addEventListener("loadeddata", () => {
        this.dom.dataset.state = "loaded";
      }, false), t3.addEventListener("error", () => {
        this.dom.dataset.state = "error", r2.innerHTML = '<span class="r-overlay-error">Unable to load video.</span>';
      }, false), this.Reveal.dispatchEvent({
        type: "previewvideo",
        data: { url: e2 }
      });
    } else throw Error("Please specify a valid media type to preview");
    this.dom.querySelector(".r-overlay-close").addEventListener("click", (e3) => {
      this.close(), e3.preventDefault();
    }, false);
  }
  previewImage(e2, t2) {
    this.previewMedia(e2, "image", t2);
  }
  previewVideo(e2, t2) {
    this.previewMedia(e2, "video", t2);
  }
  toggleHelp(e2) {
    typeof e2 == "boolean" ? e2 ? this.showHelp() : this.close() : this.dom ? this.close() : this.showHelp();
  }
  showHelp() {
    if (this.Reveal.getConfig().help) {
      this.close(), this.createOverlay("r-overlay-help");
      let e2 = '<p class="title">Keyboard Shortcuts</p>', t2 = this.Reveal.keyboard.getShortcuts(), n2 = this.Reveal.keyboard.getBindings();
      e2 += "<table><th>KEY</th><th>ACTION</th>";
      for (let n3 in t2) e2 += `<tr><td>${n3}</td><td>${t2[n3]}</td></tr>`;
      for (let t3 in n2) n2[t3].key && n2[t3].description && (e2 += `<tr><td>${n2[t3].key}</td><td>${n2[t3].description}</td></tr>`);
      e2 += "</table>", this.viewport.innerHTML = `
				<header class="r-overlay-header">
					<button class="r-overlay-header-button r-overlay-close">Esc <span class="icon"></span></button>
				</header>
				<div class="r-overlay-content">
					<div class="r-overlay-help-content">${e2}</div>
				</div>
			`, this.dom.querySelector(".r-overlay-close").addEventListener("click", (e3) => {
        this.close(), e3.preventDefault();
      }, false), this.Reveal.dispatchEvent({ type: "showhelp" });
    }
  }
  isOpen() {
    return !!this.dom;
  }
  close() {
    return this.dom ? (this.dom.remove(), this.dom = null, this.state = {}, this.Reveal.dispatchEvent({ type: "closeoverlay" }), true) : false;
  }
  getState() {
    return this.state;
  }
  setState(e2) {
    this.stateProps.every((t2) => this.state[t2] === e2[t2]) || (e2.previewIframe ? this.previewIframe(e2.previewIframe) : e2.previewImage ? this.previewImage(e2.previewImage, e2.previewFit) : e2.previewVideo ? this.previewVideo(e2.previewVideo, e2.previewFit) : this.close());
  }
  onSlidesClicked(e2) {
    let t2 = e2.target, n2 = t2.closest(this.iframeTriggerSelector), r2 = t2.closest(this.mediaTriggerSelector);
    if (n2) {
      if (e2.metaKey || e2.shiftKey || e2.altKey) return;
      let t3 = n2.getAttribute("data-preview-link"), r3 = typeof t3 == "string" && t3.startsWith("http") ? t3 : n2.getAttribute("href");
      r3 && (this.previewIframe(r3), e2.preventDefault());
    } else if (r2) {
      if (r2.hasAttribute("data-preview-image")) {
        let t3 = r2.dataset.previewImage || r2.getAttribute("src");
        t3 && (this.previewImage(t3, r2.dataset.previewFit), e2.preventDefault());
      } else if (r2.hasAttribute("data-preview-video")) {
        let t3 = r2.dataset.previewVideo || r2.getAttribute("src");
        if (!t3) {
          let e3 = r2.querySelector("source");
          e3 && (t3 = e3.getAttribute("src"));
        }
        t3 && (this.previewVideo(t3, r2.dataset.previewFit), e2.preventDefault());
      }
    }
  }
  destroy() {
    this.close();
  }
};
var F = 40;
var I = 1.03;
var xe = class {
  constructor(e2) {
    this.Reveal = e2, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = false, this.activePointers = /* @__PURE__ */ new Map(), this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onPointerCancel = this.onPointerCancel.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this);
  }
  bind() {
    let e2 = this.Reveal.getRevealElement();
    "onpointerdown" in window ? (e2.addEventListener("pointerdown", this.onPointerDown, false), e2.addEventListener("pointermove", this.onPointerMove, false), e2.addEventListener("pointerup", this.onPointerUp, false), e2.addEventListener("pointercancel", this.onPointerCancel, false)) : (e2.addEventListener("touchstart", this.onTouchStart, false), e2.addEventListener("touchmove", this.onTouchMove, false), e2.addEventListener("touchend", this.onTouchEnd, false));
  }
  unbind() {
    let e2 = this.Reveal.getRevealElement();
    e2.removeEventListener("pointerdown", this.onPointerDown, false), e2.removeEventListener("pointermove", this.onPointerMove, false), e2.removeEventListener("pointerup", this.onPointerUp, false), e2.removeEventListener("pointercancel", this.onPointerCancel, false), e2.removeEventListener("touchstart", this.onTouchStart, false), e2.removeEventListener("touchmove", this.onTouchMove, false), e2.removeEventListener("touchend", this.onTouchEnd, false);
  }
  isSwipePrevented(e2) {
    if (a(e2, "video[controls], audio[controls]")) return true;
    for (; e2 && typeof e2.hasAttribute == "function"; ) {
      if (e2.hasAttribute("data-prevent-swipe")) return true;
      e2 = e2.parentNode;
    }
    return false;
  }
  isViewportZoomed() {
    if (!window.visualViewport || typeof window.visualViewport.scale != "number") return false;
    let e2 = window.visualViewport.scale;
    return this.visualViewportBaseScale = this.visualViewportBaseScale === void 0 ? e2 : Math.min(this.visualViewportBaseScale, e2), e2 / this.visualViewportBaseScale > I;
  }
  onTouchStart(e2) {
    if (this.touchCaptured = false, this.isSwipePrevented(e2.target)) return true;
    this.touchStartX = e2.touches[0].clientX, this.touchStartY = e2.touches[0].clientY, this.touchStartCount = e2.touches.length;
  }
  onTouchMove(e2) {
    if (this.isSwipePrevented(e2.target)) return true;
    let t2 = this.Reveal.getConfig();
    if (this.touchCaptured) _ && e2.preventDefault();
    else {
      this.Reveal.onUserInput(e2);
      let n2 = e2.touches[0].clientX, r2 = e2.touches[0].clientY;
      if (e2.touches.length === 1 && this.touchStartCount !== 2) {
        let i2 = this.Reveal.availableRoutes({ includeFragments: true }), a2 = n2 - this.touchStartX, o2 = r2 - this.touchStartY;
        a2 > F && Math.abs(a2) > Math.abs(o2) ? (this.touchCaptured = true, t2.navigationMode === "linear" ? t2.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : a2 < -40 && Math.abs(a2) > Math.abs(o2) ? (this.touchCaptured = true, t2.navigationMode === "linear" ? t2.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : o2 > F && i2.up ? (this.touchCaptured = true, t2.navigationMode === "linear" ? this.Reveal.prev() : this.Reveal.up()) : o2 < -40 && i2.down && (this.touchCaptured = true, t2.navigationMode === "linear" ? this.Reveal.next() : this.Reveal.down()), t2.embedded ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e2.preventDefault() : e2.preventDefault();
      }
    }
  }
  onTouchEnd(e2) {
    this.touchCaptured && !this.Reveal.slideContent.isAllowedToPlayAudio() && this.Reveal.startEmbeddedContent(this.Reveal.getCurrentSlide()), this.touchCaptured = false;
  }
  getActiveTouches() {
    return Array.from(this.activePointers.values(), (e2) => ({
      clientX: e2.clientX,
      clientY: e2.clientY
    }));
  }
  onPointerDown(e2) {
    e2.pointerType === "touch" && (this.activePointers.set(e2.pointerId, e2), e2.touches = this.getActiveTouches(), this.onTouchStart(e2));
  }
  onPointerMove(e2) {
    e2.pointerType === "touch" && (this.activePointers.set(e2.pointerId, e2), e2.touches = this.getActiveTouches(), this.onTouchMove(e2));
  }
  onPointerUp(e2) {
    e2.pointerType === "touch" && (this.activePointers.delete(e2.pointerId), e2.touches = this.getActiveTouches(), this.onTouchEnd(e2));
  }
  onPointerCancel(e2) {
    e2.pointerType === "touch" && (this.activePointers.delete(e2.pointerId), e2.touches = this.getActiveTouches(), this.onTouchEnd(e2));
  }
};
var L = "focus";
var R = "blur";
var Se = class {
  constructor(e2) {
    this.Reveal = e2, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this);
  }
  configure(e2, t2) {
    e2.embedded ? this.blur() : (this.focus(), this.unbind());
  }
  bind() {
    this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, false);
  }
  unbind() {
    this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, false), document.removeEventListener("pointerdown", this.onDocumentPointerDown, false);
  }
  focus() {
    this.state !== L && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, false)), this.state = L;
  }
  blur() {
    this.state !== R && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, false)), this.state = R;
  }
  isFocused() {
    return this.state === L;
  }
  destroy() {
    this.Reveal.getRevealElement().classList.remove("focused");
  }
  onRevealPointerDown(e2) {
    this.focus();
  }
  onDocumentPointerDown(e2) {
    let t2 = o(e2.target, ".reveal");
    (!t2 || t2 !== this.Reveal.getRevealElement()) && this.blur();
  }
};
var Ce = class {
  constructor(e2) {
    this.Reveal = e2;
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element);
  }
  configure(e2, t2) {
    e2.showNotes && this.element.setAttribute("data-layout", typeof e2.showNotes == "string" ? e2.showNotes : "inline");
  }
  update() {
    this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.isScrollView() && !this.Reveal.isPrintView() && (this.element.innerHTML = this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>');
  }
  updateVisibility() {
    this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.isScrollView() && !this.Reveal.isPrintView() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes");
  }
  hasNotes() {
    return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0;
  }
  isSpeakerNotesWindow() {
    return !!window.location.search.match(/receiver/gi);
  }
  getSlideNotes(e2 = this.Reveal.getCurrentSlide()) {
    if (e2.hasAttribute("data-notes")) return e2.getAttribute("data-notes");
    let t2 = e2.querySelectorAll("aside.notes");
    return t2 ? Array.from(t2).map((e3) => e3.innerHTML).join("\n") : null;
  }
  destroy() {
    this.element.remove();
  }
};
var we = class {
  constructor(e2, t2) {
    this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = false, this.progress = 0, this.progressOffset = 1, this.container = e2, this.progressCheck = t2, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render();
  }
  setPlaying(e2) {
    let t2 = this.playing;
    this.playing = e2, !t2 && this.playing ? this.animate() : this.render();
  }
  animate() {
    let e2 = this.progress;
    this.progress = this.progressCheck(), e2 > 0.8 && this.progress < 0.2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this));
  }
  render() {
    let e2 = this.playing ? this.progress : 0, t2 = this.diameter2 - this.thickness, n2 = this.diameter2, r2 = this.diameter2;
    this.progressOffset += (1 - this.progressOffset) * 0.1;
    let i2 = -Math.PI / 2 + Math.PI * 2 * e2, a2 = -Math.PI / 2 + this.progressOffset * (Math.PI * 2);
    this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(n2, r2, t2 + 4, 0, Math.PI * 2, false), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(n2, r2, t2, 0, Math.PI * 2, false), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(n2, r2, t2, a2, i2, false), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(n2 - 14, r2 - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, 28), this.context.fillRect(18, 0, 10, 28)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, 28), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore();
  }
  on(e2, t2) {
    this.canvas.addEventListener(e2, t2, false);
  }
  off(e2, t2) {
    this.canvas.removeEventListener(e2, t2, false);
  }
  destroy() {
    this.playing = false, this.canvas.parentNode && this.container.removeChild(this.canvas);
  }
};
var Te = {
  width: 960,
  height: 700,
  margin: 0.04,
  minScale: 0.2,
  maxScale: 2,
  controls: true,
  controlsTutorial: true,
  controlsLayout: "bottom-right",
  controlsBackArrows: "faded",
  progress: true,
  slideNumber: false,
  showSlideNumber: "all",
  hashOneBasedIndex: false,
  hash: false,
  respondToHashChanges: true,
  jumpToSlide: true,
  history: false,
  keyboard: true,
  keyboardCondition: null,
  disableLayout: false,
  overview: true,
  center: true,
  touch: true,
  loop: false,
  rtl: false,
  navigationMode: "default",
  shuffle: false,
  fragments: true,
  fragmentInURL: true,
  embedded: false,
  help: true,
  pause: true,
  showNotes: false,
  showHiddenSlides: false,
  autoPlayMedia: null,
  preloadIframes: null,
  mouseWheel: false,
  previewLinks: false,
  viewDistance: 3,
  mobileViewDistance: 2,
  display: "block",
  hideInactiveCursor: true,
  hideCursorTime: 5e3,
  sortFragmentsOnSync: true,
  autoAnimate: true,
  autoAnimateMatcher: null,
  autoAnimateEasing: "ease",
  autoAnimateDuration: 1,
  autoAnimateUnmatched: true,
  autoAnimateStyles: [
    "opacity",
    "color",
    "background-color",
    "padding",
    "font-size",
    "line-height",
    "letter-spacing",
    "border-width",
    "border-color",
    "border-radius",
    "outline",
    "outline-offset"
  ],
  autoSlide: 0,
  autoSlideStoppable: true,
  autoSlideMethod: null,
  defaultTiming: null,
  postMessage: true,
  postMessageEvents: false,
  focusBodyOnPageVisibilityChange: true,
  transition: "slide",
  transitionSpeed: "default",
  backgroundTransition: "fade",
  parallaxBackgroundImage: "",
  parallaxBackgroundSize: "",
  parallaxBackgroundRepeat: "",
  parallaxBackgroundPosition: "",
  parallaxBackgroundHorizontal: null,
  parallaxBackgroundVertical: null,
  view: null,
  scrollLayout: "full",
  scrollSnap: "mandatory",
  scrollProgress: "auto",
  scrollActivationWidth: 435,
  pdfMaxPagesPerSlide: Infinity,
  pdfSeparateFragments: true,
  pdfPageHeightOffset: -1,
  dependencies: [],
  plugins: []
};
var Ee = "6.0.2";
function z(a2, s2) {
  arguments.length < 2 && (s2 = arguments[0], a2 = document.querySelector(".reveal"));
  let l2 = {}, f2 = {}, p2 = false, m2 = false, h2, _2, v2, y2, b2 = {
    hasNavigatedHorizontally: false,
    hasNavigatedVertically: false
  }, x2 = [], S2 = 1, T2 = {
    layout: "",
    overview: ""
  }, D2 = {}, ie2 = "idle", O2 = 0, k2, se2 = 0, ce2 = -1, A2 = false, j2 = new ee(l2), M2 = new ne(l2), N2 = new re(l2), ve2 = new oe(l2), F2 = new ae(l2), I2 = new le(l2), L2 = new ue(l2), R2 = new de(l2), z2 = new fe(l2), B2 = new pe(l2), V2 = new me(l2), H = new he(l2), U = new ge(l2), De = new _e(l2), W = new ye(l2), G = new be(l2), K = new Se(l2), Oe = new xe(l2), q = new Ce(l2);
  function ke(e2) {
    if (!a2) throw 'Unable to find presentation root (<div class="reveal">).';
    if (p2) throw "Reveal.js has already been initialized.";
    if (p2 = true, D2.wrapper = a2, D2.slides = a2.querySelector(".slides"), !D2.slides) throw 'Unable to find slides container (<div class="slides">).';
    return f2 = P(P(P(P(P({}, Te), f2), s2), e2), u()), /print-pdf/gi.test(window.location.search) && (f2.view = "print"), Ae(), window.addEventListener("load", Y, false), W.load(f2.plugins, f2.dependencies).then(je), new Promise((e3) => l2.on("ready", e3));
  }
  function Ae() {
    f2.embedded === true ? D2.viewport = o(a2, ".reveal-viewport") || a2 : (D2.viewport = document.body, document.documentElement.classList.add("reveal-full-page")), D2.viewport.classList.add("reveal-viewport");
  }
  function je() {
    p2 !== false && (m2 = true, Ne(), Pe(), Ve(), ze(), Be(), vt(), He(), F2.update(true), Me(), V2.readURL(), setTimeout(() => {
      D2.slides.classList.remove("no-transition"), D2.wrapper.classList.add("ready"), J({
        type: "ready",
        data: {
          indexh: h2,
          indexv: _2,
          currentSlide: y2
        }
      });
    }, 1));
  }
  function Me() {
    let e2 = f2.view === "print", t2 = f2.view === "scroll" || f2.view === "reader";
    (e2 || t2) && (e2 ? We() : Oe.unbind(), D2.viewport.classList.add("loading-scroll-mode"), e2 ? document.readyState === "complete" ? L2.activate() : window.addEventListener("load", () => L2.activate()) : I2.activate());
  }
  function Ne() {
    f2.showHiddenSlides || t(D2.wrapper, 'section[data-visibility="hidden"]').forEach((e2) => {
      let t2 = e2.parentNode;
      t2.childElementCount === 1 && /section/i.test(t2.nodeName) ? t2.remove() : e2.remove();
    });
  }
  function Pe() {
    D2.slides.classList.add("no-transition"), g ? D2.wrapper.classList.add("no-hover") : D2.wrapper.classList.remove("no-hover"), F2.render(), M2.render(), N2.render(), H.render(), U.render(), q.render(), D2.pauseOverlay = c(D2.wrapper, "div", "pause-overlay", f2.controls ? '<button class="resume-button">Resume presentation</button>' : null), D2.statusElement = Fe(), D2.wrapper.setAttribute("role", "application");
  }
  function Fe() {
    let e2 = D2.wrapper.querySelector(".aria-status");
    return e2 || (e2 = document.createElement("div"), e2.style.position = "absolute", e2.style.height = "1px", e2.style.width = "1px", e2.style.overflow = "hidden", e2.style.clip = "rect( 1px, 1px, 1px, 1px )", e2.classList.add("aria-status"), e2.setAttribute("aria-live", "polite"), e2.setAttribute("aria-atomic", "true"), D2.wrapper.appendChild(e2)), e2;
  }
  function Ie(e2) {
    D2.statusElement.textContent = e2;
  }
  function Le(e2) {
    let t2 = "";
    if (e2.nodeType === 3) t2 += e2.textContent.trim();
    else if (e2.nodeType === 1) {
      let n2 = e2.getAttribute("aria-hidden"), r2 = window.getComputedStyle(e2).display === "none";
      if (n2 !== "true" && !r2) {
        if (e2.tagName === "IMG" || e2.tagName === "VIDEO") {
          let n3 = e2.getAttribute("alt");
          n3 && (t2 += Re(n3));
        }
        Array.from(e2.childNodes).forEach((e3) => {
          t2 += Le(e3);
        }), [
          "P",
          "DIV",
          "UL",
          "OL",
          "LI",
          "H1",
          "H2",
          "H3",
          "H4",
          "H5",
          "H6",
          "BLOCKQUOTE"
        ].includes(e2.tagName) && t2.trim() !== "" && (t2 = Re(t2));
      }
    }
    return t2 = t2.trim(), t2 === "" ? "" : t2 + " ";
  }
  function Re(e2) {
    let t2 = e2.trim();
    return t2 === "" ? e2 : /[.!?]$/.test(t2) ? t2 : t2 + ".";
  }
  function ze() {
    setInterval(() => {
      (!I2.isActive() && D2.wrapper.scrollTop !== 0 || D2.wrapper.scrollLeft !== 0) && (D2.wrapper.scrollTop = 0, D2.wrapper.scrollLeft = 0);
    }, 1e3);
  }
  function Be() {
    document.addEventListener("fullscreenchange", $t), document.addEventListener("webkitfullscreenchange", $t);
  }
  function Ve() {
    f2.postMessage && window.addEventListener("message", Jt, false);
  }
  function He(t2) {
    let r2 = P({}, f2);
    if (typeof t2 == "object" && e(f2, t2), l2.isReady() === false) return;
    let i2 = D2.wrapper.querySelectorAll(C).length;
    D2.wrapper.classList.remove(r2.transition), D2.wrapper.classList.add(f2.transition), D2.wrapper.setAttribute("data-transition-speed", f2.transitionSpeed), D2.wrapper.setAttribute("data-background-transition", f2.backgroundTransition), D2.viewport.style.setProperty("--slide-width", typeof f2.width == "string" ? f2.width : f2.width + "px"), D2.viewport.style.setProperty("--slide-height", typeof f2.height == "string" ? f2.height : f2.height + "px"), f2.shuffle && yt(), n(D2.wrapper, "embedded", f2.embedded), n(D2.wrapper, "rtl", f2.rtl), n(D2.wrapper, "center", f2.center), f2.pause === false && ct(), ve2.reset(), k2 && (k2.destroy(), k2 = null), i2 > 1 && f2.autoSlide && f2.autoSlideStoppable && (k2 = new we(D2.wrapper, () => Math.min(Math.max((Date.now() - ce2) / O2, 0), 1)), k2.on("click", en), A2 = false), f2.navigationMode === "default" ? D2.wrapper.removeAttribute("data-navigation-mode") : D2.wrapper.setAttribute("data-navigation-mode", f2.navigationMode), q.configure(f2, r2), K.configure(f2, r2), De.configure(f2, r2), H.configure(f2, r2), U.configure(f2, r2), B2.configure(f2, r2), R2.configure(f2, r2), M2.configure(f2, r2), gt();
  }
  function Ue() {
    window.addEventListener("resize", Zt, false), f2.touch && Oe.bind(), f2.keyboard && B2.bind(), f2.progress && U.bind(), f2.respondToHashChanges && V2.bind(), H.bind(), K.bind(), D2.slides.addEventListener("click", Xt, false), D2.slides.addEventListener("transitionend", Yt, false), D2.pauseOverlay.addEventListener("click", ct, false), f2.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", Qt, false);
  }
  function We() {
    Oe.unbind(), K.unbind(), B2.unbind(), H.unbind(), U.unbind(), V2.unbind(), window.removeEventListener("resize", Zt, false), D2.slides.removeEventListener("click", Xt, false), D2.slides.removeEventListener("transitionend", Yt, false), D2.pauseOverlay.removeEventListener("click", ct, false);
  }
  function Ge() {
    p2 = false, m2 !== false && (We(), Rt(), q.destroy(), K.destroy(), G.destroy(), W.destroy(), De.destroy(), H.destroy(), U.destroy(), F2.destroy(), M2.destroy(), N2.destroy(), document.removeEventListener("fullscreenchange", $t), document.removeEventListener("webkitfullscreenchange", $t), document.removeEventListener("visibilitychange", Qt, false), window.removeEventListener("message", Jt, false), window.removeEventListener("load", Y, false), D2.pauseOverlay && D2.pauseOverlay.remove(), D2.statusElement && D2.statusElement.remove(), document.documentElement.classList.remove("reveal-full-page"), D2.wrapper.classList.remove("ready", "center", "has-horizontal-slides", "has-vertical-slides"), D2.wrapper.removeAttribute("data-transition-speed"), D2.wrapper.removeAttribute("data-background-transition"), D2.viewport.classList.remove("reveal-viewport"), D2.viewport.style.removeProperty("--slide-width"), D2.viewport.style.removeProperty("--slide-height"), D2.slides.style.removeProperty("width"), D2.slides.style.removeProperty("height"), D2.slides.style.removeProperty("zoom"), D2.slides.style.removeProperty("left"), D2.slides.style.removeProperty("top"), D2.slides.style.removeProperty("bottom"), D2.slides.style.removeProperty("right"), D2.slides.style.removeProperty("transform"), Array.from(D2.wrapper.querySelectorAll(C)).forEach((e2) => {
      e2.style.removeProperty("display"), e2.style.removeProperty("top"), e2.removeAttribute("hidden"), e2.removeAttribute("aria-hidden"), e2.removeAttribute("inert");
    }));
  }
  function Ke(e2, t2, n2) {
    a2.addEventListener(e2, t2, n2);
  }
  function qe(e2, t2, n2) {
    a2.removeEventListener(e2, t2, n2);
  }
  function Je(e2) {
    typeof e2.layout == "string" && (T2.layout = e2.layout), typeof e2.overview == "string" && (T2.overview = e2.overview), T2.layout ? i(D2.slides, T2.layout + " " + T2.overview) : i(D2.slides, T2.overview);
  }
  function J({ target: t2 = D2.wrapper, type: n2, data: r2, bubbles: i2 = true }) {
    let a3 = document.createEvent("HTMLEvents", 1, 2);
    return a3.initEvent(n2, i2, true), e(a3, r2), t2.dispatchEvent(a3), t2 === D2.wrapper && Xe(n2), a3;
  }
  function Ye(e2) {
    J({
      type: "slidechanged",
      data: {
        indexh: h2,
        indexv: _2,
        previousSlide: v2,
        currentSlide: y2,
        origin: e2
      }
    });
  }
  function Xe(t2, n2) {
    if (f2.postMessageEvents && window.parent !== window.self) {
      let r2 = {
        namespace: "reveal",
        eventName: t2,
        state: It()
      };
      e(r2, n2), window.parent.postMessage(JSON.stringify(r2), "*");
    }
  }
  function Y() {
    if (D2.wrapper && !L2.isActive()) {
      let e2 = D2.viewport.offsetWidth, t2 = D2.viewport.offsetHeight;
      if (!f2.disableLayout) {
        g && !f2.embedded && document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
        let n2 = I2.isActive() ? $e(e2, t2) : $e(), r2 = S2;
        Ze(f2.width, f2.height), D2.slides.style.width = n2.width + "px", D2.slides.style.height = n2.height + "px", S2 = Math.min(n2.presentationWidth / n2.width, n2.presentationHeight / n2.height), S2 = Math.max(S2, f2.minScale), S2 = Math.min(S2, f2.maxScale), S2 = Math.round(S2 * 100) / 100, S2 === 1 || I2.isActive() ? (D2.slides.style.zoom = "", D2.slides.style.left = "", D2.slides.style.top = "", D2.slides.style.bottom = "", D2.slides.style.right = "", Je({ layout: "" })) : (D2.slides.style.zoom = "", D2.slides.style.left = "50%", D2.slides.style.top = "50%", D2.slides.style.bottom = "auto", D2.slides.style.right = "auto", Je({ layout: "translate(-50%, -50%) scale(" + S2 + ")" }));
        let i2 = Array.from(D2.wrapper.querySelectorAll(C)).filter((e3) => e3.style.display !== "none"), a3 = Array(i2.length);
        for (let e3 = 0, t3 = i2.length; e3 < t3; e3++) {
          let t4 = i2[e3];
          f2.center || t4.classList.contains("center") ? t4.classList.contains("stack") ? a3[e3] = 0 : a3[e3] = Math.max((n2.height - t4.scrollHeight) / 2, 0) + "px" : a3[e3] = "";
        }
        for (let e3 = 0, t3 = i2.length; e3 < t3; e3++) i2[e3].style.top = a3[e3];
        r2 !== S2 && J({
          type: "resize",
          data: {
            oldScale: r2,
            scale: S2,
            size: n2
          }
        });
      }
      Qe(), D2.viewport.style.setProperty("--slide-scale", S2), D2.viewport.style.setProperty("--viewport-width", e2 + "px"), D2.viewport.style.setProperty("--viewport-height", t2 + "px"), I2.layout(), U.update(), F2.updateParallax(), z2.isActive() && z2.update();
    }
  }
  function Ze(e2, n2) {
    t(D2.slides, "section > .stretch, section > .r-stretch").forEach((t2) => {
      let r2 = d(t2, n2);
      if (/(img|video)/gi.test(t2.nodeName)) {
        let n3 = t2.naturalWidth || t2.videoWidth, i2 = t2.naturalHeight || t2.videoHeight, a3 = Math.min(e2 / n3, r2 / i2);
        t2.style.width = n3 * a3 + "px", t2.style.height = i2 * a3 + "px";
      } else t2.style.width = e2 + "px", t2.style.height = r2 + "px";
    });
  }
  function Qe() {
    if (D2.wrapper && !f2.disableLayout && !L2.isActive() && typeof f2.scrollActivationWidth == "number" && f2.view !== "scroll") {
      let e2 = $e();
      e2.presentationWidth > 0 && e2.presentationWidth <= f2.scrollActivationWidth ? I2.isActive() || (F2.create(), I2.activate()) : I2.isActive() && I2.deactivate();
    }
  }
  function $e(e2, t2) {
    let n2 = f2.width, r2 = f2.height;
    f2.disableLayout && (n2 = D2.slides.offsetWidth, r2 = D2.slides.offsetHeight);
    let i2 = {
      width: n2,
      height: r2,
      presentationWidth: e2 || D2.wrapper.offsetWidth,
      presentationHeight: t2 || D2.wrapper.offsetHeight
    };
    return i2.presentationWidth -= i2.presentationWidth * f2.margin, i2.presentationHeight -= i2.presentationHeight * f2.margin, typeof i2.width == "string" && /%$/.test(i2.width) && (i2.width = parseInt(i2.width, 10) / 100 * i2.presentationWidth), typeof i2.height == "string" && /%$/.test(i2.height) && (i2.height = parseInt(i2.height, 10) / 100 * i2.presentationHeight), i2;
  }
  function et(e2, t2) {
    typeof e2 == "object" && typeof e2.setAttribute == "function" && e2.setAttribute("data-previous-indexv", t2 || 0);
  }
  function tt(e2) {
    if (typeof e2 == "object" && typeof e2.setAttribute == "function" && e2.classList.contains("stack")) {
      let t2 = e2.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
      return parseInt(e2.getAttribute(t2) || 0, 10);
    }
    return 0;
  }
  function nt(e2 = y2) {
    return e2 && e2.parentNode && !!e2.parentNode.nodeName.match(/section/i);
  }
  function rt(e2 = y2) {
    return e2.classList.contains(".stack") || e2.querySelector("section") !== null;
  }
  function it() {
    return y2 && nt(y2) ? !y2.nextElementSibling : false;
  }
  function at() {
    return h2 === 0 && _2 === 0;
  }
  function ot() {
    return y2 ? !(y2.nextElementSibling || nt(y2) && y2.parentNode.nextElementSibling) : false;
  }
  function st() {
    if (f2.pause) {
      let e2 = D2.wrapper.classList.contains("paused");
      Rt(), D2.wrapper.classList.add("paused"), e2 === false && J({ type: "paused" });
    }
  }
  function ct() {
    let e2 = D2.wrapper.classList.contains("paused");
    D2.wrapper.classList.remove("paused"), $(), e2 && J({ type: "resumed" });
  }
  function lt(e2) {
    typeof e2 == "boolean" ? e2 ? st() : ct() : ut() ? ct() : st();
  }
  function ut() {
    return D2.wrapper.classList.contains("paused");
  }
  function dt(e2) {
    typeof e2 == "boolean" ? e2 ? N2.show() : N2.hide() : N2.isVisible() ? N2.hide() : N2.show();
  }
  function ft(e2) {
    typeof e2 == "boolean" ? e2 ? Bt() : zt() : A2 ? Bt() : zt();
  }
  function pt() {
    return !!(O2 && !A2);
  }
  function X(e2, t2, n2, r2) {
    if (J({
      type: "beforeslidechange",
      data: {
        indexh: e2 === void 0 ? h2 : e2,
        indexv: t2 === void 0 ? _2 : t2,
        origin: r2
      }
    }).defaultPrevented) return;
    v2 = y2;
    let i2 = D2.wrapper.querySelectorAll(w);
    if (I2.isActive()) {
      let n3 = I2.getSlideByIndices(e2, t2);
      n3 && I2.scrollToSlide(n3);
      return;
    }
    if (i2.length === 0) return;
    t2 === void 0 && !z2.isActive() && (t2 = tt(i2[e2])), v2 && v2.parentNode && v2.parentNode.classList.contains("stack") && et(v2.parentNode, _2);
    let o2 = x2.concat();
    x2.length = 0;
    let s3 = h2 || 0, c2 = _2 || 0;
    h2 = bt(w, e2 === void 0 ? h2 : e2), _2 = bt(te, t2 === void 0 ? _2 : t2);
    let l3 = h2 !== s3 || _2 !== c2;
    l3 || (v2 = null);
    let u2 = i2[h2], d2 = u2.querySelectorAll("section");
    a2.classList.toggle("is-vertical-slide", d2.length > 1), y2 = d2[_2] || u2;
    let p3 = false;
    l3 && v2 && y2 && !z2.isActive() && (ie2 = "running", p3 = mt(v2, y2, s3, c2), p3 && D2.slides.classList.add("disable-slide-transitions")), Ct(), Y(), z2.isActive() && z2.update(), n2 !== void 0 && R2.goto(n2), v2 && v2 !== y2 && (v2.classList.remove("present"), v2.setAttribute("aria-hidden", "true"), at() && setTimeout(() => {
      kt().forEach((e3) => {
        et(e3, 0);
      });
    }, 0));
    stateLoop: for (let e3 = 0, t3 = x2.length; e3 < t3; e3++) {
      for (let t4 = 0; t4 < o2.length; t4++) if (o2[t4] === x2[e3]) {
        o2.splice(t4, 1);
        continue stateLoop;
      }
      D2.viewport.classList.add(x2[e3]), J({ type: x2[e3] });
    }
    for (; o2.length; ) D2.viewport.classList.remove(o2.pop());
    l3 && (j2.afterSlideChanged(), Ye(r2)), (l3 || !v2) && (j2.stopEmbeddedContent(v2), j2.startEmbeddedContent(y2)), requestAnimationFrame(() => {
      Ie(Le(y2));
    }), U.update(), H.update(), q.update(), F2.update(), F2.updateParallax(), M2.update(), R2.update(), V2.writeURL(), $(), p3 && (setTimeout(() => {
      D2.slides.classList.remove("disable-slide-transitions");
    }, 0), f2.autoAnimate && ve2.run(v2, y2));
  }
  function mt(e2, t2, n2, r2) {
    return e2.hasAttribute("data-auto-animate") && t2.hasAttribute("data-auto-animate") && e2.getAttribute("data-auto-animate-id") === t2.getAttribute("data-auto-animate-id") && !(h2 > n2 || _2 > r2 ? t2 : e2).hasAttribute("data-auto-animate-restart");
  }
  function ht(e2, t2, n2) {
    let r2 = h2 || 0;
    h2 = t2, _2 = n2;
    let i2 = y2 !== e2;
    v2 = y2, y2 = e2, y2 && v2 && f2.autoAnimate && mt(v2, y2, r2, _2) && ve2.run(v2, y2), i2 && (j2.afterSlideChanged(), v2 && (j2.stopEmbeddedContent(v2), j2.stopEmbeddedContent(v2.slideBackgroundElement)), j2.startEmbeddedContent(y2), j2.startEmbeddedContent(y2.slideBackgroundElement)), requestAnimationFrame(() => {
      Ie(Le(y2));
    }), Ye();
  }
  function gt() {
    We(), Ue(), Y(), O2 = f2.autoSlide, $(), F2.create(), V2.writeURL(), f2.sortFragmentsOnSync === true && R2.sortAll(), h2 !== void 0 && (h2 = bt(w, h2), _2 = bt(te, _2)), H.update(), U.update(), Ct(), q.update(), q.updateVisibility(), G.update(), F2.update(true), M2.update(), j2.formatEmbeddedContent(), f2.autoPlayMedia === false ? j2.stopEmbeddedContent(y2, { unloadIframes: false }) : j2.startEmbeddedContent(y2), z2.isActive() && z2.layout(), J({ type: "sync" });
  }
  function _t(e2 = y2) {
    F2.sync(e2), R2.sync(e2), j2.load(e2), F2.update(), q.update(), J({
      type: "slidesync",
      data: { slide: e2 }
    });
  }
  function vt() {
    Q().forEach((e2) => {
      t(e2, "section").forEach((e3, t2) => {
        t2 > 0 && (e3.classList.remove("present"), e3.classList.remove("past"), e3.classList.add("future"), e3.setAttribute("aria-hidden", "true"));
      });
    });
  }
  function yt(e2 = Q()) {
    e2.forEach((t2, n2) => {
      let r2 = e2[Math.floor(Math.random() * e2.length)];
      r2.parentNode === t2.parentNode && t2.parentNode.insertBefore(t2, r2);
      let i2 = t2.querySelectorAll("section");
      i2.length && yt(i2);
    });
  }
  function bt(e2, n2) {
    let r2 = t(D2.wrapper, e2), i2 = r2.length, a3 = I2.isActive() || L2.isActive(), o2 = false, s3 = false;
    if (i2) {
      f2.loop && (n2 >= i2 && (o2 = true), n2 %= i2, n2 < 0 && (n2 = i2 + n2, s3 = true)), n2 = Math.max(Math.min(n2, i2 - 1), 0);
      for (let e4 = 0; e4 < i2; e4++) {
        let t3 = r2[e4], i3 = f2.rtl && !nt(t3);
        if (t3.classList.remove("past"), t3.classList.remove("present"), t3.classList.remove("future"), t3.setAttribute("hidden", ""), t3.setAttribute("aria-hidden", "true"), t3.querySelector("section") && t3.classList.add("stack"), a3) {
          t3.classList.add("present");
          continue;
        }
        e4 < n2 ? (t3.classList.add(i3 ? "future" : "past"), f2.fragments && xt(t3)) : e4 > n2 ? (t3.classList.add(i3 ? "past" : "future"), f2.fragments && St(t3)) : e4 === n2 && f2.fragments && (o2 ? St(t3) : s3 && xt(t3));
      }
      let e3 = r2[n2], t2 = e3.classList.contains("present");
      e3.classList.add("present"), e3.removeAttribute("hidden"), e3.removeAttribute("aria-hidden"), t2 || J({
        target: e3,
        type: "visible",
        bubbles: false
      });
      let c2 = e3.getAttribute("data-state");
      c2 && (x2 = x2.concat(c2.split(" ")));
    } else n2 = 0;
    return n2;
  }
  function xt(e2) {
    t(e2, ".fragment").forEach((e3) => {
      e3.classList.add("visible"), e3.classList.remove("current-fragment");
    });
  }
  function St(e2) {
    t(e2, ".fragment.visible").forEach((e3) => {
      e3.classList.remove("visible", "current-fragment");
    });
  }
  function Ct() {
    let e2 = Q(), n2 = e2.length, r2, i2;
    if (n2 && h2 !== void 0) {
      let a4 = z2.isActive(), o2 = a4 ? 10 : f2.viewDistance;
      g && (o2 = a4 ? 6 : f2.mobileViewDistance), L2.isActive() && (o2 = Number.MAX_VALUE);
      for (let s3 = 0; s3 < n2; s3++) {
        let c2 = e2[s3], l3 = t(c2, "section"), u2 = l3.length;
        if (r2 = Math.abs((h2 || 0) - s3) || 0, f2.loop && (r2 = Math.abs(((h2 || 0) - s3) % (n2 - o2)) || 0), r2 < o2 ? j2.load(c2) : j2.unload(c2), u2) {
          let e3 = a4 ? 0 : tt(c2);
          for (let t2 = 0; t2 < u2; t2++) {
            let n3 = l3[t2];
            i2 = Math.abs(s3 === (h2 || 0) ? (_2 || 0) - t2 : t2 - e3), r2 + i2 < o2 ? j2.load(n3) : j2.unload(n3);
          }
        }
      }
      jt() ? D2.wrapper.classList.add("has-vertical-slides") : D2.wrapper.classList.remove("has-vertical-slides"), At() ? D2.wrapper.classList.add("has-horizontal-slides") : D2.wrapper.classList.remove("has-horizontal-slides");
    }
    let a3 = z2.isActive() || I2.isActive() || L2.isActive();
    t(D2.wrapper, C).forEach((e3) => {
      e3.toggleAttribute("inert", !a3 && e3 !== y2 && !e3.contains(y2));
    });
  }
  function Z({ includeFragments: e2 = false } = {}) {
    let t2 = D2.wrapper.querySelectorAll(w), n2 = D2.wrapper.querySelectorAll(te), r2 = {
      left: h2 > 0,
      right: h2 < t2.length - 1,
      up: _2 > 0,
      down: _2 < n2.length - 1
    };
    if (f2.loop && (t2.length > 1 && (r2.left = true, r2.right = true), n2.length > 1 && (r2.up = true, r2.down = true)), t2.length > 1 && f2.navigationMode === "linear" && (r2.right = r2.right || r2.down, r2.left = r2.left || r2.up), e2 === true) {
      let e3 = R2.availableRoutes();
      r2.left = r2.left || e3.prev, r2.up = r2.up || e3.prev, r2.down = r2.down || e3.next, r2.right = r2.right || e3.next;
    }
    if (f2.rtl) {
      let e3 = r2.left;
      r2.left = r2.right, r2.right = e3;
    }
    return r2;
  }
  function wt(e2 = y2) {
    let t2 = Q(), n2 = 0;
    mainLoop: for (let r2 = 0; r2 < t2.length; r2++) {
      let i2 = t2[r2], a3 = i2.querySelectorAll("section");
      for (let t3 = 0; t3 < a3.length; t3++) {
        if (a3[t3] === e2) break mainLoop;
        a3[t3].dataset.visibility !== "uncounted" && n2++;
      }
      if (i2 === e2) break;
      i2.classList.contains("stack") === false && i2.dataset.visibility !== "uncounted" && n2++;
    }
    return n2;
  }
  function Tt() {
    let e2 = Nt(), t2 = wt();
    if (y2) {
      let e3 = y2.querySelectorAll(".fragment");
      if (e3.length > 0) {
        let n2 = y2.querySelectorAll(".fragment.visible");
        t2 += n2.length / e3.length * 0.9;
      }
    }
    return Math.min(t2 / (e2 - 1), 1);
  }
  function Et(e2) {
    let n2 = h2, r2 = _2, i2;
    if (e2) {
      if (I2.isActive()) n2 = parseInt(e2.getAttribute("data-index-h"), 10), e2.getAttribute("data-index-v") && (r2 = parseInt(e2.getAttribute("data-index-v"), 10));
      else {
        let i3 = nt(e2), a3 = i3 ? e2.parentNode : e2, o2 = Q();
        n2 = Math.max(o2.indexOf(a3), 0), r2 = void 0, i3 && (r2 = Math.max(t(e2.parentNode, "section").indexOf(e2), 0));
      }
    }
    if (!e2 && y2 && y2.querySelectorAll(".fragment").length > 0) {
      let e3 = y2.querySelector(".current-fragment");
      i2 = e3 && e3.hasAttribute("data-fragment-index") ? parseInt(e3.getAttribute("data-fragment-index"), 10) : y2.querySelectorAll(".fragment.visible").length - 1;
    }
    return {
      h: n2,
      v: r2,
      f: i2
    };
  }
  function Dt() {
    return t(D2.wrapper, C + ':not(.stack):not([data-visibility="uncounted"])');
  }
  function Q() {
    return t(D2.wrapper, w);
  }
  function Ot() {
    return t(D2.wrapper, ".slides>section>section");
  }
  function kt() {
    return t(D2.wrapper, w + ".stack");
  }
  function At() {
    return Q().length > 1;
  }
  function jt() {
    return Ot().length > 1;
  }
  function Mt() {
    return Dt().map((e2) => {
      let t2 = {};
      for (let n2 = 0; n2 < e2.attributes.length; n2++) {
        let r2 = e2.attributes[n2];
        t2[r2.name] = r2.value;
      }
      return t2;
    });
  }
  function Nt() {
    return Dt().length;
  }
  function Pt(e2, t2) {
    let n2 = Q()[e2], r2 = n2 && n2.querySelectorAll("section");
    return r2 && r2.length && typeof t2 == "number" ? r2 ? r2[t2] : void 0 : n2;
  }
  function Ft(e2, t2) {
    let n2 = typeof e2 == "number" ? Pt(e2, t2) : e2;
    if (n2) return n2.slideBackgroundElement;
  }
  function It() {
    let e2 = Et();
    return P({
      indexh: e2.h,
      indexv: e2.v,
      indexf: e2.f,
      paused: ut(),
      overview: z2.isActive()
    }, G.getState());
  }
  function Lt(e2) {
    if (typeof e2 == "object") {
      X(r(e2.indexh), r(e2.indexv), r(e2.indexf));
      let t2 = r(e2.paused), n2 = r(e2.overview);
      typeof t2 == "boolean" && t2 !== ut() && lt(t2), typeof n2 == "boolean" && n2 !== z2.isActive() && z2.toggle(n2), G.setState(e2);
    }
  }
  function $() {
    if (Rt(), y2 && f2.autoSlide !== false) {
      let e2 = y2.querySelector(".current-fragment[data-autoslide]"), n2 = e2 ? e2.getAttribute("data-autoslide") : null, r2 = y2.parentNode ? y2.parentNode.getAttribute("data-autoslide") : null, i2 = y2.getAttribute("data-autoslide");
      n2 ? O2 = parseInt(n2, 10) : i2 ? O2 = parseInt(i2, 10) : r2 ? O2 = parseInt(r2, 10) : (O2 = f2.autoSlide, y2.querySelectorAll(".fragment").length === 0 && t(y2, "video, audio").forEach((e3) => {
        e3.hasAttribute("data-autoplay") && O2 && e3.duration * 1e3 / e3.playbackRate > O2 && (O2 = e3.duration * 1e3 / e3.playbackRate + 1e3);
      })), O2 && !A2 && !ut() && !z2.isActive() && (!ot() || R2.availableRoutes().next || f2.loop === true) && (se2 = setTimeout(() => {
        typeof f2.autoSlideMethod == "function" ? f2.autoSlideMethod() : Kt(), $();
      }, O2), ce2 = Date.now()), k2 && k2.setPlaying(se2 !== -1);
    }
  }
  function Rt() {
    clearTimeout(se2), se2 = -1;
  }
  function zt() {
    O2 && !A2 && (A2 = true, J({ type: "autoslidepaused" }), clearTimeout(se2), k2 && k2.setPlaying(false));
  }
  function Bt() {
    O2 && A2 && (A2 = false, J({ type: "autoslideresumed" }), $());
  }
  function Vt({ skipFragments: e2 = false } = {}) {
    if (b2.hasNavigatedHorizontally = true, I2.isActive()) return I2.prev();
    f2.rtl ? (z2.isActive() || e2 || R2.next() === false) && Z().left && X(h2 + 1, f2.navigationMode === "grid" ? _2 : void 0) : (z2.isActive() || e2 || R2.prev() === false) && Z().left && X(h2 - 1, f2.navigationMode === "grid" ? _2 : void 0);
  }
  function Ht({ skipFragments: e2 = false } = {}) {
    if (b2.hasNavigatedHorizontally = true, I2.isActive()) return I2.next();
    f2.rtl ? (z2.isActive() || e2 || R2.prev() === false) && Z().right && X(h2 - 1, f2.navigationMode === "grid" ? _2 : void 0) : (z2.isActive() || e2 || R2.next() === false) && Z().right && X(h2 + 1, f2.navigationMode === "grid" ? _2 : void 0);
  }
  function Ut({ skipFragments: e2 = false } = {}) {
    if (I2.isActive()) return I2.prev();
    (z2.isActive() || e2 || R2.prev() === false) && Z().up && X(h2, _2 - 1);
  }
  function Wt({ skipFragments: e2 = false } = {}) {
    if (b2.hasNavigatedVertically = true, I2.isActive()) return I2.next();
    (z2.isActive() || e2 || R2.next() === false) && Z().down && X(h2, _2 + 1);
  }
  function Gt({ skipFragments: e2 = false } = {}) {
    if (I2.isActive()) return I2.prev();
    if (e2 || R2.prev() === false) {
      if (Z().up) Ut({ skipFragments: e2 });
      else {
        let n2;
        if (n2 = f2.rtl ? t(D2.wrapper, w + ".future").pop() : t(D2.wrapper, w + ".past").pop(), n2 && n2.classList.contains("stack")) {
          let e3 = n2.querySelectorAll("section").length - 1 || void 0;
          X(h2 - 1, e3);
        } else f2.rtl ? Ht({ skipFragments: e2 }) : Vt({ skipFragments: e2 });
      }
    }
  }
  function Kt({ skipFragments: e2 = false } = {}) {
    if (b2.hasNavigatedHorizontally = true, b2.hasNavigatedVertically = true, I2.isActive()) return I2.next();
    if (e2 || R2.next() === false) {
      let t2 = Z();
      t2.down && t2.right && f2.loop && it() && (t2.down = false), t2.down ? Wt({ skipFragments: e2 }) : f2.rtl ? Vt({ skipFragments: e2 }) : Ht({ skipFragments: e2 });
    }
  }
  function qt(e2) {
    f2.autoSlideStoppable && zt();
  }
  function Jt(e2) {
    let t2 = e2.data;
    if (typeof t2 == "string" && t2.charAt(0) === "{" && t2.charAt(t2.length - 1) === "}" && (t2 = JSON.parse(t2), t2.method && typeof l2[t2.method] == "function")) {
      if (E.test(t2.method) === false) {
        let e3 = l2[t2.method].apply(l2, t2.args);
        Xe("callback", {
          method: t2.method,
          result: e3
        });
      } else console.warn('reveal.js: "' + t2.method + '" is is blacklisted from the postMessage API');
    }
  }
  function Yt(e2) {
    ie2 === "running" && /section/gi.test(e2.target.nodeName) && (ie2 = "idle", J({
      type: "slidetransitionend",
      data: {
        indexh: h2,
        indexv: _2,
        previousSlide: v2,
        currentSlide: y2
      }
    }));
  }
  function Xt(e2) {
    let t2 = o(e2.target, 'a[href^="#"]');
    if (t2) {
      let n2 = t2.getAttribute("href"), r2 = V2.getIndicesFromHash(n2);
      r2 && (l2.slide(r2.h, r2.v, r2.f), e2.preventDefault());
    }
  }
  function Zt(e2) {
    Y();
  }
  function Qt(e2) {
    document.hidden === false && document.activeElement !== document.body && (typeof document.activeElement.blur == "function" && document.activeElement.blur(), document.body.focus());
  }
  function $t(e2) {
    (document.fullscreenElement || document.webkitFullscreenElement) === D2.wrapper && (e2.stopImmediatePropagation(), setTimeout(() => {
      l2.layout(), l2.focus.focus();
    }, 1));
  }
  function en(e2) {
    ot() && f2.loop === false ? (X(0, 0), Bt()) : A2 ? Bt() : zt();
  }
  let tn = {
    VERSION: Ee,
    initialize: ke,
    configure: He,
    destroy: Ge,
    sync: gt,
    syncSlide: _t,
    syncFragments: R2.sync.bind(R2),
    slide: X,
    left: Vt,
    right: Ht,
    up: Ut,
    down: Wt,
    prev: Gt,
    next: Kt,
    navigateLeft: Vt,
    navigateRight: Ht,
    navigateUp: Ut,
    navigateDown: Wt,
    navigatePrev: Gt,
    navigateNext: Kt,
    navigateFragment: R2.goto.bind(R2),
    prevFragment: R2.prev.bind(R2),
    nextFragment: R2.next.bind(R2),
    on: Ke,
    off: qe,
    addEventListener: Ke,
    removeEventListener: qe,
    layout: Y,
    shuffle: yt,
    availableRoutes: Z,
    availableFragments: R2.availableRoutes.bind(R2),
    toggleHelp: G.toggleHelp.bind(G),
    toggleOverview: z2.toggle.bind(z2),
    toggleScrollView: I2.toggle.bind(I2),
    togglePause: lt,
    toggleAutoSlide: ft,
    toggleJumpToSlide: dt,
    isFirstSlide: at,
    isLastSlide: ot,
    isLastVerticalSlide: it,
    isVerticalSlide: nt,
    isVerticalStack: rt,
    isPaused: ut,
    isAutoSliding: pt,
    isSpeakerNotes: q.isSpeakerNotesWindow.bind(q),
    isOverview: z2.isActive.bind(z2),
    isFocused: K.isFocused.bind(K),
    isOverlayOpen: G.isOpen.bind(G),
    isScrollView: I2.isActive.bind(I2),
    isPrintView: L2.isActive.bind(L2),
    isReady: () => m2,
    loadSlide: j2.load.bind(j2),
    unloadSlide: j2.unload.bind(j2),
    startEmbeddedContent: () => j2.startEmbeddedContent(y2),
    stopEmbeddedContent: () => j2.stopEmbeddedContent(y2, { unloadIframes: false }),
    previewIframe: G.previewIframe.bind(G),
    previewImage: G.previewImage.bind(G),
    previewVideo: G.previewVideo.bind(G),
    showPreview: G.previewIframe.bind(G),
    hidePreview: G.close.bind(G),
    addEventListeners: Ue,
    removeEventListeners: We,
    dispatchEvent: J,
    getState: It,
    setState: Lt,
    getProgress: Tt,
    getIndices: Et,
    getSlidesAttributes: Mt,
    getSlidePastCount: wt,
    getTotalSlides: Nt,
    getSlide: Pt,
    getPreviousSlide: () => v2,
    getCurrentSlide: () => y2,
    getSlideBackground: Ft,
    getSlideNotes: q.getSlideNotes.bind(q),
    getSlides: Dt,
    getHorizontalSlides: Q,
    getVerticalSlides: Ot,
    hasHorizontalSlides: At,
    hasVerticalSlides: jt,
    hasNavigatedHorizontally: () => b2.hasNavigatedHorizontally,
    hasNavigatedVertically: () => b2.hasNavigatedVertically,
    shouldAutoAnimateBetween: mt,
    addKeyBinding: B2.addKeyBinding.bind(B2),
    removeKeyBinding: B2.removeKeyBinding.bind(B2),
    triggerKey: B2.triggerKey.bind(B2),
    registerKeyboardShortcut: B2.registerKeyboardShortcut.bind(B2),
    getComputedSlideSize: $e,
    setCurrentScrollPage: ht,
    removeHiddenSlides: Ne,
    getScale: () => S2,
    getConfig: () => f2,
    getQueryHash: u,
    getSlidePath: V2.getHash.bind(V2),
    getRevealElement: () => a2,
    getSlidesElement: () => D2.slides,
    getViewportElement: () => D2.viewport,
    getBackgroundsElement: () => F2.element,
    registerPlugin: W.registerPlugin.bind(W),
    hasPlugin: W.hasPlugin.bind(W),
    getPlugin: W.getPlugin.bind(W),
    getPlugins: W.getRegisteredPlugins.bind(W)
  };
  return e(l2, P(P({}, tn), {}, {
    announceStatus: Ie,
    getStatusText: Le,
    focus: K,
    scroll: I2,
    progress: U,
    controls: H,
    location: V2,
    overview: z2,
    keyboard: B2,
    fragments: R2,
    backgrounds: F2,
    slideContent: j2,
    slideNumber: M2,
    onUserInput: qt,
    closeOverlay: G.close.bind(G),
    updateSlidesVisibility: Ct,
    layoutSlideContents: Ze,
    transformSlides: Je,
    cueAutoSlide: $,
    cancelAutoSlide: Rt
  })), tn;
}
var B = z;
var V = [];
B.initialize = (e2) => {
  let t2 = document.querySelector(".reveal");
  if (!(t2 instanceof HTMLElement)) throw Error('Unable to find presentation root (<div class="reveal">).');
  return Object.assign(B, new z(t2, e2)), V.map((e3) => e3(B)), B.initialize();
}, [
  "configure",
  "on",
  "off",
  "addEventListener",
  "removeEventListener",
  "registerPlugin"
].forEach((e2) => {
  B[e2] = (...t2) => {
    V.push((n2) => n2[e2].call(null, ...t2));
  };
}), B.isReady = () => false, B.VERSION = Ee;
export {
  B as default
};
//# sourceMappingURL=reveal__js.js.map
