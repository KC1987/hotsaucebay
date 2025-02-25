(() => {
  var e = {};
  (e.id = 907),
    (e.ids = [907]),
    (e.modules = {
      10846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      19121: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      29294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      63033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      33873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      31007: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => d,
            pages: () => u,
            routeModule: () => c,
            tree: () => p,
          });
        var s = r(70260),
          a = r(28203),
          o = r(25155),
          i = r.n(o),
          n = r(67292),
          l = {};
        for (let e in n)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => n[e]);
        r.d(t, l);
        let p = [
            "",
            {
              children: [
                "pricing",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 99705)),
                        "/Users/kaspars/Desktop/hotsaucebay/app/pricing/page.tsx",
                      ],
                    },
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(r.bind(r, 36482)),
                    "/Users/kaspars/Desktop/hotsaucebay/app/pricing/layout.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 86459)),
                "/Users/kaspars/Desktop/hotsaucebay/app/layout.tsx",
              ],
              error: [
                () => Promise.resolve().then(r.bind(r, 72627)),
                "/Users/kaspars/Desktop/hotsaucebay/app/error.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.t.bind(r, 19937, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          u = ["/Users/kaspars/Desktop/hotsaucebay/app/pricing/page.tsx"],
          d = { require: r, loadChunk: () => Promise.resolve() },
          c = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/pricing/page",
              pathname: "/pricing",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: p },
          });
      },
      96487: () => {},
      78335: () => {},
      36482: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => a });
        var s = r(62740);
        function a({ children: e }) {
          return (0, s.jsx)("section", {
            className:
              "flex flex-col items-center justify-center gap-4 py-8 md:py-10",
            children: (0, s.jsx)("div", {
              className: "inline-block max-w-lg text-center justify-center",
              children: e,
            }),
          });
        }
      },
      99705: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => o });
        var s = r(62740),
          a = r(61912);
        function o() {
          return (0, s.jsx)("div", {
            children: (0, s.jsx)("h1", {
              className: (0, a.D)(),
              children: "Pricing",
            }),
          });
        }
      },
      61912: (e, t, r) => {
        "use strict";
        r.d(t, { D: () => a });
        var s = r(41956);
        let a = (0, s.tv)({
          base: "tracking-tight inline font-semibold",
          variants: {
            color: {
              violet: "from-[#FF1CF7] to-[#b249f8]",
              yellow: "from-[#FF705B] to-[#FFB457]",
              blue: "from-[#5EA2EF] to-[#0072F5]",
              cyan: "from-[#00b7fa] to-[#01cfea]",
              green: "from-[#6FEE8D] to-[#17c964]",
              pink: "from-[#FF72E1] to-[#F54C7A]",
              foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
            },
            size: {
              sm: "text-3xl lg:text-4xl",
              md: "text-[2.3rem] lg:text-5xl leading-9",
              lg: "text-4xl lg:text-6xl",
            },
            fullWidth: { true: "w-full block" },
          },
          defaultVariants: { size: "md" },
          compoundVariants: [
            {
              color: [
                "violet",
                "yellow",
                "blue",
                "cyan",
                "green",
                "pink",
                "foreground",
              ],
              class: "bg-clip-text text-transparent bg-gradient-to-b",
            },
          ],
        });
        (0, s.tv)({
          base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
          variants: { fullWidth: { true: "!w-full" } },
          defaultVariants: { fullWidth: !0 },
        });
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [343, 555], () => r(31007));
  module.exports = s;
})();
