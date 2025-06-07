const { Router } = require('express');
const {
    getChannelStats,
} = require("../controllers/dashboard.controller.js");
const { verifyJWT } = require("../middlewares/auth.middleware.js");

const router = Router();

router.use(verifyJWT);

router.route("/stats").get(getChannelStats);

module.exports = router;