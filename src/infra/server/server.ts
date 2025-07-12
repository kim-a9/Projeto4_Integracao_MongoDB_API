import express from 'express';
import chalk from 'chalk';
import { connectToMongo } from '../database/mongoConnect';
// import {getAllBooks} from '../src/app/controller';

const app = express();
app.use(express.json());

connectToMongo();

// app.use('/books', getAllBooks);

export default app;