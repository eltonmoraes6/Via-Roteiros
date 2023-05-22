import Tour from "../models/Tour.js";
import { sortByQuery } from "../utils/query.js";

export const store = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
    });
  }
};

export const index = async (req, res) => {
  try {
    const tours = await sortByQuery(req, Tour, "reviews", "-__v");

    const { data, count } = tours;
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
    const tour = await Tour.findOne({ _id: id })
      .populate("reviews")
      .select("-__v");
    return res.status(200).json({ data: tour });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    await Tour.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ success: true, message: "Successfully deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    city,
    address,
    distance,
    photo,
    desc,
    price,
    maxGroupSize,
    reviews,
    featured,
  } = req.body;
  try {
    const newTour = {
      title,
      city,
      address,
      distance,
      photo,
      desc,
      price,
      maxGroupSize,
      reviews,
      featured,
    };
    const updatedTour = await Tour.findByIdAndUpdate(
      { _id: id },
      { $set: newTour },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Failed to update",
    });
  }
};

export const getBySearch = async (req, res) => {
  // Here 'i' means case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: tours,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Failed to update",
    });
  }
};

export const getFeatured = async (req, res) => {
  try {
    const tours = await Tour.find({
      featured: true,
    })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: tours,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Failed to update",
    });
  }
};

export const getCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Failed to tetch",
    });
  }
};
