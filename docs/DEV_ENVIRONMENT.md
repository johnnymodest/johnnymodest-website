# Dev Environment Setup

## First time

1. Clone the repo and open in VS Code
2. VS Code will prompt "Reopen in Container" — click it
3. Wait for the container to build (~3–5 min first time)
4. Edit `~/free-claude-code/.env` inside the container and replace `your-api-key-here` with your real OpenRouter key
5. Run `bash .devcontainer/postStart.sh` to start the proxy
6. Run `claude` in the terminal — it should connect through the proxy

## Every time after that

Container starts automatically, proxy starts automatically.

## Useful commands

```bash
# Check proxy is running
curl http://localhost:8082/v1/models

# Watch proxy logs
tail -f ~/free-claude-code-proxy.log

# Start dev server
npm run dev

# Run Claude Code
claude
```

## Project structure

```
johnnymodest/
├── .devcontainer/          ← container config (commit this)
├── src/
│   └── app/               ← Next.js app router
├── content/               ← MDX case studies and copy
├── public/                ← static assets
├── docs/                  ← brief, notes, reference
└── package.json
```

## Choosing a different AI provider

Edit `~/free-claude-code/.env` inside the container.
See `.devcontainer/free-claude-code.env.example` for options.
The config lives inside the container only — never committed to the repo.