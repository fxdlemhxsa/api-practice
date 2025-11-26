import express from 'express';
import movieRoutes from './src/routes/movie.routes.js';
import reviewRoutes from './src/routes/review.routes.js';

const app = express();
app.use(express.json());

app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);

export default app;
