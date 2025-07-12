import { Request, Response } from 'express';
import { bookRepository } from '../../core/repository/BookRepository';
import { GetBookByID } from '../../core/usecases/GetBookByID';


export class GetBookByIDController{
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        try {
            const getBook = new GetBookByID(bookRepository);
            const book = await getBook.execute(id);
            return res.status(201).json(book);
        } catch (e) {
            return res.status(400).json({ error: e});
        }
    }



}
