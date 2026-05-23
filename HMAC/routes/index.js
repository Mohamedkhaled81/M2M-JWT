import express from "express";
import { authenticate } from "../middleware/auth.js"

const router = express.Router();

router.post('/produce', () => {});


router.use(authenticate);
router.post('/consume', () => {});


export { router };