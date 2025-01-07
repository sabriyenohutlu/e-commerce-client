const express = require('express');
const db = require('./db');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const PORT = process.env.PORT || 5000;
const multer = require('multer');
const path = require('path');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json()); // Json veri işleme için

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