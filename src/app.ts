import express from "express";
import { routesApp } from "./routes";

const app = express();

routesApp(app)

app.use(express.json())

export default app;