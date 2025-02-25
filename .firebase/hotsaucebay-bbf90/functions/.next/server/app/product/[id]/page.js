(() => {
  var e = {};
  (e.id = 0),
    (e.ids = [0]),
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
      82569: (e, r, s) => {
        "use strict";
        s.r(r),
          s.d(r, {
            GlobalError: () => n.a,
            __next_app__: () => l,
            pages: () => u,
            routeModule: () => c,
            tree: () => d,
          });
        var t = s(70260),
          a = s(28203),
          o = s(25155),
          n = s.n(o),
          p = s(67292),
          i = {};
        for (let e in p)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (i[e] = () => p[e]);
        s.d(r, i);
        let d = [
            "",
            {
              children: [
                "product",
                {
                  children: [
                    "[id]",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(s.bind(s, 76800)),
                            "/Users/kaspars/Desktop/hotsaucebay/app/product/[id]/page.tsx",
                          ],
                        },
                      ],
                    },
                    {},
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(s.bind(s, 86459)),
                "/Users/kaspars/Desktop/hotsaucebay/app/layout.tsx",
              ],
              error: [
                () => Promise.resolve().then(s.bind(s, 72627)),
                "/Users/kaspars/Desktop/hotsaucebay/app/error.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(s.t.bind(s, 19937, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          u = ["/Users/kaspars/Desktop/hotsaucebay/app/product/[id]/page.tsx"],
          l = { require: s, loadChunk: () => Promise.resolve() },
          c = new t.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/product/[id]/page",
              pathname: "/product/[id]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      96487: () => {},
      78335: () => {},
      76800: (e, r, s) => {
        "use strict";
        s.r(r), s.d(r, { default: () => a });
        var t = s(62740);
        async function a() {
          return (0, t.jsx)("div", {
            children: (0, t.jsx)("h1", { children: "Product" }),
          });
        }
      },
    });
  var r = require("../../../webpack-runtime.js");
  r.C(e);
  var s = (e) => r((r.s = e)),
    t = r.X(0, [343, 555], () => s(82569));
  module.exports = t;
})();
