const { Router } = require('express');
const {
    getSubscribedChannels,
    getUserChannelSubscribers,
    getVideoSubscriber,
    toggleSubscription,
} = require("../controllers/subscription.controller.js");
const { verifyJWT } = require("../middlewares/auth.middleware.js");

const router = Router();
router.use(verifyJWT);

router
    .route("/c/:channelId")
    .get(getUserChannelSubscribers)
    .post(toggleSubscription);

router
    .route("/:channelId")
    .get(getVideoSubscriber);

router.route("/").get(getSubscribedChannels);

module.exports = router;