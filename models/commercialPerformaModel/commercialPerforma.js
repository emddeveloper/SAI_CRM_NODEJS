import mongoose from "mongoose";

const CommercialPerformaSchema = new mongoose.Schema(
  {
    otp: String,
    clientId: String,
    clientEmail: String,
    proposalDate: Date,
    proposalRefNumber: String,
    proformaInvoiceNumber: String,
    systemType: String,
    systemConnection: String,
    gridType: String,
    brand: String,
    type: String,
    moduleTechnology: String,
    moduleWatt: Number,
    quantity: Number,
    freeMaterial: String,
    inverterBrand: String,
    inverterPower: Number,
    totalProjectValue: Number,
    supplyPercentage: Number,
    applicationCost: Number,
    meterCost: Number,
    caCertificate: Number,
    fitnessCertificate: Number,
    extraHeightTotalCost: Number,
    transportationCost: Number,
    miscellaneousExpenses: Number,
    discount: Number,
    electricSupply: String,
    clientMobile: String,
    clientName: String,
    batteryBrand: String,
    batteryType: String,
    batteryCapacity: Number,
    batteryQuantity: Number,
    materialDiscount: Number,
    installationDiscount: Number,
    erectionDiscount: Number,
    netMeteringDiscount: Number,
    liaisonCost: Number,
    clientIdType: String,
    invoiceGeneratedBy: String,
    PVTotalRatingKW: Number,
    unitPrice1: Number,
    clientAddress: String,
    hsnsacCode2: String,
    unitPrice1Inverter: Number,
    hsnsacCode2Inverter: String,
    unitPrice1Solar: Number,
    hsnsacCode2Solar: String,
    formType: String,
  },
  {
    timestamps: true,
  }
);

const CommercialPerforma = mongoose.model(
  "CommercialPerforma",
  CommercialPerformaSchema
);

export default CommercialPerforma;
