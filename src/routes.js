import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymenController from './app/controllers/DeliverymenController';
import PackageController from './app/controllers/PackageController';
import DeliveryController from './app/controllers/DeliveryController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
/**
 * Delivery
 */

routes.put(
  '/deliveries/:id_deliveryman/:id_delivery/:action',
  DeliveryController.update
);

// Routes beyond this point will be checked for AUTH TOKEN
routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/users/admin', UserController.store);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);

routes.post('/files', upload.single('file'), FileController.store);

/**
 * Deliverymen
 */
routes.get('/deliverymen', DeliverymenController.index);
routes.post('/deliverymen', DeliverymenController.store);
routes.put('/deliverymen', DeliverymenController.update);
routes.delete('/deliverymen', DeliverymenController.delete);

/**
 * Packages
 */
routes.get('/package', PackageController.index);
routes.post('/package', PackageController.store);
routes.put('/package/:id', PackageController.update);
routes.delete('/package/:id', PackageController.delete);

export default routes;
