import { Router } from 'express';
import { ItemsController } from '../controllers';

const router = Router();

router.get('', ItemsController.queryItems);

router.get('/:id', ItemsController.getItemById);

export { router as items };
