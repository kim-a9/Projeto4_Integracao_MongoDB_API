import { Router } from 'express';
const router = Router();

import { CreateBookController } from '../controller/CreateBookController';
import { GetAllBooksController } from '../controller/GetAllBooksController';
import { GetBookByIDController } from '../controller/GetBookByIDController';
import { UpdateBookController } from '../controller/UpdateBookController';
import { DeleteBookController } from '../controller/DeleteBookController';

const createBookController = new CreateBookController();
const getAllBooksController = new GetAllBooksController();
const getBookController = new GetBookByIDController();
const updateBookController = new UpdateBookController();
const deleteBookController = new DeleteBookController();

router.post('/books', async (req, res) => {
    await createBookController.handle(req, res); 
});

router.get("/", async (req, res) => {
    await getAllBooksController.handle(req, res);
});

router.get('/books/:id', async (req, res) => {
    await getBookController.handle(req, res);
});

router.patch('/books/:id', async (req, res) => {
    await updateBookController.handle(req, res);
});

router.delete('/books/:id', async (req, res) => {
    await deleteBookController.handle(req, res);
});









export {router as bookRoutes};