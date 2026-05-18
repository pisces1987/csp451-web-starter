const express = require("express");

const router = express.Router();

/**
 * Starter endpoint to prove the API works.
 * Feature branch: feature/api-endpoints should expand this structure:
 * - add route modules, controllers, and validation
 * - add at least one POST endpoint
 */
router.get('/health', async (req, res) => {
  res.json({
    status: 'UP',
    database: 'CONNECTED',
    version: '1.0.0',
    service: 'Unified API & DB Services'
  });
});

module.exports = { router };

// TODO: Add POST payload validation schemas