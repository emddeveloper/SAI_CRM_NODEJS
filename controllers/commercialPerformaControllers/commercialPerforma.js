import CommercialPerforma from "../../models/commercialPerformaModel/commercialPerforma.js";

const generateProformaInvoiceNumber = async () => {
  const lastEntry = await CommercialPerforma.findOne()
    .sort({ createdAt: -1 }) // Get the most recent entry
    .select("TDPIC");

  if (!lastEntry || !lastEntry.TDPIC) {
    return "TDPIC01";
  }

  const lastNumber = parseInt(lastEntry.TDPIC.replace("TDPIC", "")) || 0;
  const newNumber = lastNumber + 1;

  // Pad with leading zeroes to keep two digits (01, 02, ..., 10, etc.)
  return `TDPIC${String(newNumber).padStart(2, "0")}`;
};

const createCommercialPerforma = async (req, res) => {
  try {
    const { otp, ...formData } = req.body;

    // Validate OTP
    if (!otp || otp !== process.env.OTP) {
      return res.status(401).json({
        message: "You are not authorized to perform this action",
      });
    }

    // Generate new TDPIC
    const TDPIC = await generateProformaInvoiceNumber();

    // Add it to form data
    const newEntry = await CommercialPerforma.create({
      ...formData,
      TDPIC,
    });
    return res.status(201).json({
      message: "Commercial Performa submitted successfully",
      data: newEntry,
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
