import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import commercialPerformaRoutes from "./routes/commercialPerformaRoutes/commercialPerforma.js";
import GSTInvoiceRoutes from "./routes/GSTInvoiceRoutes/GSTInvoice.js";
import { mongoConnection } from "./dbConfig/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors("*"));
app.use(express.json());

// mongoConnection();
(async () => {
  await mongoConnection();
})();

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the API - Server Running Properly </h1>");
  console.log("welcomes!!");
});


app.use("/api/v1/commercialPerforma", commercialPerformaRoutes);
app.use("/api/v1/gstinvoice", GSTInvoiceRoutes);



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
