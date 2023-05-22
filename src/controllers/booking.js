import Booking from "../models/Booking.js";
import sortByQuery from "../utils/query.js";

export const store = async (req, res) => {
  try {
    const { tourName, fullName, guestSize, phone, bookAt } = req.body;
    const newBooking = new Booking({
      tourName,
      fullName,
      guestSize,
      phone,
      bookAt,
    });
    const savedBooking = await newBooking.save();

    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const index = async (req, res) => {
  try {
    const results = await sortByQuery(req, Booking, "", "");

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
    const result = await Booking.findById(id).select("-__v");
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, message: "Not found" });
  }
};
