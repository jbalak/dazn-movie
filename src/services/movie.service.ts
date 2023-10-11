import Boom from "@hapi/boom";

import { moviesDb } from "../dataAccess";
import { Movie as MovieType } from "../types/movies";
import { isDef } from "../utils";

const createAMovie = async (data: any) => {
  const moviewData: MovieType = data.body;

  validateReq(moviewData);

  const movies = await moviesDb.insert(moviewData);

  return { movies };
};

const getAllMovies = async () => {
  const movieQuery: any = {};
  const movies = await moviesDb.findMany(movieQuery);

  return { movies };
};

const getAMovie = async (data: any) => {
  const movieId: any = data.params.movieId;
  const movie = await moviesDb.findOne({ _id: movieId });

  return { movie: movie };
};

const searchAMovie = async (data: any) => {
  const query = data.query.q;

  console.log({ query });
  const movies = await moviesDb.findMany(query);

  return { movies: movies };
};

const updateAMovie = async (data: any) => {
  const movieId: any = data.params.movieId;
  const updateData = data.body;

  const movies = await moviesDb.update({ _id: movieId }, updateData);

  return { updateData: movies };
};

const deleteAMovie = async (data: any) => {
  const movieId: any = data.params.movieId;

  const movies = await moviesDb.remove({ _id: movieId });

  return { deleted: movies };
};

//VALIATION
const validateReq = (reqData: MovieType) => {
  let data = ["title", "genre", "link", "rating"];
  console.log({ reqData });
  let keys = Object.keys(reqData);
  let ans = data.forEach((d) => {
    if (keys.includes(d)) {
      return true;
    } else throw Boom.badData(`${d} is missing`);
  });
};

export {
  createAMovie,
  getAllMovies,
  getAMovie,
  updateAMovie,
  searchAMovie,
  deleteAMovie,
};
