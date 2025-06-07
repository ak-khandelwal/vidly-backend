const { ApiResponse } = require("../utils/ApiResponse.js");
const { asyncHandler } = require("../utils/asyncHandler.js");

const healthCheck = asyncHandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(200, null, "OK"));
});

module.exports = { healthCheck };
