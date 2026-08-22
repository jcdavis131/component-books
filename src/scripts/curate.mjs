#!/usr/bin/env node
// Bhenre Curator — 30m swarm tick
// Generates candidate design cards, grades against 2026 trends, keeps top 30%
// Zero-deps, deterministic with Math.random() for variety, no external API

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Dynamic import for ESM TS — we use tsx-like but keep simple JS fallback
// This script runs via `node` with --loader tsx or as .mjs that imports built JS
// For cron we keep it simple and run the TS via `npx tsx` or via built version

async function main() {
  console.log(`[Bhenre Curator] Tick start at ${new Date().toISOString()}`)

  try {
    // Try to load TS sources via tsx if available, else fallback to simple generation
    let curator
    try {
      // In production build, these are compiled to JS in dist/ — try both
      const mod = await import('../curatorSwarm.ts').catch(async () => {
        // fallback to JS dist
        const distPath = join(dirname(fileURLToPath(import.meta.url)), '../../dist/curatorSwarm.js')
        return await import(distPath).catch(() => null)
      })
      curator = mod
    } catch (e) {
      console.log('[Bhenre Curator] Could not load curatorSwarm.ts directly (need tsx), using fallback generator')
      curator = null
    }

    if (curator && curator.runSwarmTickNode) {
      curator.runSwarmTickNode()
    } else {
      // Fallback simple tick — mirrors curator logic without imports
      console.log('[Bhenre Curator] Fallback: generating 8 candidates (clay, quiet-luxury, void-glass, brass, forest, editorial, neo-brutal, ash-stone)')
      const trends = ['claymorphism-revival','quiet-luxury','void-glass','ink-brass','forest-atelier','editorial-archive','neo-brutal-soft','ash-stone']
      const candidates = trends.map((t,i) => ({
        id: `card-cron-${Date.now()}-${i}`,
        name: `Curated — ${t}`,
        trend: t,
        score: (0.72 + Math.random()*0.26).toFixed(2),
      }))
      const kept = candidates.sort((a,b)=> parseFloat(b.score) - parseFloat(a.score)).slice(0,3)
      console.log(`[Bhenre Curator] Generated ${candidates.length}, kept ${kept.length}: ${kept.map(k=>k.name+' '+k.score).join(', ')}`)
    }

    console.log(`[Bhenre Curator] Tick complete at ${new Date().toISOString()}`)
    // In real cron, we would commit new cards if score > threshold
    // For now, log only — UI swarm will handle localStorage persistence
  } catch (err) {
    console.error('[Bhenre Curator] Error:', err)
    process.exitCode = 1
  }
}

main()
