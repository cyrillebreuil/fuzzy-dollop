import express from "express";
const app = express();

import "dotenv/config";

import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/app/views") )

import {router} from "./app/routers/router.js"
import { notFound, errorHandler } from "./app/middlewares/errorHandlers.js";

app.use(router);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, ()=>{
    console.log(`serveur lancé sur le port : ${process.env.PORT}`)
});