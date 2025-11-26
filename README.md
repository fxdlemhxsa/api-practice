# Movie API Starter (Express + Sequelize + SQLite)

## Fitur
- CRUD Movies
- CRUD Reviews
- Relasi Movie -> Reviews (One to Many)
- Menggunakan SQLite

## Cara Menjalankan
1. `npm install`
2. `npm run seed`
3. `npm start`

Server berjalan di `http://localhost:3000`

## Endpoints

### Movies
- `GET /movies` - Get all movies
- `GET /movies/:id` - Get movie by ID
- `POST /movies` - Create new movie
- `PUT /movies/:id` - Update movie
- `DELETE /movies/:id` - Delete movie

### Reviews
- `GET /reviews` - Get all reviews
- `GET /reviews/:id` - Get review by ID
- `POST /reviews` - Create new review
- `PUT /reviews/:id` - Update review
- `DELETE /reviews/:id` - Delete review

## Contoh Request

### Create Movie
```json
POST /movies
{
  "title": "The Matrix",
  "genre": "Sci-Fi",
  "year": 1999,
  "description": "A computer hacker learns about the true nature of reality"
}
```

### Create Review
```json
POST /reviews
{
  "movie_id": 1,
  "reviewer": "John Doe",
  "comment": "Amazing movie!",
  "score": 10
}
```
```

---

Struktur folder:
```
project/
├── app.js
├── server.js
├── package.json
├── README.md
└── src/
    ├── config/
    │   └── database.js
    ├── models/
    |   |   index.js 
    |   |   movie.js
    │   └── review.js
    ├── controllers/
    │   ├── movie.controller.js
    │   └── review.controller.js
    ├── routes/
    │   ├── movie.routes.js
    │   └── review.routes.js
    └── seed/
        └── seed.js