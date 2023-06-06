import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser"
import mongoose from "mongoose";

import customerController from "./controllers/customerController";
import deviceController from "./controllers/deviceController";
import usageControllers from "./controllers/usageControllers";

mongoose.connect("mongodb+srv://robinnoormets:ZdVTS7Mulz65qEVu@cluster0.kpte1ay.mongodb.net");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app: Express = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', customerController)
app.use('/', deviceController)
app.use('/', usageControllers)

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});