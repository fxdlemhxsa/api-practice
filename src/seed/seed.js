import { Movie, Review, initDB } from '../models/index.js';

const seed = async () => {
  await initDB();

  const movie1 = await Movie.create({
    title: 'Inception',
    genre: 'Sci-Fi',
    year: 2010,
    description: 'A thief who steals corporate secrets through dream-sharing technology'
  });

  const movie2 = await Movie.create({
    title: 'Interstellar',
    genre: 'Sci-Fi',
    year: 2014,
    description: 'A team of explorers travel through a wormhole in space'
  });

  await Review.bulkCreate([
    { reviewer: 'Alice', comment: 'Great movie', score: 9, movie_id: movie1.id },
    { reviewer: 'Bob', comment: 'Mind blowing', score: 10, movie_id: movie2.id }
  ]);

  console.log('Seed completed');
  process.exit(0);
};

seed();