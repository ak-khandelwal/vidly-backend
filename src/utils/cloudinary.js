const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const res = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: "vidly",
    });
    fs.unlinkSync(localFilePath);
    console.log("file is uploaded on cloudinary ", res.url);
    return res;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};
const deleteImageFromCloudinary = async (publicId) => {
  try {
    if (!publicId) return null;
    const res = await cloudinary.uploader.destroy(publicId);
    console.log("file is deleted from cloudinary ", res);
    return res;
  } catch (error) {
    return null;
  }
};

module.exports = { uploadOnCloudinary, deleteImageFromCloudinary };
