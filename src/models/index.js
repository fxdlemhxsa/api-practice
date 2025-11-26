import { sequelize } from '../config/database.js';
import MovieModel from './movie.js';
import ReviewModel from './review.js';

MovieModel.hasMany(ReviewModel, { foreignKey: 'movie_id', onDelete: 'CASCADE' });
ReviewModel.belongsTo(MovieModel, { foreignKey: 'movie_id' });

export const initDB = async () => {
  await sequelize.sync({ alter: true });
};

export const Movie = MovieModel;
export const Review = ReviewModel;

export default sequelize;
