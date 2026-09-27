import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
  console.log("cookies:", req.cookies);
  console.log("token:", req.cookies.token);

  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Not authorized, no token",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = await User.findById(decoded.id).select("-password");

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

export default protect;