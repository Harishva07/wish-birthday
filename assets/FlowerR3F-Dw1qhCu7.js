import {
  r as c,
  j as e,
  V as re,
  a5 as ce,
  ac as de,
  W as U,
  a9 as he,
  a6 as me,
  ad as xe,
} from "./vendor-core-CjvpFyCc.js";
import {
  A as ue,
  a9 as N,
  aa as P,
  a5 as D,
  ao as te,
  a8 as $,
  D as B,
  ab as pe,
  c as fe,
  d as X,
  ae as oe,
  a6 as _,
} from "./vendor-three-BgEEYt64.js";
import { P as ge, b as je } from "./constants-DMfe1hbA.js";
import { C as ye } from "./index-DBifMb9v.js";
const we = () =>
    c.useMemo(() => {
      const n = document.createElement("canvas");
      ((n.width = 128), (n.height = 128));
      const r = n.getContext("2d");
      if (r) {
        ((r.fillStyle = "#8080ff"), r.fillRect(0, 0, 128, 128));
        for (let i = 0; i < 150; i++) {
          const m = Math.random() * 128,
            x = Math.random() * 128,
            d = 1 + Math.random() * 1.5,
            F = 128 + Math.floor(Math.random() * 20),
            S = 128 + Math.floor(Math.random() * 20);
          ((r.fillStyle = `rgb(${F}, ${S}, 255)`),
            r.beginPath(),
            r.arc(m, x, d, 0, Math.PI * 2),
            r.fill());
        }
      }
      const t = new N(n);
      ((t.wrapS = P), (t.wrapT = P));
      const o = document.createElement("canvas");
      ((o.width = 128), (o.height = 128));
      const a = o.getContext("2d");
      if (a) {
        ((a.fillStyle = "#8080ff"), a.fillRect(0, 0, 128, 128));
        for (let i = 0; i < 50; i++) {
          const m = Math.random() * 128,
            x = Math.random() * 128,
            d = 124 + Math.floor(Math.random() * 8);
          ((a.fillStyle = `rgb(${d}, ${d}, 255)`), a.fillRect(m, x, 1.5, 1.5));
        }
      }
      const s = new N(o);
      ((s.wrapS = P), (s.wrapT = P));
      const l = document.createElement("canvas");
      ((l.width = 256), (l.height = 256));
      const h = l.getContext("2d");
      if (h) {
        const i = h.createLinearGradient(0, 0, 256, 0);
        (i.addColorStop(0, "#3e1b10"),
          i.addColorStop(0.5, "#4f2518"),
          i.addColorStop(1, "#34150b"),
          (h.fillStyle = i),
          h.fillRect(0, 0, 256, 256),
          (h.strokeStyle = "rgba(25, 8, 4, 0.25)"),
          (h.lineWidth = 1.5));
        for (let m = 0; m < 8; m++) {
          h.beginPath();
          let x = Math.random() * 256;
          h.moveTo(x, 0);
          for (let d = 0; d <= 256; d += 30)
            ((x += Math.sin(d * 0.02) * 4 + (Math.random() - 0.5) * 1.5),
              h.lineTo(x, d));
          h.stroke();
        }
      }
      const g = new N(l);
      return { frostingNormal: t, paperNormal: s, woodBase: g };
    }, []),
  Me = (n) => {
    const r = document.createElement("canvas");
    ((r.width = 256), (r.height = 256));
    const t = r.getContext("2d");
    if (t) {
      ((t.fillStyle = "#ebd09e"),
        t.fillRect(0, 0, 256, 256),
        (t.fillStyle = "#d2b48c"));
      for (let a = 0; a < 3e3; a++) {
        const s = Math.random() * 256,
          l = Math.random() * 256;
        t.fillRect(s, l, 1.5, 1.5);
      }
      ((t.fillStyle = n),
        t.fillRect(0, 45, 256, 22),
        t.fillRect(0, 115, 256, 22),
        t.fillRect(0, 185, 256, 22),
        (t.fillStyle = "#ffffff"),
        t.fillRect(0, 52, 256, 6),
        t.fillRect(0, 122, 256, 6),
        t.fillRect(0, 192, 256, 6));
    }
    const o = new N(r);
    return ((o.wrapS = P), (o.wrapT = P), o);
  },
  be = (n) => {
    const r = document.createElement("canvas");
    ((r.width = 1024), (r.height = 240));
    const t = r.getContext("2d");
    if (t) {
      const a = t.createRadialGradient(512, 120, 50, 512, 120, 600);
      (a.addColorStop(0, "#2d0a0e"),
        a.addColorStop(1, "#110203"),
        (t.fillStyle = a),
        t.fillRect(0, 0, 1024, 240),
        (t.fillStyle = "rgba(255, 224, 130, 0.12)"));
      for (let m = 0; m < 50; m++) {
        const x = Math.random() * 944 + 40,
          d = Math.random() * 160 + 40,
          F = 1 + Math.random() * 2.5;
        (t.beginPath(), t.arc(x, d, F, 0, Math.PI * 2), t.fill());
      }
      ((t.strokeStyle = "#4e342e"),
        (t.lineWidth = 14),
        t.strokeRect(30, 30, 964, 180),
        (t.strokeStyle = "#d4af37"),
        (t.lineWidth = 6),
        t.strokeRect(30, 30, 964, 180),
        (t.strokeStyle = "#ffe082"),
        (t.lineWidth = 2),
        t.strokeRect(28, 28, 968, 184));
      const s = (m, x) => {
          (t.save(),
            (t.fillStyle = "#0a0304"),
            t.beginPath(),
            t.arc(m, x, 9, 0, Math.PI * 2),
            t.fill(),
            (t.strokeStyle = "#6d4c41"),
            (t.lineWidth = 1.5),
            t.stroke(),
            (t.shadowColor = "#ffea00"),
            (t.shadowBlur = 18));
          const d = t.createRadialGradient(m, x, 1, m, x, 7);
          (d.addColorStop(0, "#ffffff"),
            d.addColorStop(0.3, "#ffeb3b"),
            d.addColorStop(1, "#f57f17"),
            (t.fillStyle = d),
            t.beginPath(),
            t.arc(m, x, 6.5, 0, Math.PI * 2),
            t.fill(),
            t.restore());
        },
        l = 30,
        h = 30,
        g = 48;
      for (let m = l; m <= 1024 - l; m += g) (s(m, h), s(m, 240 - h));
      for (let m = h + g; m <= 240 - h - g; m += g) (s(l, m), s(1024 - l, m));
      const i = t.createLinearGradient(0, 40, 0, 200);
      (i.addColorStop(0, "#fff8e1"),
        i.addColorStop(0.25, "#ffe082"),
        i.addColorStop(0.5, "#ffb300"),
        i.addColorStop(0.8, "#ff8f00"),
        i.addColorStop(1, "#e65100"),
        (t.shadowColor = "rgba(0, 0, 0, 0.9)"),
        (t.shadowBlur = 10),
        (t.shadowOffsetX = 4),
        (t.shadowOffsetY = 4),
        (t.font = "italic bold 32px Georgia, serif"),
        (t.fillStyle = "#ffe082"),
        (t.textAlign = "center"),
        t.fillText("✦   Happy   ✦", 512, 65),
        (t.font = "bold italic 52px Georgia, serif"),
        (t.fillStyle = i),
        t.fillText("Birthday", 512, 125),
        (t.font = "bold 38px sans-serif"),
        (t.fillStyle = "#ffffff"),
        t.fillText(n ? n.toUpperCase() : "YOU!", 512, 180));
    }
    return new N(r);
  },
  ve = (n) => {
    const r = document.createElement("canvas");
    ((r.width = 512), (r.height = 256));
    const t = r.getContext("2d");
    if (t) {
      ((t.fillStyle = "#3E2723"),
        t.fillRect(0, 0, 512, 256),
        (t.strokeStyle = "#FFD700"),
        (t.lineWidth = 10),
        t.strokeRect(10, 10, 492, 236),
        (t.font = 'bold 50px "Dancing Script", Georgia, serif'),
        (t.fillStyle = "#FFD700"),
        (t.textAlign = "center"),
        (t.textBaseline = "middle"));
      const o = n.split(`
`),
        a = 65,
        s = 128 - ((o.length - 1) * a) / 2;
      o.forEach((l, h) => {
        t.fillText(l, 256, s + h * a);
      });
    }
    return new N(r);
  },
  Se = () => {
    const n = document.createElement("canvas");
    ((n.width = 128), (n.height = 256));
    const r = n.getContext("2d");
    if (r) {
      ((r.fillStyle = "#ffffff"),
        r.fillRect(0, 0, 128, 256),
        (r.fillStyle = "#e11d48"));
      for (let o = -128; o < 256; o += 40)
        (r.beginPath(),
          r.moveTo(0, o),
          r.lineTo(128, o + 80),
          r.lineTo(128, o + 110),
          r.lineTo(0, o + 30),
          r.closePath(),
          r.fill());
    }
    const t = new N(n);
    return ((t.wrapS = P), (t.wrapT = P), t.repeat.set(1, 4), t);
  },
  Ce = ({ position: n, candleState: r, waxMat: t }) => {
    const o = c.useRef(null),
      a = c.useRef(null),
      s = c.useRef(null),
      l = c.useRef(r === "extinguished" ? 0 : 1),
      h = c.useRef(null);
    return (
      c.useEffect(() => {
        r !== "extinguished" &&
          ((h.current = null), s.current && (s.current.visible = !1));
      }, [r]),
      U(({ clock: g }, i) => {
        const m = r === "lit" ? 1 : r === "blowing" ? 0.42 : 0;
        if (
          ((l.current = _.damp(l.current, m, 11, i)), o.current && a.current)
        ) {
          const x = g.getElapsedTime(),
            d = Math.sin(x * 15) * 0.05 + Math.cos(x * 23) * 0.03,
            F = r === "blowing" ? 0.34 : 0;
          ((o.current.visible = l.current > 0.015),
            o.current.scale.set(
              l.current * (1 + d),
              l.current * (1.25 + d * 1.5),
              l.current * (1 + d),
            ),
            (o.current.rotation.z = _.damp(o.current.rotation.z, F, 12, i)),
            (a.current.intensity = l.current * (1.8 + d * 0.4)));
        }
        if (r === "extinguished" && s.current) {
          h.current === null &&
            ((h.current = g.getElapsedTime()),
            (s.current.visible = !0),
            s.current.position.set(0, 0.42, 0),
            s.current.scale.setScalar(0.25));
          const x = Math.min((g.getElapsedTime() - h.current) / 1.15, 1);
          ((s.current.position.y = 0.42 + x * 0.55),
            (s.current.position.x = Math.sin(x * 9) * 0.025),
            s.current.scale.setScalar(0.25 + x * 0.9),
            x >= 1 && (s.current.visible = !1));
        }
      }),
      e.jsxs("group", {
        position: n,
        children: [
          e.jsxs("mesh", {
            castShadow: !0,
            receiveShadow: !0,
            children: [
              e.jsx("cylinderGeometry", { args: [0.04, 0.04, 0.6, 16] }),
              e.jsx("primitive", { object: t, attach: "material" }),
            ],
          }),
          e.jsxs("mesh", {
            position: [0, 0.32, 0],
            children: [
              e.jsx("cylinderGeometry", { args: [0.005, 0.005, 0.06, 8] }),
              e.jsx("meshStandardMaterial", {
                color: "#222222",
                roughness: 0.9,
              }),
            ],
          }),
          e.jsxs("group", {
            ref: o,
            position: [0, 0.42, 0],
            children: [
              e.jsxs("mesh", {
                children: [
                  e.jsx("sphereGeometry", { args: [0.05, 16, 16] }),
                  e.jsx("meshBasicMaterial", { color: "#ffa933" }),
                ],
              }),
              e.jsx("pointLight", {
                ref: a,
                color: "#ff7f00",
                intensity: 1.8,
                distance: 4,
                decay: 1.8,
              }),
            ],
          }),
          e.jsxs("group", {
            ref: s,
            visible: !1,
            children: [
              e.jsxs("mesh", {
                position: [-0.018, 0, 0],
                children: [
                  e.jsx("sphereGeometry", { args: [0.025, 8, 8] }),
                  e.jsx("meshBasicMaterial", {
                    color: "#cbd5e1",
                    transparent: !0,
                    opacity: 0.42,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0.02, 0.06, 0.01],
                children: [
                  e.jsx("sphereGeometry", { args: [0.022, 8, 8] }),
                  e.jsx("meshBasicMaterial", {
                    color: "#94a3b8",
                    transparent: !0,
                    opacity: 0.28,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [-0.012, 0.12, -0.01],
                children: [
                  e.jsx("sphereGeometry", { args: [0.018, 8, 8] }),
                  e.jsx("meshBasicMaterial", {
                    color: "#cbd5e1",
                    transparent: !0,
                    opacity: 0.2,
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  Ge = () => {
    const n = c.useMemo(() => {
        const t = [];
        for (let o = 0; o < 16; o++) {
          const a = -4.5 + o * 0.6,
            s = 3.4 + Math.sin(o * 0.8) * 0.15;
          t.push(new X(a, s, -4.5));
        }
        return t;
      }, []),
      r = c.useMemo(() => new oe(n), [n]);
    return e.jsxs("group", {
      children: [
        e.jsxs("mesh", {
          children: [
            e.jsx("tubeGeometry", { args: [r, 40, 0.015, 8, !1] }),
            e.jsx("meshStandardMaterial", { color: "#112211", roughness: 0.9 }),
          ],
        }),
        n.map((t, o) => {
          const a = o % 2 === 0;
          return e.jsxs(
            "group",
            {
              position: [t.x, t.y, t.z],
              children: [
                e.jsxs("mesh", {
                  position: [0, 0.06, 0],
                  children: [
                    e.jsx("cylinderGeometry", { args: [0.02, 0.02, 0.05, 8] }),
                    e.jsx("meshStandardMaterial", {
                      color: "#444",
                      metalness: 0.8,
                    }),
                  ],
                }),
                e.jsxs("mesh", {
                  children: [
                    e.jsx("sphereGeometry", { args: [0.045, 16, 16] }),
                    e.jsx("meshPhysicalMaterial", {
                      color: a ? "#ffeedd" : "#ffffff",
                      emissive: a ? "#ffa933" : "#000000",
                      emissiveIntensity: a ? 2.5 : 0,
                      transmission: 0.9,
                      roughness: 0.1,
                      thickness: 0.05,
                    }),
                  ],
                }),
                a &&
                  e.jsx("pointLight", {
                    color: "#ffaa44",
                    intensity: 0.6,
                    distance: 3,
                    decay: 2,
                  }),
              ],
            },
            o,
          );
        }),
      ],
    });
  },
  w = ({ color: n, normalMap: r }) =>
    e.jsx("meshPhysicalMaterial", {
      color: n,
      roughness: 0.65,
      metalness: 0.02,
      clearcoat: 0.1,
      clearcoatRoughness: 0.3,
      normalMap: r,
      normalScale: new fe(0.25, 0.25),
      reflectivity: 0.15,
    }),
  Fe = ({
    flavor: n,
    style: r,
    candles: t,
    candlesLit: o,
    candleState: a,
    isCut: s,
    cutState: l = s ? "cut" : "idle",
    onCut: h,
    receiverName: g,
    textures: i,
    showKnife: m = !0,
    isMobile: x = !1,
  }) => {
    const { frostingNormal: d, paperNormal: F, woodBase: S } = i,
      b = c.useRef(null),
      C = c.useRef(null),
      L = c.useRef(null),
      q = c.useRef(null),
      A = c.useRef(null),
      [K, T] = c.useState(!1),
      [O, M] = c.useState(!1),
      u = c.useMemo(() => new D(je[n] || 16758725), [n]),
      v = c.useMemo(() => "#" + u.getHexString(), [u]),
      y = c.useMemo(() => Me(v), [v]),
      G = () => {
        switch (r) {
          case "modern":
            return e.jsxs("mesh", {
              castShadow: !0,
              receiveShadow: !0,
              children: [
                e.jsx("boxGeometry", { args: [2.3, 1.1, 2.3] }),
                e.jsx(w, { color: u, normalMap: d }),
              ],
            });
          case "hexagon":
            return e.jsxs("mesh", {
              castShadow: !0,
              receiveShadow: !0,
              children: [
                e.jsx("cylinderGeometry", { args: [1.5, 1.5, 1.1, 6] }),
                e.jsx(w, { color: u, normalMap: d }),
              ],
            });
          case "sphere":
            return e.jsxs("mesh", {
              castShadow: !0,
              receiveShadow: !0,
              position: [0, 0.35, 0],
              children: [
                e.jsx("sphereGeometry", { args: [1, 32, 32] }),
                e.jsx(w, { color: u, normalMap: d }),
              ],
            });
          case "bundt":
            return e.jsxs("mesh", {
              castShadow: !0,
              receiveShadow: !0,
              rotation: [Math.PI / 2, 0, 0],
              position: [0, 0.25, 0],
              children: [
                e.jsx("torusGeometry", { args: [0.8, 0.3, 16, 48] }),
                e.jsx(w, { color: u, normalMap: d }),
              ],
            });
          case "pillow":
            return e.jsxs("mesh", {
              castShadow: !0,
              receiveShadow: !0,
              scale: [1.2, 0.6, 1.2],
              position: [0, 0.2, 0],
              children: [
                e.jsx("sphereGeometry", { args: [1.1, 32, 32] }),
                e.jsx(w, { color: u, normalMap: d }),
              ],
            });
          case "grand":
            return e.jsxs("group", {
              children: [
                e.jsxs("mesh", {
                  position: [0, -0.275, 0],
                  castShadow: !0,
                  receiveShadow: !0,
                  children: [
                    e.jsx("cylinderGeometry", { args: [1.5, 1.5, 0.55, 48] }),
                    e.jsx(w, { color: u, normalMap: d }),
                  ],
                }),
                e.jsxs("mesh", {
                  position: [0, 0.275, 0],
                  castShadow: !0,
                  receiveShadow: !0,
                  children: [
                    e.jsx("cylinderGeometry", { args: [1, 1, 0.55, 48] }),
                    e.jsx(w, { color: u, normalMap: d }),
                  ],
                }),
              ],
            });
          case "tiered_square":
            return e.jsxs("group", {
              children: [
                e.jsxs("mesh", {
                  position: [0, -0.275, 0],
                  castShadow: !0,
                  receiveShadow: !0,
                  children: [
                    e.jsx("boxGeometry", { args: [2.3, 0.55, 2.3] }),
                    e.jsx(w, { color: u, normalMap: d }),
                  ],
                }),
                e.jsxs("mesh", {
                  position: [0, 0.275, 0],
                  castShadow: !0,
                  receiveShadow: !0,
                  children: [
                    e.jsx("boxGeometry", { args: [1.6, 0.55, 1.6] }),
                    e.jsx(w, { color: u, normalMap: d }),
                  ],
                }),
              ],
            });
          case "tower":
            return e.jsxs("group", {
              children: [
                e.jsxs("mesh", {
                  position: [0, -0.36, 0],
                  castShadow: !0,
                  receiveShadow: !0,
                  children: [
                    e.jsx("cylinderGeometry", { args: [1.5, 1.5, 0.36, 48] }),
                    e.jsx(w, { color: u, normalMap: d }),
                  ],
                }),
                e.jsxs("mesh", {
                  position: [0, 0, 0],
                  castShadow: !0,
                  receiveShadow: !0,
                  children: [
                    e.jsx("cylinderGeometry", { args: [1.1, 1.1, 0.36, 48] }),
                    e.jsx(w, { color: u, normalMap: d }),
                  ],
                }),
                e.jsxs("mesh", {
                  position: [0, 0.36, 0],
                  castShadow: !0,
                  receiveShadow: !0,
                  children: [
                    e.jsx("cylinderGeometry", { args: [0.7, 0.7, 0.36, 48] }),
                    e.jsx(w, { color: u, normalMap: d }),
                  ],
                }),
              ],
            });
          case "heart": {
            const p = new pe();
            return (
              p.moveTo(0, 0.4),
              p.bezierCurveTo(0.15, 0.7, 0.7, 0.7, 0.7, 0.2),
              p.bezierCurveTo(0.7, -0.3, 0.2, -0.7, 0, -1.1),
              p.bezierCurveTo(-0.2, -0.7, -0.7, -0.3, -0.7, 0.2),
              p.bezierCurveTo(-0.7, 0.7, -0.15, 0.7, 0, 0.4),
              e.jsxs("mesh", {
                castShadow: !0,
                receiveShadow: !0,
                rotation: [-Math.PI / 2, 0, 0],
                position: [0, -0.55, 0],
                scale: [1.5, 1.5, 1],
                children: [
                  e.jsx("extrudeGeometry", {
                    args: [
                      p,
                      {
                        depth: 1.1,
                        bevelEnabled: !0,
                        bevelSegments: 3,
                        steps: 1,
                        bevelSize: 0.05,
                        bevelThickness: 0.05,
                      },
                    ],
                  }),
                  e.jsx(w, { color: u, normalMap: d }),
                ],
              })
            );
          }
          case "classic":
          default:
            return e.jsxs("mesh", {
              castShadow: !0,
              receiveShadow: !0,
              children: [
                e.jsx("cylinderGeometry", { args: [1.5, 1.5, 1.1, 48] }),
                e.jsx(w, { color: u, normalMap: d }),
              ],
            });
        }
      },
      k = c.useMemo(() => new te({ color: 16777200, roughness: 0.75 }), []),
      R = c.useMemo(
        () =>
          new $({
            color: 15724008,
            roughness: 0.45,
            metalness: 0.01,
            clearcoat: 0.1,
            clearcoatRoughness: 0.2,
            reflectivity: 0.2,
          }),
        [],
      ),
      E = c.useMemo(() => Se(), []),
      I = c.useMemo(() => new te({ map: E, roughness: 0.4 }), [E]),
      V = c.useMemo(() => be(g || ""), [g]),
      ae = c.useMemo(
        () =>
          ve(`Happy Birthday
${g || "You"}`),
        [g],
      ),
      ne = a || (o ? "lit" : "extinguished");
    c.useEffect(() => {
      (l === "cutting" && (A.current = null),
        l === "idle" &&
          C.current &&
          (C.current.position.set(0, 0, 0), C.current.rotation.set(0, 0, 0)));
    }, [l]);
    const { viewport: Z } = de(),
      ie = (p) => {
        var f, j;
        (p.stopPropagation(),
          l === "idle" &&
            ((j = (f = p.target) == null ? void 0 : f.setPointerCapture) ==
              null || j.call(f, p.pointerId),
            M(!0)));
      },
      le = (p) => {
        (p.stopPropagation(), l === "idle" && h());
      },
      Q = (p) => {
        var f, j;
        ((j =
          (f = p == null ? void 0 : p.target) == null
            ? void 0
            : f.releasePointerCapture) == null || j.call(f, p.pointerId),
          M(!1));
      },
      J = ["classic", "hexagon", "grand", "tower", "bundt"].includes(r),
      ee = ["modern", "tiered_square"].includes(r);
    return (
      U(({ clock: p, pointer: f }, j) => {
        const Y = p.getElapsedTime();
        if (l === "cutting" && b.current) {
          A.current === null && (A.current = Y);
          const W = Math.min((Y - A.current) / 0.85, 1),
            z = 1 - Math.pow(1 - W, 3);
          (b.current.position.set(0.1, 1.15 - z * 0.96, 0.4),
            b.current.rotation.set(
              0.3 + z * 0.35,
              -Math.PI / 4,
              -0.4 - z * 0.18,
            ));
        }
        if (
          (l === "cut" &&
            C.current &&
            ((C.current.position.x = _.damp(
              C.current.position.x,
              0.87,
              5.5,
              j,
            )),
            (C.current.position.z = _.damp(C.current.position.z, 0.22, 5.5, j)),
            (C.current.rotation.y = _.damp(
              C.current.rotation.y,
              -0.16,
              5.5,
              j,
            )),
            L.current &&
              ((L.current.position.y = _.damp(
                L.current.position.y,
                0.06,
                4.5,
                j,
              )),
              (L.current.rotation.y += j * 1.4))),
          O && b.current && l === "idle")
        ) {
          const W = f.x * Z.width * 0.55,
            z = -f.y * Z.height * 0.55;
          (b.current.position.set(W, 0.22, z),
            b.current.rotation.set(-0.4, -Math.PI / 4, -0.5),
            Math.sqrt(W * W + z * z) < 1.35 && (h(), M(!1)));
        } else
          !O &&
            b.current &&
            l === "idle" &&
            ((b.current.position.y = 1.15 + Math.sin(Y * 2.5) * 0.03),
            (b.current.position.x = 0),
            (b.current.position.z = 0.4),
            b.current.rotation.set(0.3, -Math.PI / 4, -0.4));
        q.current && (q.current.rotation.y += j * 0.18);
      }),
      e.jsxs("group", {
        onPointerUp: Q,
        onPointerCancel: Q,
        children: [
          e.jsxs("mesh", {
            position: [0, -0.54, 0],
            children: [
              e.jsx("boxGeometry", { args: [5.8, 0.06, 4.3] }),
              e.jsx("meshStandardMaterial", {
                color: "#7c4110",
                roughness: 0.6,
              }),
            ],
          }),
          e.jsxs("mesh", {
            position: [0, -0.48, 0],
            castShadow: !0,
            receiveShadow: !0,
            children: [
              e.jsx("boxGeometry", { args: [6, 0.1, 4.5] }),
              e.jsx("meshStandardMaterial", {
                color: "#b5651d",
                roughness: 0.4,
                metalness: 0.1,
              }),
            ],
          }),
          e.jsxs("mesh", {
            position: [0, -0.425, 0],
            children: [
              e.jsx("boxGeometry", { args: [6.04, 0.02, 4.54] }),
              e.jsx("meshStandardMaterial", {
                color: "#d4af37",
                metalness: 0.9,
                roughness: 0.1,
              }),
            ],
          }),
          e.jsxs("mesh", {
            position: [0, -0.42, 0],
            receiveShadow: !0,
            children: [
              e.jsx("boxGeometry", { args: [2.4, 0.005, 4.48] }),
              e.jsx("meshStandardMaterial", {
                color: "#ffffff",
                roughness: 0.8,
              }),
            ],
          }),
          e.jsxs("mesh", {
            position: [-1.8, -1, 1.3],
            castShadow: !0,
            children: [
              e.jsx("cylinderGeometry", { args: [0.07, 0.05, 1, 16] }),
              e.jsx("meshStandardMaterial", {
                color: "#7c4110",
                roughness: 0.6,
              }),
            ],
          }),
          e.jsxs("mesh", {
            position: [1.8, -1, 1.3],
            castShadow: !0,
            children: [
              e.jsx("cylinderGeometry", { args: [0.07, 0.05, 1, 16] }),
              e.jsx("meshStandardMaterial", {
                color: "#7c4110",
                roughness: 0.6,
              }),
            ],
          }),
          e.jsxs("mesh", {
            position: [-1.8, -1, -1.3],
            castShadow: !0,
            children: [
              e.jsx("cylinderGeometry", { args: [0.07, 0.05, 1, 16] }),
              e.jsx("meshStandardMaterial", {
                color: "#7c4110",
                roughness: 0.6,
              }),
            ],
          }),
          e.jsxs("mesh", {
            position: [1.8, -1, -1.3],
            castShadow: !0,
            children: [
              e.jsx("cylinderGeometry", { args: [0.07, 0.05, 1, 16] }),
              e.jsx("meshStandardMaterial", {
                color: "#7c4110",
                roughness: 0.6,
              }),
            ],
          }),
          e.jsxs("group", {
            position: [0, -0.45, 0],
            children: [
              e.jsxs("mesh", {
                castShadow: !0,
                receiveShadow: !0,
                children: [
                  e.jsx("cylinderGeometry", { args: [2, 2, 0.1, 48] }),
                  e.jsx("primitive", { object: R, attach: "material" }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0, -0.2, 0],
                castShadow: !0,
                children: [
                  e.jsx("cylinderGeometry", { args: [0.3, 0.6, 0.4, 32] }),
                  e.jsx("primitive", { object: R, attach: "material" }),
                ],
              }),
            ],
          }),
          e.jsxs("group", {
            ref: q,
            position: [0, -0.4, 0],
            children: [
              G(),
              l !== "idle" &&
                e.jsxs(e.Fragment, {
                  children: [
                    e.jsxs("group", {
                      ref: C,
                      rotation: [0, 0.06, 0],
                      children: [
                        J &&
                          e.jsxs(e.Fragment, {
                            children: [
                              e.jsxs("mesh", {
                                position: [0.48, 0, 0.1],
                                castShadow: !0,
                                receiveShadow: !0,
                                children: [
                                  e.jsx("cylinderGeometry", {
                                    args: [
                                      0.74,
                                      0.74,
                                      1.1,
                                      32,
                                      1,
                                      !1,
                                      -0.28,
                                      0.56,
                                    ],
                                  }),
                                  e.jsx(w, { color: u, normalMap: d }),
                                ],
                              }),
                              e.jsxs("mesh", {
                                position: [0.68, 0, 0.1],
                                rotation: [0, -0.28, 0],
                                castShadow: !0,
                                children: [
                                  e.jsx("planeGeometry", {
                                    args: [0.74, 1.08],
                                  }),
                                  e.jsx("meshStandardMaterial", {
                                    map: y,
                                    roughness: 0.62,
                                    side: B,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ee &&
                          e.jsxs(e.Fragment, {
                            children: [
                              e.jsxs("mesh", {
                                position: [0.52, 0, 0.1],
                                castShadow: !0,
                                receiveShadow: !0,
                                children: [
                                  e.jsx("boxGeometry", {
                                    args: [0.72, 1.08, 0.62],
                                  }),
                                  e.jsx(w, { color: u, normalMap: d }),
                                ],
                              }),
                              e.jsxs("mesh", {
                                position: [0.53, 0, 0.425],
                                castShadow: !0,
                                children: [
                                  e.jsx("planeGeometry", { args: [0.7, 1.04] }),
                                  e.jsx("meshStandardMaterial", {
                                    map: y,
                                    roughness: 0.62,
                                    side: B,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        !J &&
                          !ee &&
                          e.jsxs(e.Fragment, {
                            children: [
                              e.jsxs("mesh", {
                                position: [0.5, 0.02, 0.08],
                                castShadow: !0,
                                receiveShadow: !0,
                                scale: [1, 0.9, 0.78],
                                children: [
                                  e.jsx("sphereGeometry", {
                                    args: [0.55, 24, 20],
                                  }),
                                  e.jsx(w, { color: u, normalMap: d }),
                                ],
                              }),
                              e.jsxs("mesh", {
                                position: [0.68, 0.02, 0.08],
                                rotation: [0, Math.PI / 2, 0],
                                castShadow: !0,
                                children: [
                                  e.jsx("planeGeometry", { args: [0.55, 0.9] }),
                                  e.jsx("meshStandardMaterial", {
                                    map: y,
                                    roughness: 0.62,
                                    side: B,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    e.jsx("group", {
                      ref: L,
                      position: [0.5, 0, 0.13],
                      children: [
                        [0, 0, 0],
                        [0.12, 0.01, 0.04],
                        [-0.1, 0.015, -0.03],
                        [0.04, 0.02, -0.08],
                      ].map(([p, f, j], Y) =>
                        e.jsxs(
                          "mesh",
                          {
                            position: [p, f, j],
                            castShadow: !0,
                            children: [
                              e.jsx("sphereGeometry", { args: [0.026, 8, 8] }),
                              e.jsx("meshStandardMaterial", {
                                color: u,
                                roughness: 0.7,
                              }),
                            ],
                          },
                          Y,
                        ),
                      ),
                    }),
                  ],
                }),
              Array.from({ length: 14 }).map((p, f) => {
                const j = (f / 14) * Math.PI * 2;
                return e.jsxs(
                  "mesh",
                  {
                    position: [Math.cos(j) * 1.35, 0.56, Math.sin(j) * 1.35],
                    castShadow: !0,
                    children: [
                      e.jsx("sphereGeometry", { args: [0.1, 16, 16] }),
                      e.jsx("primitive", { object: k, attach: "material" }),
                    ],
                  },
                  f,
                );
              }),
              l !== "cut" &&
                Array.from({ length: t }).map((p, f) => {
                  const j = (f - (t - 1) / 2) * 0.28;
                  return e.jsx(
                    Ce,
                    { position: [j, 0.85, 0], candleState: ne, waxMat: I },
                    f,
                  );
                }),
              e.jsxs("mesh", {
                position: [0, 0.56, 0.8],
                rotation: [-0.2, 0, 0],
                castShadow: !0,
                children: [
                  e.jsx("boxGeometry", { args: [1.2, 0.03, 0.6] }),
                  e.jsx("meshStandardMaterial", { map: ae }),
                ],
              }),
            ],
          }),
          e.jsxs("group", {
            position: [2.45, -0.45, 0.5],
            rotation: [0, -Math.PI / 6, 0],
            children: [
              e.jsxs("mesh", {
                castShadow: !0,
                receiveShadow: !0,
                children: [
                  e.jsx("boxGeometry", { args: [0.8, 0.8, 0.8] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#ec4899",
                    roughness: 0.4,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0, 0, 0],
                castShadow: !0,
                children: [
                  e.jsx("boxGeometry", { args: [0.82, 0.82, 0.1] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#ffffff",
                    roughness: 0.2,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0, 0, 0],
                castShadow: !0,
                children: [
                  e.jsx("boxGeometry", { args: [0.1, 0.82, 0.82] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#ffffff",
                    roughness: 0.2,
                  }),
                ],
              }),
              e.jsxs("group", {
                position: [0, 0.42, 0],
                children: [
                  e.jsxs("mesh", {
                    rotation: [0, Math.PI / 4, 0],
                    castShadow: !0,
                    children: [
                      e.jsx("torusGeometry", { args: [0.15, 0.04, 8, 24] }),
                      e.jsx("meshStandardMaterial", {
                        color: "#ffffff",
                        roughness: 0.2,
                      }),
                    ],
                  }),
                  e.jsxs("mesh", {
                    rotation: [0, -Math.PI / 4, 0],
                    castShadow: !0,
                    children: [
                      e.jsx("torusGeometry", { args: [0.15, 0.04, 8, 24] }),
                      e.jsx("meshStandardMaterial", {
                        color: "#ffffff",
                        roughness: 0.2,
                      }),
                    ],
                  }),
                  e.jsxs("mesh", {
                    position: [0, -0.04, 0],
                    castShadow: !0,
                    children: [
                      e.jsx("sphereGeometry", { args: [0.06, 12, 12] }),
                      e.jsx("meshStandardMaterial", {
                        color: "#ffffff",
                        roughness: 0.2,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("group", {
            position: [2.85, -0.6, 1.1],
            rotation: [0, Math.PI / 4, 0],
            children: [
              e.jsxs("mesh", {
                castShadow: !0,
                children: [
                  e.jsx("boxGeometry", { args: [0.5, 0.5, 0.5] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#d4af37",
                    roughness: 0.3,
                    metalness: 0.8,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0, 0, 0],
                children: [
                  e.jsx("boxGeometry", { args: [0.51, 0.51, 0.06] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#b91c1c",
                    roughness: 0.2,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0, 0, 0],
                children: [
                  e.jsx("boxGeometry", { args: [0.06, 0.51, 0.51] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#b91c1c",
                    roughness: 0.2,
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("group", {
            position: [-2.4, -0.45, 0.8],
            children: [
              e.jsxs("mesh", {
                castShadow: !0,
                receiveShadow: !0,
                children: [
                  e.jsx("cylinderGeometry", { args: [0.3, 0.2, 0.5, 24] }),
                  e.jsx("meshPhysicalMaterial", {
                    color: "#fafafa",
                    roughness: 0.6,
                    clearcoat: 0.2,
                  }),
                ],
              }),
              Array.from({ length: 6 }).map((p, f) => {
                const j = (f / 6) * Math.PI * 2;
                return e.jsxs(
                  "mesh",
                  {
                    position: [0, 0.26, 0],
                    rotation: [0.3, j, 0],
                    castShadow: !0,
                    children: [
                      e.jsx("coneGeometry", { args: [0.08, 0.4, 4] }),
                      e.jsx("meshStandardMaterial", {
                        color: "#2e7d32",
                        roughness: 0.6,
                      }),
                    ],
                  },
                  f,
                );
              }),
            ],
          }),
          e.jsxs("group", {
            position: [-2.1, -0.45, -0.6],
            children: [
              e.jsxs("mesh", {
                castShadow: !0,
                children: [
                  e.jsx("cylinderGeometry", { args: [0.14, 0.22, 0.6, 16] }),
                  e.jsx("meshPhysicalMaterial", {
                    color: "#ffffff",
                    transmission: 0.9,
                    roughness: 0.1,
                    thickness: 0.15,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0, -0.12, 0],
                children: [
                  e.jsx("cylinderGeometry", { args: [0.19, 0.2, 0.3, 12] }),
                  e.jsx("meshPhysicalMaterial", {
                    color: "#b3e5fc",
                    transmission: 0.9,
                    roughness: 0,
                    opacity: 0.5,
                    transparent: !0,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0.04, 0.45, 0.02],
                rotation: [0.08, 0, 0.08],
                castShadow: !0,
                children: [
                  e.jsx("cylinderGeometry", { args: [0.015, 0.015, 0.7, 8] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#2e7d32",
                    roughness: 0.6,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0.07, 0.82, 0.04],
                castShadow: !0,
                children: [
                  e.jsx("sphereGeometry", { args: [0.1, 16, 16] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#e91e63",
                    roughness: 0.4,
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("group", {
            children: [
              e.jsxs("mesh", {
                position: [-1.2, -0.44, 1.2],
                rotation: [0, 0.5, 0],
                children: [
                  e.jsx("boxGeometry", { args: [0.15, 0.002, 0.03] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#e91e63",
                    roughness: 0.5,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [1.3, -0.44, 1],
                rotation: [0, -0.8, 0],
                children: [
                  e.jsx("boxGeometry", { args: [0.12, 0.002, 0.03] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#ffeb3b",
                    roughness: 0.5,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0.8, -0.44, 1.4],
                rotation: [0, 1.2, 0],
                children: [
                  e.jsx("boxGeometry", { args: [0.18, 0.002, 0.02] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#00e5ff",
                    roughness: 0.5,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [-0.7, -0.44, 1.6],
                rotation: [0, -0.2, 0],
                children: [
                  e.jsx("boxGeometry", { args: [0.14, 0.002, 0.03] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#ff9100",
                    roughness: 0.5,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [-1.7, -0.44, 0.4],
                rotation: [0, 0.9, 0],
                children: [
                  e.jsx("boxGeometry", { args: [0.16, 0.002, 0.03] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#00e676",
                    roughness: 0.5,
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("group", {
            position: [-1.7, -0.225, 1.3],
            children: [
              e.jsxs("mesh", {
                castShadow: !0,
                children: [
                  e.jsx("cylinderGeometry", { args: [0.12, 0.08, 0.45, 16] }),
                  e.jsx("meshPhysicalMaterial", {
                    color: "#ffffff",
                    transmission: 0.9,
                    roughness: 0.05,
                    thickness: 0.08,
                    transparent: !0,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0, -0.05, 0],
                children: [
                  e.jsx("cylinderGeometry", { args: [0.11, 0.08, 0.32, 12] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#ff9800",
                    roughness: 0.3,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0.04, 0.2, 0.04],
                rotation: [0.2, 0, -0.15],
                castShadow: !0,
                children: [
                  e.jsx("cylinderGeometry", { args: [0.01, 0.01, 0.5, 8] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#ffeb3b",
                    roughness: 0.4,
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("group", {
            position: [1.7, -0.225, 1.3],
            children: [
              e.jsxs("mesh", {
                castShadow: !0,
                children: [
                  e.jsx("cylinderGeometry", { args: [0.12, 0.08, 0.45, 16] }),
                  e.jsx("meshPhysicalMaterial", {
                    color: "#ffffff",
                    transmission: 0.9,
                    roughness: 0.05,
                    thickness: 0.08,
                    transparent: !0,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0, -0.05, 0],
                children: [
                  e.jsx("cylinderGeometry", { args: [0.11, 0.08, 0.32, 12] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#e91e63",
                    roughness: 0.3,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0.04, 0.2, 0.04],
                rotation: [0.2, 0, -0.15],
                castShadow: !0,
                children: [
                  e.jsx("cylinderGeometry", { args: [0.01, 0.01, 0.5, 8] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#ffffff",
                    roughness: 0.4,
                  }),
                ],
              }),
            ],
          }),
          l !== "cut" &&
            m &&
            e.jsxs("group", {
              ref: b,
              onPointerDown: ie,
              onClick: le,
              onPointerOver: () => T(!0),
              onPointerOut: () => T(!1),
              children: [
                x &&
                  e.jsxs("mesh", {
                    children: [
                      e.jsx("boxGeometry", { args: [2.1, 0.72, 0.75] }),
                      e.jsx("meshBasicMaterial", {
                        transparent: !0,
                        opacity: 0,
                        depthWrite: !1,
                      }),
                    ],
                  }),
                e.jsxs("mesh", {
                  castShadow: !0,
                  children: [
                    e.jsx("boxGeometry", { args: [1.5, 0.15, 0.02] }),
                    e.jsx("meshStandardMaterial", {
                      color: "#d1d5db",
                      metalness: 0.9,
                      roughness: 0.1,
                    }),
                  ],
                }),
                e.jsxs("mesh", {
                  position: [-0.9, 0, 0],
                  rotation: [0, 0, Math.PI / 2],
                  castShadow: !0,
                  children: [
                    e.jsx("cylinderGeometry", { args: [0.08, 0.08, 0.6, 12] }),
                    e.jsx("meshStandardMaterial", {
                      color: "#4b5563",
                      roughness: 0.7,
                    }),
                  ],
                }),
                K &&
                  e.jsx(he, {
                    position: [0, 0.3, 0],
                    center: !0,
                    children: e.jsx("div", {
                      className:
                        "bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap pointer-events-none select-none font-bold animate-bounce border border-white/20",
                      children: "Tap or drag to slice!",
                    }),
                  }),
              ],
            }),
          e.jsxs("mesh", {
            position: [0.15, 1.55, -4.6],
            receiveShadow: !0,
            children: [
              e.jsx("planeGeometry", { args: [6, 1.4] }),
              e.jsx("meshBasicMaterial", { map: V }),
            ],
          }),
          e.jsx(Ge, {}),
        ],
      })
    );
  },
  H = ({ position: n, color: r }) => {
    const t = c.useRef(null);
    return (
      U(({ clock: o }) => {
        if (t.current) {
          const a = o.getElapsedTime(),
            s = n[0] * 0.5;
          ((t.current.position.y = n[1] + Math.sin(a * 0.8 + s) * 0.15),
            (t.current.rotation.y = Math.sin(a * 0.4 + s) * 0.1));
        }
      }),
      e.jsxs("group", {
        ref: t,
        position: [n[0], n[1], n[2]],
        children: [
          e.jsxs("mesh", {
            castShadow: !0,
            children: [
              e.jsx("sphereGeometry", { args: [0.35, 24, 24] }),
              e.jsx("meshPhysicalMaterial", {
                color: r,
                roughness: 0.1,
                metalness: 0.2,
                clearcoat: 0.8,
                clearcoatRoughness: 0.05,
                reflectivity: 0.8,
              }),
            ],
          }),
          e.jsxs("mesh", {
            position: [0, -0.4, 0],
            rotation: [Math.PI, 0, 0],
            children: [
              e.jsx("coneGeometry", { args: [0.05, 0.08, 8] }),
              e.jsx("meshStandardMaterial", { color: r, roughness: 0.2 }),
            ],
          }),
          e.jsxs("mesh", {
            position: [0, -0.9, 0],
            children: [
              e.jsx("cylinderGeometry", { args: [0.005, 0.005, 1, 8] }),
              e.jsx("meshBasicMaterial", { color: "#bbbbbb" }),
            ],
          }),
        ],
      })
    );
  },
  ke = (n) => {
    const r = we(),
      [t, o] = c.useState(!1),
      [a, s] = c.useState(!1);
    return (
      c.useEffect(() => {
        const l = () => {
          o(window.innerWidth < 768);
        };
        return (
          l(),
          window.addEventListener("resize", l),
          () => window.removeEventListener("resize", l)
        );
      }, []),
      c.useEffect(() => {
        if (n.isCut) {
          const l = new Audio(ge);
          ((l.volume = 0.5),
            l.play().catch((h) => console.log("Audio playback failed:", h)));
        }
      }, [n.isCut]),
      e.jsxs("div", {
        className: "relative w-full h-full",
        style: { background: "transparent" },
        children: [
          !a &&
            e.jsxs("div", {
              className:
                "absolute inset-0 bg-slate-950/40 backdrop-blur-[4px] flex flex-col items-center justify-center z-10 rounded-3xl",
              children: [
                e.jsx(ye, {}),
                e.jsx("p", {
                  className:
                    "mt-4 text-[11px] font-bold text-fuchsia-300 tracking-[0.2em] uppercase animate-pulse",
                  children: "Baking your cake... 🎂",
                }),
              ],
            }),
          e.jsxs(re, {
            shadows: "soft",
            frameloop: "always",
            dpr: [1, 1.25],
            style: { touchAction: "manipulation" },
            camera: {
              position: t ? [0, 1.25, 6.8] : [0, 1.48, 5.9],
              fov: t ? 48 : 46,
            },
            gl: {
              antialias: !t,
              powerPreference: "high-performance",
              precision: t ? "mediump" : "highp",
              toneMapping: ue,
              toneMappingExposure: 0.75,
            },
            onCreated: () => s(!0),
            children: [
              e.jsx("ambientLight", { intensity: 0.9, color: "#fff5ea" }),
              e.jsx("directionalLight", {
                castShadow: !t,
                position: [5, 8, 4],
                intensity: 0.8,
                color: "#fffaed",
                "shadow-mapSize-width": 512,
                "shadow-mapSize-height": 512,
                "shadow-camera-far": 20,
                "shadow-camera-left": -6,
                "shadow-camera-right": 6,
                "shadow-camera-top": 6,
                "shadow-camera-bottom": -6,
                "shadow-bias": -5e-4,
              }),
              e.jsx("pointLight", {
                position: [-4, 3, 2],
                intensity: 0.4,
                color: "#ffaa44",
              }),
              e.jsx("pointLight", {
                position: [4, 2, 2],
                intensity: 0.35,
                color: "#ffa933",
              }),
              e.jsx("pointLight", {
                position: [0, 0.5, 3.2],
                intensity: 1.2,
                color: "#ffe0b2",
                distance: 8,
              }),
              e.jsx(Fe, { ...n, textures: r, isMobile: t }),
              e.jsx(H, { position: [-2.8, 0.9, -1.5], color: 16738740 }),
              e.jsx(H, { position: [-3.3, 1.45, -2], color: 49151 }),
              e.jsx(H, { position: [2.8, 1, -1.5], color: 9662683 }),
              e.jsx(H, { position: [3.3, 1.55, -2], color: 16753920 }),
              e.jsx(ce, {
                position: [0, -0.6, 0],
                opacity: 0.5,
                scale: 10,
                blur: t ? 1.5 : 2.4,
                far: 1.5,
              }),
            ],
          }),
        ],
      })
    );
  },
  De = (n) => e.jsx(ke, { ...n }),
  se = {
    luxury: {
      cardBg: "#FFF8F3",
      paperBgStart: "#FFFDFB",
      paperBgEnd: "#FFF6EF",
      headingColor: "#3D2B24",
      textColor: "#56463E",
      scriptGradientStart: "#FF7A8A",
      scriptGradientEnd: "#F45C84",
      standColor: "#D8A23B",
      cakeIcing: "#F89FB6",
      quoteBg: "rgba(255,192,203,0.15)",
      quoteBorder: "rgba(255,182,193,0.25)",
      heartColor: "#FF7A8A",
    },
    cute: {
      cardBg: "#FFF0F5",
      paperBgStart: "#FFF5F8",
      paperBgEnd: "#FFE6EC",
      headingColor: "#5C3A40",
      textColor: "#704A50",
      scriptGradientStart: "#FF9A9E",
      scriptGradientEnd: "#FECFEF",
      standColor: "#FFB7B2",
      cakeIcing: "#FFD1DC",
      quoteBg: "rgba(255,182,193,0.15)",
      quoteBorder: "rgba(255,182,193,0.3)",
      heartColor: "#FF9A9E",
    },
    minimal: {
      cardBg: "#FFFFFF",
      paperBgStart: "#FCFCFC",
      paperBgEnd: "#F6F6F6",
      headingColor: "#1A1A1A",
      textColor: "#333333",
      scriptGradientStart: "#4D4D4D",
      scriptGradientEnd: "#1A1A1A",
      standColor: "#CCCCCC",
      cakeIcing: "#EAEAEA",
      quoteBg: "rgba(0,0,0,0.03)",
      quoteBorder: "rgba(0,0,0,0.08)",
      heartColor: "#666666",
    },
    floral: {
      cardBg: "#F4F7F4",
      paperBgStart: "#FAFAFA",
      paperBgEnd: "#EEF2EE",
      headingColor: "#2E3A2F",
      textColor: "#4A5A4B",
      scriptGradientStart: "#8FBC8F",
      scriptGradientEnd: "#556B2F",
      standColor: "#BC8F8F",
      cakeIcing: "#D8BFD8",
      quoteBg: "rgba(143,188,143,0.15)",
      quoteBorder: "rgba(143,188,143,0.25)",
      heartColor: "#8FBC8F",
    },
    romantic: {
      cardBg: "#FFF2F2",
      paperBgStart: "#FFFDFD",
      paperBgEnd: "#FFE6E6",
      headingColor: "#4A1515",
      textColor: "#5A2525",
      scriptGradientStart: "#E52D27",
      scriptGradientEnd: "#B31217",
      standColor: "#C5A059",
      cakeIcing: "#FF4D4D",
      quoteBg: "rgba(229,45,39,0.08)",
      quoteBorder: "rgba(229,45,39,0.18)",
      heartColor: "#E52D27",
    },
  },
  $e = ({
    receiverName: n,
    message: r,
    photoUrlOrBase64: t,
    onClose: o,
    className: a = "",
    cardStyle: s = "luxury",
    photoPosition: l,
    onPhotoPositionChange: h,
    isEditable: g = !1,
  }) => {
    const i = se[s] || se.luxury,
      m = l || { x: 50, y: 50 },
      x = c.useRef(null),
      [d, F] = c.useState(!1),
      S = c.useRef({ x: 0, y: 0, posX: 50, posY: 50 }),
      b = (M) => {
        g &&
          (M.preventDefault(),
          F(!0),
          (S.current = { x: M.clientX, y: M.clientY, posX: m.x, posY: m.y }));
      },
      C = (M) => {
        if (!g) return;
        const u = M.touches[0];
        (F(!0),
          (S.current = { x: u.clientX, y: u.clientY, posX: m.x, posY: m.y }));
      };
    c.useEffect(() => {
      if (!d) return;
      const M = (y) => {
          if (!x.current) return;
          const G = x.current.getBoundingClientRect(),
            k = y.clientX - S.current.x,
            R = y.clientY - S.current.y,
            E = Math.max(
              0,
              Math.min(100, S.current.posX - (k / G.width) * 100),
            ),
            I = Math.max(
              0,
              Math.min(100, S.current.posY - (R / G.height) * 100),
            );
          h == null || h({ x: E, y: I });
        },
        u = (y) => {
          if (y.touches.length === 0 || !x.current) return;
          const G = y.touches[0],
            k = x.current.getBoundingClientRect(),
            R = G.clientX - S.current.x,
            E = G.clientY - S.current.y,
            I = Math.max(
              0,
              Math.min(100, S.current.posX - (R / k.width) * 100),
            ),
            V = Math.max(
              0,
              Math.min(100, S.current.posY - (E / k.height) * 100),
            );
          h == null || h({ x: I, y: V });
        },
        v = () => {
          F(!1);
        };
      return (
        window.addEventListener("mousemove", M),
        window.addEventListener("mouseup", v),
        window.addEventListener("touchmove", u, { passive: !0 }),
        window.addEventListener("touchend", v),
        () => {
          (window.removeEventListener("mousemove", M),
            window.removeEventListener("mouseup", v),
            window.removeEventListener("touchmove", u),
            window.removeEventListener("touchend", v));
        }
      );
    }, [d, h]);
    const q =
        (r == null ? void 0 : r.trim()) ||
        "Wishing you a day filled with endless joy, beautiful moments, and all the love your heart can hold.",
      A = (M) => {
        const u = [
          "endless joy",
          "beautiful moments",
          "love",
          "joy",
          "happiness",
          "magical moments",
        ];
        let v = [M];
        return (
          u.forEach((y) => {
            const G = [];
            (v.forEach((k) => {
              typeof k == "string"
                ? k.split(new RegExp(`(${y})`, "gi")).forEach((E, I) => {
                    E.toLowerCase() === y.toLowerCase()
                      ? G.push(
                          e.jsx(
                            "span",
                            {
                              className:
                                "bg-gradient-to-r from-[#FF7A8A] to-[#F45C84] bg-clip-text text-transparent font-extrabold",
                              children: E,
                            },
                            `${y}-${I}`,
                          ),
                        )
                      : G.push(E);
                  })
                : G.push(k);
            }),
              (v = G));
          }),
          v
        );
      },
      T =
        t ||
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1000&auto=format&fit=crop&q=80",
      O = async () => {
        try {
          const u = await (await fetch(T)).blob(),
            v = window.URL.createObjectURL(u),
            y = document.createElement("a");
          ((y.href = v),
            (y.download = `${n}-birthday-photo.jpg`),
            document.body.appendChild(y),
            y.click(),
            document.body.removeChild(y),
            window.URL.revokeObjectURL(v));
        } catch {
          window.open(T, "_blank");
        }
      };
    return e.jsxs("div", {
      className: `relative w-full ${a}`,
      style: { containerType: "inline-size", containerName: "card" },
      children: [
        e.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500&family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,500;1,500;0,700&family=Alex+Brush&display=swap",
          rel: "stylesheet",
        }),
        e.jsx("style", {
          dangerouslySetInnerHTML: {
            __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(3deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-4deg); }
        }
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.04); }
        }
        @keyframes candle-flicker {
          0%, 100% { transform: scaleY(1); opacity: 0.9; }
          50% { transform: scaleY(1.15) skewX(-2deg); opacity: 1; }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.65; }
        }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-vibes { font-family: 'Great Vibes', cursive; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-handwritten { font-family: 'Alex Brush', cursive; }

        /* Container Query Styles to replace media queries for responsiveness independent of viewport */
        @container card (min-width: 600px) {
          .card-container {
            flex-direction: row !important;
            height: 480px !important;
          }
          .card-left {
            width: 48% !important;
            padding: 1.5rem !important;
          }
          .card-right {
            width: 52% !important;
            height: 100% !important;
          }
          .card-heading {
            text-align: left !important;
            font-size: 36px !important;
          }
          .card-subheading {
            font-size: 60px !important;
          }
          .card-divider {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .card-body-text {
            text-align: left !important;
          }
          .card-message {
            font-size: 16px !important;
          }
          .card-signature-container {
            justify-content: flex-start !important;
          }
          .card-signature {
            font-size: 26px !important;
          }
          .card-footer {
            align-items: flex-start !important;
          }
        }
        @container card (min-width: 900px) {
          .card-container {
            height: 720px !important;
          }
          .card-left {
            padding: 3rem !important;
          }
          .card-heading {
            font-size: 68px !important;
          }
          .card-subheading {
            font-size: 105px !important;
          }
          .card-message {
            font-size: 25px !important;
          }
          .card-signature {
            font-size: 38px !important;
          }
        }
        @container card (max-width: 599px) {
          .card-container {
            flex-direction: column-reverse !important;
            height: auto !important;
          }
          .card-left {
            width: 100% !important;
            padding: 1rem !important;
          }
          .card-right {
            width: 100% !important;
            height: 200px !important;
          }
          .card-heading {
            font-size: 24px !important;
            text-align: center !important;
          }
          .card-subheading {
            font-size: 40px !important;
            text-align: center !important;
          }
          .card-divider {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .card-body-text {
            text-align: center !important;
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
          }
          .card-message {
            font-size: 13px !important;
            line-height: 1.4 !important;
          }
          .card-signature-container {
            justify-content: center !important;
          }
          .card-signature {
            font-size: 22px !important;
          }
          .card-cake {
            width: 80px !important;
            height: 95px !important;
          }
          .card-quote-box {
            padding: 0.75rem !important;
            max-width: 160px !important;
          }
          .card-quote-text {
            font-size: 12px !important;
          }
          .card-footer {
            align-items: center !important;
            margin-top: 1rem !important;
          }
        }
      `,
          },
        }),
        e.jsxs("div", {
          className:
            "w-full max-w-[1200px] mx-auto rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_40px_120px_rgba(61,43,36,0.22)] flex flex-col-reverse md:flex-row relative z-10 border md:h-[720px] card-container",
          style: { backgroundColor: i.cardBg, borderColor: i.quoteBorder },
          children: [
            e.jsxs("div", {
              className:
                "w-full md:w-[48%] py-10 px-6 sm:p-10 md:p-12 flex flex-col justify-between relative overflow-hidden card-left",
              style: {
                backgroundImage: `linear-gradient(to bottom, ${i.paperBgStart}, ${i.paperBgEnd})`,
              },
              children: [
                e.jsx("div", {
                  className:
                    "absolute inset-0 pointer-events-none opacity-[0.04]",
                  style: {
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  },
                }),
                e.jsxs("div", {
                  className:
                    "absolute inset-0 pointer-events-none overflow-hidden z-0",
                  children: [
                    e.jsx("svg", {
                      className:
                        "absolute top-12 right-12 w-6 h-6 fill-current animate-[float-slow_7s_infinite_ease-in-out]",
                      style: { color: `${i.heartColor}4d` },
                      viewBox: "0 0 24 24",
                      children: e.jsx("path", {
                        d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                      }),
                    }),
                    e.jsx("svg", {
                      className:
                        "absolute bottom-36 left-8 w-5 h-5 fill-current animate-[float-medium_9s_infinite_ease-in-out]",
                      style: { color: `${i.heartColor}33` },
                      viewBox: "0 0 24 24",
                      children: e.jsx("path", {
                        d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                      }),
                    }),
                    e.jsx("svg", {
                      className:
                        "absolute top-24 left-16 w-4 h-4 fill-current animate-[pulse-soft_4s_infinite_ease-in-out]",
                      style: { color: `${i.standColor}66` },
                      viewBox: "0 0 24 24",
                      children: e.jsx("path", {
                        d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
                      }),
                    }),
                    e.jsx("svg", {
                      className:
                        "absolute bottom-48 right-16 w-3 h-3 fill-current animate-[pulse-soft_5s_infinite_ease-in-out_1s]",
                      style: { color: `${i.standColor}4d` },
                      viewBox: "0 0 24 24",
                      children: e.jsx("path", {
                        d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "text-center md:text-left relative z-10 space-y-1",
                  children: [
                    e.jsx("h1", {
                      className:
                        "font-playfair font-[500] text-[36px] sm:text-[44px] md:text-[54px] lg:text-[68px] leading-tight select-none card-heading",
                      style: { color: i.headingColor },
                      children: "Happy",
                    }),
                    e.jsx("h2", {
                      className:
                        "font-vibes text-[60px] sm:text-[72px] md:text-[88px] lg:text-[105px] leading-[0.8] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,122,138,0.15)] py-2 pl-2 card-subheading",
                      style: {
                        backgroundImage: `linear-gradient(to bottom, ${i.scriptGradientStart}, ${i.scriptGradientEnd})`,
                      },
                      children: "Birthday!",
                    }),
                    e.jsx("div", {
                      className:
                        "w-16 h-[1.5px] mx-auto md:mx-0 mt-3 card-divider",
                      style: { backgroundColor: `${i.standColor}4d` },
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "relative z-10 py-6 text-center md:text-left card-body-text",
                  children: [
                    e.jsx("p", {
                      className:
                        "font-cormorant font-[500] text-[16px] sm:text-[18px] md:text-[21px] lg:text-[25px] leading-relaxed card-message",
                      style: { color: i.textColor },
                      children: A(q),
                    }),
                    e.jsxs("div", {
                      className:
                        "mt-5 flex items-center justify-center md:justify-start gap-2 card-signature-container",
                      children: [
                        e.jsx("span", {
                          className:
                            "font-handwritten text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] leading-none bg-clip-text text-transparent card-signature",
                          style: {
                            backgroundImage: `linear-gradient(to right, ${i.scriptGradientStart}, ${i.scriptGradientEnd})`,
                          },
                          children: "You're truly special!",
                        }),
                        e.jsx("svg", {
                          className:
                            "w-4 h-4 fill-current animate-[float-slow_4s_infinite]",
                          style: { color: i.heartColor },
                          viewBox: "0 0 24 24",
                          children: e.jsx("path", {
                            d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "relative z-10 flex flex-col sm:flex-row items-center md:items-end justify-between gap-6 mt-2",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-[110px] h-[130px] flex-shrink-0 relative group card-cake",
                      children: e.jsxs("svg", {
                        viewBox: "0 0 120 140",
                        className:
                          "w-full h-full drop-shadow-[0_6px_15px_rgba(61,43,36,0.12)]",
                        children: [
                          e.jsx("path", {
                            d: "M30 115 h60 v3 h-60 z",
                            fill: i.standColor,
                          }),
                          e.jsx("path", {
                            d: "M45 118 h30 l-6 12 h-18 z",
                            fill: i.standColor,
                            opacity: "0.9",
                          }),
                          e.jsx("path", {
                            d: "M20 112 h80 v4 h-80 z",
                            fill: i.standColor,
                            opacity: "0.8",
                          }),
                          e.jsx("ellipse", {
                            cx: "60",
                            cy: "112",
                            rx: "40",
                            ry: "6",
                            fill: i.standColor,
                          }),
                          e.jsx("rect", {
                            x: "30",
                            y: "80",
                            width: "60",
                            height: "30",
                            rx: "4",
                            fill: i.cakeIcing,
                          }),
                          e.jsx("path", {
                            d: "M30 84 c5 3, 10 3, 15 0 c5-3, 10-3, 15 0 c5 3, 10 3, 15 0 c5-3, 10-3, 15 0 v8 h-60 z",
                            fill: i.cakeIcing,
                            opacity: "0.95",
                          }),
                          e.jsx("path", {
                            d: "M60 97 l-3-3 a4 4 0 0 1 6 0 z",
                            fill: i.cardBg,
                            transform: "scale(0.8) translate(15, 23)",
                          }),
                          e.jsx("rect", {
                            x: "40",
                            y: "52",
                            width: "40",
                            height: "28",
                            rx: "3",
                            fill: i.cardBg,
                          }),
                          e.jsx("path", {
                            d: "M40 56 c3.3 2, 6.6 2, 10 0 c3.3-2, 6.6-2, 10 0 c3.3 2, 6.6 2, 10 0 c3.3-2, 6.6-2, 10 0 v6 h-40 z",
                            fill: i.cakeIcing,
                          }),
                          e.jsx("path", {
                            d: "M60 68 l-3-3 a4 4 0 0 1 6 0 z",
                            fill: i.heartColor,
                            transform: "scale(0.7) translate(26, 26)",
                          }),
                          e.jsx("rect", {
                            x: "48",
                            y: "38",
                            width: "2",
                            height: "14",
                            fill: i.headingColor,
                            opacity: "0.8",
                          }),
                          e.jsx("path", {
                            d: "M49 32 c-1.5 1.5, 1.5 5, 0 6 c-1.5-1, 1.5-4.5, 0-6 z",
                            fill: i.heartColor,
                            className:
                              "origin-bottom animate-[candle-flicker_1.4s_infinite_ease-in-out]",
                          }),
                          e.jsx("rect", {
                            x: "60",
                            y: "34",
                            width: "2",
                            height: "18",
                            fill: i.headingColor,
                            opacity: "0.8",
                          }),
                          e.jsx("path", {
                            d: "M61 27 c-1.5 1.5, 1.5 5, 0 6 c-1.5-1, 1.5-4.5, 0-6 z",
                            fill: i.standColor,
                            className:
                              "origin-bottom animate-[candle-flicker_1.1s_infinite_ease-in-out]",
                          }),
                          e.jsx("rect", {
                            x: "71",
                            y: "38",
                            width: "2",
                            height: "14",
                            fill: i.headingColor,
                            opacity: "0.8",
                          }),
                          e.jsx("path", {
                            d: "M72 32 c-1.5 1.5, 1.5 5, 0 6 c-1.5-1, 1.5-4.5, 0-6 z",
                            fill: i.heartColor,
                            className:
                              "origin-bottom animate-[candle-flicker_1.6s_infinite_ease-in-out]",
                          }),
                        ],
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "rounded-2xl p-5 max-w-[210px] text-center shadow-sm relative overflow-hidden group border card-quote-box",
                      style: {
                        backgroundColor: i.quoteBg,
                        borderColor: i.quoteBorder,
                      },
                      children: [
                        e.jsx("p", {
                          className:
                            "font-playfair text-[16px] italic leading-snug card-quote-text",
                          style: { color: i.headingColor },
                          children: "Enjoy your day to the fullest!",
                        }),
                        e.jsx("svg", {
                          className:
                            "absolute -bottom-2 -right-2 w-12 h-12 fill-current",
                          style: { color: `${i.heartColor}15` },
                          viewBox: "0 0 24 24",
                          children: e.jsx("path", {
                            d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "mt-8 flex flex-col items-center md:items-start relative z-10 card-footer",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex flex-wrap items-center justify-center md:justify-start gap-2",
                      children: [
                        e.jsx("span", {
                          className:
                            "font-handwritten text-[24px] sm:text-[26px]",
                          style: { color: `${i.headingColor}cc` },
                          children: "With lots of love",
                        }),
                        e.jsx("div", {
                          className: "w-1.5 h-1.5 rounded-full shrink-0",
                          style: { backgroundColor: i.heartColor },
                        }),
                        e.jsx("span", {
                          className:
                            "font-playfair text-xs sm:text-sm tracking-wide font-black break-all",
                          style: { color: i.headingColor },
                          children: n,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-3 mt-1.5 w-36",
                      style: { opacity: 0.3 },
                      children: [
                        e.jsx("div", {
                          className: "h-[0.5px] flex-1",
                          style: { backgroundColor: i.headingColor },
                        }),
                        e.jsx("svg", {
                          className: "w-2.5 h-2.5 fill-current",
                          style: { color: i.headingColor },
                          viewBox: "0 0 24 24",
                          children: e.jsx("path", {
                            d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                          }),
                        }),
                        e.jsx("div", {
                          className: "h-[0.5px] flex-1",
                          style: { backgroundColor: i.headingColor },
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              ref: x,
              onMouseDown: b,
              onTouchStart: C,
              className: `w-full md:w-[52%] h-[340px] md:h-full relative overflow-hidden flex-shrink-0 group/img card-right ${g ? "cursor-grab active:cursor-grabbing select-none" : ""}`,
              children: [
                e.jsx("img", {
                  src: T,
                  alt: `Birthday photoshoot portrait for ${n}`,
                  className: `w-full h-full object-cover origin-center ${g ? "" : "animate-[slow-zoom_18s_infinite_alternate_ease-in-out]"}`,
                  style: { objectPosition: `${m.x}% ${m.y}%` },
                  loading: "lazy",
                }),
                g &&
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-black/35 flex flex-col items-center justify-center pointer-events-none opacity-0 group-hover/img:opacity-100 transition-opacity duration-300",
                    children: e.jsxs("div", {
                      className:
                        "bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-xs font-medium flex items-center gap-2 shadow-lg",
                      children: [
                        e.jsx("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2.5",
                          children: e.jsx("path", {
                            d: "M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20",
                          }),
                        }),
                        "Drag photo to position",
                      ],
                    }),
                  }),
                e.jsxs("div", {
                  className: "absolute top-4 right-4 flex gap-2.5 z-30",
                  children: [
                    e.jsx("button", {
                      onClick: O,
                      className:
                        "w-11 h-11 md:w-13 md:h-13 rounded-full bg-black/55 hover:bg-black/75 border border-white/15 shadow-lg flex items-center justify-center text-white hover:text-amber-400 transition-all duration-300 transform active:scale-95 backdrop-blur-md",
                      "aria-label": "Download Card Portrait Photo",
                      title: "Download Portrait Photo",
                      children: e.jsxs("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "md:w-[21px] md:h-[21px]",
                        children: [
                          e.jsx("path", {
                            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
                          }),
                          e.jsx("polyline", { points: "7 10 12 15 17 10" }),
                          e.jsx("line", {
                            x1: "12",
                            y1: "15",
                            x2: "12",
                            y2: "3",
                          }),
                        ],
                      }),
                    }),
                    o &&
                      e.jsx("button", {
                        onClick: o,
                        className:
                          "w-11 h-11 md:w-13 md:h-13 rounded-full bg-black/55 hover:bg-black/75 border border-white/15 shadow-lg flex items-center justify-center text-white hover:text-[#FF7A8A] transition-all duration-300 transform active:scale-95 backdrop-blur-md",
                        "aria-label": "Close Greeting Card",
                        children: e.jsxs("svg", {
                          width: "20",
                          height: "20",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: "md:w-[22px] md:h-[22px]",
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
                  ],
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none",
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none",
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 pointer-events-none mix-blend-multiply opacity-25",
                  style: {
                    background:
                      "radial-gradient(circle, transparent 60%, rgba(0,0,0,0.6) 100%)",
                  },
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Ee = () => {
    const n = c.useMemo(
      () =>
        new oe([
          new X(0, -1.5, 0),
          new X(0.05, -0.7, 0),
          new X(-0.05, 0.1, 0),
          new X(0, 0.8, 0),
        ]),
      [],
    );
    return e.jsxs("group", {
      children: [
        e.jsxs("mesh", {
          children: [
            e.jsx("tubeGeometry", { args: [n, 20, 0.04, 8, !1] }),
            e.jsx("meshStandardMaterial", { color: "#2e7d32", roughness: 0.6 }),
          ],
        }),
        e.jsxs("mesh", {
          position: [-0.15, -0.3, 0],
          rotation: [0.4, 0.2, 0.8],
          children: [
            e.jsx("coneGeometry", { args: [0.08, 0.4, 4] }),
            e.jsx("meshStandardMaterial", { color: "#388e3c", roughness: 0.7 }),
          ],
        }),
        e.jsxs("mesh", {
          position: [0.18, 0.3, 0],
          rotation: [-0.4, -0.2, -0.8],
          children: [
            e.jsx("coneGeometry", { args: [0.07, 0.35, 4] }),
            e.jsx("meshStandardMaterial", { color: "#388e3c", roughness: 0.7 }),
          ],
        }),
      ],
    });
  },
  Pe = ({ color: n }) => {
    const r = c.useMemo(
        () =>
          new $({
            color: new D(n),
            roughness: 0.3,
            metalness: 0.1,
            clearcoat: 0.3,
            side: B,
          }),
        [n],
      ),
      t = c.useMemo(() => {
        const o = [];
        for (let a = 0; a < 8; a++) {
          const s = (a * Math.PI * 2) / 8;
          o.push({
            position: [Math.sin(s) * 0.2, 0.02, Math.cos(s) * 0.2],
            rotation: [0.5, -s, 0.3],
            scale: [0.35, 0.15, 0.35],
          });
        }
        for (let a = 0; a < 6; a++) {
          const s = (a * Math.PI * 2) / 6 + 0.5;
          o.push({
            position: [Math.sin(s) * 0.12, 0.08, Math.cos(s) * 0.12],
            rotation: [0.8, -s, 0.5],
            scale: [0.28, 0.12, 0.28],
          });
        }
        for (let a = 0; a < 4; a++) {
          const s = (a * Math.PI * 2) / 4;
          o.push({
            position: [Math.sin(s) * 0.05, 0.13, Math.cos(s) * 0.05],
            rotation: [1.1, -s, 0.7],
            scale: [0.2, 0.1, 0.2],
          });
        }
        return o;
      }, []);
    return e.jsxs("group", {
      position: [0, 0.8, 0],
      children: [
        t.map((o, a) =>
          e.jsx(
            "mesh",
            {
              position: o.position,
              rotation: o.rotation,
              scale: o.scale,
              material: r,
              children: e.jsx("sphereGeometry", {
                args: [0.8, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2],
              }),
            },
            a,
          ),
        ),
        e.jsxs("mesh", {
          position: [0, 0.15, 0],
          children: [
            e.jsx("sphereGeometry", { args: [0.08, 16, 16] }),
            e.jsx("meshStandardMaterial", { color: n, roughness: 0.4 }),
          ],
        }),
      ],
    });
  },
  Be = ({ color: n }) => {
    const r = c.useMemo(
        () =>
          new $({ color: new D(n), roughness: 0.2, metalness: 0.1, side: B }),
        [n],
      ),
      t = c.useMemo(() => {
        const o = [];
        for (let a = 0; a < 5; a++) {
          const s = (a * Math.PI * 2) / 5;
          o.push({
            position: [Math.sin(s) * 0.1, 0.05, Math.cos(s) * 0.1],
            rotation: [0.35, -s, 0.1],
          });
        }
        return o;
      }, []);
    return e.jsx("group", {
      position: [0, 0.8, 0],
      children: t.map((o, a) =>
        e.jsx(
          "mesh",
          {
            position: o.position,
            rotation: o.rotation,
            scale: [0.2, 0.45, 0.2],
            material: r,
            children: e.jsx("sphereGeometry", {
              args: [0.8, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2],
            }),
          },
          a,
        ),
      ),
    });
  },
  Re = ({ color: n }) => {
    const r = c.useMemo(
        () =>
          new $({
            color: new D(n),
            roughness: 0.35,
            metalness: 0.05,
            clearcoat: 0.2,
            side: B,
          }),
        [n],
      ),
      t = c.useMemo(
        () =>
          new $({
            color: new D(n).multiplyScalar(0.78),
            roughness: 0.4,
            side: B,
          }),
        [n],
      ),
      o = c.useMemo(() => {
        const s = [];
        for (let l = 0; l < 16; l++) {
          const h = (l * Math.PI * 2) / 16;
          s.push({ angle: h });
        }
        return s;
      }, []),
      a = c.useMemo(() => {
        const s = [];
        for (let l = 0; l < 10; l++) {
          const h = (l * Math.PI * 2) / 10 + Math.PI / 10;
          s.push({ angle: h });
        }
        return s;
      }, []);
    return e.jsxs("group", {
      position: [0, 0.8, 0],
      children: [
        o.map(({ angle: s }, l) =>
          e.jsx(
            "mesh",
            {
              position: [Math.sin(s) * 0.28, 0, Math.cos(s) * 0.28],
              rotation: [0.05, -s, 0],
              scale: [0.095, 0.42, 0.04],
              material: r,
              children: e.jsx("sphereGeometry", {
                args: [0.8, 10, 10, 0, Math.PI * 2, 0, Math.PI * 0.55],
              }),
            },
            `out-${l}`,
          ),
        ),
        a.map(({ angle: s }, l) =>
          e.jsx(
            "mesh",
            {
              position: [Math.sin(s) * 0.19, 0.01, Math.cos(s) * 0.19],
              rotation: [0.22, -s, 0],
              scale: [0.07, 0.3, 0.035],
              material: t,
              children: e.jsx("sphereGeometry", {
                args: [0.8, 10, 10, 0, Math.PI * 2, 0, Math.PI * 0.5],
              }),
            },
            `in-${l}`,
          ),
        ),
        e.jsxs("mesh", {
          position: [0, 0.015, 0],
          rotation: [Math.PI / 2, 0, 0],
          children: [
            e.jsx("torusGeometry", { args: [0.175, 0.022, 16, 48] }),
            e.jsx("meshStandardMaterial", { color: "#b45309", roughness: 0.6 }),
          ],
        }),
        e.jsxs("mesh", {
          position: [0, 0, 0],
          rotation: [-Math.PI / 2, 0, 0],
          scale: [1, 1, 0.32],
          children: [
            e.jsx("sphereGeometry", {
              args: [0.17, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2],
            }),
            e.jsx("meshStandardMaterial", {
              color: "#3e1f00",
              roughness: 0.95,
            }),
          ],
        }),
        e.jsxs("mesh", {
          position: [0, 0.025, 0],
          rotation: [-Math.PI / 2, 0, 0],
          scale: [1, 1, 0.18],
          children: [
            e.jsx("sphereGeometry", {
              args: [0.13, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2],
            }),
            e.jsx("meshStandardMaterial", { color: "#2d1200", roughness: 1 }),
          ],
        }),
      ],
    });
  },
  Ie = ({ color: n }) => {
    const r = c.useMemo(
        () =>
          new $({
            color: new D(n),
            roughness: 0.25,
            clearcoat: 0.4,
            clearcoatRoughness: 0.2,
            side: B,
          }),
        [n],
      ),
      t = 18,
      o = c.useMemo(() => {
        const a = [];
        for (let s = 0; s < t; s++) {
          const l = (s * Math.PI * 2) / t,
            h = s % 2 === 0 ? 0.06 : -0.03;
          a.push({ angle: l, tiltExtra: h });
        }
        return a;
      }, []);
    return e.jsxs("group", {
      position: [0, 0.8, 0],
      children: [
        o.map(({ angle: a, tiltExtra: s }, l) =>
          e.jsx(
            "mesh",
            {
              position: [Math.sin(a) * 0.21, s * 0.5, Math.cos(a) * 0.21],
              rotation: [0.12 + s, -a, 0],
              scale: [0.055, 0.38, 0.03],
              material: r,
              children: e.jsx("sphereGeometry", {
                args: [0.8, 10, 12, 0, Math.PI * 2, 0, Math.PI * 0.52],
              }),
            },
            l,
          ),
        ),
        e.jsxs("mesh", {
          position: [0, 0.04, 0],
          rotation: [-Math.PI / 2, 0, 0],
          scale: [1, 1, 0.55],
          children: [
            e.jsx("sphereGeometry", {
              args: [0.13, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2],
            }),
            e.jsx("meshPhysicalMaterial", {
              color: "#fbbf24",
              roughness: 0.5,
              clearcoat: 0.6,
            }),
          ],
        }),
        e.jsxs("mesh", {
          position: [0, 0.005, 0],
          rotation: [Math.PI / 2, 0, 0],
          children: [
            e.jsx("torusGeometry", { args: [0.1, 0.014, 12, 40] }),
            e.jsx("meshStandardMaterial", { color: "#d97706", roughness: 0.7 }),
          ],
        }),
      ],
    });
  },
  ze = ({ type: n, color: r, animate: t = !0 }) => {
    const o = c.useRef(null);
    return (
      U((a) => {
        o.current &&
          t &&
          ((o.current.position.y =
            -0.85 + Math.sin(a.clock.getElapsedTime() * 1.5) * 0.05),
          (o.current.rotation.y = a.clock.getElapsedTime() * 0.25));
      }),
      e.jsxs("group", {
        ref: o,
        position: [0, -0.85, 0],
        children: [
          e.jsx(Ee, {}),
          n === "rose" && e.jsx(Pe, { color: r }),
          n === "tulip" && e.jsx(Be, { color: r }),
          n === "sunflower" && e.jsx(Re, { color: r }),
          n === "daisy" && e.jsx(Ie, { color: r }),
        ],
      })
    );
  },
  qe = ({ type: n, color: r, animate: t = !0 }) => {
    const [o, a] = c.useState(!1);
    return (
      c.useEffect(() => {
        const s = () => a(window.innerWidth < 768);
        return (
          s(),
          window.addEventListener("resize", s),
          () => window.removeEventListener("resize", s)
        );
      }, []),
      e.jsx("div", {
        className: "w-full h-full relative",
        children: e.jsxs(re, {
          camera: { position: [0, 0, 2.2], fov: 48 },
          dpr: [1, 1.25],
          frameloop: o ? "demand" : "always",
          style: { touchAction: "pan-y" },
          children: [
            e.jsx("ambientLight", { intensity: 1.2 }),
            e.jsx("directionalLight", { position: [2, 4, 3], intensity: 2 }),
            e.jsx("pointLight", {
              position: [-2, 2, 2],
              intensity: 1.5,
              color: "#ffffff",
            }),
            e.jsx("pointLight", { position: [0, -1, -2], intensity: 0.4 }),
            e.jsx(ze, { type: n, color: r, animate: t && !o }),
            !o &&
              e.jsx(me, { count: 30, scale: 1, size: 2, speed: 0.5, color: r }),
            !o && e.jsx(xe, { enableZoom: !1, enablePan: !1, autoRotate: !1 }),
          ],
        }),
      })
    );
  };
export { De as C, qe as F, $e as G };
