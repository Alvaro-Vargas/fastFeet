import 'dotenv/config';

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
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
