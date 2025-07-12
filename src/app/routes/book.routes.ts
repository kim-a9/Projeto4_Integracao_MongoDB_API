import { Router } from 'express';
import { CreateBookController } from '../controller/CreateBookController';



const router = Router();



const createBookController = new CreateBookController();



// router.post('/books', createBookController);
router.post('/books', async (req, res) => {
    await createBookController.handle(req, res);
});












export default router;