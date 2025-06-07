const { Router } = require('express');
const { healthCheck } = require("../controllers/healthCheck.controller.js");

const router = Router();

router.route('/').get(healthCheck);

module.exports = router;