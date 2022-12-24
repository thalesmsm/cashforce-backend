module.exports = (sequelize, DataTypes) => {
  const buyers = sequelize.define(
    "buyers",
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      name: {type: DataTypes.STRING(255), allowNull: false},
      tradingName: { type: DataTypes.STRING(255), defaultValue: null},
      cashforceTax: { type: DataTypes.STRING(255), defaultValue: null},
      responsibleName: { type: DataTypes.STRING(255), defaultValue: null},
      responsibleEmail: { type: DataTypes.STRING(255), defaultValue: null},
      responsiblePosition: { type: DataTypes.STRING(255), defaultValue: null},
      responsiblePhone: { type: DataTypes.STRING(255), defaultValue: null},
      responsibleMobile: { type: DataTypes.STRING(255), defaultValue: null},
      website: { type: DataTypes.STRING(255), defaultValue: null},
      postalCode: { type: DataTypes.STRING(255), defaultValue: null},
      address: { type: DataTypes.STRING(255), defaultValue: null},
      number: { type: DataTypes.STRING(255), defaultValue: null},
      complement: { type: DataTypes.STRING(255), defaultValue: null},
      neighborhood: { type: DataTypes.STRING(255), defaultValue: null},
      city: { type: DataTypes.STRING(255), defaultValue: null},
      state: { type: DataTypes.STRING(255), defaultValue: null},
      phoneNumber: { type: DataTypes.STRING(255), defaultValue: null},
      situation: { type: DataTypes.STRING(255), defaultValue: null},
      situationDate: { type: DataTypes.STRING(255), defaultValue: null},
      createdAt: { type: DataTypes.DATE, allowNull: false, },
      updatedAt: { type: DataTypes.DATE, allowNull: false, },
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
      confirm: {type: DataTypes.BOOLEAN, defaultValue: true },
      email: { type: DataTypes.STRING(255), defaultValue: null}
    },
    {
      timestamps: true,
      tableName: "buyers",
      initialAutoIncrement: 152
    }
  );

  buyers.associate = (models) => {
    buyers.belongsTo(models.cnpjs, { foreignKey: 'cnpjId', as: 'cnpj' });
    buyers.hasMany(models.orders, { foreignKey: 'buyerId' });
  };

  return buyers;
};
