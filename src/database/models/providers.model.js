module.exports = (sequelize, DataTypes) => {
  const providers = sequelize.define(
    "providers",
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING(255), allowNull: false },
      tradingName: { type: DataTypes.STRING(255), defaultValue: null },
      cashforceTax: { type: DataTypes.STRING(255), defaultValue: null },
      responsibleName: { type: DataTypes.STRING(255), defaultValue: null },
      responsibleEmail: { type: DataTypes.STRING(255), defaultValue: null },
      responsiblePosition: { type: DataTypes.STRING(255), defaultValue: null },
      responsiblePhone: { type: DataTypes.STRING(255), defaultValue: null },
      responsibleMobile: { type: DataTypes.STRING(255), defaultValue: null },
      website: { type: DataTypes.STRING(255), defaultValue: null },
      postalCode: { type: DataTypes.STRING(255), defaultValue: null },
      address: { type: DataTypes.STRING(255), defaultValue: null },
      number: { type: DataTypes.STRING(255), defaultValue: null },
      complement: { type: DataTypes.STRING(255), defaultValue: null },
      neighborhood: { type: DataTypes.STRING(255), defaultValue: null },
      city: { type: DataTypes.STRING(255), defaultValue: null },
      state: { type: DataTypes.STRING(255), defaultValue: null },
      bank: { type: DataTypes.STRING(255), defaultValue: null },
      bankAgency: { type: DataTypes.STRING(255), defaultValue: null },
      account: { type: DataTypes.STRING(255), defaultValue: null },
      documents: { type: DataTypes.STRING(255), defaultValue: null },
      phoneNumber: { type: DataTypes.STRING(255), defaultValue: null },
      situation: { type: DataTypes.STRING(255), defaultValue: null },
      situationDate: { type: DataTypes.STRING(255), defaultValue: null },
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
      email: { type: DataTypes.STRING(255), defaultValue: null },
    },
    {
      tableName: 'providers',
      timestamps: true,
      initialAutoIncrement: 235
    }
  );

    providers.associate = (models) => {
      providers.belongsTo(models.cnpjs, { foreignKey: 'cnpjId', as: 'cnpj' });
      providers.hasMany(models.orders, { foreignKey: 'providerId' });
    };

  return providers;
};
