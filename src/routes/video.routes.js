const { Router } = require('express');
const {
    deleteVideo,
    getAllVideos,
    getVideoById,
    publishAVideo,
    togglePublishStatus,
    updateVideo,
    getUserVideos,
    removeFromWatchHistory,
    clearWatchHistory,
} = require("../controllers/video.controller.js");
const { verifyJWT } = require("../middlewares/auth.middleware.js");
const { upload } = require("../middlewares/multer.middleware.js");

const router = Router();

router
.route("/")
.get(getAllVideos)
.post(
    verifyJWT,
    upload.fields([
        {
            name: "videoFile",
            maxCount: 1,
        },
        {
            name: "thumbnail",
            maxCount: 1,
        },

    ]),
    publishAVideo
);

// Add new route for user's videos
router.get("/user", verifyJWT, getUserVideos);

// Watch history routes
router.delete("/watch-history/:videoId", verifyJWT, removeFromWatchHistory);
router.delete("/watch-history/", verifyJWT, clearWatchHistory);

router.use(verifyJWT);

router
    .route("/:videoId")
    .get(getVideoById)
    .delete(deleteVideo)
    .patch(upload.single("thumbnail"), updateVideo);

router.route("/toggle/publish/:videoId").patch(togglePublishStatus);

module.exports = router;