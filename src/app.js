import 'dotenv/config';

import path from 'path';
import express from 'express';
import routes from './routes';

// This refers to 'index.js' inside the Database folder.
// The index.js creates a new connection to the DB and call the init() method in all models
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    /**
     * Serve Static Files (uploads)
     */
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
