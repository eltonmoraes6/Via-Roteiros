import Review from "../models/Review.js";
import Tour from "../models/Tour.js";

export const store = async (req, res) => {
  const { id } = req.params;
  try {
    const { username, reviewText, rating } = req.body;
    const newReview = new Review({ username, reviewText, rating });
    console.log(newReview);
    const savedReview = await newReview.save();
    await Tour.findByIdAndUpdate(id, { $push: { reviews: savedReview._id } });

    res.status(200).json({
      success: true,
      message: "Review submitted",
      savedReview,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to submit. Try again",
    });
  }
};
