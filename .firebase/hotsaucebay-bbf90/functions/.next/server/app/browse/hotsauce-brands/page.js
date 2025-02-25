(() => {
  var e = {};
  (e.id = 509),
    (e.ids = [509]),
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
      82315: (e, a, l) => {
        "use strict";
        l.r(a),
          l.d(a, {
            GlobalError: () => n.a,
            __next_app__: () => u,
            pages: () => d,
            routeModule: () => y,
            tree: () => b,
          });
        var r = l(70260),
          s = l(28203),
          i = l(25155),
          n = l.n(i),
          t = l(67292),
          o = {};
        for (let e in t)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (o[e] = () => t[e]);
        l.d(a, o);
        let b = [
            "",
            {
              children: [
                "browse",
                {
                  children: [
                    "hotsauce-brands",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(l.bind(l, 53901)),
                            "/Users/kaspars/Desktop/hotsaucebay/app/browse/hotsauce-brands/page.tsx",
                          ],
                        },
                      ],
                    },
                    {},
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(l.bind(l, 74910)),
                    "/Users/kaspars/Desktop/hotsaucebay/app/browse/layout.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(l.bind(l, 86459)),
                "/Users/kaspars/Desktop/hotsaucebay/app/layout.tsx",
              ],
              error: [
                () => Promise.resolve().then(l.bind(l, 72627)),
                "/Users/kaspars/Desktop/hotsaucebay/app/error.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(l.t.bind(l, 19937, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          d = [
            "/Users/kaspars/Desktop/hotsaucebay/app/browse/hotsauce-brands/page.tsx",
          ],
          u = { require: l, loadChunk: () => Promise.resolve() },
          y = new r.AppPageRouteModule({
            definition: {
              kind: s.RouteKind.APP_PAGE,
              page: "/browse/hotsauce-brands/page",
              pathname: "/browse/hotsauce-brands",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: b },
          });
      },
      33833: (e, a, l) => {
        Promise.resolve().then(l.bind(l, 38892));
      },
      40457: (e, a, l) => {
        Promise.resolve().then(l.bind(l, 50046));
      },
      96487: () => {},
      78335: () => {},
      53901: (e, a, l) => {
        "use strict";
        l.r(a), l.d(a, { default: () => n });
        var r = l(62740),
          s = l(56409),
          i = l(38892);
        async function n() {
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsx)("h1", {
                className: "text-2xl",
                children: "Hotsauce Brands",
              }),
              s.H.map((e) =>
                (0, r.jsx)(
                  "div",
                  {
                    children: (0, r.jsx)(i.Link, {
                      href: `/hotsauce-brand/${e.key}`,
                      children: e.label,
                    }),
                  },
                  e.key,
                ),
              ),
            ],
          });
        }
      },
      74910: (e, a, l) => {
        "use strict";
        l.r(a), l.d(a, { default: () => s });
        var r = l(62740);
        function s({ children: e }) {
          return (0, r.jsx)("div", {
            children: (0, r.jsx)("div", {
              className: "mx-auto max-w-4xl",
              children: e,
            }),
          });
        }
      },
      56409: (e, a, l) => {
        "use strict";
        l.d(a, { H: () => r, X: () => s });
        let r = [
            { label: "States Brand", key: "states-brand" },
            { label: "Mexico Brand", key: "mexico-brand" },
            { label: "Sun Brand", key: "sun-brand" },
            { label: "Moon Brand", key: "moon-brand" },
            { label: "Super Brand", key: "super-brand" },
          ],
          s = [
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
    });
  var a = require("../../../webpack-runtime.js");
  a.C(e);
  var l = (e) => a((a.s = e)),
    r = a.X(0, [343, 555], () => l(82315));
  module.exports = r;
})();
