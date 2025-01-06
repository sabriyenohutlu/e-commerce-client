const express = require('express');
const db = require('./db');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const PORT = process.env.PORT || 3000;
const multer = require('multer');
const path = require('path');
const productRoutes = require('./routes/products');
// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/products', productRoutes);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/assets/kadınkupa');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });
app.use('/public/assets/kadınkupa', express.static(path.join(__dirname, 'public/assets/kadınkupa')));

app.post('/api/upload', upload.single('image'), (req, res) => {
    const imagePath = `/public/assets/kadınkupa/${req.file.filename}`;

    // Görsel yolunu MySQL tablosuna ekleme
    db.query('INSERT INTO products (product_name, image_path) VALUES (?, ?)', [req.body.productName, imagePath], (err, result) => {
        if (err) {
            console.error('MySQL sorgusu hatası:', err);
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ id: result.insertId, imagePath });
        }
    });
});


app.use(cors({
    origin: 'http://localhost:3001', // Next.js'in çalıştığı frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // İzin verilen HTTP metodları
    allowedHeaders: ['Content-Type', 'Authorization'] // İzin verilen başlıklar
  }));
  app.use(express.json()); // Json veri işleme için

// Sample route
app.get('/products', (req, res) => {
    console.log('Fetching products...');
    db.query('SELECT * FROM product', (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            res.status(500).send('Server error');
            return;
        }
        console.log('Products fetched:', results);
        res.json(results);
    });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
  });