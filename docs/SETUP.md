# Setup Guide - Amdox Enterprise ERP

This document outlines instructions for setting up the local development workspace of the Amdox ERP system.

## 🛠️ Prerequisites
*   **Node.js**: v20.x or higher
*   **Docker & Docker Compose**: v2.x or higher
*   **Redis**: Local or docker container
*   **MongoDB**: v6.x or higher (configured as a replica set)

## 🚀 Get Started

1.  **Clone and install dependencies**:
    ```bash
    npm install
    ```
2.  **Environment Variables setup**:
    Copy `.env.example` to `.env` in root and `backend/`. Configure database urls and ports.
3.  **Boot environment components**:
    ```bash
    docker-compose up -d
    ```
4.  **Seed Database baseline data**:
    ```bash
    npm run seed --prefix backend
    ```
5.  **Run Development workspace**:
    ```bash
    npm run dev --prefix backend
    ```
