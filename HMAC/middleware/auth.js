import { verifyToken } from "../service/token.js";

export function authenticate(req, res, next) {
    const authrzHeader = req.get('Authorization');
    if(!authrzHeader) { return res.status(401).json('Not Authenticated!');}

    const token = authrzHeader.slice(8);
    const decodedToken = verifyToken(token);

    if(!decodedToken) {return res.status(401).json('Invalid Token');}
    req.token = decodedToken;
    next();
}