import express from "express";
import { routesApp } from "./routes";
import { handleError } from "./utils/error";

const app = express();

routesApp(app)

app.use((err: any, req: any, res: any, next: any) => {
    handleError(err, res)
})

app.use(express.json())

export default app;