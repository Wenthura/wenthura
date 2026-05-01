import type { FC } from "react";

// ── Palette ───────────────────────────────────────────────────────────────────
const B  = "#2563EB"; // blue-600   primary
const BD = "#1D4ED8"; // blue-700
const BL = "#93C5FD"; // blue-300
const BB = "#DBEAFE"; // blue-100
const BG = "#EFF6FF"; // blue-50 bg

const O  = "#F97316"; // orange-500 accent
const OD = "#EA580C"; // orange-600
const OL = "#FDBA74"; // orange-300
const OB = "#FFF7ED"; // orange-50 bg

type IllProps = { className?: string };

// ── Shared SVG wrapper ────────────────────────────────────────────────────────
const Ill: FC<{ vb?: string; className?: string; children: React.ReactNode }> = ({
  vb = "0 0 400 280",
  className,
  children,
}) => (
  <svg
    viewBox={vb}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid slice"
    className={className}
  >
    {children}
  </svg>
);

// ── 1. FinancialDashboard — BFSI, Hero ────────────────────────────────────────
export const FinancialDashboard: FC<IllProps> = ({ className }) => (
  <Ill className={className}>
    <defs>
      <linearGradient id="fd-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#EFF6FF" />
        <stop offset="55%"  stopColor="#F8FAFC" />
        <stop offset="100%" stopColor="#FFF7ED" />
      </linearGradient>
      <linearGradient id="fd-area" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor={B}  stopOpacity="0.45" />
        <stop offset="100%" stopColor={B}  stopOpacity="0" />
      </linearGradient>
      <linearGradient id="fd-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor={B} />
        <stop offset="100%" stopColor={O} />
      </linearGradient>
      <linearGradient id="fd-card" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="white"   stopOpacity="1" />
        <stop offset="100%" stopColor="#F1F5F9" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="fd-chip" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor={O}  />
        <stop offset="100%" stopColor={OD} />
      </linearGradient>
      <filter id="fd-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor={BD} floodOpacity="0.12" />
      </filter>
    </defs>

    {/* Soft gradient background with radial glow */}
    <rect width="400" height="280" fill="url(#fd-bg)" />
    <circle cx="340" cy="60" r="120" fill={O} fillOpacity="0.05" />
    <circle cx="40"  cy="240" r="100" fill={B} fillOpacity="0.06" />

    {/* Grid lines — subtle */}
    {[60, 120, 180, 240].map((y) => (
      <line key={y} x1="16" y1={y} x2="384" y2={y} stroke={BB} strokeWidth="0.5" strokeOpacity="0.6" />
    ))}

    {/* Main dashboard card */}
    <g filter="url(#fd-shadow)">
      <rect x="24" y="40" width="260" height="204" rx="14" fill="url(#fd-card)" stroke={BB} strokeWidth="1" />
    </g>

    {/* Card header — traffic-light dots */}
    <circle cx="40" cy="56" r="3.5" fill="#F87171" />
    <circle cx="52" cy="56" r="3.5" fill="#FBBF24" />
    <circle cx="64" cy="56" r="3.5" fill="#34D399" />
    <rect x="210" y="50" width="56" height="14" rx="7" fill={BG} />
    <text x="238" y="60" fontSize="7" fontFamily="monospace" fill={B} textAnchor="middle" letterSpacing="1">LIVE</text>
    <circle cx="221" cy="57" r="2.5" fill="#22C55E" />

    {/* Metric label + value */}
    <text x="40" y="92" fontSize="8" fontFamily="monospace" fill="#64748B" letterSpacing="1.5">TOTAL VOLUME</text>
    <text x="40" y="118" fontSize="26" fontWeight="800" fontFamily="system-ui" fill="#0F172A">$4,240,817</text>
    {/* Change badge */}
    <rect x="40" y="126" width="68" height="18" rx="9" fill="#DCFCE7" />
    <path d="M48 138 L52 132 L56 138 Z" fill="#16A34A" />
    <text x="62" y="139" fontSize="9" fontFamily="monospace" fontWeight="700" fill="#16A34A">+24.8%</text>
    <text x="114" y="139" fontSize="8" fontFamily="monospace" fill="#94A3B8">vs last month</text>

    {/* Area chart */}
    <path
      d="M40 208 L70 192 L98 198 L126 178 L154 184 L184 158 L214 166 L244 136 L270 128 L270 220 L40 220 Z"
      fill="url(#fd-area)"
    />
    <path
      d="M40 208 L70 192 L98 198 L126 178 L154 184 L184 158 L214 166 L244 136 L270 128"
      stroke="url(#fd-line)" strokeWidth="2.5" fill="none" strokeLinejoin="round" strokeLinecap="round"
    />
    {/* End-point glow */}
    <circle cx="270" cy="128" r="10" fill={O} fillOpacity="0.18" />
    <circle cx="270" cy="128" r="5"  fill="white" stroke={O} strokeWidth="2.5" />

    {/* Chart x-axis labels */}
    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
      <text key={i} x={46 + i * 38} y="234" fontSize="7" fontFamily="monospace" fill="#94A3B8">{d}</text>
    ))}

    {/* Floating card 1 — Payment success toast */}
    <g filter="url(#fd-shadow)">
      <rect x="296" y="28" width="96" height="52" rx="10" fill="white" stroke={BB} strokeWidth="1" />
    </g>
    <circle cx="312" cy="54" r="11" fill="#DCFCE7" />
    <path d="M307 54 L311 58 L318 50" stroke="#16A34A" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <text x="328" y="48" fontSize="8" fontWeight="700" fontFamily="system-ui" fill="#0F172A">Payment</text>
    <text x="328" y="60" fontSize="7" fontFamily="monospace" fill="#64748B">+$12,450</text>
    <text x="328" y="72" fontSize="6" fontFamily="monospace" fill="#94A3B8">a moment ago</text>

    {/* Floating card 2 — Card chip */}
    <g filter="url(#fd-shadow)" transform="translate(296 96) rotate(-6 48 32)">
      <rect width="96" height="62" rx="9" fill="url(#fd-chip)" />
      <rect x="10" y="18" width="20" height="14" rx="3" fill="white" fillOpacity="0.85" />
      <line x1="10" y1="25" x2="30" y2="25" stroke="#B45309" strokeWidth="0.8" />
      <text x="10" y="46" fontSize="7" fontFamily="monospace" fill="white" fillOpacity="0.9">•••• 4242</text>
      <text x="10" y="56" fontSize="5" fontFamily="monospace" fill="white" fillOpacity="0.7">WENTHURA PAY</text>
      {/* contactless arcs */}
      {[6, 10, 14].map((r, i) => (
        <path key={i}
          d={`M ${80 - r} 20 A ${r} ${r} 0 0 1 ${80 - r} ${20 + r * 2}`}
          stroke="white" strokeWidth="1.2" strokeOpacity={0.35 + i * 0.2}
          fill="none" strokeLinecap="round" />
      ))}
    </g>

    {/* Floating card 3 — Countries stat */}
    <g filter="url(#fd-shadow)">
      <rect x="296" y="176" width="96" height="68" rx="10" fill="white" stroke={BB} strokeWidth="1" />
    </g>
    <text x="308" y="196" fontSize="7" fontFamily="monospace" fill="#94A3B8" letterSpacing="1">COUNTRIES</text>
    <text x="308" y="218" fontSize="22" fontWeight="800" fontFamily="system-ui" fill={BD}>15+</text>
    {/* tiny country dots (world-map feel) */}
    {[
      [312, 230], [320, 232], [328, 228], [336, 234], [344, 230], [352, 236],
      [360, 228], [368, 232], [376, 230], [318, 238], [330, 240], [350, 238],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="1.6" fill={i % 3 === 0 ? O : B} fillOpacity={0.55 + (i % 3) * 0.15} />
    ))}
  </Ill>
);

// ── 2. RetailCommerce — Retail, eCommerce ─────────────────────────────────────
export const RetailCommerce: FC<IllProps> = ({ className }) => (
  <Ill className={className}>
    <rect width="400" height="280" fill={OB} />

    {/* large orange shopping bag */}
    <path d="M130 80 L270 80 L290 220 L110 220 Z" fill={O} fillOpacity="0.15" stroke={O} strokeWidth="2.5" />
    {/* bag handle */}
    <path d="M160 80 Q160 48 200 48 Q240 48 240 80" stroke={O} strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* bag label */}
    <rect x="160" y="135" width="80" height="40" rx="6" fill={O} fillOpacity="0.2" stroke={O} strokeWidth="1.5" />
    <text x="200" y="160" fontSize="13" fontWeight="bold" fontFamily="system-ui" fill={OD} textAnchor="middle">PAY</text>

    {/* blue payment card */}
    <rect x="240" y="185" width="120" height="76" rx="10" fill={BD} />
    <rect x="252" y="200" width="34" height="26" rx="4" fill={BL} fillOpacity="0.5" />
    <rect x="252" y="200" width="34" height="13" rx="0" fill={BL} fillOpacity="0.35" />
    <text x="252" y="252" fontSize="9" fontFamily="monospace" fill={BB}>•••• •••• 4242</text>

    {/* product tiles */}
    {[[30, 30], [86, 30], [30, 86], [86, 86]].map(([x, y], i) => (
      <rect key={i} x={x} y={y} width="48" height="48" rx="6"
        fill={i % 2 === 0 ? BB : OB} stroke={i % 2 === 0 ? B : O} strokeWidth="1.5" />
    ))}
    <text x="54" y="59"  fontSize="18" textAnchor="middle" fill={B}>♦</text>
    <text x="110" y="59" fontSize="18" textAnchor="middle" fill={O}>●</text>
    <text x="54" y="115" fontSize="18" textAnchor="middle" fill={O}>▲</text>
    <text x="110" y="115" fontSize="18" textAnchor="middle" fill={B}>■</text>

    {/* arrow from card to bag */}
    <path d="M240 220 Q210 220 200 200" stroke={B} strokeWidth="2" fill="none"
      strokeDasharray="5 4" markerEnd="url(#arr)" strokeLinecap="round" />
    <defs>
      <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 Z" fill={B} />
      </marker>
    </defs>
  </Ill>
);

