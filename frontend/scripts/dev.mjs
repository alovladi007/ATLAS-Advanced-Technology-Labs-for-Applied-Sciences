import net from "node:net";
import { spawn } from "node:child_process";

function isPortFree(port, host = "127.0.0.1") {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.unref();
    server.on("error", () => resolve(false));
    server.listen({ port, host }, () => {
      server.close(() => resolve(true));
    });
  });
}

async function pickPort(candidates) {
  for (const port of candidates) {
    // eslint-disable-next-line no-await-in-loop
    if (await isPortFree(port)) return port;
  }
  return null;
}

async function main() {
  const explicit =
    process.env.FRONTEND_PORT || process.env.PORT || process.env.NEXT_PORT;
  const candidates = [
    explicit ? Number(explicit) : null,
    3001, // matches README
    4001, // previous default
    3000,
    5173,
    4173,
    8081,
  ].filter((v) => Number.isInteger(v) && v > 0);

  const port = await pickPort(candidates);
  if (!port) {
    // eslint-disable-next-line no-console
    console.error(
      `No free port found. Tried: ${candidates.join(
        ", "
      )}. Set FRONTEND_PORT to an available port.`
    );
    process.exit(1);
  }

  // eslint-disable-next-line no-console
  console.log(`Starting Next.js dev server on port ${port}...`);
  // eslint-disable-next-line no-console
  console.log(
    `Override with: FRONTEND_PORT=1234 npm run dev (or PORT=1234)`
  );

  const npx = process.platform === "win32" ? "npx.cmd" : "npx";
  const child = spawn(
    npx,
    ["--no-install", "next", "dev", "-p", String(port)],
    {
      stdio: "inherit",
      env: { ...process.env, PORT: String(port) },
    }
  );

  child.on("exit", (code) => process.exit(code ?? 0));
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});

