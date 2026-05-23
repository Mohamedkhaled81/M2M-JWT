import { config } from "dotenv"
config();

export const serversConfigDetails = {
    srvrHost: "localhost",
    srvrPort: +process.env.serverFlag ? process.env.SERVER_B_PORT : process.env.SERVER_A_PORT,
    srvrName: +process.env.serverFlag ? process.env.SERVER_B_NAME : process.env.SERVER_A_NAME,
    tokenSecret: process.env.TOKEN_SECRET
};