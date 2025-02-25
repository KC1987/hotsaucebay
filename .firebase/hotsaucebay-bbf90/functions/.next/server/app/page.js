(() => {
  var e = {};
  (e.id = 974),
    (e.ids = [974]),
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
      63057: (e, r, s) => {
        "use strict";
        s.r(r),
          s.d(r, {
            GlobalError: () => o.a,
            __next_app__: () => c,
            pages: () => d,
            routeModule: () => l,
            tree: () => u,
          });
        var t = s(70260),
          a = s(28203),
          i = s(25155),
          o = s.n(i),
          p = s(67292),
          n = {};
        for (let e in p)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (n[e] = () => p[e]);
        s.d(r, n);
        let u = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [
                    () => Promise.resolve().then(s.bind(s, 35104)),
                    "/Users/kaspars/Desktop/hotsaucebay/app/page.tsx",
                  ],
                },
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
          d = ["/Users/kaspars/Desktop/hotsaucebay/app/page.tsx"],
          c = { require: s, loadChunk: () => Promise.resolve() },
          l = new t.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/page",
              pathname: "/",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: u },
          });
      },
      33833: (e, r, s) => {
        Promise.resolve().then(s.bind(s, 38892));
      },
      40457: (e, r, s) => {
        Promise.resolve().then(s.bind(s, 50046));
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
      35104: (e, r, s) => {
        "use strict";
        s.r(r), s.d(r, { default: () => p });
        var t = s(62740),
          a = s(38892),
          i = s(1982),
          o = s(692);
        async function p() {
          let e = (0, i.rJ)(o.db, "products"),
            r = (await (0, i.GG)(e)).docs.map((e) => e.data());
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("h1", { children: "HotSauceBay" }),
              r.map((e, r) =>
                (0, t.jsx)(
                  "div",
                  {
                    children: (0, t.jsx)(a.Link, {
                      href: `/hotsauce/${e.slug}`,
                      children: (0, t.jsxs)("div", {
                        className: "border-solid border-2 border-gray-500 p-2",
                        children: [
                          (0, t.jsx)("img", {
                            src: e.imageUrls[0],
                            width: 300,
                            height: 200,
                            alt: "Hotsauce brand",
                          }),
                          (0, t.jsx)("h2", { children: e.name }),
                          (0, t.jsx)("p", { children: e.brand.label }),
                          (0, t.jsx)("p", { children: e.country }),
                          (0, t.jsx)("p", { children: e.rating }),
                          (0, t.jsx)("p", { children: e.hl }),
                          (0, t.jsx)("p", { children: e.url }),
                          (0, t.jsx)("p", { children: e.affLink }),
                        ],
                      }),
                    }),
                  },
                  r,
                ),
              ),
            ],
          });
        }
      },
    });
  var r = require("../webpack-runtime.js");
  r.C(e);
  var s = (e) => r((r.s = e)),
    t = r.X(0, [343, 776, 555], () => s(63057));
  module.exports = t;
})();
