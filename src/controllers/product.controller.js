import ProductRepository from "../repositories/product.repository.js";
import { ProductModel } from "../repositories/product.repository.js";

export default class ProductController{
    constructor(){
        this.productRepository= new ProductRepository();
    }

    getAddProduct(req,res){
        res.render('add-product.ejs');
    }

    async postaddProduct(req,res){
        try{
            console.log(req.body);
            const {itemName,category,fabricator,clothRate,clothName,averagePiece,purchaseRate,quantityS,quantityM,quantityL,quantityXL,quantityXXL,fabrication,sizeWiseRateS,sizeWiseRateMLXL,sizeWiseRateXXL,margin,discount,packingCharge} = req.body;


            const newProduct = new ProductModel({
                itemName,
                category,
                fabricator,
                clothRate,
                clothName,
                averagePiece,
                purchaseRate,
                quantity: { S: quantityS, M: quantityM, L: quantityL, XL: quantityXL, XXL: quantityXXL }, 
                fabrication,
                sizeWiseRate: { S: sizeWiseRateS, MLXL: sizeWiseRateMLXL, XXL: sizeWiseRateXXL }, 
                margin,
                discount,
                packingCharge
            });
            await newProduct.save();
            res.render('productadded.ejs');
        }catch(err){
            console.log(err);
            res.status(500).render('error.ejs');
        }
    }


}