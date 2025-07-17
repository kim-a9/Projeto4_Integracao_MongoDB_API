import express from 'express';
// import chalk from 'chalk';
import { bookRoutes } from '../../app/routes/book.routes';
import { connectToMongo } from '../database/mongoConnect';


const app = express();
app.use(express.json());

app.use("/", bookRoutes);
// app.use('/books', bookRoutes);

connectToMongo();


export default app;