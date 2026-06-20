// useKrakenStore.ts — minimal market/account UI slice.
// FloorScreen reads tickers/positions via useFloorData (not this store),
// so keep this thin: watchlist + paper balance mirror.
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface KrakenState {
  watchlist: string[];
  setWatchlist: (pairs: string[]) => void;
  paperBalance: number;
  setPaperBalance: (v: number) => void;
}

const DEFAULT_WATCHLIST = ["BTCUSD", "ETHUSD", "SOLUSD", "AVAXUSD", "LINKUSD"];

export const useKrakenStore = create<KrakenState>()(
  persist(
    (set) => ({
      watchlist: DEFAULT_WATCHLIST,
      setWatchlist: (watchlist) => set({ watchlist }),
      paperBalance: 0,
      setPaperBalance: (paperBalance) => set({ paperBalance }),
    }),
    {
      name: "ma.kraken",
      version: 1,
      // only the watchlist is user state worth persisting
      partialize: (s) => ({ watchlist: s.watchlist }),
    }
  )
);