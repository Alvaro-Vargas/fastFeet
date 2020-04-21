import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Routes beyond this point will be checked for AUTH TOKEN
routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/users/admin', UserController.store);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);

export default routes;
