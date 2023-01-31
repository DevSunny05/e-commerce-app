import JWT from "jsonwebtoken";
import userModel from "../models/user-model.js";

// protected routes token base

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Error in Moddleware",
      error,
    });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);

    if (user.role !== 1) {
      return res.status(404).json({
        success: false,
        message: "UnAuthorize Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Error in Moddleware",
      error,
    });
  }
};
