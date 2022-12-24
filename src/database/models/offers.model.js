module.exports = (sequelize, DataTypes) => {
  const offers = sequelize.define(
    "offers",
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      tax: { type: DataTypes.STRING(255), allowNull: false },
      tariff: { type: DataTypes.STRING(255), allowNull: false },
      adValorem: { type: DataTypes.STRING(255), allowNull: false },
      float: { type: DataTypes.STRING(255), allowNull: false },
      iof: { type: DataTypes.STRING(255), allowNull: false },
      expiresIn: { type: DataTypes.DATE, allowNull: false },
      paymentStatusSponsor: { type: DataTypes.BOOLEAN, defaultValue: false },
      paymentStatusProvider: { type: DataTypes.BOOLEAN, defaultValue: false },
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
      sponsorId: {
        type: DataTypes.INTEGER(11),
        defaultValue: null,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        references: {
          model: 'sponsors',
          key: 'id',
        },
      },
    },
    {
      tableName: 'offers',
      timestamps: true,
      initialAutoIncrement: 40
    }
  );

    offers.associate = (models) => {
      offers.belongsTo(models.orders, { foreignKey: 'orderId', as: 'order' });
      offers.belongsTo(models.sponsors, { foreignKey: 'sponsorId', as: 'sponsor' });
    };

  return offers;
};
