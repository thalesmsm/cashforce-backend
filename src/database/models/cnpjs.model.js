module.exports = (sequelize, DataTypes) => {
  const cnpjs = sequelize.define(
    "cnpjs",
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      cnpj: { type: DataTypes.STRING(255), allowNull: false, unique: true },
      companyType: { type: DataTypes.STRING(255), allowNull: false },
      createdAt: { type: DataTypes.DATE, allowNull: false },
      updatedAt: { type: DataTypes.DATE, allowNull: false },
    },
    {
      timestamps: true,
      tableName: 'cnpjs',
      initialAutoIncrement: 437
    }
  );

    cnpjs.associate = (models) => {
      cnpjs.hasMany(models.orders, { foreignKey: 'cnpjId' });
      cnpjs.hasMany(models.buyers, { foreignKey: 'cnpjId' });
      cnpjs.hasMany(models.providers, { foreignKey: 'cnpjId' });
      cnpjs.hasMany(models.sponsors, { foreignKey: 'cnpjId' });
    };

  return cnpjs;
};
