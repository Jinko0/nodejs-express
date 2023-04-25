const express = require('express');
const router = express.Router();

// Route vers la page d'accueil
router.get('/', (req, res) => {
    res.send("Page d'accueil");
  });
  
  
  // Route vers la page à propos
  router.get('/about', (req, res) => {
    res.send('À propos');
  });

module.exports = router;