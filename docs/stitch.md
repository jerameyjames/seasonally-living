# Stitch integration (Seasonally Living)

This site is structured so **Stitch** can own the visual refresh while routes and copy stay in Next.js.

## What to send next

- **Stitch project resource name** in the form `projects/{numericId}` (same ID works with MCP as `{numericId}` only for some tools — follow the tool schema).

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

- `STITCH_PROJECT_ID` — document the active project id for humans/agents (not required for runtime).
