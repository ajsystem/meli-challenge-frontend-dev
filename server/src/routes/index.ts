import { Router } from 'express';
import { items } from './items.routes';

const routes = Router();

routes.use('/items', items);

export { routes };