// ── 3. IndustrialFlow — Manufacturing ────────────────────────────────────────
export const IndustrialFlow: FC<IllProps> = ({ className }) => (
  <Ill className={className}>
    <rect width="400" height="280" fill={BG} />

    {/* factory silhouette */}
    <rect x="50" y="210" width="300" height="60" rx="0" fill={BB} fillOpacity="0.6" />
    <rect x="70"  y="185" width="50" height="30" fill={B} fillOpacity="0.25" />
    <rect x="175" y="185" width="50" height="30" fill={B} fillOpacity="0.25" />
    <rect x="280" y="185" width="50" height="30" fill={B} fillOpacity="0.25" />
    {/* chimneys */}
    <rect x="82"  y="155" width="12" height="32" rx="3" fill={B} fillOpacity="0.4" />
    <rect x="187" y="155" width="12" height="32" rx="3" fill={B} fillOpacity="0.4" />
    <rect x="292" y="155" width="12" height="32" rx="3" fill={B} fillOpacity="0.4" />

    {/* 3 gear-circles */}
    <circle cx="110" cy="110" r="48" fill={BB} stroke={B} strokeWidth="3" />
    <circle cx="110" cy="110" r="22" fill={BG} stroke={B} strokeWidth="2" />
    <circle cx="110" cy="110" r="8"  fill={B} />

    <circle cx="240" cy="90" r="38" fill={OB} stroke={O} strokeWidth="3" />
    <circle cx="240" cy="90" r="18" fill={BG} stroke={O} strokeWidth="2" />
    <circle cx="240" cy="90" r="7"  fill={O} />

    <circle cx="340" cy="115" r="30" fill={BB} stroke={BD} strokeWidth="2.5" />
    <circle cx="340" cy="115" r="14" fill={BG} stroke={BD} strokeWidth="1.5" />
    <circle cx="340" cy="115" r="6"  fill={BD} />

    {/* gear teeth approximation — short radial lines */}
    {[0,45,90,135,180,225,270,315].map((deg) => {
      const r = Math.PI * deg / 180;
      return (
        <line key={deg}
          x1={110 + Math.cos(r) * 44} y1={110 + Math.sin(r) * 44}
          x2={110 + Math.cos(r) * 52} y2={110 + Math.sin(r) * 52}
          stroke={B} strokeWidth="4" strokeLinecap="round" />
      );
    })}
    {[0,60,120,180,240,300].map((deg) => {
      const r = Math.PI * deg / 180;
      return (
        <line key={deg}
          x1={240 + Math.cos(r) * 34} y1={90 + Math.sin(r) * 34}
          x2={240 + Math.cos(r) * 41} y2={90 + Math.sin(r) * 41}
          stroke={O} strokeWidth="4" strokeLinecap="round" />
      );
    })}

    {/* orange flow arrows between gears */}
    <path d="M158 108 L200 96" stroke={O} strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#oa)" />
    <path d="M276 97 L308 106" stroke={O} strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#oa)" />
    <defs>
      <marker id="oa" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
        <path d="M0 0 L7 3.5 L0 7 Z" fill={O} />
      </marker>
    </defs>

    {/* data dots above */}
    {[60,120,190,260,330,380].map((x, i) => (
      <circle key={x} cx={x} cy={30 + (i % 2) * 12} r="4" fill={i % 2 === 0 ? B : O} fillOpacity="0.6" />
    ))}
  </Ill>
);

// ── 4. DataNetwork — Core Banking, ERP, AI, Engineering, Low Code ─────────────
export const DataNetwork: FC<IllProps> = ({ className }) => (
  <Ill className={className}>
    {/* dark navy bg */}
    <rect width="400" height="280" fill={BD} />

    {/* subtle hex grid */}
    {[
      [80,60],[160,60],[240,60],[320,60],[40,120],[120,120],[200,120],[280,120],[360,120],
      [80,180],[160,180],[240,180],[320,180],[40,240],[120,240],[200,240],[280,240],[360,240],
    ].map(([cx, cy], i) => (
      <polygon key={i}
        points={`${cx},${cy-20} ${cx+17},${cy-10} ${cx+17},${cy+10} ${cx},${cy+20} ${cx-17},${cy+10} ${cx-17},${cy-10}`}
        fill="none" stroke={BL} strokeWidth="0.5" strokeOpacity="0.25"
      />
    ))}

    {/* database cylinder */}
    <ellipse cx="80" cy="154" rx="30" ry="10" fill={B} stroke={BL} strokeWidth="1.5" />
    <rect x="50" y="154" width="60" height="44" fill={B} />
    <ellipse cx="80" cy="198" rx="30" ry="10" fill={BD} stroke={BL} strokeWidth="1.5" />
    <ellipse cx="80" cy="176" rx="30" ry="10" fill={B} stroke={BL} strokeWidth="1" fillOpacity="0.6" />

    {/* orange central glowing node */}
    <circle cx="230" cy="140" r="36" fill={O} fillOpacity="0.12" />
    <circle cx="230" cy="140" r="24" fill={O} fillOpacity="0.2" />
    <circle cx="230" cy="140" r="14" fill={O} />
    <circle cx="230" cy="140" r="7"  fill="white" fillOpacity="0.9" />

    {/* connection lines from db to center */}
    <line x1="110" y1="170" x2="210" y2="148" stroke={BL} strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.6" />

    {/* satellite nodes */}
    {[
      [320, 60,  BL],
      [340, 200, OL],
      [160, 60,  BL],
      [280, 220, OL],
      [350, 140, BL],
    ].map(([cx, cy, fill], i) => (
      <g key={i}>
        <line x1={230} y1={140} x2={cx as number} y2={cy as number}
          stroke={fill as string} strokeWidth="1" strokeDasharray="5 4" strokeOpacity="0.5" />
        <circle cx={cx as number} cy={cy as number} r="10" fill={fill as string} fillOpacity="0.2" stroke={fill as string} strokeWidth="1" />
        <circle cx={cx as number} cy={cy as number} r="5"  fill={fill as string} />
      </g>
    ))}

    {/* label */}
    <rect x="160" y="220" width="140" height="28" rx="6" fill="white" fillOpacity="0.07" />
    <text x="230" y="239" fontSize="10" fontFamily="monospace" fill={BL} textAnchor="middle" letterSpacing="2">NETWORK CORE</text>
  </Ill>
);

// ── 5. UserVerification — Digital Onboarding ─────────────────────────────────
export const UserVerification: FC<IllProps> = ({ className }) => (
  <Ill className={className}>
    <rect width="400" height="280" fill="white" />
    {/* bg accent */}
    <rect x="0" y="0" width="400" height="280" fill={BG} fillOpacity="0.5" />

    {/* ID card */}
    <rect x="40" y="60" width="220" height="150" rx="14" fill="white" stroke={B} strokeWidth="2" />
    {/* card header strip */}
    <rect x="40" y="60" width="220" height="44" rx="14" fill={B} />
    <rect x="40" y="90" width="220" height="14" rx="0" fill={B} />
    <text x="150" y="89" fontSize="11" fontFamily="monospace" fill="white" textAnchor="middle" letterSpacing="1">DIGITAL ID</text>

    {/* avatar circle */}
    <circle cx="90" cy="155" r="30" fill={OB} stroke={O} strokeWidth="2.5" />
    <circle cx="90" cy="147" r="12" fill={OL} />
    <ellipse cx="90" cy="175" rx="20" ry="12" fill={OL} />

    {/* text lines on card */}
    <rect x="140" y="120" width="90" height="8"  rx="4" fill={BB} />
    <rect x="140" y="138" width="70" height="8"  rx="4" fill={BB} />
    <rect x="140" y="156" width="100" height="8" rx="4" fill={BB} />
    <rect x="140" y="174" width="60" height="8"  rx="4" fill={OL} fillOpacity="0.6" />

    {/* shield */}
    <path d="M290 80 Q290 60 310 60 Q330 60 330 80 L330 110 Q330 130 310 140 Q290 130 290 110 Z"
      fill={B} stroke={BD} strokeWidth="1.5" />
    {/* checkmark */}
    <path d="M301 108 L308 116 L322 98" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* verification dots */}
    {[
      [290, 185, B],
      [315, 185, O],
      [340, 185, B],
    ].map(([cx, cy, fill], i) => (
      <g key={i}>
        <circle cx={cx as number} cy={cy as number} r="14" fill={fill as string} fillOpacity="0.12" stroke={fill as string} strokeWidth="1.5" />
        <circle cx={cx as number} cy={cy as number} r="6"  fill={fill as string} />
      </g>
    ))}
    <line x1="304" y1="185" x2="329" y2="185" stroke={BB} strokeWidth="1" strokeDasharray="3 2" />

    {/* orange status bar */}
    <rect x="40" y="235" width="220" height="24" rx="8" fill={OB} stroke={OL} strokeWidth="1" />
    <rect x="40" y="235" width="160" height="24" rx="8" fill={O} fillOpacity="0.25" />
    <text x="150" y="252" fontSize="9" fontFamily="monospace" fill={OD} textAnchor="middle">VERIFIED  ✓</text>
  </Ill>
);

