import express from "express";
import "dotenv/config";
import AppConfig from "./configs/AppConfig.js";
import path from "path";
import UseRoute from "./routes/index.js";
import { fileURLToPath } from "url";
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

AppConfig(app, __dirname);

UseRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
