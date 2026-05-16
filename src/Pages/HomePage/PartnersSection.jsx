// Auto-scrolling partners / trusted-brands ticker strip.
// Compact, understated — won't compete with the main content.

const partners = [
  { name: "VARITO",       origin: "Germany",        url: "https://varito.de",  tag: "Security & Surveillance" },
  { name: "CQR Security", origin: "United Kingdom",  url: "https://cqr.co.uk", tag: "Fire & Intruder Safety"   },
  { name: "BOSCH",        origin: "Germany",         url: "#",                  tag: "Video & Access Systems"   },
  { name: "Dahua",        origin: "China",           url: "#",                  tag: "IP Surveillance"          },
  { name: "HikVision",    origin: "China",           url: "#",                  tag: "CCTV & Smart Cameras"     },
  { name: "ZKTeco",       origin: "Global",          url: "#",                  tag: "Biometric Access"         },
  { name: "Naffco",       origin: "UAE",             url: "#",                  tag: "Fire Protection"          },
  { name: "Purity",       origin: "Global",          url: "#",                  tag: "Energy-Saving Pumps"      },
];

// Duplicate the list so the marquee loops seamlessly
const ticker = [...partners, ...partners];

const PartnersSection = () => (
  <section
    id="partners"
    className="relative py-10 border-y border-gray-100 bg-white overflow-hidden"
  >
    {/* ── Left / right fade masks ─────────────────────────────────── */}
    <div
      className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10"
      style={{ background: "linear-gradient(to right, white, transparent)" }}
    />
    <div
      className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10"
      style={{ background: "linear-gradient(to left, white, transparent)" }}
    />

    {/* ── Label ───────────────────────────────────────────────────── */}
    <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-red-400 mb-6 select-none">
      Authorized Partners &amp; Distributors
    </p>

    {/* ── Scrolling track ─────────────────────────────────────────── */}
    <div className="relative overflow-hidden">
      <div
        className="flex gap-8 w-max"
        style={{
          animation: "partners-scroll 32s linear infinite",
        }}
        // Pause on hover via inline style toggled by CSS variable trick
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {ticker.map((p, i) => (
          <a
            key={i}
            href={p.url}
            target={p.url !== "#" ? "_blank" : undefined}
            rel="noreferrer"
            className="flex-shrink-0 flex flex-col items-center justify-center gap-1
                       px-8 py-4 rounded-xl border border-transparent
                       hover:border-gray-200 hover:bg-gray-50
                       transition-all duration-300 group select-none"
            title={`${p.name} — ${p.tag}`}
          >
            {/* Partner name as wordmark */}
            <span className="text-lg font-black tracking-tight text-gray-400 group-hover:text-gray-700 transition-colors duration-300 whitespace-nowrap">
              {p.name}
            </span>
            {/* Category micro-label */}
            <span className="text-[10px] font-semibold text-gray-300 group-hover:text-gray-500 uppercase tracking-widest transition-colors duration-300 whitespace-nowrap">
              {p.tag}
            </span>
          </a>
        ))}
      </div>
    </div>

    {/* ── Keyframe injected via a <style> tag ─────────────────────── */}
    <style>{`
      @keyframes partners-scroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
    `}</style>
  </section>
);

export default PartnersSection;
