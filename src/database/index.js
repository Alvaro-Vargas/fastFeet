// Sequelize will be used to create the connection to the DB
import Sequelize from 'sequelize';

// Import all your models
import User from '../app/models/User';
import Recipient from '../app/models/Recipient';

// This file/variable will have the path to the database
import databaseConfig from '../config/database';

// Create an array with the models to loop through and init them all.
const models = [User, Recipient];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Create a new connection to the database
    this.connection = new Sequelize(databaseConfig);
    // This is what is expected in the method init(sequelize) from the models.
    // This is what is passed as 'sequelize'

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
