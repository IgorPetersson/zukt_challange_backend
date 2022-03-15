import "reflect-metadata"
import app from "./app";
import { connectDatabase } from "./database/database";

connectDatabase()

app.listen(3000, () => {
    console.log("Running")
})




