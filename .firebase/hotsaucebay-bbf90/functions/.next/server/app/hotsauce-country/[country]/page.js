(() => {
  var e = {};
  (e.id = 553),
    (e.ids = [553]),
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
      73579: (e, a, r) => {
        "use strict";
        r.r(a),
          r.d(a, {
            GlobalError: () => i.a,
            __next_app__: () => b,
            pages: () => c,
            routeModule: () => p,
            tree: () => u,
          });
        var s = r(70260),
          t = r(28203),
          l = r(25155),
          i = r.n(l),
          n = r(67292),
          o = {};
        for (let e in n)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (o[e] = () => n[e]);
        r.d(a, o);
        let u = [
            "",
            {
              children: [
                "hotsauce-country",
                {
                  children: [
                    "[country]",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(r.bind(r, 12613)),
                            "/Users/kaspars/Desktop/hotsaucebay/app/hotsauce-country/[country]/page.tsx",
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
          c = [
            "/Users/kaspars/Desktop/hotsaucebay/app/hotsauce-country/[country]/page.tsx",
          ],
          b = { require: r, loadChunk: () => Promise.resolve() },
          p = new s.AppPageRouteModule({
            definition: {
              kind: t.RouteKind.APP_PAGE,
              page: "/hotsauce-country/[country]/page",
              pathname: "/hotsauce-country/[country]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: u },
          });
      },
      86593: (e, a, r) => {
        Promise.resolve().then(r.bind(r, 25824));
      },
      23041: (e, a, r) => {
        Promise.resolve().then(r.bind(r, 64960));
      },
      12613: (e, a, r) => {
        "use strict";
        r.r(a), r.d(a, { default: () => o });
        var s = r(62740),
          t = r(56409),
          l = r(692),
          i = r(6499),
          n = r(1982);
        async function o({ params: e }) {
          let { country: a } = await e,
            r = t.X.find((e) => e.key === a),
            o = (0, n.rJ)(l.db, "products"),
            u = (0, n.P)(o, (0, n._M)("countries", "array-contains", r)),
            c = (await (0, n.GG)(u)).docs.map((e) => e.data());
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)("h1", {
                className: "text-2xl",
                children: ["Hotsauces from ", r.label],
              }),
              c.map((e, a) =>
                (0, s.jsx)(
                  "div",
                  { children: (0, s.jsx)(i.A, { sauce: e }) },
                  a,
                ),
              ),
            ],
          });
        }
      },
      56409: (e, a, r) => {
        "use strict";
        r.d(a, { H: () => s, X: () => t });
        let s = [
            { label: "States Brand", key: "states-brand" },
            { label: "Mexico Brand", key: "mexico-brand" },
            { label: "Sun Brand", key: "sun-brand" },
            { label: "Moon Brand", key: "moon-brand" },
            { label: "Super Brand", key: "super-brand" },
          ],
          t = [
            { label: "Mexico", key: "mexico" },
            { label: "United States", key: "united-states" },
            { label: "Thailand", key: "thailand" },
            { label: "China", key: "china" },
            { label: "Jamaica", key: "jamaica" },
            { label: "South Korea", key: "south-korea" },
            { label: "India", key: "india" },
            { label: "Malaysia", key: "malaysia" },
            { label: "Indonesia", key: "indonesia" },
            { label: "Trinidad and Tobago", key: "trinidad-and-tobago" },
            { label: "Vietnam", key: "vietnam" },
            { label: "Sri Lanka", key: "sri-lanka" },
            { label: "Peru", key: "peru" },
            { label: "Brazil", key: "brazil" },
            { label: "Hungary", key: "hungary" },
            { label: "Japan", key: "japan" },
            { label: "Singapore", key: "singapore" },
            { label: "Belize", key: "belize" },
            { label: "Ghana", key: "ghana" },
            { label: "Nigeria", key: "nigeria" },
            { label: "Philippines", key: "philippines" },
            { label: "Cambodia", key: "cambodia" },
            { label: "Morocco", key: "morocco" },
            { label: "Tunisia", key: "tunisia" },
            { label: "Ethiopia", key: "ethiopia" },
            { label: "Myanmar", key: "myanmar" },
            { label: "Laos", key: "laos" },
            { label: "Spain", key: "spain" },
            { label: "Italy", key: "italy" },
            { label: "Turkey", key: "turkey" },
            { label: "Portugal", key: "portugal" },
            { label: "South Africa", key: "south-africa" },
            { label: "Zimbabwe", key: "zimbabwe" },
            { label: "Kenya", key: "kenya" },
            { label: "Uganda", key: "uganda" },
            { label: "Barbados", key: "barbados" },
            { label: "Grenada", key: "grenada" },
            { label: "Haiti", key: "haiti" },
            { label: "Dominican Republic", key: "dominican-republic" },
            { label: "Costa Rica", key: "costa-rica" },
            { label: "Panama", key: "panama" },
            { label: "Colombia", key: "colombia" },
            { label: "Ecuador", key: "ecuador" },
            { label: "Bolivia", key: "bolivia" },
            { label: "Argentina", key: "argentina" },
            { label: "Chile", key: "chile" },
            { label: "Bhutan", key: "bhutan" },
            { label: "Nepal", key: "nepal" },
            { label: "Bangladesh", key: "bangladesh" },
            { label: "Taiwan", key: "taiwan" },
          ];
      },
      692: (e, a, r) => {
        "use strict";
        r.d(a, { db: () => i });
        var s = r(2618);
        r(49723);
        var t = r(1982),
          l = r(53646);
        (0, s.Wp)({
          apiKey: "AIzaSyBsqd_0aw1mnFpJQ249to-RjFsv9x-99Us",
          authDomain: "hotsaucebay-bbf90.firebaseapp.com",
          projectId: "hotsaucebay-bbf90",
          storageBucket: "hotsaucebay-bbf90.firebasestorage.app",
          messagingSenderId: "601546534110",
          appId: "1:601546534110:web:6e8af9d49cfcf922cf664f",
          measurementId: "G-Z58FCN3LXX",
        });
        let i = (0, t.aU)();
        (0, l.c7)();
      },
      6499: (e, a, r) => {
        "use strict";
        r.d(a, { A: () => l });
        var s = r(62740),
          t = r(25824);
        function l({ sauce: e }) {
          return (0, s.jsxs)("div", {
            className: "bg-slate-700 flex flex-row p-4 gap-4",
            children: [
              (0, s.jsx)("p", { children: e.name }),
              (0, s.jsx)("p", { children: e.brand.label }),
              (0, s.jsx)("p", { children: e.shu }),
              (0, s.jsx)("p", { children: e.bayscore }),
              e.categories?.map((e) =>
                s.jsx("p", { children: e.label }, e.key),
              ),
              e.countries?.map((e) => s.jsx("p", { children: e.label }, e.key)),
              e.ingredients?.map((e) =>
                s.jsx("p", { children: e.label }, e.key),
              ),
              (0, s.jsx)(t.Button, {
                children: (0, s.jsx)("a", {
                  href: `/hotsauce/${e.slug}`,
                  children: "Details",
                }),
              }),
              (0, s.jsx)(t.Button, {
                children: (0, s.jsx)("a", { href: e.affLink, children: "Buy" }),
              }),
            ],
          });
        }
      },
    });
  var a = require("../../../webpack-runtime.js");
  a.C(e);
  var r = (e) => a((a.s = e)),
    s = a.X(0, [343, 776, 555], () => r(73579));
  module.exports = s;
})();
