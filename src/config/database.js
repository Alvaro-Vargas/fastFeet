// This file contains the credentials to connect to our DB
// This file does not support the new 'import/export' syntax, as the 'squelize-cli' does not support it.

// Check the DIALECTS sequelize documentation > POSTGRES:
// 'For PostgreSQL, two libraries are needed, pg@^7.0.0 and pg-hstore.'

// Export an configuration object
module.exports = {
  dialect: 'postgres',
  host: 'localhost', // Where you can find your db
  port: '5433',
  username: 'admin',
  password: 'admin', // Click -> https://i.kym-cdn.com/entries/icons/mobile/000/023/397/C-658VsXoAo3ovC.jpg
  database: 'fastfeet',
  define: {
    timestamp: true, // Creates columns created_at and updated_at in every DB table
    underscored: true,
    underscoredAll: true, // This change the standard nomenclature from CamelCase (I.e.: user_groups != UserGroups )
  },
};
