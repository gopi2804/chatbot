/**
 * Fixture API
 * Description: Fixture, FixtureID
 * Context: Can the API fetch these details from Pogon DB?
 */
const express = require('express');
const router = express.Router();

// Example endpoint
router.get('/fixture', (req, res) => {
  res.json({ message: 'Hello from Fixture API!' });
});

module.exports = router;
