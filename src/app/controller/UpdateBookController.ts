import { Request, Response } from 'express';
// import { BookRepository } from '../../core/repository/BookRepository';
import { MongoBookRepository } from '../../infra/database/MongoBookRepository';
import { UpdateBook } from '../../core/usecases/UpdateBook';

export class UpdateBookController{
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const book = req.body;

        try {
            const updateBook = new UpdateBook(new MongoBookRepository());
            await updateBook.execute(id, book);
            return res.status(200).json({ message: 'Livro atualizado com sucesso' });
        } catch (e) {
            return res.status(400).json({ error: e});
        }

    }


}