// ── 6. PaymentFlow — Payment Acquiring, Processing, Merchant ─────────────────
export const PaymentFlow: FC<IllProps> = ({ className }) => (
  <Ill className={className}>
    <rect width="400" height="280" fill={BG} />

    {/* QR code (blue grid top-left) */}
    {[
      [30,30],[46,30],[62,30],[30,46],[62,46],[30,62],[46,62],[62,62],
      [78,30],[78,46],[78,62],
    ].map(([x,y], i) => (
      <rect key={i} x={x} y={y} width="12" height="12" rx="2" fill={B} fillOpacity={0.7 + (i % 3) * 0.1} />
    ))}
    <rect x="36" y="36" width="20" height="20" rx="2" fill="white" />
    <rect x="40" y="40" width="12" height="12" rx="1" fill={B} />

    {/* orange POS terminal */}
    <rect x="155" y="80" width="90" height="120" rx="12" fill={O} />
    <rect x="165" y="92" width="70" height="46" rx="6" fill="white" fillOpacity="0.9" />
    {/* terminal screen content */}
    <rect x="172" y="100" width="56" height="6" rx="3" fill={BB} />
    <rect x="172" y="112" width="40" height="6" rx="3" fill={BL} />
    <text x="200" y="132" fontSize="11" fontWeight="bold" fontFamily="system-ui" fill={BD} textAnchor="middle">$128</text>
    {/* keypad dots */}
    {[0,1,2,3,4,5,6,7,8].map((n) => (
      <circle key={n} cx={170 + (n % 3) * 20} cy={152 + Math.floor(n / 3) * 14} r="4" fill={OD} fillOpacity="0.4" />
    ))}
    {/* receipt strip */}
    <rect x="178" y="198" width="44" height="8" rx="0" fill="white" fillOpacity="0.5" />

    {/* blue payment card */}
    <rect x="20" y="145" width="110" height="70" rx="10" fill={BD} />
    <rect x="32" y="160" width="30" height="22" rx="4" fill={BL} fillOpacity="0.5" />
    <rect x="32" y="160" width="30" height="11" fill={BL} fillOpacity="0.35" />
    <text x="32" y="206" fontSize="8" fontFamily="monospace" fill={BB}>•••• 4242</text>

    {/* orange payment arrow */}
    <path d="M132 177 L153 157" stroke={O} strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#pfa)" />
    <defs>
      <marker id="pfa" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
        <path d="M0 0 L7 3.5 L0 7 Z" fill={O} />
      </marker>
    </defs>

    {/* success checkmark circle */}
    <circle cx="318" cy="140" r="36" fill={O} fillOpacity="0.12" />
    <circle cx="318" cy="140" r="24" fill={O} fillOpacity="0.2" />
    <circle cx="318" cy="140" r="14" fill={O} />
    <path d="M310 140 L316 148 L328 128" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* flow arrows right side */}
    <path d="M247 140 L290 140" stroke={B} strokeWidth="2" strokeLinecap="round" strokeDasharray="5 3" />
    <text x="318" y="200" fontSize="9" fontFamily="monospace" fill={OD} textAnchor="middle">APPROVED</text>
  </Ill>
);

// ── 7. DigitalCard — CMS & Issuance, Digital Banking, POS ────────────────────
export const DigitalCard: FC<IllProps> = ({ className }) => (
  <Ill className={className}>
    {/* dark navy bg */}
    <rect width="400" height="280" fill={BD} />
    {/* subtle dot grid */}
    {Array.from({ length: 8 }, (_, r) =>
      Array.from({ length: 10 }, (_, c) => (
        <circle key={`${r}-${c}`} cx={20 + c * 40} cy={20 + r * 36} r="1.5"
          fill={BL} fillOpacity="0.18" />
      ))
    )}

    {/* large credit card */}
    <rect x="50" y="70" width="220" height="140" rx="16" fill={B} />
    {/* card shine */}
    <rect x="50" y="70" width="220" height="140" rx="16"
      fill="url(#cg)" fillOpacity="0.4" />
    <defs>
      <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="white" stopOpacity="0.3" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* orange chip */}
    <rect x="80" y="105" width="40" height="32" rx="6" fill={O} />
    <line x1="80"  y1="121" x2="120" y2="121" stroke={OD} strokeWidth="1.5" />
    <line x1="96"  y1="105" x2="96"  y2="137" stroke={OD} strokeWidth="1.5" />
    <line x1="104" y1="105" x2="104" y2="137" stroke={OD} strokeWidth="1.5" />
    {/* card number */}
    <text x="80"  y="175" fontSize="10" fontFamily="monospace" fill={BL} letterSpacing="2">•••• •••• •••• 4242</text>
    {/* card label */}
    <text x="80"  y="195" fontSize="8"  fontFamily="monospace" fill={BL} fillOpacity="0.6">WENTHURA CARD</text>
    {/* contactless logo */}
    {[10, 16, 22].map((r, i) => (
      <path key={i}
        d={`M ${220 - r} ${100} A ${r} ${r} 0 0 1 ${220 - r} ${118}`}
        stroke="white" strokeWidth="2" strokeOpacity={0.4 + i * 0.2}
        fill="none" strokeLinecap="round" />
    ))}

    {/* NFC orange arcs */}
    {[30, 44, 58].map((r, i) => (
      <path key={i}
        d={`M ${286} ${130} A ${r} ${r} 0 0 1 ${286 + r * 0.6} ${130 - r * 0.8}`}
        stroke={O} strokeWidth="2.5" strokeOpacity={0.35 + i * 0.2}
        fill="none" strokeLinecap="round" />
    ))}

    {/* phone outline */}
    <rect x="306" y="60" width="70" height="120" rx="12" fill="none" stroke={BL} strokeWidth="2" strokeOpacity="0.5" />
    <rect x="320" y="75" width="42" height="70" rx="4" fill={B} fillOpacity="0.4" />
    {/* screen content lines */}
    <rect x="326" y="82" width="30" height="5" rx="2" fill={BL} fillOpacity="0.5" />
    <rect x="326" y="94" width="22" height="5" rx="2" fill={OL} fillOpacity="0.5" />
    <text x="341" y="125" fontSize="10" fontWeight="bold" fontFamily="system-ui" fill={BL} textAnchor="middle">$0.00</text>
    <rect x="314" y="164" width="44" height="6" rx="3" fill={BL} fillOpacity="0.3" />

    {/* secure badge */}
    <rect x="40" y="232" width="120" height="30" rx="8" fill="white" fillOpacity="0.07" stroke={BL} strokeWidth="1" strokeOpacity="0.3" />
    <text x="100" y="252" fontSize="9" fontFamily="monospace" fill={BL} textAnchor="middle" letterSpacing="1">PCI-DSS SECURED</text>
  </Ill>
);

