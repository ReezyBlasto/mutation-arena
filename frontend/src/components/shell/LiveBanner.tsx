import { useUiStore } from "@/store/useUiStore";

// LiveBanner — only renders in live mode. Red striped warning fixture.
export function LiveBanner() {
  const live = useUiStore((s) => s.tradeMode === "live");
  if (!live) return null;
  return (
    <div style={{
      flex: "none",
      background: "repeating-linear-gradient(45deg,#2B0A10,#2B0A10 10px,#380f18 10px,#380f18 20px)",
      borderBottom: "1px solid var(--sell-500)",
      padding: "5px 22px", display: "flex", alignItems: "center", gap: 9,
      animation: "liveband 1s linear infinite",
    }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--sell-500)", animation: "blink 1s infinite" }} />
      <span className="mono" style={{ fontSize: 10, letterSpacing: 2, color: "var(--sell-400)", fontWeight: 600 }}>
        LIVE TRADING — REAL FUNDS AT RISK
      </span>
    </div>
  );
}
