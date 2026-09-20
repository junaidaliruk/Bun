// Vercel serverless function (Node.js runtime).
// Runs on Vercel where the handler signature is Node-style (req, res),
// unlike the local Bun `serve()` server which uses Web Request/Response.
export default function handler(req: any, res: any) {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      message: "Hello, world!",
      method: req.method,
    }),
  );
}