# Agent Governance — Fabrikam Web App

## Rate Governor Priority Map

The AgentCraftworks Rate Governor assigns priorities based on CODEOWNERS:

| Priority | Zone | Agents | Behavior |
|----------|------|--------|----------|
| P0 Critical | GREEN | security-review-agent | Never throttled |
| P1 High | GREEN/AMBER | ui-review-agent, backend-review-agent | Throttled when RED |
| P2 Background | AMBER/RED | test-coverage-agent, docs-agent | First to be throttled |

When the Traffic Light shows AMBER, P2 agents pause. When RED, P1 agents pause too.
P0 security reviews always proceed regardless of traffic zone.

## Engagement Level Caps

| Environment | Max Level | Permitted Actions |
|------------|-----------|------------------|
| production | L3 | View, comment, label, suggest edits |
| staging | L4 | + Merge PRs, close issues |
| dev | L5 | + Deploy, modify CI |
