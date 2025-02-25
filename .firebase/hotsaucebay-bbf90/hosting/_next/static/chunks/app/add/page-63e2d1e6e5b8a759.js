(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [34],
  {
    4312: (e, a, l) => {
      Promise.resolve().then(l.bind(l, 2125));
    },
    2125: (e, a, l) => {
      "use strict";
      l.r(a), l.d(a, { default: () => x });
      var r = l(5155),
        t = l(2115),
        s = l(5805),
        i = l(7058),
        n = l(333),
        o = l(987),
        d = l(7962),
        c = l(6836),
        u = l(8610),
        b = l(8108),
        y = l(5396);
      let p = [
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
      var m = l(9904);
      l(6553),
        (0, m.Wp)({
          apiKey: "AIzaSyBsqd_0aw1mnFpJQ249to-RjFsv9x-99Us",
          authDomain: "hotsaucebay-bbf90.firebaseapp.com",
          projectId: "hotsaucebay-bbf90",
          storageBucket: "hotsaucebay-bbf90.firebasestorage.app",
          messagingSenderId: "601546534110",
          appId: "1:601546534110:web:6e8af9d49cfcf922cf664f",
          measurementId: "G-Z58FCN3LXX",
        });
      let g = (0, i.aU)(),
        h = (0, n.c7)(),
        k = (e) => ("all" === e ? 0 : e instanceof Set ? e.size : 0),
        f = (e) => ("all" === e ? [] : Array.from(e));
      function x() {
        let {
            addProduct: e,
            loading: a,
            error: l,
          } = (function () {
            let [e, a] = (0, t.useState)(!1),
              [l, r] = (0, t.useState)(null);
            return {
              addProduct: async (e) => {
                a(!0), r(null);
                try {
                  await (0, i.gS)((0, i.rJ)(g, "products"), e);
                } catch (e) {
                  console.error("Error adding product:", e),
                    r(e instanceof Error ? e : Error("Unknown error"));
                } finally {
                  a(!1);
                }
              },
              loading: e,
              error: l,
            };
          })(),
          [m, x] = (0, t.useState)([]),
          [S, v] = (0, t.useState)([]),
          [w, j] = (0, t.useState)([]),
          [N, C] = (0, t.useState)(new Set([])),
          [E, P] = (0, t.useState)(new Set([])),
          [A, B] = (0, t.useState)(""),
          [I, T] = (0, t.useState)(""),
          [q, z] = (0, t.useState)(""),
          [L, U] = (0, t.useState)(""),
          [H, M] = (0, t.useState)(""),
          [_, K] = (0, t.useState)(""),
          [O, R] = (0, t.useState)(""),
          [D, G] = (0, t.useState)(""),
          [J, W] = (0, t.useState)(!1),
          [F, X] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
          (async () => {
            try {
              let e = (await (0, i.GG)((0, i.rJ)(g, "ingredients"))).docs.map(
                (e) => ({ key: e.id, label: e.data().label }),
              );
              x(e);
            } catch (e) {
              console.error("Error fetching ingredients:", e);
            }
          })();
        }, []);
        let Y = async () => {
            if (!A) {
              alert("Please enter a product name before uploading images");
              return;
            }
            try {
              let e = S.map(async (e) => {
                  let a = await (0, s.A)(e, {
                      maxSizeMB: 0.5,
                      maxWidthOrHeight: 800,
                      useWebWorker: !0,
                    }),
                    l = (0, n.KR)(
                      h,
                      "images/products/".concat(A, "/").concat(e.name),
                    );
                  return await (0, n.D)(l, a), (0, n.qk)(l);
                }),
                a = await Promise.all(e);
              j(a), X(!0);
            } catch (e) {
              console.error("Error uploading images:", e),
                alert("Error uploading images. Please try again.");
            }
          },
          Z = async (a) => {
            if ((a.preventDefault(), !F)) {
              alert("Please upload images before submitting");
              return;
            }
            try {
              let a = f(E),
                l = f(N),
                r = {
                  name: A,
                  brand: I,
                  countries: a.map((e) => p.find((a) => a.key === e)),
                  shu: Number(q),
                  bayscore: Number(L),
                  url: H,
                  affLink: _,
                  dateAdded: (0, i.O5)(),
                  categories: [{ label: "Hot Sauce", key: "hotsauce" }],
                  ingredients: l.map((e) => m.find((a) => a.key === e)),
                  description: O,
                  imageUrls: w,
                  slug: D.toLowerCase().replace(/\s+/g, "-"),
                };
              await e(r), Q(), W(!0), setTimeout(() => W(!1), 2e3);
            } catch (e) {
              console.error("Error adding product:", e);
            }
          },
          Q = () => {
            B(""),
              T(""),
              z(""),
              U(""),
              M(""),
              K(""),
              R(""),
              G(""),
              v([]),
              j([]),
              P(new Set([])),
              C(new Set([])),
              X(!1);
          };
        return (0, r.jsx)("div", {
          className: "max-w-4xl mx-auto p-6",
          children: (0, r.jsxs)("div", {
            className: "flex flex-col space-y-6",
            children: [
              (0, r.jsx)("h1", {
                className: "text-3xl font-bold",
                children: "Add New Hot Sauce",
              }),
              (0, r.jsxs)("form", {
                onSubmit: Z,
                className: "space-y-6",
                children: [
                  (0, r.jsxs)("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          (0, r.jsxs)(o.A, {
                            children: [
                              (0, r.jsx)(d.b, {
                                children: (0, r.jsxs)(y.T, {
                                  variant: "bordered",
                                  className: "w-full",
                                  children: ["Select Countries (", k(E), ")"],
                                }),
                              }),
                              (0, r.jsx)(c.y, {
                                items: p,
                                closeOnSelect: !1,
                                selectedKeys: E,
                                selectionMode: "multiple",
                                onSelectionChange: P,
                                children: (e) =>
                                  (0, r.jsx)(u.Y, { children: e.label }, e.key),
                              }),
                            ],
                          }),
                          (0, r.jsxs)(o.A, {
                            children: [
                              (0, r.jsx)(d.b, {
                                children: (0, r.jsxs)(y.T, {
                                  variant: "bordered",
                                  className: "w-full",
                                  children: ["Select Ingredients (", k(N), ")"],
                                }),
                              }),
                              (0, r.jsx)(c.y, {
                                items: m,
                                closeOnSelect: !1,
                                selectedKeys: N,
                                selectionMode: "multiple",
                                onSelectionChange: C,
                                children: (e) =>
                                  (0, r.jsx)(u.Y, { children: e.label }, e.key),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          (0, r.jsx)("input", {
                            type: "text",
                            placeholder: "Name",
                            value: A,
                            onChange: (e) => {
                              B(e.target.value),
                                G(
                                  e.target.value
                                    .toLowerCase()
                                    .replace(/\s+/g, "-"),
                                );
                            },
                            className: "w-full p-2 border rounded",
                            required: !0,
                          }),
                          (0, r.jsx)("input", {
                            type: "text",
                            placeholder: "Slug",
                            value: D,
                            onChange: (e) =>
                              G(
                                e.target.value
                                  .toLowerCase()
                                  .replace(/\s+/g, "-"),
                              ),
                            className: "w-full p-2 border rounded",
                            required: !0,
                          }),
                          (0, r.jsx)("input", {
                            type: "text",
                            placeholder: "Brand",
                            value: I,
                            onChange: (e) => T(e.target.value),
                            className: "w-full p-2 border rounded",
                            required: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      (0, r.jsx)("input", {
                        type: "number",
                        placeholder: "Scoville Heat Units",
                        value: q,
                        onChange: (e) => z(e.target.value),
                        className: "p-2 border rounded",
                        required: !0,
                        min: "0",
                      }),
                      (0, r.jsx)("input", {
                        type: "number",
                        placeholder: "Bayscore Rating",
                        value: L,
                        onChange: (e) => U(e.target.value),
                        className: "p-2 border rounded",
                        required: !0,
                        min: "0",
                        max: "10",
                        step: "0.1",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                      (0, r.jsx)("input", {
                        type: "url",
                        placeholder: "Product URL",
                        value: H,
                        onChange: (e) => M(e.target.value),
                        className: "w-full p-2 border rounded",
                        required: !0,
                      }),
                      (0, r.jsx)("input", {
                        type: "url",
                        placeholder: "Affiliate Link",
                        value: _,
                        onChange: (e) => K(e.target.value),
                        className: "w-full p-2 border rounded",
                      }),
                    ],
                  }),
                  (0, r.jsx)(b.P, {
                    placeholder: "Description",
                    value: O,
                    onChange: (e) => R(e.target.value),
                    className: "w-full min-h-[100px]",
                    required: !0,
                  }),
                  (0, r.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      (0, r.jsx)("input", {
                        type: "file",
                        multiple: !0,
                        accept: "image/*",
                        onChange: (e) => {
                          e.target.files &&
                            e.target.files.length > 0 &&
                            v(Array.from(e.target.files));
                        },
                        className: "w-full",
                        required: !0,
                      }),
                      (0, r.jsx)(y.T, {
                        onPress: Y,
                        disabled: 0 === S.length || !A,
                        color: "secondary",
                        className: "w-full",
                        children: "Upload Images",
                      }),
                      F &&
                        (0, r.jsx)("p", {
                          className: "text-green-500",
                          children: "Images uploaded successfully!",
                        }),
                    ],
                  }),
                  (0, r.jsx)(y.T, {
                    type: "submit",
                    color: "primary",
                    className: "w-full",
                    disabled: a || !F,
                    children: a ? "Adding..." : "Add Hot Sauce",
                  }),
                ],
              }),
              J &&
                (0, r.jsx)("div", {
                  className:
                    "fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg",
                  children: "Product added successfully!",
                }),
              l &&
                (0, r.jsxs)("div", {
                  className:
                    "fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg",
                  children: ["Error: ", l.message],
                }),
            ],
          }),
        });
      }
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [992, 69, 396, 526, 194, 441, 517, 358], () => a(4312)),
      (_N_E = e.O());
  },
]);
