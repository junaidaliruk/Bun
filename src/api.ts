/**
 * API routes shared by both runtimes:
 * - Locally, `src/server.ts` (Bun) delegates `/api/*` requests here.
 * - On Vercel, this file is deployed as a serverless function (wired up in `vercel.json`).
 *
 * The handler uses the native Web `Request`/`Response` API, so the exact same
 * code runs unchanged in both environments.
 */
export function handleApi(request: Request): Response {
  const { pathname } = new URL(request.url);

  // GET/PUT /api/hello/:name
  const match = pathname.match(/^\/api\/hello\/(.+)$/);
  if (match) {
    const name = decodeURIComponent(match[1] ?? "");
    return Response.json({ message: `Hello, ${name}!` });
  }

  // GET/PUT /api/hello
  if (pathname === "/api/hello") {
    return Response.json({
      message: "Hello, world!",
      method: request.method,
    });
  }

  return Response.json({ error: "Not found" }, { status: 404 });
}

/** Default export consumed by Vercel's serverless runtime. */
export default {
  fetch(request: Request): Response {
    return handleApi(request);
  },
};