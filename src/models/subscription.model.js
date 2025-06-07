const Mongoose = require("mongoose");
const { Schema } = Mongoose;
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate-v2");

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

subscriptionSchema.plugin(mongooseAggregatePaginate);
const Subscription = Mongoose.model("Subscription", subscriptionSchema);

module.exports = { Subscription };