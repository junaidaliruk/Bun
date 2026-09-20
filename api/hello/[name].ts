// Vercel serverless function (Node.js runtime) for the dynamic `/api/hello/:name` route.
// Vercel passes path parameters in `req.query` for the `[name].ts` file convention.
export default function handler(req: any, res: any) {
  const { name } = req.query ?? {};

  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      message: `Hello, ${name ?? "world"}!`,
    }),
  );
}