/**
 * Geo Map API
 * Description: geo id, geo key, location, zone, district, state
 * Context: I want to fetch all the fixture details using geokey
 */
const express = require('express');
const router = express.Router();

// Example endpoint
router.get('/geo-map', (req, res) => {
  res.json({ message: 'Hello from Geo Map API!' });
});

module.exports = router;
