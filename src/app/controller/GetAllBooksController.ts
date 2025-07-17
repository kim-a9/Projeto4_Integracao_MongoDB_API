import { Request, Response } from 'express';
import { GetAllBooks } from '../../core/usecases/GetAllBooks';
import { MongoBookRepository } from '../../infra/database/MongoBookRepository';

export class GetAllBooksController {
    async handle(req: Request, res: Response) {
        const bookRepository = new MongoBookRepository();
        const getAllBooks = new GetAllBooks(bookRepository);
        const books = await getAllBooks.execute();
        return res.status(200).json(books);
    }
}