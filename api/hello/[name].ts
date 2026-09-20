export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const segments = url.pathname.split("/").filter(Boolean);
  const name = segments[segments.length - 1] ?? "world";

  return Response.json({
    message: `Hello, ${name}!`,
  });
}