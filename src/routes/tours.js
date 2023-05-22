import express from "express";
import {
  store,
  index,
  show,
  destroy,
  update,
  getBySearch,
  getFeatured,
  getCount,
} from "../controllers/tour.js";

import { verifyAdmin, verifyUser } from "../middleware/user.js";

const router = express.Router();

router.post("/", verifyAdmin, store);

router.get("/", index);

router.get("/:id", show);

router.delete("/:id", verifyAdmin, destroy);

router.put("/:id", verifyAdmin, update);

//http://localhost:5000/tours/search/getBySearch?city=bali&distance=300&maxGroupSize=8
router.get("/search/getBySearch", getBySearch);
router.get("/search/getFeatured", getFeatured);
router.get("/search/count", getCount);

export default router;
