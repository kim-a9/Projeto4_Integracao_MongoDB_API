import { Book } from "../entities/Book";
import { BookRepository } from "../repository/BookRepository";

export class GetAllBooks {
    constructor(private bookRepository: BookRepository) {}

    async execute(): Promise<Book[]> {

        const getAllBooks = await this.bookRepository.getAll();
        return getAllBooks;

    }
}