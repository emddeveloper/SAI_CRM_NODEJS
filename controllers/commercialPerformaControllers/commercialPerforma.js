import CommercialPerforma from "../../models/commercialPerformaModel/commercialPerforma.js";

const createCommercialPerforma = async (req, res) => {
  try {
    const { otp, ...formData } = req.body;

    // Validate OTP
    if (!otp || otp !== process.env.OTP) {
      return res.status(401).json({
        message: "You are not authorized to perform this action",
      });
    }

    // Save to DB
    const newEntry = await CommercialPerforma.create(formData);

    return res.status(201).json({
      message: "Commercial Performa submitted successfully",
      data: newEntry,
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error submitting Commercial Performa to database",
      error: error.message,
    });
  }
};

const getCommercialPerforma = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving CommercialPerforma from database",
      error: error.message,
    });
  }
};

const getAllCommercialPerformas = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving all AllCommercialPerformas from database",
      error: error.message,
    });
  }
};

export {
  createCommercialPerforma,
  getCommercialPerforma,
  getAllCommercialPerformas,
};
