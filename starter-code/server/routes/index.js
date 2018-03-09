const express       = require('express');
const journalRoutes = require('./api/journalEntries');
const router        = express.Router();

router.use('/api', journalRoutes);

module.exports = router;
