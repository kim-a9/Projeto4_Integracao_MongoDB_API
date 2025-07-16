import { Book } from '../entities/Book';
// import { BookRepository } from '../repository/BookRepository';
import { MongoBookRepository } from '../../infra/database/MongoBookRepository';


export class UpdateBook{
    constructor(private bookrepository: MongoBookRepository) {}

    async execute(id: string, book: Book): Promise<void> {
        const bookFound = await this.bookrepository.getByID(id);
        if(!bookFound) {
            throw new Error('Não foi possível localizar o livro');
        } else {
            bookFound.title = book.title;
            bookFound.author = book.author;
            bookFound.genre = book.genre;

            await this.bookrepository.updateBook(bookFound);
        };

    };

};