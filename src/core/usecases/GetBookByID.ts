import { Book } from '../entities/Book';
import { BookRepository } from '../repository/BookRepository';

export class GetBookByID{
    constructor(private bookRepository: BookRepository) {}

    async execute(bookID: string): Promise<Book | undefined> {

        const bookFound = await this.bookRepository.findByID(bookID);

        if(!bookFound) {
            throw new Error('Livro não encontrado');
        }
        return bookFound;
    }

    
}