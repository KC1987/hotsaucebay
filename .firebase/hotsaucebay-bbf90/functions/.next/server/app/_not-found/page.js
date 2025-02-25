"use strict";
(() => {
  var e = {};
  (e.id = 492),
    (e.ids = [492]),
    (e.modules = {
      10846: (e) => {
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      19121: (e) => {
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      29294: (e) => {
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      63033: (e) => {
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      33873: (e) => {
        e.exports = require("path");
      },
      41093: (e, r, t) => {
        t.r(r),
          t.d(r, {
            GlobalError: () => a.a,
            __next_app__: () => l,
            pages: () => u,
            routeModule: () => x,
            tree: () => d,
          });
        var o = t(70260),
          n = t(28203),
          s = t(25155),
          a = t.n(s),
          p = t(67292),
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
        t.d(r, i);
        let d = [
            "",
            {
              children: [
                "/_not-found",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.t.bind(t, 19937, 23)),
                        "next/dist/client/components/not-found-error",
                      ],
                    },
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(t.bind(t, 86459)),
                "/Users/kaspars/Desktop/hotsaucebay/app/layout.tsx",
              ],
              error: [
                () => Promise.resolve().then(t.bind(t, 72627)),
                "/Users/kaspars/Desktop/hotsaucebay/app/error.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(t.t.bind(t, 19937, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          u = [],
          l = { require: t, loadChunk: () => Promise.resolve() },
          x = new o.AppPageRouteModule({
            definition: {
              kind: n.RouteKind.APP_PAGE,
              page: "/_not-found/page",
              pathname: "/_not-found",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
    });
  var r = require("../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    o = r.X(0, [343, 555], () => t(41093));
  module.exports = o;
})();