// ── 8. GrowthChart — Digital Lending, Business Transformation ────────────────
export const GrowthChart: FC<IllProps> = ({ className }) => (
  <Ill className={className}>
    <rect width="400" height="280" fill="white" />
    {/* horizontal grid */}
    {[60, 120, 180, 240].map((y) => (
      <line key={y} x1="60" y1={y} x2="390" y2={y} stroke="#F1F5F9" strokeWidth="1" />
    ))}
    {/* y-axis labels */}
    {[240, 180, 120, 60].map((y, i) => (
      <text key={y} x="52" y={y + 4} fontSize="9" fontFamily="monospace" fill="#94A3B8" textAnchor="end">
        {i * 25}K
      </text>
    ))}

    {/* blue bars */}
    {[
      [80,  100, 140],
      [138, 80,  160],
      [196, 120, 120],
      [254, 60,  180],
      [312, 40,  200],
    ].map(([x, h, y], i) => (
      <rect key={i} x={x} y={y} width="36" height={h} rx="4"
        fill={B} fillOpacity={0.18 + i * 0.06} />
    ))}

    {/* orange trend line */}
    <path
      d="M98 210 L156 185 L214 170 L272 140 L330 108"
      stroke={O} strokeWidth="3" fill="none" strokeLinejoin="round" strokeLinecap="round"
    />
    {/* trend points */}
    {[
      [98, 210], [156, 185], [214, 170], [272, 140], [330, 108],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="5" fill={O} stroke="white" strokeWidth="2" />
    ))}

    {/* up arrow indicator */}
    <circle cx="358" cy="80" r="22" fill={O} fillOpacity="0.1" stroke={O} strokeWidth="1.5" />
    <path d="M348 88 L358 68 L368 88" fill={O} />
    <line x1="358" y1="68" x2="358" y2="96" stroke={O} strokeWidth="2.5" strokeLinecap="round" />

    {/* coin circles */}
    <circle cx="80"  cy="50" r="22" fill={OB} stroke={O} strokeWidth="2" />
    <text x="80"  y="56" fontSize="16" textAnchor="middle" fill={O}>$</text>
    <circle cx="136" cy="50" r="16" fill={BB} stroke={B} strokeWidth="1.5" />
    <text x="136" y="55" fontSize="11" textAnchor="middle" fill={B}>$</text>
    <circle cx="180" cy="50" r="12" fill={OB} stroke={OL} strokeWidth="1.5" />
    <text x="180" y="55" fontSize="9" textAnchor="middle" fill={OD}>$</text>

    {/* label */}
    <text x="230" y="30" fontSize="11" fontWeight="bold" fontFamily="system-ui" fill={BD}>Revenue Growth</text>
    <text x="230" y="48" fontSize="9" fontFamily="monospace" fill="#64748B">+38% YoY</text>
  </Ill>
);

// ── 9. CloudInfra — Managed Services, Bespoke, Digital Transformation ─────────
export const CloudInfra: FC<IllProps> = ({ className }) => (
  <Ill className={className}>
    <rect width="400" height="280" fill={BG} />
    {/* dot pattern */}
    {Array.from({ length: 5 }, (_, r) =>
      Array.from({ length: 8 }, (_, c) => (
        <circle key={`${r}-${c}`} cx={30 + c * 48} cy={30 + r * 50} r="1.5" fill={B} fillOpacity="0.12" />
      ))
    )}

    {/* cloud shape */}
    <path
      d="M80 170 Q60 170 60 150 Q60 132 78 130 Q76 108 96 104 Q108 86 130 90 Q140 76 162 80 Q190 68 210 90 Q236 88 246 110 Q262 112 264 130 Q278 132 278 150 Q278 170 260 170 Z"
      fill="white" stroke={B} strokeWidth="2.5"
    />

    {/* server rack inside cloud */}
    <rect x="108" y="120" width="120" height="12" rx="3" fill={O} fillOpacity="0.8" />
    <rect x="108" y="136" width="120" height="12" rx="3" fill={B} fillOpacity="0.6" />
    <rect x="108" y="152" width="120" height="12" rx="3" fill={O} fillOpacity="0.5" />
    {/* server LED dots */}
    {[0, 1, 2].map((row) =>
      [0, 1].map((col) => (
        <circle key={`${row}-${col}`}
          cx={220 + col * 7} cy={126 + row * 16}
          r="2.5"
          fill={row % 2 === 0 ? O : B}
          fillOpacity="0.9"
        />
      ))
    )}

    {/* monitor screen */}
    <rect x="290" y="80" width="90" height="70" rx="8" fill={BD} />
    <rect x="298" y="88" width="74" height="50" rx="4" fill="white" fillOpacity="0.05" />
    {/* screen bars */}
    <rect x="304" y="96"  width="40" height="5" rx="2" fill={OL} fillOpacity="0.7" />
    <rect x="304" y="108" width="55" height="5" rx="2" fill={BL} fillOpacity="0.5" />
    <rect x="304" y="120" width="30" height="5" rx="2" fill={OL} fillOpacity="0.5" />
    <rect x="304" y="132" width="50" height="5" rx="2" fill={BL} fillOpacity="0.4" />
    {/* monitor stand */}
    <rect x="328" y="150" width="14" height="14" rx="0" fill={BD} />
    <rect x="318" y="162" width="34" height="6"  rx="3" fill={BD} />

    {/* connection lines cloud → monitor */}
    <line x1="278" y1="136" x2="290" y2="118" stroke={B} strokeWidth="1.5" strokeDasharray="5 3" />

    {/* node cluster bottom */}
    {[
      [60, 230, B],
      [130, 245, O],
      [200, 235, B],
      [270, 248, O],
      [340, 230, B],
    ].map(([cx, cy, fill], i) => (
      <g key={i}>
        {i < 4 && (
          <line
            x1={cx as number} y1={cy as number}
            x2={[130,200,270,340][i] as number} y2={[245,235,248,230][i] as number}
            stroke={fill as string} strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.5"
          />
        )}
        <circle cx={cx as number} cy={cy as number} r="12" fill={fill as string} fillOpacity="0.15" stroke={fill as string} strokeWidth="1.5" />
        <circle cx={cx as number} cy={cy as number} r="5"  fill={fill as string} />
      </g>
    ))}
  </Ill>
);

// ── 10. DocumentStack — Document Mgmt, Engineering, Bespoke ──────────────────
export const DocumentStack: FC<IllProps> = ({ className }) => (
  <Ill className={className}>
    <rect width="400" height="280" fill="white" />
    <rect width="400" height="280" fill={BG} fillOpacity="0.5" />

    {/* stacked documents (back to front) */}
    <rect x="180" y="80" width="150" height="180" rx="10" fill={BB} stroke={B} strokeWidth="1.5" transform="rotate(-8 255 170)" />
    <rect x="170" y="75" width="150" height="180" rx="10" fill={BB} stroke={B} strokeWidth="1.5" transform="rotate(-3 245 165)" />
    {/* front document */}
    <rect x="80" y="60" width="160" height="200" rx="10" fill="white" stroke={B} strokeWidth="2" />
    {/* doc header */}
    <rect x="80" y="60" width="160" height="36" rx="10" fill={B} />
    <rect x="80" y="82" width="160" height="14" fill={B} />
    <text x="160" y="84" fontSize="10" fontFamily="monospace" fill="white" textAnchor="middle" letterSpacing="1">DOCUMENT</text>
    {/* doc lines */}
    <rect x="96" y="112" width="128" height="7" rx="3" fill={BB} />
    <rect x="96" y="127" width="100" height="7" rx="3" fill={BB} />
    <rect x="96" y="142" width="118" height="7" rx="3" fill={BB} />
    <rect x="96" y="157" width="80"  height="7" rx="3" fill={OL} fillOpacity="0.7" />
    <rect x="96" y="172" width="128" height="7" rx="3" fill={BB} />
    <rect x="96" y="187" width="90"  height="7" rx="3" fill={BB} />
    {/* orange folder tab */}
    <rect x="96" y="218" width="60" height="28" rx="5" fill={O} fillOpacity="0.15" stroke={O} strokeWidth="1.5" />
    <rect x="96" y="218" width="38" height="10" rx="3" fill={O} fillOpacity="0.4" />

    {/* code brackets right */}
    <text x="290" y="130" fontSize="52" fontFamily="monospace" fill={B} fillOpacity="0.15">{`{`}</text>
    <text x="308" y="178" fontSize="52" fontFamily="monospace" fill={B} fillOpacity="0.15">{`}`}</text>
    {/* code lines */}
    <rect x="296" y="140" width="60" height="5" rx="2" fill={O} fillOpacity="0.4" />
    <rect x="304" y="152" width="48" height="5" rx="2" fill={BL} fillOpacity="0.5" />
    <rect x="296" y="164" width="52" height="5" rx="2" fill={O} fillOpacity="0.3" />

    {/* magnify glass */}
    <circle cx="330" cy="210" r="22" fill="none" stroke={B} strokeWidth="2.5" />
    <circle cx="330" cy="210" r="14" fill={BB} fillOpacity="0.5" />
    <line x1="346" y1="226" x2="362" y2="244" stroke={B} strokeWidth="3" strokeLinecap="round" />
    {/* search highlight */}
    <rect x="320" y="205" width="20" height="5" rx="2" fill={O} fillOpacity="0.7" />
  </Ill>
);

// ── Mosaic Tiles ──────────────────────────────────────────────────────────────

