import app from './app.js';
import { initDB } from './src/models/index.js';

// Inisialisasi database
initDB();

// Menjalankan server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
