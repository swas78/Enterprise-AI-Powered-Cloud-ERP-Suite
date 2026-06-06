# Contributing to Amdox ERP

Welcome to the Amdox ERP project! Thank you for contributing.

## 🛠️ Development Guidelines
1.  **Branching Pattern**: Always create feature branches from `main` (e.g. `feat/ap-invoice-matching`).
2.  **Linting & Styles**: Conform strictly to ESLint rules and Prettier formats before submitting PRs.
3.  **Compilation & Build**: Ensure that the backend builds successfully with:
    ```bash
    npm run build --prefix backend
    ```
4.  **Verification**: Write integration test suites and verify that the entire test pipeline runs cleanly:
    ```bash
    npm run test:backend
    ```