// Tile A — large: financial data viz
export const MosaicTileData: FC<IllProps> = ({ className }) => (
  <Ill vb="0 0 600 400" className={className}>
    <rect width="600" height="400" fill={BD} />
    {/* grid */}
    {[80,160,240,320].map((y) => (
      <line key={y} x1="0" y1={y} x2="600" y2={y} stroke={BL} strokeWidth="0.5" strokeOpacity="0.2" />
    ))}
    {[100,200,300,400,500].map((x) => (
      <line key={x} x1={x} y1="0" x2={x} y2="400" stroke={BL} strokeWidth="0.5" strokeOpacity="0.2" />
    ))}
    {/* area fill */}
    <path
      d="M0 300 L80 250 L160 270 L240 200 L320 220 L400 160 L480 130 L560 100 L600 90 L600 400 L0 400 Z"
      fill={B} fillOpacity="0.25"
    />
    <path
      d="M0 300 L80 250 L160 270 L240 200 L320 220 L400 160 L480 130 L560 100 L600 90"
      stroke={B} strokeWidth="3" fill="none"
    />
    {/* orange area */}
    <path
      d="M0 360 L100 320 L200 340 L300 290 L400 310 L500 260 L600 240 L600 400 L0 400 Z"
      fill={O} fillOpacity="0.15"
    />
    <path
      d="M0 360 L100 320 L200 340 L300 290 L400 310 L500 260 L600 240"
      stroke={O} strokeWidth="2" fill="none"
    />
    {/* data points */}
    {[[80,250],[240,200],[400,160],[560,100]].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="6" fill={BL} stroke="white" strokeWidth="2" />
    ))}
    {/* floating cards */}
    <rect x="30" y="24" width="160" height="80" rx="12" fill="white" fillOpacity="0.08" stroke={BL} strokeWidth="1" strokeOpacity="0.3" />
    <text x="46" y="48" fontSize="9" fontFamily="monospace" fill={BL} letterSpacing="1">TRANSACTIONS</text>
    <text x="46" y="76" fontSize="26" fontWeight="bold" fontFamily="system-ui" fill="white">2.8M</text>
    <rect x="210" y="24" width="140" height="80" rx="12" fill={O} fillOpacity="0.15" stroke={OL} strokeWidth="1" strokeOpacity="0.4" />
    <text x="226" y="48" fontSize="9" fontFamily="monospace" fill={OL} letterSpacing="1">VOLUME</text>
    <text x="226" y="76" fontSize="26" fontWeight="bold" fontFamily="system-ui" fill={OL}>$4.2B</text>
  </Ill>
);

// Tile B — circuits / network
export const MosaicTileNetwork: FC<IllProps> = ({ className }) => (
  <Ill vb="0 0 400 280" className={className}>
    <rect width="400" height="280" fill={B} />
    {/* circuit lines */}
    {[
      "M20 140 L100 140 L100 80 L200 80",
      "M200 80 L200 140 L300 140 L300 60 L380 60",
      "M100 140 L100 200 L200 200",
      "M200 200 L300 200 L300 140",
      "M200 140 L200 200",
      "M60 60 L100 60 L100 80",
      "M300 200 L380 200",
    ].map((d, i) => (
      <path key={i} d={d} stroke={BL} strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
    ))}
    {/* nodes */}
    {[
      [100, 80,  B, BL],
      [200, 80,  O, OL],
      [300, 140, B, BL],
      [100, 140, B, BL],
      [200, 200, O, OL],
      [300, 200, B, BL],
      [60,  60,  B, BL],
      [380, 60,  O, OL],
      [380, 200, B, BL],
    ].map(([cx,cy,f,s], i) => (
      <g key={i}>
        <circle cx={cx as number} cy={cy as number} r="14" fill={f as string} fillOpacity="0.2" stroke={s as string} strokeWidth="1.5" />
        <circle cx={cx as number} cy={cy as number} r="6"  fill={f as string} />
      </g>
    ))}
    {/* center highlighted */}
    <circle cx="200" cy="140" r="28" fill={O} fillOpacity="0.15" stroke={O} strokeWidth="2" />
    <circle cx="200" cy="140" r="14" fill={O} />
    <circle cx="200" cy="140" r="6"  fill="white" />
  </Ill>
);

// Tile C — security shield
export const MosaicTileSecurity: FC<IllProps> = ({ className }) => (
  <Ill vb="0 0 400 280" className={className}>
    <rect width="400" height="280" fill="white" />
    {/* hex pattern bg */}
    {[
      [60,50],[130,50],[200,50],[270,50],[340,50],
      [25,106],[95,106],[165,106],[235,106],[305,106],[375,106],
      [60,162],[130,162],[200,162],[270,162],[340,162],
      [25,218],[95,218],[165,218],[235,218],[305,218],[375,218],
    ].map(([cx,cy],i) => (
      <polygon key={i}
        points={`${cx},${cy-20} ${cx+17},${cy-10} ${cx+17},${cy+10} ${cx},${cy+20} ${cx-17},${cy+10} ${cx-17},${cy-10}`}
        fill="none" stroke={BB} strokeWidth="1.5"
      />
    ))}
    {/* shield */}
    <path d="M200 40 Q200 20 220 20 Q270 20 270 40 L270 100 Q270 150 200 170 Q130 150 130 100 L130 40 Q130 20 180 20 Q200 20 200 40 Z"
      fill={B} fillOpacity="0.08" stroke={B} strokeWidth="2.5"
    />
    {/* inner shield */}
    <path d="M200 60 Q200 48 212 48 Q244 48 244 60 L244 98 Q244 128 200 142 Q156 128 156 98 L156 60 Q156 48 188 48 Q200 48 200 60 Z"
      fill={B} fillOpacity="0.2"
    />
    {/* lock icon */}
    <rect x="182" y="108" width="36" height="28" rx="6" fill={B} />
    <path d="M189 108 Q189 90 200 90 Q211 90 211 108" stroke={B} strokeWidth="3" fill="none" strokeLinecap="round" />
    <circle cx="200" cy="122" r="5" fill="white" />
    {/* orange ring */}
    <circle cx="200" cy="140" r="100" fill="none" stroke={O} strokeWidth="2" strokeDasharray="6 8" strokeOpacity="0.3" />
    {/* orange accent dots */}
    {[0,72,144,216,288].map((deg) => {
      const r = Math.PI * deg / 180;
      return (
        <circle key={deg}
          cx={200 + Math.cos(r) * 100} cy={140 + Math.sin(r) * 100}
          r="6" fill={O} fillOpacity="0.5"
        />
      );
    })}
  </Ill>
);

// Tile D — payment wave
export const MosaicTilePayment: FC<IllProps> = ({ className }) => (
  <Ill vb="0 0 400 280" className={className}>
    <rect width="400" height="280" fill={BD} />
    {/* wave layers */}
    <path d="M-20 200 Q50 160 120 200 Q190 240 260 200 Q330 160 420 200 L420 280 L-20 280 Z"
      fill={B} fillOpacity="0.4" />
    <path d="M-20 180 Q60 140 130 180 Q200 220 270 180 Q340 140 420 180 L420 280 L-20 280 Z"
      fill={O} fillOpacity="0.25" />
    <path d="M-20 220 Q70 190 140 220 Q210 250 280 220 Q350 190 420 220 L420 280 L-20 280 Z"
      fill={BL} fillOpacity="0.15" />
    {/* card */}
    <rect x="40" y="50" width="140" height="88" rx="12" fill={B} />
    <rect x="56" y="72" width="34" height="26" rx="4" fill={OL} fillOpacity="0.6" />
    <rect x="56" y="72" width="34" height="13" fill={OL} fillOpacity="0.4" />
    <text x="56" y="124" fontSize="8" fontFamily="monospace" fill={BL}>•••• •••• 4242</text>
    {/* terminal */}
    <rect x="224" y="40" width="80" height="110" rx="10" fill={O} />
    <rect x="234" y="52" width="60" height="40" rx="6" fill="white" fillOpacity="0.9" />
    <text x="264" y="76" fontSize="12" fontWeight="bold" fill={OD} fontFamily="system-ui" textAnchor="middle">PAY</text>
    {/* arrows */}
    <path d="M182 94 L222 76" stroke="white" strokeWidth="2" strokeDasharray="4 3" strokeOpacity="0.7" markerEnd="url(#wta)" />
    <defs>
      <marker id="wta" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 Z" fill="white" />
      </marker>
    </defs>
    {/* check */}
    <circle cx="344" cy="90" r="26" fill="white" fillOpacity="0.1" stroke={OL} strokeWidth="2" />
    <path d="M332 90 L342 100 L358 76" stroke={OL} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </Ill>
);

// Tile E — growth / rocket
export const MosaicTileGrowth: FC<IllProps> = ({ className }) => (
  <Ill vb="0 0 400 280" className={className}>
    <rect width="400" height="280" fill="white" />
    {/* axis */}
    <line x1="50" y1="30" x2="50"  y2="240" stroke="#E2E8F0" strokeWidth="1.5" />
    <line x1="50" y1="240" x2="380" y2="240" stroke="#E2E8F0" strokeWidth="1.5" />
    {/* grid */}
    {[80, 130, 180].map((y) => (
      <line key={y} x1="50" y1={y} x2="380" y2={y} stroke="#F1F5F9" strokeWidth="1" />
    ))}

    {/* blue bars */}
    {[
      [70,  160, 80],
      [130, 130, 110],
      [190, 100, 140],
      [250, 70,  170],
      [310, 50,  190],
    ].map(([x, y, h], i) => (
      <rect key={i} x={x} y={y} width="44" height={h} rx="5" fill={B} fillOpacity={0.12 + i * 0.07} />
    ))}

    {/* orange trend line (steep) */}
    <path
      d="M70 220 L150 190 L220 160 L290 120 L360 68"
      stroke={O} strokeWidth="3.5" fill="none" strokeLinejoin="round" strokeLinecap="round"
    />
    {/* glow under line */}
    <path
      d="M70 220 L150 190 L220 160 L290 120 L360 68 L380 60 L380 240 L50 240 Z"
      fill={O} fillOpacity="0.06"
    />
    {/* trend points */}
    {[[70,220],[150,190],[220,160],[290,120],[360,68]].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="5.5" fill={O} stroke="white" strokeWidth="2" />
    ))}
    {/* rocket */}
    <path d="M358 55 L372 40 L386 55 L372 70 Z" fill={O} />
    <circle cx="372" cy="55" r="6" fill={OD} />
    {/* flame */}
    <path d="M372 70 Q368 82 372 88 Q376 82 372 70 Z" fill={OL} fillOpacity="0.8" />

    {/* metric badge */}
    <rect x="260" y="30" width="110" height="50" rx="8" fill={BD} />
    <text x="315" y="52" fontSize="9" fontFamily="monospace" fill={BL} textAnchor="middle">YoY GROWTH</text>
    <text x="315" y="72" fontSize="16" fontWeight="bold" fontFamily="system-ui" fill="white" textAnchor="middle">+38%</text>
  </Ill>
);

