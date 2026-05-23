import { createToken } from "../service/token/js"
import { serversConfigDetails as config}  from "../config/index.js"
import axios from "axios";


export async function produce(req, res) {
    const tokenPayload = { mssg: `Hello From ${serversConfigDetails.srvrName}`}
    const token = createToken('test', tokenPayload);
    
    const url = `http://${config.srvrHost}:${config.otherPort}/api/consume`;
    const reqConfig = {
        headers: {
            Authorization: `Bearer: ${token}`
        }
    }

    try {
        await axios.post(url, {mssg: "Consuming...."} , reqConfig);
    }catch(err) {
        console.log(err);
        return res.status(500).json("something went wrong!")
    }
    return res.status(200).json("Done!")
}