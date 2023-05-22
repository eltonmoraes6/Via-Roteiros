import express from "express";
import { store, login } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", store);

router.post("/login", login);

export default router;