// ── 11. DoodleNestIll — Early Learning Platform (amber · orange · green · blue) ─
export const DoodleNestIll: FC<IllProps> = ({ className }) => (
  <Ill className={className}>
    <defs>
      <linearGradient id="dn-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#FFFBEB" />
        <stop offset="100%" stopColor="#FFEDD5" />
      </linearGradient>
      <linearGradient id="dn-phone" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#FFF7ED" />
      </linearGradient>
      <linearGradient id="dn-ring" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#F97316" />
        <stop offset="100%" stopColor="#FBBF24" />
      </linearGradient>
      <filter id="dn-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#B45309" floodOpacity="0.12" />
      </filter>
    </defs>

    <rect width="400" height="280" fill="url(#dn-bg)" />
    {/* Playful confetti */}
    {[
      [40, 30, "#F97316"], [88, 22, "#FBBF24"], [360, 36, "#22C55E"],
      [310, 24, "#3B82F6"], [376, 76, "#F97316"], [28, 96, "#FBBF24"],
      [22, 200, "#22C55E"], [378, 220, "#3B82F6"], [368, 260, "#F97316"],
      [22, 254, "#FBBF24"],
    ].map(([x, y, c], i) => (
      <circle key={i} cx={x as number} cy={y as number} r={i % 2 ? 3 : 4} fill={c as string} fillOpacity="0.7" />
    ))}
    {/* squiggles */}
    <path d="M50 60 Q56 54 62 60 T74 60" stroke="#F97316" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M330 230 Q336 224 342 230 T354 230" stroke="#22C55E" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* stars */}
    <path d="M64 22 l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1 z" fill="#FBBF24" />
    <path d="M336 64 l1.6 4 4 .8 -3.2 2.4 .8 4 -3.2 -2.4 -3.2 2.4 .8 -4 -3.2 -2.4 4 -.8 z" fill="#F97316" />

    {/* Phone frame */}
    <g filter="url(#dn-shadow)">
      <rect x="120" y="32" width="164" height="222" rx="22" fill="#FED7AA" />
      <rect x="128" y="40" width="148" height="206" rx="16" fill="url(#dn-phone)" />
    </g>
    {/* notch */}
    <rect x="178" y="44" width="48" height="7" rx="3.5" fill="#FDBA74" />

    {/* App header */}
    <text x="140" y="72" fontSize="8" fontFamily="monospace" fill="#C2410C" letterSpacing="1.5">TODAY</text>
    <text x="140" y="90" fontSize="14" fontWeight="800" fontFamily="system-ui" fill="#1F2937">Hi, Emma! 👋</text>

    {/* Progress ring card */}
    <rect x="140" y="100" width="124" height="56" rx="12" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="1" />
    {/* ring */}
    <circle cx="166" cy="128" r="18" fill="none" stroke="#FED7AA" strokeWidth="4" />
    <circle
      cx="166" cy="128" r="18"
      fill="none" stroke="url(#dn-ring)" strokeWidth="4" strokeLinecap="round"
      strokeDasharray={`${2 * Math.PI * 18 * 0.78} ${2 * Math.PI * 18}`}
      transform="rotate(-90 166 128)"
    />
    <text x="166" y="132" fontSize="10" fontWeight="800" fontFamily="system-ui" fill="#C2410C" textAnchor="middle">78%</text>
    <text x="194" y="120" fontSize="8" fontFamily="monospace" fill="#94A3B8" letterSpacing="1">THIS WEEK</text>
    <text x="194" y="134" fontSize="11" fontWeight="700" fontFamily="system-ui" fill="#1F2937">Milestones</text>
    <text x="194" y="148" fontSize="8" fontFamily="monospace" fill="#16A34A">▲ 12 new</text>

    {/* Activity rows */}
    {[
      { y: 168, color: "#FBBF24", icon: "📖", label: "Reading",  time: "9:30 AM",  pct: 0.95 },
      { y: 196, color: "#22C55E", icon: "🎨", label: "Art time", time: "11:00 AM", pct: 0.60 },
      { y: 224, color: "#3B82F6", icon: "🧮", label: "Counting", time: "1:15 PM",  pct: 0.40 },
    ].map((a) => (
      <g key={a.y}>
        <rect x="140" y={a.y} width="124" height="22" rx="8" fill="white" stroke="#FED7AA" strokeWidth="0.8" />
        <circle cx="153" cy={a.y + 11} r="8" fill={a.color} fillOpacity="0.2" />
        <text x="153" y={a.y + 15} fontSize="9" textAnchor="middle">{a.icon}</text>
        <text x="166" y={a.y + 10} fontSize="8" fontWeight="700" fontFamily="system-ui" fill="#1F2937">{a.label}</text>
        <text x="166" y={a.y + 18} fontSize="6" fontFamily="monospace" fill="#94A3B8">{a.time}</text>
        <rect x="216" y={a.y + 9}  width="38" height="4" rx="2" fill="#FED7AA" fillOpacity="0.5" />
        <rect x="216" y={a.y + 9}  width={38 * a.pct} height="4" rx="2" fill={a.color} />
      </g>
    ))}

    {/* Left side: Milestone badge — floating */}
    <g filter="url(#dn-shadow)">
      <rect x="22" y="106" width="90" height="76" rx="16" fill="white" stroke="#FED7AA" strokeWidth="1" />
    </g>
    <circle cx="67" cy="140" r="22" fill="#FEF3C7" />
    <path d="M67 127 l2.8 7 7.4 .4 -5.8 4.6 2 7.2 -6.4 -4.2 -6.4 4.2 2 -7.2 -5.8 -4.6 7.4 -.4 z" fill="#F97316" />
    <text x="67" y="166" fontSize="7" fontFamily="monospace" fill="#92400E" textAnchor="middle" letterSpacing="1">MILESTONE</text>
    <text x="67" y="178" fontSize="9" fontWeight="800" fontFamily="system-ui" fill="#1F2937" textAnchor="middle">Alphabet!</text>

    {/* Right side: Parent message card */}
    <g filter="url(#dn-shadow)">
      <rect x="292" y="70" width="90" height="64" rx="14" fill="white" stroke="#FED7AA" strokeWidth="1" />
    </g>
    <circle cx="308" cy="86" r="8" fill="#22C55E" />
    <text x="308" y="90" fontSize="8" fontWeight="700" fontFamily="system-ui" fill="white" textAnchor="middle">M</text>
    <text x="322" y="84" fontSize="7" fontWeight="700" fontFamily="system-ui" fill="#1F2937">Ms. Ava</text>
    <text x="322" y="94" fontSize="5" fontFamily="monospace" fill="#94A3B8">Teacher</text>
    <rect x="300" y="102" width="74" height="4" rx="2" fill="#FEF3C7" />
    <rect x="300" y="110" width="56" height="4" rx="2" fill="#FEF3C7" />
    <rect x="300" y="118" width="64" height="4" rx="2" fill="#FEF3C7" />
    <circle cx="370" cy="124" r="5" fill="#F97316" />
    <text x="370" y="127" fontSize="6" fontFamily="monospace" fill="white" textAnchor="middle" fontWeight="700">3</text>

    {/* Right side: Attendance card */}
    <g filter="url(#dn-shadow)">
      <rect x="292" y="148" width="90" height="90" rx="14" fill="white" stroke="#FED7AA" strokeWidth="1" />
    </g>
    <text x="303" y="166" fontSize="7" fontFamily="monospace" fill="#94A3B8" letterSpacing="1">ATTENDANCE</text>
    <text x="303" y="186" fontSize="18" fontWeight="800" fontFamily="system-ui" fill="#F97316">24<tspan fontSize="10" fill="#94A3B8">/25</tspan></text>
    {/* weekly grid */}
    {[0,1,2,3,4,5,6].map((d) => (
      <rect key={d} x={303 + d * 10} y="200" width="7" height="12" rx="1.5"
        fill={d < 5 ? "#F97316" : d === 5 ? "#FBBF24" : "#FED7AA"} />
    ))}
    <text x="303" y="228" fontSize="6" fontFamily="monospace" fill="#94A3B8">M T W T F S S</text>
  </Ill>
);

