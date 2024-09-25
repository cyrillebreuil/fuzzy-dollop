import express from "express";
const app = express();

import "dotenv/config";

import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

import { initUserSession } from "./app/middlewares/initUserSession.js";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/app/views"));
app.use(express.static(path.join(__dirname, "assets")));

app.use(express.json());

import {router} from "./app/routers/router.js"
import { notFound, errorHandler } from "./app/middlewares/errorHandlers.js";


app.use(initUserSession);

app.use(router);

app.use(notFound);
app.use(errorHandler);

// COMMIT TEST

app.listen(process.env.PORT, ()=>{
    console.log(`serveur lancé sur ${process.env.BASE_URL}:${process.env.PORT}`)
});