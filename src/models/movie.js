import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: DataTypes.STRING,
  year: DataTypes.INTEGER,
  description: DataTypes.TEXT
}, {
  tableName: 'movies'
});

export default Movie;
