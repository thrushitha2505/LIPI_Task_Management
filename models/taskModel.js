const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  due_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(20),
    defaultValue: 'Pending',
  },
  completed_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  timestamps: true, 
});

module.exports = { Task };
