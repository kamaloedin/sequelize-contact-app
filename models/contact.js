const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

class Contact extends Model {}

Contact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING(50),
    email: DataTypes.STRING(50),
  },
  {
    sequelize,
    modelName: 'Contact',
    timestamps: false,
  },
);

// const showAllContacts = async () => {
//   const contacts = await Contact.findAll();
//   console.log(contacts);
// };

// showAllContacts();

module.exports = Contact;
