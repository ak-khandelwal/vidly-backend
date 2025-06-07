const mongoose = require("mongoose");
const { Comment } = require("../models/comments.model.js");
const { ApiError } = require("../utils/ApiError.js");
const { ApiResponse } = require("../utils/ApiResponse.js");
const { asyncHandler } = require("../utils/asyncHandler.js");

const getVideoComments = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { videoId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(videoId))
    throw new ApiError(404, "invalid params id");

  const skip = (page - 1) * limit;
  const comments = await Comment.find({ video: videoId })
    .populate("owner", "userName avatar")
    .skip(skip)
    .limit(limit);

  const totalComments = await Comment.countDocuments({ video: videoId });
  res.status(200).json(
    new ApiResponse(
      200,
      {
        totalComments,
        page,
        limit,
        comments,
      },
      "got all comments successfully"
    )
  );
});

const addComment = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const { videoId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(videoId))
    throw new ApiError(404, "invalid params id");

  if (!content || content === "")
    throw new ApiError(404, "comment content must not we empty");

  const comment = await Comment.create({
    content: content,
    video: videoId,
    owner: req.user._id,
  });

  res
    .status(200)
    .json(new ApiResponse(200, comment, "comment created successfully"));
});

const updateComment = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const { commentId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(commentId))
    throw new ApiError(404, "invalid params id");
  if (!content || content === "")
    throw new ApiError(404, "comment content must not we empty");

  const updatedComment = await Comment.findByIdAndUpdate(
    commentId,
    {
      $set: {
        content: content,
      },
    },
    { new: true }
  );

  res
    .status(200)
    .json(new ApiResponse(200, updatedComment, "comment updated successfully"));
});

const deleteComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(commentId))
    throw new ApiError(404, "invalid params id");

  await Comment.findByIdAndDelete(commentId);

  res
    .status(200)
    .json(new ApiResponse(200, {}, "comment deleted successfully"));
});

module.exports = { getVideoComments, addComment, updateComment, deleteComment };