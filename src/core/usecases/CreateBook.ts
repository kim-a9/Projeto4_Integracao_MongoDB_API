import { Book } from '../entities/Book';
import { BookRepository } from '../repository/BookRepository';

export interface ICreateBook{
    title: string;
    author: string;
    genre: string;
    bookID: string;

}

export class CreateBook {
    constructor(private bookRepository: BookRepository) {}

    async execute(data: ICreateBook): Promise<Book> {
        if (!data.title) {
            throw new Error('Insira um título para o livro.');
        }
        const book = new Book(
            data.title,
            data.author,
            data.genre,
            data.bookID
        );

        await this.bookRepository.createBook(book);
        return book;
    }
}