import { useUiStore, type Tab } from "@/store/useUiStore";

const TABS: { id: Tab; label: string }[] = [
  { id: "arena", label: "Arena" },
  { id: "strategy", label: "Strategy Room" },
  { id: "floor", label: "Trading Floor" },
  { id: "evolved", label: "Evolved" },
];

export function NavTabs() {
  const tab = useUiStore((s) => s.tab);
  const setTab = useUiStore((s) => s.setTab);
  return (
    <nav style={{ display: "flex", gap: 3 }}>
      {TABS.map((t) => {
        const active = t.id === tab;
        return (
          <div
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              cursor: "pointer", padding: "8px 14px", borderRadius: 9,
              fontSize: 13, fontWeight: 500,
              background: active ? "var(--brand-100)" : "transparent",
              color: active ? "var(--brand-300)" : "var(--fg-2)",
            }}
          >
            {t.label}
          </div>
        );
      })}
    </nav>
  );
}
