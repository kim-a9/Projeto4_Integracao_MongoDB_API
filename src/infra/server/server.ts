import express from 'express';
import chalk from 'chalk';
import { connectToMongo } from '../database/mongoConnect';


const app = express();
app.use(express.json());

connectToMongo();


export default app;