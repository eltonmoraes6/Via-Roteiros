import User from "../models/User.js";
import { sortByQuery } from "../utils/query.js";

export const index = async (req, res) => {
  try {
    const results = await sortByQuery(req, User, "", "");

    const { data, count } = results;
    return res.status(200).json({
      success: true,
      message: "Successful",
      count,
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const show = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.findById(id).select("-__v");
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ success: true, message: "Successfully deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  try {
    const newUser = {
      username,
      email,
    };
    const updatedUser = await User.findByIdAndUpdate(
      { _id: id },
      { $set: newUser },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Failed to update",
    });
  }
};
