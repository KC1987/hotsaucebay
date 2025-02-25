(() => {
  var e = {};
  (e.id = 741),
    (e.ids = [741]),
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
      98627: (e, r, s) => {
        "use strict";
        s.r(r),
          s.d(r, {
            GlobalError: () => o.a,
            __next_app__: () => d,
            pages: () => c,
            routeModule: () => l,
            tree: () => p,
          });
        var t = s(70260),
          a = s(28203),
          i = s(25155),
          o = s.n(i),
          n = s(67292),
          u = {};
        for (let e in n)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (u[e] = () => n[e]);
        s.d(r, u);
        let p = [
            "",
            {
              children: [
                "browse",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(s.bind(s, 76905)),
                        "/Users/kaspars/Desktop/hotsaucebay/app/browse/page.tsx",
                      ],
                    },
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(s.bind(s, 74910)),
                    "/Users/kaspars/Desktop/hotsaucebay/app/browse/layout.tsx",
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
          c = ["/Users/kaspars/Desktop/hotsaucebay/app/browse/page.tsx"],
          d = { require: s, loadChunk: () => Promise.resolve() },
          l = new t.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/browse/page",
              pathname: "/browse",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: p },
          });
      },
      12911: (e, r, s) => {
        Promise.resolve().then(s.bind(s, 25824)),
          Promise.resolve().then(s.bind(s, 38892));
      },
      72743: (e, r, s) => {
        Promise.resolve().then(s.bind(s, 64960)),
          Promise.resolve().then(s.bind(s, 50046));
      },
      96487: () => {},
      78335: () => {},
      74910: (e, r, s) => {
        "use strict";
        s.r(r), s.d(r, { default: () => a });
        var t = s(62740);
        function a({ children: e }) {
          return (0, t.jsx)("div", {
            children: (0, t.jsx)("div", {
              className: "mx-auto max-w-4xl",
              children: e,
            }),
          });
        }
      },
      76905: (e, r, s) => {
        "use strict";
        s.r(r), s.d(r, { default: () => p });
        var t = s(62740),
          a = s(1982),
          i = s(692),
          o = s(6499),
          n = s(38892);
        function u() {
          return (0, t.jsxs)("div", {
            className: "flex flex-row p-2 gap-4",
            children: [
              (0, t.jsx)(n.Link, {
                href: "/browse/hotsauce-countries",
                children: "Countries",
              }),
              (0, t.jsx)(n.Link, {
                href: "/browse/hotsauce-brands",
                children: "Brands",
              }),
              (0, t.jsx)(n.Link, {
                href: "/browse/hotsauce-bayscore",
                children: "Bayscore",
              }),
              (0, t.jsx)(n.Link, {
                href: "/browse/hotsauce-hsu",
                children: "Scoville",
              }),
            ],
          });
        }
        async function p() {
          let e = (0, a.rJ)(i.db, "products"),
            r = (await (0, a.GG)(e)).docs.map((e) => e.data());
          return (0, t.jsxs)("div", {
            className: "bg-slate-800 p-2",
            children: [
              (0, t.jsx)(u, {}),
              r.map((e, r) => (0, t.jsx)(o.A, { sauce: e }, r)),
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
      6499: (e, r, s) => {
        "use strict";
        s.d(r, { A: () => i });
        var t = s(62740),
          a = s(25824);
        function i({ sauce: e }) {
          return (0, t.jsxs)("div", {
            className: "bg-slate-700 flex flex-row p-4 gap-4",
            children: [
              (0, t.jsx)("p", { children: e.name }),
              (0, t.jsx)("p", { children: e.brand.label }),
              (0, t.jsx)("p", { children: e.shu }),
              (0, t.jsx)("p", { children: e.bayscore }),
              e.categories?.map((e) =>
                t.jsx("p", { children: e.label }, e.key),
              ),
              e.countries?.map((e) => t.jsx("p", { children: e.label }, e.key)),
              e.ingredients?.map((e) =>
                t.jsx("p", { children: e.label }, e.key),
              ),
              (0, t.jsx)(a.Button, {
                children: (0, t.jsx)("a", {
                  href: `/hotsauce/${e.slug}`,
                  children: "Details",
                }),
              }),
              (0, t.jsx)(a.Button, {
                children: (0, t.jsx)("a", { href: e.affLink, children: "Buy" }),
              }),
            ],
          });
        }
      },
    });
  var r = require("../../webpack-runtime.js");
  r.C(e);
  var s = (e) => r((r.s = e)),
    t = r.X(0, [343, 776, 555], () => s(98627));
  module.exports = t;
})();
