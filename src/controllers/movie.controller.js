import { Movie, Review } from "../models/index.js";

export default {
  async getAll(_, res) {
    const movies = await Movie.findAll();
    res.json(movies);
  },

  /**
   * Parameter: id
   */
  async getById(req, res) {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
  },

  /**
   * BODY JSON EXAMPLE
   * {
   *   "title": "Inception",
   *   "director": "Christopher Nolan",
   *   "release_year": 2010,
   *   "genre": "Sci-Fi"
   * }
   */
  async create(req, res) {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  },


  /**
   * BODY JSON EXAMPLE
   * Parameters: id
   * {
   *   "title": "Inception Updated",
   *   "director": "Christopher Nolan",
   *   "release_year": 2010,
   *   "genre": "Sci-Fi"
   * }
   */
  async update(req, res) {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    await movie.update(req.body);
    res.json(movie);
  },

  /**
   * Parameters: id
   */
  async delete(req, res) {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    await movie.destroy();
    res.json({ message: 'Deleted successfully' });
  }
};
