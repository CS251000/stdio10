import { productSchema } from "../models/product.schema.js";
import mongoose from "mongoose";


export const ProductModel = mongoose.model('Product',productSchema);

export default class ProductRepository{
    constructor(){
        this.collection= "products";
    }

    async add(productData){
        try{
            const newProduct= new ProductModel(productData);
            const savedProduct= await newProduct.save(); 
        }catch(err){
            console.log(err);
        }
    }


}