import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

import User from "../models/User.js";

export const store = async (req, res) => {
  const { username, email, password, photo } = req.body;

  try {
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(password, salt);
    const newUser = new User({
      username,
      email,
      password: hash,
      photo,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User or password incorrect. Try again",
      });
    }

    const comparePassword = await bcryptjs.compare(password, user.password);

    if (!comparePassword) {
      return res.status(401).json({
        success: false,
        message: "User or password incorrect. Try again",
      });
    }

    const { password: pwd, role, __v, ...rest } = user._doc;

    const token = jsonwebtoken.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        message: "Successfull login",
        token,
        data: { ...rest },
        role,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to login. Try again",
    });
  }
};
