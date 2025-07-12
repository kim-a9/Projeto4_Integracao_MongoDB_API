import { Book } from '../entities/Book';
import { BookRepository } from '../repository/BookRepository';

export class DeleteBook{
    constructor(private bookRepository: BookRepository) {}

    async execute(bookID: string): Promise<void> {
        const delBook = await this.bookRepository.getByID(bookID);
        if(!delBook) {
            throw new Error('Não foi possível localizar o livro');
        }
        await this.bookRepository.delete(bookID); 

    }

}