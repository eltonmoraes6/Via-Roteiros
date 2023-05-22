import express from "express";
import { index, show, destroy, update } from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../middleware/user.js";

const router = express.Router();

router.get("/", verifyAdmin, index);

router.get("/:id", verifyUser, show);

router.delete("/:id", verifyUser, destroy);

router.put("/:id", verifyUser, update);

export default router;
