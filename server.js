import http from 'node:http';

// Answers on $PORT on every interface. Kairo injects PORT=3000; the
// Dockerfile's 8080 is only the fallback when run on its own.
const port = Number(process.env.PORT) || 8080;

export function handler(req, res) {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ ok: true, app: 'dockerfile-sample', path: req.url }));
}

if (process.argv[1] && import.meta.url === `file://${process.argv[1]}`) {
  http.createServer(handler).listen(port, '0.0.0.0', () => console.log(`listening on :${port}`));
}
