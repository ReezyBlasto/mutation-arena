// useLineage — wraps getLineage with loading/result state.
import { useCallback, useEffect, useState } from "react";
import { getLineage } from "@/api/evolution";
import type { Lineage } from "@/api/types";

export function useLineage(agentId: string | null | undefined) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Lineage | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchLineage = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const r = await getLineage(id);
      setResult(r);
      return r;
    } catch (e: any) {
      setError(String(e?.message || e));
      setResult(null);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (agentId) fetchLineage(agentId);
    else setResult(null);
  }, [agentId, fetchLineage]);

  return { loading, result, error, refetch: fetchLineage };
}