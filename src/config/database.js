// This file does not support the new 'import/export' syntax, as the 'squelize-cli' does not support it.

// Check the DIALECTS sequelize documentation > POSTGRES:
// 'For PostgreSQL, two libraries are needed, pg@^7.0.0 and pg-hstore.'

require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamp: true, // Creates columns created_at and updated_at in every DB table
    underscored: true,
    underscoredAll: true, // This change the standard nomenclature from CamelCase (I.e.: user_groups != UserGroups )
  },
};
