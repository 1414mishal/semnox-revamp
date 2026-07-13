lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const header = document.getElementById("site-header");
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = [...document.querySelectorAll(".mobile-link")];
let lastFocusedElement = null;

function updateHeader() {
  const scrolled = window.scrollY > 80;
  header.classList.toggle("bg-[#111213]/90", scrolled);
  header.classList.toggle("backdrop-blur-md", scrolled);
  header.classList.toggle("border-white/15", scrolled);
  header.classList.toggle("shadow-lg", scrolled);
  header.classList.toggle("shadow-black/10", scrolled);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

function setMenuIcon(name) {
  const icon = document.createElement("i");
  icon.setAttribute("data-lucide", name);
  icon.className = "h-5 w-5";
  menuButton.replaceChildren(icon);
  lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
}

function openMenu() {
  lastFocusedElement = document.activeElement;
  mobileMenu.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "Close navigation");
  setMenuIcon("x");
}

function closeMenu() {
  mobileMenu.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  setMenuIcon("menu");
  if (lastFocusedElement) lastFocusedElement.focus();
}

if (menuButton) {
  menuButton.addEventListener("click", () => {
    menuButton.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu();
  });
  mobileLinks.forEach(link => link.addEventListener("click", closeMenu));
  mobileMenu.addEventListener("click", e => { if (e.target === mobileMenu) closeMenu(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024 && menuButton.getAttribute("aria-expanded") === "true") closeMenu();
  });
}

