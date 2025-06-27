import mongoose from "mongoose";

const GSTInvoiceSchema = new mongoose.Schema(
  {
    PONo: String, // GST Invoice Number (e.g., TDPI331)
    TDGINV: String, // GST Invoice Number (e.g., TDPI331)
    ClientCode: String,
    InvoiceDate: String, // Date of the invoice
    ClientName: String,
    ClientAddress: String,
    ClientMobile: String,
    ClientGST: String,
    ClientPAN: String,
    ClientState: String,
    ClientStateCode: String,
    TotalProjectValue: String,
    ClientEmail: String,
    PVModules_SL: [String],
    Inverters_SL: [String],
    Batteries_SL: [String],
    Extra_SL: [String],
    discount: String,
    lessOnNetMetering: String,
    refundedAmount: String,
    refundDate: String,
    refundDescription: String,
    PVModules_ModelName: String,
    Inverters_ModelName: String,
    Batteries_ModelName: String,
    Extra_ModelName: String,
    TotalPaymentDone: String,
    SupplyPercentage: Number,
    invoiceGeneratedBy:String,
    materialDetails: String,
    inverterDetails:String,
    batteryDetails:String,
    amountInWords: String
  },
  {
    timestamps: true,
  }
);

const GSTInvoiceModel = mongoose.model("GSTInvoiceModel", GSTInvoiceSchema);

export default GSTInvoiceModel;