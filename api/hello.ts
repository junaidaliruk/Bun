export default async function handler(req: Request): Promise<Response> {
  return Response.json({
    message: "Hello, world!",
    method: req.method,
  });
}