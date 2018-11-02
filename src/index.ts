import * as express from "express";
import * as path from "path";

import { Log } from "./log";

const app: express.Application = express();

app.use(
  express.static(
    path.resolve(
      process.cwd(),
      "static",
    ),
  ),
);

app.get("/", (req: express.Request, res: any) => {
  Log.write(`${req.method} ${res.statusCode} ${req.url} – ${req.ip} ${req.get("user-agent")}`);
  res.sendFile(`${process.cwd()}/views/index.html`);
});

export { app as Server };
