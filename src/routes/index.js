import express from "express";

import tours from "./tours.js";
import users from "./users.js";
import auth from "./auth.js";
import reviews from "./reviews.js";
import bookings from "./bookings.js";

const router = express.Router();

router.use("/api/v1/tours", tours);
router.use("/api/v1/users", users);
router.use("/api/v1/auth", auth);
router.use("/api/v1/reviews", reviews);
router.use("/api/v1/bookings", bookings);

export default router;
