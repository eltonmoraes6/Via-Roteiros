import express from "express";
import { store } from "../controllers/reviews.js";

import { verifyUser } from "../middleware/user.js";

const router = express.Router();

router.post("/:id", verifyUser, store);

export default router;
