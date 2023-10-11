import { Movie } from "../models/movies.model";
import { Movie as MovieType } from "../types/movies";
const findOne = async (query: any, options?: any) => {
  let movie = await Movie.findOne(query).lean();

  return movie;
};

const findMany = async (query: any, options?: any) => {
  let movies = await Movie.find(query).lean();

  return movies;
};

const insert = async (data: any) => {
  let movies = await Movie.create(data);

  return movies;
};

const remove = async (query: any) => {
  let deleted = await Movie.deleteMany(query).lean();

  return deleted;
};

const update = async (query: any, data: any) => {
  const updatedData = await Movie.findOneAndUpdate(query, data, {
    new: true,
  }).lean();

  return updatedData;
};

export = Object.freeze({
  findOne,
  findMany,
  insert,
  remove,
  update,
});
