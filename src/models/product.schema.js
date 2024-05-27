import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    itemImage:{
        data:Buffer,
        contentType:String
    },
    itemName: String,
    category:String,
    fabricator:String,
    clothRate:Number,
    clothName:String,
    averagePiece:Number,
    purchaseRate:Number,
    totalExpense:Number,
    quantityS:Number,
    quantityM:Number,
    quantityL:Number,
    
    quantityXL:Number,
    quantityXXL:Number,
    
    fabrication:Number,
    sizeWiseRateS:Number,
    sizeWiseRateMLXL:Number,
    sizeWiseRateXXL:Number,
    margin:Number,
    discount:Number,
    packingCharge:Number

});