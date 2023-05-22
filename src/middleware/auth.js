import jsonwebtoken from "jsonwebtoken";

export const ensureAuthorized = (req, res, next) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    return res.status(401).json({ success: false, message: "Anauthorized" });
  }

  jsonwebtoken.verify(accessToken, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }

    req.user = user;
    next();
  });
};
