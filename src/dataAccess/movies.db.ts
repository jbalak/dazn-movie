import { Movie } from "../models/movies.model";
import { Movie as MovieType } from "../types/movies";
const findOne = async (
  query: any,
  options?: any
): Promise<MovieType | null> => {
  let movie: MovieType | null = await Movie.findOne(query).lean();

  return movie;
};

const findMany = async (query: any, options?: any): Promise<[MovieType]> => {
  let movies: [MovieType] = await Movie.find(query).lean();

  return movies;
};

const insert = async (data: any): Promise<Object> => {
  let movies = await Movie.create(data);

  return movies;
};

const remove = async (query: any): Promise<boolean> => {
  let deleted = await Movie.deleteMany(query).lean();

  return deleted.acknowledged;
};

const update = async (query: any, data: any): Promise<MovieType | null> => {
  const updatedData: any = await Movie.findOneAndUpdate(query, data, {
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
