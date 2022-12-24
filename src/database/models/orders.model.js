module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define(
    "orders",
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      orderNfId: { type: DataTypes.STRING(255), allowNull: false, unique: true },
      orderNumber: { type: DataTypes.STRING(255), allowNull: false },
      orderPath: { type: DataTypes.STRING(255), defaultValue: null, unique: true },
      orderFileName: { type: DataTypes.STRING(255), defaultValue: null, unique: true },
      orderOriginalName: { type: DataTypes.STRING(255), defaultValue: null, unique: true },
      emissionDate: { type: DataTypes.STRING(255), defaultValue: null },
      pdfFile: { type: DataTypes.STRING(255), defaultValue: null },
      emitedTo: { type: DataTypes.STRING(255), allowNull: false },
      nNf: { type: DataTypes.STRING(255), defaultValue: null },
      CTE: { type: DataTypes.STRING(255), defaultValue: null },
      value: { type: DataTypes.STRING(255), defaultValue: null },
      createdAt: { type: DataTypes.DATE, allowNull: false },
      updatedAt: { type: DataTypes.DATE, allowNull: false },
      cnpjId: {
        type: DataTypes.INTEGER(11),
        defaultValue: null,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'cnpjs',
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.INTEGER(11),
        defaultValue: null,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      buyerId: {
        type: DataTypes.INTEGER(11),
        defaultValue: null,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'buyers',
          key: 'id',
        },
      },
      providerId: {
        type: DataTypes.INTEGER(11),
        defaultValue: null,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'providers',
          key: 'id',
        },
      },
      orderStatusBuyer: { type: DataTypes.STRING(255), defaultValue: '0' },
      orderStatusProvider: { type: DataTypes.STRING(255), defaultValue: '0' },
      deliveryReceipt: { type: DataTypes.STRING(255), defaultValue: null },
      cargoPackingList: { type: DataTypes.STRING(255), defaultValue: null },
      deliveryCtrc: { type: DataTypes.STRING(255), defaultValue: null },
    },
    {
      tableName: 'orders',
      timestamps: true,
      initialAutoIncrement: 540
    }
  );

    orders.associate = (models) => {
      orders.belongsTo(models.cnpjs, { foreignKey: 'cnpjId', as: 'cnpj' });
      orders.belongsTo(models.users, { foreignKey: 'userId', as: 'user' });
      orders.belongsTo(models.buyers, { foreignKey: 'buyerId', as: 'buyer' });
      orders.belongsTo(models.providers, { foreignKey: 'providerId', as: 'provider' });
      orders.hasMany(models.offers, { foreignKey: 'orderId' });
      orders.hasMany(models.orderportions, { foreignKey: 'orderId' });
    };

  return orders;
};
