import { Book } from '../entities/Book';

export interface BookRepository {
    createBook(book: Book): Promise<Book>;
    getAll(): Promise<Book[]>;
    getByID(id: string): Promise<Book | null>;
    updateBook(book: Book): Promise<void>;
    delete(id: string): Promise<void>;
}