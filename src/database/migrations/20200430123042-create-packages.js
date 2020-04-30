module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('packages', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      recipient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'recipients',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      deliveryman_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'deliverymens',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      signature_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'files', // Table reference
          key: 'id', // This means that every 'signature' in deliveries will be an ID in files
        },
        // If something happens to the ID in 'files' table:
        onUpdate: 'CASCADE', // If the id changes in files, it will change in deliveries too.
        onDelete: 'SET NULL', // If the file ID is deleted, user 'signature_id' will be set to null.
        allowNull: true,
      },
      product: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      canceled_at: {
        type: Sequelize.DATE,
      },
      start_date: {
        type: Sequelize.DATE,
      },
      end_date: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('packages');
  },
};
