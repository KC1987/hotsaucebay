"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [526],
  {
    4016: (e, t, n) => {
      function r(e) {
        var t;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          ((null === (t = window.navigator.userAgentData) || void 0 === t
            ? void 0
            : t.brands.some((t) => e.test(t.brand))) ||
            e.test(window.navigator.userAgent))
        );
      }
      function i(e) {
        var t;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          e.test(
            (null === (t = window.navigator.userAgentData) || void 0 === t
              ? void 0
              : t.platform) || window.navigator.platform,
          )
        );
      }
      function o(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      n.d(t, { X: () => R });
      let l = o(function () {
          return i(/^Mac/i);
        }),
        u = o(function () {
          return i(/^iPhone/i);
        }),
        a = o(function () {
          return i(/^iPad/i) || (l() && navigator.maxTouchPoints > 1);
        }),
        d = o(function () {
          return u() || a();
        });
      o(function () {
        return l() || d();
      }),
        o(function () {
          return r(/AppleWebKit/i) && !s();
        });
      let s = o(function () {
          return r(/Chrome/i);
        }),
        c = o(function () {
          return r(/Android/i);
        });
      o(function () {
        return r(/Firefox/i);
      });
      let f = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        v = (e) =>
          e && "window" in e && e.window === e ? e : f(e).defaultView || window;
      var p = n(2115);
      let m = null,
        y = new Set(),
        w = new Map(),
        E = !1,
        b = !1;
      function g(e, t) {
        for (let n of y) n(e, t);
      }
      function L(e) {
        (E = !0),
          e.metaKey ||
            (!l() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            g("keyboard", e);
      }
      function h(e) {
        ("mousedown" === e.type || "pointerdown" === e.type) &&
          ((E = !0), g("pointer", e));
      }
      function S(e) {
        ((0 === e.mozInputSource && e.isTrusted) ||
          (c() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)) &&
          (E = !0);
      }
      function M(e) {
        e.target !== window &&
          e.target !== document &&
          (E || b || g("virtual", e), (E = !1), (b = !1));
      }
      function k() {
        (E = !1), (b = !0);
      }
      function C(e) {
        if ("undefined" == typeof window || w.get(v(e))) return;
        let t = v(e),
          n = f(e),
          r = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (E = !0), r.apply(this, arguments);
        }),
          n.addEventListener("keydown", L, !0),
          n.addEventListener("keyup", L, !0),
          n.addEventListener("click", S, !0),
          t.addEventListener("focus", M, !0),
          t.addEventListener("blur", k, !1),
          "undefined" != typeof PointerEvent
            ? (n.addEventListener("pointerdown", h, !0),
              n.addEventListener("pointermove", h, !0),
              n.addEventListener("pointerup", h, !0))
            : (n.addEventListener("mousedown", h, !0),
              n.addEventListener("mousemove", h, !0),
              n.addEventListener("mouseup", h, !0)),
          t.addEventListener(
            "beforeunload",
            () => {
              I(e);
            },
            { once: !0 },
          ),
          w.set(t, { focus: r });
      }
      let I = (e, t) => {
        let n = v(e),
          r = f(e);
        t && r.removeEventListener("DOMContentLoaded", t),
          w.has(n) &&
            ((n.HTMLElement.prototype.focus = w.get(n).focus),
            r.removeEventListener("keydown", L, !0),
            r.removeEventListener("keyup", L, !0),
            r.removeEventListener("click", S, !0),
            n.removeEventListener("focus", M, !0),
            n.removeEventListener("blur", k, !1),
            "undefined" != typeof PointerEvent
              ? (r.removeEventListener("pointerdown", h, !0),
                r.removeEventListener("pointermove", h, !0),
                r.removeEventListener("pointerup", h, !0))
              : (r.removeEventListener("mousedown", h, !0),
                r.removeEventListener("mousemove", h, !0),
                r.removeEventListener("mouseup", h, !0)),
            w.delete(n));
      };
      "undefined" != typeof document &&
        (function (e) {
          let t;
          let n = f(void 0);
          "loading" !== n.readyState
            ? C(void 0)
            : ((t = () => {
                C(void 0);
              }),
              n.addEventListener("DOMContentLoaded", t)),
            () => I(e, t);
        })();
      let P = "undefined" != typeof document ? p.useLayoutEffect : () => {};
      function _(e) {
        let t = (0, p.useRef)(null);
        return (
          P(() => {
            t.current = e;
          }, [e]),
          (0, p.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e);
          }, [])
        );
      }
      function R(e, t, n) {
        let { validationBehavior: r, focus: i } = e;
        P(() => {
          if (
            "native" === r &&
            (null == n ? void 0 : n.current) &&
            !n.current.disabled
          ) {
            var e;
            let r,
              i = t.realtimeValidation.isInvalid
                ? t.realtimeValidation.validationErrors.join(" ") ||
                  "Invalid value."
                : "";
            n.current.setCustomValidity(i),
              n.current.hasAttribute("title") || (n.current.title = ""),
              t.realtimeValidation.isInvalid ||
                t.updateValidation({
                  isInvalid: !(e = n.current).validity.valid,
                  validationDetails: {
                    badInput: (r = e.validity).badInput,
                    customError: r.customError,
                    patternMismatch: r.patternMismatch,
                    rangeOverflow: r.rangeOverflow,
                    rangeUnderflow: r.rangeUnderflow,
                    stepMismatch: r.stepMismatch,
                    tooLong: r.tooLong,
                    tooShort: r.tooShort,
                    typeMismatch: r.typeMismatch,
                    valueMissing: r.valueMissing,
                    valid: r.valid,
                  },
                  validationErrors: e.validationMessage
                    ? [e.validationMessage]
                    : [],
                });
          }
        });
        let o = _(() => {
            t.resetValidation();
          }),
          l = _((e) => {
            var r, o;
            t.displayValidation.isInvalid || t.commitValidation();
            let l =
              null == n
                ? void 0
                : null === (r = n.current) || void 0 === r
                  ? void 0
                  : r.form;
            !e.defaultPrevented &&
              n &&
              l &&
              (function (e) {
                for (let t = 0; t < e.elements.length; t++) {
                  let n = e.elements[t];
                  if (!n.validity.valid) return n;
                }
                return null;
              })(l) === n.current &&
              (i ? i() : null === (o = n.current) || void 0 === o || o.focus(),
              g("keyboard", null)),
              e.preventDefault();
          }),
          u = _(() => {
            t.commitValidation();
          });
        (0, p.useEffect)(() => {
          let e = null == n ? void 0 : n.current;
          if (!e) return;
          let t = e.form;
          return (
            e.addEventListener("invalid", l),
            e.addEventListener("change", u),
            null == t || t.addEventListener("reset", o),
            () => {
              e.removeEventListener("invalid", l),
                e.removeEventListener("change", u),
                null == t || t.removeEventListener("reset", o);
            }
          );
        }, [n, l, u, o, r]);
      }
    },
    4813: (e, t, n) => {
      n.d(t, { M: () => f });
      var r = n(2115);
      let i = "undefined" != typeof document ? r.useLayoutEffect : () => {};
      function o(e) {
        let t = (0, r.useRef)(null);
        return (
          i(() => {
            t.current = e;
          }, [e]),
          (0, r.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e);
          }, [])
        );
      }
      var l = n(1632);
      let u = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        ),
        a = new Map();
      function d(e) {
        let [t, n] = (0, r.useState)(e),
          o = (0, r.useRef)(null),
          d = (0, l.Cc)(t),
          s = (0, r.useCallback)((e) => {
            o.current = e;
          }, []);
        return (
          u &&
            (a.has(d) && !a.get(d).includes(s)
              ? a.set(d, [...a.get(d), s])
              : a.set(d, [s])),
          i(
            () => () => {
              a.delete(d);
            },
            [d],
          ),
          (0, r.useEffect)(() => {
            let e = o.current;
            e && ((o.current = null), n(e));
          }),
          d
        );
      }
      function s(e = []) {
        let t = d(),
          [n, l] = (function (e) {
            let [t, n] = (0, r.useState)(e),
              l = (0, r.useRef)(null),
              u = o(() => {
                if (!l.current) return;
                let e = l.current.next();
                if (e.done) {
                  l.current = null;
                  return;
                }
                t === e.value ? u() : n(e.value);
              });
            i(() => {
              l.current && u();
            });
            let a = o((e) => {
              (l.current = e(t)), u();
            });
            return [t, a];
          })(t),
          u = (0, r.useCallback)(() => {
            l(function* () {
              yield t, yield document.getElementById(t) ? t : void 0;
            });
          }, [t, l]);
        return i(u, [t, u, ...e]), n;
      }
      var c = n(3463);
      function f(e) {
        let {
            description: t,
            errorMessage: n,
            isInvalid: r,
            validationState: i,
          } = e,
          { labelProps: o, fieldProps: l } = (function (e) {
            let {
              id: t,
              label: n,
              "aria-labelledby": r,
              "aria-label": i,
              labelElementType: o = "label",
            } = e;
            t = d(t);
            let l = d(),
              u = {};
            return (
              n
                ? ((r = r ? `${l} ${r}` : l),
                  (u = { id: l, htmlFor: "label" === o ? t : void 0 }))
                : r ||
                  i ||
                  console.warn(
                    "If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility",
                  ),
              {
                labelProps: u,
                fieldProps: (function (e, t) {
                  let { id: n, "aria-label": r, "aria-labelledby": i } = e;
                  return (
                    (n = d(n)),
                    i && r
                      ? (i = [...new Set([n, ...i.trim().split(/\s+/)])].join(
                          " ",
                        ))
                      : i && (i = i.trim().split(/\s+/).join(" ")),
                    { id: n, "aria-label": r, "aria-labelledby": i }
                  );
                })({ id: t, "aria-label": i, "aria-labelledby": r }),
              }
            );
          })(e),
          u = s([!!t, !!n, r, i]),
          f = s([!!t, !!n, r, i]);
        return {
          labelProps: o,
          fieldProps: (l = (function (...e) {
            let t = { ...e[0] };
            for (let n = 1; n < e.length; n++) {
              let r = e[n];
              for (let e in r) {
                let n = t[e],
                  i = r[e];
                "function" == typeof n &&
                "function" == typeof i &&
                "o" === e[0] &&
                "n" === e[1] &&
                e.charCodeAt(2) >= 65 &&
                90 >= e.charCodeAt(2)
                  ? (t[e] = (function (...e) {
                      return (...t) => {
                        for (let n of e) "function" == typeof n && n(...t);
                      };
                    })(n, i))
                  : ("className" === e || "UNSAFE_className" === e) &&
                      "string" == typeof n &&
                      "string" == typeof i
                    ? (t[e] = (0, c.A)(n, i))
                    : "id" === e && n && i
                      ? (t.id = (function (e, t) {
                          if (e === t) return e;
                          let n = a.get(e);
                          if (n) return n.forEach((e) => e(t)), t;
                          let r = a.get(t);
                          return r ? (r.forEach((t) => t(e)), e) : t;
                        })(n, i))
                      : (t[e] = void 0 !== i ? i : n);
              }
            }
            return t;
          })(l, {
            "aria-describedby":
              [u, f, e["aria-describedby"]].filter(Boolean).join(" ") || void 0,
          })),
          descriptionProps: { id: u },
          errorMessageProps: { id: f },
        };
      }
    },
    1632: (e, t, n) => {
      n.d(t, { Cc: () => d, wR: () => v });
      var r = n(2115);
      let i = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
        o = r.createContext(i),
        l = r.createContext(!1),
        u = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        ),
        a = new WeakMap(),
        d =
          "function" == typeof r.useId
            ? function (e) {
                let t = r.useId(),
                  [n] = (0, r.useState)(v()),
                  o = n ? "react-aria" : `react-aria${i.prefix}`;
                return e || `${o}-${t}`;
              }
            : function (e) {
                let t = (0, r.useContext)(o);
                t !== i ||
                  u ||
                  console.warn(
                    "When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.",
                  );
                let n = (function (e = !1) {
                    let t = (0, r.useContext)(o),
                      n = (0, r.useRef)(null);
                    if (null === n.current && !e) {
                      var i, l;
                      let e =
                        null ===
                          (l =
                            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ||
                        void 0 === l
                          ? void 0
                          : null === (i = l.ReactCurrentOwner) || void 0 === i
                            ? void 0
                            : i.current;
                      if (e) {
                        let n = a.get(e);
                        null == n
                          ? a.set(e, { id: t.current, state: e.memoizedState })
                          : e.memoizedState !== n.state &&
                            ((t.current = n.id), a.delete(e));
                      }
                      n.current = ++t.current;
                    }
                    return n.current;
                  })(!!e),
                  l = `react-aria${t.prefix}`;
                return e || `${l}-${n}`;
              };
      function s() {
        return !1;
      }
      function c() {
        return !0;
      }
      function f(e) {
        return () => {};
      }
      function v() {
        return "function" == typeof r.useSyncExternalStore
          ? r.useSyncExternalStore(f, s, c)
          : (0, r.useContext)(l);
      }
    },
    3335: (e, t, n) => {
      n.d(t, { P: () => i });
      var r = n(2115);
      function i(e, t, n) {
        let [i, o] = (0, r.useState)(e || t),
          l = (0, r.useRef)(void 0 !== e),
          u = void 0 !== e;
        (0, r.useEffect)(() => {
          let e = l.current;
          e !== u &&
            console.warn(
              `WARN: A component changed from ${e ? "controlled" : "uncontrolled"} to ${u ? "controlled" : "uncontrolled"}.`,
            ),
            (l.current = u);
        }, [u]);
        let a = u ? e : i,
          d = (0, r.useCallback)(
            (e, ...t) => {
              let r = (e, ...t) => {
                n && !Object.is(a, e) && n(e, ...t), u || (a = e);
              };
              "function" == typeof e
                ? (console.warn(
                    "We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320",
                  ),
                  o((n, ...i) => {
                    let o = e(u ? a : n, ...i);
                    return (r(o, ...t), u) ? n : o;
                  }))
                : (u || o(e), r(e, ...t));
            },
            [u, a, n],
          );
        return [a, d];
      }
    },
  },
]);
