import type { CSSProperties, ReactNode } from "react";

// Panel — the signature raised gradient card. Reused on every screen.
const panelStyle: CSSProperties = {
  background: "linear-gradient(180deg, var(--bg-3), var(--bg-2))",
  border: "1px solid var(--line-3)",
  borderRadius: 12,
  boxShadow:
    "0 0 0 1px rgba(0,0,0,.4), 0 20px 44px -12px rgba(0,0,0,.85), inset 0 1px 0 rgba(255,255,255,.08), inset 0 -18px 30px -22px rgba(0,0,0,.65)",
};

export function Panel({
  children, style, className, padded = true,
}: { children: ReactNode; style?: CSSProperties; className?: string; padded?: boolean }) {
  return (
    <div
      className={className}
      style={{
        ...panelStyle,
        ...(padded ? { padding: "12px 14px" } : null),
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
