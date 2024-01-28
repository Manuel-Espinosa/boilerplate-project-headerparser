const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/api/whoami', controllers.whoAmI);

module.exports = router;
