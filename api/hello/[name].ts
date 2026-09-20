export default async function handler(req: Request): Promise<Response> {
  // `req.url` may be absolute or relative depending on the deployment runtime,
  // so provide a base to guarantee `new URL(...)` never throws.
  const url = new URL(req.url, "http://localhost");
  const segments = url.pathname.split("/").filter(Boolean);
  const name = decodeURIComponent(segments[segments.length - 1] ?? "world");

  return Response.json({
    message: `Hello, ${name}!`,
  });
}
