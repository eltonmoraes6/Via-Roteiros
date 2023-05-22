import { ensureAuthorized } from "./auth.js";
import { config } from "../config/config.js";

export const verifyUser = (req, res, next) => {
  ensureAuthorized(req, res, next, () => {
    const { id } = req.params;
    const { id: userID, role } = req.user;
    if (userID == id || role == config.ADMIN) {
      return next();
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  ensureAuthorized(req, res, next, () => {
    const { role } = req.user;
    if (role == config.ADMIN) {
      return next();
    } else {
      return res.status(401).json({
        success: false,
        message: "Anauthorized",
      });
    }
  });
};
