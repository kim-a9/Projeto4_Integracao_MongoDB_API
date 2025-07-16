// import { Book } from '../../core/entities/Book';
// import { BookRepository } from '../../core/repository/BookRepository';

// export class InMemoryBookRepository implements BookRepository {
//     public books: Book[] = [];

//     async create(book: Book): Promise<void> { this.books.push(book); }

//     // async getByID(id: string): Promise<Book | null> {
//     //     const book = this.books.find(b => b.id === id);
//     //     return book || null;
//     // }

//     // async updateBook(book: Book): Promise<void> {
//     //     const index = this.books.findIndex(b => b.id === book.id);
//     //     if (index !== -1) this.books[index] = book;
//     // }

//     // async delete(id: string): Promise<void> {
//     //     this.books = this.books.filter(b => b.id !== id);
//     // }

// }