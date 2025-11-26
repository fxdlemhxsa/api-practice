import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

// movie_id (String not null FK dari movies), reviewer (String), comment (String), score (Int 1-10), created_at (Timestamp)

const Review = sequelize.define('Review', {
  // TODO: membuat model Review
}, {
  tableName: 'reviews'
});

export default Review;
