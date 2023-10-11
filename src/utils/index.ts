const httpResp = (
  status: boolean,
  message: string,
  code: number,
  data: any
) => {
  const response = {
    statusCode: code,
    error: false,
    message: message,
    data: data,
  };

  return response;
};

const isDef = (param: any) => {
  if (param == null || param == undefined) {
    return false;
  } else {
    return true;
  }
};

const errBuilder = (err: any) => {
  let finalError = err;

  if (err.isBoom) {
    if (isDef(err.data)) {
      err.output.payload.data = err.data;
    }
    err.reformat();

    console.log(err);
    finalError = err.output.payload;
    if (isDef(err.message) && finalError.statusCode == 500) {
      finalError.message = err.message;
    }
  } else {
    err.error = true;
    if (!isDef(err.message) && isDef(err.type)) {
      err.message = err.type;
    }
  }

  return finalError;
};

const errHandler = (error: any, res: any) => {
  const resp: any = httpResp(false, "There is some error occured", 500, error);
  return res.status(resp.code).send(resp);
};

const successHandler = (
  res: any,
  data: any,
  message?: string,
  metadata?: any
) => {
  message = message || "Operation successful";
  let resp;
  if (isDef(metadata)) {
    resp = httpResp(false, message, 200, data);
  } else {
    resp = httpResp(false, message, 200, data);
  }

  return res.status(resp.statusCode).send(resp);
};

// const alterResource = (resource) => {
//   let splitResources = resource.split("/");
//   console.log("splitResources");
//   console.log(splitResources);
//   for (let index = 0; index < splitResources.length; index++) {
//     let element = splitResources[index];

//     if (!dictionary.includes(element)) {
//       element = ":id";
//     }
//     splitResources[index] = element;
//   }

//   console.log("splitResources");
//   console.log(splitResources);
//   resource = splitResources.join("/");
//   return resource;
// };

export { httpResp, isDef, errBuilder, errHandler, successHandler };
