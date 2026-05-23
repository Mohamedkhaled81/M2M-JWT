import express from "express";
import { serversConfigDetails } from "./config/index.js";
import { router } from "./routes/index.js"

const app = express();
app.use(express.json());
app.use('/api', router);

app.listen(serversConfigDetails.srvrPort, () => {
  console.log(
    `${serversConfigDetails.srvrName} Listening on ${serversConfigDetails.srvrPort} :)`,
  );
});
