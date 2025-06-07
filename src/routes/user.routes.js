const { Router } = require("express");
const {
    changeCurrentPassword,
    getCurrentUser,
    getUserChannelProfile,
    getWatchHistory,
    loginUser,
    logoutUser,
    refreshAccessToken,
    registerUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage
} = require("../controllers/user.controller.js");
const { upload } = require("../middlewares/multer.middleware.js");
const { verifyJWT } = require("../middlewares/auth.middleware.js");

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: 'coverImage',
            maxCount: 1
        }
    ]),
    registerUser
    );

    router.route("/login").post(loginUser)

    router.route("/logout").post(verifyJWT, logoutUser)

    router.route("/refresh-token").post(refreshAccessToken)

    router.route("/change-password").post(verifyJWT,changeCurrentPassword);

    router.route("/current-user").get(verifyJWT , getCurrentUser);

    router.route("/update-Account-Details").patch(verifyJWT,updateAccountDetails);

    router.route("/update-Avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar);

    router.route("/update-CoverImage").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage);

    router.route("/channel/:userName").get(verifyJWT, getUserChannelProfile)

    router.route("/history").get(verifyJWT, getWatchHistory)

module.exports = router;