// ── 12. AutoFlowIll — Automotive ERP (dark · orange) ─────────────────────────
export const AutoFlowIll: FC<IllProps> = ({ className }) => (
  <Ill className={className}>
    <defs>
      <linearGradient id="af-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#0B1020" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
      <linearGradient id="af-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="af-active" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#F97316" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="af-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor="#FB923C" />
        <stop offset="100%" stopColor="#F97316" />
      </linearGradient>
      <radialGradient id="af-glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%"   stopColor="#F97316" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
      </radialGradient>
      <filter id="af-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#000" floodOpacity="0.45" />
      </filter>
    </defs>

    <rect width="400" height="280" fill="url(#af-bg)" />
    {/* horizon glow */}
    <ellipse cx="200" cy="280" rx="240" ry="70" fill="url(#af-glow)" />

    {/* ambient grid */}
    {[40, 80, 120, 160, 200, 240].map((y) => (
      <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#F97316" strokeWidth="0.3" strokeOpacity="0.06" />
    ))}

    {/* Top bar — title + status chips */}
    <text x="20" y="28" fontSize="8" fontFamily="monospace" fill="#FB923C" letterSpacing="1.5">AUTOFLOW · OPS CONSOLE</text>
    <rect x="244" y="16" width="62" height="16" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="0.6" />
    <circle cx="253" cy="24" r="3" fill="#22C55E" />
    <text x="260" y="27" fontSize="7" fontFamily="monospace" fill="#94A3B8">12 ACTIVE</text>
    <rect x="312" y="16" width="68" height="16" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="0.6" />
    <circle cx="321" cy="24" r="3" fill="#FB923C" />
    <text x="328" y="27" fontSize="7" fontFamily="monospace" fill="#94A3B8">4 PENDING</text>

    {/* Top row — Revenue card + Gauge */}
    <g filter="url(#af-shadow)">
      <rect x="16" y="42" width="220" height="56" rx="10" fill="url(#af-card)" stroke="#334155" strokeWidth="0.8" />
    </g>
    <text x="28" y="58" fontSize="7" fontFamily="monospace" fill="#64748B" letterSpacing="1">TODAY · REVENUE</text>
    <text x="28" y="78" fontSize="18" fontWeight="800" fontFamily="system-ui" fill="#FFFFFF">$48,210</text>
    <rect x="102" y="66" width="54" height="14" rx="7" fill="#14532D" />
    <text x="129" y="76" fontSize="7" fontFamily="monospace" fontWeight="700" fill="#22C55E" textAnchor="middle">▲ +18%</text>
    {/* Sparkline */}
    <path
      d="M168 84 L176 78 L184 80 L192 72 L200 76 L208 66 L216 70 L224 58 L232 52"
      stroke="url(#af-line)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
    />
    <circle cx="232" cy="52" r="3" fill="#FB923C" />

    {/* Gauge card */}
    <g filter="url(#af-shadow)">
      <rect x="244" y="42" width="140" height="56" rx="10" fill="url(#af-card)" stroke="#334155" strokeWidth="0.8" />
    </g>
    <text x="256" y="58" fontSize="7" fontFamily="monospace" fill="#64748B" letterSpacing="1">BAY UTILISATION</text>
    {/* arc bg */}
    <path d="M260 92 A24 24 0 0 1 308 92" stroke="#1E293B" strokeWidth="6" fill="none" strokeLinecap="round" />
    {/* arc value — ~84% */}
    <path d="M260 92 A24 24 0 0 1 305 78" stroke="url(#af-active)" strokeWidth="6" fill="none" strokeLinecap="round" />
    <text x="284" y="90" fontSize="14" fontWeight="800" fontFamily="system-ui" fill="white" textAnchor="middle">84%</text>
    {/* right technician avatars */}
    <text x="324" y="62" fontSize="6" fontFamily="monospace" fill="#64748B" letterSpacing="1">ON DUTY</text>
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <circle cx={326 + i * 14} cy="78" r="8" fill="#1E293B" stroke="#F97316" strokeWidth="1" />
        <text x={326 + i * 14} y="82" fontSize="7" fontWeight="700" fontFamily="system-ui" fill="#FB923C" textAnchor="middle">
          {["JM", "RK", "SP", "AL"][i]}
        </text>
      </g>
    ))}

    {/* Kanban columns — Intake / In Service / Ready */}
    {[
      { x: 16,  title: "INTAKE",      count: 3, accent: "#64748B" },
      { x: 140, title: "IN SERVICE",  count: 5, accent: "#F97316" },
      { x: 264, title: "READY",       count: 4, accent: "#22C55E" },
    ].map((col) => (
      <g key={col.x}>
        <rect x={col.x} y="108" width="120" height="156" rx="10" fill="#0B1225" stroke="#1E293B" strokeWidth="0.8" />
        <text x={col.x + 10} y="124" fontSize="7" fontFamily="monospace" fill={col.accent} letterSpacing="1">{col.title}</text>
        <rect x={col.x + 94} y="115" width="18" height="12" rx="6" fill="#1E293B" />
        <text x={col.x + 103} y="124" fontSize="7" fontFamily="monospace" fontWeight="700" fill={col.accent} textAnchor="middle">{col.count}</text>
      </g>
    ))}

    {/* Intake cards */}
    {[
      { y: 134, plate: "CAA-7842", model: "Civic · Diagnostics" },
      { y: 172, plate: "NBR-2019", model: "Hilux · Oil change" },
      { y: 210, plate: "PCB-5501", model: "Swift · Brakes" },
    ].map((c) => (
      <g key={c.y}>
        <rect x="26" y={c.y} width="100" height="30" rx="6" fill="#0F172A" stroke="#334155" strokeWidth="0.6" />
        <rect x="30" y={c.y + 4} width="22" height="10" rx="2" fill="#1E293B" stroke="#64748B" strokeWidth="0.5" />
        <text x="41" y={c.y + 12} fontSize="5.5" fontFamily="monospace" fontWeight="700" fill="#94A3B8" textAnchor="middle">{c.plate.split("-")[0]}</text>
        <text x="30" y={c.y + 24} fontSize="6" fontFamily="monospace" fill="#64748B">{c.plate}</text>
        <text x="56" y={c.y + 12} fontSize="7" fontFamily="system-ui" fontWeight="600" fill="#CBD5E1">{c.model.split(" · ")[0]}</text>
        <text x="56" y={c.y + 22} fontSize="5.5" fontFamily="monospace" fill="#475569">{c.model.split(" · ")[1]}</text>
      </g>
    ))}

    {/* In Service cards — with progress + orange accent */}
    {[
      { y: 134, plate: "WP-1023", tech: "JM",  pct: 0.72, eta: "12m left" },
      { y: 172, plate: "CBB-884", tech: "RK", pct: 0.45, eta: "28m left" },
      { y: 210, plate: "KY-7719", tech: "SP", pct: 0.88, eta: "4m left"  },
    ].map((c) => (
      <g key={c.y}>
        <rect x="150" y={c.y} width="100" height="30" rx="6" fill="#1E293B" stroke="#F97316" strokeWidth="0.8" />
        <circle cx="161" cy={c.y + 11} r="7" fill="url(#af-active)" />
        <text x="161" y={c.y + 14} fontSize="6" fontFamily="system-ui" fontWeight="700" fill="white" textAnchor="middle">{c.tech}</text>
        <text x="172" y={c.y + 10} fontSize="7" fontFamily="system-ui" fontWeight="700" fill="white">{c.plate}</text>
        <text x="172" y={c.y + 18} fontSize="5.5" fontFamily="monospace" fill="#FB923C">{c.eta}</text>
        <rect x="172" y={c.y + 22} width="70" height="3" rx="1.5" fill="#0F172A" />
        <rect x="172" y={c.y + 22} width={70 * c.pct} height="3" rx="1.5" fill="url(#af-line)" />
      </g>
    ))}

    {/* Ready cards */}
    {[
      { y: 134, plate: "KL-8821", eta: "Awaiting pickup" },
      { y: 172, plate: "GF-4404", eta: "Customer notified" },
    ].map((c) => (
      <g key={c.y}>
        <rect x="274" y={c.y} width="100" height="30" rx="6" fill="#0F172A" stroke="#14532D" strokeWidth="0.8" />
        <circle cx="285" cy={c.y + 11} r="7" fill="#14532D" stroke="#22C55E" strokeWidth="0.8" />
        <path d={`M281 ${c.y + 11} L284 ${c.y + 14} L290 ${c.y + 8}`} stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="296" y={c.y + 10} fontSize="7" fontFamily="system-ui" fontWeight="700" fill="#E2E8F0">{c.plate}</text>
        <text x="296" y={c.y + 20} fontSize="5.5" fontFamily="monospace" fill="#64748B">{c.eta}</text>
      </g>
    ))}

    {/* Bottom strip — live activity */}
    <rect x="16" y="242" width="368" height="22" rx="8" fill="#0B1225" stroke="#1E293B" strokeWidth="0.6" />
    <circle cx="30" cy="253" r="3" fill="#22C55E">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <text x="40" y="256" fontSize="7" fontFamily="monospace" fill="#94A3B8">LIVE · KY-7719 oil service complete · Bay 03 now available</text>
    <text x="360" y="256" fontSize="7" fontFamily="monospace" fill="#FB923C" textAnchor="end">2s ago</text>
  </Ill>
);