// Desktop dropdown menus (hover + click + keyboard friendly)
document.querySelectorAll("[data-dropdown]").forEach(dd => {
  const button = dd.querySelector("[data-dropdown-button]");
  const panel = dd.querySelector("[data-dropdown-panel]");
  const icon = dd.querySelector("[data-dropdown-icon]");
  let closeTimer = null;

  const setOpen = open => {
    button.setAttribute("aria-expanded", open ? "true" : "false");
    panel.classList.toggle("invisible", !open);
    panel.classList.toggle("opacity-0", !open);
    panel.classList.toggle("translate-y-2", !open);
    panel.classList.toggle("translate-y-0", open);
    if (icon) icon.style.transform = open ? "rotate(180deg)" : "";
  };

  dd.addEventListener("mouseenter", () => { clearTimeout(closeTimer); setOpen(true); });
  dd.addEventListener("mouseleave", () => { closeTimer = setTimeout(() => setOpen(false), 150); });
  button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true"));
  dd.addEventListener("focusout", e => { if (!dd.contains(e.relatedTarget)) setOpen(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
});

// Hero entrance: lines rise out of a clipped mask, the way print pulls off a press.
const heroElements = [...document.querySelectorAll("[data-hero]")];
if (reducedMotion) {
  heroElements.forEach(el => el.classList.remove("translate-y-6", "opacity-0"));
} else {
  heroElements.forEach((el, i) => {
    el.animate(
      [
        { opacity: 1, transform: "translateY(1.1em)", clipPath: "inset(100% 0 -0.2em 0)" },
        { opacity: 1, transform: "translateY(0)", clipPath: "inset(-0.2em 0 -0.2em 0)" }
      ],
      { duration: 850, delay: 160 + i * 140, easing: "cubic-bezier(.19,1,.22,1)", fill: "forwards" }
    );
  });
  const heroImage = document.querySelector("[data-hero-image]");
  if (heroImage) {
    heroImage.animate(
      [{ transform: "scale(1.07)" }, { transform: "scale(1)" }],
      { duration: 2400, easing: "cubic-bezier(.22,.61,.36,1)", fill: "forwards" }
    );
  }
}

// Scroll reveal
const revealElements = [...document.querySelectorAll("[data-reveal]")];
if (reducedMotion) {
  revealElements.forEach(el => { el.style.opacity = "1"; el.style.transform = "none"; });
} else {
  revealElements.forEach(el => { el.style.opacity = "0"; el.style.transform = "translateY(22px)"; });
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.animate(
        [
          { opacity: 0, transform: "translateY(22px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 560, easing: "cubic-bezier(.22,.61,.36,1)", fill: "forwards" }
      );
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  revealElements.forEach(el => revealObserver.observe(el));
}

// Accordions (process steps / FAQ style)
document.querySelectorAll("[data-accordion]").forEach(group => {
  const buttons = [...group.querySelectorAll("[data-accordion-button]")];
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(other => {
        const isCurrent = other === button && other.getAttribute("aria-expanded") !== "true";
        const detail = other.querySelector("[data-accordion-detail]");
        const icon = other.querySelector("[data-accordion-icon]");
        other.setAttribute("aria-expanded", isCurrent ? "true" : "false");
        if (detail) detail.classList.toggle("hidden", !isCurrent);
        if (icon) icon.setAttribute("data-lucide", isCurrent ? "minus" : "plus");
        if (isCurrent && detail && !reducedMotion) {
          detail.animate(
            [
              { opacity: 0, transform: "translateY(-8px)" },
              { opacity: 1, transform: "translateY(0)" }
            ],
            { duration: 210, easing: "ease-out" }
          );
        }
      });
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
    });
  });
});

// Live "now" line in the scoreboard: venues never sleep somewhere on earth.
const nowLine = document.querySelector("[data-now-line]");
if (nowLine) {
  const zones = [
    ["Auckland", "Pacific/Auckland"], ["Sydney", "Australia/Sydney"], ["Singapore", "Asia/Singapore"],
    ["Mangalore", "Asia/Kolkata"], ["Dubai", "Asia/Dubai"], ["Reading", "Europe/London"],
    ["Dallas", "America/Chicago"], ["Lima", "America/Lima"],
  ];
  const render = () => {
    const open = zones.filter(([, tz]) => {
      const h = parseInt(new Intl.DateTimeFormat("en", { hour: "numeric", hour12: false, timeZone: tz }).format(new Date()), 10);
      return h >= 10 && h < 23;
    });
    const sample = open.length ? open[Math.floor(Date.now() / 60000) % open.length][0] : "somewhere";
    nowLine.textContent = "Right now it is opening hours in " + sample + ". The platform is on.";
  };
  render();
  setInterval(render, 60000);
}

// Spotlight glow cards: one pointermove listener drives every [data-glow] card,
// setting local pointer coordinates so the border ring and wash follow the mouse.
const glowCards = [...document.querySelectorAll("[data-glow]")];
if (glowCards.length && !reducedMotion && window.matchMedia("(pointer: fine)").matches) {
  let glowFrame = null;
  window.addEventListener("pointermove", e => {
    if (glowFrame) return;
    glowFrame = requestAnimationFrame(() => {
      glowFrame = null;
      for (const card of glowCards) {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        card.style.setProperty("--gx", x + "px");
        card.style.setProperty("--gy", y + "px");
        const near = x > -120 && y > -120 && x < r.width + 120 && y < r.height + 120;
        card.style.setProperty("--glow-active", near ? "1" : "0");
      }
    });
  }, { passive: true });
}

// Digital aurora: a WebGL curtain in Semnox orange and Tixera teal behind the
// closing call to action. Falls back to the CSS gradient already on the canvas.
const auroraCanvas = document.querySelector("[data-aurora]");
if (auroraCanvas && !reducedMotion) {
  const gl = auroraCanvas.getContext("webgl", { antialias: false, alpha: false });
  if (gl) {
    const vertSrc = "attribute vec2 aPosition; void main(){ gl_Position = vec4(aPosition, 0.0, 1.0); }";
    const fragSrc = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      float fbm(vec2 p) {
        float v = 0.0, a = 0.5;
        for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        vec2 m = iMouse / iResolution - 0.5;
        float t = iTime * 0.35;
        float x = uv.x * 3.0 + m.x * 0.7;

        float wave = fbm(vec2(x * 1.15 + t * 0.32, t * 0.16));
        float band = uv.y - 0.12 - wave * 0.6 + m.y * 0.12;
        float curtain = exp(-abs(band) * 3.6);
        float rays = fbm(vec2(x * 2.6 - t * 0.22, uv.y * 1.3 + t * 0.12));
        float glow = curtain * (0.4 + 0.9 * rays);

        vec3 warm = vec3(0.95, 0.42, 0.12);
        vec3 cool = vec3(0.09, 0.52, 0.68);
        float blend = clamp(0.5 + 0.5 * sin(x * 0.9 + t * 0.55), 0.0, 1.0);
        vec3 col = mix(cool, warm, blend) * glow * 1.3;
        col += warm * 0.06 * exp(-uv.y * 2.2);
        col += vec3(0.02, 0.02, 0.025);
        gl_FragColor = vec4(col, 1.0);
      }`;

    const compile = (src, type) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
    };
    const vert = compile(vertSrc, gl.VERTEX_SHADER);
    const frag = compile(fragSrc, gl.FRAGMENT_SHADER);
    if (vert && frag) {
      const program = gl.createProgram();
      gl.attachShader(program, vert);
      gl.attachShader(program, frag);
      gl.linkProgram(program);
      gl.useProgram(program);

      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
      const aPosition = gl.getAttribLocation(program, "aPosition");
      gl.enableVertexAttribArray(aPosition);
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

      const uResolution = gl.getUniformLocation(program, "iResolution");
      const uTime = gl.getUniformLocation(program, "iTime");
      const uMouse = gl.getUniformLocation(program, "iMouse");

      const mouse = { x: 0.5, y: 0.35 };
      window.addEventListener("pointermove", e => {
        const r = auroraCanvas.getBoundingClientRect();
        mouse.x = (e.clientX - r.left) / Math.max(r.width, 1);
        mouse.y = (e.clientY - r.top) / Math.max(r.height, 1);
      }, { passive: true });

      const resize = () => {
        const scale = Math.min(window.devicePixelRatio || 1, 1.5);
        auroraCanvas.width = Math.floor(auroraCanvas.clientWidth * scale);
        auroraCanvas.height = Math.floor(auroraCanvas.clientHeight * scale);
        gl.viewport(0, 0, auroraCanvas.width, auroraCanvas.height);
        gl.uniform2f(uResolution, auroraCanvas.width, auroraCanvas.height);
      };
      window.addEventListener("resize", resize);
      resize();

      let visible = false;
      let frameId = null;
      const start = performance.now();
      const loop = () => {
        if (!visible || gl.isContextLost()) { frameId = null; return; }
        gl.uniform1f(uTime, (performance.now() - start) / 1000);
        gl.uniform2f(uMouse, mouse.x * auroraCanvas.width, (1 - mouse.y) * auroraCanvas.height);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        frameId = requestAnimationFrame(loop);
      };
      new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        if (visible && frameId === null) frameId = requestAnimationFrame(loop);
      }).observe(auroraCanvas);
    }
  }
}
