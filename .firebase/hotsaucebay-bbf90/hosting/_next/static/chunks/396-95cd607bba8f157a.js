"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [396],
  {
    5396: (e, t, r) => {
      r.d(t, { T: () => z });
      var [n, a] = (0, r(121).q)({ name: "ButtonGroupContext", strict: !1 }),
        o = r(7298),
        s = r(1937),
        i = r(2115),
        l = r(7010),
        d = r(7093),
        u = r(9025),
        c = r(1315),
        p = r(624),
        f = {
          solid: {
            default: "bg-default text-default-foreground",
            primary: "bg-primary text-primary-foreground",
            secondary: "bg-secondary text-secondary-foreground",
            success: "bg-success text-success-foreground",
            warning: "bg-warning text-warning-foreground",
            danger: "bg-danger text-danger-foreground",
            foreground: "bg-foreground text-background",
          },
          shadow: {
            default:
              "shadow-lg shadow-default/50 bg-default text-default-foreground",
            primary:
              "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
            secondary:
              "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
            success:
              "shadow-lg shadow-success/40 bg-success text-success-foreground",
            warning:
              "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
            danger:
              "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
            foreground:
              "shadow-lg shadow-foreground/40 bg-foreground text-background",
          },
          bordered: {
            default: "bg-transparent border-default text-foreground",
            primary: "bg-transparent border-primary text-primary",
            secondary: "bg-transparent border-secondary text-secondary",
            success: "bg-transparent border-success text-success",
            warning: "bg-transparent border-warning text-warning",
            danger: "bg-transparent border-danger text-danger",
            foreground: "bg-transparent border-foreground text-foreground",
          },
          flat: {
            default: "bg-default/40 text-default-700",
            primary: "bg-primary/20 text-primary-600",
            secondary: "bg-secondary/20 text-secondary-600",
            success: "bg-success/20 text-success-700 dark:text-success",
            warning: "bg-warning/20 text-warning-700 dark:text-warning",
            danger: "bg-danger/20 text-danger-600 dark:text-danger-500",
            foreground: "bg-foreground/10 text-foreground",
          },
          faded: {
            default: "border-default bg-default-100 text-default-foreground",
            primary: "border-default bg-default-100 text-primary",
            secondary: "border-default bg-default-100 text-secondary",
            success: "border-default bg-default-100 text-success",
            warning: "border-default bg-default-100 text-warning",
            danger: "border-default bg-default-100 text-danger",
            foreground: "border-default bg-default-100 text-foreground",
          },
          light: {
            default: "bg-transparent text-default-foreground",
            primary: "bg-transparent text-primary",
            secondary: "bg-transparent text-secondary",
            success: "bg-transparent text-success",
            warning: "bg-transparent text-warning",
            danger: "bg-transparent text-danger",
            foreground: "bg-transparent text-foreground",
          },
          ghost: {
            default: "border-default text-default-foreground",
            primary: "border-primary text-primary",
            secondary: "border-secondary text-secondary",
            success: "border-success text-success",
            warning: "border-warning text-warning",
            danger: "border-danger text-danger",
            foreground:
              "border-foreground text-foreground hover:!bg-foreground",
          },
        },
        g = r(1360),
        m = r(2203),
        h = (0, g.tv)({
          base: [
            "z-0",
            "group",
            "relative",
            "inline-flex",
            "items-center",
            "justify-center",
            "box-border",
            "appearance-none",
            "outline-none",
            "select-none",
            "whitespace-nowrap",
            "min-w-max",
            "font-normal",
            "subpixel-antialiased",
            "overflow-hidden",
            "tap-highlight-transparent",
            "data-[pressed=true]:scale-[0.97]",
            ...m.zb,
          ],
          variants: {
            variant: {
              solid: "",
              bordered: "border-medium bg-transparent",
              light: "bg-transparent",
              flat: "",
              faded: "border-medium",
              shadow: "",
              ghost: "border-medium bg-transparent",
            },
            size: {
              sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
              md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
              lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large",
            },
            color: {
              default: "",
              primary: "",
              secondary: "",
              success: "",
              warning: "",
              danger: "",
            },
            radius: {
              none: "rounded-none",
              sm: "rounded-small",
              md: "rounded-medium",
              lg: "rounded-large",
              full: "rounded-full",
            },
            fullWidth: { true: "w-full" },
            isDisabled: { true: "opacity-disabled pointer-events-none" },
            isInGroup: {
              true: "[&:not(:first-child):not(:last-child)]:rounded-none",
            },
            isIconOnly: {
              true: "px-0 !gap-0",
              false: "[&>svg]:max-w-[theme(spacing.8)]",
            },
            disableAnimation: {
              true: "!transition-none data-[pressed=true]:scale-100",
              false:
                "transition-transform-colors-opacity motion-reduce:transition-none",
            },
          },
          defaultVariants: {
            size: "md",
            variant: "solid",
            color: "default",
            fullWidth: !1,
            isDisabled: !1,
            isInGroup: !1,
          },
          compoundVariants: [
            { variant: "solid", color: "default", class: f.solid.default },
            { variant: "solid", color: "primary", class: f.solid.primary },
            { variant: "solid", color: "secondary", class: f.solid.secondary },
            { variant: "solid", color: "success", class: f.solid.success },
            { variant: "solid", color: "warning", class: f.solid.warning },
            { variant: "solid", color: "danger", class: f.solid.danger },
            { variant: "shadow", color: "default", class: f.shadow.default },
            { variant: "shadow", color: "primary", class: f.shadow.primary },
            {
              variant: "shadow",
              color: "secondary",
              class: f.shadow.secondary,
            },
            { variant: "shadow", color: "success", class: f.shadow.success },
            { variant: "shadow", color: "warning", class: f.shadow.warning },
            { variant: "shadow", color: "danger", class: f.shadow.danger },
            {
              variant: "bordered",
              color: "default",
              class: f.bordered.default,
            },
            {
              variant: "bordered",
              color: "primary",
              class: f.bordered.primary,
            },
            {
              variant: "bordered",
              color: "secondary",
              class: f.bordered.secondary,
            },
            {
              variant: "bordered",
              color: "success",
              class: f.bordered.success,
            },
            {
              variant: "bordered",
              color: "warning",
              class: f.bordered.warning,
            },
            { variant: "bordered", color: "danger", class: f.bordered.danger },
            { variant: "flat", color: "default", class: f.flat.default },
            { variant: "flat", color: "primary", class: f.flat.primary },
            { variant: "flat", color: "secondary", class: f.flat.secondary },
            { variant: "flat", color: "success", class: f.flat.success },
            { variant: "flat", color: "warning", class: f.flat.warning },
            { variant: "flat", color: "danger", class: f.flat.danger },
            { variant: "faded", color: "default", class: f.faded.default },
            { variant: "faded", color: "primary", class: f.faded.primary },
            { variant: "faded", color: "secondary", class: f.faded.secondary },
            { variant: "faded", color: "success", class: f.faded.success },
            { variant: "faded", color: "warning", class: f.faded.warning },
            { variant: "faded", color: "danger", class: f.faded.danger },
            {
              variant: "light",
              color: "default",
              class: [f.light.default, "data-[hover=true]:bg-default/40"],
            },
            {
              variant: "light",
              color: "primary",
              class: [f.light.primary, "data-[hover=true]:bg-primary/20"],
            },
            {
              variant: "light",
              color: "secondary",
              class: [f.light.secondary, "data-[hover=true]:bg-secondary/20"],
            },
            {
              variant: "light",
              color: "success",
              class: [f.light.success, "data-[hover=true]:bg-success/20"],
            },
            {
              variant: "light",
              color: "warning",
              class: [f.light.warning, "data-[hover=true]:bg-warning/20"],
            },
            {
              variant: "light",
              color: "danger",
              class: [f.light.danger, "data-[hover=true]:bg-danger/20"],
            },
            {
              variant: "ghost",
              color: "default",
              class: [f.ghost.default, "data-[hover=true]:!bg-default"],
            },
            {
              variant: "ghost",
              color: "primary",
              class: [
                f.ghost.primary,
                "data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground",
              ],
            },
            {
              variant: "ghost",
              color: "secondary",
              class: [
                f.ghost.secondary,
                "data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground",
              ],
            },
            {
              variant: "ghost",
              color: "success",
              class: [
                f.ghost.success,
                "data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground",
              ],
            },
            {
              variant: "ghost",
              color: "warning",
              class: [
                f.ghost.warning,
                "data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground",
              ],
            },
            {
              variant: "ghost",
              color: "danger",
              class: [
                f.ghost.danger,
                "data-[hover=true]:!bg-danger data-[hover=true]:!text-danger-foreground",
              ],
            },
            {
              isInGroup: !0,
              class:
                "rounded-none first:rounded-s-medium last:rounded-e-medium",
            },
            {
              isInGroup: !0,
              size: "sm",
              class: "rounded-none first:rounded-s-small last:rounded-e-small",
            },
            {
              isInGroup: !0,
              size: "md",
              class:
                "rounded-none first:rounded-s-medium last:rounded-e-medium",
            },
            {
              isInGroup: !0,
              size: "lg",
              class: "rounded-none first:rounded-s-large last:rounded-e-large",
            },
            {
              isInGroup: !0,
              isRounded: !0,
              class: "rounded-none first:rounded-s-full last:rounded-e-full",
            },
            {
              isInGroup: !0,
              radius: "none",
              class: "rounded-none first:rounded-s-none last:rounded-e-none",
            },
            {
              isInGroup: !0,
              radius: "sm",
              class: "rounded-none first:rounded-s-small last:rounded-e-small",
            },
            {
              isInGroup: !0,
              radius: "md",
              class:
                "rounded-none first:rounded-s-medium last:rounded-e-medium",
            },
            {
              isInGroup: !0,
              radius: "lg",
              class: "rounded-none first:rounded-s-large last:rounded-e-large",
            },
            {
              isInGroup: !0,
              radius: "full",
              class: "rounded-none first:rounded-s-full last:rounded-e-full",
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "default",
              className: m.oT.default,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "primary",
              className: m.oT.primary,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "secondary",
              className: m.oT.secondary,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "success",
              className: m.oT.success,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "warning",
              className: m.oT.warning,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "danger",
              className: m.oT.danger,
            },
            { isIconOnly: !0, size: "sm", class: "min-w-8 w-8 h-8" },
            { isIconOnly: !0, size: "md", class: "min-w-10 w-10 h-10" },
            { isIconOnly: !0, size: "lg", class: "min-w-12 w-12 h-12" },
            {
              variant: ["solid", "faded", "flat", "bordered", "shadow"],
              class: "data-[hover=true]:opacity-hover",
            },
          ],
        });
      (0, g.tv)({
        base: "inline-flex items-center justify-center h-auto",
        variants: { fullWidth: { true: "w-full" } },
        defaultVariants: { fullWidth: !1 },
      });
      var v = r(209),
        b = r(3985),
        y = r(3220),
        x = r(4463),
        w = r(5532),
        E = r(3201),
        C = r(2232),
        M = r(287),
        S = (0, g.tv)({
          slots: {
            base: "relative inline-flex flex-col gap-2 items-center justify-center",
            wrapper: "relative flex",
            circle1: [
              "absolute",
              "w-full",
              "h-full",
              "rounded-full",
              "animate-spinner-ease-spin",
              "border-2",
              "border-solid",
              "border-t-transparent",
              "border-l-transparent",
              "border-r-transparent",
            ],
            circle2: [
              "absolute",
              "w-full",
              "h-full",
              "rounded-full",
              "opacity-75",
              "animate-spinner-linear-spin",
              "border-2",
              "border-dotted",
              "border-t-transparent",
              "border-l-transparent",
              "border-r-transparent",
            ],
            label: "text-foreground dark:text-foreground-dark font-regular",
          },
          variants: {
            size: {
              sm: {
                wrapper: "w-5 h-5",
                circle1: "border-2",
                circle2: "border-2",
                label: "text-small",
              },
              md: {
                wrapper: "w-8 h-8",
                circle1: "border-3",
                circle2: "border-3",
                label: "text-medium",
              },
              lg: {
                wrapper: "w-10 h-10",
                circle1: "border-3",
                circle2: "border-3",
                label: "text-large",
              },
            },
            color: {
              current: {
                circle1: "border-b-current",
                circle2: "border-b-current",
              },
              white: { circle1: "border-b-white", circle2: "border-b-white" },
              default: {
                circle1: "border-b-default",
                circle2: "border-b-default",
              },
              primary: {
                circle1: "border-b-primary",
                circle2: "border-b-primary",
              },
              secondary: {
                circle1: "border-b-secondary",
                circle2: "border-b-secondary",
              },
              success: {
                circle1: "border-b-success",
                circle2: "border-b-success",
              },
              warning: {
                circle1: "border-b-warning",
                circle2: "border-b-warning",
              },
              danger: {
                circle1: "border-b-danger",
                circle2: "border-b-danger",
              },
            },
            labelColor: {
              foreground: { label: "text-foreground" },
              primary: { label: "text-primary" },
              secondary: { label: "text-secondary" },
              success: { label: "text-success" },
              warning: { label: "text-warning" },
              danger: { label: "text-danger" },
            },
          },
          defaultVariants: {
            size: "md",
            color: "primary",
            labelColor: "foreground",
          },
        }),
        P = r(6345),
        T = r(5155),
        k = (0, M.Rf)((e, t) => {
          let {
            slots: r,
            classNames: n,
            label: a,
            getSpinnerProps: o,
          } = (function (e) {
            let [t, r] = (0, M.rE)(e, S.variantKeys),
              { children: n, className: a, classNames: o, label: s, ...l } = t,
              d = (0, i.useMemo)(() => S({ ...r }), [(0, C.t6)(r)]),
              u = (0, P.$)(null == o ? void 0 : o.base, a),
              c = s || n,
              p = (0, i.useMemo)(
                () =>
                  c && "string" == typeof c
                    ? c
                    : l["aria-label"]
                      ? ""
                      : "Loading",
                [n, c, l["aria-label"]],
              ),
              f = (0, i.useCallback)(
                () => ({
                  "aria-label": p,
                  className: d.base({ class: u }),
                  ...l,
                }),
                [p, d, u, l],
              );
            return { label: c, slots: d, classNames: o, getSpinnerProps: f };
          })({ ...e });
          return (0, T.jsxs)("div", {
            ref: t,
            ...o(),
            children: [
              (0, T.jsxs)("div", {
                className: r.wrapper({ class: null == n ? void 0 : n.wrapper }),
                children: [
                  (0, T.jsx)("i", {
                    className: r.circle1({
                      class: null == n ? void 0 : n.circle1,
                    }),
                  }),
                  (0, T.jsx)("i", {
                    className: r.circle2({
                      class: null == n ? void 0 : n.circle2,
                    }),
                  }),
                ],
              }),
              a &&
                (0, T.jsx)("span", {
                  className: r.label({ class: null == n ? void 0 : n.label }),
                  children: a,
                }),
            ],
          });
        });
      k.displayName = "HeroUI.Spinner";
      var I = r(6498),
        j = r(5683),
        L = r(3648),
        R = () =>
          Promise.all([r.e(485), r.e(365)])
            .then(r.bind(r, 8365))
            .then((e) => e.default),
        A = (e) => {
          let {
            ripples: t = [],
            motionProps: r,
            color: n = "currentColor",
            style: a,
            onClear: o,
          } = e;
          return (0, T.jsx)(T.Fragment, {
            children: t.map((e) => {
              let t = Math.min(
                Math.max(0.01 * e.size, 0.2),
                e.size > 100 ? 0.75 : 0.5,
              );
              return (0, T.jsx)(
                I.F,
                {
                  features: R,
                  children: (0, T.jsx)(j.N, {
                    mode: "popLayout",
                    children: (0, T.jsx)(L.m.span, {
                      animate: { transform: "scale(2)", opacity: 0 },
                      className: "heroui-ripple",
                      exit: { opacity: 0 },
                      initial: { transform: "scale(0)", opacity: 0.35 },
                      style: {
                        position: "absolute",
                        backgroundColor: n,
                        borderRadius: "100%",
                        transformOrigin: "center",
                        pointerEvents: "none",
                        overflow: "hidden",
                        inset: 0,
                        zIndex: 0,
                        top: e.y,
                        left: e.x,
                        width: "".concat(e.size, "px"),
                        height: "".concat(e.size, "px"),
                        ...a,
                      },
                      transition: { duration: t },
                      onAnimationComplete: () => {
                        o(e.key);
                      },
                      ...r,
                    }),
                  }),
                },
                e.key,
              );
            }),
          });
        };
      A.displayName = "HeroUI.Ripple";
      var W = (0, M.Rf)((e, t) => {
        let {
          Component: r,
          domRef: n,
          children: f,
          styles: g,
          spinnerSize: m,
          spinner: M = (0, T.jsx)(k, { color: "current", size: m }),
          spinnerPlacement: S,
          startContent: P,
          endContent: I,
          isLoading: j,
          disableRipple: L,
          getButtonProps: R,
          getRippleProps: W,
          isIconOnly: z,
        } = (function (e) {
          var t, r, n, f, g, m, M, S, P;
          let T = a(),
            k = (0, o.o)(),
            I = !!T,
            {
              ref: j,
              as: L,
              children: R,
              startContent: A,
              endContent: W,
              autoFocus: z,
              className: O,
              spinner: B,
              isLoading: D = !1,
              disableRipple: V = !1,
              fullWidth: N = null != (t = null == T ? void 0 : T.fullWidth) &&
                t,
              radius: H = null == T ? void 0 : T.radius,
              size: G = null != (r = null == T ? void 0 : T.size) ? r : "md",
              color: $ = null != (n = null == T ? void 0 : T.color)
                ? n
                : "default",
              variant: F = null != (f = null == T ? void 0 : T.variant)
                ? f
                : "solid",
              disableAnimation: Y = null !=
                (m =
                  null != (g = null == T ? void 0 : T.disableAnimation)
                    ? g
                    : null == k
                      ? void 0
                      : k.disableAnimation) && m,
              isDisabled: U = null != (M = null == T ? void 0 : T.isDisabled) &&
                M,
              isIconOnly: X = null != (S = null == T ? void 0 : T.isIconOnly) &&
                S,
              spinnerPlacement: q = "start",
              onPress: Q,
              onClick: Z,
              ...K
            } = e,
            _ = L || "button",
            J = "string" == typeof _,
            ee = (0, c.zD)(j),
            et =
              null != (P = V || (null == k ? void 0 : k.disableRipple)) ? P : Y,
            {
              isFocusVisible: er,
              isFocused: en,
              focusProps: ea,
            } = (0, l.o)({ autoFocus: z }),
            eo = U || D,
            es = (0, i.useMemo)(
              () =>
                h({
                  size: G,
                  color: $,
                  variant: F,
                  radius: H,
                  fullWidth: N,
                  isDisabled: eo,
                  isInGroup: I,
                  disableAnimation: Y,
                  isIconOnly: X,
                  className: O,
                }),
              [G, $, F, H, N, eo, I, X, Y, O],
            ),
            {
              onPress: ei,
              onClear: el,
              ripples: ed,
            } = (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                [t, r] = (0, i.useState)([]),
                n = (0, i.useCallback)((e) => {
                  let t = e.target,
                    n = Math.max(t.clientWidth, t.clientHeight);
                  r((t) => [
                    ...t,
                    {
                      key: (0, C.Lz)(t.length.toString()),
                      size: n,
                      x: e.x - n / 2,
                      y: e.y - n / 2,
                    },
                  ]);
                }, []);
              return {
                ripples: t,
                onClear: (0, i.useCallback)((e) => {
                  r((t) => t.filter((t) => t.key !== e));
                }, []),
                onPress: n,
                ...e,
              };
            })(),
            eu = (0, i.useCallback)(
              (e) => {
                et || eo || Y || !ee.current || ei(e);
              },
              [et, eo, Y, ee, ei],
            ),
            { buttonProps: ec, isPressed: ep } = (function (e, t) {
              let r,
                {
                  elementType: n = "button",
                  isDisabled: a,
                  onPress: o,
                  onPressStart: s,
                  onPressEnd: i,
                  onPressChange: l,
                  preventFocusOnPress: d,
                  allowFocusWhenDisabled: c,
                  onClick: p,
                  href: f,
                  target: g,
                  rel: m,
                  type: h = "button",
                  allowTextSelectionOnPress: E,
                } = e;
              r =
                "button" === n
                  ? { type: h, disabled: a }
                  : {
                      role: "button",
                      tabIndex: a ? void 0 : 0,
                      href: "a" !== n || a ? void 0 : f,
                      target: "a" === n ? g : void 0,
                      type: "input" === n ? h : void 0,
                      disabled: "input" === n ? a : void 0,
                      "aria-disabled": a && "input" !== n ? a : void 0,
                      rel: "a" === n ? m : void 0,
                    };
              let C = (0, b.un)() || (0, b.m0)();
              p &&
                "function" == typeof p &&
                (0, v.R)(
                  "onClick is deprecated, please use onPress instead. See: https://github.com/frontio-ai/heroui/issues/4292",
                  "useButton",
                );
              let { pressProps: M, isPressed: S } = (0, w.d)({
                  onPressStart: s,
                  onPressEnd: i,
                  onPressChange: l,
                  onPress: (e) => {
                    C && (null == p || p(e)), null == o || o(e);
                  },
                  isDisabled: a,
                  preventFocusOnPress: d,
                  allowTextSelectionOnPress: E,
                  ref: t,
                }),
                { focusableProps: P } = (0, x.W)(e, t);
              c && (P.tabIndex = a ? -1 : P.tabIndex);
              let T = (0, u.v)(P, M, (0, y.$)(e, { labelable: !0 }));
              return {
                isPressed: S,
                buttonProps: (0, u.v)(r, T, {
                  "aria-haspopup": e["aria-haspopup"],
                  "aria-expanded": e["aria-expanded"],
                  "aria-controls": e["aria-controls"],
                  "aria-pressed": e["aria-pressed"],
                  onClick: (e) => {
                    ("button" === h && C) || null == p || p(e);
                  },
                }),
              };
            })(
              {
                elementType: L,
                isDisabled: eo,
                onPress: (0, d.c)(Q, eu),
                onClick: Z,
                ...K,
              },
              ee,
            ),
            { isHovered: ef, hoverProps: eg } = (0, E.M)({ isDisabled: eo }),
            em = (0, i.useCallback)(
              function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return {
                  "data-disabled": (0, s.sE)(eo),
                  "data-focus": (0, s.sE)(en),
                  "data-pressed": (0, s.sE)(ep),
                  "data-focus-visible": (0, s.sE)(er),
                  "data-hover": (0, s.sE)(ef),
                  "data-loading": (0, s.sE)(D),
                  ...(0, u.v)(
                    ec,
                    ea,
                    eg,
                    (0, p.$)(K, { enabled: J }),
                    (0, p.$)(e),
                  ),
                };
              },
              [D, eo, en, ep, J, er, ef, ec, ea, eg, K],
            ),
            eh = (e) =>
              (0, i.isValidElement)(e)
                ? (0, i.cloneElement)(e, {
                    "aria-hidden": !0,
                    focusable: !1,
                    tabIndex: -1,
                  })
                : null,
            ev = eh(A);
          return {
            Component: _,
            children: R,
            domRef: ee,
            spinner: B,
            styles: es,
            startContent: ev,
            endContent: eh(W),
            isLoading: D,
            spinnerPlacement: q,
            spinnerSize: (0, i.useMemo)(
              () => ({ sm: "sm", md: "sm", lg: "md" })[G],
              [G],
            ),
            disableRipple: et,
            getButtonProps: em,
            getRippleProps: (0, i.useCallback)(
              () => ({ ripples: ed, onClear: el }),
              [ed, el],
            ),
            isIconOnly: X,
          };
        })({ ...e, ref: t });
        return (0, T.jsxs)(r, {
          ref: n,
          className: g,
          ...R(),
          children: [
            P,
            j && "start" === S && M,
            j && z ? null : f,
            j && "end" === S && M,
            I,
            !L && (0, T.jsx)(A, { ...W() }),
          ],
        });
      });
      W.displayName = "HeroUI.Button";
      var z = W;
    },
    624: (e, t, r) => {
      r.d(t, { $: () => l });
      var n = new Set([
          "id",
          "type",
          "style",
          "title",
          "role",
          "tabIndex",
          "htmlFor",
          "width",
          "height",
          "abbr",
          "accept",
          "acceptCharset",
          "accessKey",
          "action",
          "allowFullScreen",
          "allowTransparency",
          "alt",
          "async",
          "autoComplete",
          "autoFocus",
          "autoPlay",
          "cellPadding",
          "cellSpacing",
          "challenge",
          "charset",
          "checked",
          "cite",
          "class",
          "className",
          "cols",
          "colSpan",
          "command",
          "content",
          "contentEditable",
          "contextMenu",
          "controls",
          "coords",
          "crossOrigin",
          "data",
          "dateTime",
          "default",
          "defer",
          "dir",
          "disabled",
          "download",
          "draggable",
          "dropzone",
          "encType",
          "enterKeyHint",
          "for",
          "form",
          "formAction",
          "formEncType",
          "formMethod",
          "formNoValidate",
          "formTarget",
          "frameBorder",
          "headers",
          "hidden",
          "high",
          "href",
          "hrefLang",
          "httpEquiv",
          "icon",
          "inputMode",
          "isMap",
          "itemId",
          "itemProp",
          "itemRef",
          "itemScope",
          "itemType",
          "kind",
          "label",
          "lang",
          "list",
          "loop",
          "manifest",
          "max",
          "maxLength",
          "media",
          "mediaGroup",
          "method",
          "min",
          "minLength",
          "multiple",
          "muted",
          "name",
          "noValidate",
          "open",
          "optimum",
          "pattern",
          "ping",
          "placeholder",
          "poster",
          "preload",
          "radioGroup",
          "referrerPolicy",
          "readOnly",
          "rel",
          "required",
          "rows",
          "rowSpan",
          "sandbox",
          "scope",
          "scoped",
          "scrolling",
          "seamless",
          "selected",
          "shape",
          "size",
          "sizes",
          "slot",
          "sortable",
          "span",
          "spellCheck",
          "src",
          "srcDoc",
          "srcSet",
          "start",
          "step",
          "target",
          "translate",
          "typeMustMatch",
          "useMap",
          "value",
          "wmode",
          "wrap",
        ]),
        a = new Set([
          "onCopy",
          "onCut",
          "onPaste",
          "onLoad",
          "onError",
          "onWheel",
          "onScroll",
          "onCompositionEnd",
          "onCompositionStart",
          "onCompositionUpdate",
          "onKeyDown",
          "onKeyPress",
          "onKeyUp",
          "onFocus",
          "onBlur",
          "onChange",
          "onInput",
          "onSubmit",
          "onClick",
          "onContextMenu",
          "onDoubleClick",
          "onDrag",
          "onDragEnd",
          "onDragEnter",
          "onDragExit",
          "onDragLeave",
          "onDragOver",
          "onDragStart",
          "onDrop",
          "onMouseDown",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseOut",
          "onMouseOver",
          "onMouseUp",
          "onPointerDown",
          "onPointerEnter",
          "onPointerLeave",
          "onPointerUp",
          "onSelect",
          "onTouchCancel",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "onAnimationStart",
          "onAnimationEnd",
          "onAnimationIteration",
          "onTransitionEnd",
        ]),
        o = /^(data-.*)$/,
        s = /^(aria-.*)$/,
        i = /^(on[A-Z].*)$/;
      function l(e, t = {}) {
        let {
            labelable: r = !0,
            enabled: d = !0,
            propNames: u,
            omitPropNames: c,
            omitEventNames: p,
            omitDataProps: f,
            omitEventProps: g,
          } = t,
          m = {};
        if (!d) return e;
        for (let t in e)
          !(
            (null == c ? void 0 : c.has(t)) ||
            ((null == p ? void 0 : p.has(t)) && i.test(t)) ||
            (i.test(t) && !a.has(t)) ||
            (f && o.test(t)) ||
            (g && i.test(t))
          ) &&
            ((Object.prototype.hasOwnProperty.call(e, t) &&
              (n.has(t) ||
                (r && s.test(t)) ||
                (null == u ? void 0 : u.has(t)) ||
                o.test(t))) ||
              i.test(t)) &&
            (m[t] = e[t]);
        return m;
      }
    },
    6345: (e, t, r) => {
      r.d(t, { $: () => n });
      function n(...e) {
        for (var t, r, a = 0, o = ""; a < e.length; )
          (t = e[a++]) &&
            (r = (function e(t) {
              var r,
                n,
                a = "";
              if ("string" == typeof t || "number" == typeof t) a += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (r = 0; r < t.length; r++)
                    t[r] && (n = e(t[r])) && (a && (a += " "), (a += n));
                else for (r in t) t[r] && (a && (a += " "), (a += r));
              }
              return a;
            })(t)) &&
            (o && (o += " "), (o += r));
        return o;
      }
    },
    3201: (e, t, r) => {
      r.d(t, { M: () => d });
      var n = r(2115);
      let a = !1,
        o = 0;
      function s() {
        (a = !0),
          setTimeout(() => {
            a = !1;
          }, 50);
      }
      function i(e) {
        "touch" === e.pointerType && s();
      }
      function l() {
        if ("undefined" != typeof document)
          return (
            "undefined" != typeof PointerEvent
              ? document.addEventListener("pointerup", i)
              : document.addEventListener("touchend", s),
            o++,
            () => {
              --o > 0 ||
                ("undefined" != typeof PointerEvent
                  ? document.removeEventListener("pointerup", i)
                  : document.removeEventListener("touchend", s));
            }
          );
      }
      function d(e) {
        let {
            onHoverStart: t,
            onHoverChange: r,
            onHoverEnd: o,
            isDisabled: s,
          } = e,
          [i, d] = (0, n.useState)(!1),
          u = (0, n.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null,
          }).current;
        (0, n.useEffect)(l, []);
        let { hoverProps: c, triggerHoverEnd: p } = (0, n.useMemo)(() => {
          let e = (e, n) => {
              if (
                ((u.pointerType = n),
                s ||
                  "touch" === n ||
                  u.isHovered ||
                  !e.currentTarget.contains(e.target))
              )
                return;
              u.isHovered = !0;
              let a = e.currentTarget;
              (u.target = a),
                t && t({ type: "hoverstart", target: a, pointerType: n }),
                r && r(!0),
                d(!0);
            },
            n = (e, t) => {
              if (
                ((u.pointerType = ""),
                (u.target = null),
                "touch" === t || !u.isHovered)
              )
                return;
              u.isHovered = !1;
              let n = e.currentTarget;
              o && o({ type: "hoverend", target: n, pointerType: t }),
                r && r(!1),
                d(!1);
            },
            i = {};
          return (
            "undefined" != typeof PointerEvent
              ? ((i.onPointerEnter = (t) => {
                  (a && "mouse" === t.pointerType) || e(t, t.pointerType);
                }),
                (i.onPointerLeave = (e) => {
                  !s &&
                    e.currentTarget.contains(e.target) &&
                    n(e, e.pointerType);
                }))
              : ((i.onTouchStart = () => {
                  u.ignoreEmulatedMouseEvents = !0;
                }),
                (i.onMouseEnter = (t) => {
                  u.ignoreEmulatedMouseEvents || a || e(t, "mouse"),
                    (u.ignoreEmulatedMouseEvents = !1);
                }),
                (i.onMouseLeave = (e) => {
                  !s && e.currentTarget.contains(e.target) && n(e, "mouse");
                })),
            { hoverProps: i, triggerHoverEnd: n }
          );
        }, [t, r, o, s, u]);
        return (
          (0, n.useEffect)(() => {
            s && p({ currentTarget: u.target }, u.pointerType);
          }, [s]),
          { hoverProps: c, isHovered: i }
        );
      }
    },
    7539: (e, t, r) => {
      r.d(t, { n: () => n });
      let n = "data-" + (0, r(2717).I)("framerAppearId");
    },
    5385: (e, t, r) => {
      r.d(t, { N: () => n });
      function n(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
    },
    2043: (e, t, r) => {
      r.d(t, { p: () => n });
      let n = (e) => Array.isArray(e);
    },
    5683: (e, t, r) => {
      r.d(t, { N: () => v });
      var n = r(5155),
        a = r(2115),
        o = r(9656),
        s = r(9234),
        i = r(7249);
      class l extends a.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d(e) {
        let { children: t, isPresent: r } = e,
          o = (0, a.useId)(),
          s = (0, a.useRef)(null),
          d = (0, a.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: u } = (0, a.useContext)(i.Q);
        return (
          (0, a.useInsertionEffect)(() => {
            let { width: e, height: t, top: n, left: a } = d.current;
            if (r || !s.current || !e || !t) return;
            s.current.dataset.motionPopId = o;
            let i = document.createElement("style");
            return (
              u && (i.nonce = u),
              document.head.appendChild(i),
              i.sheet &&
                i.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      o,
                      '"] {\n            position: absolute !important;\n            width: ',
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            top: ")
                    .concat(n, "px !important;\n            left: ")
                    .concat(a, "px !important;\n          }\n        "),
                ),
              () => {
                document.head.removeChild(i);
              }
            );
          }, [r]),
          (0, n.jsx)(l, {
            isPresent: r,
            childRef: s,
            sizeRef: d,
            children: a.cloneElement(t, { ref: s }),
          })
        );
      }
      let u = (e) => {
        let {
            children: t,
            initial: r,
            isPresent: i,
            onExitComplete: l,
            custom: u,
            presenceAffectsLayout: p,
            mode: f,
          } = e,
          g = (0, s.M)(c),
          m = (0, a.useId)(),
          h = (0, a.useCallback)(
            (e) => {
              for (let t of (g.set(e, !0), g.values())) if (!t) return;
              l && l();
            },
            [g, l],
          ),
          v = (0, a.useMemo)(
            () => ({
              id: m,
              initial: r,
              isPresent: i,
              custom: u,
              onExitComplete: h,
              register: (e) => (g.set(e, !1), () => g.delete(e)),
            }),
            p ? [Math.random(), h] : [i, h],
          );
        return (
          (0, a.useMemo)(() => {
            g.forEach((e, t) => g.set(t, !1));
          }, [i]),
          a.useEffect(() => {
            i || g.size || !l || l();
          }, [i]),
          "popLayout" === f &&
            (t = (0, n.jsx)(d, { isPresent: i, children: t })),
          (0, n.jsx)(o.t.Provider, { value: v, children: t })
        );
      };
      function c() {
        return new Map();
      }
      var p = r(4710),
        f = r(5107);
      let g = (e) => e.key || "";
      function m(e) {
        let t = [];
        return (
          a.Children.forEach(e, (e) => {
            (0, a.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var h = r(5403);
      let v = (e) => {
        let {
          children: t,
          exitBeforeEnter: r,
          custom: o,
          initial: i = !0,
          onExitComplete: l,
          presenceAffectsLayout: d = !0,
          mode: c = "sync",
        } = e;
        (0, f.V)(!r, "Replace exitBeforeEnter with mode='wait'");
        let v = (0, a.useMemo)(() => m(t), [t]),
          b = v.map(g),
          y = (0, a.useRef)(!0),
          x = (0, a.useRef)(v),
          w = (0, s.M)(() => new Map()),
          [E, C] = (0, a.useState)(v),
          [M, S] = (0, a.useState)(v);
        (0, h.E)(() => {
          (y.current = !1), (x.current = v);
          for (let e = 0; e < M.length; e++) {
            let t = g(M[e]);
            b.includes(t) ? w.delete(t) : !0 !== w.get(t) && w.set(t, !1);
          }
        }, [M, b.length, b.join("-")]);
        let P = [];
        if (v !== E) {
          let e = [...v];
          for (let t = 0; t < M.length; t++) {
            let r = M[t],
              n = g(r);
            b.includes(n) || (e.splice(t, 0, r), P.push(r));
          }
          "wait" === c && P.length && (e = P), S(m(e)), C(v);
          return;
        }
        let { forceRender: T } = (0, a.useContext)(p.L);
        return (0, n.jsx)(n.Fragment, {
          children: M.map((e) => {
            let t = g(e),
              r = v === M || b.includes(t);
            return (0, n.jsx)(
              u,
              {
                isPresent: r,
                initial: (!y.current || !!i) && void 0,
                custom: r ? void 0 : o,
                presenceAffectsLayout: d,
                mode: c,
                onExitComplete: r
                  ? void 0
                  : () => {
                      if (!w.has(t)) return;
                      w.set(t, !0);
                      let e = !0;
                      w.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == T || T(), S(x.current), l && l());
                    },
                children: e,
              },
              t,
            );
          }),
        });
      };
    },
    6498: (e, t, r) => {
      r.d(t, { F: () => i });
      var n = r(5155),
        a = r(2115),
        o = r(5815),
        s = r(4705);
      function i(e) {
        let { children: t, features: r, strict: i = !1 } = e,
          [, d] = (0, a.useState)(!l(r)),
          u = (0, a.useRef)(void 0);
        if (!l(r)) {
          let { renderer: e, ...t } = r;
          (u.current = e), (0, s.Y)(t);
        }
        return (
          (0, a.useEffect)(() => {
            l(r) &&
              r().then((e) => {
                let { renderer: t, ...r } = e;
                (0, s.Y)(r), (u.current = t), d(!0);
              });
          }, []),
          (0, n.jsx)(o.Y.Provider, {
            value: { renderer: u.current, strict: i },
            children: t,
          })
        );
      }
      function l(e) {
        return "function" == typeof e;
      }
    },
    4710: (e, t, r) => {
      r.d(t, { L: () => n });
      let n = (0, r(2115).createContext)({});
    },
    5815: (e, t, r) => {
      r.d(t, { Y: () => n });
      let n = (0, r(2115).createContext)({ strict: !1 });
    },
    7249: (e, t, r) => {
      r.d(t, { Q: () => n });
      let n = (0, r(2115).createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    9656: (e, t, r) => {
      r.d(t, { t: () => n });
      let n = (0, r(2115).createContext)(null);
    },
    4499: (e, t, r) => {
      r.d(t, { I: () => o });
      var n = r(3903);
      let a = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function o(e, t) {
        let r = !1,
          o = !0,
          s = { delta: 0, timestamp: 0, isProcessing: !1 },
          i = () => (r = !0),
          l = a.reduce(
            (e, t) => (
              (e[t] = (function (e) {
                let t = new Set(),
                  r = new Set(),
                  n = !1,
                  a = !1,
                  o = new WeakSet(),
                  s = { delta: 0, timestamp: 0, isProcessing: !1 };
                function i(t) {
                  o.has(t) && (l.schedule(t), e()), t(s);
                }
                let l = {
                  schedule: (e, a = !1, s = !1) => {
                    let i = s && n ? t : r;
                    return a && o.add(e), i.has(e) || i.add(e), e;
                  },
                  cancel: (e) => {
                    r.delete(e), o.delete(e);
                  },
                  process: (e) => {
                    if (((s = e), n)) {
                      a = !0;
                      return;
                    }
                    (n = !0),
                      ([t, r] = [r, t]),
                      r.clear(),
                      t.forEach(i),
                      (n = !1),
                      a && ((a = !1), l.process(e));
                  },
                };
                return l;
              })(i)),
              e
            ),
            {},
          ),
          {
            read: d,
            resolveKeyframes: u,
            update: c,
            preRender: p,
            render: f,
            postRender: g,
          } = l,
          m = () => {
            let a = n.W.useManualTiming ? s.timestamp : performance.now();
            (r = !1),
              (s.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(a - s.timestamp, 40), 1)),
              (s.timestamp = a),
              (s.isProcessing = !0),
              d.process(s),
              u.process(s),
              c.process(s),
              p.process(s),
              f.process(s),
              g.process(s),
              (s.isProcessing = !1),
              r && t && ((o = !1), e(m));
          },
          h = () => {
            (r = !0), (o = !0), s.isProcessing || e(m);
          };
        return {
          schedule: a.reduce((e, t) => {
            let n = l[t];
            return (
              (e[t] = (e, t = !1, a = !1) => (r || h(), n.schedule(e, t, a))), e
            );
          }, {}),
          cancel: (e) => {
            for (let t = 0; t < a.length; t++) l[a[t]].cancel(e);
          },
          state: s,
          steps: l,
        };
      }
    },
    3307: (e, t, r) => {
      r.d(t, { Gt: () => a, WG: () => o, uv: () => s });
      var n = r(6054);
      let {
        schedule: a,
        cancel: o,
        state: s,
        steps: i,
      } = (0, r(4499).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.l,
        !0,
      );
    },
    6247: (e, t, r) => {
      r.d(t, { B: () => a });
      let n = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        a = {};
      for (let e in n) a[e] = { isEnabled: (t) => n[e].some((e) => !!t[e]) };
    },
    4705: (e, t, r) => {
      r.d(t, { Y: () => a });
      var n = r(6247);
      function a(e) {
        for (let t in e) n.B[t] = { ...n.B[t], ...e[t] };
      }
    },
    7910: (e, t, r) => {
      r.d(t, { z: () => o });
      let n = {};
      var a = r(1371);
      function o(e, { layout: t, layoutId: r }) {
        return (
          a.f.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== r) && (!!n[e] || "opacity" === e))
        );
      }
    },
    3648: (e, t, r) => {
      r.d(t, { m: () => $ });
      var n = r(5155),
        a = r(2115),
        o = r(7249);
      let s = (0, a.createContext)({});
      var i = r(9656),
        l = r(5403),
        d = r(5815),
        u = r(7539);
      let { schedule: c, cancel: p } = (0, r(4499).I)(queueMicrotask, !1);
      function f(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      let g = (0, a.createContext)({});
      var m = r(2896),
        h = r(6657);
      function v(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var b = r(4705),
        y = r(5687),
        x = r(4710);
      let w = Symbol.for("motionComponentSymbol");
      var E = r(6247),
        C = r(5526),
        M = r(7928),
        S = r(2126),
        P = r(5385),
        T = r(8442),
        k = r(9234),
        I = r(5238),
        j = r(4707);
      let L = (e) => (t, r) => {
          let n = (0, a.useContext)(s),
            o = (0, a.useContext)(i.t),
            l = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: e,
                  createRenderState: t,
                  onMount: r,
                },
                n,
                a,
                o,
              ) {
                let s = {
                  latestValues: (function (e, t, r, n) {
                    let a = {},
                      o = n(e, {});
                    for (let e in o)
                      a[e] = (function (e) {
                        let t = (0, j.S)(e) ? e.get() : e;
                        return (0, I.B)(t) ? t.toValue() : t;
                      })(o[e]);
                    let { initial: s, animate: i } = e,
                      l = (0, h.e)(e),
                      d = (0, h.O)(e);
                    t &&
                      d &&
                      !l &&
                      !1 !== e.inherit &&
                      (void 0 === s && (s = t.initial),
                      void 0 === i && (i = t.animate));
                    let u = !!r && !1 === r.initial,
                      c = (u = u || !1 === s) ? i : s;
                    if (c && "boolean" != typeof c && !(0, P.N)(c)) {
                      let t = Array.isArray(c) ? c : [c];
                      for (let r = 0; r < t.length; r++) {
                        let n = (0, T.a)(e, t[r]);
                        if (n) {
                          let { transitionEnd: e, transition: t, ...r } = n;
                          for (let e in r) {
                            let t = r[e];
                            if (Array.isArray(t)) {
                              let e = u ? t.length - 1 : 0;
                              t = t[e];
                            }
                            null !== t && (a[e] = t);
                          }
                          for (let t in e) a[t] = e[t];
                        }
                      }
                    }
                    return a;
                  })(n, a, o, e),
                  renderState: t(),
                };
                return r && (s.mount = (e) => r(n, e, s)), s;
              })(e, t, n, o);
          return r ? l() : (0, k.M)(l);
        },
        R = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
        A = () => ({ ...R(), attrs: {} });
      var W = r(1721),
        z = r(7986),
        O = r(3307);
      let B = {
          useVisualState: L({
            scrapeMotionValuesFromProps: S.x,
            createRenderState: A,
            onMount: (e, t, { renderState: r, latestValues: n }) => {
              O.Gt.read(() => {
                try {
                  r.dimensions =
                    "function" == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                O.Gt.render(() => {
                  (0, W.B)(r, n, (0, z.n)(t.tagName), e.transformTemplate),
                    (0, M.d)(t, r);
                });
            },
          }),
        },
        D = {
          useVisualState: L({
            scrapeMotionValuesFromProps: r(701).x,
            createRenderState: R,
          }),
        };
      var V = r(7910),
        N = r(7192);
      function H(e, t, r) {
        for (let n in t) (0, j.S)(t[n]) || (0, V.z)(n, r) || (e[n] = t[n]);
      }
      var G = r(9970);
      let $ = (function (e) {
        if ("undefined" == typeof Proxy) return e;
        let t = new Map();
        return new Proxy((...t) => e(...t), {
          get: (r, n) =>
            "create" === n ? e : (t.has(n) || t.set(n, e(n)), t.get(n)),
        });
      })(function (e, { forwardMotionProps: t } = { forwardMotionProps: !1 }) {
        return (function (e) {
          let {
            preloadedFeatures: t,
            createVisualElement: r,
            useRender: p,
            useVisualState: C,
            Component: M,
          } = e;
          t && (0, b.Y)(t);
          let S = (0, a.forwardRef)(function (e, t) {
            var b;
            let w;
            let S = {
                ...(0, a.useContext)(o.Q),
                ...e,
                layoutId: (function (e) {
                  let { layoutId: t } = e,
                    r = (0, a.useContext)(x.L).id;
                  return r && void 0 !== t ? r + "-" + t : t;
                })(e),
              },
              { isStatic: P } = S,
              T = (function (e) {
                let { initial: t, animate: r } = (function (e, t) {
                  if ((0, h.e)(e)) {
                    let { initial: t, animate: r } = e;
                    return {
                      initial: !1 === t || (0, m.w)(t) ? t : void 0,
                      animate: (0, m.w)(r) ? r : void 0,
                    };
                  }
                  return !1 !== e.inherit ? t : {};
                })(e, (0, a.useContext)(s));
                return (0, a.useMemo)(
                  () => ({ initial: t, animate: r }),
                  [v(t), v(r)],
                );
              })(e),
              k = C(e, P);
            if (!P && y.B) {
              (0, a.useContext)(d.Y).strict;
              let e = (function (e) {
                let { drag: t, layout: r } = E.B;
                if (!t && !r) return {};
                let n = { ...t, ...r };
                return {
                  MeasureLayout:
                    (null == t ? void 0 : t.isEnabled(e)) ||
                    (null == r ? void 0 : r.isEnabled(e))
                      ? n.MeasureLayout
                      : void 0,
                  ProjectionNode: n.ProjectionNode,
                };
              })(S);
              (w = e.MeasureLayout),
                (T.visualElement = (function (e, t, r, n, p) {
                  var m, h;
                  let { visualElement: v } = (0, a.useContext)(s),
                    b = (0, a.useContext)(d.Y),
                    y = (0, a.useContext)(i.t),
                    x = (0, a.useContext)(o.Q).reducedMotion,
                    w = (0, a.useRef)();
                  (n = n || b.renderer),
                    !w.current &&
                      n &&
                      (w.current = n(e, {
                        visualState: t,
                        parent: v,
                        props: r,
                        presenceContext: y,
                        blockInitialAnimation: !!y && !1 === y.initial,
                        reducedMotionConfig: x,
                      }));
                  let E = w.current,
                    C = (0, a.useContext)(g);
                  E &&
                    !E.projection &&
                    p &&
                    ("html" === E.type || "svg" === E.type) &&
                    (function (e, t, r, n) {
                      let {
                        layoutId: a,
                        layout: o,
                        drag: s,
                        dragConstraints: i,
                        layoutScroll: l,
                        layoutRoot: d,
                      } = t;
                      (e.projection = new r(
                        e.latestValues,
                        t["data-framer-portal-id"]
                          ? void 0
                          : (function e(t) {
                              if (t)
                                return !1 !== t.options.allowProjection
                                  ? t.projection
                                  : e(t.parent);
                            })(e.parent),
                      )),
                        e.projection.setOptions({
                          layoutId: a,
                          layout: o,
                          alwaysMeasureLayout: !!s || (i && f(i)),
                          visualElement: e,
                          animationType: "string" == typeof o ? o : "both",
                          initialPromotionConfig: n,
                          layoutScroll: l,
                          layoutRoot: d,
                        });
                    })(w.current, r, p, C);
                  let M = (0, a.useRef)(!1);
                  (0, a.useInsertionEffect)(() => {
                    E && M.current && E.update(r, y);
                  });
                  let S = r[u.n],
                    P = (0, a.useRef)(
                      !!S &&
                        !(null === (m = window.MotionHandoffIsComplete) ||
                        void 0 === m
                          ? void 0
                          : m.call(window, S)) &&
                        (null === (h = window.MotionHasOptimisedAnimation) ||
                        void 0 === h
                          ? void 0
                          : h.call(window, S)),
                    );
                  return (
                    (0, l.E)(() => {
                      E &&
                        ((M.current = !0),
                        (window.MotionIsMounted = !0),
                        E.updateFeatures(),
                        c.render(E.render),
                        P.current &&
                          E.animationState &&
                          E.animationState.animateChanges());
                    }),
                    (0, a.useEffect)(() => {
                      E &&
                        (!P.current &&
                          E.animationState &&
                          E.animationState.animateChanges(),
                        P.current &&
                          (queueMicrotask(() => {
                            var e;
                            null === (e = window.MotionHandoffMarkAsComplete) ||
                              void 0 === e ||
                              e.call(window, S);
                          }),
                          (P.current = !1)));
                    }),
                    E
                  );
                })(M, k, S, r, e.ProjectionNode));
            }
            return (0, n.jsxs)(s.Provider, {
              value: T,
              children: [
                w && T.visualElement
                  ? (0, n.jsx)(w, { visualElement: T.visualElement, ...S })
                  : null,
                p(
                  M,
                  e,
                  ((b = T.visualElement),
                  (0, a.useCallback)(
                    (e) => {
                      e && k.mount && k.mount(e),
                        b && (e ? b.mount(e) : b.unmount()),
                        t &&
                          ("function" == typeof t
                            ? t(e)
                            : f(t) && (t.current = e));
                    },
                    [b],
                  )),
                  k,
                  P,
                  T.visualElement,
                ),
              ],
            });
          });
          return (S[w] = M), S;
        })({
          ...((0, C.Q)(e) ? B : D),
          preloadedFeatures: void 0,
          useRender: (function (e = !1) {
            return (t, r, n, { latestValues: o }, s) => {
              let i = (
                  (0, C.Q)(t)
                    ? function (e, t, r, n) {
                        let o = (0, a.useMemo)(() => {
                          let r = A();
                          return (
                            (0, W.B)(r, t, (0, z.n)(n), e.transformTemplate),
                            { ...r.attrs, style: { ...r.style } }
                          );
                        }, [t]);
                        if (e.style) {
                          let t = {};
                          H(t, e.style, e), (o.style = { ...t, ...o.style });
                        }
                        return o;
                      }
                    : function (e, t) {
                        let r = {},
                          n = (function (e, t) {
                            let r = e.style || {},
                              n = {};
                            return (
                              H(n, r, e),
                              Object.assign(
                                n,
                                (function ({ transformTemplate: e }, t) {
                                  return (0, a.useMemo)(() => {
                                    let r = R();
                                    return (
                                      (0, N.O)(r, t, e),
                                      Object.assign({}, r.vars, r.style)
                                    );
                                  }, [t]);
                                })(e, t),
                              ),
                              n
                            );
                          })(e, t);
                        return (
                          e.drag &&
                            !1 !== e.dragListener &&
                            ((r.draggable = !1),
                            (n.userSelect =
                              n.WebkitUserSelect =
                              n.WebkitTouchCallout =
                                "none"),
                            (n.touchAction =
                              !0 === e.drag
                                ? "none"
                                : `pan-${"x" === e.drag ? "y" : "x"}`)),
                          void 0 === e.tabIndex &&
                            (e.onTap || e.onTapStart || e.whileTap) &&
                            (r.tabIndex = 0),
                          (r.style = n),
                          r
                        );
                      }
                )(r, o, s, t),
                l = (0, G.J)(r, "string" == typeof t, e),
                d = t !== a.Fragment ? { ...l, ...i, ref: n } : {},
                { children: u } = r,
                c = (0, a.useMemo)(() => ((0, j.S)(u) ? u.get() : u), [u]);
              return (0, a.createElement)(t, { ...d, children: c });
            };
          })(t),
          createVisualElement: void 0,
          Component: e,
        });
      });
    },
    2717: (e, t, r) => {
      r.d(t, { I: () => n });
      let n = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    9970: (e, t, r) => {
      r.d(t, { J: () => i, D: () => s });
      let n = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function a(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          n.has(e)
        );
      }
      let o = (e) => !a(e);
      function s(e) {
        e && (o = (t) => (t.startsWith("on") ? !a(t) : e(t)));
      }
      try {
        s(require("@emotion/is-prop-valid").default);
      } catch (e) {}
      function i(e, t, r) {
        let n = {};
        for (let s in e)
          ("values" !== s || "object" != typeof e.values) &&
            (o(s) ||
              (!0 === r && a(s)) ||
              (!t && !a(s)) ||
              (e.draggable && s.startsWith("onDrag"))) &&
            (n[s] = e[s]);
        return n;
      }
    },
    2271: (e, t, r) => {
      r.d(t, { j: () => a, p: () => s });
      let n = (e) => (t) => "string" == typeof t && t.startsWith(e),
        a = n("--"),
        o = n("var(--"),
        s = (e) => !!o(e) && i.test(e.split("/*")[0].trim()),
        i =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    5526: (e, t, r) => {
      r.d(t, { Q: () => a });
      let n = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function a(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (n.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
    },
    618: (e, t, r) => {
      r.d(t, { W: () => l });
      var n = r(1535),
        a = r(3406);
      let o = {
          borderWidth: a.px,
          borderTopWidth: a.px,
          borderRightWidth: a.px,
          borderBottomWidth: a.px,
          borderLeftWidth: a.px,
          borderRadius: a.px,
          radius: a.px,
          borderTopLeftRadius: a.px,
          borderTopRightRadius: a.px,
          borderBottomRightRadius: a.px,
          borderBottomLeftRadius: a.px,
          width: a.px,
          maxWidth: a.px,
          height: a.px,
          maxHeight: a.px,
          top: a.px,
          right: a.px,
          bottom: a.px,
          left: a.px,
          padding: a.px,
          paddingTop: a.px,
          paddingRight: a.px,
          paddingBottom: a.px,
          paddingLeft: a.px,
          margin: a.px,
          marginTop: a.px,
          marginRight: a.px,
          marginBottom: a.px,
          marginLeft: a.px,
          backgroundPositionX: a.px,
          backgroundPositionY: a.px,
        },
        s = {
          rotate: a.uj,
          rotateX: a.uj,
          rotateY: a.uj,
          rotateZ: a.uj,
          scale: n.hs,
          scaleX: n.hs,
          scaleY: n.hs,
          scaleZ: n.hs,
          skew: a.uj,
          skewX: a.uj,
          skewY: a.uj,
          distance: a.px,
          translateX: a.px,
          translateY: a.px,
          translateZ: a.px,
          x: a.px,
          y: a.px,
          z: a.px,
          perspective: a.px,
          transformPerspective: a.px,
          opacity: n.X4,
          originX: a.gQ,
          originY: a.gQ,
          originZ: a.px,
        },
        i = { ...n.ai, transform: Math.round },
        l = {
          ...o,
          ...s,
          zIndex: i,
          size: a.px,
          fillOpacity: n.X4,
          strokeOpacity: n.X4,
          numOctaves: i,
        };
    },
    7192: (e, t, r) => {
      r.d(t, { O: () => d });
      var n = r(1371);
      let a = (e, t) => (t && "number" == typeof e ? t.transform(e) : e);
      var o = r(618);
      let s = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        i = n.U.length;
      var l = r(2271);
      function d(e, t, r) {
        let { style: d, vars: u, transformOrigin: c } = e,
          p = !1,
          f = !1;
        for (let e in t) {
          let r = t[e];
          if (n.f.has(e)) {
            p = !0;
            continue;
          }
          if ((0, l.j)(e)) {
            u[e] = r;
            continue;
          }
          {
            let t = a(r, o.W[e]);
            e.startsWith("origin") ? ((f = !0), (c[e] = t)) : (d[e] = t);
          }
        }
        if (
          (!t.transform &&
            (p || r
              ? (d.transform = (function (e, t, r) {
                  let l = "",
                    d = !0;
                  for (let u = 0; u < i; u++) {
                    let i = n.U[u],
                      c = e[i];
                    if (void 0 === c) continue;
                    let p = !0;
                    if (
                      !(p =
                        "number" == typeof c
                          ? c === (i.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(c)) ||
                      r
                    ) {
                      let e = a(c, o.W[i]);
                      if (!p) {
                        d = !1;
                        let t = s[i] || i;
                        l += `${t}(${e}) `;
                      }
                      r && (t[i] = e);
                    }
                  }
                  return (
                    (l = l.trim()),
                    r ? (l = r(t, d ? "" : l)) : d && (l = "none"),
                    l
                  );
                })(t, e.transform, r))
              : d.transform && (d.transform = "none")),
          f)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: r = 0 } = c;
          d.transformOrigin = `${e} ${t} ${r}`;
        }
      }
    },
    8535: (e, t, r) => {
      r.d(t, { e: () => n });
      function n(e, { style: t, vars: r }, n, a) {
        for (let o in (Object.assign(e.style, t, a && a.getProjectionStyles(n)),
        r))
          e.style.setProperty(o, r[o]);
      }
    },
    701: (e, t, r) => {
      r.d(t, { x: () => o });
      var n = r(7910),
        a = r(4707);
      function o(e, t, r) {
        var o;
        let { style: s } = e,
          i = {};
        for (let l in s)
          ((0, a.S)(s[l]) ||
            (t.style && (0, a.S)(t.style[l])) ||
            (0, n.z)(l, e) ||
            (null === (o = null == r ? void 0 : r.getValue(l)) || void 0 === o
              ? void 0
              : o.liveStyle) !== void 0) &&
            (i[l] = s[l]);
        return i;
      }
    },
    1371: (e, t, r) => {
      r.d(t, { U: () => n, f: () => a });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        a = new Set(n);
    },
    1721: (e, t, r) => {
      r.d(t, { B: () => l });
      var n = r(7192),
        a = r(3406);
      function o(e, t, r) {
        return "string" == typeof e ? e : a.px.transform(t + r * e);
      }
      let s = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        i = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function l(
        e,
        {
          attrX: t,
          attrY: r,
          attrScale: l,
          originX: d,
          originY: u,
          pathLength: c,
          pathSpacing: p = 1,
          pathOffset: f = 0,
          ...g
        },
        m,
        h,
      ) {
        if (((0, n.O)(e, g, h), m)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: v, style: b, dimensions: y } = e;
        v.transform && (y && (b.transform = v.transform), delete v.transform),
          y &&
            (void 0 !== d || void 0 !== u || b.transform) &&
            (b.transformOrigin = (function (e, t, r) {
              let n = o(t, e.x, e.width),
                a = o(r, e.y, e.height);
              return `${n} ${a}`;
            })(y, void 0 !== d ? d : 0.5, void 0 !== u ? u : 0.5)),
          void 0 !== t && (v.x = t),
          void 0 !== r && (v.y = r),
          void 0 !== l && (v.scale = l),
          void 0 !== c &&
            (function (e, t, r = 1, n = 0, o = !0) {
              e.pathLength = 1;
              let l = o ? s : i;
              e[l.offset] = a.px.transform(-n);
              let d = a.px.transform(t),
                u = a.px.transform(r);
              e[l.array] = `${d} ${u}`;
            })(v, c, p, f, !1);
      }
    },
    9552: (e, t, r) => {
      r.d(t, { e: () => n });
      let n = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    7986: (e, t, r) => {
      r.d(t, { n: () => n });
      let n = (e) => "string" == typeof e && "svg" === e.toLowerCase();
    },
    7928: (e, t, r) => {
      r.d(t, { d: () => s });
      var n = r(2717),
        a = r(8535),
        o = r(9552);
      function s(e, t, r, s) {
        for (let r in ((0, a.e)(e, t, void 0, s), t.attrs))
          e.setAttribute(o.e.has(r) ? r : (0, n.I)(r), t.attrs[r]);
      }
    },
    2126: (e, t, r) => {
      r.d(t, { x: () => s });
      var n = r(4707),
        a = r(701),
        o = r(1371);
      function s(e, t, r) {
        let s = (0, a.x)(e, t, r);
        for (let r in e)
          ((0, n.S)(e[r]) || (0, n.S)(t[r])) &&
            (s[
              -1 !== o.U.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = e[r]);
        return s;
      }
    },
    6657: (e, t, r) => {
      r.d(t, { O: () => i, e: () => s });
      var n = r(5385),
        a = r(2896),
        o = r(4543);
      function s(e) {
        return (0, n.N)(e.animate) || o._.some((t) => (0, a.w)(e[t]));
      }
      function i(e) {
        return !!(s(e) || e.variants);
      }
    },
    2896: (e, t, r) => {
      r.d(t, { w: () => n });
      function n(e) {
        return "string" == typeof e || Array.isArray(e);
      }
    },
    8442: (e, t, r) => {
      function n(e, t, r, n) {
        if (
          "function" == typeof t ||
          ("string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t)
        ) {
          let [a, o] = (function (e) {
            let t = [{}, {}];
            return (
              null == e ||
                e.values.forEach((e, r) => {
                  (t[0][r] = e.get()), (t[1][r] = e.getVelocity());
                }),
              t
            );
          })(n);
          t = t(void 0 !== r ? r : e.custom, a, o);
        }
        return t;
      }
      r.d(t, { a: () => n });
    },
    4543: (e, t, r) => {
      r.d(t, { U: () => n, _: () => a });
      let n = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        a = ["initial", ...n];
    },
    3903: (e, t, r) => {
      r.d(t, { W: () => n });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    6611: (e, t, r) => {
      r.d(t, { q: () => n });
      let n = (e, t, r) => (r > t ? t : r < e ? e : r);
    },
    5687: (e, t, r) => {
      r.d(t, { B: () => n });
      let n = "undefined" != typeof window;
    },
    5238: (e, t, r) => {
      r.d(t, { B: () => a, K: () => o });
      var n = r(2043);
      let a = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        o = (e) => ((0, n.p)(e) ? e[e.length - 1] || 0 : e);
    },
    9234: (e, t, r) => {
      r.d(t, { M: () => a });
      var n = r(2115);
      function a(e) {
        let t = (0, n.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    5403: (e, t, r) => {
      r.d(t, { E: () => a });
      var n = r(2115);
      let a = r(5687).B ? n.useLayoutEffect : n.useEffect;
    },
    1535: (e, t, r) => {
      r.d(t, { X4: () => o, ai: () => a, hs: () => s });
      var n = r(6611);
      let a = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        o = { ...a, transform: (e) => (0, n.q)(0, 1, e) },
        s = { ...a, default: 1 };
    },
    3406: (e, t, r) => {
      r.d(t, {
        KN: () => o,
        gQ: () => d,
        px: () => s,
        uj: () => a,
        vh: () => i,
        vw: () => l,
      });
      let n = (e) => ({
          test: (t) =>
            "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        a = n("deg"),
        o = n("%"),
        s = n("px"),
        i = n("vh"),
        l = n("vw"),
        d = {
          ...o,
          parse: (e) => o.parse(e) / 100,
          transform: (e) => o.transform(100 * e),
        };
    },
    4707: (e, t, r) => {
      r.d(t, { S: () => n });
      let n = (e) => !!(e && e.getVelocity);
    },
    5107: (e, t, r) => {
      r.d(t, { $: () => a, V: () => o });
      var n = r(6054);
      let a = n.l,
        o = n.l;
    },
    6054: (e, t, r) => {
      r.d(t, { l: () => n });
      let n = (e) => e;
    },
  },
]);
