import express from "express";
import { serversConfigDetails } from "./config/index.js";


const app = express();
app.listen(serversConfigDetails.srvrPort, () => {
  console.log(
    `${serversConfigDetails.srvrName} Listening on ${serversConfigDetails.srvrPort} :)`,
  );
});
