import { errBuilder, errHandler, successHandler } from "../utils/index";
const Boom = require("@hapi/boom");
export = (controller: any) => (req: any, res: any, next: any) => {
  const httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
    ip: req.ip,
    method: req.method,
    path: req.path,
    user: req.user,
    logger: req.logger,
    source: {
      ip: req.ip,
      browser: req.get("User-Agent"),
    },
    headers: {
      "Content-Type": req.get("Content-Type"),
      Referer: req.get("referer"),
      "User-Agent": req.get("User-Agent"),
      "x-access-token": req.get("x-access-token"),
    },
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
