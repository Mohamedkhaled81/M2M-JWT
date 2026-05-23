import { serversConfigDetails } from "../config/index.js";
export function consume(req, res) {
  console.log(
    `${serversConfigDetails.srvrName} recieved ${JSON.stringify(req.body, null, 2)}`,
  );
  console.log(
    `${serversConfigDetails.srvrName} decoded token ${JSON.stringify(req.token, null, 2)}`,
  );
  res.sendStatus(200);
}
