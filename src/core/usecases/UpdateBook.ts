import { Book } from '../entities/Book';
import { BookRepository } from '../repository/BookRepository';

export class UpdateBook{
    constructor(private bookrepository: BookRepository) {}

    async execute(bookID: string, book: Book): Promise<void> {
        const bookFound = await this.bookrepository.getByID(bookID);
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