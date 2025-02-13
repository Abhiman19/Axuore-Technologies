import mongoose, { Schema } from "mongoose";

const StatSchema = new Schema({
  title: {type: String},
  value: {type: String},
  icon: {type: String},
});

const Stats = mongoose.models.Stat || mongoose.model("Stat", StatSchema);

export default Stats;