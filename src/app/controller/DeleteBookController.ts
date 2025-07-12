import { Request, Response } from 'express';
import { BookRepository } from '../../core/repository/BookRepository';
import { DeleteBook } from '../../core/usecases/DeleteBook';

export class DeleteBookController{
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const delBook = DeleteBook(BookRepository);
            await delBook.execute(id);
            return res.status(200).send();
        } catch (e) {
            return res.status(400).json({ error: e});
        }


    }

}