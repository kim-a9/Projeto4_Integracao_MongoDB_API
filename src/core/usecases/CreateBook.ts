import { Book } from '../entities/Book';
import { BookRepository } from '../repository/BookRepository';

export interface ICreateBook{
    title: string;
    author: string;
    genre: string;
}

export class CreateBook {
    constructor(private bookRepository: BookRepository) {}

    async execute(newBook:ICreateBook): Promise<Book> {
        if (!newBook.title) {
            throw new Error('Insira um título para o livro.');
        }
        const createdBook = new Book(
            newBook.title,
            newBook.author,
            newBook.genre,
        );

        await this.bookRepository.save(createdBook);
        return createdBook;
    }
}