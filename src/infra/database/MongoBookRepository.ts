import { Book } from '../../core/entities/Book';
import { BookRepository } from '../../core/repository/BookRepository';
import { BookModel } from '../database/MongooseBookModel';

export class MongoBookRepository implements BookRepository {
    private toEntity(doc: any): Book{
        return new Book(
            doc.title, 
            doc.author, 
            doc.genre,
            doc.bookID,
            );
        }
        
        async createBook(book: Book): Promise<Book>{
            const newBook = await BookModel.create(book);
            return this.toEntity(newBook);
        };
        
        // async getByID(bookID: string): Promise<Book | null> {
            
        //     if(!bookID){
        //         throw new Error('Não foi possível encontrar o livro');
        //     }
        //     const bookFound = await this.getByID(bookID);
        // };

        // async updateBook(book: Book): Promise<void> {
        //     throw new Error('Method not implemented.');
        // };

        // async delete(id: string): Promise<void> {
        //     throw new Error('Method not implemented.');
        // };

}