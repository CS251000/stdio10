import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    itemImage:{
        data:Buffer,
        type:String
    },
    itemName: String,
    category:String,
    fabricator:{
        type:String,
        ref:'Fabricators'
    },
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
    
    fabrication:{
        type:Number,
        ref:'Fabricators',
    },
    sizeWiseRateS:Number,
    sizeWiseRateMLXL:Number,
    sizeWiseRateXXL:Number,
    margin:Number,
    discount:Number,
    packingCharge:Number

});