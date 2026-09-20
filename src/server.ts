import { serve } from "bun";
import index from "./index.html";
import { handleApi } from "./api";

const server = serve({
  routes: {
    // All API routes are handled by the shared, runtime-agnostic handler.
    "/api/*": req => handleApi(req),

    // Serve index.html for all unmatched routes.
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);