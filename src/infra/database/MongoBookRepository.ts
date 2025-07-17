import { Book } from '../../core/entities/Book';
import { BookRepository } from '../../core/repository/BookRepository';
import { BookModel } from '../database/MongooseBookModel';

export class MongoBookRepository implements BookRepository {
    private toEntity(doc: any): Book{
        return new Book(doc.title, doc.author, doc.genre, doc.id); //.toString()
        }
        
        async createBook(book: Book): Promise<Book>{
            const doc = await BookModel.create(book);
            return this.toEntity(doc);
        };

        async getAll(): Promise<Book[]> {
            const books = await BookModel.find();
            return books.map((doc) => this.toEntity(doc));
        };
        
        async getByID(id: string): Promise<Book | null> {
            const doc = await BookModel.findOne({ _id: id });

            // if(!id){
            //     throw new Error('Não foi possível encontrar o livro');
            // }
            return doc ? this.toEntity(doc): null;
        };

        async updateBook(book: Book): Promise<void> {
            throw new Error('Method not implemented.');
        };

        async delete(id: string): Promise<void> {
            throw new Error('Method not implemented.');
        };

}