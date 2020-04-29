module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('deliverymens', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      avatar_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'files', // Table reference
          key: 'id', // This means that every 'avatar_id' in users will be an ID in files
        },
        // If something happens to the ID in 'files' table:
        onUpdate: 'CASCADE', // If the id changes in files, it will change in users too.
        onDelete: 'SET NULL', // If the file ID is deleted, user 'avatar_id' will be set to null.
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('deliverymens');
  },
};
