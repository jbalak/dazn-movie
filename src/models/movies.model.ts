import mongoose from "mongoose";
const { Schema, model } = mongoose;

const movieSchema = new Schema({
  title: { type: String },
  genre: { type: String },
  rating: { type: Number },
  link: { type: String },
});

const Movie = model("Movie", movieSchema);

export { Movie };
