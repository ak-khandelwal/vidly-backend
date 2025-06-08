const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate-v2");

const watchHistorySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
      required: true,
      index: true
    },
    watchedAt: {
      type: Date,
      default: Date.now,
      index: true
    }
  },
  {
    timestamps: true
  }
);

watchHistorySchema.index({ user: 1, watchedAt: -1 });
watchHistorySchema.plugin(mongooseAggregatePaginate);
const WatchHistory = mongoose.model("WatchHistory", watchHistorySchema); 
module.exports = { WatchHistory };