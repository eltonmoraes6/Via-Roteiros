import express from "express";
import { index, show, store } from "../controllers/booking.js";

import { verifyUser } from "../middleware/user.js";

const router = express.Router();

router.post("/", verifyUser, store);

router.get("/", verifyUser, index);

router.get("/:id", verifyUser, show);

export default router;
