import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    jobSlip:{
        type:String,
        default:""
    },
    itemImage: {
        data: Buffer,
        contentType: String
    },
    itemName: {
        type: String,
        default: ""
    },
    clothMeter:{
        type:Number,
        default:0

    },
    clothQuality:{
        type:String,
        default:""

    },
    category: {
        type: String,
        default: ""
    },
    fabricator: {
        type: String,
        default: ""
    },
    clothRate: {
        type: Number,
        default: 0
    },
    clothName: {
        type: String,
        default: ""
    },
    averagePiece: {
        type: Number,
        default: 0
    },
    purchaseRate: {
        type: Number,
        default: 0
    },
    totalExpense: {
        type: Number,
        default: 0
    },
    quantityS: {
        type: Number,
        default: 0
    },
    quantityM: {
        type: Number,
        default: 0
    },
    quantityL: {
        type: Number,
        default: 0
    },
    quantityXL: {
        type: Number,
        default: 0
    },
    quantityXXL: {
        type: Number,
        default: 0
    },
    fabrication: {
        type: Number,
        default: 0
    },
    sizeWiseRateS: {
        type: Number,
        default: 0
    },
    sizeWiseRateMLXL: {
        type: Number,
        default: 0
    },
    sizeWiseRateXXL: {
        type: Number,
        default: 0
    },
    margin: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    packingCharge: {
        type: Number,
        default: 0
    }
});

