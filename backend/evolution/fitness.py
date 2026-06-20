"""Fitness — rule-based (not LLM) for speed."""
from __future__ import annotations
import math
from evolution.backtest import run as backtest_run
from evolution.genome import Genome

def _sigmoid(x: float) -> float:
    if x >= 0:
        z = math.exp(-x)
        return 1.0 / (1.0 + z)
    z = math.exp(x)
    return z / (1.0 + z)

async def fitness(genome: Genome, candles: list[dict]) -> float:
    if not candles or len(candles) < 60:
        return 0.0
    result = backtest_run(genome, candles, walk_forward=False)
    ret = result.model_dump(by_alias=True)["return"]
    score = 0.5 * _sigmoid(ret * 5.0) + 0.3 * _sigmoid(result.sharpe) + 0.2 * result.winRate
    return max(0.0, min(1.0, score))
