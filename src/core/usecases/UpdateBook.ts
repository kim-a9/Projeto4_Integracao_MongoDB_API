import { Book } from '../entities/Book';
import { BookRepository } from '../repository/BookRepository';
// import { MongoBookRepository } from '../../infra/database/MongoBookRepository';

interface IUpdateBook{
    title?: string;
    author?: string;
    genre?: string;
}

export class UpdateBook{
    constructor(private bookrepository: BookRepository) {}

    async execute(id: string, data: IUpdateBook) {
        const bookFound = await this.bookrepository.getByID(id);

        if(!bookFound) {
            throw new Error('Não foi possível localizar o livro');
        }

        if(data.title) bookFound.title = data.title;
        if(data.author) bookFound.author = data.author;
        if(data.genre) bookFound.genre = data.genre;

        await this.bookrepository.updateBook(id, bookFound);
        return bookFound;

    };

};