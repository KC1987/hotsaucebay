(() => {
  var e = {};
  (e.id = 435),
    (e.ids = [435]),
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
      55511: (e) => {
        "use strict";
        e.exports = require("crypto");
      },
      14985: (e) => {
        "use strict";
        e.exports = require("dns");
      },
      94735: (e) => {
        "use strict";
        e.exports = require("events");
      },
      29021: (e) => {
        "use strict";
        e.exports = require("fs");
      },
      81630: (e) => {
        "use strict";
        e.exports = require("http");
      },
      73496: (e) => {
        "use strict";
        e.exports = require("http2");
      },
      91645: (e) => {
        "use strict";
        e.exports = require("net");
      },
      21820: (e) => {
        "use strict";
        e.exports = require("os");
      },
      33873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      19771: (e) => {
        "use strict";
        e.exports = require("process");
      },
      27910: (e) => {
        "use strict";
        e.exports = require("stream");
      },
      34631: (e) => {
        "use strict";
        e.exports = require("tls");
      },
      79551: (e) => {
        "use strict";
        e.exports = require("url");
      },
      28354: (e) => {
        "use strict";
        e.exports = require("util");
      },
      74075: (e) => {
        "use strict";
        e.exports = require("zlib");
      },
      9103: (e, r, s) => {
        "use strict";
        s.r(r),
          s.d(r, {
            GlobalError: () => o.a,
            __next_app__: () => d,
            pages: () => c,
            routeModule: () => l,
            tree: () => n,
          });
        var t = s(70260),
          a = s(28203),
          i = s(25155),
          o = s.n(i),
          u = s(67292),
          p = {};
        for (let e in u)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (p[e] = () => u[e]);
        s.d(r, p);
        let n = [
            "",
            {
              children: [
                "hotsauce",
                {
                  children: [
                    "[slug]",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(s.bind(s, 15877)),
                            "/Users/kaspars/Desktop/hotsaucebay/app/hotsauce/[slug]/page.tsx",
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
          c = [
            "/Users/kaspars/Desktop/hotsaucebay/app/hotsauce/[slug]/page.tsx",
          ],
          d = { require: s, loadChunk: () => Promise.resolve() },
          l = new t.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/hotsauce/[slug]/page",
              pathname: "/hotsauce/[slug]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: n },
          });
      },
      96487: () => {},
      78335: () => {},
      15877: (e, r, s) => {
        "use strict";
        s.r(r), s.d(r, { default: () => o });
        var t = s(62740),
          a = s(1982),
          i = s(692);
        async function o({ params: e }) {
          let { slug: r } = await e,
            s = (0, a.rJ)(i.db, "products"),
            o = (0, a.P)(s, (0, a._M)("slug", "==", r), (0, a.AB)(1)),
            u = (await (0, a.GG)(o)).docs.map((e) => e.data())[0];
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("h1", { children: u.name }),
              (0, t.jsx)("h1", { children: u.brand.label }),
              (0, t.jsx)("h1", { children: u.url }),
              (0, t.jsx)("h1", { children: u.affLink }),
              (0, t.jsx)("h1", { children: u.bayscore }),
              (0, t.jsx)("h1", { children: u.description }),
              (0, t.jsx)("h1", { children: u.imageUrls }),
              u.categories?.map((e) =>
                t.jsx("p", { children: e.label }, e.key),
              ),
              u.countries?.map((e) => t.jsx("p", { children: e.label }, e.key)),
              u.ingredients?.map((e) =>
                t.jsx("p", { children: e.label }, e.key),
              ),
              (0, t.jsx)("h1", { children: u.shu }),
            ],
          });
        }
      },
      692: (e, r, s) => {
        "use strict";
        s.d(r, { db: () => o });
        var t = s(2618);
        s(49723);
        var a = s(1982),
          i = s(53646);
        (0, t.Wp)({
          apiKey: "AIzaSyBsqd_0aw1mnFpJQ249to-RjFsv9x-99Us",
          authDomain: "hotsaucebay-bbf90.firebaseapp.com",
          projectId: "hotsaucebay-bbf90",
          storageBucket: "hotsaucebay-bbf90.firebasestorage.app",
          messagingSenderId: "601546534110",
          appId: "1:601546534110:web:6e8af9d49cfcf922cf664f",
          measurementId: "G-Z58FCN3LXX",
        });
        let o = (0, a.aU)();
        (0, i.c7)();
      },
    });
  var r = require("../../../webpack-runtime.js");
  r.C(e);
  var s = (e) => r((r.s = e)),
    t = r.X(0, [343, 776, 555], () => s(9103));
  module.exports = t;
})();
