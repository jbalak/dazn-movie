import http from "http";
import app from "./app";

const port = process.env.PORT || 3001;

app.set("port", port);

const server = http.createServer(app);

//listen on port
server.listen(port, () => {
  console.log(`Listening on poty ${port}`);
});

//on err

server.on("error", (error: any) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});
