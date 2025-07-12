import { Book } from '../entities/Book';

export interface BookRepository {
    create(book: Book): Promise<void>;
    getByID(id: string): Promise<Book | null>;
    updateBook(book: Book): Promise<void>;
    delete(id: string): Promise<void>;
}