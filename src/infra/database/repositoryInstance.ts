// import { inMemoryBookRepository } from '../database/inMemoryRepositoryInstance';
import { MongoBookRepository } from '../database/MongoBookRepository';

export const bookRepository = new MongoBookRepository;