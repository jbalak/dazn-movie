import { errBuilder, errHandler, successHandler } from "../utils/index";
import Boom from "@hapi/boom";

import { Request, Response, NextFunction } from "express";

export = (controller: any) =>
  (req: Request, res: Response, next: NextFunction) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
    };

    controller(httpRequest)
      .then((httpResponse: any) => {
        res.set("Content-Type", "application/json");
        res.type("json");
        successHandler(res, httpResponse);
      })
      .catch((error: any) => {
        const resp = errBuilder(Boom.boomify(error));
        return next(resp);
      });
  };
