import { Request,  Response } from 'express';
import { bookRepository } from '../../core/repository/BookRepository';
import { CreateBook } from '../../core/usecases/CreateBook';

export class CreateBookController{
    async handle(req: Request, res: Response): Promise<Response>{
        const { title, author, genre } = req.body;

        try {
            const createBook = new CreateBook(bookRepository);
            const book = await CreateBook.execute({ title, author, genre });
            res.status(201).json(book);
        } catch (e) {
            return res.status(400).json({ error: e})
        }

    }
}
