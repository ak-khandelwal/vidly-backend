const {ApiError} = require("../utils/ApiError");
const {asyncHandler} = require("../utils/asyncHandler");
const jwt = require("jsonwebtoken");
const {User} = require("../models/user.model");

const verifyJWT = asyncHandler(async(req,_,next)=>{
    const token = req.cookies?.accessToken || req.header('Authorization')?.replace('Bearer ','')

    if(!token)
        throw new ApiError(401,"Unauthorized request")

    const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken._id).select('-password -refreshToken');

    if(!user){
        throw new ApiError(401,"Invalid Access Token");
    }

    req.user = user;
    next()
})
module.exports = {verifyJWT};