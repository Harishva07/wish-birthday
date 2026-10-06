const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Receiver-BmwKL-ky.js",
      "assets/vendor-core-CjvpFyCc.js",
      "assets/vendor-three-BgEEYt64.js",
      "assets/storageService-Bwr1h56U.js",
      "assets/constants-DMfe1hbA.js",
      "assets/FlowerR3F-Dw1qhCu7.js",
      "assets/index-DBifMb9v.js",
      "assets/index-J5xXwUMm.css",
    ]),
) => i.map((i) => d[i]);
import {
  y as we,
  r as i,
  j as e,
  P as A,
  G as ve,
  e as K,
  T as ee,
  _ as je,
} from "./vendor-core-CjvpFyCc.js";
import { C as ye, G as Ne, F as ke } from "./FlowerR3F-Dw1qhCu7.js";
import { C as c, a as d } from "./constants-DMfe1hbA.js";
import { m as Ce, g as Ee, u as O } from "./storageService-Bwr1h56U.js";
import {
  p as Ae,
  c as Me,
  M as Se,
  a as Fe,
} from "./voiceRecording-BevSZB17.js";
import {
  u as Be,
  S as te,
  C as se,
  L as Pe,
  B as M,
} from "./index-DBifMb9v.js";
import { Landing3D as ae } from "./Landing3D-Ca8fQAch.js";
import { c as Re } from "./payment-DCp410TM.js";
import "./vendor-three-BgEEYt64.js";
const Te = 512 * 1024,
  re = 1280,
  _e = [
    { maxEdge: re, quality: 0.82 },
    { maxEdge: re, quality: 0.74 },
    { maxEdge: 1120, quality: 0.72 },
    { maxEdge: 960, quality: 0.68 },
    { maxEdge: 800, quality: 0.62 },
    { maxEdge: 640, quality: 0.58 },
  ],
  We = (x) =>
    new Promise((g, r) => {
      const h = URL.createObjectURL(x),
        m = new Image();
      ((m.onload = () => {
        (URL.revokeObjectURL(h), g(m));
      }),
        (m.onerror = () => {
          (URL.revokeObjectURL(h),
            r(
              new Error("The selected image could not be prepared for upload."),
            ));
        }),
        (m.src = h));
    }),
  ze = () =>
    document
      .createElement("canvas")
      .toDataURL("image/webp")
      .startsWith("data:image/webp"),
  Le = (x, g, r) =>
    new Promise((h, m) => {
      x.toBlob(
        (p) => {
          p
            ? h(p)
            : m(new Error("The selected image could not be compressed."));
        },
        g,
        r,
      );
    }),
  De = (x, g) => {
    const r = x.naturalWidth || x.width,
      h = x.naturalHeight || x.height,
      m = Math.min(1, g / Math.max(r, h)),
      p = Math.max(1, Math.round(r * m)),
      b = Math.max(1, Math.round(h * m)),
      u = document.createElement("canvas"),
      f = u.getContext("2d");
    if (!f)
      throw new Error("Image compression is unavailable in this browser.");
    return (
      (u.width = p),
      (u.height = b),
      (f.fillStyle = "#ffffff"),
      f.fillRect(0, 0, p, b),
      f.drawImage(x, 0, 0, p, b),
      u
    );
  },
  Oe = async (x) => {
    const g = await We(x),
      r = ze() ? "image/webp" : "image/jpeg";
    let h = null;
    for (const b of _e) {
      const u = De(g, b.maxEdge),
        f = await Le(u, r, b.quality);
      if (((!h || f.size < h.size) && (h = f), f.size <= Te)) {
        h = f;
        break;
      }
    }
    if (!h) throw new Error("The selected image could not be compressed.");
    const m = x.name.replace(/\.[^/.]+$/, "") || "card-photo",
      p = r === "image/webp" ? "webp" : "jpg";
    return new File([h], `${m}.${p}`, { type: r, lastModified: Date.now() });
  },
  Ue = i.lazy(() =>
    je(
      () => import("./Receiver-BmwKL-ky.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
    ).then((x) => ({ default: x.Receiver })),
  ),
  le = {
    short: [
      "Wishing you a day filled with endless joy, beautiful moments, and all the love your heart can hold.",
      "Happy Birthday! Hope your special day brings you as much happiness as you bring to everyone around you.",
      "Wishing you a spectacular year ahead filled with love, laughter, and incredible success!",
    ],
    emotional: [
      "Through all the laughs and tears, you've been my rock. I'm so incredibly grateful to have you in my life. Have the most beautiful birthday!",
      "You deserve the absolute best today and every day. Thank you for being such an inspiring and loving presence in my world.",
      "On your special day, I just want to remind you of how much you mean to me and everyone around you. You are a treasure.",
    ],
    funny: [
      "Happy Birthday! You're not getting older... just more distinguished (and possibly a bit more forgetful)!",
      "Another year of surviving my jokes. You deserve a medal... or at least a really big slice of cake!",
      "Happy Birthday! Let's eat cake, drink some champagne, and celebrate you being another year wiser (or at least older)!",
    ],
    blessing: [
      "May this year bring you wisdom, good health, and peace of mind. Wishing you abundant blessings on your birthday.",
      "May the road ahead be paved with happiness and success. God bless you on this special day.",
      "Praying that your day is as bright and wonderful as your spirit. Happy Birthday and many blessings!",
    ],
  },
  Ie = [
    {
      id: "luxury",
      label: "Luxury",
      premium: !0,
      color: "from-[#ebd09e] to-[#c39130]",
    },
    {
      id: "cute",
      label: "Cute",
      premium: !1,
      color: "from-[#FF9A9E] to-[#FECFEF]",
    },
    {
      id: "minimal",
      label: "Minimal",
      premium: !1,
      color: "from-[#EAEAEA] to-[#CCCCCC]",
    },
    {
      id: "floral",
      label: "Floral",
      premium: !1,
      color: "from-[#8FBC8F] to-[#556B2F]",
    },
    {
      id: "romantic",
      label: "Romantic",
      premium: !1,
      color: "from-[#E52D27] to-[#B31217]",
    },
  ],
  Ge = {
    [c.CLASSIC]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className:
        "w-12 h-12 text-amber-300/80 drop-shadow-[0_0_8px_rgba(253,244,227,0.3)]",
      children: [
        e.jsx("rect", {
          x: "38",
          y: "24",
          width: "44",
          height: "72",
          rx: "8",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
        e.jsx("circle", {
          cx: "60",
          cy: "60",
          r: "12",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeDasharray: "3 3",
        }),
        e.jsx("path", { d: "M60 42 l2 2 -2 2 -2-2 z", fill: "currentColor" }),
        e.jsx("path", { d: "M60 72 l2 2 -2 2 -2-2 z", fill: "currentColor" }),
      ],
    }),
    [c.MODERN]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className:
        "w-12 h-12 text-indigo-400/80 drop-shadow-[0_0_8px_rgba(129,140,248,0.3)]",
      children: [
        e.jsx("rect", {
          x: "34",
          y: "34",
          width: "44",
          height: "62",
          rx: "6",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
        e.jsx("rect", {
          x: "44",
          y: "24",
          width: "44",
          height: "62",
          rx: "6",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          opacity: "0.6",
        }),
      ],
    }),
    [c.GRAND]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className:
        "w-12 h-12 text-pink-400/80 drop-shadow-[0_0_8px_rgba(244,114,182,0.3)]",
      children: [
        e.jsx("polygon", {
          points: "60,20 88,32 100,60 88,88 60,100 32,88 20,60 32,32",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
        e.jsx("polygon", {
          points: "60,28 82,38 92,60 82,82 60,92 38,82 28,60 38,38",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1",
          opacity: "0.6",
        }),
      ],
    }),
    [c.HEART]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className:
        "w-12 h-12 text-red-400/80 drop-shadow-[0_0_8px_rgba(248,113,113,0.3)]",
      children: [
        e.jsx("path", {
          d: "M60 35 C50 20, 25 20, 25 45 C25 70, 60 95, 60 95 C60 95, 95 70, 95 45 C95 20, 70 20, 60 35 Z",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
        e.jsx("path", {
          d: "M60 45 C53 32, 35 32, 35 50 C35 68, 60 85, 60 85 C60 85, 85 68, 85 50 C85 32, 67 32, 60 45 Z",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1",
          opacity: "0.5",
        }),
      ],
    }),
    [c.HEXAGON]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className:
        "w-12 h-12 text-blue-400/80 drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]",
      children: [
        e.jsx("polygon", {
          points: "60,20 95,40 95,80 60,100 25,80 25,40",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
        e.jsx("polygon", {
          points: "60,28 88,44 88,76 60,92 32,76 32,44",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.2",
          opacity: "0.6",
        }),
      ],
    }),
    [c.TIERED_SQUARE]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className:
        "w-12 h-12 text-amber-400/80 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]",
      children: [
        e.jsx("rect", {
          x: "30",
          y: "70",
          width: "60",
          height: "24",
          rx: "4",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
        e.jsx("rect", {
          x: "40",
          y: "46",
          width: "40",
          height: "24",
          rx: "3",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
        e.jsx("rect", {
          x: "50",
          y: "26",
          width: "20",
          height: "20",
          rx: "2",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
      ],
    }),
    [c.BUNDT]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className:
        "w-12 h-12 text-purple-400/80 drop-shadow-[0_0_8px_rgba(192,132,252,0.3)]",
      children: [
        e.jsx("circle", {
          cx: "60",
          cy: "60",
          r: "38",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
        e.jsx("circle", {
          cx: "60",
          cy: "60",
          r: "14",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
        }),
        e.jsx("path", {
          d: "M60 22 L60 46 M60 74 L60 98 M22 60 L46 60 M74 60 L98 60",
          stroke: "currentColor",
          strokeWidth: "1.5",
          opacity: "0.6",
        }),
      ],
    }),
    [c.PILLOW]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className:
        "w-12 h-12 text-violet-400/80 drop-shadow-[0_0_8px_rgba(167,139,250,0.3)]",
      children: [
        e.jsx("path", {
          d: "M 30,30 C 50,26 70,26 90,30 C 94,50 94,70 90,90 C 70,94 50,94 30,90 C 26,70 26,50 30,30 Z",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
        e.jsx("path", {
          d: "M 40,40 C 50,38 70,38 80,40 C 82,50 82,70 80,80 C 70,82 50,82 40,80 C 38,70 38,50 40,40 Z",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1",
          opacity: "0.5",
        }),
      ],
    }),
    [c.SPHERE]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className:
        "w-12 h-12 text-teal-400/80 drop-shadow-[0_0_8px_rgba(45,212,191,0.3)]",
      children: [
        e.jsx("circle", {
          cx: "60",
          cy: "60",
          r: "38",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
        e.jsx("path", {
          d: "M 38,38 A 20,20 0 0,1 68,26",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          opacity: "0.6",
          strokeLinecap: "round",
        }),
      ],
    }),
    [c.TOWER]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className:
        "w-12 h-12 text-orange-400/80 drop-shadow-[0_0_8px_rgba(251,146,60,0.3)]",
      children: [
        e.jsx("rect", {
          x: "25",
          y: "78",
          width: "70",
          height: "18",
          rx: "3",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
        e.jsx("rect", {
          x: "35",
          y: "58",
          width: "50",
          height: "18",
          rx: "3",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
        e.jsx("rect", {
          x: "45",
          y: "38",
          width: "30",
          height: "18",
          rx: "2",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
        e.jsx("rect", {
          x: "53",
          y: "20",
          width: "14",
          height: "16",
          rx: "1.5",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
      ],
    }),
  },
  $e = {
    [d.VANILLA]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className: "w-12 h-12",
      children: [
        e.jsx("path", {
          d: "M60 40 C65 20, 80 30, 75 45 C70 60, 60 55, 60 55 C60 55, 50 60, 45 45 C40 30, 55 20, 60 40 Z",
          fill: "#FDF4E3",
          stroke: "#D8A23B",
          strokeWidth: "1",
        }),
        e.jsx("path", {
          d: "M60 70 C75 80, 85 65, 75 55 C65 45, 60 55, 60 55 C60 55, 60 45, 50 55 C40 65, 45 80, 60 70 Z",
          fill: "#FDF4E3",
          stroke: "#D8A23B",
          strokeWidth: "1",
        }),
        e.jsx("path", {
          d: "M60 55 C60 55, 75 40, 85 50 C95 60, 80 75, 60 55 Z",
          fill: "#FDF4E3",
          stroke: "#D8A23B",
          strokeWidth: "1",
          opacity: "0.9",
        }),
        e.jsx("path", {
          d: "M60 55 C60 55, 45 40, 35 50 C25 60, 40 75, 60 55 Z",
          fill: "#FDF4E3",
          stroke: "#D8A23B",
          strokeWidth: "1",
          opacity: "0.9",
        }),
        e.jsx("path", {
          d: "M35 85 C55 80, 80 85, 90 70",
          fill: "none",
          stroke: "#5C3A21",
          strokeWidth: "2.5",
          strokeLinecap: "round",
        }),
        e.jsx("circle", { cx: "60", cy: "55", r: "3", fill: "#D8A23B" }),
      ],
    }),
    [d.CHOCOLATE]: e.jsx("svg", {
      viewBox: "0 0 120 120",
      className: "w-12 h-12",
      children: e.jsxs("g", {
        transform: "rotate(-15 60 60)",
        children: [
          e.jsx("rect", {
            x: "35",
            y: "35",
            width: "50",
            height: "40",
            rx: "4",
            fill: "#5D4037",
            stroke: "#3E2723",
            strokeWidth: "1.5",
          }),
          e.jsx("rect", {
            x: "40",
            y: "40",
            width: "18",
            height: "12",
            rx: "1",
            fill: "#4E342E",
          }),
          e.jsx("rect", {
            x: "62",
            y: "40",
            width: "18",
            height: "12",
            rx: "1",
            fill: "#4E342E",
          }),
          e.jsx("rect", {
            x: "40",
            y: "58",
            width: "18",
            height: "12",
            rx: "1",
            fill: "#4E342E",
          }),
          e.jsx("rect", {
            x: "62",
            y: "58",
            width: "18",
            height: "12",
            rx: "1",
            fill: "#4E342E",
          }),
        ],
      }),
    }),
    [d.STRAWBERRY]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className: "w-12 h-12",
      children: [
        e.jsx("path", {
          d: "M60 25 C75 25, 85 35, 85 55 C85 75, 65 95, 60 95 C55 95, 35 75, 35 55 C35 35, 45 25, 60 25 Z",
          fill: "#E11D48",
        }),
        e.jsx("circle", { cx: "50", cy: "40", r: "1", fill: "#FBBF24" }),
        e.jsx("circle", { cx: "70", cy: "40", r: "1", fill: "#FBBF24" }),
        e.jsx("circle", { cx: "60", cy: "50", r: "1", fill: "#FBBF24" }),
        e.jsx("circle", { cx: "45", cy: "58", r: "1", fill: "#FBBF24" }),
        e.jsx("circle", { cx: "75", cy: "58", r: "1", fill: "#FBBF24" }),
        e.jsx("circle", { cx: "60", cy: "70", r: "1", fill: "#FBBF24" }),
        e.jsx("path", {
          d: "M60 28 C57 18, 50 20, 48 24 C53 25, 57 26, 60 28 Z",
          fill: "#16A34A",
        }),
        e.jsx("path", {
          d: "M60 28 C63 18, 70 20, 72 24 C67 25, 63 26, 60 28 Z",
          fill: "#16A34A",
        }),
      ],
    }),
    [d.RED_VELVET]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className: "w-12 h-12",
      children: [
        e.jsx("polygon", {
          points: "30,75 80,90 90,50 40,35",
          fill: "#991B1B",
        }),
        e.jsx("line", {
          x1: "33",
          y1: "62",
          x2: "83",
          y2: "77",
          stroke: "#F8FAFC",
          strokeWidth: "2.5",
        }),
        e.jsx("line", {
          x1: "37",
          y1: "48",
          x2: "87",
          y2: "63",
          stroke: "#F8FAFC",
          strokeWidth: "2.5",
        }),
        e.jsx("path", {
          d: "M 40,35 Q 65,30 90,50 L 80,90 Q 55,75 30,75 Z",
          fill: "none",
          stroke: "#F8FAFC",
          strokeWidth: "3",
        }),
      ],
    }),
    [d.LEMON]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className: "w-12 h-12",
      children: [
        e.jsx("circle", { cx: "60", cy: "60", r: "32", fill: "#FACC15" }),
        e.jsx("circle", { cx: "60", cy: "60", r: "27", fill: "#FEF08A" }),
        e.jsx("circle", { cx: "60", cy: "60", r: "2.5", fill: "#FACC15" }),
        [...Array(8)].map((x, g) => {
          const r = (g * 45 * Math.PI) / 180;
          return e.jsx(
            "line",
            {
              x1: "60",
              y1: "60",
              x2: 60 + 27 * Math.cos(r),
              y2: 60 + 27 * Math.sin(r),
              stroke: "#FACC15",
              strokeWidth: "1.5",
            },
            g,
          );
        }),
      ],
    }),
    [d.MINT]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className: "w-12 h-12",
      children: [
        e.jsxs("g", {
          transform: "rotate(-20 60 60)",
          children: [
            e.jsx("path", {
              d: "M60 75 C40 70, 30 50, 60 25 C90 50, 80 70, 60 75 Z",
              fill: "#22C55E",
              stroke: "#16A34A",
              strokeWidth: "1",
            }),
            e.jsx("path", {
              d: "M60 25 L60 75",
              stroke: "#15803D",
              strokeWidth: "1",
            }),
          ],
        }),
        e.jsx("g", {
          transform: "rotate(30 75 75) scale(0.7) translate(20, 10)",
          children: e.jsx("path", {
            d: "M60 75 C40 70, 30 50, 60 25 C90 50, 80 70, 60 75 Z",
            fill: "#4ADE80",
            stroke: "#16A34A",
            strokeWidth: "1",
          }),
        }),
      ],
    }),
    [d.BLUEBERRY]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className: "w-12 h-12",
      children: [
        e.jsx("circle", {
          cx: "48",
          cy: "65",
          r: "16",
          fill: "#1E3A8A",
          stroke: "#1E40AF",
          strokeWidth: "1",
        }),
        e.jsx("circle", {
          cx: "72",
          cy: "65",
          r: "16",
          fill: "#1E3A8A",
          stroke: "#1E40AF",
          strokeWidth: "1",
        }),
        e.jsx("circle", {
          cx: "60",
          cy: "75",
          r: "18",
          fill: "#1D4ED8",
          stroke: "#1E40AF",
          strokeWidth: "1",
        }),
        e.jsx("path", {
          d: "M54 66 C56 63, 64 63, 66 66",
          fill: "none",
          stroke: "#60A5FA",
          strokeWidth: "1.5",
        }),
      ],
    }),
    [d.CARAMEL]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className: "w-12 h-12",
      children: [
        e.jsxs("g", {
          transform: "translate(10, 15)",
          children: [
            e.jsx("polygon", {
              points: "25,50 50,55 50,72 25,67",
              fill: "#B45309",
            }),
            e.jsx("polygon", {
              points: "50,55 70,45 70,62 50,72",
              fill: "#92400E",
            }),
            e.jsx("polygon", {
              points: "25,50 45,40 70,45 50,55",
              fill: "#D97706",
            }),
          ],
        }),
        e.jsxs("g", {
          transform: "translate(30, 2)",
          children: [
            e.jsx("polygon", {
              points: "25,50 50,55 50,72 25,67",
              fill: "#D97706",
            }),
            e.jsx("polygon", {
              points: "50,55 70,45 70,62 50,72",
              fill: "#B45309",
            }),
            e.jsx("polygon", {
              points: "25,50 45,40 70,45 50,55",
              fill: "#F59E0B",
            }),
          ],
        }),
      ],
    }),
    [d.COFFEE]: e.jsxs("svg", {
      viewBox: "0 0 120 120",
      className: "w-12 h-12",
      children: [
        e.jsxs("g", {
          transform: "rotate(-30 45 60)",
          children: [
            e.jsx("ellipse", {
              cx: "45",
              cy: "60",
              rx: "14",
              ry: "24",
              fill: "#4E342E",
              stroke: "#3E2723",
              strokeWidth: "1",
            }),
            e.jsx("path", {
              d: "M 45,36 C 47,45 43,75 45,84",
              fill: "none",
              stroke: "#271714",
              strokeWidth: "1.5",
            }),
          ],
        }),
        e.jsxs("g", {
          transform: "rotate(40 75 65) scale(0.9)",
          children: [
            e.jsx("ellipse", {
              cx: "75",
              cy: "65",
              rx: "14",
              ry: "24",
              fill: "#5D4037",
              stroke: "#3E2723",
              strokeWidth: "1",
            }),
            e.jsx("path", {
              d: "M 75,41 C 77,50 73,80 75,89",
              fill: "none",
              stroke: "#271714",
              strokeWidth: "1.5",
            }),
          ],
        }),
      ],
    }),
    [d.PISTACHIO]: e.jsx("svg", {
      viewBox: "0 0 120 120",
      className: "w-12 h-12",
      children: e.jsxs("g", {
        transform: "rotate(-15 60 60)",
        children: [
          e.jsx("path", {
            d: "M35 60 C35 40, 55 35, 60 65 C55 85, 35 78, 35 60 Z",
            fill: "#EED9B3",
            stroke: "#D1B894",
            strokeWidth: "1.2",
          }),
          e.jsx("ellipse", {
            cx: "60",
            cy: "60",
            rx: "12",
            ry: "18",
            fill: "#84CC16",
          }),
          e.jsx("path", {
            d: "M85 60 C85 40, 65 35, 60 65 C65 85, 85 78, 85 60 Z",
            fill: "#EED9B3",
            stroke: "#D1B894",
            strokeWidth: "1.2",
          }),
        ],
      }),
    }),
  },
  Ye = {
    [c.CLASSIC]: {
      label: "Classic",
      subtitle: "Timeless elegance",
      glowClass: "glow-pink",
    },
    [c.MODERN]: {
      label: "Modern",
      subtitle: "Clean & minimal",
      glowClass: "glow-blue",
    },
    [c.GRAND]: {
      label: "Grand",
      subtitle: "Majestic presence",
      glowClass: "glow-rose",
    },
    [c.HEART]: {
      label: "Heart",
      subtitle: "Romantic design",
      glowClass: "glow-rose",
    },
    [c.HEXAGON]: {
      label: "Hexagon",
      subtitle: "Geometric symmetry",
      glowClass: "glow-purple",
    },
    [c.TIERED_SQUARE]: {
      label: "Tiered Sq.",
      subtitle: "Bold layers",
      glowClass: "glow-gold",
    },
    [c.BUNDT]: {
      label: "Bundt",
      subtitle: "Artisanal shape",
      glowClass: "glow-purple",
    },
    [c.PILLOW]: {
      label: "Pillow",
      subtitle: "Soft contours",
      glowClass: "glow-purple",
    },
    [c.SPHERE]: {
      label: "Sphere",
      subtitle: "Perfect curves",
      glowClass: "glow-blue",
    },
    [c.TOWER]: {
      label: "Tower",
      subtitle: "Grand celebration",
      glowClass: "glow-gold",
    },
  },
  Ve = {
    [d.VANILLA]: {
      label: "Vanilla",
      subtitle: "Sweet orchid bean",
      glowClass: "glow-gold",
    },
    [d.CHOCOLATE]: {
      label: "Chocolate",
      subtitle: "Rich cocoa velvet",
      glowClass: "glow-gold",
    },
    [d.STRAWBERRY]: {
      label: "Strawberry",
      subtitle: "Fresh summer berry",
      glowClass: "glow-rose",
    },
    [d.RED_VELVET]: {
      label: "Red Velvet",
      subtitle: "Royal crimson",
      glowClass: "glow-rose",
    },
    [d.LEMON]: {
      label: "Lemon",
      subtitle: "Zesty citrus spark",
      glowClass: "glow-gold",
    },
    [d.MINT]: {
      label: "Mint",
      subtitle: "Cool garden breeze",
      glowClass: "glow-blue",
    },
    [d.BLUEBERRY]: {
      label: "Blueberry",
      subtitle: "Wild indigo nectar",
      glowClass: "glow-blue",
    },
    [d.CARAMEL]: {
      label: "Caramel",
      subtitle: "Warm buttery drizzle",
      glowClass: "glow-gold",
    },
    [d.COFFEE]: {
      label: "Coffee",
      subtitle: "Robust espresso",
      glowClass: "glow-gold",
    },
    [d.PISTACHIO]: {
      label: "Pistachio",
      subtitle: "Earthy roasted nut",
      glowClass: "glow-blue",
    },
  },
  He = ({ children: x, device: g = "desktop" }) => {
    const r = i.useRef(null),
      [h, m] = i.useState(1),
      p = i.useMemo(() => {
        switch (g) {
          case "tablet":
            return { width: 768, height: 768 };
          case "mobile":
            return { width: 360, height: 640 };
          case "desktop":
          default:
            return { width: 1200, height: 720 };
        }
      }, [g]);
    return (
      i.useEffect(() => {
        if (!r.current) return;
        const b = () => {
          if (!r.current) return;
          const f = r.current.offsetWidth || 0;
          m(Math.min(f / p.width, 1));
        };
        b();
        const u = new ResizeObserver(b);
        return (
          u.observe(r.current),
          window.addEventListener("resize", b),
          () => {
            (u.disconnect(), window.removeEventListener("resize", b));
          }
        );
      }, [p]),
      e.jsx("div", {
        ref: r,
        className:
          "w-full relative overflow-hidden flex items-center justify-center rounded-2xl bg-black/20",
        style: { height: `${p.height * h}px` },
        children: e.jsx("div", {
          className:
            "absolute origin-center transition-all duration-500 ease-out",
          style: {
            width: `${p.width}px`,
            height: `${p.height}px`,
            transform: `scale(${h})`,
          },
          children: x,
        }),
      })
    );
  },
  at = () => {
    var q, X, Q, J;
    const x = we(),
      g = Be(),
      [r, h] = i.useState(1),
      [m, p] = i.useState("voice"),
      [b, u] = i.useState(""),
      [f, U] = i.useState(!1),
      [ie, F] = i.useState(!1),
      [oe, B] = i.useState(!1),
      [I, ne] = i.useState("desktop"),
      [G, ce] = i.useState("short"),
      [v, $] = i.useState(null),
      [S, P] = i.useState(null),
      [R, T] = i.useState(null),
      [Y, V] = i.useState(!1),
      [k, H] = i.useState(!1),
      [de, _] = i.useState(0),
      W = i.useRef(null),
      z = i.useRef([]),
      L = i.useRef(null),
      [s, j] = i.useState({
        senderName: "",
        receiverName: "",
        introMessage: "Take a deep breath and open your gift...",
        personalNote: "I'm so grateful for you.",
        finalMessage: "Friendship is the best gift!",
        cakeFlavor: d.VANILLA,
        cakeStyle: c.CLASSIC,
        candleCount: 1,
        songUrl: "",
        voiceMessageUrl: "",
        cardMessage:
          "Wishing you a day filled with endless joy, beautiful moments, and all the love your heart can hold.",
        cardPhotoBase64: "",
        cardPhotoX: 50,
        cardPhotoY: 50,
        cardStyle: "luxury",
        recipientGender: "male",
        flowerType: "rose",
        flowerColor: "#ff3388",
        wheelOptions: [
          "A big warm hug 🫂",
          "Dinner is on me 🍕",
          "Movie night 🎬",
          "A coffee date ☕",
          "Your favorite dessert 🍦",
        ],
      }),
      [xe, he] = i.useState(s.receiverName || "");
    const deferredCandles = i.useDeferredValue(s.candleCount || 1);
    i.useEffect(() => {
      const t = setTimeout(() => {
        he(s.receiverName || "");
      }, 400);
      return () => clearTimeout(t);
    }, [s.receiverName]);
    const o = (t, a) => {
        j((l) => ({ ...l, [t]: a }));
      },
      me = (t, a) => {
        const l = [...(s.wheelOptions || [])];
        ((l[t] = a), j((n) => ({ ...n, wheelOptions: l })));
      },
      C = () => h((t) => t + 1),
      E = () => h((t) => t - 1),
      pe = (t) => {
        var l, n;
        const a = (l = t.target.files) == null ? void 0 : l[0];
        if (a) {
          if (!((n = Ce(a)) != null && n.startsWith("audio/"))) {
            u(
              "Please upload an audio file only (MP3, WAV, OGG, M4A, AAC, FLAC).",
            );
            return;
          }
          if (a.size > 10 * 1024 * 1024) {
            u("File is too large. Please keep it under 10MB.");
            return;
          }
          ($(a), j((y) => ({ ...y, songUrl: a.name })), u(""));
        }
      },
      ue = async (t) => {
        var l;
        const a = (l = t.target.files) == null ? void 0 : l[0];
        if (((t.target.value = ""), !!a)) {
          if (a.size > 10 * 1024 * 1024) {
            alert("Please select an image smaller than 10MB.");
            return;
          }
          (V(!0), u(""));
          try {
            const n = await Oe(a);
            T(n);
            const y = new FileReader();
            ((y.onload = (w) => {
              var N;
              o("cardPhotoBase64", (N = w.target) == null ? void 0 : N.result);
            }),
              y.readAsDataURL(n));
          } catch (n) {
            (console.error("Card photo compression failed:", n),
              T(null),
              u(
                "This photo could not be prepared. Please choose a JPG, PNG, or WebP image.",
              ));
          } finally {
            V(!1);
          }
        }
      },
      ge = async () => {
        try {
          const t = await navigator.mediaDevices.getUserMedia({ audio: !0 }),
            a = Ae(),
            l = Me(t, a);
          ((W.current = l),
            (z.current = []),
            (l.ondataavailable = (n) => {
              n.data.size > 0 && z.current.push(n.data);
            }),
            (l.onstop = () => {
              const n = new Blob(z.current, { type: a });
              if (n.size > Se) {
                (P(null),
                  j((w) => ({ ...w, voiceMessageUrl: "" })),
                  u("Voice message is too large. Please keep it under 10MB."),
                  t.getTracks().forEach((w) => w.stop()));
                return;
              }
              P(n);
              const y = URL.createObjectURL(n);
              (j((w) => ({ ...w, voiceMessageUrl: y })),
                t.getTracks().forEach((w) => w.stop()));
            }),
            l.start(),
            H(!0),
            _(0),
            (L.current = window.setInterval(() => {
              _((n) => (n >= Fe ? (Z(), Fe) : n + 1));
            }, 1e3)));
        } catch (t) {
          (console.error("Error accessing microphone:", t),
            u("Could not access microphone. Please enable permissions."));
        }
      },
      Z = () => {
        W.current &&
          k &&
          (W.current.stop(), H(!1), L.current && clearInterval(L.current));
      },
      fe = () => {
        (j((t) => ({ ...t, voiceMessageUrl: "" })), P(null), _(0));
      },
      be = async () => {
        if (g) {
          alert(
            "Wishprise is temporarily under maintenance for new surprises. Please check back shortly! All existing created links are fully active.",
          );
          return;
        }
        U(!0);
        const t = Ee();
        try {
          let a = s.songUrl || "",
            l = "",
            n = "";
          if (v) {
            const N = `drafts/${t}/song/${v.name}`;
            a = await O(v, N);
          }
          if (S) {
            const N = S.type.includes("mp4") ? "mp4" : "webm",
              D = `drafts/${t}/voice/message.${N}`;
            l = await O(S, D);
          }
          if (R) {
            const N = R.name.split(".").pop() || "png",
              D = `drafts/${t}/card/photo.${N}`;
            n = await O(R, D);
          }
          const y = {
              ...s,
              id: t,
              songUrl: a,
              voiceMessageUrl: l,
              cardPhotoBase64: n || s.cardPhotoBase64 || "",
              createdAt: Date.now(),
            },
            w = await Re(t, y, { song: a, voice: l, card: n });
          x(`/share/${t}`);
        } catch (a) {
          console.error(a);
          try {
            alert("Couldn't save your surprise. Please try again."); window.hasSaveError = true;
          } catch (e) {}
          U(!1);
        }
      };
    return g
      ? e.jsxs("div", {
          className:
            "min-h-screen bg-slate-950 font-sans text-slate-300 flex flex-col items-center justify-center p-6 relative overflow-hidden",
          children: [
            e.jsx(te, {
              title: "Surprise Creation Paused | Wishprise",
              description:
                "New surprise creation is temporarily paused for maintenance. Existing created links remain fully active.",
              path: "/create",
              noindex: !0,
            }),
            e.jsxs("div", {
              className: "fixed inset-0 z-0 pointer-events-none",
              children: [
                e.jsx("div", { className: "absolute inset-0 bg-slate-950" }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-b from-purple-900/20 via-slate-950/80 to-slate-950 z-10",
                }),
                e.jsx(ae, {}),
              ],
            }),
            e.jsxs("div", {
              className:
                "relative z-10 max-w-md w-full text-center p-8 sm:p-10 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.6)] animate-fade-in",
              children: [
                e.jsx("div", {
                  className:
                    "w-16 h-16 mx-auto mb-6 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(245,158,11,0.2)]",
                  children: "🔧",
                }),
                e.jsx("p", {
                  className:
                    "text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400 mb-2",
                  children: "Maintenance in Progress",
                }),
                e.jsx("h1", {
                  className: "text-2xl sm:text-3xl font-serif text-white mb-4",
                  children: "Surprise Creation Paused",
                }),
                e.jsx("p", {
                  className: "text-slate-300 text-sm leading-relaxed mb-6",
                  children:
                    "We are currently performing scheduled maintenance on new surprise creations. Please check back shortly!",
                }),
                e.jsxs("div", {
                  className:
                    "p-3.5 mb-8 rounded-xl bg-amber-500/10 border border-amber-400/20 text-xs text-amber-200",
                  children: [
                    "✨ ",
                    e.jsx("strong", {
                      children:
                        "All existing created links are fully active and unaffected.",
                    }),
                  ],
                }),
                e.jsx("button", {
                  onClick: () => x("/"),
                  className:
                    "w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-magical-600 to-pink-500 text-white font-bold text-sm shadow-lg hover:shadow-magical-500/25 transition-all active:scale-95",
                  children: "← Return to Home",
                }),
              ],
            }),
          ],
        })
      : e.jsxs("div", {
          className:
            "min-h-screen bg-slate-950 font-sans text-slate-300 flex flex-col overflow-x-hidden scroll-smooth",
          children: [
            f &&
              e.jsx("div", {
                className:
                  "fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center",
                children: e.jsx(se, {}),
              }),
            e.jsx(te, {
              title: "Create a Magical 3D Birthday Surprise",
              description:
                "Create your own 3D birthday wish! Personalized animations, custom cakes, and music in seconds. The #1 free birthday surprise online maker with no login required.",
              path: "/create",
              schemaType: "SoftwareApplication",
            }),
            e.jsxs("div", {
              className: "fixed inset-0 z-0 pointer-events-none",
              children: [
                e.jsx("div", { className: "absolute inset-0 bg-slate-950" }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-b from-purple-900/20 via-slate-950/80 to-slate-950 z-10",
                }),
                e.jsx(ae, {}),
              ],
            }),
            e.jsxs("div", {
              className: `flex-1 w-full mx-auto px-4 py-7 pb-36 sm:p-6 sm:pb-12 flex flex-col justify-start md:justify-center relative z-10 pt-10 md:pt-6 transition-all duration-500 ${r === 4 ? "max-w-6xl" : "max-w-2xl"}`,
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between mb-8 backdrop-blur-xl bg-white/5 p-4 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(139,38,242,0.15)] animate-fade-in",
                  children: [
                    e.jsx("div", {
                      onClick: () => x("/"),
                      className:
                        "cursor-pointer hover:scale-105 transition-transform duration-300",
                      "aria-label": "Go to Home",
                      children: e.jsx(Pe, { size: "sm" }),
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col items-end",
                      children: [
                        e.jsx("div", {
                          className:
                            "text-[10px] text-magical-300 uppercase tracking-[0.3em] font-bold mb-1",
                          children: "Creation Progress",
                        }),
                        e.jsxs("div", {
                          className: "text-xs text-white/50 font-serif italic",
                          children: ["Step ", r, " of 8"],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "w-full h-1.5 bg-white/5 mb-12 rounded-full overflow-hidden backdrop-blur-sm border border-white/5 relative",
                  children: e.jsx("div", {
                    className:
                      "h-full bg-gradient-to-r from-magical-600 via-magical-400 to-amber-300 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(139,38,242,0.6)] relative",
                    style: { width: `${(r / 8) * 100}%` },
                    children: e.jsx("div", {
                      className:
                        "absolute top-0 right-0 w-8 h-full bg-white/40 blur-sm animate-pulse",
                    }),
                  }),
                }),
                r === 1 &&
                  e.jsxs("div", {
                    className:
                      "animate-fade-in backdrop-blur-2xl bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.4)] relative overflow-hidden",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute -top-24 -right-24 w-48 h-48 bg-magical-600/10 blur-[80px] rounded-full pointer-events-none transition-colors duration-700",
                      }),
                      e.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          e.jsxs("h2", {
                            className:
                              "text-3xl md:text-5xl font-serif text-white mb-3 text-center drop-shadow-2xl",
                            children: [
                              "Whose day are we ",
                              e.jsx("span", {
                                className:
                                  "text-magical-300 font-hand text-5xl md:text-6xl block md:inline-block mt-2 md:mt-0",
                                children: "celebrating?",
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-center text-gray-400/80 mb-10 font-serif italic text-lg leading-relaxed max-w-md mx-auto",
                            children:
                              '"Every great surprise begins with a thought for someone special."',
                          }),
                          e.jsxs("div", {
                            className: "space-y-8",
                            children: [
                              e.jsxs("div", {
                                className: "group relative group/input",
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "block text-[10px] font-black text-magical-300 mb-2 group-focus-within:text-magical-400 transition-colors uppercase tracking-[0.4em] ml-1",
                                    children: "Their Name",
                                  }),
                                  e.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      e.jsx("input", {
                                        type: "text",
                                        value: s.receiverName,
                                        onChange: (t) =>
                                          o("receiverName", t.target.value),
                                        className:
                                          "w-full bg-slate-900/40 p-5 pe-14 rounded-2xl border border-white/10 text-white placeholder-white/10 focus:ring-2 focus:ring-magical-500/50 focus:border-magical-500/50 outline-none text-2xl transition-all shadow-2xl focus:bg-slate-950/80 font-serif",
                                        placeholder: "e.g. Sarah",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "absolute right-5 top-1/2 -translate-y-1/2 text-magical-400/30 group-hover/input:text-magical-400/60 transition-colors pointer-events-none",
                                        children: e.jsx(A, { size: 24 }),
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "absolute right-4 bottom-4 text-white/5 font-hand text-3xl pointer-events-none group-focus-within:opacity-0 transition-opacity uppercase",
                                    children: "Receiver",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "group relative group/input",
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "block text-[10px] font-black text-magical-300 mb-2 group-focus-within:text-magical-400 transition-colors uppercase tracking-[0.4em] ml-1",
                                    children: "Your Name",
                                  }),
                                  e.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      e.jsx("input", {
                                        type: "text",
                                        value: s.senderName,
                                        onChange: (t) =>
                                          o("senderName", t.target.value),
                                        className:
                                          "w-full bg-slate-900/40 p-5 pe-14 rounded-2xl border border-white/10 text-white placeholder-white/10 focus:ring-2 focus:ring-magical-500/50 focus:border-magical-500/50 outline-none text-2xl transition-all shadow-2xl focus:bg-slate-950/80 font-serif",
                                        placeholder: "e.g. Alex",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "absolute right-5 top-1/2 -translate-y-1/2 text-magical-400/30 group-hover/input:text-magical-400/60 transition-colors pointer-events-none",
                                        children: e.jsx(A, { size: 24 }),
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "absolute right-4 bottom-4 text-white/5 font-hand text-3xl pointer-events-none group-focus-within:opacity-0 transition-opacity uppercase",
                                    children: "Sender",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "flex justify-center mt-12 mb-2",
                            children: e.jsx(M, {
                              text: "Begin the Magic ✨",
                              onClick: C,
                              disabled: !s.receiverName || !s.senderName,
                              className:
                                "w-full md:w-auto scale-110 shadow-magical-600/40 text-white",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                e.jsxs("div", {
                  className:
                    r !== 2
                      ? "hidden"
                      : "space-y-8 animate-fade-in flex flex-col",
                  children: [
                    e.jsxs("div", {
                      className: "text-center",
                      children: [
                        e.jsxs("h2", {
                          className:
                            "text-3xl md:text-5xl font-serif text-white mb-2 drop-shadow-lg",
                          children: [
                            "Craft their ",
                            e.jsx("span", {
                              className:
                                "text-magical-300 font-hand text-5xl md:text-6xl",
                              children: "perfect cake",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className:
                            "text-gray-400/80 font-serif italic text-lg",
                          children: '"A sweet gesture for a sweet soul."',
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "relative bg-gradient-to-b from-slate-900/40 to-slate-950/60 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl h-80 w-full overflow-hidden shrink-0",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute inset-0 bg-magical-600/5 opacity-0 transition-opacity duration-1000",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-magical-400/10 blur-3xl rounded-full pointer-events-none",
                        }),
                        e.jsx(ye, {
                          flavor: s.cakeFlavor || d.VANILLA,
                          style: s.cakeStyle || c.CLASSIC,
                          candles: deferredCandles,
                          candlesLit: !0,
                          isCut: !1,
                          onCut: () => {},
                          receiverName: xe,
                          showKnife: !1,
                        }),
                      ],
                    }),
                    e.jsx("style", {
                      dangerouslySetInnerHTML: {
                        __html: `
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

            .luxury-font-poppins {
              font-family: 'Poppins', sans-serif;
            }

            /* Card classes */
            .luxury-card {
              font-family: 'Poppins', sans-serif !important;
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
              padding: 22px;
              border-radius: 22px;
              background: linear-gradient(180deg, rgba(36, 34, 56, 0.95), rgba(21, 20, 34, 0.95)) !important;
              backdrop-filter: blur(18px);
              -webkit-backdrop-filter: blur(18px);
              border: 1px solid rgba(255, 255, 255, 0.06) !important;
              box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25) !important;
              transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1), border-color 250ms ease-out, box-shadow 250ms ease-out;
              cursor: pointer;
              overflow: hidden;
              user-select: none;
              
              /* Responsive width */
              width: 100% !important;
              max-width: 280px !important;
              min-height: 145px !important;
              height: auto !important;
              flex-shrink: 0;
            }

            @media (max-width: 1024px) {
              .luxury-card {
                min-height: 125px !important;
                padding: 16px;
              }
            }

            @media (max-width: 640px) {
              .luxury-card {
                min-height: 120px !important;
                padding: 12px;
              }
            }

            .luxury-card:hover {
              transform: translateY(-6px) scale(1.03) !important;
              border-color: rgba(255, 170, 220, 0.28) !important;
              box-shadow: 0 18px 45px rgba(255, 105, 180, 0.15) !important;
            }

            .luxury-card:hover .luxury-icon {
              transform: rotate(2deg) !important;
            }

            .luxury-icon-wrapper {
              position: relative;
              z-index: 1;
              margin-bottom: 12px;
              transition: transform 250ms ease-out;
            }

            .luxury-icon {
              display: flex;
              align-items: center;
              justify-content: center;
              transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
            }

            .luxury-card:hover .luxury-icon {
              transform: scale(1.1) rotate(4deg) !important;
            }

            /* Custom selected styles */
            .luxury-card.selected::before {
              content: '';
              position: absolute;
              inset: 0;
              border-radius: 22px;
              padding: 2.5px;
              background: linear-gradient(135deg, #FF7ACD 0%, #D946EF 50%, #A855F7 100%) !important;
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              pointer-events: none;
              z-index: 2;
            }

            .luxury-card.selected {
              border: 2px solid #FF7ACD !important;
              box-shadow: 0 0 0 1px rgba(255, 122, 205, 0.25), 0 0 35px rgba(255, 122, 205, 0.35) !important;
              animation: border-pulse 1s ease-in-out;
            }

            /* Background soft glows */
            .glow-bg {
              position: absolute;
              width: 120px;
              height: 120px;
              border-radius: 50%;
              pointer-events: none;
              z-index: 0;
              opacity: 0.18;
              filter: blur(25px);
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }

            .glow-pink { background: radial-gradient(circle, #FF7ACD 0%, transparent 70%) !important; }
            .glow-blue { background: radial-gradient(circle, #3B82F6 0%, transparent 70%) !important; }
            .glow-rose { background: radial-gradient(circle, #F43F5E 0%, transparent 70%) !important; }
            .glow-purple { background: radial-gradient(circle, #A855F7 0%, transparent 70%) !important; }
            .glow-gold { background: radial-gradient(circle, #F59E0B 0%, transparent 70%) !important; }

            /* Selected Badge */
            .selected-badge {
              position: absolute;
              top: 12px;
              right: 12px;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: linear-gradient(135deg, #FF7ACD 0%, #D946EF 100%) !important;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 1px solid rgba(255, 255, 255, 0.2);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
              animation: pop-badge 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
              z-index: 10;
            }

            @keyframes pop-badge {
              0% { transform: scale(0); opacity: 0; }
              100% { transform: scale(1); opacity: 1; }
            }

            @keyframes border-pulse {
              0% { box-shadow: 0 0 0 1px rgba(255, 122, 205, 0.25), 0 0 35px rgba(255, 122, 205, 0.35); }
              50% { box-shadow: 0 0 0 4px rgba(255, 122, 205, 0.45), 0 0 50px rgba(255, 122, 205, 0.6); }
              100% { box-shadow: 0 0 0 1px rgba(255, 122, 205, 0.25), 0 0 35px rgba(255, 122, 205, 0.35); }
            }

            /* Titles and labels */
            .luxury-title {
              font-family: 'Poppins', sans-serif !important;
              font-weight: 600 !important;
              color: #FFFFFF !important;
              margin: 0;
              line-height: 1.2;
              z-index: 1;
            }

            /* Let's size the text responsively to match the cards perfectly */
            @media (min-width: 1025px) {
              .luxury-title { font-size: 22px !important; }
              .luxury-subtitle { font-size: 14px !important; }
            }
            @media (max-width: 1024px) {
              .luxury-title { font-size: 18px !important; }
              .luxury-subtitle { font-size: 12px !important; }
            }
            @media (max-width: 640px) {
              .luxury-title { font-size: 15px !important; }
              .luxury-subtitle { font-size: 10px !important; }
            }

            .luxury-subtitle {
              font-family: 'Poppins', sans-serif !important;
              font-weight: 400 !important;
              color: rgba(255, 255, 255, 0.5) !important;
              margin: 4px 0 0 0;
              z-index: 1;
            }

            .luxury-section-heading {
              font-family: 'Poppins', sans-serif !important;
              font-weight: 700 !important;
              letter-spacing: 0.28em !important;
              text-transform: uppercase !important;
              color: #FF7ACD !important;
              text-shadow: 0 0 12px rgba(255, 122, 205, 0.2) !important;
            }

            /* Custom grid container - Responsive auto-filling */
            .luxury-grid {
              display: grid !important;
              grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)) !important;
              gap: 20px !important;
              padding: 8px 4px;
            }

            @media (max-width: 1024px) {
              .luxury-grid {
                grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important;
                gap: 16px !important;
              }
            }

            @media (max-width: 640px) {
              .luxury-grid {
                grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)) !important;
                gap: 12px !important;
              }
            }

            /* Custom Scrollbar */
            .luxury-scrollbar {
              -webkit-overflow-scrolling: touch !important;
              overscroll-behavior: contain !important;
            }

            .luxury-scrollbar::-webkit-scrollbar {
              width: 8px !important;
              height: 8px !important;
            }

            .luxury-scrollbar::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.05) !important;
              border-radius: 20px !important;
            }

            .luxury-scrollbar::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, #FF7ACD 0%, #A855F7 100%) !important;
              border-radius: 20px !important;
            }
          `,
                      },
                    }),
                    e.jsxs("div", {
                      className:
                        "backdrop-blur-2xl bg-white/5 p-8 rounded-3xl border border-white/10 space-y-8 shadow-2xl overflow-y-auto max-h-[45vh] luxury-scrollbar px-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2 mb-1 ml-1",
                              children: [
                                e.jsx("span", {
                                  className: "text-magical-300",
                                  children: "✨",
                                }),
                                e.jsx("label", {
                                  className:
                                    "block text-xs font-black text-magical-300 uppercase tracking-[0.2em] luxury-section-heading",
                                  children: "The Style",
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-[10px] text-slate-400 mb-4 ml-1",
                              children: "Choose the shape of your card",
                            }),
                            e.jsx("div", {
                              className: "luxury-grid",
                              children: Object.values(c).map((t) => {
                                const a = s.cakeStyle === t,
                                  l = Ye[t];
                                return e.jsxs(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => o("cakeStyle", t),
                                    className: `luxury-card ${a ? "selected" : ""}`,
                                    children: [
                                      e.jsx("div", {
                                        className: `glow-bg ${l.glowClass}`,
                                      }),
                                      a &&
                                        e.jsx("div", {
                                          className:
                                            "selected-badge animate-fade-in",
                                          children: e.jsx("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "white",
                                            strokeWidth: "4",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: e.jsx("polyline", {
                                              points: "20 6 9 17 4 12",
                                            }),
                                          }),
                                        }),
                                      e.jsx("div", {
                                        className: "luxury-icon-wrapper",
                                        children: e.jsx("div", {
                                          className: "luxury-icon",
                                          children: Ge[t],
                                        }),
                                      }),
                                      e.jsx("h4", {
                                        className: "luxury-title",
                                        children: l.label,
                                      }),
                                      e.jsx("p", {
                                        className: "luxury-subtitle",
                                        children: l.subtitle,
                                      }),
                                    ],
                                  },
                                  t,
                                );
                              }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2 mb-1 ml-1",
                              children: [
                                e.jsx("span", {
                                  className: "text-magical-300",
                                  children: "🍓",
                                }),
                                e.jsx("label", {
                                  className:
                                    "block text-xs font-black text-magical-300 uppercase tracking-[0.2em] luxury-section-heading",
                                  children: "The Flavor",
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-[10px] text-slate-400 mb-4 ml-1",
                              children: "Select the base flavor profile",
                            }),
                            e.jsx("div", {
                              className: "luxury-grid",
                              children: Object.values(d).map((t) => {
                                const a = s.cakeFlavor === t,
                                  l = Ve[t];
                                return e.jsxs(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => o("cakeFlavor", t),
                                    className: `luxury-card ${a ? "selected" : ""}`,
                                    children: [
                                      e.jsx("div", {
                                        className: `glow-bg ${l.glowClass}`,
                                      }),
                                      a &&
                                        e.jsx("div", {
                                          className:
                                            "selected-badge animate-fade-in",
                                          children: e.jsx("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "white",
                                            strokeWidth: "4",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: e.jsx("polyline", {
                                              points: "20 6 9 17 4 12",
                                            }),
                                          }),
                                        }),
                                      e.jsx("div", {
                                        className: "luxury-icon-wrapper",
                                        children: e.jsx("div", {
                                          className: "luxury-icon",
                                          children: $e[t],
                                        }),
                                      }),
                                      e.jsx("h4", {
                                        className: "luxury-title",
                                        children: l.label,
                                      }),
                                      e.jsx("p", {
                                        className: "luxury-subtitle",
                                        children: l.subtitle,
                                      }),
                                    ],
                                  },
                                  t,
                                );
                              }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "bg-slate-950/40 p-6 rounded-2xl border border-white/5",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex justify-between items-center mb-4",
                              children: [
                                e.jsx("label", {
                                  className:
                                    "block text-[10px] font-black text-magical-300 uppercase tracking-[0.4em]",
                                  children: "Candles of Light",
                                }),
                                e.jsx("span", {
                                  className:
                                    "font-serif text-white text-2xl drop-shadow-glow",
                                  children: s.candleCount,
                                }),
                              ],
                            }),
                            e.jsx("input", {
                              type: "range",
                              min: "1",
                              max: "5",
                              value: s.candleCount,
                              onChange: (t) =>
                                o("candleCount", parseInt(t.target.value)),
                              className:
                                "w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-magical-400",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex flex-col md:flex-row gap-4 pt-2",
                          children: [
                            e.jsx("button", {
                              onClick: E,
                              className:
                                "flex-1 py-4 px-8 rounded-full border border-white/10 text-white/50 hover:text-white hover:bg-white/5 transition-all font-serif italic text-lg",
                              children: "Go Back",
                            }),
                            e.jsx("div", {
                              className: "flex-1 flex justify-center",
                              children: e.jsx(M, {
                                text: "Looks Delicious! Next Step",
                                onClick: C,
                                className: "w-full text-white",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                r === 3 &&
                  e.jsxs("div", {
                    className:
                      "space-y-10 animate-fade-in backdrop-blur-3xl bg-white/[0.02] p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-magical-600/[0.03] blur-[120px] rounded-full pointer-events-none",
                      }),
                      e.jsxs("div", {
                        className: "text-center relative z-10 space-y-2",
                        children: [
                          e.jsxs("h2", {
                            className:
                              "text-3xl md:text-5xl font-serif text-white tracking-tight",
                            children: [
                              "The ",
                              e.jsx("span", {
                                className:
                                  "text-magical-300 font-hand text-5xl md:text-7xl",
                                children: "Wheel of Wishes",
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-slate-400/80 font-serif italic text-lg leading-relaxed max-w-sm mx-auto",
                            children:
                              '"Five promises. Five gifts of time. What magic will you grant?"',
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "grid grid-cols-1 gap-6 relative z-10 overflow-y-auto max-h-[55vh] pr-2 magical-scrollbar px-1",
                        children:
                          (q = s.wheelOptions) == null
                            ? void 0
                            : q.map((t, a) =>
                                e.jsx(
                                  "div",
                                  {
                                    className:
                                      "flex flex-col space-y-2 group/item",
                                    children: e.jsxs("div", {
                                      className:
                                        "flex items-center gap-4 relative group/input",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "text-[10px] font-black text-magical-400/20 group-hover/item:text-magical-400 transition-colors duration-500 uppercase tracking-[0.6em] w-12 text-center",
                                          children: ["Grant ", a + 1],
                                        }),
                                        e.jsxs("div", {
                                          className: "flex-1 relative",
                                          children: [
                                            e.jsx("input", {
                                              type: "text",
                                              value: t,
                                              onChange: (l) =>
                                                me(a, l.target.value),
                                              className:
                                                "w-full bg-slate-900/40 border-b border-white/10 p-4 pe-14 text-white focus:border-magical-500/50 outline-none text-xl transition-all placeholder-white/10 focus:bg-slate-950/60 font-serif italic rounded-t-xl hover:bg-slate-900/60",
                                              placeholder:
                                                "Type a magical promise...",
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "absolute right-4 top-1/2 -translate-y-1/2 text-magical-400/30 group-hover/input:text-magical-400/60 transition-colors pointer-events-none",
                                              children: e.jsx(A, { size: 16 }),
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "absolute bottom-0 left-0 h-[2px] w-0 bg-magical-500 group-focus-within/item:w-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(139,38,242,0.8)]",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  a,
                                ),
                              ),
                      }),
                      e.jsx("div", {
                        className:
                          "mt-4 pt-4 border-t border-white/5 relative z-10 text-center",
                        children: e.jsxs("p", {
                          className:
                            "text-[10px] text-slate-500 font-serif italic leading-relaxed max-w-xs mx-auto",
                          children: [
                            "Need a spark? Try ",
                            e.jsx("span", {
                              className: "text-magical-400",
                              children: '"a sunset walk,"',
                            }),
                            " ",
                            e.jsx("span", {
                              className: "text-magical-400",
                              children: '"your favorite home-cooked meal,"',
                            }),
                            " or ",
                            e.jsx("span", {
                              className: "text-magical-400",
                              children: '"a night under the stars."',
                            }),
                          ],
                        }),
                      }),
                      e.jsxs("div", {
                        className:
                          "flex flex-col md:flex-row gap-4 pt-4 relative z-10",
                        children: [
                          e.jsx("button", {
                            onClick: E,
                            className:
                              "flex-1 py-4 px-8 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-all font-serif italic text-lg border border-transparent hover:border-white/5",
                            children: "Go Back",
                          }),
                          e.jsx("div", {
                            className: "flex-1 flex justify-center",
                            children: e.jsx(M, {
                              text: "Next: Greeting Card 💌",
                              onClick: C,
                              className:
                                "w-full text-white shadow-magical-600/30",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                r === 4 &&
                  e.jsxs("div", {
                    className:
                      "space-y-8 animate-fade-in backdrop-blur-3xl bg-white/[0.01] border border-white/5 rounded-[3rem] p-6 md:p-10 shadow-2xl relative overflow-hidden group/step4 max-w-6xl mx-auto",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-4 border-b border-white/5 pb-6",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-12 h-12 rounded-full bg-magical-500/10 flex items-center justify-center text-magical-400",
                            children: e.jsx(ve, { size: 24 }),
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsxs("h2", {
                                className:
                                  "text-xl md:text-2xl font-serif text-white tracking-tight",
                                children: [
                                  "Design a ",
                                  e.jsx("span", {
                                    className:
                                      "text-magical-300 font-hand text-2xl md:text-3.5xl",
                                    children: "Greeting Card",
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-slate-400 text-xs font-serif italic",
                                children:
                                  "This Hallmark-style card will float out of a magical gift box after they cut the cake.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-stretch",
                        children: [
                          e.jsx("div", {
                            className:
                              "lg:col-span-5 space-y-8 flex flex-col justify-between",
                            children: e.jsxs("div", {
                              className: "space-y-8",
                              children: [
                                e.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-7 h-7 rounded-full bg-magical-500 text-white font-bold flex items-center justify-center text-xs",
                                          children: "1",
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("h3", {
                                              className:
                                                "text-sm font-bold text-white tracking-wide",
                                              children:
                                                "Write Your Heartfelt Message",
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-[10px] text-slate-400",
                                              children:
                                                "Your words make this gift truly special",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "relative group/input",
                                      children: [
                                        e.jsx("textarea", {
                                          value: s.cardMessage || "",
                                          onChange: (t) => {
                                            (t.target.value || "").length <=
                                              300 &&
                                              o("cardMessage", t.target.value);
                                          },
                                          className:
                                            "w-full bg-slate-900/40 p-4 rounded-2xl border border-white/5 text-white placeholder-white/20 focus:border-magical-500/30 outline-none min-h-[110px] font-serif text-sm leading-relaxed transition-all italic shadow-inner",
                                          placeholder:
                                            "Type your birthday wishes here...",
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "absolute bottom-3 right-4 text-[9px] font-bold tracking-widest text-white/30 flex items-center gap-1.5",
                                          children: [
                                            e.jsxs("span", {
                                              children: [
                                                (s.cardMessage || "").length,
                                                "/300",
                                              ],
                                            }),
                                            e.jsx("span", { children: "😊" }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center justify-between text-[10px]",
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "text-slate-400 font-serif italic",
                                              children: "Need inspiration?",
                                            }),
                                            e.jsxs("button", {
                                              onClick: () => {
                                                const t = le[G],
                                                  a =
                                                    t[
                                                      Math.floor(
                                                        Math.random() *
                                                          t.length,
                                                      )
                                                    ];
                                                o("cardMessage", a);
                                              },
                                              className:
                                                "text-magical-300 hover:text-magical-400 transition-colors font-bold uppercase tracking-wider flex items-center gap-1",
                                              children: [
                                                e.jsx(K, { size: 10 }),
                                                " Shuffle",
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsx("div", {
                                          className: "grid grid-cols-4 gap-1.5",
                                          children: [
                                            "short",
                                            "emotional",
                                            "funny",
                                            "blessing",
                                          ].map((t) =>
                                            e.jsx(
                                              "button",
                                              {
                                                onClick: () => {
                                                  ce(t);
                                                  const a = le[t];
                                                  o("cardMessage", a[0]);
                                                },
                                                className: `py-1.5 px-1 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all border text-center ${G === t ? "bg-magical-500/10 border-magical-500/30 text-magical-300" : "bg-slate-900/20 border-white/5 text-slate-400 hover:text-slate-200"}`,
                                                children:
                                                  t === "short" ? "Sweet" : t,
                                              },
                                              t,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-7 h-7 rounded-full bg-magical-500 text-white font-bold flex items-center justify-center text-xs",
                                          children: "2",
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("h3", {
                                              className:
                                                "text-sm font-bold text-white tracking-wide",
                                              children: "Add Their Photo",
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-[10px] text-slate-400",
                                              children:
                                                "A photo makes your card unforgettable. Drag to position!",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "space-y-3",
                                      children: [
                                        e.jsxs("div", {
                                          className: "flex items-center gap-4",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "flex-1 relative border border-dashed border-white/10 hover:border-magical-400/30 rounded-2xl p-4 text-center transition-all bg-slate-900/20 cursor-pointer min-h-[90px] flex flex-col justify-center",
                                              children: [
                                                e.jsx("input", {
                                                  type: "file",
                                                  accept: "image/*",
                                                  onChange: ue,
                                                  disabled: Y,
                                                  className:
                                                    "absolute inset-0 opacity-0 cursor-pointer w-full h-full",
                                                }),
                                                e.jsxs("div", {
                                                  className:
                                                    "space-y-1 pointer-events-none",
                                                  children: [
                                                    e.jsx("p", {
                                                      className:
                                                        "text-xs text-slate-300 font-medium",
                                                      children: Y
                                                        ? "Preparing Photo…"
                                                        : "Upload Photo",
                                                    }),
                                                    e.jsx("p", {
                                                      className:
                                                        "text-[9px] text-slate-500",
                                                      children:
                                                        "PNG/JPG up to 10MB · optimized before upload",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            s.cardPhotoBase64
                                              ? e.jsxs("div", {
                                                  className:
                                                    "relative w-20 h-20 rounded-xl overflow-hidden group/thumb border border-white/10 shrink-0 shadow-lg",
                                                  children: [
                                                    e.jsx("img", {
                                                      src: s.cardPhotoBase64,
                                                      alt: "Thumbnail preview",
                                                      className:
                                                        "w-full h-full object-cover",
                                                    }),
                                                    e.jsx("button", {
                                                      onClick: () => {
                                                        (o(
                                                          "cardPhotoBase64",
                                                          "",
                                                        ),
                                                          o("cardPhotoX", 50),
                                                          o("cardPhotoY", 50),
                                                          T(null));
                                                      },
                                                      className:
                                                        "absolute top-1 right-1 w-5 h-5 rounded-full bg-black/70 hover:bg-black/90 flex items-center justify-center text-white",
                                                      children: "×",
                                                    }),
                                                  ],
                                                })
                                              : e.jsx("div", {
                                                  className:
                                                    "text-[10px] text-slate-500 italic flex-1 pl-2",
                                                  children:
                                                    "No photo selected. A warm default greeting photo will be shown instead.",
                                                }),
                                          ],
                                        }),
                                        s.cardPhotoBase64 &&
                                          e.jsxs("div", {
                                            className:
                                              "text-[10px] sm:text-[11px] text-magical-300 font-semibold animate-pulse leading-snug flex items-center gap-1.5 ml-1 pt-1",
                                            children: [
                                              e.jsx("span", { children: "👉" }),
                                              " ",
                                              e.jsx("span", {
                                                children:
                                                  "Drag the photo directly inside the Live Preview below to frame it!",
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-7 h-7 rounded-full bg-magical-500 text-white font-bold flex items-center justify-center text-xs",
                                          children: "3",
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("h3", {
                                              className:
                                                "text-sm font-bold text-white tracking-wide",
                                              children: "Choose Card Style",
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-[10px] text-slate-400",
                                              children:
                                                "Pick a design that fits their personality",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className: "grid grid-cols-5 gap-2",
                                      children: Ie.map((t) =>
                                        e.jsxs(
                                          "button",
                                          {
                                            onClick: () => o("cardStyle", t.id),
                                            className: `p-1.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${s.cardStyle === t.id ? "bg-magical-500/10 border-magical-500/40 shadow-inner scale-[1.02]" : "bg-slate-900/20 border-white/5 hover:bg-slate-900/40"}`,
                                            children: [
                                              e.jsx("div", {
                                                className: `w-8 h-8 rounded-lg bg-gradient-to-br ${t.color} shadow-md flex items-center justify-center shrink-0`,
                                                children:
                                                  t.premium &&
                                                  e.jsx("span", {
                                                    className: "text-[8px]",
                                                    children: "👑",
                                                  }),
                                              }),
                                              e.jsx("span", {
                                                className:
                                                  "text-[9px] font-bold tracking-wide uppercase text-slate-400",
                                                children: t.label,
                                              }),
                                            ],
                                          },
                                          t.id,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          e.jsxs("div", {
                            className:
                              "lg:col-span-7 flex flex-col border border-white/5 rounded-3xl p-5 bg-black/40 overflow-hidden relative",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-4 border-b border-white/5 pb-3 shrink-0",
                                children: [
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("h3", {
                                        className:
                                          "text-xs font-bold text-white tracking-wider uppercase",
                                        children: "Live Preview",
                                      }),
                                      e.jsx("p", {
                                        className: "text-[10px] text-slate-500",
                                        children:
                                          "This is how your greeting card will look",
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "flex bg-slate-900/60 p-1 rounded-lg border border-white/5 gap-1 shrink-0",
                                    children: [
                                      "desktop",
                                      "tablet",
                                      "mobile",
                                    ].map((t) =>
                                      e.jsx(
                                        "button",
                                        {
                                          onClick: () => ne(t),
                                          className: `px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider transition-all ${I === t ? "bg-magical-600 text-white shadow-md" : "text-slate-500 hover:text-slate-300"}`,
                                          children: t,
                                        },
                                        t,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "flex-1 flex items-center justify-center overflow-y-auto max-h-[500px] pr-1 magical-scrollbar",
                                children: e.jsx(He, {
                                  device: I,
                                  children: e.jsx(Ne, {
                                    receiverName: s.receiverName || "Receiver",
                                    message: s.cardMessage,
                                    photoUrlOrBase64: s.cardPhotoBase64,
                                    cardStyle: s.cardStyle || "luxury",
                                    photoPosition: {
                                      x: s.cardPhotoX ?? 50,
                                      y: s.cardPhotoY ?? 50,
                                    },
                                    onPhotoPositionChange: (t) => {
                                      (o("cardPhotoX", t.x),
                                        o("cardPhotoY", t.y));
                                    },
                                    isEditable: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 bg-slate-950/20 p-6 rounded-3xl",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex items-center gap-4 text-left flex-1 min-w-0",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-full bg-magical-500/10 flex items-center justify-center text-magical-400 shrink-0",
                                children: e.jsx(K, { size: 20 }),
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className: "text-xs font-bold text-white",
                                    children:
                                      "You're one step away from creating a beautiful surprise",
                                  }),
                                  e.jsx("p", {
                                    className: "text-[10px] text-slate-400",
                                    children:
                                      "Proceed to add final messages and secure your surprise link.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "flex items-center gap-2 w-full md:w-auto shrink-0",
                            children: [
                              e.jsxs("button", {
                                onClick: E,
                                className:
                                  "py-3 px-4 md:py-4 md:px-6 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-all font-serif italic text-xs md:text-sm border border-transparent hover:border-white/5 shrink-0 whitespace-nowrap",
                                children: [
                                  e.jsx("span", {
                                    className: "hidden sm:inline",
                                    children: "Go Back",
                                  }),
                                  e.jsx("span", {
                                    className: "sm:hidden",
                                    children: "Back",
                                  }),
                                ],
                              }),
                              e.jsxs("button", {
                                onClick: C,
                                className:
                                  "flex-1 md:flex-none py-3 px-5 md:py-4 md:px-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold text-xs md:text-sm tracking-wider uppercase shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300 transform active:scale-95 shrink-0 flex items-center justify-center gap-2 whitespace-nowrap",
                                children: [
                                  e.jsx("span", {
                                    className: "hidden sm:inline",
                                    children: "Continue to Customize",
                                  }),
                                  e.jsx("span", {
                                    className: "sm:hidden",
                                    children: "Continue",
                                  }),
                                  e.jsx("span", {
                                    className: "text-xs",
                                    children: "➔",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                r === 5 &&
                  e.jsxs("div", {
                    className:
                      "space-y-10 animate-fade-in backdrop-blur-3xl bg-white/[0.02] p-8 md:p-12 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden group/step4",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-0 right-0 w-64 h-64 bg-magical-600/[0.05] blur-[120px] rounded-full pointer-events-none",
                      }),
                      e.jsxs("div", {
                        className: "text-center relative z-10 space-y-3",
                        children: [
                          e.jsxs("h2", {
                            className:
                              "text-3xl md:text-5xl font-serif text-white tracking-tight",
                            children: [
                              "Pour your ",
                              e.jsx("span", {
                                className:
                                  "text-magical-300 font-hand text-5xl md:text-7xl",
                                children: "heart into words",
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-slate-400 font-serif italic text-lg leading-relaxed max-w-lg mx-auto",
                            children: `"Your voice and your words are the true gift. This is the moment they'll hear as they celebrate."`,
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "space-y-10 relative z-10 overflow-y-auto max-h-[55vh] pr-2 magical-scrollbar px-1",
                        children: e.jsxs("div", {
                          className: "space-y-8",
                          children: [
                            e.jsxs("div", {
                              className: "group/field relative group/input",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-3 mb-4",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[10px] font-black text-magical-400/40 uppercase tracking-[0.4em]",
                                      children: "The Opening Chapter",
                                    }),
                                    e.jsx("div", {
                                      className: "h-px flex-1 bg-white/5",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    e.jsx("textarea", {
                                      value: s.introMessage,
                                      onChange: (t) =>
                                        o("introMessage", t.target.value),
                                      className:
                                        "w-full bg-slate-900/40 p-6 pe-14 rounded-3xl border border-white/5 text-white placeholder-white/5 focus:border-magical-500/30 outline-none min-h-[120px] focus:bg-slate-950/60 font-serif text-xl leading-relaxed transition-all italic shadow-inner",
                                      placeholder: "Type a beautiful intro...",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute right-5 top-6 text-magical-400/30 group-hover/input:text-magical-400/60 transition-colors pointer-events-none",
                                      children: e.jsx(A, { size: 24 }),
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "absolute bottom-4 right-6 text-[10px] font-bold tracking-widest text-white/20",
                                      children: [
                                        ((X = s.introMessage) == null
                                          ? void 0
                                          : X.length) || 0,
                                        " characters",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "group/field relative group/input",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-3 mb-4",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[10px] font-black text-magical-400/40 uppercase tracking-[0.4em]",
                                      children: "A Secret Note",
                                    }),
                                    e.jsx("div", {
                                      className: "h-px flex-1 bg-white/5",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    e.jsx("textarea", {
                                      value: s.personalNote,
                                      onChange: (t) =>
                                        o("personalNote", t.target.value),
                                      className:
                                        "w-full bg-slate-900/40 p-6 pe-14 rounded-3xl border border-white/5 text-white placeholder-white/5 focus:border-magical-500/30 outline-none min-h-[120px] focus:bg-slate-950/60 font-serif text-xl leading-relaxed transition-all italic shadow-inner",
                                      placeholder: "Something just for them...",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute right-5 top-6 text-magical-400/30 group-hover/input:text-magical-400/60 transition-colors pointer-events-none",
                                      children: e.jsx(A, { size: 24 }),
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "absolute bottom-4 right-6 text-[10px] font-bold tracking-widest text-white/20",
                                      children: [
                                        ((Q = s.personalNote) == null
                                          ? void 0
                                          : Q.length) || 0,
                                        " characters",
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className:
                                    "mt-2 text-[10px] text-slate-500 italic font-serif text-right px-2",
                                  children:
                                    "This note stays hidden until they find it.",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "group/field relative group/input",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-3 mb-4",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[10px] font-black text-magical-400/40 uppercase tracking-[0.4em]",
                                      children: "One Final Secret",
                                    }),
                                    e.jsx("div", {
                                      className: "h-px flex-1 bg-white/5",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    e.jsx("input", {
                                      type: "text",
                                      value: s.finalMessage,
                                      onChange: (t) =>
                                        o("finalMessage", t.target.value),
                                      className:
                                        "w-full bg-slate-900/20 border-b border-white/10 p-4 pe-24 text-white placeholder-white/10 focus:border-amber-400/50 outline-none text-2xl transition-all font-serif italic focus:bg-white/[0.02]",
                                      placeholder:
                                        "The very last thing they'll see...",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-3 pointer-events-none",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "text-[10px] font-bold tracking-widest text-white/20",
                                          children: [
                                            ((J = s.finalMessage) == null
                                              ? void 0
                                              : J.length) || 0,
                                            " chars",
                                          ],
                                        }),
                                        e.jsx(A, {
                                          size: 24,
                                          className:
                                            "text-magical-400/30 group-hover/input:text-magical-400/60 transition-colors",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      e.jsxs("div", {
                        className:
                          "flex flex-col md:flex-row gap-4 pt-6 relative z-10",
                        children: [
                          e.jsx("button", {
                            onClick: E,
                            className:
                              "flex-1 py-4 px-8 rounded-full text-white/30 hover:text-white hover:bg-white/5 transition-all font-serif italic text-lg border border-transparent hover:border-white/5",
                            children: "Go Back",
                          }),
                          e.jsx("div", {
                            className: "flex-1 flex justify-center",
                            children: e.jsx(M, {
                              text: "Add Sound Magic ✨",
                              onClick: C,
                              className:
                                "w-full text-white shadow-magical-600/50",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                r === 6 &&
                  e.jsxs("div", {
                    className:
                      "space-y-6 animate-fade-in bg-slate-950/75 md:backdrop-blur-3xl md:bg-white/[0.02] p-5 sm:p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col min-h-[500px] md:min-h-0 touch-pan-y",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute -bottom-24 -left-24 w-64 h-64 bg-magical-600/[0.05] blur-[120px] rounded-full pointer-events-none",
                      }),
                      e.jsxs("div", {
                        className: "text-center relative z-10 space-y-2",
                        children: [
                          e.jsxs("h2", {
                            className:
                              "text-2xl md:text-5xl font-serif text-white tracking-tight",
                            children: [
                              "The ",
                              e.jsx("span", {
                                className:
                                  "text-magical-300 font-hand text-4xl md:text-7xl",
                                children: "Sound of Magic",
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-slate-400 font-serif italic text-sm md:text-lg leading-relaxed max-w-lg mx-auto opacity-70",
                            children:
                              '"A melody for the mood, a voice for the heart."',
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "relative z-10 flex p-1.5 bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 max-w-sm mx-auto w-full mb-2",
                        children: [
                          e.jsxs("button", {
                            onClick: () => p("voice"),
                            className: `flex-1 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative z-10 ${m === "voice" ? "text-white" : "text-slate-500 hover:text-slate-300"}`,
                            children: [
                              "Your Voice",
                              m === "voice" &&
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 bg-magical-600 shadow-glow rounded-xl -z-10 animate-fade-in",
                                }),
                            ],
                          }),
                          e.jsxs("button", {
                            onClick: () => p("music"),
                            className: `flex-1 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative z-10 ${m === "music" ? "text-white" : "text-slate-500 hover:text-slate-300"}`,
                            children: [
                              "The Song",
                              m === "music" &&
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 bg-amber-500 shadow-glow-amber rounded-xl -z-10 animate-fade-in",
                                }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "relative z-10 flex-1 flex flex-col justify-center",
                        children: [
                          m === "voice" &&
                            e.jsx("div", {
                              className: "animate-fade-in-up space-y-6",
                              children: e.jsx("div", {
                                className:
                                  "group/voice relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent shadow-xl transition-all",
                                children: e.jsxs("div", {
                                  className:
                                    "bg-slate-900/90 md:backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-[2.4rem] space-y-6",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        e.jsxs("div", {
                                          className: "space-y-1",
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "text-[10px] font-black text-magical-400 uppercase tracking-[0.4em]",
                                              children: "Voice Note",
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-[10px] text-slate-500 italic font-serif",
                                              children:
                                                "Record a toast for their special day",
                                            }),
                                          ],
                                        }),
                                        k &&
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]",
                                              }),
                                              e.jsxs("span", {
                                                className:
                                                  "text-[10px] font-bold text-red-400 tracking-tighter",
                                                children: [
                                                  Math.floor(de / 60) +
                                                    ":" +
                                                    (de % 60)
                                                      .toString()
                                                      .padStart(2, "0"),
                                                  " / 5:00",
                                                ],
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    s.voiceMessageUrl
                                      ? e.jsx("div", {
                                          className:
                                            "space-y-6 animate-fade-in",
                                          children: e.jsxs("div", {
                                            className:
                                              "bg-black/40 rounded-2xl p-4 border border-white/5 flex items-center gap-3 min-w-0",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "w-10 h-10 bg-magical-500/20 rounded-full flex items-center justify-center text-xl",
                                                children: "✨",
                                              }),
                                              e.jsx("audio", {
                                                src: s.voiceMessageUrl,
                                                controls: !0,
                                                className:
                                                  "flex-1 min-w-0 max-w-full h-8 opacity-80",
                                              }),
                                              e.jsx("button", {
                                                onClick: fe,
                                                "aria-label":
                                                  "Remove voice message",
                                                className:
                                                  "w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-all",
                                                children: "✕",
                                              }),
                                            ],
                                          }),
                                        })
                                      : e.jsxs("div", {
                                          className:
                                            "flex flex-col items-center gap-6",
                                          children: [
                                            e.jsxs("button", {
                                              onClick: k ? Z : ge,
                                              className: `w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-500 ${k ? "bg-red-500/20 border-red-500/50 shadow-[0_0_40px_rgba(239,68,68,0.3)]" : "bg-white/5 border-white/10 hover:border-magical-400/50 shadow-inner"} border-2 relative`,
                                              children: [
                                                k
                                                  ? e.jsx("div", {
                                                      className:
                                                        "w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-sm animate-pulse",
                                                    })
                                                  : e.jsx("div", {
                                                      className:
                                                        "text-3xl md:text-4xl text-magical-400",
                                                      children: "🎙️",
                                                    }),
                                                k &&
                                                  e.jsx(e.Fragment, {
                                                    children: e.jsx("div", {
                                                      className:
                                                        "absolute -inset-2 border border-red-500/30 rounded-full animate-ping",
                                                    }),
                                                  }),
                                              ],
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]",
                                              children: k
                                                ? "Tap to finish"
                                                : "Speak from the heart",
                                            }),
                                          ],
                                        }),
                                  ],
                                }),
                              }),
                            }),
                          m === "music" &&
                            e.jsx("div", {
                              className: "animate-fade-in-up space-y-6",
                              children: e.jsx("div", {
                                className:
                                  "group/song relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent shadow-xl transition-all",
                                children: e.jsxs("div", {
                                  className:
                                    "bg-slate-900/90 md:backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-[2.4rem] space-y-6",
                                  children: [
                                    e.jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-[10px] font-black text-amber-400 uppercase tracking-[0.4em]",
                                          children: "Atmosphere",
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-[10px] text-slate-500 italic font-serif",
                                          children:
                                            "A melody to play as they cut the cake",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "space-y-4",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex items-start gap-3 bg-amber-500/5 border border-amber-500/20 rounded-2xl p-4",
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "text-lg flex-shrink-0",
                                              children: "ℹ️",
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-[11px] text-amber-200/60 leading-relaxed font-serif italic",
                                              children:
                                                "Upload an audio file from your device (MP3, M4A, WAV). YouTube and Spotify links won't work here — they block outside playback. Download the track to your phone first, then upload it.",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className: "relative",
                                          children: [
                                            e.jsx("input", {
                                              type: "file",
                                              accept:
                                                "audio/*,.mp3,.wav,.ogg,.m4a,.aac,.flac,.webm",
                                              onChange: pe,
                                              className: "hidden",
                                              id: "song-upload",
                                            }),
                                            e.jsx("label", {
                                              htmlFor: "song-upload",
                                              className: `flex items-center justify-center w-full p-6 md:p-10 rounded-2xl border-2 border-dashed transition-all duration-300 ${v ? "border-amber-400/50 bg-amber-400/5 text-amber-300" : "border-white/10 bg-white/[0.02] text-white/40 hover:border-amber-400/40 hover:text-white hover:bg-white/5"} cursor-pointer`,
                                              children: e.jsxs("div", {
                                                className:
                                                  "text-center space-y-3",
                                                children: [
                                                  e.jsx("div", {
                                                    className: "text-3xl",
                                                    children: v ? "🎵" : "🎧",
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "text-xs font-bold uppercase tracking-[0.2em] line-clamp-1 truncate px-2",
                                                    children: v
                                                      ? v.name
                                                      : "Tap to Upload a Song from Device",
                                                  }),
                                                  !v &&
                                                    e.jsx("div", {
                                                      className:
                                                        "text-[10px] text-white/20 font-serif italic",
                                                      children:
                                                        "MP3 · M4A · WAV · OGG · AAC · up to 10MB",
                                                    }),
                                                ],
                                              }),
                                            }),
                                            v &&
                                              e.jsx("button", {
                                                type: "button",
                                                onClick: () => {
                                                  ($(null), o("songUrl", ""));
                                                },
                                                className:
                                                  "mt-3 w-full text-[10px] text-red-400/70 hover:text-red-300 transition-colors uppercase tracking-widest",
                                                children:
                                                  "Remove selected song",
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex flex-col md:flex-row gap-4 pt-4 relative z-10",
                        children: [
                          e.jsx("button", {
                            onClick: E,
                            className:
                              "flex-1 py-4 px-8 rounded-full text-white/30 hover:text-white hover:bg-white/5 transition-all font-serif italic text-lg border border-transparent hover:border-white/5",
                            children: "Go Back",
                          }),
                          e.jsx("div", {
                            className: "flex-1 flex justify-center",
                            children: e.jsx(M, {
                              text: "Next: Character Style 👤",
                              onClick: C,
                              className:
                                "w-full text-white shadow-magical-600/50",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                r === 7 &&
                  e.jsxs("div", {
                    className: "space-y-8 animate-fade-in bg-slate-950/75 md:backdrop-blur-3xl md:bg-white/[0.02] p-5 sm:p-6 md:p-10 rounded-[2rem] md:rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col touch-pan-y",
                    children: [
                      e.jsx("div", {
                        className: "absolute top-0 right-0 w-64 h-64 bg-magical-500/[0.05] blur-[120px] rounded-full pointer-events-none"
                      }),
                      e.jsxs("div", {
                        className: "text-center relative z-10 space-y-2",
                        children: [
                          e.jsx("h2", { className: "text-3xl md:text-5xl font-serif italic text-white mb-4", children: "Create a Passkey" }),
                          e.jsx("p", { className: "text-white/60", children: "Enter a 4-digit PIN. Your special person will need this to unlock the surprise!" })
                        ]
                      }),
                      e.jsx("div", {
                        className: "flex justify-center gap-4 my-8 relative z-10",
                        children: e.jsx("input", {
                          id: "pin-input-react",
                          type: "password",
                          maxLength: 4,
                          placeholder: "****",
                          className: "w-48 h-16 text-center text-3xl tracking-[0.5em] bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-magical-400 focus:ring-1 focus:ring-magical-400 transition-all placeholder:tracking-normal",
                          onChange: function(evt) {
                            window.tempPin = evt.target.value;
                            const btn = document.getElementById('save-pin-btn');
                            if(btn) {
                              if (evt.target.value.length === 4) {
                                btn.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
                              } else {
                                btn.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
                              }
                            }
                          }
                        })
                      }),
                      e.jsxs("div", {
                        className: "flex justify-center relative z-10 gap-4 mt-4",
                        children: [
                          e.jsx("button", {
                            onClick: E,
                            className: "px-8 py-4 rounded-full text-white/30 hover:text-white hover:bg-white/5 transition-all font-serif italic text-lg border border-transparent hover:border-white/5",
                            children: "Go Back"
                          }),
                          e.jsx("button", {
                            id: "save-pin-btn",
                            className: "px-8 py-4 bg-magical-600 text-white rounded-full font-medium hover:bg-magical-500 transition-colors opacity-50 cursor-not-allowed pointer-events-none",
                            onClick: function() {
                              if(window.tempPin && window.tempPin.length === 4) {
                                localStorage.setItem('user_created_pin', window.tempPin);
                                C();
                              }
                            },
                            children: "Save PIN & Continue ✨"
                          })
                        ]
                      })
                    ]
                  }),
                r === 8 &&
                  e.jsxs("div", {
                    className:
                      "space-y-8 animate-fade-in bg-slate-950/75 md:backdrop-blur-3xl md:bg-white/[0.02] p-5 sm:p-6 md:p-10 rounded-[2rem] md:rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col touch-pan-y",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-0 right-0 w-64 h-64 bg-amber-500/[0.05] blur-[120px] rounded-full pointer-events-none",
                      }),
                      e.jsxs("div", {
                        className: "text-center relative z-10 space-y-2",
                        children: [
                          e.jsxs("h2", {
                            className:
                              "text-2xl md:text-5xl font-serif text-white tracking-tight",
                            children: [
                              "Gift a ",
                              e.jsx("span", {
                                className:
                                  "text-amber-400 font-hand text-4xl md:text-7xl",
                                children: "Birthday Flower 🌸",
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-slate-400 font-serif italic text-sm md:text-lg leading-relaxed max-w-lg mx-auto opacity-70",
                            children:
                              '"Choose a beautiful 3D flower to hand over to them, or skip it."',
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10",
                        children: [
                          e.jsxs("div", {
                            className: "space-y-6",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "bg-white/[0.02] border border-white/5 rounded-3xl p-4 space-y-3",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[10px] uppercase tracking-[0.2em] font-bold text-amber-300",
                                    children: "Recipient's Character Style",
                                  }),
                                  e.jsxs("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                      e.jsxs("button", {
                                        type: "button",
                                        onClick: () =>
                                          j((t) => ({
                                            ...t,
                                            recipientGender: "male",
                                          })),
                                        className: `flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-300 ${s.recipientGender === "male" || !s.recipientGender ? "bg-fuchsia-500/10 border-fuchsia-400 text-white shadow-lg shadow-fuchsia-500/10 scale-[1.02]" : "bg-black/20 border-white/10 text-slate-400 hover:border-white/20"}`,
                                        children: [
                                          e.jsx("span", {
                                            className: "text-2xl mb-0.5",
                                            children: "🙋‍♂️",
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-xs font-semibold tracking-wide",
                                            children: "Male Character",
                                          }),
                                        ],
                                      }),
                                      e.jsxs("button", {
                                        type: "button",
                                        onClick: () =>
                                          j((t) => ({
                                            ...t,
                                            recipientGender: "female",
                                          })),
                                        className: `flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-300 ${s.recipientGender === "female" ? "bg-fuchsia-500/10 border-fuchsia-400 text-white shadow-lg shadow-fuchsia-500/10 scale-[1.02]" : "bg-black/20 border-white/10 text-slate-400 hover:border-white/20"}`,
                                        children: [
                                          e.jsx("span", {
                                            className: "text-2xl mb-0.5",
                                            children: "🙋‍♀️",
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-xs font-semibold tracking-wide",
                                            children: "Female Character",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "bg-white/[0.02] border border-white/5 rounded-3xl p-4 space-y-4",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[10px] uppercase tracking-[0.2em] font-bold text-amber-300",
                                    children: "Choose Flower Type",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "grid grid-cols-2 sm:grid-cols-3 gap-2",
                                    children: [
                                      { id: "rose", label: "Rose 🌹" },
                                      { id: "tulip", label: "Tulip 🌷" },
                                      {
                                        id: "sunflower",
                                        label: "Sunflower 🌻",
                                      },
                                      { id: "daisy", label: "Daisy 🌼" },
                                      { id: null, label: "No Flower ❌" },
                                    ].map((t) => {
                                      const a = s.flowerType === t.id;
                                      return e.jsx(
                                        "button",
                                        {
                                          type: "button",
                                          onClick: () => {
                                            (o("flowerType", t.id),
                                              t.id === "sunflower"
                                                ? o("flowerColor", "#fbbf24")
                                                : t.id === "daisy"
                                                  ? o("flowerColor", "#ffffff")
                                                  : t.id &&
                                                    !s.flowerColor &&
                                                    o(
                                                      "flowerColor",
                                                      "#ff3388",
                                                    ));
                                          },
                                          className: `p-2.5 rounded-xl border text-center transition-all ${a ? "bg-amber-500/10 border-amber-400 text-white scale-[1.02] shadow-md" : "bg-black/20 border-white/10 text-slate-400 hover:border-white/20"} ${t.id === null ? "col-span-2 sm:col-span-1" : ""}`,
                                          children: e.jsx("span", {
                                            className:
                                              "text-[11px] sm:text-xs font-bold whitespace-nowrap",
                                            children: t.label,
                                          }),
                                        },
                                        t.label,
                                      );
                                    }),
                                  }),
                                  s.flowerType &&
                                    e.jsxs("div", {
                                      className:
                                        "space-y-2 pt-3 border-t border-white/5",
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-[10px] uppercase tracking-[0.2em] font-bold text-amber-300",
                                          children: "Petal Color",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "flex gap-2 justify-center flex-wrap",
                                          children: [
                                            { hex: "#ff3388", label: "Pink" },
                                            { hex: "#e11d48", label: "Red" },
                                            { hex: "#a855f7", label: "Purple" },
                                            { hex: "#f59e0b", label: "Gold" },
                                            { hex: "#f97316", label: "Orange" },
                                            { hex: "#ffffff", label: "White" },
                                          ].map((t) =>
                                            e.jsx(
                                              "button",
                                              {
                                                type: "button",
                                                onClick: () =>
                                                  o("flowerColor", t.hex),
                                                className: `w-6 h-6 rounded-full border-2 transition-transform ${s.flowerColor === t.hex ? "scale-125 border-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "border-transparent hover:scale-110"}`,
                                                style: {
                                                  backgroundColor: t.hex,
                                                },
                                                title: t.label,
                                              },
                                              t.hex,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "h-60 md:h-auto min-h-[260px] bg-slate-900/30 border border-white/5 rounded-3xl overflow-hidden relative flex flex-col items-center justify-center p-4 touch-pan-y",
                            children: s.flowerType
                              ? e.jsxs("div", {
                                  className: "w-full h-full relative",
                                  children: [
                                    e.jsx(ke, {
                                      type: s.flowerType,
                                      color: s.flowerColor || "#ff3388",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-full text-[9px] uppercase tracking-widest text-amber-300 font-bold border border-white/10 pointer-events-none select-none",
                                      children: "Interactive 3D Preview",
                                    }),
                                  ],
                                })
                              : e.jsxs("div", {
                                  className:
                                    "text-center space-y-2 select-none pointer-events-none",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-4xl block animate-bounce",
                                      children: "🍃",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-slate-400 text-xs font-serif italic max-w-[200px]",
                                      children:
                                        "No flower selected. Senders will skip directly to the walking page.",
                                    }),
                                  ],
                                }),
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "relative z-10 flex justify-center pt-2",
                        children: e.jsxs("button", {
                          type: "button",
                          onClick: () => {
                            (F(!0), B(!1));
                          },
                          className:
                            "inline-flex items-center gap-2 px-5 py-3 rounded-full border border-fuchsia-400/20 hover:border-fuchsia-400/50 bg-fuchsia-500/10 hover:bg-fuchsia-500/20 transition-all text-fuchsia-200 text-xs font-bold uppercase tracking-wider shadow-md group",
                          children: [
                            e.jsx(ee, {
                              size: 15,
                              className:
                                "group-hover:scale-110 transition-transform",
                            }),
                            "Preview how receiver sees it",
                          ],
                        }),
                      }),
                      e.jsxs("div", {
                        className:
                          "flex flex-col md:flex-row gap-4 pt-4 relative z-10",
                        children: [
                          e.jsx("button", {
                            onClick: E,
                            className:
                              "flex-1 py-4 px-8 rounded-full text-white/30 hover:text-white hover:bg-white/5 transition-all font-serif italic text-lg border border-transparent hover:border-white/5",
                            children: "Go Back",
                          }),
                          e.jsx("div", {
                            className: "flex-1 flex justify-center",
                            children: e.jsx(M, {
                              text: f
                                ? "Finalizing Magic..."
                                : (window.hasSaveError ? "Retry" : "Get My Surprise Link ✨"),
                              onClick: be,
                              disabled: f,
                              className:
                                "w-full text-white shadow-magical-600/50",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            ie &&
              e.jsx("div", {
                className: "fixed inset-0 z-[200] bg-black overflow-y-auto",
                children: oe
                  ? e.jsx(i.Suspense, {
                      fallback: e.jsx("div", {
                        className:
                          "w-full h-full flex items-center justify-center bg-black",
                        children: e.jsx(se, {}),
                      }),
                      children: e.jsx(Ue, {
                        previewData: {
                          ...s,
                          id: "preview-" + Date.now(),
                          songUrl: v ? URL.createObjectURL(v) : s.songUrl || "",
                          voiceMessageUrl: s.voiceMessageUrl || "",
                          cardPhotoBase64: s.cardPhotoBase64 || "",
                          createdAt: Date.now(),
                        },
                        onClose: () => {
                          (F(!1), B(!1));
                        },
                      }),
                    })
                  : e.jsxs("div", {
                      className:
                        "relative w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute w-[400px] h-[400px] bg-gradient-to-r from-fuchsia-500/20 via-purple-500/15 to-pink-500/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none",
                        }),
                        e.jsx("button", {
                          onClick: () => F(!1),
                          className:
                            "absolute top-6 right-6 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all",
                          "aria-label": "Close preview",
                          children: e.jsxs("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            children: [
                              e.jsx("line", {
                                x1: "18",
                                y1: "6",
                                x2: "6",
                                y2: "18",
                              }),
                              e.jsx("line", {
                                x1: "6",
                                y1: "6",
                                x2: "18",
                                y2: "18",
                              }),
                            ],
                          }),
                        }),
                        e.jsxs("div", {
                          className:
                            "relative z-10 text-center space-y-8 max-w-md animate-fade-in",
                          children: [
                            e.jsx("div", {
                              className:
                                "mx-auto w-20 h-20 rounded-full bg-fuchsia-400/15 flex items-center justify-center",
                              children: e.jsx(ee, {
                                size: 36,
                                className: "text-fuchsia-300",
                              }),
                            }),
                            e.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                e.jsx("h2", {
                                  className:
                                    "text-3xl md:text-5xl font-serif text-white tracking-tight",
                                  children: "Preview Your Surprise",
                                }),
                                e.jsxs("p", {
                                  className:
                                    "text-slate-400 font-serif italic text-sm md:text-lg leading-relaxed",
                                  children: [
                                    "See exactly how ",
                                    e.jsx("span", {
                                      className: "text-white font-bold",
                                      children:
                                        s.receiverName || "the receiver",
                                    }),
                                    " will experience your magical birthday surprise.",
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold",
                                  children: "Full interactive experience",
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex flex-wrap justify-center gap-2 text-[10px] text-slate-400",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "bg-white/5 px-3 py-1.5 rounded-full border border-white/5",
                                      children: "🎈 Balloons",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "bg-white/5 px-3 py-1.5 rounded-full border border-white/5",
                                      children: "🎂 3D Cake",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "bg-white/5 px-3 py-1.5 rounded-full border border-white/5",
                                      children: "🎡 Wheel",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "bg-white/5 px-3 py-1.5 rounded-full border border-white/5",
                                      children: "💌 Card",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "bg-white/5 px-3 py-1.5 rounded-full border border-white/5",
                                      children: "🎁 Gift",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("button", {
                              onClick: () => B(!0),
                              className:
                                "inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500 text-white font-bold text-base tracking-wider uppercase shadow-[0_0_60px_rgba(217,70,239,0.4)] hover:shadow-[0_0_80px_rgba(217,70,239,0.6)] hover:brightness-110 transition-all transform active:scale-95",
                              children: [
                                e.jsx("span", {
                                  className: "text-lg",
                                  children: "▶",
                                }),
                                "Start Preview Experience",
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-[10px] text-slate-500",
                              children:
                                "You can close anytime and return to editing",
                            }),
                          ],
                        }),
                      ],
                    }),
              }),
          ],
        });
  };
export { at as Create };

