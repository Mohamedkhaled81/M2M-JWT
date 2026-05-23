import express from "express";
import { authenticate } from "../middleware/auth.js"
import { produce } from "../controller/produce.js";
import { consume } from "../controller/consumer.js";

const router = express.Router();

router.post('/produce', produce);


router.use(authenticate);
router.post('/consume', consume);


export { router };