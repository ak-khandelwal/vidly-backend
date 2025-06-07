const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


app.use(express.json({limit:"16kb"}))
// app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(cookieParser())
const userRouter = require('./routes/user.routes.js');
const healthCheckRouter = require("./routes/healthCheck.routes.js");
const tweetRouter = require("./routes/tweet.routes.js");
const subscriptionRouter = require("./routes/subscription.routes.js");
const videoRouter = require("./routes/video.routes.js");
const commentRouter = require("./routes/comment.routes.js");
const likeRouter = require("./routes/like.routes.js");
const playlistRouter = require("./routes/playlist.routes.js");
const dashboardRouter = require("./routes/dashboard.routes.js");

app.use("/api/v1/healthCheck", healthCheckRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/dashboard", dashboardRouter)
module.exports = app 