require("dotenv").config();
const connectDB = require("./db/index");
const app = require("./app");
const port = process.env.PORT || 5000;
const host = "0.0.0.0";
(async () => {
  try {
    await connectDB();
    if (process.env.DEVELOPMENT === "true") {
      app.listen(port, host, function () {
        console.log(`server is running on port http://${host}:${port}`);
      });
    } else {
      app.listen(port, function () {
        console.log(`Server is running on port ${port}`);
      });
    }
  } catch (error) {
    console.log("MONGODB connect failed! ", error);
  }
})();
