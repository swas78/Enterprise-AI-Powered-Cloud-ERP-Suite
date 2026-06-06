# ADR-001: Selection of Workspace Monorepo Structure

## Status
Accepted

## Context
The Amdox ERP system represents an integrated corporate SaaS composed of a React front-end single-page application, an Express.js API gateway backend, and a Python FastAPI forecasting service.
Maintaining distinct separate git repositories for each tier introduces high operational complexity, makes cross-boundary types synchronization difficult, and fragments local developer environments.

## Decision
We select a **Workspace-based Monorepo structure** (using standard `npm` or `pnpm` workspaces) to group our packages:
```
amdox-erp/
├── frontend/        # React + Vite client
├── backend/         # Express + TypeScript server
└── package.json     # Root workspaces orchestrator
```

## Consequences
### Positive
*   **Single Codebase**: Simplifies tracking and coordinate updates across client-server lines.
*   **Dependency Management**: Common developer packages (eslint, prettier, concurrently) are resolved once at the root directory level.
*   **Local Developer Experience**: A single command (`npm run dev`) concurrently fires up all service workspaces locally.
*   **Unified Type System**: Types can be shared, reducing sync bugs.

### Negative
*   **Cluttered node_modules**: The root directory gathers dependencies of all sub-projects.
*   **Build Scale**: Builds and lint scripts must be isolated to prevent clean builds of unrelated workspaces.
