# Bun + React starter

<p align="center">
  <a href="https://bun-peach-alpha.vercel.app"><img src="https://img.shields.io/badge/Live_Demo-bun--peach--alpha.vercel.app-FFB000?style=for-the-badge&logo=bun&logoColor=black" alt="Live demo"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.3-61DAFB?style=flat-square&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Bun-1.4-FFB000?style=flat-square&logo=bun&logoColor=black"/>
  <img src="https://img.shields.io/badge/TypeScript-7-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vercel-Hosted-000000?style=flat-square&logo=vercel&logoColor=white"/>
</p>

## Overview

A minimal React 19 application powered entirely by Bun — runtime, dev server, package manager and bundler in one tool. Use it as a starting point for a fast, low-overhead SPA.

**Live:** https://bun-peach-alpha.vercel.app

## Why Bun here

- `bun --hot` gives instant reloads on the server side
- `bun build` produces a minified browser bundle with source maps in a single step
- No separate bundler, transpiler or test runner configuration to maintain

## Getting started

Install [Bun](https://bun.sh) 1.4+, then:

```bash
bun install
bun run dev
```

## Scripts

| Command | Description |
|---|---|
| `bun run dev` | Dev server with hot reload (`bun --hot src/server.ts`) |
| `bun run build` | Bundle `src/index.html` into `dist/` for production |
| `bun run start` | Serve the production build |

## Project structure

```
src/        Application entry, server and components
vercel.json Production hosting configuration
tsconfig.json TypeScript project settings
```

## License

MIT
