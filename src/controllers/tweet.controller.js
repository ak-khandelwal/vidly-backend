const mongoose = require("mongoose");
const { Tweet } = require("../models/tweets.model.js");
const { ApiError } = require("../utils/ApiError.js");
const { ApiResponse } = require("../utils/ApiResponse.js");
const { asyncHandler } = require("../utils/asyncHandler.js");

const createTweet = asyncHandler(async (req, res) => {
  const { content } = req.body;
  if (content === "") throw new ApiError(400, "content is required");
  const tweet = await Tweet.create({
    content: content,
    owner: req.user._id,
  });
  return res
    .status(200)
    .json(new ApiResponse(200, tweet, "tweet created successfully"));
});

const getUserTweets = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(userId))
    throw new ApiError(404, "invalid params id");

  const tweets = await Tweet.find({
    owner: userId,
 }).sort({ createdAt: -1 });

  if (!tweets) {
    throw new ApiError(404, "tweets not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, tweets, "tweets found successfully"));
});

const updateTweet = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;
  const { content } = req.body;
  if (!mongoose.Types.ObjectId.isValid(tweetId))
    throw new ApiError(404, "invalid params id");

  const tweet = await Tweet.findByIdAndUpdate(
    tweetId,
    {
      $set: {
        content: content,
      },
    },
    { new: true }
  );

  return res
    .status(200)
    .json(new ApiResponse(200, tweet, "tweet update successfully"));
});

const deleteTweet = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(tweetId))
    throw new ApiError(404, "invalid params id");

  const deletedTweet = await Tweet.findByIdAndDelete(tweetId);

  return res
    .status(200)
    .json(new ApiResponse(200, deletedTweet, "tweet deleted successfully"));
});

module.exports = { createTweet, getUserTweets, updateTweet, deleteTweet };