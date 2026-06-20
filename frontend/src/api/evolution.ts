import { get, post, stream } from "./client";
import type { Agent, Lineage, BacktestResult } from "./types";

export const startEvolve = (cfg: { generations: number; population: number; dataset: string }) =>
  post<{ jobId: string }>(`/api/evolve`, cfg);
export const streamEvolve = (jobId: string, onGen: (g: any) => void) =>
  stream(`/api/evolve/${jobId}/stream`, onGen);
export const getFingerprint = (agentId: string) =>
  post<{ genes: Agent["genes"] }>(`/api/fingerprint`, { agentId });
export const runBacktest = (req: { agentId: string; dataset: string; from: string; to: string; walkForward: boolean }) =>
  post<BacktestResult>(`/api/backtest`, req);
export const runValidate = (agentId: string) =>
  post<{ overfitScore: number; robust: boolean; windows: { train: number; test: number }[] }>(`/api/validate`, { agentId });
export const runTournament = (agentIds: string[]) => post(`/api/tournament`, { agentIds });
export const listAgents = () => get<Agent[]>(`/api/agents`);
export const saveAgent = (agent: Partial<Agent> & { name: string }) => post<Agent>(`/api/agents`, agent);
export const getLineage = (agentId: string) => get<Lineage>(`/api/agents/${agentId}/lineage`);
export const trainAgent = (agentId: string, onEpisode: (e: any) => void) => stream(`/api/agents/${agentId}/train`, onEpisode);
