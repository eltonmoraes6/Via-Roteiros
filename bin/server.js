import http from "http";

import app from "../src/app.js";

app.set("port", process.env.PORT || 5000);
const server = http.createServer(app);

// create the server
const init = async () => {
  server.listen(app.get("port"), "0.0.0.0", () => {
    console.log("Running the server on port: ", app.get("port"));
    console.log(new Date().toUTCString());
    console.log("Environment: ", process.env.NODE_ENV);

    let FuncPort = server.address().port;
    let host = server.address().address;
    console.log("Example app listening at http://%s:%s", host, FuncPort);
  });
};

init();
