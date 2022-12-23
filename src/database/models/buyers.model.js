module.exports = (sequelize, DataTypes) => {
  const buyers = sequelize.define(
    "buyers",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING(255),
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
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, allowNull: false, },
      updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, allowNull: false, },
      cnpjId: { type: DataTypes.INTEGER(11), defaultValue: null},
      confirm: {type: DataTypes.BOOLEAN, defaultValue: 1 },
      email: { type: DataTypes.STRING(255), defaultValue: null}
    },
    {
      timestamps: false,
      tableName: "buyers",
    }
  );

  return buyers;
};
