import express  from "express";
import morgan from 'morgan';
import { Signale } from 'signale';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from "dotenv";
import { HistoryRouter } from "./History/infrastructure/route/HistoryRouter";
dotenv.config();

const port: string | undefined = process.env.PORT;
const app = express();
const sigoptions = {
    secrets: ["([0-9]{4}-?)+"]
}
const signale = new Signale(sigoptions);

app.use(cors());
app.use(helmet.hidePoweredBy())
app.use(express.json());
app.use(morgan("dev"));

app.use("/history", HistoryRouter);

app.listen(port, ()=>{
    signale.success("server running in port: "+port)
})