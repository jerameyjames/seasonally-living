# Stitch integration (Seasonally Living)

This site is structured so **Stitch** can own the visual refresh while routes and copy stay in Next.js.

## Active project (wired)

| Field | Value |
|-------|--------|
| Title | Seasonally Living |
| Project resource name | `projects/13771544954940531085` |
| Numeric `projectId` | `13771544954940531085` |
| Design system | **Cascadia Refined** |
| `assetId` (for `stitch__apply_design_system`, no `assets/` prefix) | `6269b0f19bc94dc5960be1285e8f62af` |

Canonical constants: `src/lib/stitch.ts`.

## MCP tools (user-mcpx)

| Step | Tool | Notes |
|------|------|--------|
| Fetch project | `stitch__get_project` | `name`: `projects/{id}` |
| List design systems | `stitch__list_design_systems` | `projectId`: numeric id |
| Apply system to screens | `stitch__apply_design_system` | Needs `assetId`, `projectId`, `selectedScreenInstances` from project |

Use **`get_project`** output (`screenInstances`, `designTheme`, etc.) to decide which screens to align to which routes:

| Suggested Stitch screen | App route |
|-------------------------|-----------|
| Home | `/` |
| Showroom | `/showroom` |
| Hot tubs | `/hot-tubs` |
| Fireplaces | `/fireplaces` |
| Outdoor kitchens | `/outdoor-kitchens` |
| Contact | `/contact` |
| Book | `/book` |

## Wiring tokens into code

1. Prefer mapping Stitch **named colors / typography** → existing **`--sl-*`** variables in `src/app/globals.css` (keeps components stable).
2. For raw DTCG or extra tokens, extend `src/styles/stitch-tokens.css` (imported from `globals.css`).
3. Shared chrome: `SiteHeader`, `SiteFooter`, and `PageShell` — adjust these first when a new system lands.

## Repo env (optional)

- `STITCH_PROJECT_ID` — `13771544954940531085` (humans/agents; not required at runtime).
- `STITCH_DESIGN_SYSTEM_ASSET_ID` — `6269b0f19bc94dc5960be1285e8f62af` (optional; for MCP scripts).
