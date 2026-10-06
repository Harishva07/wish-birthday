var Tt = Object.defineProperty;
var zt = (i, t, a) =>
  t in i
    ? Tt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
    : (i[t] = a);
var $ = (i, t, a) => zt(i, typeof t != "symbol" ? t + "" : t, a);
import {
  j as e,
  V as Ye,
  a4 as He,
  a5 as Ve,
  r as s,
  W as be,
  a6 as et,
  a7 as ot,
  a8 as Rt,
  d as Lt,
  R as Pt,
  a9 as tt,
  X as Wt,
  y as Et,
  aa as It,
  L as Gt,
  ab as Bt,
} from "./vendor-core-CjvpFyCc.js";
import { a as Ot } from "./storageService-Bwr1h56U.js";
import { B as Dt, E as M, W as Ft, D as Yt } from "./constants-DMfe1hbA.js";
import { C as st, G as Ht, F as Vt } from "./FlowerR3F-Dw1qhCu7.js";
import {
  B as U,
  s as $t,
  u as Ut,
  S as qt,
  L as Qt,
  C as Kt,
  a as Xt,
} from "./index-DBifMb9v.js";
import {
  a8 as ce,
  d as P,
  a9 as Zt,
  aa as at,
  a6 as Jt,
  ab as es,
  a5 as Re,
  ac as Te,
  ad as ts,
  ae as ss,
  af as ze,
  S as as,
  ag as rs,
  P as ns,
  W as is,
  ah as os,
  ai as ls,
  aj as Ie,
  ak as ge,
  al as Ge,
  am as rt,
  an as Be,
  M as we,
  ao as cs,
  I as ds,
  y as nt,
  ap as xs,
  R as hs,
  c as ps,
  A as ms,
} from "./vendor-three-BgEEYt64.js";
class fs {
  constructor() {
    $(this, "audioContext", null);
    $(this, "analyser", null);
    $(this, "microphone", null);
    $(this, "dataArray", null);
    $(this, "stream", null);
    $(this, "smoothedBlowLevel", 0);
    $(this, "spinTimeout", null);
    $(this, "chimeInterval", null);
  }
  ensureContext() {
    (this.audioContext ||
      (this.audioContext = new (
        window.AudioContext || window.webkitAudioContext
      )()),
      this.audioContext.state === "suspended" && this.audioContext.resume());
  }
  async initMicrophone() {
    try {
      return (
        this.ensureContext(),
        this.stopMicrophone(),
        (this.stream = await navigator.mediaDevices.getUserMedia({
          audio: !0,
        })),
        (this.analyser = this.audioContext.createAnalyser()),
        (this.microphone = this.audioContext.createMediaStreamSource(
          this.stream,
        )),
        this.microphone.connect(this.analyser),
        (this.analyser.fftSize = 256),
        (this.dataArray = new Uint8Array(this.analyser.frequencyBinCount)),
        (this.smoothedBlowLevel = 0),
        !0
      );
    } catch (t) {
      return (console.error("Microphone access denied or error:", t), !1);
    }
  }
  playPop() {
    if ((this.ensureContext(), !this.audioContext)) return;
    const t = this.audioContext.currentTime,
      a = this.audioContext.createOscillator(),
      n = this.audioContext.createGain();
    ((a.type = "triangle"),
      a.frequency.setValueAtTime(800, t),
      a.frequency.exponentialRampToValueAtTime(100, t + 0.1),
      n.gain.setValueAtTime(1, t),
      n.gain.exponentialRampToValueAtTime(0.01, t + 0.1),
      a.connect(n),
      n.connect(this.audioContext.destination),
      a.start(t),
      a.stop(t + 0.1));
  }
  playPopper() {
    if ((this.ensureContext(), !this.audioContext)) return;
    const t = this.audioContext.currentTime;
    try {
      const a = this.audioContext.sampleRate * 0.4,
        n = this.audioContext.createBuffer(1, a, this.audioContext.sampleRate),
        l = n.getChannelData(0);
      for (let h = 0; h < a; h++) l[h] = Math.random() * 2 - 1;
      const o = this.audioContext.createBufferSource();
      o.buffer = n;
      const c = this.audioContext.createBiquadFilter();
      ((c.type = "bandpass"),
        c.frequency.setValueAtTime(1e3, t),
        c.frequency.exponentialRampToValueAtTime(200, t + 0.4));
      const m = this.audioContext.createGain();
      (m.gain.setValueAtTime(0.3, t),
        m.gain.exponentialRampToValueAtTime(0.01, t + 0.4),
        o.connect(c),
        c.connect(m),
        m.connect(this.audioContext.destination),
        o.start(t),
        o.stop(t + 0.4));
    } catch (a) {
      console.warn("Confetti noise synthesis failed:", a);
    }
  }
  playTick() {
    if ((this.ensureContext(), !this.audioContext)) return;
    const t = this.audioContext.currentTime,
      a = this.audioContext.createOscillator(),
      n = this.audioContext.createGain();
    ((a.type = "square"),
      a.frequency.setValueAtTime(150, t),
      a.frequency.exponentialRampToValueAtTime(40, t + 0.05),
      n.gain.setValueAtTime(0.3, t),
      n.gain.exponentialRampToValueAtTime(0.01, t + 0.05),
      a.connect(n),
      n.connect(this.audioContext.destination),
      a.start(t),
      a.stop(t + 0.05));
  }
  startWheelSpin(t = 3500) {
    this.ensureContext();
    let a = 0,
      n = 30;
    const l = Date.now(),
      o = () => {
        (this.playTick(), (a = Date.now() - l));
        const c = a / t;
        ((n = 30 + c * c * 400),
          a < t && (this.spinTimeout = setTimeout(o, n)));
      };
    (this.spinTimeout && clearTimeout(this.spinTimeout), o());
  }
  stopWheelSpin() {
    this.spinTimeout && clearTimeout(this.spinTimeout);
  }
  startMagicChime() {
    (this.ensureContext(),
      this.chimeInterval && clearInterval(this.chimeInterval),
      (this.chimeInterval = setInterval(() => {
        if (!this.audioContext || Math.random() > 0.4) return;
        const t = this.audioContext.currentTime,
          a = this.audioContext.createOscillator(),
          n = this.audioContext.createGain();
        ((a.type = "sine"),
          a.frequency.setValueAtTime(1500 + Math.random() * 2e3, t),
          n.gain.setValueAtTime(0.05, t),
          n.gain.exponentialRampToValueAtTime(0.001, t + 0.15),
          a.connect(n),
          n.connect(this.audioContext.destination),
          a.start(t),
          a.stop(t + 0.15));
      }, 50)));
  }
  stopMagicChime() {
    this.chimeInterval && clearInterval(this.chimeInterval);
  }
  getBlowLevel() {
    if (!this.analyser || !this.dataArray) return 0;
    this.analyser.getByteTimeDomainData(this.dataArray);
    let t = 0;
    for (let n = 0; n < this.dataArray.length; n++) {
      const l = (this.dataArray[n] - 128) / 128;
      t += l * l;
    }
    const a = Math.sqrt(t / this.dataArray.length);
    return (
      (this.smoothedBlowLevel = this.smoothedBlowLevel * 0.78 + a * 0.22),
      this.smoothedBlowLevel
    );
  }
  isBlowing(t = 0.065) {
    return this.getBlowLevel() > t;
  }
  stopMicrophone() {
    (this.microphone && this.microphone.disconnect(),
      this.stream &&
        (this.stream.getTracks().forEach((t) => t.stop()),
        (this.stream = null)),
      (this.microphone = null),
      (this.analyser = null),
      (this.dataArray = null),
      (this.smoothedBlowLevel = 0));
  }
  stop() {
    (this.stopWheelSpin(),
      this.stopMagicChime(),
      this.stopMicrophone(),
      this.audioContext &&
        this.audioContext.state !== "closed" &&
        this.audioContext.close(),
      (this.audioContext = null),
      (this.analyser = null),
      (this.microphone = null));
  }
}
const Oe = ({
    children: i,
    variant: t = "primary",
    fullWidth: a = !1,
    className: n = "",
    ...l
  }) => {
    const o =
        "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg",
      c = {
        primary:
          "bg-gradient-to-r from-magical-500 to-magical-600 text-white hover:shadow-magical-300/50 hover:shadow-xl",
        secondary:
          "bg-white text-magical-700 border border-magical-200 hover:bg-magical-50",
        ghost:
          "bg-transparent text-magical-700 hover:bg-magical-50 shadow-none",
      };
    return e.jsx("button", {
      className: `${o} ${c[t]} ${a ? "w-full" : ""} ${n}`,
      ...l,
      children: i,
    });
  },
  us = () =>
    s.useMemo(() => {
      const i = document.createElement("canvas");
      ((i.width = 512), (i.height = 512));
      const t = i.getContext("2d");
      if (t) {
        ((t.fillStyle = "#20a5e9"),
          t.fillRect(0, 0, 512, 512),
          (t.fillStyle = "#ffffff"));
        const n = 24,
          l = 128;
        for (let o = 0; o <= 512 + l; o += l)
          for (let c = 0; c <= 512 + l; c += l)
            (t.beginPath(),
              t.arc(o, c, n, 0, Math.PI * 2),
              t.fill(),
              t.beginPath(),
              t.arc(o + l / 2, c + l / 2, n, 0, Math.PI * 2),
              t.fill());
      }
      const a = new Zt(i);
      return ((a.wrapS = at), (a.wrapT = at), a.repeat.set(2, 2), a);
    }, []),
  gs = ({ onOpen: i, isOpen: t }) => {
    const a = s.useRef(null),
      n = s.useRef(null),
      l = us(),
      [o, c] = s.useState(!1),
      m = s.useRef(0.75),
      h = s.useRef(0),
      p = s.useRef(0),
      r = s.useRef(1);
    be((u, _) => {
      (a.current &&
        !t &&
        ((a.current.rotation.y += 0.005),
        (a.current.rotation.x = Math.sin(u.clock.getElapsedTime()) * 0.05)),
        t &&
          ((m.current += _ * 8),
          (h.current += _ * 4),
          (p.current -= _ * 2),
          (r.current = Jt.lerp(r.current, 0, _ * 3)),
          n.current &&
            ((n.current.position.y = m.current),
            (n.current.rotation.x = h.current),
            (n.current.rotation.z = p.current)),
          a.current && a.current.scale.setScalar(r.current)));
    });
    const k = () => {
        o || t || (c(!0), i());
      },
      N = s.useMemo(
        () =>
          new ce({
            color: 16777215,
            roughness: 0.3,
            metalness: 0.1,
            clearcoat: 0.5,
          }),
        [],
      ),
      f = s.useMemo(
        () =>
          new ce({
            map: l,
            roughness: 0.2,
            metalness: 0.1,
            clearcoat: 1,
            clearcoatRoughness: 0.1,
          }),
        [l],
      );
    return (
      s.useMemo(
        () => [new P(0, 0, 0), new P(-0.3, -0.3, 0), new P(-0.6, -0.8, 0)],
        [],
      ),
      e.jsxs("group", {
        ref: a,
        children: [
          e.jsx("mesh", {
            visible: !1,
            onClick: k,
            children: e.jsx("boxGeometry", { args: [3, 3, 3] }),
          }),
          e.jsx("mesh", {
            position: [0, -0.2, 0],
            material: f,
            children: e.jsx("boxGeometry", { args: [2, 1.8, 2] }),
          }),
          e.jsx("mesh", {
            position: [0, -0.2, 0],
            material: N,
            children: e.jsx("boxGeometry", { args: [2.02, 1.82, 0.3] }),
          }),
          e.jsx("mesh", {
            position: [0, -0.2, 0],
            material: N,
            children: e.jsx("boxGeometry", { args: [0.3, 1.82, 2.02] }),
          }),
          e.jsxs("group", {
            ref: n,
            position: [0, 0.75, 0],
            children: [
              e.jsx("mesh", {
                position: [0, 0.15, 0],
                material: f,
                children: e.jsx("boxGeometry", { args: [2.1, 0.3, 2.1] }),
              }),
              e.jsx("mesh", {
                position: [0, 0.15, 0],
                material: N,
                children: e.jsx("boxGeometry", { args: [2.12, 0.32, 0.32] }),
              }),
              e.jsx("mesh", {
                position: [0, 0.15, 0],
                material: N,
                children: e.jsx("boxGeometry", { args: [0.32, 0.32, 2.12] }),
              }),
              e.jsxs("group", {
                position: [-0.8, 0.15, 1.05],
                rotation: [0, 0, Math.PI / 6],
                children: [
                  e.jsxs("line", {
                    children: [
                      e.jsx("bufferGeometry", { attach: "geometry" }),
                      e.jsx("lineBasicMaterial", {
                        attach: "material",
                        color: "#3b82f6",
                        linewidth: 2,
                      }),
                    ],
                  }),
                  e.jsxs("mesh", {
                    position: [-0.2, -0.5, 0],
                    rotation: [0, 0, Math.PI / 12],
                    children: [
                      e.jsx("boxGeometry", { args: [0.5, 0.8, 0.02] }),
                      e.jsx("meshPhysicalMaterial", {
                        color: "#f8fafc",
                        roughness: 0.5,
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("group", {
                position: [0, 0.32, 0],
                children: Array.from({ length: 48 }).map((u, _) => {
                  const j = (_ * Math.PI * 2) / 48,
                    g = 0.5 + (_ % 4) * 0.15,
                    T = 0.08 + (_ % 2) * 0.04;
                  return e.jsx(
                    "mesh",
                    {
                      position: [0, g / 2.5, 0],
                      rotation: [0, j, Math.PI / 4],
                      material: N,
                      children: e.jsx("boxGeometry", { args: [T, g, 0.015] }),
                    },
                    _,
                  );
                }),
              }),
            ],
          }),
        ],
      })
    );
  },
  ws = ({ onOpen: i, isOpen: t }) =>
    e.jsx("div", {
      className: "w-full h-80 md:h-[28rem] relative z-20 cursor-pointer",
      children: e.jsxs(Ye, {
        camera: { position: [0, 1.8, 4.5], fov: 50 },
        dpr: [1, 1.25],
        children: [
          e.jsx("ambientLight", { intensity: 1.5 }),
          e.jsx("directionalLight", {
            position: [5, 10, 5],
            intensity: 3.5,
            castShadow: !0,
          }),
          e.jsx("pointLight", {
            position: [-4, 2, -2],
            intensity: 2,
            color: "#3b82f6",
          }),
          e.jsx("pointLight", {
            position: [4, -2, 2],
            intensity: 1,
            color: "#d946ef",
          }),
          e.jsx(gs, { onOpen: i, isOpen: t }),
          e.jsx(He, { preset: "sunset" }),
          e.jsx(Ve, {
            position: [0, -1.2, 0],
            opacity: 0.6,
            scale: 8,
            blur: 2.5,
            far: 4,
          }),
        ],
      }),
    }),
  bs = ({ isBroken: i }) => {
    const t = s.useRef(null),
      a = s.useMemo(() => {
        const o = new es();
        return (
          o.moveTo(0, -0.4),
          o.bezierCurveTo(0.3, -0.1, 0.6, 0.2, 0.6, 0.5),
          o.bezierCurveTo(0.6, 0.85, 0.3, 1.1, 0, 0.7),
          o.bezierCurveTo(-0.3, 1.1, -0.6, 0.85, -0.6, 0.5),
          o.bezierCurveTo(-0.6, 0.2, -0.3, -0.1, 0, -0.4),
          o
        );
      }, []),
      n = s.useMemo(
        () => ({
          depth: 0.2,
          bevelEnabled: !0,
          bevelSegments: 6,
          steps: 1,
          bevelSize: 0.06,
          bevelThickness: 0.06,
        }),
        [],
      ),
      l = s.useMemo(
        () =>
          new ce({
            color: new Re("#ff4499"),
            emissive: new Re("#ff0055"),
            emissiveIntensity: 0.3,
            roughness: 0.05,
            metalness: 0.1,
            clearcoat: 1,
            clearcoatRoughness: 0.02,
            transmission: 0.3,
            thickness: 0.4,
          }),
        [],
      );
    return (
      be((o) => {
        t.current &&
          !i &&
          ((t.current.position.y =
            0 + Math.sin(o.clock.getElapsedTime() * 1.8) * 0.06),
          (t.current.rotation.y =
            Math.sin(o.clock.getElapsedTime() * 0.8) * 0.12));
      }),
      i
        ? null
        : e.jsxs("group", {
            children: [
              e.jsx("mesh", {
                ref: t,
                position: [0, -0.55, 0],
                material: l,
                children: e.jsx("extrudeGeometry", { args: [a, n] }),
              }),
              e.jsx("pointLight", {
                position: [0, 0, 0.3],
                distance: 2.5,
                intensity: 3.5,
                color: "#ff3388",
              }),
            ],
          })
    );
  },
  ys = ({ isBroken: i, onComplete: t }) => {
    const a = s.useRef(null),
      [n, l] = s.useState([]),
      o = s.useRef(1),
      c = s.useRef(!1),
      m = s.useMemo(
        () =>
          new ce({
            color: new Re("#ff3366"),
            roughness: 0.2,
            metalness: 0.2,
            transparent: !0,
            opacity: 1,
          }),
        [],
      ),
      h = s.useMemo(() => new Te(0.08, 0.08, 0.08), []);
    return (
      s.useEffect(() => {
        if (i) {
          const p = Array.from({ length: 45 }).map((r, k) => {
            const N = Math.random() * Math.PI * 2,
              f = Math.acos(Math.random() * 2 - 1),
              u = 3 + Math.random() * 4;
            return {
              id: k,
              position: [0, 0, 0],
              velocity: [
                Math.sin(f) * Math.cos(N) * u,
                Math.sin(f) * Math.sin(N) * u + 1.5,
                Math.cos(f) * u,
              ],
              rotationSpeed: [
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 8,
              ],
              scale: 0.6 + Math.random() * 0.8,
            };
          });
          l(p);
        }
      }, [i]),
      be((p, r) => {
        if (!(!i || c.current)) {
          if (
            ((o.current = Math.max(0, o.current - r * 1)),
            (m.opacity = o.current),
            a.current)
          ) {
            const k = a.current.children;
            n.forEach((N, f) => {
              const u = k[f];
              u &&
                ((N.velocity[1] -= r * 8),
                (u.position.x += N.velocity[0] * r),
                (u.position.y += N.velocity[1] * r),
                (u.position.z += N.velocity[2] * r),
                (u.rotation.x += N.rotationSpeed[0] * r),
                (u.rotation.y += N.rotationSpeed[1] * r),
                (u.rotation.z += N.rotationSpeed[2] * r));
            });
          }
          o.current <= 0 && !c.current && ((c.current = !0), t());
        }
      }),
      i
        ? e.jsx("group", {
            ref: a,
            children: n.map((p) =>
              e.jsx(
                "mesh",
                {
                  position: p.position,
                  scale: p.scale,
                  geometry: h,
                  material: m,
                },
                p.id,
              ),
            ),
          })
        : null
    );
  },
  se = -1.6,
  K = -1.95,
  js = ({ pull: i, isReleased: t }) => {
    const a = s.useMemo(
        () =>
          new ce({
            color: "#ff66aa",
            roughness: 0.1,
            metalness: 0.9,
            clearcoat: 1,
            clearcoatRoughness: 0.05,
          }),
        [],
      ),
      n = s.useMemo(() => new ts({ color: "#ffffff", linewidth: 1.5 }), []),
      l = s.useMemo(() => {
        const h = [
          new P(-0.9, K + 0.15, -0.05),
          new P(-0.8, K + 0.05, 0),
          new P(-0.4, se - 0.1, 0),
          new P(0, se - i * 0.1, 0),
          new P(0.4, se - 0.1, 0),
          new P(0.8, K + 0.05, 0),
          new P(0.9, K + 0.15, -0.05),
        ];
        return new ss(h);
      }, [i]),
      o = s.useMemo(() => {
        const h = new P(-0.8, K + 0.05, 0),
          p = new P(0.8, K + 0.05, 0),
          r = new P(0, se - i * 0.7, 0);
        return [h, r, p];
      }, [i]),
      c = s.useMemo(() => new ze().setFromPoints(o), [o]),
      m = se - i * 0.7;
    return e.jsxs("group", {
      children: [
        e.jsx("mesh", {
          material: a,
          children: e.jsx("tubeGeometry", { args: [l, 40, 0.035, 12, !1] }),
        }),
        e.jsx("mesh", {
          position: [-0.85, K + 0.12, 0],
          rotation: [0, 0, Math.PI / 4],
          material: a,
          children: e.jsx("torusGeometry", { args: [0.07, 0.015, 8, 24] }),
        }),
        e.jsx("mesh", {
          position: [0.85, K + 0.12, 0],
          rotation: [0, 0, -Math.PI / 4],
          material: a,
          children: e.jsx("torusGeometry", { args: [0.07, 0.015, 8, 24] }),
        }),
        e.jsx("line", { geometry: c, material: n }),
        !t &&
          e.jsxs("group", {
            position: [0, m, 0],
            children: [
              e.jsxs("mesh", {
                position: [0, 0.4, 0],
                children: [
                  e.jsx("cylinderGeometry", { args: [0.012, 0.012, 0.8, 8] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#fbbf24",
                    metalness: 0.8,
                    roughness: 0.2,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0, 0.8, 0],
                children: [
                  e.jsx("coneGeometry", { args: [0.035, 0.12, 4] }),
                  e.jsx("meshPhysicalMaterial", {
                    color: "#ff3388",
                    roughness: 0.1,
                    metalness: 0.5,
                    clearcoat: 1,
                    emissive: "#ff0055",
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0, 0.05, 0],
                children: [
                  e.jsx("boxGeometry", { args: [0.08, 0.12, 0.005] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#ffffff",
                    opacity: 0.8,
                    transparent: !0,
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  vs = ({ onBreak: i, pull: t, isReleased: a }) => {
    const [n, l] = s.useState(!1),
      o = s.useRef(se + 0.4),
      c = s.useRef(null);
    return (
      be((m, h) => {
        a &&
          !n &&
          ((o.current += h * 12),
          c.current && (c.current.position.y = o.current),
          o.current >= -0.2 &&
            (l(!0),
            ot({
              particleCount: 150,
              spread: 80,
              origin: { y: 0.45 },
              colors: ["#ff3388", "#ec4899", "#f43f5e", "#ffd54f"],
            })));
      }),
      e.jsxs(e.Fragment, {
        children: [
          e.jsx(et, {
            count: 35,
            scale: 4,
            size: 2.5,
            speed: 0.4,
            color: "#ffd54f",
          }),
          e.jsx(et, {
            count: 25,
            scale: 3.5,
            size: 2,
            speed: 0.6,
            color: "#ff3388",
          }),
          e.jsx(bs, { isBroken: n }),
          e.jsx(ys, { isBroken: n, onComplete: i }),
          e.jsx(js, { pull: a ? 0 : t, isReleased: a }),
          a &&
            !n &&
            e.jsxs("group", {
              ref: c,
              position: [0, se, 0],
              children: [
                e.jsxs("mesh", {
                  position: [0, 0.4, 0],
                  children: [
                    e.jsx("cylinderGeometry", { args: [0.012, 0.012, 0.8, 8] }),
                    e.jsx("meshStandardMaterial", {
                      color: "#fbbf24",
                      metalness: 0.8,
                      roughness: 0.2,
                    }),
                  ],
                }),
                e.jsxs("mesh", {
                  position: [0, 0.8, 0],
                  children: [
                    e.jsx("coneGeometry", { args: [0.035, 0.12, 4] }),
                    e.jsx("meshPhysicalMaterial", {
                      color: "#ff3388",
                      roughness: 0.1,
                      metalness: 0.5,
                      clearcoat: 1,
                      emissive: "#ff0055",
                    }),
                  ],
                }),
              ],
            }),
        ],
      })
    );
  },
  Ns = ({ onBreak: i }) => {
    const [t, a] = s.useState(0),
      [n, l] = s.useState(!1),
      o = s.useRef(!1),
      c = s.useRef(0),
      m = s.useRef(0),
      h = (f) => {
        a(f);
        const u = Math.floor(f * 12);
        if (u !== m.current) {
          if (u > m.current)
            try {
              const _ = window.AudioContext || window.webkitAudioContext;
              if (_) {
                const j = new _(),
                  g = j.currentTime,
                  T = j.createOscillator(),
                  F = j.createGain();
                ((T.type = "triangle"),
                  T.frequency.setValueAtTime(80 + u * 8, g),
                  T.frequency.linearRampToValueAtTime(140 + u * 12, g + 0.03),
                  F.gain.setValueAtTime(0.06, g),
                  F.gain.exponentialRampToValueAtTime(0.001, g + 0.03),
                  T.connect(F),
                  F.connect(j.destination),
                  T.start(g),
                  T.stop(g + 0.03));
              }
            } catch {}
          m.current = u;
        }
      },
      p = s.useMemo(() => {
        if (typeof window < "u") {
          const f = new Audio(Dt);
          return ((f.preload = "auto"), f.load(), f);
        }
        return null;
      }, []);
    s.useEffect(() => {
      if (n && p)
        try {
          ((p.volume = 0.6),
            p
              .play()
              .catch((f) =>
                console.warn("Failed to play bow/arrow audio:", f),
              ));
        } catch (f) {
          console.warn("Audio playback error:", f);
        }
    }, [n, p]);
    const r = (f) => {
        n || ((o.current = !0), (c.current = f.clientY));
      },
      k = (f) => {
        if (!o.current || n) return;
        const u = f.clientY - c.current,
          _ = Math.min(1, Math.max(0, u / 120));
        h(_);
      },
      N = () => {
        !o.current ||
          n ||
          ((o.current = !1), t > 0.4 ? l(!0) : (h(0), (m.current = 0)));
      };
    return e.jsxs("div", {
      className: "w-full flex flex-col items-center select-none px-4",
      children: [
        e.jsxs("div", {
          className:
            "w-full relative z-20 mt-4 cursor-grab active:cursor-grabbing border border-pink-500/20 rounded-3xl bg-gradient-to-b from-[#14061a] to-[#09010e] overflow-hidden shadow-[0_0_20px_rgba(236,72,153,0.15)] touch-none",
          style: { height: "clamp(320px, 58vw, 480px)" },
          onPointerDown: r,
          onPointerMove: k,
          onPointerUp: N,
          onPointerLeave: N,
          children: [
            e.jsxs(Ye, {
              camera: {
                position: [
                  0,
                  typeof window < "u" && window.innerWidth < 768 ? -0.2 : -0.5,
                  3.3,
                ],
                fov: 70,
              },
              dpr: [1, 1.25],
              children: [
                e.jsx("ambientLight", { intensity: 1.2 }),
                e.jsx("directionalLight", {
                  position: [0, 5, 3],
                  intensity: 2.5,
                }),
                e.jsx("pointLight", {
                  position: [-3, 1, -1],
                  intensity: 2,
                  color: "#ff007f",
                }),
                e.jsx("pointLight", {
                  position: [3, -1, 1],
                  intensity: 1.5,
                  color: "#ec4899",
                }),
                e.jsx(vs, { onBreak: i, pull: t, isReleased: n }),
                e.jsx(He, { preset: "sunset" }),
                e.jsx(Ve, {
                  position: [0, -2, 0],
                  opacity: 0.4,
                  scale: 5,
                  blur: 1.5,
                  far: 2,
                }),
              ],
            }),
            !n &&
              e.jsx("div", {
                className:
                  "absolute top-4 left-1/2 -translate-x-1/2 text-center pointer-events-none z-30",
                children: e.jsx("span", {
                  className:
                    "text-[10px] md:text-xs text-pink-300 font-bold tracking-[0.2em] uppercase bg-black/60 px-4 py-2 rounded-full border border-pink-500/20 backdrop-blur-md whitespace-nowrap",
                  children: "Drag Down to Pull String & Release",
                }),
              }),
          ],
        }),
        e.jsxs("div", {
          className: "flex flex-col gap-1.5 items-center my-4",
          children: [
            e.jsx("div", {
              className:
                "w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse shadow-[0_0_8px_#ec4899]",
            }),
            e.jsx("div", {
              className:
                "w-1.5 h-1.5 rounded-full bg-pink-500/50 animate-pulse delay-75 shadow-[0_0_6px_rgba(236,72,153,0.5)]",
            }),
            e.jsx("div", {
              className:
                "w-1.5 h-1.5 rounded-full bg-pink-500/20 animate-pulse delay-150",
            }),
          ],
        }),
        !n &&
          e.jsxs("div", {
            className:
              "w-full max-w-sm px-6 py-4 bg-[#180720]/80 border border-pink-500/20 rounded-2xl shadow-[0_0_15px_rgba(236,72,153,0.1)] backdrop-blur-lg z-30",
            children: [
              e.jsxs("label", {
                className:
                  "block text-[10px] uppercase tracking-[0.2em] text-center text-pink-200/90 font-bold mb-3",
                children: ["Archery Bow Tension: ", Math.round(t * 100), "%"],
              }),
              e.jsxs("div", {
                className: "relative w-full",
                children: [
                  e.jsx("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    value: t * 100,
                    onChange: (f) => {
                      n || h(Number(f.target.value) / 100);
                    },
                    onMouseUp: () => {
                      t > 0.4 ? l(!0) : (h(0), (m.current = 0));
                    },
                    onTouchEnd: () => {
                      t > 0.4 ? l(!0) : (h(0), (m.current = 0));
                    },
                    className:
                      "w-full h-1 bg-pink-950/60 rounded-lg appearance-none cursor-pointer accent-pink-500 focus:outline-none z-10 relative",
                  }),
                  e.jsxs("div", {
                    className:
                      "flex justify-between text-[9px] text-pink-300/40 font-semibold mt-2 px-1",
                    children: [
                      e.jsx("span", { children: "0%" }),
                      e.jsx("span", { children: "50%" }),
                      e.jsx("span", { children: "100%" }),
                    ],
                  }),
                ],
              }),
              t > 0.4
                ? e.jsx("p", {
                    className:
                      "text-[10px] text-pink-400 font-bold text-center mt-3 animate-pulse",
                    children: "Release to Fire! ­ƒÅ╣",
                  })
                : e.jsx("p", {
                    className:
                      "text-[9px] text-pink-300/40 text-center mt-3 font-medium",
                    children: "Pull past 40% to aim",
                  }),
            ],
          }),
        e.jsxs("div", {
          className: "flex flex-col items-center mt-8 w-full max-w-md",
          children: [
            e.jsx("h2", {
              className:
                "text-xl md:text-2xl text-slate-100 font-bold text-center tracking-wide font-serif",
              children: "Shoot the Heart to Reveal Your Greeting Card! ­ƒÆû",
            }),
            e.jsxs("div", {
              className:
                "flex items-center justify-center gap-3 my-4 opacity-80",
              children: [
                e.jsx("span", {
                  className: "text-pink-500/40 text-xs",
                  children: "Ô£ª ┬À ┬À",
                }),
                e.jsx("div", {
                  className:
                    "h-[1px] w-12 bg-gradient-to-r from-transparent to-pink-500/40",
                }),
                e.jsx("span", {
                  className: "text-pink-500 text-sm",
                  children: "­ƒÆû",
                }),
                e.jsx("div", {
                  className:
                    "h-[1px] w-12 bg-gradient-to-l from-transparent to-pink-500/40",
                }),
                e.jsx("span", {
                  className: "text-pink-500/40 text-xs",
                  children: "┬À ┬À Ô£ª",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex items-center gap-6 mt-1 px-4",
              children: [
                e.jsxs("svg", {
                  className: "w-6 h-12 text-pink-500/30 transform -rotate-12",
                  viewBox: "0 0 24 48",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  children: [
                    e.jsx("path", { d: "M18,44 Q14,24 6,8" }),
                    e.jsx("path", { d: "M15,36 Q9,33 9,28" }),
                    e.jsx("path", { d: "M13,27 Q7,24 7,19" }),
                    e.jsx("path", { d: "M10,18 Q5,16 5,11" }),
                  ],
                }),
                e.jsx("p", {
                  className:
                    "text-xs text-pink-300/70 text-center leading-relaxed font-semibold max-w-[200px]",
                  children:
                    "Pull the bow string downward and release to shoot the heart!",
                }),
                e.jsxs("svg", {
                  className: "w-6 h-12 text-pink-500/30 transform rotate-12",
                  viewBox: "0 0 24 48",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  children: [
                    e.jsx("path", { d: "M6,44 Q10,24 18,8" }),
                    e.jsx("path", { d: "M9,36 Q15,33 15,28" }),
                    e.jsx("path", { d: "M11,27 Q17,24 17,19" }),
                    e.jsx("path", { d: "M14,18 Q19,16 19,11" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  ks = ({ step: i, onInteract: t, explosionTrigger: a = 0 }) => {
    const n = s.useRef(null),
      l = s.useRef(a),
      o = s.useRef(a),
      c = s.useRef(t);
    return (
      s.useEffect(() => {
        o.current = a;
      }, [a]),
      s.useEffect(() => {
        c.current = t;
      }, [t]),
      s.useEffect(() => {
        if (!n.current) return;
        let m = null,
          h = null;
        const p = new as();
        p.fog = new rs(132631, 0.02);
        const r = new ns(60, window.innerWidth / window.innerHeight, 0.1, 100);
        r.position.z = 12;
        const k = new is({ alpha: !0, antialias: !0 });
        (k.setSize(window.innerWidth, window.innerHeight),
          k.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
          n.current.appendChild(k.domElement));
        const N = new os(16777215, 0.4);
        p.add(N);
        const f = new ls(14239471, 2, 20);
        (f.position.set(2, 5, 5), p.add(f));
        const u = new Ie();
        p.add(u);
        const _ = new ze(),
          j = 2500,
          g = new Float32Array(j * 3),
          T = new Float32Array(j * 3);
        for (let w = 0; w < j * 3; w++)
          ((g[w] = (Math.random() - 0.5) * 100),
            Math.random() > 0.6
              ? ((T[w] = 1), (T[w + 1] = 0.84), (T[w + 2] = 0))
              : ((T[w] = 0.85), (T[w + 1] = 0.27), (T[w + 2] = 0.93)));
        (_.setAttribute("position", new ge(g, 3)),
          _.setAttribute("color", new ge(T, 3)));
        const F = new Ge({
            size: 0.15,
            vertexColors: !0,
            transparent: !0,
            opacity: 0.8,
            blending: rt,
            sizeAttenuation: !0,
          }),
          q = new Be(_, F);
        p.add(q);
        const O = new Ie();
        if (i === M.LANDING) {
          ((m = new Te(2.5, 2.5, 2.5)),
            (h = new ce({ color: 7346805, roughness: 0.2, metalness: 0.6 })));
          const w = new we(m, h);
          O.add(w);
          const C = new cs({ color: 16766720, metalness: 0.8, roughness: 0.2 }),
            W = new we(new Te(2.6, 2.6, 0.4), C),
            v = new we(new Te(0.4, 2.6, 2.6), C);
          (O.add(W, v), u.add(O));
        }
        const I = new Ie();
        if (i === M.INTERACTIVE_CHECK || i === M.INTRO_ANIMATION) {
          const w = new ds(2.5, 2),
            C = new nt({
              color: 14239471,
              wireframe: !0,
              transparent: !0,
              opacity: 0.3,
            }),
            W = new we(w, C);
          I.add(W);
          const v = new xs(1.5, 32, 32),
            L = new nt({ color: 16766720, transparent: !0, opacity: 0.1 }),
            Q = new we(v, L);
          I.add(Q);
          const Z = new ze(),
            he = 200,
            D = new Float32Array(he * 3);
          for (let R = 0; R < he; R++) {
            const ee = Math.random() * Math.PI * 2,
              te = 3 + Math.random() * 0.5;
            ((D[R * 3] = Math.cos(ee) * te),
              (D[R * 3 + 1] = (Math.random() - 0.5) * 1),
              (D[R * 3 + 2] = Math.sin(ee) * te));
          }
          Z.setAttribute("position", new ge(D, 3));
          const re = new Ge({
              size: 0.05,
              color: 16777215,
              transparent: !0,
              opacity: 0.6,
            }),
            J = new Be(Z, re);
          (I.add(J), u.add(I));
        }
        const ae = [],
          Y = (w) => {
            const W = new ze(),
              v = new Float32Array(200 * 3),
              L = new Float32Array(200 * 3),
              Q = [],
              Z = (Math.random() - 0.5) * 8,
              he = (Math.random() - 0.5) * 4,
              D = new Re(w || (Math.random() > 0.5 ? 16766720 : 14239471));
            for (let R = 0; R < 200; R++) {
              ((v[R * 3] = Z),
                (v[R * 3 + 1] = he),
                (v[R * 3 + 2] = (Math.random() - 0.5) * 4),
                (L[R * 3] = D.r),
                (L[R * 3 + 1] = D.g),
                (L[R * 3 + 2] = D.b));
              const ee = Math.random(),
                te = Math.random(),
                H = 2 * Math.PI * ee,
                pe = Math.acos(2 * te - 1),
                ne = 0.1 + Math.random() * 0.2;
              Q.push(
                new P(
                  ne * Math.sin(pe) * Math.cos(H),
                  ne * Math.sin(pe) * Math.sin(H),
                  ne * Math.cos(pe),
                ),
              );
            }
            (W.setAttribute("position", new ge(v, 3)),
              W.setAttribute("color", new ge(L, 3)));
            const re = new Ge({
                size: 0.15,
                vertexColors: !0,
                blending: rt,
                transparent: !0,
              }),
              J = new Be(W, re);
            (p.add(J), ae.push({ mesh: J, velocity: Q, life: 1 }));
          };
        (new hs(), new ps());
        const ye = (w) => {
          c.current && c.current();
        };
        n.current.addEventListener("click", ye);
        let X,
          E = 0,
          je = 0,
          de = 0;
        const ve = (w) => {
          ((je = (w.clientX / window.innerWidth - 0.5) * 2),
            (de = (w.clientY / window.innerHeight - 0.5) * 2));
        };
        document.addEventListener("mousemove", ve);
        const xe = () => {
          if (
            ((X = requestAnimationFrame(xe)),
            (E += 0.01),
            (q.rotation.y += 3e-4),
            (q.rotation.x = de * 0.02),
            (q.rotation.y += je * 0.02),
            O.children.length > 0 &&
              ((O.rotation.y = Math.sin(E) * 0.1),
              (O.rotation.x = Math.sin(E * 0.5) * 0.05),
              (O.position.y = Math.sin(E * 1.5) * 0.2)),
            I.children.length > 0)
          ) {
            const w = 1 + Math.sin(E * 1.5) * 0.1;
            (I.scale.setScalar(w),
              (I.rotation.y += 0.002),
              (I.rotation.z += 0.001));
            const C = I.children[1];
            C.material.opacity = 0.1 + Math.sin(E * 3) * 0.05;
          }
          (o.current !== l.current &&
            ((l.current = o.current), Y(), Y(), Y(16777215)),
            i === M.REVEAL && Math.random() < 0.03 && Y());
          for (let w = ae.length - 1; w >= 0; w--) {
            const C = ae[w];
            C.life -= 0.015;
            const W = C.mesh.geometry.attributes.position.array;
            for (let v = 0; v < C.velocity.length; v++)
              ((W[v * 3] += C.velocity[v].x),
                (W[v * 3 + 1] += C.velocity[v].y),
                (W[v * 3 + 2] += C.velocity[v].z),
                (C.velocity[v].y -= 0.003),
                C.velocity[v].multiplyScalar(0.99));
            ((C.mesh.geometry.attributes.position.needsUpdate = !0),
              (C.mesh.material.opacity = C.life),
              C.life <= 0 &&
                (p.remove(C.mesh), C.mesh.geometry.dispose(), ae.splice(w, 1)));
          }
          k.render(p, r);
        };
        xe();
        const G = () => {
          ((r.aspect = window.innerWidth / window.innerHeight),
            r.updateProjectionMatrix(),
            k.setSize(window.innerWidth, window.innerHeight));
        };
        return (
          window.addEventListener("resize", G),
          () => {
            var w;
            (cancelAnimationFrame(X),
              window.removeEventListener("resize", G),
              (w = n.current) == null || w.removeEventListener("click", ye),
              document.removeEventListener("mousemove", ve),
              n.current && n.current.removeChild(k.domElement),
              k.dispose(),
              m == null || m.dispose(),
              h == null || h.dispose(),
              _.dispose(),
              F.dispose());
          }
        );
      }, [i]),
      e.jsx("div", { ref: n, className: "absolute inset-0 z-0" })
    );
  },
  _s = ({ surpriseId: i, isOpen: t, onClose: a }) => {
    const [n, l] = s.useState(0),
      [o, c] = s.useState(0),
      [m, h] = s.useState(""),
      [p, r] = s.useState(!1),
      [k, N] = s.useState(!1),
      [f, u] = s.useState(null),
      _ = () => {
        (localStorage.setItem("wishprise_rating_seen", "true"), a());
      };
    if (
      (s.useEffect(
        () => (
          t
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto"),
          () => {
            document.body.style.overflow = "auto";
          }
        ),
        [t],
      ),
      !t)
    )
      return null;
    const j = async () => {
      if (n === 0) {
        u("Please select a rating to share the magic!");
        return;
      }
      (r(!0), u(null));
      try {
        const g = {
          surpriseId: i,
          rating: n,
          comment: m,
          createdAt: Date.now(),
        };
        (await $t(g),
          N(!0),
          localStorage.setItem("wishprise_rating_seen", "true"),
          setTimeout(() => {
            (a(), N(!1), l(0), h(""));
          }, 3e3));
      } catch (g) {
        (console.error(g),
          u("The magic failed to send. Please try again later."));
      } finally {
        r(!1);
      }
    };
    return e.jsx("div", {
      className:
        "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",
      children: e.jsxs("div", {
        className:
          "relative w-full max-w-md bg-slate-900 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] rounded-[2rem] overflow-hidden animate-fade-in-up transform transition-all duration-300 scale-100",
        children: [
          e.jsx("button", {
            onClick: _,
            className:
              "absolute top-4 right-4 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10",
            "aria-label": "Close",
            children: e.jsx(Rt, { size: 20 }),
          }),
          e.jsxs("div", {
            className: "p-8 space-y-8 relative",
            children: [
              e.jsx("div", {
                className:
                  "absolute -top-24 -right-24 w-48 h-48 bg-magical-600/20 blur-[80px] rounded-full pointer-events-none",
              }),
              k
                ? e.jsxs("div", {
                    className: "animate-fade-in text-center py-6 space-y-4",
                    children: [
                      e.jsx("div", {
                        className: "text-5xl animate-bounce",
                        children: "Ô£¿",
                      }),
                      e.jsx("h3", {
                        className: "text-2xl font-serif text-white italic",
                        children: "Your light has been received!",
                      }),
                      e.jsx("p", {
                        className:
                          "text-slate-400 font-serif italic text-sm leading-relaxed px-4",
                        children:
                          '"Thank you for noticing the love we put into every pixel. Your feedback keeps the magic alive."',
                      }),
                    ],
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      e.jsxs("div", {
                        className: "space-y-4 text-center mt-2 relative z-10",
                        children: [
                          e.jsx("div", {
                            className:
                              "inline-block px-3 py-1 rounded-full bg-magical-500/10 border border-magical-500/20 mb-2",
                            children: e.jsx("span", {
                              className:
                                "text-[10px] uppercase tracking-[0.2em] font-black text-magical-300",
                              children: "Handcrafted Experience",
                            }),
                          }),
                          e.jsx("h3", {
                            className:
                              "text-2xl md:text-3xl font-serif text-white tracking-tight italic",
                            children: "How was your journey?",
                          }),
                          e.jsx("p", {
                            className:
                              "text-slate-400 font-serif italic text-sm leading-relaxed px-2",
                            children:
                              '"We gave all of it through this website, can you say how much this experience was?"',
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "flex justify-center gap-2 relative z-10",
                        children: [1, 2, 3, 4, 5].map((g) =>
                          e.jsx(
                            "button",
                            {
                              onMouseEnter: () => c(g),
                              onMouseLeave: () => c(0),
                              onClick: () => l(g),
                              className:
                                "transition-all duration-300 transform hover:scale-125 focus:outline-none p-2",
                              children: e.jsx(Lt, {
                                size: 40,
                                className: `transition-all duration-500 ${(o || n) >= g ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]" : "text-white/10 fill-transparent"}`,
                              }),
                            },
                            g,
                          ),
                        ),
                      }),
                      e.jsxs("div", {
                        className: "space-y-5 relative z-10",
                        children: [
                          e.jsxs("div", {
                            className: "relative group",
                            children: [
                              e.jsx("textarea", {
                                value: m,
                                onChange: (g) => h(g.target.value),
                                className:
                                  "w-full bg-slate-950/60 p-5 rounded-2xl border border-white/10 text-white placeholder-white/20 focus:border-magical-500/50 outline-none min-h-[100px] focus:bg-slate-950/80 font-serif text-lg leading-relaxed transition-all italic shadow-inner custom-scrollbar",
                                placeholder:
                                  "Say something nice about the effort...",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute inset-0 rounded-2xl bg-magical-500/5 blur-xl pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity",
                              }),
                            ],
                          }),
                          f &&
                            e.jsx("p", {
                              className:
                                "text-red-400 text-xs font-serif italic text-center animate-pulse",
                              children: f,
                            }),
                          e.jsx("div", {
                            className: "flex justify-center pt-2",
                            children: e.jsx(U, {
                              text: p ? "Sending..." : "Share Your Thoughts Ô£¿",
                              onClick: j,
                              disabled: p,
                              className:
                                "w-full text-white shadow-magical-600/30 py-4 text-lg",
                            }),
                          }),
                          e.jsx("div", {
                            className: "text-center pt-2",
                            children: e.jsx("button", {
                              onClick: _,
                              className:
                                "text-[10px] text-white/30 uppercase tracking-widest hover:text-white/60 transition-colors font-black",
                              children: "Skip for now",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
            ],
          }),
        ],
      }),
    });
  },
  De = ({
    id: i,
    position: t,
    color: a,
    word: n,
    isPopped: l,
    onPop: o,
    index: c,
  }) => {
    const m = s.useRef(null),
      [h, p] = s.useState(!1);
    return (
      be(({ clock: r }) => {
        if (m.current && !l) {
          const k = r.getElapsedTime() + c * 1.5;
          ((m.current.position.y = t[1] + Math.sin(k * 1.8) * 0.12),
            (m.current.position.x = t[0] + Math.cos(k * 1.2) * 0.04),
            (m.current.rotation.y = Math.sin(k * 0.5) * 0.08),
            (m.current.rotation.z = Math.cos(k * 0.4) * 0.04));
        }
      }),
      Pt.useEffect(
        () => (
          h && !l && (document.body.style.cursor = "pointer"),
          () => {
            document.body.style.cursor = "auto";
          }
        ),
        [h, l],
      ),
      l
        ? e.jsx(tt, {
            position: t,
            center: !0,
            className: "pointer-events-none select-none",
            children: e.jsx("div", {
              className:
                "transform perspective-500 animate-[bounce-subtle_2s_infinite] whitespace-nowrap",
              children: e.jsx("div", {
                className:
                  "text-3xl md:text-5xl font-black font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300 drop-shadow-[0_4px_10px_rgba(162,28,175,0.7)] rotate-x-12",
                children: n,
              }),
            }),
          })
        : e.jsxs("group", {
            ref: m,
            position: t,
            onClick: (r) => {
              (r.stopPropagation(), o(i));
            },
            onPointerDown: (r) => {
              (r.stopPropagation(), o(i));
            },
            onPointerOver: (r) => {
              (r.stopPropagation(), p(!0));
            },
            onPointerOut: () => p(!1),
            children: [
              e.jsxs("mesh", {
                castShadow: !0,
                children: [
                  e.jsx("sphereGeometry", { args: [0.42, 32, 32] }),
                  e.jsx("meshPhysicalMaterial", {
                    color: a,
                    roughness: 0.02,
                    metalness: 0.1,
                    clearcoat: 1,
                    clearcoatRoughness: 0.01,
                    reflectivity: 0.9,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0, -0.44, 0],
                rotation: [Math.PI, 0, 0],
                children: [
                  e.jsx("coneGeometry", { args: [0.05, 0.09, 8] }),
                  e.jsx("meshPhysicalMaterial", {
                    color: a,
                    roughness: 0.1,
                    clearcoat: 1,
                  }),
                ],
              }),
              e.jsxs("mesh", {
                position: [0, -1.04, 0],
                children: [
                  e.jsx("cylinderGeometry", { args: [0.004, 0.004, 1.2, 8] }),
                  e.jsx("meshStandardMaterial", {
                    color: "#d4af37",
                    metalness: 0.8,
                    roughness: 0.2,
                    transparent: !0,
                    opacity: 0.6,
                  }),
                ],
              }),
              e.jsx(tt, {
                center: !0,
                className: "pointer-events-none select-none",
                children: e.jsx("span", {
                  className:
                    "text-xl md:text-2xl font-black text-white/60 select-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]",
                  children: "?",
                }),
              }),
            ],
          })
    );
  },
  it = ({ poppedBalloons: i, onPop: t, balloonsData: a }) => {
    const n = ["#ffd54f", "#ba68c8", "#f06292"],
      [l, o] = s.useState(!1);
    return (
      s.useEffect(() => {
        const c = () => {
          o(window.innerWidth < 768);
        };
        return (
          c(),
          window.addEventListener("resize", c),
          () => window.removeEventListener("resize", c)
        );
      }, []),
      e.jsx("div", {
        className:
          "w-full h-[380px] md:h-[450px] relative select-none z-30 -mt-10",
        children: e.jsxs(Ye, {
          camera: { position: [0, -0.42, 3.2], fov: 45 },
          gl: {
            antialias: !l,
            powerPreference: "high-performance",
            toneMapping: ms,
            toneMappingExposure: 0.35,
          },
          shadows: !l,
          children: [
            e.jsx("ambientLight", { intensity: 0.05, color: "#1c0a21" }),
            e.jsx("pointLight", {
              position: [0, 2, 2],
              intensity: 0.15,
              color: "#fff",
            }),
            e.jsx("pointLight", {
              position: [-3, 1, 1],
              intensity: 0.08,
              color: "#ffd54f",
            }),
            e.jsx("pointLight", {
              position: [3, 1, 1],
              intensity: 0.08,
              color: "#f06292",
            }),
            e.jsx("directionalLight", {
              position: [0, 4, 3],
              intensity: 0.05,
              castShadow: !l,
            }),
            e.jsx("pointLight", {
              position: [0, 0.5, -0.6],
              intensity: 2,
              color: "#ffdf7a",
              distance: 1.8,
              decay: 1.5,
            }),
            e.jsxs("group", {
              position: [0, -0.45, -0.9],
              rotation: [0, -Math.PI / 12, 0],
              children: [
                e.jsxs("mesh", {
                  castShadow: !l,
                  receiveShadow: !l,
                  children: [
                    e.jsx("boxGeometry", { args: [1.1, 0.7, 1.1] }),
                    e.jsx("meshStandardMaterial", {
                      color: "#2d0b47",
                      roughness: 0.4,
                      metalness: 0.2,
                    }),
                  ],
                }),
                e.jsxs("mesh", {
                  position: [0, 0.36, 0],
                  castShadow: !l,
                  children: [
                    e.jsx("boxGeometry", { args: [1.14, 0.12, 1.14] }),
                    e.jsx("meshStandardMaterial", {
                      color: "#3a0e5c",
                      roughness: 0.3,
                    }),
                  ],
                }),
                e.jsxs("mesh", {
                  position: [0, 0.01, 0],
                  castShadow: !l,
                  children: [
                    e.jsx("boxGeometry", { args: [1.12, 0.72, 0.15] }),
                    e.jsx("meshStandardMaterial", {
                      color: "#eec643",
                      metalness: 0.9,
                      roughness: 0.1,
                    }),
                  ],
                }),
                e.jsxs("mesh", {
                  position: [0, 0.01, 0],
                  castShadow: !l,
                  children: [
                    e.jsx("boxGeometry", { args: [0.15, 0.72, 1.12] }),
                    e.jsx("meshStandardMaterial", {
                      color: "#eec643",
                      metalness: 0.9,
                      roughness: 0.1,
                    }),
                  ],
                }),
              ],
            }),
            e.jsx(De, {
              id: 0,
              position: [-0.72, 0.1, 0],
              color: n[0],
              word: a[0].word,
              isPopped: i.includes(0),
              onPop: t,
              index: 0,
            }),
            e.jsx(De, {
              id: 1,
              position: [0, 0.22, 0.12],
              color: n[1],
              word: a[1].word,
              isPopped: i.includes(1),
              onPop: t,
              index: 1,
            }),
            e.jsx(De, {
              id: 2,
              position: [0.72, 0.1, 0],
              color: n[2],
              word: a[2].word,
              isPopped: i.includes(2),
              onPop: t,
              index: 2,
            }),
            e.jsx(Ve, {
              position: [0, -0.8, 0],
              opacity: 0.5,
              scale: 8,
              blur: l ? 1.5 : 2,
              far: 1.5,
            }),
            e.jsx("pointLight", {
              position: [0, -1, 2],
              intensity: 0.05,
              color: "#ffffff",
            }),
            e.jsx("pointLight", {
              position: [0, 1, -2],
              intensity: 0.02,
              color: "#ffffff",
            }),
            e.jsx(He, { preset: "studio" }),
          ],
        }),
      })
    );
  };
let Fe = null;
const Cs = () => {
    if (!Fe) {
      const i = document.createElement("canvas");
      ((i.style.position = "fixed"),
        (i.style.top = "0"),
        (i.style.left = "0"),
        (i.style.width = "100vw"),
        (i.style.height = "100vh"),
        (i.style.pointerEvents = "none"),
        (i.style.zIndex = "99999"),
        document.body.appendChild(i),
        (Fe = ot.create(i, { resize: !0, useWorker: !1 })));
    }
    return Fe;
  },
  Ae = (i) => {
    try {
      const t = Cs();
      t == null || t(i);
    } catch (t) {
      console.error("Failed to trigger confetti:", t);
    }
  },
  Ms = (i) =>
    i
      .replace(
        /[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g,
        "",
      )
      .trim(),
  Ss = (i, t, a, n, l) => {
    const o = Math.PI / 180,
      c = i + a * Math.cos(n * o),
      m = t + a * Math.sin(n * o),
      h = i + a * Math.cos(l * o),
      p = t + a * Math.sin(l * o);
    return `M ${i} ${t} L ${c} ${m} A ${a} ${a} 0 0 1 ${h} ${p} Z`;
  },
  Es = ({ previewData: i, onClose: t, onConfirm: a }) => {
    const n = Wt(),
      l = Et(),
      o = Ut(),
      [c] = It(),
      m = !!i,
      h = m ? (i == null ? void 0 : i.id) : n.id,
      p = m || c.get("preview") === "true",
      [r, k] = s.useState(null),
      [N, f] = s.useState(!0),
      [u, _] = s.useState(!1),
      [j, g] = s.useState(M.LANDING),
      [T, F] = s.useState(""),
      [q, O] = s.useState(!1),
      [I, ae] = s.useState(0),
      [Y, ye] = s.useState(""),
      [X, E] = s.useState("lit"),
      [je, de] = s.useState(!1),
      [ve, xe] = s.useState(!1),
      [G, w] = s.useState("idle"),
      [C, W] = s.useState(!1),
      [v, L] = s.useState("none"),
      [Q, Z] = s.useState(!1),
      [he, D] = s.useState(!1),
      [re, J] = s.useState(!1),
      [R, ee] = s.useState(!1),
      [te, H] = s.useState("none"),
      [pe, ne] = s.useState(!1),
      [b, Ne] = s.useState("idle"),
      [ke, $e] = s.useState(15),
      [lt, ct] = s.useState(45),
      [dt, xt] = s.useState(1),
      [ht, pt] = s.useState(1),
      [me, mt] = s.useState(!1),
      [Le, ft] = s.useState([]),
      [ut, gt] = s.useState(0),
      Pe = [
        { id: 0, word: "It's" },
        { id: 1, word: "Your" },
        { id: 2, word: "Birthday!" },
      ],
      B = s.useRef(new fs()),
      ie = s.useRef(null),
      fe = s.useRef(null),
      oe = s.useRef(null),
      We = s.useRef(null),
      _e = s.useRef(null),
      Ee = s.useRef(null),
      Ce = s.useRef(!1),
      wt = s.useRef(null),
      Me = () => {
        (fe.current !== null &&
          (cancelAnimationFrame(fe.current), (fe.current = null)),
          (oe.current = null),
          B.current.stopMicrophone(),
          de(!1));
      };
    (s.useEffect(() => {
      if (i) {
        (k(i), f(!1));
        return;
      }
      (async () => {
        if (h)
          try {
            const d = await Ot(h, (p && c.get("token")) || void 0);
            if (d) {
              const y = c.get("receiverName");
              (h === "demo-123" && y && (d.receiverName = y), k(d));
            } else _(!0);
          } catch (d) {
            console.error(d);
          } finally {
            f(!1);
          }
      })();
    }, [h, c, i]),
      s.useEffect(() => {
        if (j === M.CANDLES) {
          (xe(!1), E("lit"), (Ce.current = !1));
          const x = setTimeout(() => {
            xe(!0);
          }, 4e3);
          return () => {
            (clearTimeout(x), Me());
          };
        }
        Me();
      }, [j]),
      s.useEffect(
        () => () => {
          (Me(),
            We.current && clearTimeout(We.current),
            _e.current && clearTimeout(_e.current),
            Ee.current && clearTimeout(Ee.current));
        },
        [],
      ),
      s.useEffect(
        () => () => {
          var x;
          ((x = ie.current) == null || x.pause(),
            (ie.current = null),
            B.current.stop());
        },
        [r],
      ),
      s.useEffect(() => {
        if (b === "walking_to_sender") {
          const d = Date.now(),
            y = setInterval(() => {
              const S = Date.now() - d,
                A = Math.min(S / 2e3, 1),
                z = 1 - Math.pow(1 - A, 3);
              ($e(15 + z * 25),
                A >= 1 && (clearInterval(y), Ne("walking_together")));
            }, 30);
          return () => clearInterval(y);
        }
        if (b === "walking_together") {
          const d = Date.now(),
            y = setInterval(() => {
              const S = Date.now() - d,
                A = Math.min(S / 3e3, 1),
                z = A;
              ($e(40 + z * 47),
                ct(45 + z * 47),
                A >= 1 && (clearInterval(y), mt(!0), Ne("entering_door")));
            }, 30);
          return () => clearInterval(y);
        }
        if (b === "entering_door") {
          const x = setTimeout(() => {
              let S = Date.now();
              const A = setInterval(() => {
                const z = Date.now() - S,
                  V = Math.min(z / 800, 1);
                (xt(1 - V), V >= 1 && clearInterval(A));
              }, 30);
            }, 500),
            d = setTimeout(() => {
              let S = Date.now();
              const A = setInterval(() => {
                const z = Date.now() - S,
                  V = Math.min(z / 800, 1);
                (pt(1 - V), V >= 1 && clearInterval(A));
              }, 30);
            }, 1300),
            y = setTimeout(() => {
              (Ne("complete"),
                g(M.REVEAL),
                window.scrollTo({ top: 0, behavior: "instant" }));
            }, 2500);
          return () => {
            (clearTimeout(x), clearTimeout(d), clearTimeout(y));
          };
        }
      }, [b]));
    const Ue = () => {
        (le(), g(M.INTRO_ANIMATION));
      },
      bt = (x) => {
        Le.includes(x) ||
          (gt((d) => d + 1),
          ft((d) => [...d, x]),
          (() => {
            try {
              B.current.playPop();
            } catch (e) {}
          })());
      },
      qe = (x = !1) => {
        H("entering");
        const d = setTimeout(() => {
            H("ready");
          }, 1200),
          y = setTimeout(() => {
            (H("popping"), x && ne(!0));
            try {
              B.current.playPopper();
            } catch (z) {
              console.warn("Audio playPopper failed:", z);
            }
            (Ae({
              particleCount: 120,
              angle: 60,
              spread: 70,
              startVelocity: 70,
              scalar: 1.6,
              ticks: 350,
              gravity: 0.8,
              origin: { x: 0.12, y: 0.75 },
              colors: [
                "#ba68c8",
                "#ffd54f",
                "#f06292",
                "#e91e63",
                "#9c27b0",
                "#00e5ff",
                "#76ff03",
              ],
            }),
              Ae({
                particleCount: 120,
                angle: 120,
                spread: 70,
                startVelocity: 70,
                scalar: 1.6,
                ticks: 350,
                gravity: 0.8,
                origin: { x: 0.88, y: 0.75 },
                colors: [
                  "#ba68c8",
                  "#ffd54f",
                  "#f06292",
                  "#e91e63",
                  "#9c27b0",
                  "#00e5ff",
                  "#76ff03",
                ],
              }));
          }, 2400),
          S = setTimeout(() => {
            H("leaving");
          }, 3800),
          A = setTimeout(() => {
            H("none");
          }, 4800);
        return () => {
          (clearTimeout(d), clearTimeout(y), clearTimeout(S), clearTimeout(A));
        };
      };
    (s.useEffect(() => {
      if (j === M.INTRO_ANIMATION && r) {
        J(!1);
        try {
          B.current.startMagicChime();
        } catch (z) {
          console.warn("Audio startMagicChime failed:", z);
        }
        const x = qe(!0),
          d = `${r.introMessage}`;
        let y = 0;
        const A = setInterval(() => {
          (F(d.slice(0, y + 1)),
            y++,
            y > d.length &&
              (clearInterval(A), J(!0), B.current.stopMagicChime()));
        }, 40);
        return () => {
          (clearInterval(A), x());
        };
      } else (H("none"), ne(!1));
    }, [j, r]),
      s.useEffect(() => {
        if (j !== M.REVEAL || p || h === "demo-123") return;
        const x = () => {
            window.innerHeight + window.scrollY >=
              document.documentElement.scrollHeight - 250 &&
              (localStorage.getItem("wishprise_rating_seen") || ee(!0),
              window.removeEventListener("scroll", x));
          },
          d = setTimeout(() => {
            (window.addEventListener("scroll", x), x());
          }, 2e3);
        return () => {
          (clearTimeout(d), window.removeEventListener("scroll", x));
        };
      }, [j, p]));
    const Se =
        r != null &&
        r.wheelOptions &&
        r.wheelOptions.filter((x) => x.trim()).length > 0
          ? r.wheelOptions.filter((x) => x.trim())
          : Ft,
      ue = 360 / Se.length,
      yt = () => {
        if (q || Y) return;
        (le(), O(!0), B.current.startWheelSpin(3500));
        const x = Math.floor(Math.random() * Se.length),
          d = Se[x],
          S = 1800 + 270 - (x * ue + ue / 2);
        (ae(S),
          setTimeout(() => {
            (O(!1), ye(d), B.current.stopWheelSpin());
          }, 3500));
      },
      jt = () => {
        (le(), g(M.CANDLES));
      },
      Qe = () => {
        var y, S;
        if (!r) return null;
        const x = r.songUrl || Yt;
        if (((y = ie.current) == null ? void 0 : y.dataset.source) === x)
          return ie.current;
        (S = ie.current) == null || S.pause();
        const d = document.createElement("audio");
        return (
          (d.preload = "none"),
          (d.dataset.source = x),
          (d.src = x),
          (d.loop = !1),
          (d.volume = 0.5),
          (ie.current = d),
          d
        );
      },
      vt = () => {
        const x = Qe();
        x &&
          ((x.currentTime = 0),
          (x.volume = 0.5),
          x
            .play()
            .then(() => {
              D(!0);
            })
            .catch((d) => console.log("Audio autoplay blocked", d)));
      },
      le = () => {
        const x = Qe();
        if (x) {
          const d = x.play();
          d !== void 0 &&
            d
              .then(() => {
                x.pause();
              })
              .catch((y) => console.log("Audio unlock failed/blocked:", y));
        }
      },
      Ke = () => {
        Ce.current ||
          ((Ce.current = !0),
          E("blowing"),
          Me(),
          (We.current = window.setTimeout(() => {
            (E("extinguished"),
              vt(),
              (_e.current = window.setTimeout(() => g(M.CAKE_CUTTING), 1550)));
          }, 450)));
      },
      Nt = async () => {
        if ((le(), await B.current.initMicrophone())) {
          de(!0);
          const d = (y) => {
            if (Ce.current) return;
            if (B.current.getBlowLevel() >= 0.065) {
              if (oe.current === null) ((oe.current = y), E("blowing"));
              else if (y - oe.current >= 320) {
                Ke();
                return;
              }
            } else (oe.current !== null && E("lit"), (oe.current = null));
            fe.current = requestAnimationFrame(d);
          };
          fe.current = requestAnimationFrame(d);
        } else
          alert("Microphone access needed to blow candles! Or just tap them.");
      },
      kt = () => {
        (le(), X !== "extinguished" && Ke());
      },
      Xe = () => {
        G === "idle" &&
          (w("cutting"),
          (_e.current = window.setTimeout(() => {
            (w("cut"),
              qe(!1),
              (Ee.current = window.setTimeout(() => W(!0), 1700)));
          }, 850)));
      },
      _t = () => {
        L("archery");
      };
    if (N)
      return e.jsx("div", {
        className:
          "min-h-screen flex items-center justify-center bg-black text-white",
        children: "Loading magic...",
      });
    if (u || !r)
      return e.jsx("div", {
        className:
          "min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center",
        children: e.jsxs("div", {
          className:
            "bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 max-w-md w-full space-y-6",
          children: [
            e.jsx("div", { className: "text-6xl", children: "Ô£¿" }),
            e.jsx("h1", {
              className: "text-3xl font-serif text-white",
              children: "This surprise is no longer available",
            }),
            e.jsx("p", {
              className: "text-gray-400",
              children:
                "Wishprise surprises are available for 48 hours after successful payment. This link has expired or does not exist.",
            }),
            e.jsx(Oe, {
              onClick: () => (t ? t() : l("/")),
              variant: "primary",
              className: "w-full",
              children: t ? "Close Preview" : "Create Your Own Surprise ­ƒÄü",
            }),
          ],
        }),
      });
    const Ct = () => {
        switch (te) {
          case "entering":
            return "translate-y-[-140px] opacity-100 rotate-[35deg] scale-100 duration-[1200ms] ease-out";
          case "ready":
            return "translate-y-[-120px] rotate-[22deg] scale-[0.96] duration-500 ease-in-out";
          case "popping":
            return "translate-y-[-165px] rotate-[45deg] scale-[1.12] duration-200 ease-out";
          case "leaving":
            return "translate-y-[400px] opacity-0 rotate-[15deg] scale-90 duration-[1000ms] ease-in";
          default:
            return "translate-y-[400px] opacity-0 rotate-[15deg] scale-90";
        }
      },
      Mt = () => {
        switch (te) {
          case "entering":
            return "translate-y-[-140px] opacity-100 -rotate-[35deg] scale-100 duration-[1200ms] ease-out";
          case "ready":
            return "translate-y-[-120px] -rotate-[22deg] scale-[0.96] duration-500 ease-in-out";
          case "popping":
            return "translate-y-[-165px] -rotate-[45deg] scale-[1.12] duration-200 ease-out";
          case "leaving":
            return "translate-y-[400px] opacity-0 -rotate-[15deg] scale-90 duration-[1000ms] ease-in";
          default:
            return "translate-y-[400px] opacity-0 -rotate-[15deg] scale-90";
        }
      },
      Ze = Le.length === Pe.length;
    return e.jsxs("div", {
      className:
        "relative min-h-screen overflow-x-hidden bg-black text-white font-sans",
      children: [
        e.jsx(qt, {
          title: "A Birthday Surprise!",
          description:
            "Open your magical 3D birthday surprise from someone special.",
          path: `/view/${h}`,
          noindex: !0,
        }),
        e.jsx(_s, {
          isOpen: R,
          onClose: () => ee(!1),
          surpriseId: h || "demo",
        }),
        e.jsx("div", {
          className: `fixed -bottom-24 left-0 z-50 transform origin-bottom-left transition-all ${Ct()}`,
          children: e.jsxs("svg", {
            viewBox: "0 0 60 200",
            className:
              "w-12 h-40 md:w-16 md:h-52 drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]",
            children: [
              e.jsx("defs", {
                children: e.jsxs("linearGradient", {
                  id: "bodyGrad",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "100%",
                  children: [
                    e.jsx("stop", { offset: "0%", stopColor: "#4caf50" }),
                    e.jsx("stop", { offset: "35%", stopColor: "#8bc34a" }),
                    e.jsx("stop", { offset: "70%", stopColor: "#ffeb3b" }),
                    e.jsx("stop", { offset: "100%", stopColor: "#ff5722" }),
                  ],
                }),
              }),
              e.jsx("rect", {
                x: "15",
                y: "10",
                width: "30",
                height: "180",
                rx: "6",
                fill: "url(#bodyGrad)",
                stroke: "#ffd700",
                strokeWidth: "1",
              }),
              e.jsxs("g", {
                opacity: "0.85",
                children: [
                  e.jsx("circle", {
                    cx: "22",
                    cy: "40",
                    r: "2.5",
                    fill: "#fff",
                  }),
                  e.jsx("rect", {
                    x: "35",
                    y: "60",
                    width: "4",
                    height: "4",
                    transform: "rotate(15 37 62)",
                    fill: "#e91e63",
                  }),
                  e.jsx("circle", {
                    cx: "28",
                    cy: "90",
                    r: "3",
                    fill: "#00e5ff",
                  }),
                  e.jsx("rect", {
                    x: "20",
                    y: "120",
                    width: "5",
                    height: "3",
                    transform: "rotate(-30 22.5 121.5)",
                    fill: "#ffd54f",
                  }),
                  e.jsx("circle", {
                    cx: "34",
                    cy: "150",
                    r: "2.5",
                    fill: "#ba68c8",
                  }),
                ],
              }),
              e.jsx("text", {
                x: "-120",
                y: "36",
                transform: "rotate(-90)",
                fill: "#d50000",
                fontSize: "20",
                fontWeight: "900",
                fontStyle: "italic",
                letterSpacing: "1.5",
                children: "popper",
              }),
              e.jsx("rect", {
                x: "15",
                y: "180",
                width: "30",
                height: "10",
                rx: "2",
                fill: "#d50000",
              }),
              e.jsx("circle", { cx: "30", cy: "193", r: "3", fill: "#ffeb3b" }),
            ],
          }),
        }),
        e.jsx("div", {
          className: `fixed -bottom-24 right-0 z-50 transform origin-bottom-right transition-all ${Mt()}`,
          children: e.jsx("div", {
            className: "scale-x-[-1]",
            children: e.jsxs("svg", {
              viewBox: "0 0 60 200",
              className:
                "w-12 h-40 md:w-16 md:h-52 drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]",
              children: [
                e.jsx("defs", {
                  children: e.jsxs("linearGradient", {
                    id: "bodyGradRight",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                      e.jsx("stop", { offset: "0%", stopColor: "#4caf50" }),
                      e.jsx("stop", { offset: "35%", stopColor: "#8bc34a" }),
                      e.jsx("stop", { offset: "70%", stopColor: "#ffeb3b" }),
                      e.jsx("stop", { offset: "100%", stopColor: "#ff5722" }),
                    ],
                  }),
                }),
                e.jsx("rect", {
                  x: "15",
                  y: "10",
                  width: "30",
                  height: "180",
                  rx: "6",
                  fill: "url(#bodyGradRight)",
                  stroke: "#ffd700",
                  strokeWidth: "1",
                }),
                e.jsxs("g", {
                  opacity: "0.85",
                  children: [
                    e.jsx("circle", {
                      cx: "22",
                      cy: "40",
                      r: "2.5",
                      fill: "#fff",
                    }),
                    e.jsx("rect", {
                      x: "35",
                      y: "60",
                      width: "4",
                      height: "4",
                      transform: "rotate(15 37 62)",
                      fill: "#e91e63",
                    }),
                    e.jsx("circle", {
                      cx: "28",
                      cy: "90",
                      r: "3",
                      fill: "#00e5ff",
                    }),
                    e.jsx("rect", {
                      x: "20",
                      y: "120",
                      width: "5",
                      height: "3",
                      transform: "rotate(-30 22.5 121.5)",
                      fill: "#ffd54f",
                    }),
                    e.jsx("circle", {
                      cx: "34",
                      cy: "150",
                      r: "2.5",
                      fill: "#ba68c8",
                    }),
                  ],
                }),
                e.jsx("text", {
                  x: "-120",
                  y: "36",
                  transform: "rotate(-90)",
                  fill: "#d50000",
                  fontSize: "20",
                  fontWeight: "900",
                  fontStyle: "italic",
                  letterSpacing: "1.5",
                  children: "popper",
                }),
                e.jsx("rect", {
                  x: "15",
                  y: "180",
                  width: "30",
                  height: "10",
                  rx: "2",
                  fill: "#d50000",
                }),
                e.jsx("circle", {
                  cx: "30",
                  cy: "193",
                  r: "3",
                  fill: "#ffeb3b",
                }),
              ],
            }),
          }),
        }),
        e.jsxs("div", {
          className: `fixed top-1 md:top-2 left-0 w-full h-18 md:h-28 transition-all duration-1000 ease-out transform z-40 ${pe ? "translate-y-0 opacity-100 scale-100" : "translate-y-[-120px] opacity-0 scale-95"}`,
          children: [
            e.jsxs("svg", {
              viewBox: "0 0 400 95",
              className:
                "w-full h-full block md:hidden drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)] select-none pointer-events-none",
              children: [
                e.jsx("path", {
                  d: "M 10 20 Q 200 65 390 20",
                  fill: "none",
                  stroke: "#ffd700",
                  strokeWidth: "1.5",
                  strokeDasharray: "3,3",
                }),
                e.jsx("polygon", {
                  points: "23,18 49,18 36,60",
                  fill: "#ef5350",
                }),
                e.jsx("text", {
                  x: "36",
                  y: "37",
                  fill: "#fff",
                  fontSize: "16",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "H",
                }),
                e.jsx("polygon", {
                  points: "51,24 77,24 64,66",
                  fill: "#29b6f6",
                }),
                e.jsx("text", {
                  x: "64",
                  y: "43",
                  fill: "#fff",
                  fontSize: "16",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "A",
                }),
                e.jsx("polygon", {
                  points: "79,30 105,30 92,72",
                  fill: "#ffd54f",
                }),
                e.jsx("text", {
                  x: "92",
                  y: "49",
                  fill: "#fff",
                  fontSize: "16",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "P",
                }),
                e.jsx("polygon", {
                  points: "107,35 133,35 120,77",
                  fill: "#26a69a",
                }),
                e.jsx("text", {
                  x: "120",
                  y: "54",
                  fill: "#fff",
                  fontSize: "16",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "P",
                }),
                e.jsx("polygon", {
                  points: "135,39 161,39 148,81",
                  fill: "#ff7043",
                }),
                e.jsx("text", {
                  x: "148",
                  y: "58",
                  fill: "#fff",
                  fontSize: "16",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "Y",
                }),
                e.jsx("polygon", {
                  points: "163,41 189,41 176,83",
                  fill: "#ba68c8",
                }),
                e.jsx("text", {
                  x: "176",
                  y: "60",
                  fill: "#fff",
                  fontSize: "16",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "B",
                }),
                e.jsx("polygon", {
                  points: "191,42 217,42 204,84",
                  fill: "#29b6f6",
                }),
                e.jsx("text", {
                  x: "204",
                  y: "61",
                  fill: "#fff",
                  fontSize: "16",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "I",
                }),
                e.jsx("polygon", {
                  points: "219,41 245,41 232,83",
                  fill: "#ef5350",
                }),
                e.jsx("text", {
                  x: "232",
                  y: "60",
                  fill: "#fff",
                  fontSize: "16",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "R",
                }),
                e.jsx("polygon", {
                  points: "247,39 273,39 260,81",
                  fill: "#ffd54f",
                }),
                e.jsx("text", {
                  x: "260",
                  y: "58",
                  fill: "#fff",
                  fontSize: "16",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "T",
                }),
                e.jsx("polygon", {
                  points: "275,35 301,35 288,77",
                  fill: "#26a69a",
                }),
                e.jsx("text", {
                  x: "288",
                  y: "54",
                  fill: "#fff",
                  fontSize: "16",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "H",
                }),
                e.jsx("polygon", {
                  points: "303,30 329,30 316,72",
                  fill: "#ff7043",
                }),
                e.jsx("text", {
                  x: "316",
                  y: "49",
                  fill: "#fff",
                  fontSize: "16",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "D",
                }),
                e.jsx("polygon", {
                  points: "331,24 357,24 344,66",
                  fill: "#ba68c8",
                }),
                e.jsx("text", {
                  x: "344",
                  y: "43",
                  fill: "#fff",
                  fontSize: "16",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "A",
                }),
                e.jsx("polygon", {
                  points: "359,18 385,18 372,60",
                  fill: "#ef5350",
                }),
                e.jsx("text", {
                  x: "372",
                  y: "37",
                  fill: "#fff",
                  fontSize: "16",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "Y",
                }),
              ],
            }),
            e.jsxs("svg", {
              viewBox: "0 0 1000 110",
              className:
                "w-full h-full hidden md:block drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)] select-none pointer-events-none",
              children: [
                e.jsx("path", {
                  d: "M 10 20 Q 500 65 990 20",
                  fill: "none",
                  stroke: "#ffd700",
                  strokeWidth: "1.5",
                  strokeDasharray: "3,3",
                }),
                e.jsx("polygon", {
                  points: "40,22 60,22 50,54",
                  fill: "#ef5350",
                }),
                e.jsx("text", {
                  x: "50",
                  y: "38",
                  fill: "#fff",
                  fontSize: "11",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "H",
                }),
                e.jsx("polygon", {
                  points: "115,29 135,29 125,61",
                  fill: "#29b6f6",
                }),
                e.jsx("text", {
                  x: "125",
                  y: "45",
                  fill: "#fff",
                  fontSize: "11",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "A",
                }),
                e.jsx("polygon", {
                  points: "190,36 210,36 200,68",
                  fill: "#ffd54f",
                }),
                e.jsx("text", {
                  x: "200",
                  y: "52",
                  fill: "#fff",
                  fontSize: "11",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "P",
                }),
                e.jsx("polygon", {
                  points: "265,43 285,43 275,75",
                  fill: "#26a69a",
                }),
                e.jsx("text", {
                  x: "275",
                  y: "59",
                  fill: "#fff",
                  fontSize: "11",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "P",
                }),
                e.jsx("polygon", {
                  points: "340,50 360,50 350,82",
                  fill: "#ff7043",
                }),
                e.jsx("text", {
                  x: "350",
                  y: "66",
                  fill: "#fff",
                  fontSize: "11",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "Y",
                }),
                e.jsx("polygon", {
                  points: "415,56 435,56 425,88",
                  fill: "#ba68c8",
                }),
                e.jsx("text", {
                  x: "425",
                  y: "72",
                  fill: "#fff",
                  fontSize: "11",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "B",
                }),
                e.jsx("polygon", {
                  points: "490,59 510,59 500,91",
                  fill: "#29b6f6",
                }),
                e.jsx("text", {
                  x: "500",
                  y: "75",
                  fill: "#fff",
                  fontSize: "11",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "I",
                }),
                e.jsx("polygon", {
                  points: "565,56 585,56 575,88",
                  fill: "#ef5350",
                }),
                e.jsx("text", {
                  x: "575",
                  y: "72",
                  fill: "#fff",
                  fontSize: "11",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "R",
                }),
                e.jsx("polygon", {
                  points: "640,50 660,50 650,82",
                  fill: "#ffd54f",
                }),
                e.jsx("text", {
                  x: "650",
                  y: "66",
                  fill: "#fff",
                  fontSize: "11",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "T",
                }),
                e.jsx("polygon", {
                  points: "715,43 735,43 725,75",
                  fill: "#26a69a",
                }),
                e.jsx("text", {
                  x: "725",
                  y: "59",
                  fill: "#fff",
                  fontSize: "11",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "H",
                }),
                e.jsx("polygon", {
                  points: "790,36 810,36 800,68",
                  fill: "#ff7043",
                }),
                e.jsx("text", {
                  x: "800",
                  y: "52",
                  fill: "#fff",
                  fontSize: "11",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "D",
                }),
                e.jsx("polygon", {
                  points: "865,29 885,29 875,61",
                  fill: "#ba68c8",
                }),
                e.jsx("text", {
                  x: "875",
                  y: "45",
                  fill: "#fff",
                  fontSize: "11",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "A",
                }),
                e.jsx("polygon", {
                  points: "940,22 960,22 950,54",
                  fill: "#ef5350",
                }),
                e.jsx("text", {
                  x: "950",
                  y: "38",
                  fill: "#fff",
                  fontSize: "11",
                  fontWeight: "900",
                  textAnchor: "middle",
                  children: "Y",
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "fixed inset-0 z-0 pointer-events-none",
          children: e.jsx(ks, {
            step: j,
            onInteract: j === M.LANDING && Ze ? Ue : void 0,
            explosionTrigger: ut,
          }),
        }),
        !t &&
          e.jsx(Gt, {
            to: "/",
            className:
              "absolute top-6 left-6 z-50 opacity-80 hover:opacity-100 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group",
            title: "Back to Home",
            children: e.jsx("div", {
              className:
                "bg-white/5 backdrop-blur-md p-2 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors",
              children: e.jsx(Qt, { size: "sm" }),
            }),
          }),
        t &&
          e.jsx("div", {
            className:
              "fixed top-4 right-4 z-[110] animate-fade-in-down flex flex-col items-end gap-2",
            children: e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx("div", {
                  className:
                    "bg-fuchsia-500/90 text-white text-[9px] md:text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg border border-fuchsia-400 animate-pulse",
                  children: "­ƒæü´©Å Preview",
                }),
                e.jsx("button", {
                  onClick: t,
                  className:
                    "flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all",
                  "aria-label": "Close preview",
                  children: e.jsxs("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    children: [
                      e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                      e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        a &&
          e.jsx("div", {
            className:
              "fixed bottom-0 left-0 right-0 z-[120] px-4 pb-5 pt-3 bg-gradient-to-t from-black/95 via-black/80 to-transparent pointer-events-none",
            children: e.jsxs("div", {
              className: "pointer-events-auto max-w-sm mx-auto",
              children: [
                e.jsxs("button", {
                  onClick: a,
                  className:
                    "w-full flex items-center justify-center gap-3 py-4 px-8 rounded-full font-semibold text-base md:text-lg text-white bg-gradient-to-r from-magical-500 to-magical-600 hover:shadow-xl hover:shadow-magical-300/50 active:scale-95 transition-all duration-300 shadow-lg",
                  children: [
                    e.jsx("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: e.jsx("path", { d: "M20 6L9 17l-5-5" }),
                    }),
                    "Confirm & Create Your Link Ô£¿",
                  ],
                }),
                e.jsx("p", {
                  className: "text-center text-white/40 text-[11px] mt-2",
                  children: "Looks good? Lock it in and get your share link!",
                }),
              ],
            }),
          }),
        !t &&
          (h === "demo-123" || p) &&
          e.jsxs("div", {
            className:
              "fixed top-6 right-6 z-50 animate-fade-in-down flex flex-col items-end gap-3",
            children: [
              e.jsxs(Oe, {
                variant: "secondary",
                onClick: () =>
                  l(
                    c.get("returnUrl") ||
                      `/share/${h}?token=${c.get("token") || ""}`,
                  ),
                className:
                  "flex items-center gap-2 px-6 py-3 text-xs md:text-sm shadow-[0_0_30px_rgba(255,255,255,0.2)] border border-fuchsia-400/30 bg-fuchsia-500/10 backdrop-blur-md text-fuchsia-950 hover:bg-fuchsia-500/20 transition-all rounded-full font-bold",
                children: [
                  e.jsx(Bt, { size: 16 }),
                  c.get("returnUrl") || p ? "Back to Payment" : "Exit Demo",
                ],
              }),
              (c.get("returnUrl") || p) &&
                e.jsxs("div", {
                  className:
                    "bg-fuchsia-500/90 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg border border-fuchsia-400 max-w-xs text-right animate-pulse",
                  children: [
                    "­ƒæü´©Å Preview Mode: How ",
                    (r == null ? void 0 : r.receiverName) || "they",
                    " will see it!",
                  ],
                }),
            ],
          }),
        e.jsx("style", {
          children: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `,
        }),
        e.jsxs("div", {
          className:
            "relative z-10 w-full min-h-screen flex flex-col items-center pt-32 pb-24 md:pb-32",
          children: [
            e.jsxs("div", {
              className: "w-full max-w-lg p-6 flex flex-col items-center",
              children: [
                j === M.LANDING &&
                  e.jsx("div", {
                    className:
                      "text-center w-full min-h-[70vh] md:min-h-0 flex flex-col items-center justify-center",
                    children: Ze
                      ? e.jsxs("div", {
                          className:
                            "text-center mt-auto mb-20 animate-fade-in-up space-y-12",
                          children: [
                            e.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-magical-200 text-xs tracking-[0.4em] uppercase opacity-70 font-black drop-shadow-sm",
                                  children: "The wait is over",
                                }),
                                e.jsx("h1", {
                                  className:
                                    "text-6xl md:text-8xl font-hand text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-white to-yellow-200 drop-shadow-[0_0_35px_rgba(255,215,0,0.5)] animate-pulse-slow leading-none",
                                  children: "It's Your Birthday!",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "relative inline-block group",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 bg-magical-500/20 blur-[100px] rounded-full group-hover:bg-magical-500/40 transition-all duration-1000 animate-pulse-slow",
                                }),
                                e.jsx(U, {
                                  text: "Open Your Magical Gift ­ƒÄü",
                                  onClick: Ue,
                                  className:
                                    "relative z-10 px-12 py-10 text-xl shadow-[0_0_70px_rgba(255,255,255,0.4)] hover:shadow-[0_0_90px_rgba(255,255,255,0.6)] transition-all bg-white text-slate-950 font-black",
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className:
                                "text-white/40 font-serif italic text-sm tracking-wide",
                              children:
                                "Tap to see what someone special has for you",
                            }),
                          ],
                        })
                      : e.jsxs("div", {
                          className:
                            "flex flex-col items-center justify-center h-full animate-fade-in z-30 w-full",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex flex-col items-center justify-center space-y-4 mb-2 animate-fade-in-up",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-magical-200/60 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold drop-shadow-sm blur-[0.2px]",
                                  children: "A special gift for",
                                }),
                                e.jsx("h1", {
                                  className:
                                    "text-6xl md:text-8xl font-hand text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] text-shimmer animate-shimmer leading-none py-2",
                                  children: r.receiverName,
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex items-center gap-3 opacity-40",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "h-[1px] w-8 bg-gradient-to-r from-transparent to-white",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-[10px] md:text-xs font-serif italic text-white/80 tracking-widest",
                                      children: "Sent with love & magic",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "h-[1px] w-8 bg-gradient-to-l from-transparent to-white",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx(it, {
                              poppedBalloons: Le,
                              onPop: bt,
                              balloonsData: Pe,
                            }),
                            e.jsxs("div", {
                              className: "relative mt-4 group",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 bg-gradient-to-r from-pink-500 to-amber-500 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500",
                                }),
                                e.jsxs("div", {
                                  className:
                                    "relative flex items-center justify-center gap-2 px-10 py-3 border-2 border-pink-500/60 bg-black/80 backdrop-blur-md rounded-full text-white text-xs md:text-sm font-bold tracking-[0.25em] uppercase shadow-[0_0_20px_rgba(236,72,153,0.3)] select-none",
                                  children: [
                                    e.jsx("span", {
                                      className: "text-sm",
                                      children: "­ƒÄê",
                                    }),
                                    e.jsx("span", {
                                      children: "Pop all the balloons!",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className:
                                "mt-4 text-[10px] md:text-xs font-medium text-amber-200/50 tracking-[0.2em] uppercase select-none",
                              children:
                                "Ô£ª Tap or click to reveal your surprise Ô£ª",
                            }),
                          ],
                        }),
                  }),
                j === M.INTRO_ANIMATION &&
                  e.jsx("div", {
                    className:
                      "w-full flex flex-col items-center justify-center animate-fade-in z-30 relative",
                    children: e.jsxs("div", {
                      className:
                        "w-full flex flex-col items-center relative overflow-hidden pt-12 md:pt-20",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute w-[250px] h-[250px] rounded-full bg-amber-500/15 blur-[60px] top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0",
                        }),
                        e.jsx("div", {
                          className:
                            "text-2xl text-pink-400 mb-3 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] z-10",
                          children: "­ƒÄü",
                        }),
                        e.jsx("p", {
                          className:
                            "text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-pink-200/50 drop-shadow-sm mb-4 text-center z-10",
                          children: r.senderName
                            ? `${r.senderName} HAS A MESSAGE FOR YOU...`
                            : "A SPECIAL MESSAGE FOR YOU...",
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center justify-center gap-2 w-full opacity-60 mb-6 z-10",
                          children: [
                            e.jsx("div", {
                              className:
                                "h-[1px] w-12 bg-gradient-to-r from-transparent to-pink-500/50",
                            }),
                            e.jsx("span", {
                              className: "text-[8px] text-pink-400",
                              children: "ÔÖÑ",
                            }),
                            e.jsx("div", {
                              className:
                                "h-[1px] w-12 bg-gradient-to-l from-transparent to-pink-500/50",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "min-h-[100px] flex items-center justify-center max-h-[30vh] overflow-y-auto custom-scrollbar pr-2 py-2 z-10 w-full mb-6",
                          children: e.jsxs("h1", {
                            className:
                              "text-xl md:text-3xl font-serif italic text-white text-center leading-snug tracking-wide px-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)] break-all overflow-wrap-anywhere",
                            children: [
                              "ÔÇ£ ",
                              T,
                              " ÔÇØ",
                              e.jsx("span", {
                                className: `animate-pulse text-pink-500 font-sans not-italic ${re ? "hidden" : "inline"}`,
                                children: "|",
                              }),
                            ],
                          }),
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center justify-center gap-2 w-full opacity-60 mb-2 z-10",
                          children: [
                            e.jsx("div", {
                              className:
                                "h-[1px] w-12 bg-gradient-to-r from-transparent to-pink-500/50",
                            }),
                            e.jsx("span", {
                              className: "text-[8px] text-pink-400",
                              children: "ÔÖÑ",
                            }),
                            e.jsx("div", {
                              className:
                                "h-[1px] w-12 bg-gradient-to-l from-transparent to-pink-500/50",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "w-full relative z-10 pointer-events-none",
                          children: e.jsx(it, {
                            poppedBalloons: [],
                            onPop: () => {},
                            balloonsData: Pe,
                          }),
                        }),
                        re &&
                          e.jsx("div", {
                            className: "relative -mt-6 z-30 animate-fade-in-up",
                            children: e.jsxs("button", {
                              onClick: () => g(M.INTERACTIVE_CHECK),
                              className: "relative z-30 group cursor-pointer",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-amber-500 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500",
                                }),
                                e.jsxs("div", {
                                  className:
                                    "relative flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-2 border border-pink-500/50 bg-[#16081d]/90 backdrop-blur-md rounded-full text-white text-xs md:text-sm font-bold tracking-wide md:tracking-widest uppercase shadow-[0_0_20px_rgba(236,72,153,0.4)] select-none transition-all duration-300 group-hover:scale-105 whitespace-nowrap",
                                  children: [
                                    e.jsx("span", {
                                      className: "hidden md:inline",
                                      children: "Read Everything? Continue Ô£¿",
                                    }),
                                    e.jsx("span", {
                                      className: "md:hidden",
                                      children: "Continue Ô£¿",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "bg-black/45 border border-white/20 p-1.5 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45",
                                      children: e.jsx("svg", {
                                        className:
                                          "w-3.5 h-3.5 text-white transform -rotate-45",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: e.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2.5",
                                          d: "M14 5l7 7m0 0l-7 7m7-7H3",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                  }),
                j === M.INTERACTIVE_CHECK &&
                  e.jsxs("div", {
                    className:
                      "absolute inset-0 flex flex-col items-center justify-center z-30 animate-fade-in space-y-16",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-6 text-center",
                        children: [
                          e.jsx("h2", {
                            className:
                              "text-4xl md:text-6xl font-serif italic text-white/90 drop-shadow-2xl animate-pulse-slow",
                            children: "Take a deep breath...",
                          }),
                          e.jsx("p", {
                            className:
                              "text-magical-200/40 text-[10px] tracking-[0.4em] uppercase font-bold",
                            children: "The magic is beginning",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "relative group",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-magical-500/10 blur-[80px] rounded-full group-hover:bg-magical-500/30 transition-all duration-1000 animate-pulse-slow",
                          }),
                          e.jsx(U, {
                            text: "I'm Ready for the Magic Ô£¿",
                            onClick: () => {
                              (le(), g(M.WHEEL));
                            },
                            className:
                              "relative z-10 px-12 py-8 text-lg rounded-full transition-all duration-500 hover:tracking-widest bg-white text-slate-950 font-black shadow-[0_0_60px_rgba(255,255,255,0.4)]",
                          }),
                        ],
                      }),
                    ],
                  }),
                j === M.WHEEL &&
                  e.jsxs("div", {
                    className:
                      "text-center w-full flex flex-col items-center space-y-6 animate-fade-in pt-8 pb-10 relative min-h-[600px] justify-center",
                    children: [
                      e.jsxs("div", {
                        className:
                          "absolute left-[-280px] bottom-10 hidden xl:flex flex-col items-center gap-2 select-none pointer-events-none animate-bounce-slow",
                        children: [
                          e.jsxs("div", {
                            className: "relative w-36 h-48",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute top-4 left-6 w-14 h-18 rounded-full bg-gradient-to-tr from-yellow-800 via-amber-400 to-yellow-100 shadow-[0_4px_15px_rgba(245,158,11,0.4),inset_0_2px_4px_rgba(255,255,255,0.6)] transform -rotate-12",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute top-12 left-16 w-14 h-18 rounded-full bg-gradient-to-tr from-purple-950 via-purple-600 to-purple-200 shadow-[0_4px_15px_rgba(147,51,234,0.4),inset_0_2px_4px_rgba(255,255,255,0.6)] transform rotate-12",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute top-16 left-2 w-14 h-18 rounded-full bg-gradient-to-tr from-pink-900 via-pink-500 to-pink-200 shadow-[0_4px_15px_rgba(236,72,153,0.4),inset_0_2px_4px_rgba(255,255,255,0.6)] transform -rotate-6",
                              }),
                              e.jsx("svg", {
                                className: "absolute top-28 left-0 w-36 h-20",
                                viewBox: "0 0 144 80",
                                children: e.jsx("path", {
                                  d: "M40 30 Q 72 60 72 80 M92 38 Q 72 60 72 80 M32 44 Q 72 60 72 80",
                                  fill: "none",
                                  stroke: "rgba(255,255,255,0.2)",
                                  strokeWidth: "1",
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("svg", {
                            className: "w-20 h-20 drop-shadow-2xl",
                            viewBox: "0 0 80 80",
                            children: [
                              e.jsx("rect", {
                                x: "15",
                                y: "30",
                                width: "50",
                                height: "40",
                                rx: "3",
                                fill: "#311b92",
                                stroke: "#d97706",
                                strokeWidth: "1.5",
                              }),
                              e.jsx("rect", {
                                x: "12",
                                y: "22",
                                width: "56",
                                height: "10",
                                rx: "2",
                                fill: "#4527a0",
                                stroke: "#d97706",
                                strokeWidth: "1.5",
                              }),
                              e.jsx("rect", {
                                x: "36",
                                y: "22",
                                width: "8",
                                height: "48",
                                fill: "#f59e0b",
                              }),
                              e.jsx("path", {
                                d: "M30 22 C 30 14 36 14 36 22 C 36 14 42 14 42 22",
                                fill: "none",
                                stroke: "#f59e0b",
                                strokeWidth: "3",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "absolute right-[-280px] bottom-10 hidden xl:flex flex-col items-center gap-2 select-none pointer-events-none animate-bounce-slow",
                        style: { animationDelay: "1s" },
                        children: [
                          e.jsxs("div", {
                            className: "relative w-36 h-48",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute top-4 right-16 w-14 h-18 rounded-full bg-gradient-to-tr from-purple-950 via-purple-600 to-purple-200 shadow-[0_4px_15px_rgba(147,51,234,0.4),inset_0_2px_4px_rgba(255,255,255,0.6)] transform -rotate-12",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute top-12 right-6 w-14 h-18 rounded-full bg-gradient-to-tr from-yellow-800 via-amber-400 to-yellow-100 shadow-[0_4px_15px_rgba(245,158,11,0.4),inset_0_2px_4px_rgba(255,255,255,0.6)] transform rotate-12",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute top-16 right-16 w-14 h-18 rounded-full bg-gradient-to-tr from-pink-900 via-pink-500 to-pink-200 shadow-[0_4px_15px_rgba(236,72,153,0.4),inset_0_2px_4px_rgba(255,255,255,0.6)] transform -rotate-6",
                              }),
                              e.jsx("svg", {
                                className: "absolute top-28 left-0 w-36 h-20",
                                viewBox: "0 0 144 80",
                                children: e.jsx("path", {
                                  d: "M40 38 Q 72 60 72 80 M92 30 Q 72 60 72 80 M32 44 Q 72 60 72 80",
                                  fill: "none",
                                  stroke: "rgba(255,255,255,0.2)",
                                  strokeWidth: "1",
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("svg", {
                            className: "w-20 h-20 drop-shadow-2xl",
                            viewBox: "0 0 80 80",
                            children: [
                              e.jsx("rect", {
                                x: "15",
                                y: "30",
                                width: "50",
                                height: "40",
                                rx: "3",
                                fill: "#311b92",
                                stroke: "#d97706",
                                strokeWidth: "1.5",
                              }),
                              e.jsx("rect", {
                                x: "12",
                                y: "22",
                                width: "56",
                                height: "10",
                                rx: "2",
                                fill: "#4527a0",
                                stroke: "#d97706",
                                strokeWidth: "1.5",
                              }),
                              e.jsx("rect", {
                                x: "36",
                                y: "22",
                                width: "8",
                                height: "48",
                                fill: "#f59e0b",
                              }),
                              e.jsx("path", {
                                d: "M30 22 C 30 14 36 14 36 22 C 36 14 42 14 42 22",
                                fill: "none",
                                stroke: "#f59e0b",
                                strokeWidth: "3",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2 z-10",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-center gap-3",
                            children: [
                              e.jsx("div", {
                                className:
                                  "h-[1px] w-8 bg-gradient-to-r from-transparent to-amber-500/50",
                              }),
                              e.jsx("span", {
                                className:
                                  "text-yellow-500 text-[8px] md:text-[10px]",
                                children: "Ôÿà",
                              }),
                              e.jsx("p", {
                                className:
                                  "text-amber-200/80 text-[10px] tracking-[0.34em] uppercase font-bold drop-shadow-md",
                                children: "The Wait Is Over",
                              }),
                              e.jsx("span", {
                                className:
                                  "text-yellow-500 text-[8px] md:text-[10px]",
                                children: "Ôÿà",
                              }),
                              e.jsx("div", {
                                className:
                                  "h-[1px] w-8 bg-gradient-to-l from-transparent to-amber-500/50",
                              }),
                            ],
                          }),
                          e.jsx("h2", {
                            className:
                              "text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-amber-300 to-yellow-600 drop-shadow-[0_2px_15px_rgba(253,224,71,0.2)] italic leading-tight py-1 font-light",
                            children: "Spin for a Surprise",
                          }),
                          e.jsx("p", {
                            className:
                              "text-pink-300/80 text-[9px] tracking-[0.25em] uppercase font-medium flex items-center justify-center gap-1.5 drop-shadow-sm",
                            children: "ÔÖÑ The Stars Are Aligning For You ÔÖÑ",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "relative group/wheel py-4 z-10",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute -inset-6 bg-gradient-to-r from-yellow-400/10 via-magical-500/15 to-yellow-400/10 rounded-full blur-[80px] opacity-60 group-hover/wheel:opacity-100 transition-opacity duration-1000 animate-pulse-slow pointer-events-none",
                          }),
                          e.jsxs("div", {
                            className:
                              "relative w-80 h-80 md:w-[27rem] md:h-[27rem] mx-auto rounded-full border-[8px] border-amber-600 bg-[#120617] shadow-[0_0_40px_rgba(0,0,0,0.8),0_0_30px_rgba(245,158,11,0.25)] flex items-center justify-center p-1",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute inset-0 rounded-full border-[2px] border-yellow-400 pointer-events-none z-10",
                              }),
                              Array.from({ length: 24 }).map((x, d) => {
                                const S = (((d * 360) / 24) * Math.PI) / 180,
                                  A = 48.5,
                                  z = 50 + A * Math.cos(S),
                                  V = 50 + A * Math.sin(S);
                                return e.jsx(
                                  "div",
                                  {
                                    className:
                                      "absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-300 shadow-[0_0_8px_rgba(253,224,71,0.9),0_0_2px_rgba(255,255,255,1)] border border-yellow-100 z-30",
                                    style: {
                                      left: `${z}%`,
                                      top: `${V}%`,
                                      transform: "translate(-50%, -50%)",
                                    },
                                  },
                                  d,
                                );
                              }),
                              e.jsx("div", {
                                className:
                                  "w-[96%] h-[96%] rounded-full overflow-hidden relative",
                                style: {
                                  transform: `rotate(${I}deg)`,
                                  transitionProperty: "transform",
                                  transitionDuration: "4500ms",
                                  transitionTimingFunction:
                                    "cubic-bezier(0.1, 0.8, 0.1, 0.99)",
                                },
                                children: e.jsxs("svg", {
                                  viewBox: "0 0 400 400",
                                  className:
                                    "w-full h-full select-none pointer-events-none",
                                  children: [
                                    e.jsxs("defs", {
                                      children: [
                                        e.jsxs("linearGradient", {
                                          id: "goldGradCap",
                                          x1: "0%",
                                          y1: "0%",
                                          x2: "100%",
                                          y2: "100%",
                                          children: [
                                            e.jsx("stop", {
                                              offset: "0%",
                                              stopColor: "#fef08a",
                                            }),
                                            e.jsx("stop", {
                                              offset: "50%",
                                              stopColor: "#d97706",
                                            }),
                                            e.jsx("stop", {
                                              offset: "100%",
                                              stopColor: "#78350f",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("filter", {
                                          id: "glowCap",
                                          x: "-20%",
                                          y: "-20%",
                                          width: "140%",
                                          height: "140%",
                                          children: [
                                            e.jsx("feGaussianBlur", {
                                              stdDeviation: "5",
                                              result: "blur",
                                            }),
                                            e.jsx("feComposite", {
                                              in: "SourceGraphic",
                                              in2: "blur",
                                              operator: "over",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Se.map((x, d) => {
                                      const y = Ms(x),
                                        S = d * ue,
                                        A = (d + 1) * ue,
                                        z = S + ue / 2,
                                        V = d % 2 === 0 ? "#481b70" : "#1a092b",
                                        Je = z % 360,
                                        St = Je > 90 && Je < 270,
                                        At = y.length > 15 ? "9" : "11.5";
                                      return e.jsxs(
                                        "g",
                                        {
                                          children: [
                                            e.jsx("path", {
                                              d: Ss(200, 200, 200, S, A),
                                              fill: V,
                                              stroke: "#ffd700",
                                              strokeWidth: "2",
                                              strokeOpacity: "0.8",
                                            }),
                                            e.jsx("g", {
                                              transform: `rotate(${z} 200 200)`,
                                              children: e.jsx("text", {
                                                x: "310",
                                                y: "204",
                                                fill: "#fde047",
                                                fontSize: At,
                                                fontWeight: "800",
                                                textAnchor: "middle",
                                                className:
                                                  "tracking-wide uppercase font-sans drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]",
                                                transform: St
                                                  ? "rotate(180 310 204)"
                                                  : "",
                                                children: y,
                                              }),
                                            }),
                                          ],
                                        },
                                        d,
                                      );
                                    }),
                                    e.jsxs("g", {
                                      children: [
                                        e.jsx("circle", {
                                          cx: "200",
                                          cy: "200",
                                          r: "48",
                                          fill: "url(#goldGradCap)",
                                          filter: "url(#glowCap)",
                                        }),
                                        e.jsx("circle", {
                                          cx: "200",
                                          cy: "200",
                                          r: "38",
                                          fill: "#120617",
                                          stroke: "#ffd700",
                                          strokeWidth: "2",
                                        }),
                                        e.jsx("g", {
                                          transform:
                                            "translate(184, 184) scale(1.3)",
                                          children: e.jsx("path", {
                                            d: "M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.65-.5-.65C10.96 2.54 10.05 2 9 2c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h16v6z",
                                            fill: "#ffd700",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute -top-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]",
                                children: e.jsxs("svg", {
                                  width: "20",
                                  height: "28",
                                  viewBox: "0 0 24 32",
                                  className:
                                    "text-yellow-400 drop-shadow-[0_0_8px_rgba(253,224,71,0.6)]",
                                  children: [
                                    e.jsx("path", {
                                      d: "M12 32L0 12h8V0h8v12h8z",
                                      fill: "url(#goldGradNeedle)",
                                      stroke: "#d97706",
                                      strokeWidth: "1",
                                    }),
                                    e.jsx("defs", {
                                      children: e.jsxs("linearGradient", {
                                        id: "goldGradNeedle",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "0%",
                                        y2: "100%",
                                        children: [
                                          e.jsx("stop", {
                                            offset: "0%",
                                            stopColor: "#fef08a",
                                          }),
                                          e.jsx("stop", {
                                            offset: "50%",
                                            stopColor: "#f59e0b",
                                          }),
                                          e.jsx("stop", {
                                            offset: "100%",
                                            stopColor: "#b45309",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Y
                        ? e.jsxs("div", {
                            className:
                              "space-y-4 animate-fade-in-up w-full max-w-sm px-4 pb-10 z-10",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "bg-white/5 backdrop-blur-3xl p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl border border-white/10 transform scale-105 transition-all relative overflow-hidden",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-magical-500/5 pointer-events-none",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[9px] text-magical-200 uppercase tracking-[0.3em] font-black mb-2 opacity-60",
                                    children: "The stars have chosen",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-2xl md:text-4xl font-hand text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]",
                                    children: Y,
                                  }),
                                ],
                              }),
                              e.jsx(U, {
                                text: "Claim Your Magical Surprise ­ƒÄü",
                                onClick: jt,
                                className:
                                  "w-full relative z-40 bg-white text-slate-950 font-black shadow-[0_0_50px_rgba(255,215,0,0.5)] py-6",
                              }),
                              e.jsxs("p", {
                                className:
                                  "text-[10px] text-white/40 italic mt-4 px-6 leading-relaxed text-center animate-fade-in delay-500",
                                children: [
                                  '"Before you thank me personally, tell me what you got in the spin first!" ',
                                  e.jsx("br", {}),
                                  " ÔÇö ",
                                  r == null ? void 0 : r.senderName,
                                ],
                              }),
                            ],
                          })
                        : e.jsxs("div", {
                            className: "relative group z-10",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute inset-0 bg-amber-500/10 blur-3xl rounded-full group-hover:bg-amber-500/30 transition-all duration-700 pointer-events-none",
                              }),
                              e.jsx(U, {
                                text: q
                                  ? "Spelling Magic..."
                                  : "Spin for a Gift Ô£¿",
                                onClick: yt,
                                disabled: q,
                                className:
                                  "relative z-40 px-10 py-6 md:px-12 md:py-8 bg-white text-slate-950 font-black shadow-[0_0_60px_rgba(255,255,255,0.4)]",
                              }),
                            ],
                          }),
                      e.jsxs("div", {
                        className: "pt-2 z-10 flex flex-col items-center gap-2",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-amber-200/70 font-serif italic text-xs md:text-sm tracking-wide",
                            children: "Give it a spin and let magic decide",
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-4 opacity-50",
                            children: [
                              e.jsx("div", {
                                className:
                                  "h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-500/60",
                              }),
                              e.jsx("svg", {
                                width: "12",
                                height: "12",
                                viewBox: "0 0 24 24",
                                className: "text-purple-400 fill-current",
                                children: e.jsx("path", {
                                  d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                                }),
                              }),
                              e.jsx("div", {
                                className:
                                  "h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-500/60",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                j === M.CANDLES &&
                  e.jsx("div", {
                    className:
                      "text-center w-full min-h-[480px] flex flex-col items-center justify-center",
                    children: ve
                      ? e.jsxs("div", {
                          className: "w-full animate-fade-in",
                          children: [
                            e.jsx("div", {
                              className:
                                "h-[300px] md:h-[400px] w-full relative mb-6",
                              children: e.jsx(st, {
                                flavor: r.cakeFlavor,
                                style: r.cakeStyle,
                                candles: r.candleCount,
                                candlesLit: X !== "extinguished",
                                candleState: X,
                                isCut: !1,
                                onCut: () => {},
                                receiverName: r.receiverName,
                                showKnife: !1,
                              }),
                            }),
                            e.jsxs("div", {
                              className: "space-y-8 relative z-20 mt-8 pb-12",
                              children: [
                                e.jsxs("div", {
                                  className: "space-y-3",
                                  children: [
                                    e.jsx("h2", {
                                      className:
                                        "text-4xl md:text-5xl font-serif italic text-white drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]",
                                      children: "Make a Beautiful Wish",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-magical-200/60 text-xs md:text-sm max-w-xs mx-auto leading-relaxed px-4",
                                      children:
                                        "Close your eyes, hold that wish in your heart, and blow out the candles by keep near to your mic to release the magic.",
                                    }),
                                  ],
                                }),
                                X === "lit" &&
                                  e.jsxs("div", {
                                    className:
                                      "flex flex-col items-center space-y-8 animate-fade-in-up",
                                    children: [
                                      je
                                        ? e.jsxs("div", {
                                            className:
                                              "flex flex-col items-center space-y-3 animate-pulse",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "w-14 h-14 rounded-full border-2 border-magical-400/30 flex items-center justify-center relative",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "absolute inset-0 rounded-full bg-magical-500/20 animate-ping",
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "w-3 h-3 rounded-full bg-magical-400 shadow-[0_0_15px_rgba(139,38,242,0.8)]",
                                                  }),
                                                ],
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "text-magical-200 text-[10px] uppercase tracking-[0.4em] font-black blur-[0.1px]",
                                                children:
                                                  "Listening for your magic...",
                                              }),
                                            ],
                                          })
                                        : e.jsxs("div", {
                                            className: "relative group",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "absolute inset-0 bg-magical-500/10 blur-[60px] rounded-full group-hover:bg-magical-500/30 transition-all duration-1000 animate-pulse-slow pointer-events-none",
                                              }),
                                              e.jsx(U, {
                                                text: "Activate Magic Voice ­ƒÄÖ´©Å",
                                                onClick: Nt,
                                                className:
                                                  "relative z-10 px-10 py-6 bg-slate-900/40 border-white/10 shadow-[0_0_30px_rgba(139,38,242,0.2)]",
                                              }),
                                            ],
                                          }),
                                      e.jsxs("button", {
                                        onClick: kt,
                                        className:
                                          "text-white/30 text-[10px] md:text-xs uppercase tracking-[0.3em] font-black hover:text-white hover:tracking-[0.4em] transition-all duration-700 group flex flex-col items-center gap-2",
                                        children: [
                                          e.jsx("span", {
                                            children:
                                              "Alternatively, tap to blow Ô£¿",
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "w-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:w-16 transition-all",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        })
                      : e.jsxs("div", {
                          className:
                            "flex flex-col items-center justify-center py-12 animate-fade-in",
                          children: [
                            e.jsx(Kt, {}),
                            e.jsx("p", {
                              className:
                                "text-magical-200/80 text-xs sm:text-sm tracking-[0.25em] uppercase font-bold mt-6 animate-pulse select-none",
                              children: "Preparing your magic cake... Ô£¿",
                            }),
                          ],
                        }),
                  }),
                j === M.CAKE_CUTTING &&
                  e.jsxs("div", {
                    className:
                      "text-center w-full flex flex-col items-center space-y-8 animate-fade-in group",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-magical-200 text-[10px] tracking-[0.4em] uppercase font-black drop-shadow-sm opacity-70",
                            children: "The magic has spoken",
                          }),
                          e.jsx("h2", {
                            className:
                              "text-4xl md:text-6xl font-serif italic text-white drop-shadow-2xl leading-tight",
                            children:
                              G === "cut"
                                ? "A Beautiful Wish for You... Ô£¿"
                                : G === "cutting"
                                  ? "Making the First Slice..."
                                  : "Cut the Cake",
                          }),
                          G === "cut" &&
                            e.jsxs("div", {
                              className:
                                "space-y-4 animate-fade-in-up delay-300",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center justify-center gap-3 opacity-80",
                                  children: [
                                    e.jsx("div", {
                                      className: "h-[1px] w-4 bg-white/20",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-[10px] uppercase tracking-[0.4em] font-black text-magical-200",
                                      children: "The stars have spoken",
                                    }),
                                    e.jsx("div", {
                                      className: "h-[1px] w-4 bg-white/20",
                                    }),
                                  ],
                                }),
                                e.jsxs("p", {
                                  className:
                                    "text-lg md:text-xl font-serif italic text-white/80",
                                  children: [
                                    "You've won ",
                                    e.jsx("span", {
                                      className:
                                        "text-white font-hand text-3xl md:text-4xl px-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]",
                                      children: Y,
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className: "pt-4",
                                  children: e.jsxs("p", {
                                    className:
                                      "font-hand text-2xl md:text-3xl text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]",
                                    children: [
                                      "May all your dreams come true, ",
                                      r.receiverName,
                                      ".",
                                    ],
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "h-[300px] md:h-[450px] w-full relative mb-4",
                        children: e.jsx(st, {
                          flavor: r.cakeFlavor,
                          style: r.cakeStyle,
                          candles: r.candleCount,
                          candlesLit: !1,
                          candleState: "extinguished",
                          isCut: G === "cut",
                          cutState: G,
                          onCut: Xe,
                          receiverName: r.receiverName,
                        }),
                      }),
                      G === "idle" &&
                        e.jsxs("button", {
                          type: "button",
                          onClick: Xe,
                          className:
                            "w-full max-w-sm md:hidden rounded-2xl border border-fuchsia-300/30 bg-gradient-to-r from-fuchsia-500/20 via-pink-500/15 to-amber-400/15 px-5 py-4 text-center shadow-[0_12px_35px_rgba(217,70,239,0.18)] transition-transform duration-200 active:scale-[0.98] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                          children: [
                            e.jsx("span", {
                              className:
                                "block text-sm font-black uppercase tracking-[0.22em] text-white",
                              children: "Make the first slice",
                            }),
                            e.jsx("span", {
                              className:
                                "mt-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-fuchsia-200/80",
                              children: "Tap here or tap the knife",
                            }),
                          ],
                        }),
                      G === "cutting" &&
                        e.jsx("p", {
                          "aria-live": "polite",
                          className:
                            "text-xs font-semibold tracking-wide text-fuchsia-200 animate-pulse",
                          children: "The knife is cutting through the cakeÔÇª",
                        }),
                      C &&
                        e.jsxs("div", {
                          className:
                            "mt-4 w-full max-w-sm px-6 animate-fade-in-up",
                          children: [
                            e.jsxs("div", {
                              className: "relative group/gift",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 bg-magical-500/20 blur-[80px] rounded-full group-hover/gift:bg-magical-500/40 transition-all duration-1000 animate-pulse-slow pointer-events-none",
                                }),
                                e.jsx(U, {
                                  text: "Reveal Your Heartfelt Gift ­ƒÄü",
                                  onClick: _t,
                                  className:
                                    "relative z-10 w-full py-8 text-xl shadow-[0_0_50px_rgba(255,255,255,0.2)] bg-slate-900/40 border-white/20",
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className:
                                "mt-4 text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold animate-pulse",
                              children: "Touch the gift to see your surprise",
                            }),
                          ],
                        }),
                    ],
                  }),
                j === M.WALK_TO_DOOR &&
                  r &&
                  e.jsxs("div", {
                    className:
                      "w-full min-h-[75vh] flex flex-col items-center justify-between py-8 relative overflow-hidden",
                    children: [
                      e.jsx("style", {
                        dangerouslySetInnerHTML: {
                          __html: `
                @keyframes swing-leg-l {
                  0%, 100% { transform: rotate(-22deg); }
                  50% { transform: rotate(22deg); }
                }
                @keyframes swing-leg-r {
                  0%, 100% { transform: rotate(22deg); }
                  50% { transform: rotate(-22deg); }
                }
                @keyframes swing-arm-l {
                  0%, 100% { transform: rotate(-15deg); }
                  50% { transform: rotate(15deg); }
                }
                @keyframes swing-arm-r {
                  0%, 100% { transform: rotate(15deg); }
                  50% { transform: rotate(-15deg); }
                }
                @keyframes float-bubble {
                  0%, 100% { transform: translateY(0px) scale(1); }
                  50% { transform: translateY(-6px) scale(1.02); }
                }
                @keyframes door-light-burst {
                  0% { opacity: 0.3; filter: drop-shadow(0 0 10px rgba(251,191,36,0.5)); }
                  100% { opacity: 0.9; filter: drop-shadow(0 0 60px rgba(251,191,36,0.95)); }
                }
                @keyframes sparkle-drift {
                  0% { transform: translateY(0) scale(0.5); opacity: 0; }
                  50% { opacity: 1; }
                  100% { transform: translateY(-40px) scale(1.2); opacity: 0; }
                }
                .swing-left-leg {
                  animation: swing-leg-l 0.45s infinite ease-in-out;
                }
                .swing-right-leg {
                  animation: swing-leg-r 0.45s infinite ease-in-out;
                }
                .swing-left-arm {
                  animation: swing-arm-l 0.45s infinite ease-in-out;
                }
                .swing-right-arm {
                  animation: swing-arm-r 0.45s infinite ease-in-out;
                }
                .bubble-floating {
                  animation: float-bubble 4s infinite ease-in-out;
                }
                .door-light-beam {
                  background: radial-gradient(ellipse at left, rgba(253,224,71,0.5) 0%, rgba(251,191,36,0.2) 40%, rgba(251,191,36,0.05) 70%, transparent 100%);
                  mix-blend-mode: screen;
                  transform-origin: left center;
                }
                .sparkle-particle {
                  animation: sparkle-drift 1.2s infinite ease-out;
                }
              `,
                        },
                      }),
                      e.jsxs("div", {
                        className:
                          "text-center space-y-2 z-10 animate-fade-in px-4",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-magical-200 text-[10px] tracking-[0.5em] uppercase font-black opacity-60",
                            children: "The Journey Continues",
                          }),
                          e.jsxs("h1", {
                            className:
                              "text-3xl md:text-5xl font-serif text-white italic drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]",
                            children: ["Come with me, ", r.receiverName, "!"],
                          }),
                          e.jsx("p", {
                            className:
                              "text-slate-400 font-serif italic text-xs md:text-sm max-w-md mx-auto opacity-70",
                            children:
                              "Tap the button below to walk with them to your final surprise",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "w-full max-w-5xl h-[380px] bg-slate-950/60 border border-white/10 rounded-[40px] relative overflow-hidden my-6 shadow-2xl flex flex-col justify-end p-0",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent)] pointer-events-none",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute top-12 left-1/4 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping pointer-events-none",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute top-20 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse pointer-events-none",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute top-16 right-10 w-2 h-2 bg-white/20 rounded-full animate-pulse pointer-events-none",
                          }),
                          e.jsxs("div", {
                            className:
                              "w-full h-32 relative overflow-hidden bg-[#24130a] shadow-[inset_0_10px_20px_rgba(0,0,0,0.9)] border-t border-amber-800/30 flex items-end",
                            children: [
                              e.jsx("div", {
                                className: "absolute inset-0 opacity-40",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(90deg, #422614 2px, transparent 2px), linear-gradient(0deg, #180d07 3px, transparent 3px)",
                                  backgroundSize: "100px 100%, 100% 16px",
                                  transform:
                                    "perspective(200px) rotateX(55deg)",
                                  transformOrigin: "bottom center",
                                  width: "180%",
                                  left: "-40%",
                                },
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-yellow-600/30 via-yellow-400/50 to-yellow-600/30 border-b border-yellow-300/20",
                              }),
                            ],
                          }),
                          (b === "walking_to_sender" ||
                            b === "walking_together") &&
                            e.jsxs(e.Fragment, {
                              children: [
                                e.jsx("span", {
                                  className:
                                    "absolute sparkle-particle text-amber-300 text-xs",
                                  style: {
                                    left: `${ke - 2}%`,
                                    bottom: "70px",
                                    animationDelay: "0.1s",
                                  },
                                  children: "Ô£¿",
                                }),
                                e.jsx("span", {
                                  className:
                                    "absolute sparkle-particle text-yellow-200 text-sm",
                                  style: {
                                    left: `${ke + 1}%`,
                                    bottom: "65px",
                                    animationDelay: "0.4s",
                                  },
                                  children: "Ô¡É",
                                }),
                                e.jsx("span", {
                                  className:
                                    "absolute sparkle-particle text-fuchsia-300 text-xs",
                                  style: {
                                    left: `${ke - 1}%`,
                                    bottom: "80px",
                                    animationDelay: "0.7s",
                                  },
                                  children: "Ô£¿",
                                }),
                              ],
                            }),
                          e.jsxs("div", {
                            className:
                              "absolute bottom-16 flex flex-col items-center z-10",
                            style: {
                              left: `${lt}%`,
                              opacity: ht,
                              transition:
                                b === "walking_together"
                                  ? "none"
                                  : "left 0.5s ease-out",
                            },
                            children: [
                              e.jsxs("div", {
                                className:
                                  "bubble-floating bg-white text-slate-950 px-4 py-2.5 rounded-2xl shadow-xl text-xs font-bold mb-5 relative max-w-[190px] text-center border border-fuchsia-400 drop-shadow-[0_4px_12px_rgba(232,121,249,0.3)]",
                                children: [
                                  "Come with me, ",
                                  r.receiverName,
                                  "! ­ƒÜÇ",
                                  e.jsx("div", {
                                    className:
                                      "absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-fuchsia-400 rotate-45",
                                  }),
                                ],
                              }),
                              e.jsxs("svg", {
                                width: "48",
                                height: "96",
                                viewBox: "0 0 48 96",
                                className:
                                  "text-pink-300 drop-shadow-[0_0_12px_rgba(244,114,182,0.4)]",
                                children: [
                                  e.jsx("path", {
                                    d: "M19,10 C18,6 30,6 29,10 C31,9 30,12 28,13 C26,14 22,14 20,13",
                                    fill: "currentColor",
                                  }),
                                  e.jsx("circle", {
                                    cx: "24",
                                    cy: "16",
                                    r: "6",
                                    fill: "currentColor",
                                  }),
                                  e.jsx("rect", {
                                    x: "23",
                                    y: "21",
                                    width: "2",
                                    height: "3",
                                    fill: "currentColor",
                                  }),
                                  e.jsx("path", {
                                    d: "M16,24 L32,24 C33,24 34,26 33,28 L30,48 C30,50 28,51 27,51 L21,51 C20,51 18,50 18,48 L15,28 C14,26 15,24 16,24 Z",
                                    fill: "currentColor",
                                  }),
                                  e.jsx("line", {
                                    x1: "16",
                                    y1: "26",
                                    x2: "10",
                                    y2: "44",
                                    stroke: "currentColor",
                                    strokeWidth: "3",
                                    strokeLinecap: "round",
                                    className:
                                      b === "walking_together"
                                        ? "swing-left-arm"
                                        : "",
                                    style: { transformOrigin: "16px 26px" },
                                  }),
                                  e.jsx("line", {
                                    x1: "32",
                                    y1: "26",
                                    x2: "38",
                                    y2: "44",
                                    stroke: "currentColor",
                                    strokeWidth: "3",
                                    strokeLinecap: "round",
                                    className:
                                      b === "walking_together"
                                        ? "swing-right-arm"
                                        : "",
                                    style: { transformOrigin: "32px 26px" },
                                  }),
                                  e.jsx("line", {
                                    x1: "20",
                                    y1: "51",
                                    x2: "16",
                                    y2: "82",
                                    stroke: "currentColor",
                                    strokeWidth: "3.5",
                                    strokeLinecap: "round",
                                    className:
                                      b === "walking_together"
                                        ? "swing-left-leg"
                                        : "",
                                    style: { transformOrigin: "20px 51px" },
                                  }),
                                  e.jsx("line", {
                                    x1: "28",
                                    y1: "51",
                                    x2: "32",
                                    y2: "82",
                                    stroke: "currentColor",
                                    strokeWidth: "3.5",
                                    strokeLinecap: "round",
                                    className:
                                      b === "walking_together"
                                        ? "swing-right-leg"
                                        : "",
                                    style: { transformOrigin: "28px 51px" },
                                  }),
                                ],
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] text-pink-300 font-bold uppercase tracking-wider mt-1",
                                children: r.senderName,
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "absolute bottom-16 flex flex-col items-center z-10",
                            style: {
                              left: `${ke}%`,
                              opacity: dt,
                              transition:
                                b === "walking_to_sender" ||
                                b === "walking_together"
                                  ? "none"
                                  : "left 0.5s ease-out",
                            },
                            children: [
                              e.jsx("svg", {
                                width: "48",
                                height: "96",
                                viewBox: "0 0 48 96",
                                className:
                                  "text-purple-300 drop-shadow-[0_0_12px_rgba(167,139,250,0.4)]",
                                children:
                                  r.recipientGender === "female"
                                    ? e.jsxs(e.Fragment, {
                                        children: [
                                          e.jsx("path", {
                                            d: "M23,10 C21,6 30,5 29,10 C32,9 31,13 28,14 C27,15 28,19 25,20 C23,21 21,17 21,14",
                                            fill: "currentColor",
                                          }),
                                          e.jsx("circle", {
                                            cx: "24",
                                            cy: "16",
                                            r: "6",
                                            fill: "currentColor",
                                          }),
                                          e.jsx("rect", {
                                            x: "23",
                                            y: "21",
                                            width: "2",
                                            height: "3",
                                            fill: "currentColor",
                                          }),
                                          e.jsx("path", {
                                            d: "M18,24 L30,24 C32,24 33,26 32,28 L36,54 C36,56 34,57 32,57 L16,57 C14,57 12,56 12,54 L16,28 C15,26 16,24 18,24 Z",
                                            fill: "currentColor",
                                          }),
                                          e.jsx("line", {
                                            x1: "17",
                                            y1: "26",
                                            x2: "11",
                                            y2: "44",
                                            stroke: "currentColor",
                                            strokeWidth: "3",
                                            strokeLinecap: "round",
                                            className:
                                              b === "walking_to_sender" ||
                                              b === "walking_together"
                                                ? "swing-left-arm"
                                                : "",
                                            style: {
                                              transformOrigin: "17px 26px",
                                            },
                                          }),
                                          e.jsx("line", {
                                            x1: "31",
                                            y1: "26",
                                            x2: "37",
                                            y2: "44",
                                            stroke: "currentColor",
                                            strokeWidth: "3",
                                            strokeLinecap: "round",
                                            className:
                                              b === "walking_to_sender" ||
                                              b === "walking_together"
                                                ? "swing-right-arm"
                                                : "",
                                            style: {
                                              transformOrigin: "31px 26px",
                                            },
                                          }),
                                          e.jsx("line", {
                                            x1: "20",
                                            y1: "57",
                                            x2: "16",
                                            y2: "82",
                                            stroke: "currentColor",
                                            strokeWidth: "3.5",
                                            strokeLinecap: "round",
                                            className:
                                              b === "walking_to_sender" ||
                                              b === "walking_together"
                                                ? "swing-left-leg"
                                                : "",
                                            style: {
                                              transformOrigin: "20px 57px",
                                            },
                                          }),
                                          e.jsx("line", {
                                            x1: "28",
                                            y1: "57",
                                            x2: "32",
                                            y2: "82",
                                            stroke: "currentColor",
                                            strokeWidth: "3.5",
                                            strokeLinecap: "round",
                                            className:
                                              b === "walking_to_sender" ||
                                              b === "walking_together"
                                                ? "swing-right-leg"
                                                : "",
                                            style: {
                                              transformOrigin: "28px 57px",
                                            },
                                          }),
                                        ],
                                      })
                                    : e.jsxs(e.Fragment, {
                                        children: [
                                          e.jsx("path", {
                                            d: "M19,10 C20,7 28,6 29,10 C31,9 29,13 27,13 C25,13 22,14 20,13",
                                            fill: "currentColor",
                                          }),
                                          e.jsx("circle", {
                                            cx: "24",
                                            cy: "16",
                                            r: "6",
                                            fill: "currentColor",
                                          }),
                                          e.jsx("rect", {
                                            x: "23",
                                            y: "21",
                                            width: "2",
                                            height: "3",
                                            fill: "currentColor",
                                          }),
                                          e.jsx("path", {
                                            d: "M16,24 L32,24 C33,24 34,26 33,28 L30,48 C30,50 28,51 27,51 L21,51 C20,51 18,50 18,48 L15,28 C14,26 15,24 16,24 Z",
                                            fill: "currentColor",
                                          }),
                                          e.jsx("line", {
                                            x1: "16",
                                            y1: "26",
                                            x2: "11",
                                            y2: "44",
                                            stroke: "currentColor",
                                            strokeWidth: "3",
                                            strokeLinecap: "round",
                                            className:
                                              b === "walking_to_sender" ||
                                              b === "walking_together"
                                                ? "swing-left-arm"
                                                : "",
                                            style: {
                                              transformOrigin: "16px 26px",
                                            },
                                          }),
                                          e.jsx("line", {
                                            x1: "32",
                                            y1: "26",
                                            x2: "37",
                                            y2: "44",
                                            stroke: "currentColor",
                                            strokeWidth: "3",
                                            strokeLinecap: "round",
                                            className:
                                              b === "walking_to_sender" ||
                                              b === "walking_together"
                                                ? "swing-right-arm"
                                                : "",
                                            style: {
                                              transformOrigin: "32px 26px",
                                            },
                                          }),
                                          e.jsx("line", {
                                            x1: "20",
                                            y1: "51",
                                            x2: "16",
                                            y2: "82",
                                            stroke: "currentColor",
                                            strokeWidth: "3.5",
                                            strokeLinecap: "round",
                                            className:
                                              b === "walking_to_sender" ||
                                              b === "walking_together"
                                                ? "swing-left-leg"
                                                : "",
                                            style: {
                                              transformOrigin: "20px 51px",
                                            },
                                          }),
                                          e.jsx("line", {
                                            x1: "28",
                                            y1: "51",
                                            x2: "32",
                                            y2: "82",
                                            stroke: "currentColor",
                                            strokeWidth: "3.5",
                                            strokeLinecap: "round",
                                            className:
                                              b === "walking_to_sender" ||
                                              b === "walking_together"
                                                ? "swing-right-leg"
                                                : "",
                                            style: {
                                              transformOrigin: "28px 51px",
                                            },
                                          }),
                                        ],
                                      }),
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] text-purple-300 font-bold uppercase tracking-wider mt-1",
                                children: r.receiverName,
                              }),
                            ],
                          }),
                          me &&
                            e.jsx("div", {
                              className:
                                "absolute door-light-beam w-[450px] h-[150px] pointer-events-none z-[8]",
                              style: { right: "3%", bottom: "40px" },
                            }),
                          e.jsxs("div", {
                            className:
                              "absolute right-[3%] bottom-16 flex flex-col items-center z-15",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "relative w-18 h-40 border-[5px] border-amber-600 rounded-t-2xl bg-slate-950 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)]",
                                children: [
                                  me &&
                                    e.jsx("div", {
                                      className:
                                        "absolute inset-0 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 door-open-glow",
                                    }),
                                  e.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900 border-l border-amber-950 flex items-center justify-end pr-2 transition-all duration-1000 origin-left",
                                    style: {
                                      transform: me
                                        ? "rotateY(-85deg)"
                                        : "rotateY(0deg)",
                                      boxShadow: me
                                        ? "none"
                                        : "inset -4px 0 12px rgba(0,0,0,0.6)",
                                    },
                                    children:
                                      !me &&
                                      e.jsx("div", {
                                        className:
                                          "w-3 h-3 rounded-full bg-yellow-500 border border-yellow-700 shadow-md",
                                      }),
                                  }),
                                ],
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[9px] text-amber-500 font-black uppercase tracking-widest mt-2",
                                children: "The Blast Door",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "w-full max-w-xs z-10 px-4",
                        children: e.jsx(U, {
                          text:
                            b === "idle"
                              ? "Go with them ­ƒÖïÔÇìÔÖé´©Å"
                              : b === "complete"
                                ? "Arrived!"
                                : "Walking to final surprise... Ô£¿",
                          onClick: () => Ne("walking_to_sender"),
                          disabled: b !== "idle",
                          className: "w-full py-6 shadow-glow",
                        }),
                      }),
                    ],
                  }),
                j === M.REVEAL &&
                  e.jsxs("div", {
                    className: "w-full text-center space-y-8 py-10",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-3 animate-fade-in-down",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-magical-200 text-[10px] tracking-[0.5em] uppercase font-black drop-shadow-sm opacity-60",
                            children: "A Celebration of You",
                          }),
                          e.jsx("h1", {
                            className:
                              "text-5xl md:text-7xl font-serif text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.4)] leading-tight italic",
                            children: "Happy Birthday!",
                          }),
                          e.jsxs("div", {
                            className:
                              "flex justify-center items-center gap-4 py-2",
                            children: [
                              e.jsx("div", {
                                className:
                                  "h-[1px] w-12 bg-gradient-to-r from-transparent to-white/40",
                              }),
                              e.jsx("span", {
                                className:
                                  "text-white/60 text-xs font-serif italic tracking-widest",
                                children: r.receiverName,
                              }),
                              e.jsx("div", {
                                className:
                                  "h-[1px] w-12 bg-gradient-to-l from-transparent to-white/40",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "bg-white/5 backdrop-blur-3xl p-8 md:p-12 rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.5)] w-full border border-white/10 space-y-10 relative z-10 animate-fade-in-up overflow-hidden",
                        children: [
                          e.jsxs("div", {
                            className:
                              "absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute top-10 left-[10%] text-xl animate-float-slow",
                                children: "­ƒî©",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute top-[20%] right-[15%] text-lg animate-float-fast",
                                children: "Ô£¿",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute bottom-[30%] left-[20%] text-sm animate-float-slow",
                                children: "­ƒì¼",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute bottom-[10%] right-[25%] text-2xl animate-float-fast",
                                children: "­ƒÉç",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "space-y-4 relative",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-3 justify-center mb-2",
                                children: [
                                  e.jsx("div", {
                                    className: "w-6 h-[1px] bg-white/20",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[9px] uppercase tracking-[0.3em] font-black text-magical-200/60",
                                    children: "A Heartfelt Message",
                                  }),
                                  e.jsx("div", {
                                    className: "w-6 h-[1px] bg-white/20",
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                ref: wt,
                                className:
                                  "py-4 flex justify-center transform hover:scale-[1.02] transition-transform duration-500",
                                children: e.jsx(Xt, {
                                  width: 320,
                                  children: e.jsxs("p", {
                                    className:
                                      "text-xl md:text-2xl font-hand text-gray-800 leading-relaxed italic px-6 select-none break-all whitespace-pre-wrap",
                                    children: ['"', r.personalNote, '"'],
                                  }),
                                }),
                              }),
                            ],
                          }),
                          !p &&
                            !t &&
                            !o &&
                            e.jsxs("div", {
                              className:
                                "relative mx-auto max-w-md animate-fade-in-up",
                              style: { animationDelay: "0.3s" },
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 rounded-[32px] bg-gradient-to-r from-rose-500/25 via-pink-500/25 to-amber-400/20 blur-2xl pointer-events-none scale-105",
                                }),
                                e.jsxs("div", {
                                  className:
                                    "relative rounded-[32px] border border-rose-300/20 bg-slate-950/60 backdrop-blur-xl px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden text-center",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-rose-400/60 to-transparent",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "absolute top-3 left-5 text-sm opacity-30 animate-bounce",
                                      children: "­ƒÆù",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "absolute top-3 right-5 text-sm opacity-30 animate-bounce",
                                      style: { animationDelay: "0.4s" },
                                      children: "­ƒÆù",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-[9px] font-black uppercase tracking-[0.35em] text-rose-300/70 mb-2",
                                      children: "They made your day special",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "font-serif text-lg italic text-white mb-1",
                                      children:
                                        "Let them know it meant the world. ­ƒîì",
                                    }),
                                    e.jsxs("p", {
                                      className:
                                        "text-white/35 text-xs mb-5 font-sans",
                                      children: [
                                        "Send a heartfelt thank you back to ",
                                        r.senderName,
                                      ],
                                    }),
                                    e.jsxs("button", {
                                      id: "thank-them-btn",
                                      onClick: () => l(`/thank/${h}`),
                                      className: `
                          group relative w-full py-4 rounded-2xl font-bold text-base tracking-wide
                          bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500
                          text-white
                          shadow-[0_10px_35px_rgba(244,63,94,0.4)]
                          hover:shadow-[0_14px_45px_rgba(244,63,94,0.6)]
                          hover:from-rose-400 hover:via-pink-400 hover:to-fuchsia-400
                          active:scale-[0.97]
                          transition-all duration-300
                          overflow-hidden
                        `,
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out",
                                        }),
                                        e.jsxs("span", {
                                          className:
                                            "relative flex items-center justify-center gap-2",
                                          children: [
                                            e.jsx("span", { children: "­ƒÆî" }),
                                            e.jsxs("span", {
                                              children: [
                                                "Thank ",
                                                r.senderName,
                                              ],
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "text-white/70 text-sm",
                                              children: "ÔåÆ",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-white/20 text-[10px] mt-3 font-serif italic",
                                      children:
                                        "Takes just a minute ┬À Free to create",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          r.voiceMessageUrl &&
                            e.jsxs("div", {
                              className:
                                "bg-slate-950/60 p-6 rounded-[32px] border border-white/5 flex flex-col items-center space-y-4 shadow-inner",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "w-2 h-2 rounded-full bg-magical-400 animate-pulse",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "uppercase text-[9px] font-black text-white/50 tracking-widest leading-none",
                                      children: "Press play to hear the magic",
                                    }),
                                  ],
                                }),
                                e.jsx("audio", {
                                  src: r.voiceMessageUrl,
                                  controls: !0,
                                  preload: "none",
                                  className:
                                    "w-full max-w-xs h-10 custom-audio-player filter invert brightness-200",
                                }),
                              ],
                            }),
                          e.jsxs("div", {
                            className: "relative mt-12 py-6",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute -inset-4 bg-gradient-to-br from-yellow-400/10 via-magical-500/10 to-yellow-400/10 rounded-[44px] blur-2xl opacity-50 pointer-events-none",
                              }),
                              e.jsxs("div", {
                                className:
                                  "relative transform rotate-1 hover:rotate-0 transition-all duration-700",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-4 text-4xl select-none group-hover:gap-8 transition-all duration-1000",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "animate-bounce-subtle delay-100",
                                        children: "Ô£¿",
                                      }),
                                      e.jsx("span", {
                                        className: "animate-pulse delay-200",
                                        children: "­ƒÆû",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "animate-bounce-subtle delay-300",
                                        children: "­ƒº©",
                                      }),
                                      e.jsx("span", {
                                        className: "animate-pulse delay-400",
                                        children: "­ƒÄë",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "bg-[#FFFDF7] text-gray-900 p-10 md:p-14 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border-[12px] border-white relative overflow-hidden group/card max-w-sm mx-auto",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]",
                                      }),
                                      e.jsxs("div", {
                                        className: "relative space-y-6",
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "flex flex-col items-center space-y-2",
                                            children: [
                                              e.jsx("p", {
                                                className:
                                                  "uppercase text-[9px] font-black text-magical-400 tracking-[0.4em] mb-2 border-b border-magical-100/50 pb-1",
                                                children: "A Little Secret",
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "w-8 h-8 rounded-full bg-magical-50 flex items-center justify-center border-2 border-magical-100 shadow-sm mb-2 text-xs",
                                                children: "Ô£¿",
                                              }),
                                            ],
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-2xl md:text-3xl font-hand leading-snug text-magical-950 drop-shadow-sm italic break-all whitespace-pre-wrap",
                                            children: r.finalMessage,
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "pt-8 flex flex-col items-center gap-2",
                                            children: [
                                              e.jsx("p", {
                                                className:
                                                  "text-[10px] font-serif text-magical-400/60 tracking-widest uppercase",
                                                children:
                                                  "Sent with all my love,",
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "text-xl md:text-2xl font-hand text-magical-900 leading-none",
                                                children: r.senderName,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          !p &&
                            !t &&
                            !o &&
                            e.jsxs("div", {
                              className:
                                "relative mx-auto max-w-md pt-3 pb-1 animate-fade-in-up",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute inset-x-10 -top-2 h-16 rounded-full bg-fuchsia-500/15 blur-3xl pointer-events-none",
                                }),
                                e.jsxs("div", {
                                  className:
                                    "relative rounded-[28px] border border-fuchsia-300/15 bg-slate-950/45 px-5 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-[10px] font-black uppercase tracking-[0.24em] text-fuchsia-200/70",
                                      children: "Pass the magic on",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "mt-2 font-serif text-lg italic text-white",
                                      children:
                                        "Make someone else smile today.",
                                    }),
                                    e.jsxs(Oe, {
                                      onClick: () => l("/create"),
                                      variant: "primary",
                                      className:
                                        "mt-4 w-full min-h-12 text-sm tracking-wide shadow-[0_10px_28px_rgba(217,70,239,0.28)]",
                                      children: [
                                        "Create Your Own Surprise ",
                                        e.jsx("span", {
                                          "aria-hidden": "true",
                                          children: "­ƒÄü",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                e.jsx("div", {
                  className: "h-[60vh] md:hidden w-full pointer-events-none",
                }),
              ],
            }),
            (v === "box" || v === "open") &&
              e.jsxs("div", {
                className:
                  "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-2xl p-6 select-none animate-fade-in",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-yellow-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse-slow pointer-events-none",
                  }),
                  e.jsx("style", {
                    dangerouslySetInnerHTML: {
                      __html: `
              @keyframes float-box {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-12px) rotate(2deg); }
              }
              @keyframes lid-flyoff {
                0% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 1; }
                100% { transform: translateY(-180px) rotate(-15deg) scale(0.8); opacity: 0; }
              }
              @keyframes box-shrink-glow {
                0% { transform: scale(1); filter: brightness(1); }
                50% { transform: scale(1.05); filter: brightness(1.2) drop-shadow(0 0 30px rgba(251,191,36,0.6)); }
                100% { transform: scale(0.9); opacity: 0; filter: brightness(1.5); }
              }
              .animate-float-box {
                animation: float-box 4s infinite ease-in-out;
              }
              .animate-lid-fly {
                animation: lid-flyoff 1.2s forwards cubic-bezier(0.19, 1, 0.22, 1);
              }
              .animate-box-open {
                animation: box-shrink-glow 1.2s forwards cubic-bezier(0.19, 1, 0.22, 1);
              }
            `,
                    },
                  }),
                  e.jsx(ws, {
                    isOpen: v === "open",
                    onOpen: () => {
                      v === "box" &&
                        (L("open"),
                        Ae({
                          particleCount: 150,
                          spread: 80,
                          origin: { y: 0.6 },
                        }),
                        setTimeout(() => {
                          L("card");
                        }, 1100));
                    },
                  }),
                  e.jsxs("div", {
                    className: "text-center mt-12 space-y-3 z-10",
                    children: [
                      e.jsx("h3", {
                        className:
                          "text-2xl md:text-3xl font-serif text-white tracking-wide animate-pulse",
                        children:
                          v === "box"
                            ? "You've Received a Birthday Surprise! ­ƒÄü"
                            : "Unwrapping Magic... Ô£¿",
                      }),
                      e.jsx("p", {
                        className:
                          "text-amber-200/70 font-serif italic text-sm md:text-base",
                        children:
                          v === "box"
                            ? "Tap the gift box to unwrap your card"
                            : "A special message is arriving...",
                      }),
                    ],
                  }),
                ],
              }),
            v === "archery" &&
              e.jsx("div", {
                className:
                  "fixed inset-0 z-[100] flex flex-col items-center justify-start bg-black/95 backdrop-blur-2xl p-4 md:p-8 pt-20 md:pt-28 pb-10 overflow-y-auto animate-fade-in",
                children: e.jsxs("div", {
                  className:
                    "w-full max-w-lg my-auto relative flex flex-col items-center",
                  children: [
                    e.jsx("button", {
                      onClick: () => L("card"),
                      className:
                        "absolute top-4 right-4 text-white/60 hover:text-white text-xs font-bold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full z-50 transition-colors",
                      children: "Skip ÔÅ¡´©Å",
                    }),
                    e.jsx(Ns, {
                      onBreak: () => {
                        setTimeout(() => {
                          L("card");
                        }, 1200);
                      },
                    }),
                  ],
                }),
              }),
            v === "card" &&
              e.jsx("div", {
                className:
                  "fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4 md:p-8 overflow-y-auto animate-fade-in",
                children: e.jsx("div", {
                  className: "w-full max-w-[1200px] py-6 my-auto",
                  children: e.jsx(Ht, {
                    receiverName: r.receiverName,
                    message: r.cardMessage,
                    photoUrlOrBase64: r.cardPhotoBase64,
                    cardStyle: r.cardStyle || "luxury",
                    photoPosition: {
                      x: r.cardPhotoX ?? 50,
                      y: r.cardPhotoY ?? 50,
                    },
                    onClose: () => {
                      r.flowerType
                        ? (Z(!1), L("flower-handover"))
                        : (L("none"), g(M.WALK_TO_DOOR));
                    },
                  }),
                }),
              }),
            v === "flower-handover" &&
              e.jsxs("div", {
                className:
                  "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl p-6 select-none animate-fade-in overflow-hidden",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-fuchsia-500/20 via-pink-500/20 to-amber-500/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none",
                  }),
                  e.jsx("style", {
                    dangerouslySetInnerHTML: {
                      __html: `
              @keyframes float-flower {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-8px) rotate(1deg); }
              }
              .animate-float-flower {
                animation: float-flower 4s infinite ease-in-out;
              }
            `,
                    },
                  }),
                  e.jsxs("div", {
                    className:
                      "w-full max-w-md flex flex-col items-center relative min-h-[450px] justify-center text-center px-4 space-y-6",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-2 z-10",
                        children: [
                          e.jsxs("h3", {
                            className:
                              "text-3xl md:text-4xl font-serif text-white tracking-wide",
                            children: [r.senderName, " sent you a flower! ­ƒî©"],
                          }),
                          e.jsxs("p", {
                            className:
                              "text-amber-200/70 font-serif italic text-sm md:text-base max-w-sm mx-auto leading-relaxed",
                            children: [
                              "A beautiful customized 3D ",
                              r.flowerType,
                              " has blossomed to celebrate your special day.",
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "w-[260px] h-[260px] md:w-[320px] md:h-[320px] z-20 animate-float-flower flex items-center justify-center relative",
                        children: e.jsx(Vt, {
                          type: r.flowerType || "rose",
                          color: r.flowerColor || "#ff3388",
                        }),
                      }),
                      e.jsx("div", {
                        className: "z-30 w-full max-w-xs",
                        children: e.jsx(U, {
                          text: Q ? "Accepted! ­ƒî©" : "Accept Flower ­ƒÆû",
                          disabled: Q,
                          onClick: () => {
                            (Z(!0),
                              Ae({
                                particleCount: 120,
                                spread: 70,
                                origin: { x: 0.5, y: 0.55 },
                                colors: [
                                  "#e91e63",
                                  "#f48fb1",
                                  "#ff4081",
                                  "#ba68c8",
                                ],
                              }));
                            try {
                              B.current.playPop();
                            } catch (x) {
                              console.log(x);
                            }
                            setTimeout(() => {
                              (L("none"), g(M.WALK_TO_DOOR));
                            }, 1500);
                          },
                          className: `w-full py-6 text-white font-bold transition-all duration-500 ${Q ? "bg-emerald-600 border-emerald-500" : "bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600"}`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  };
export { Es as Receiver };
