export const getApiDocsHtml = (): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Amdox ERP - Interactive API Docs</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;600;800&display=swap" rel="stylesheet">
  
  <style>
    :root {
      --bg-primary: #0b0f19;
      --bg-secondary: #131a2b;
      --bg-tertiary: #1b253b;
      --text-primary: #f3f4f6;
      --text-secondary: #9ca3af;
      --accent-indigo: #6366f1;
      --accent-cyan: #06b6d4;
      --accent-success: #10b981;
      --border-color: rgba(255, 255, 255, 0.06);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg-primary);
      color: var(--text-primary);
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
    }

    header {
      background: rgba(19, 26, 43, 0.8);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-color);
      padding: 1.5rem 2rem;
      position: sticky;
      top: 0;
      z-index: 10;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      font-family: 'Outfit', sans-serif;
      font-weight: 800;
      font-size: 1.8rem;
      background: linear-gradient(135deg, var(--accent-indigo), var(--accent-cyan));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 0 1rem;
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 2rem;
    }

    aside {
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.5rem;
      height: fit-content;
      position: sticky;
      top: 100px;
    }

    aside h3 {
      font-family: 'Outfit', sans-serif;
      margin-bottom: 1rem;
      font-size: 1rem;
      color: var(--accent-cyan);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    aside ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    aside a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.2s ease;
      display: block;
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
    }

    aside a:hover, aside a.active {
      color: #white;
      background: rgba(99, 102, 241, 0.1);
      border-left: 3px solid var(--accent-indigo);
      padding-left: 0.6rem;
    }

    main {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .card {
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    }

    .card h2 {
      font-family: 'Outfit', sans-serif;
      margin-bottom: 1rem;
      font-size: 1.4rem;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 0.5rem;
    }

    .endpoint {
      margin-top: 1.5rem;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      overflow: hidden;
    }

    .endpoint-header {
      background: rgba(255, 255, 255, 0.02);
      padding: 0.8rem 1.2rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      border-bottom: 1px solid var(--border-color);
    }

    .method {
      font-size: 0.75rem;
      font-weight: 800;
      padding: 0.25rem 0.6rem;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .method.post { background: rgba(16, 185, 129, 0.15); color: var(--accent-success); }
    .method.get { background: rgba(6, 182, 212, 0.15); color: var(--accent-cyan); }
    .method.put { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }
    .method.delete { background: rgba(239, 68, 68, 0.15); color: #ef4444; }

    .path {
      font-family: monospace;
      font-size: 0.95rem;
      font-weight: 600;
    }

    .endpoint-body {
      padding: 1.2rem;
      background: rgba(0,0,0,0.1);
    }

    .desc {
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .section-title {
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--accent-cyan);
      margin-bottom: 0.5rem;
      letter-spacing: 0.05em;
    }

    pre {
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 1rem;
      font-family: monospace;
      font-size: 0.85rem;
      overflow-x: auto;
      color: #a78bfa;
    }

    .badge {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 600;
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      background: rgba(99, 102, 241, 0.15);
      color: var(--accent-indigo);
      border: 1px solid rgba(99, 102, 241, 0.2);
    }
  </style>
</head>
<body>

  <header>
    <h1>Amdox ERP API Gateway Docs</h1>
    <span class="badge">API Version: v1</span>
  </header>

  <div class="container">
    <aside>
      <h3>Endooints</h3>
      <ul>
        <li><a href="#auth" class="active">Authentication</a></li>
        <li><a href="#finance">General Ledger</a></li>
        <li><a href="#hr">HR & Employees</a></li>
        <li><a href="#health">Health Diagnostics</a></li>
      </ul>
    </aside>

    <main>
      <!-- Auth Card -->
      <div id="auth" class="card">
        <h2>Auth Module (/api/v1/auth)</h2>
        <p class="desc">SaaS authentication endpoints. Leverages JWT with rotate blacklists in Redis.</p>

        <!-- Register -->
        <div class="endpoint">
          <div class="endpoint-header">
            <span class="method post">POST</span>
            <span class="path">/register</span>
          </div>
          <div class="endpoint-body">
            <p class="desc">Registers a new tenant organization and sets up an Administrator user.</p>
            <p class="section-title">Request Body Structure</p>
            <pre>
{
  "name": "Sarah Connor",
  "email": "sarah@cyberdyne.com",
  "password": "securepassword123",
  "tenantName": "Cyberdyne Systems",
  "role": "TenantAdmin"
}</pre>
          </div>
        </div>

        <!-- Login -->
        <div class="endpoint">
          <div class="endpoint-header">
            <span class="method post">POST</span>
            <span class="path">/login</span>
          </div>
          <div class="endpoint-body">
            <p class="desc">Authenticates user email and password credentials, returning JWT access & refresh tokens.</p>
            <p class="section-title">Response Schema</p>
            <pre>
{
  "status": "success",
  "data": {
    "accessToken": "eyJhbGciOi...",
    "refreshToken": "eyJhbGciOi...",
    "user": {
      "name": "Sarah Connor",
      "email": "sarah@cyberdyne.com",
      "role": "TenantAdmin"
    }
  }
}</pre>
          </div>
        </div>
      </div>

      <!-- Health Card -->
      <div id="health" class="card">
        <h2>Health Check & Diagnostics</h2>
        <p class="desc">Platform system diagnostic and readiness hooks.</p>

        <div class="endpoint">
          <div class="endpoint-header">
            <span class="method get">GET</span>
            <span class="path">/health/ready</span>
          </div>
          <div class="endpoint-body">
            <p class="desc">Ready check that evaluates database connection states and Redis accessibility before routing traffic.</p>
            <p class="section-title">Success Response (200 OK)</p>
            <pre>
{
  "status": "READY",
  "timestamp": "2026-06-01T05:27:00Z",
  "services": {
    "database": "UP",
    "cache": "UP"
  }
}</pre>
          </div>
        </div>
      </div>
    </main>
  </div>

</body>
</html>
  `;
};
