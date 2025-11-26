# Movie API - REST API

API RESTful sederhana untuk mengelola data film dan ulasan menggunakan Express.js, Sequelize ORM, dan SQLite.

## 📋 Fitur

- ✅ CRUD Movies (Create, Read, Update, Delete)
- ✅ CRUD Reviews (Create, Read, Update, Delete)
- ✅ Relasi One-to-Many antara Movie dan Reviews
- ✅ Database SQLite (ringan dan mudah di-setup)
- ✅ Struktur folder yang terorganisir dengan MVC pattern

## 🛠️ Teknologi yang Digunakan

- **Node.js** - Runtime JavaScript
- **Express.js** - Web framework
- **Sequelize** - ORM untuk database
- **SQLite** - Database

## 📁 Struktur Folder

```
PRAKTIKUM/
├── node_modules/
├── src/
│   ├── config/
│   │   └── database.js          # Konfigurasi database
│   ├── controllers/
│   │   ├── movie.controller.js  # Logic untuk movies
│   │   └── review.controller.js # Logic untuk reviews
│   ├── models/
│   │   ├── index.js             # Setup Sequelize & relasi
│   │   ├── movie.js             # Model Movie
│   │   └── review.js            # Model Review
│   ├── routes/
│   │   ├── movie.routes.js      # Routes untuk movies
│   │   └── review.routes.js     # Routes untuk reviews
│   └── seed/
│       └── seed.js              # Data awal untuk testing
├── .gitignore
├── app.js                        # Setup Express app
├── server.js                     # Entry point aplikasi
├── database.sqlite               # Database file (generated)
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Cara Menjalankan

### 1. Install Dependencies
```bash
npm install
```

### 2. Seed Database (Opsional)
Mengisi database dengan data contoh:
```bash
npm run seed
```

### 3. Jalankan Server
```bash
npm start
```

Server akan berjalan di: **`http://localhost:3000`**

## 📡 API Endpoints

### Movies

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `GET` | `/movies` | Mendapatkan semua film |
| `GET` | `/movies/:id` | Mendapatkan film berdasarkan ID |
| `POST` | `/movies` | Membuat film baru |
| `PUT` | `/movies/:id` | Update film berdasarkan ID |
| `DELETE` | `/movies/:id` | Hapus film berdasarkan ID |

### Reviews

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `GET` | `/reviews` | Mendapatkan semua ulasan |
| `GET` | `/reviews/:id` | Mendapatkan ulasan berdasarkan ID |
| `POST` | `/reviews` | Membuat ulasan baru |
| `PUT` | `/reviews/:id` | Update ulasan berdasarkan ID |
| `DELETE` | `/reviews/:id` | Hapus ulasan berdasarkan ID |

## 📝 Contoh Request

### Create Movie
```http
POST /movies
Content-Type: application/json

{
  "title": "The Matrix",
  "genre": "Sci-Fi",
  "year": 1999,
  "description": "A computer hacker learns about the true nature of reality"
}
```

**Response:**
```json
{
  "id": 1,
  "title": "The Matrix",
  "genre": "Sci-Fi",
  "year": 1999,
  "description": "A computer hacker learns about the true nature of reality",
  "createdAt": "2025-11-26T10:00:00.000Z",
  "updatedAt": "2025-11-26T10:00:00.000Z"
}
```

### Get All Movies
```http
GET /movies
```

**Response:**
```json
[
  {
    "id": 1,
    "title": "The Matrix",
    "genre": "Sci-Fi",
    "year": 1999,
    "description": "A computer hacker learns about the true nature of reality",
    "Reviews": []
  }
]
```

### Create Review
```http
POST /reviews
Content-Type: application/json

{
  "movie_id": 1,
  "reviewer": "John Doe",
  "comment": "Amazing movie!",
  "score": 10
}
```

**Response:**
```json
{
  "id": 1,
  "movie_id": 1,
  "reviewer": "John Doe",
  "comment": "Amazing movie!",
  "score": 10,
  "createdAt": "2025-11-26T10:05:00.000Z",
  "updatedAt": "2025-11-26T10:05:00.000Z"
}
```

### Update Movie
```http
PUT /movies/1
Content-Type: application/json

{
  "title": "The Matrix Reloaded",
  "year": 2003
}
```

### Delete Movie
```http
DELETE /movies/1
```

## 🧪 Testing dengan Postman

1. Import koleksi Postman (jika tersedia): `Movie API - REST API.postman_collection.json`
2. Atau buat request manual sesuai endpoint di atas
3. Pastikan server sudah running

## 📦 Scripts

```json
{
  "start": "node server.js",
  "seed": "node src/seed/seed.js",
  "dev": "nodemon server.js"
}
```

## 🔗 Relasi Database

- **Movie** `1 ——< N` **Review**
  - Satu film dapat memiliki banyak ulasan
  - Setiap ulasan terhubung ke satu film melalui `movie_id`

## 📄 License

MIT

## 👨‍💻 Author

Buletan - 1 | Praktikum REST API

---

**Happy Coding! 🚀**