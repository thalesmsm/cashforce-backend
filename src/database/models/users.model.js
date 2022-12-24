module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING(255), allowNull: false },
      email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
      phoneNumber: { type: DataTypes.STRING(255), defaultValue: null },
      mobile: { type: DataTypes.STRING(255), defaultValue: null },
      departament: { type: DataTypes.STRING(255), defaultValue: null },
      verificationCode: { type: DataTypes.STRING(255), defaultValue: null },
      emailChecked: { type: DataTypes.BOOLEAN, defaultValue: false },
      createdAt: { type: DataTypes.DATE, allowNull: false },
      updatedAt: { type: DataTypes.DATE, allowNull: false },
      cashforceAdm: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      timestamps: true,
      tableName: 'users',
      initialAutoIncrement: 122
    }
    );

    users.associate = (models) => {
      users.hasMany(models.orders, { foreignKey: 'userId' });
    };

  return users;
};
