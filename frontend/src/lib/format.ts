// format.ts — number/string formatters shared across screens.

export const fmtUsd = (v: number): string =>
  "$" + Math.round(v).toLocaleString("en-US");

export const fmtUsdCents = (v: number): string =>
  "$" + v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const fmtPct = (v: number, digits = 1): string =>
  (v >= 0 ? "+" : "") + v.toFixed(digits) + "%";

export const fmtSigned = (v: number): string =>
  (v >= 0 ? "+" : "−") + fmtUsd(Math.abs(v));

export const clamp = (v: number, a: number, b: number): number =>
  Math.max(a, Math.min(b, v));
