// Shared palette and constants for 3D scenes.
// Matches the Tailwind tokens used across the site (dark navy theme).
export const PALETTE = {
  // Backgrounds / surfaces — dark navy
  bg:          "#020A16",   // deepest background
  surface:     "#04101C",   // section background

  // Ink tokens (dark-themed)
  ink950: "#020A16",   // page background
  ink900: "#04101C",   // section background
  ink800: "#071528",   // card background
  ink50:  "#EEF2FF",   // near-white headings

  // Blue accent scale
  glow:     "#3B82F6",   // blue-500 primary accent
  glowSoft: "#93C5FD",   // blue-300 soft
  ember:    "#60A5FA",   // blue-400 mid accent
  ember700: "#1D4ED8",   // blue-700 deep accent

  // Orange for CTA accents only
  orange:     "#F97316",
  orangeSoft: "#FB923C",
} as const;

export const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;
