module.exports = (sequelize, DataTypes) => {
  const orderportions = sequelize.define(
    "orderportions",
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      nDup: { type: DataTypes.STRING(255), allowNull: false },
      dVenc: { type: DataTypes.STRING(255), allowNull: false },
      vDup: { type: DataTypes.STRING(255), allowNull: false },
      availableToMarket: { type: DataTypes.BOOLEAN, defaultValue: true },
      createdAt: { type: DataTypes.DATE, allowNull: false },
      updatedAt: { type: DataTypes.DATE, allowNull: false },
      orderId: {
        type: DataTypes.INTEGER(11),
        defaultValue: null,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'orders',
          key: 'id',
        },
      },
    },
    {
      tableName: 'orderportions',
      timestamps: true,
      initialAutoIncrement: 612
    }
  );

    orderportions.associate = (models) => {
      orderportions.belongsTo(models.orders, { foreignKey: 'orderId', as: 'order' });
    };

  return orderportions;
};
