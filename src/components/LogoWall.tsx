// Technology & fintech partners — real wordmark-style logos via inline SVG
type Partner = {
  name: string;
  title: string;
  color: string;
  svg: string;
};

const partners: Partner[] = [
  {
    name: "oracle",
    title: "Oracle",
    color: "#F80000",
    svg: `<svg viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Oracle"><text x="0" y="28" font-family="Arial,sans-serif" font-size="28" font-weight="700" fill="currentColor">ORACLE</text></svg>`,
  },
  {
    name: "microsoft",
    title: "Microsoft",
    color: "#00A4EF",
    svg: `<svg viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft"><rect x="0" y="0" width="13" height="13" fill="#F25022"/><rect x="15" y="0" width="13" height="13" fill="#7FBA00"/><rect x="0" y="15" width="13" height="13" fill="#00A4EF"/><rect x="15" y="15" width="13" height="13" fill="#FFB900"/><text x="34" y="22" font-family="'Segoe UI',Arial,sans-serif" font-size="17" font-weight="300" fill="currentColor">Microsoft</text></svg>`,
  },
  {
    name: "aws",
    title: "Amazon Web Services",
    color: "#FF9900",
    svg: `<svg viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AWS"><text x="0" y="26" font-family="'Amazon Ember',Arial,sans-serif" font-size="26" font-weight="700" fill="currentColor">aws</text><path d="M0 31 Q50 38 100 31" stroke="#FF9900" stroke-width="2.5" fill="none"/></svg>`,
  },
  {
    name: "sap",
    title: "SAP",
    color: "#0070D2",
    svg: `<svg viewBox="0 0 80 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SAP"><rect x="0" y="2" width="76" height="32" rx="4" fill="#0070D2"/><text x="38" y="24" font-family="Arial,sans-serif" font-size="22" font-weight="700" fill="white" text-anchor="middle">SAP</text></svg>`,
  },
  {
    name: "mastercard",
    title: "Mastercard",
    color: "#EB001B",
    svg: `<svg viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard"><circle cx="18" cy="18" r="16" fill="#EB001B"/><circle cx="38" cy="18" r="16" fill="#F79E1B" fill-opacity="0.85"/><text x="62" y="24" font-family="Arial,sans-serif" font-size="17" font-weight="600" fill="currentColor">mastercard</text></svg>`,
  },
  {
    name: "visa",
    title: "Visa",
    color: "#1A1F71",
    svg: `<svg viewBox="0 0 80 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Visa"><text x="0" y="30" font-family="Arial,sans-serif" font-size="36" font-weight="900" font-style="italic" fill="currentColor">VISA</text></svg>`,
  },
  {
    name: "temenos",
    title: "Temenos",
    color: "#E31937",
    svg: `<svg viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Temenos"><circle cx="8" cy="18" r="7" fill="#E31937"/><text x="22" y="25" font-family="Arial,sans-serif" font-size="22" font-weight="700" fill="currentColor">TEMENOS</text></svg>`,
  },
  {
    name: "fis",
    title: "FIS Global",
    color: "#009FDA",
    svg: `<svg viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="FIS Global"><text x="0" y="26" font-family="Arial,sans-serif" font-size="28" font-weight="800" fill="currentColor">FIS</text><text x="45" y="26" font-family="Arial,sans-serif" font-size="14" font-weight="400" fill="currentColor" opacity="0.7">Global</text></svg>`,
  },
  {
    name: "finastra",
    title: "Finastra",
    color: "#9B26B6",
    svg: `<svg viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Finastra"><path d="M4 18 L14 8 L14 28 Z" fill="#9B26B6"/><text x="22" y="25" font-family="Arial,sans-serif" font-size="21" font-weight="700" fill="currentColor">finastra</text></svg>`,
  },
  {
    name: "ncr",
    title: "NCR Voyix",
    color: "#E31937",
    svg: `<svg viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="NCR Voyix"><text x="0" y="27" font-family="Arial,sans-serif" font-size="28" font-weight="900" fill="currentColor">NCR</text><text x="58" y="27" font-family="Arial,sans-serif" font-size="14" font-weight="500" fill="currentColor" opacity="0.6">Voyix</text></svg>`,
  },
  {
    name: "verifone",
    title: "Verifone",
    color: "#003087",
    svg: `<svg viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Verifone"><text x="0" y="26" font-family="Arial,sans-serif" font-size="21" font-weight="700" fill="currentColor">verifone</text></svg>`,
  },
  {
    name: "ingenico",
    title: "Ingenico",
    color: "#E40046",
    svg: `<svg viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ingenico"><circle cx="8" cy="18" r="6" fill="#E40046"/><text x="20" y="25" font-family="Arial,sans-serif" font-size="20" font-weight="700" fill="currentColor">ingenico</text></svg>`,
  },
];

export function LogoWall() {
  return (
    <section className="bg-ink-900 py-16">
      <div className="container-p">
        <p className="mb-10 text-center font-mono text-[10px] uppercase tracking-[0.35em] text-ink-400">
          Trusted technology &amp; ecosystem partners
        </p>
        <div className="grid grid-cols-3 gap-px bg-ink-700/40 border border-ink-700/40 rounded-xl overflow-hidden sm:grid-cols-4 lg:grid-cols-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group relative flex h-24 items-center justify-center bg-white px-4 transition-all duration-300 hover:bg-glow/[0.03]"
              title={p.title}
            >
              <div
                className="w-full max-w-[110px] transition-all duration-300 text-ink-600/50 group-hover:text-ink-50 [&_text]:transition-colors [&_text]:duration-300"
                dangerouslySetInnerHTML={{ __html: p.svg }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
