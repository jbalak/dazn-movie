import express from "express";

import {
  getAllMovies,
  createAMovie,
  getAMovie,
  deleteAMovie,
  searchAMovie,
  updateAMovie,
} from "../controllers/movies.controller";
import makeExpressCallback from "./expressCallback";
const router = express.Router();

router.route("/movies").post(makeExpressCallback(createAMovie));

router.route("/movies").get(makeExpressCallback(getAllMovies));

router.route("/movies/:movieId").get(makeExpressCallback(getAMovie));

router.route("/movies/search").get(makeExpressCallback(searchAMovie));

router.route("/movies/:movieId").delete(makeExpressCallback(deleteAMovie));

router.route("/movies/:movieId").patch(makeExpressCallback(updateAMovie));

export = router;