// ── 13. NenaAIIll — AI Learning Platform (deep blue · white) ─────────────────
export const NenaAIIll: FC<IllProps> = ({ className }) => (
  <Ill className={className}>
    <defs>
      <radialGradient id="na-bg" cx="0.5" cy="0.4" r="0.9">
        <stop offset="0%"   stopColor="#1E3A8A" />
        <stop offset="55%"  stopColor="#0B1945" />
        <stop offset="100%" stopColor="#060B24" />
      </radialGradient>
      <linearGradient id="na-card" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#1E293B" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
      </linearGradient>
      <linearGradient id="na-ai" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#F97316" />
      </linearGradient>
      <linearGradient id="na-accent" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#FB923C" />
      </linearGradient>
      <filter id="na-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" />
      </filter>
      <filter id="na-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000000" floodOpacity="0.5" />
      </filter>
    </defs>

    <rect width="400" height="280" fill="url(#na-bg)" />

    {/* Orbital rings — atmospheric */}
    <ellipse cx="200" cy="140" rx="180" ry="60" fill="none" stroke="#3B82F6" strokeWidth="0.4" strokeOpacity="0.3" />
    <ellipse cx="200" cy="140" rx="140" ry="44" fill="none" stroke="#60A5FA" strokeWidth="0.4" strokeOpacity="0.25" />

    {/* Orb glow behind */}
    <circle cx="80" cy="90" r="50" fill="url(#na-ai)" fillOpacity="0.35" filter="url(#na-glow)" />

    {/* Stars / particles */}
    {[
      [30, 28, 1.5], [70, 40, 1], [120, 20, 2], [180, 36, 1],
      [260, 16, 1.5], [340, 30, 2], [380, 60, 1],
      [20, 100, 1], [380, 112, 2], [24, 240, 1.5], [360, 256, 1],
      [120, 260, 1], [300, 246, 1.5],
    ].map(([x, y, r], i) => (
      <circle key={i} cx={x as number} cy={y as number} r={r as number}
        fill={i % 3 === 0 ? "#FB923C" : "#93C5FD"} fillOpacity={0.5 + (i % 3) * 0.15} />
    ))}

    {/* AI Orb */}
    <circle cx="80" cy="90" r="36" fill="url(#na-card)" stroke="#3B82F6" strokeWidth="1" />
    <circle cx="80" cy="90" r="28" fill="none" stroke="#60A5FA" strokeWidth="0.6" strokeOpacity="0.5" strokeDasharray="3 3" />
    <circle cx="80" cy="90" r="18" fill="url(#na-ai)" fillOpacity="0.9" />
    <circle cx="74" cy="84" r="5" fill="white" fillOpacity="0.85" />
    <circle cx="88" cy="90" r="3" fill="white" fillOpacity="0.5" />

    {/* Chat panel */}
    <g filter="url(#na-shadow)">
      <rect x="128" y="30" width="244" height="186" rx="14" fill="url(#na-card)" stroke="#1E40AF" strokeWidth="1" strokeOpacity="0.6" />
    </g>
    {/* Chat header */}
    <circle cx="146" cy="48" r="5" fill="#22C55E" />
    <text x="156" y="52" fontSize="8" fontWeight="700" fontFamily="system-ui" fill="white">Nena AI Tutor</text>
    <text x="156" y="62" fontSize="6" fontFamily="monospace" fill="#60A5FA">● Online</text>
    <rect x="344" y="42" width="20" height="14" rx="7" fill="#3B82F6" fillOpacity="0.2" />
    <text x="354" y="51" fontSize="6" fontFamily="monospace" fill="#60A5FA" textAnchor="middle">API</text>

    {/* Divider */}
    <line x1="138" y1="72" x2="362" y2="72" stroke="#1E40AF" strokeWidth="0.8" strokeOpacity="0.4" />

    {/* Student message bubble (right-aligned) */}
    <rect x="216" y="82" width="140" height="30" rx="10" fill="#1E40AF" fillOpacity="0.5" />
    <text x="226" y="96" fontSize="8" fontFamily="system-ui" fill="#DBEAFE">Solve:  3x + 7 = 22</text>
    <text x="226" y="107" fontSize="6" fontFamily="monospace" fill="#60A5FA" fillOpacity="0.6">10:24 · you</text>

    {/* AI message bubble (left-aligned) */}
    <rect x="144" y="120" width="212" height="68" rx="10" fill="#0F172A" stroke="#1E40AF" strokeWidth="0.8" />
    <text x="154" y="134" fontSize="8" fontFamily="system-ui" fill="#E0E7FF">Subtract 7 from both sides:</text>
    <rect x="154" y="138" width="70" height="16" rx="4" fill="#1E293B" />
    <text x="160" y="149" fontSize="8" fontFamily="monospace" fill="#FB923C">3x = 15</text>
    <text x="154" y="166" fontSize="8" fontFamily="system-ui" fill="#E0E7FF">Divide by 3:</text>
    <rect x="216" y="156" width="58" height="16" rx="4" fill="#1E293B" />
    <text x="222" y="167" fontSize="8" fontWeight="700" fontFamily="monospace" fill="#22C55E">x = 5 ✓</text>
    {/* typing cursor */}
    <rect x="280" y="168" width="6" height="2" rx="1" fill="#60A5FA">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="1.2s" repeatCount="indefinite" />
    </rect>

    {/* Input bar */}
    <rect x="144" y="196" width="212" height="16" rx="8" fill="#0B1225" stroke="#1E40AF" strokeWidth="0.8" />
    <text x="152" y="206" fontSize="6" fontFamily="system-ui" fill="#475569">Ask a follow-up question…</text>
    <circle cx="346" cy="204" r="6" fill="url(#na-accent)" />
    <path d="M343 201 L349 204 L343 207 Z" fill="white" />

    {/* Mastery sidebar (left, under orb) */}
    <g filter="url(#na-shadow)">
      <rect x="14" y="148" width="100" height="102" rx="12" fill="url(#na-card)" stroke="#1E40AF" strokeWidth="0.8" />
    </g>
    <text x="26" y="166" fontSize="7" fontFamily="monospace" fill="#60A5FA" letterSpacing="1">MASTERY</text>
    {[
      { y: 178, label: "Algebra",   pct: 0.88, color: "#FB923C" },
      { y: 198, label: "Geometry",  pct: 0.64, color: "#60A5FA" },
      { y: 218, label: "Calculus",  pct: 0.42, color: "#A78BFA" },
    ].map((m) => (
      <g key={m.y}>
        <text x="26" y={m.y} fontSize="7" fontFamily="system-ui" fill="#CBD5E1">{m.label}</text>
        <text x="102" y={m.y} fontSize="7" fontFamily="monospace" fill="#94A3B8" textAnchor="end">{Math.round(m.pct * 100)}%</text>
        <rect x="26"  y={m.y + 4} width="76" height="3" rx="1.5" fill="#1E293B" />
        <rect x="26"  y={m.y + 4} width={76 * m.pct} height="3" rx="1.5" fill={m.color} />
      </g>
    ))}
    {/* streak */}
    <rect x="26" y="234" width="76" height="10" rx="5" fill="#F97316" fillOpacity="0.15" />
    <text x="64" y="242" fontSize="7" fontFamily="monospace" fill="#FB923C" textAnchor="middle">🔥 12 day streak</text>

    {/* Right side — Recommended card */}
    <g filter="url(#na-shadow)">
      <rect x="296" y="224" width="90" height="44" rx="10" fill="url(#na-card)" stroke="#1E40AF" strokeWidth="0.8" />
    </g>
    <circle cx="312" cy="246" r="9" fill="#3B82F6" fillOpacity="0.25" />
    <text x="312" y="250" fontSize="10" textAnchor="middle">💡</text>
    <text x="326" y="241" fontSize="7" fontWeight="700" fontFamily="system-ui" fill="#E0E7FF">Next lesson</text>
    <text x="326" y="253" fontSize="6" fontFamily="monospace" fill="#60A5FA">Quadratics · 8m</text>
  </Ill>
);

// ── Key map ───────────────────────────────────────────────────────────────────
const illustrationMap: Record<string, FC<IllProps>> = {
  "financial-dashboard": FinancialDashboard,
  "retail-commerce":     RetailCommerce,
  "industrial-flow":     IndustrialFlow,
  "data-network":        DataNetwork,
  "user-verification":   UserVerification,
  "payment-flow":        PaymentFlow,
  "digital-card":        DigitalCard,
  "growth-chart":        GrowthChart,
  "cloud-infra":         CloudInfra,
  "document-stack":      DocumentStack,
  "doodlenest":          DoodleNestIll,
  "autoflow":            AutoFlowIll,
  "nena-ai":             NenaAIIll,
};

export function getIllustration(key: string): FC<IllProps> {
  return illustrationMap[key] ?? DataNetwork;
}
