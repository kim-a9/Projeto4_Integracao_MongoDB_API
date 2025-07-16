import { Book } from '../entities/Book';
// import { BookRepository } from '../repository/BookRepository';
import { MongoBookRepository } from '../../infra/database/MongoBookRepository';


export class GetBookByID{
    constructor(private bookRepository: MongoBookRepository) {}

    async execute(id: string): Promise<Book | undefined> {

        const bookFound = await this.bookRepository.getByID(id);

        if(!bookFound) {
            throw new Error('Livro não encontrado');
        }
        return bookFound;
    }

    
}