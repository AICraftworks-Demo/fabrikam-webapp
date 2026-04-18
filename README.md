# Fabrikam Web App

React/Next.js customer portal demonstrating multi-agent coordination via [AgentCraftworks](https://github.com/AgentCraftworks/AgentCraftworks-CE).

## Agent Governance — 5 Agents, Rate Governor Managed

5 AI agents share this repo's review bandwidth, managed by the AgentCraftworks Rate Governor:

| Agent | Priority | Scope | Engagement Level |
|-------|----------|-------|-----------------|
| `security-review-agent` | **P0 Critical** | `src/auth/`, `src/api/auth/` | L3 (Peer Programmer) |
| `ui-review-agent` | P1 High | `src/components/`, `src/pages/` | L3 |
| `backend-review-agent` | P1 High | `src/api/` | L3 |
| `test-coverage-agent` | P2 Background | `tests/` | L2 (Advisor) |
| `docs-agent` | P2 Background | `docs/`, `*.md` | L2 |

The Rate Governor ensures P0 security reviews always get through even when the GitHub API
is under load — P2 agents are throttled first, keeping critical security gates fast.

## Getting Started

```bash
npm install
npm run dev       # Next.js dev server on localhost:3000
npm test
npm run build
```
