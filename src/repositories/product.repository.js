import { productSchema } from "../models/product.schema.js";
import mongoose from "mongoose";


const ProductModel = mongoose.model('Product',productSchema);

export default class ProductRepository{
    constructor(){
        this.collection= "products";
    }

    async add(productData){
        try{
            productData.sizes= productData.sizes.split(',');
            productData.sizeWiseQuantity= productData.sizeWiseQuantity.split(',');
            const newProduct= new ProductModel(productData);
            const savedProduct= await newProduct.save(); 
        }catch(err){
            console.log(err);
        }
    }


}