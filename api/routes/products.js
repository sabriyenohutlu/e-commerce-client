const express = require('express');
const db = require('../db');
const router = express.Router();

// Get all products
router.get('/api/products', async (req, res) => {
    try {
      const [rows] = await db.query('SELECT * FROM product');
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
