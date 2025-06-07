const { Router } = require('express');
const {
    getLikedVideos,
    toggleCommentLike,
    toggleVideoLike,
    toggleTweetLike,
    getVideosLikes,
} = require("../controllers/like.controller.js");
const { verifyJWT } = require("../middlewares/auth.middleware.js");

const router = Router();
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/toggle/v/:videoId").post(toggleVideoLike);
router.route("/video/:videoId").get(getVideosLikes);
router.route("/toggle/c/:commentId").post(toggleCommentLike);
router.route("/toggle/t/:tweetId").post(toggleTweetLike);
router.route("/videos").get(getLikedVideos);

module.exports = router;