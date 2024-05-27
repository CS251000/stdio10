import ProductRepository from "../repositories/product.repository.js";
import { ProductModel } from "../repositories/product.repository.js";
import fs from "fs";

export default class ProductController{
    constructor(){
        this.productRepository= new ProductRepository();
    }

    async getAllProducts(req,res,next){
        try{
        const items= await ProductModel.find().sort({itemName:'asc'});
        res.render('index',{ items });
        }catch(err){
            console.error('Error fetching items:', err);
        res.status(500).send('Internal Server Error');
        }
    }

    getAddProduct(req,res){
        res.render('add-product.ejs');
    }

    async postaddProduct(req,res){
        try{
            console.log(req.body);
            console.log(req.file);
        

        var expensePasting = parseFloat(req.body.expensePasting) || 0;
        var expenseKadhai = parseFloat(req.body.expenseKadhai) || 0;
        var expenseWashing = parseFloat(req.body.expenseWashing) || 0;
        var expenseButton = parseFloat(req.body.expenseButton) || 0;
        var expenseDesign = parseFloat(req.body.expenseDesign) || 0;
        var expensePrint = parseFloat(req.body.expensePrint) || 0;
        var expenseID = parseFloat(req.body.expenseID) || 0;
        var expensedoublePocket = parseFloat(req.body.expensedoublePocket) || 0;

       var totalExpense = expensePasting + expenseKadhai + expenseWashing + expenseButton + expenseDesign + expensePrint + expenseID + expensedoublePocket;

            
            const {itemName,category,fabricator,clothRate,clothName,averagePiece,purchaseRate,quantityS,quantityM,quantityL,quantityXL,quantityXXL,fabrication,sizeWiseRateS,sizeWiseRateMLXL,sizeWiseRateXXL,margin,discount,packingCharge} = req.body;


            const newProduct = new ProductModel({
                itemImage:{
                    data:req.file.buffer,
                    contentType:req.file.mimetype
                },
                itemName,
                category,
                fabricator,
                clothRate,
                clothName,
                averagePiece,
                purchaseRate,
                totalExpense,
                quantityS,
                quantityM,
                quantityL,
                quantityXL,
                quantityXXL, 
                fabrication,
                sizeWiseRateS,
                sizeWiseRateMLXL,
                sizeWiseRateXXL,
                margin,
                discount,
                packingCharge,
                
            });
            await newProduct.save();
            res.render('productadded.ejs');
        }catch(err){
            console.log(err);
            res.status(500).render('error.ejs');
        }
    }
    async deleteProduct(req, res) {
        try {
            const productId = req.params.id; // Assuming the product ID is passed as a URL parameter
            await ProductModel.findByIdAndDelete(productId);
            const items= await ProductModel.find().sort({itemName:'asc'});
            res.render('index',{items});
        } catch (err) {
            console.error('Error deleting product:',err);
            res.status(500).send('Internal Server Error');
        }
    }

    async getUpdateProduct(req, res) {
        try{
        const productId = req.params.id;
        const item= await ProductModel.findOne({_id:productId});
        res.render('update.ejs', { item });
        }catch(err){
            console.log(err);
        }
    }

    async  postUpdateProduct(req, res) {
        console.log(req.body);
        const { itemName, category, fabricator, clothRate, clothName, averagePiece, purchaseRate, totalExpense, quantityS, quantityM, quantityL, quantityXL, quantityXXL, fabrication, sizeWiseRateS, sizeWiseRateMLXL, sizeWiseRateXXL, margin, discount, packingCharge } = req.body;

    
        let itemImage = null;
    
        if (req.file) {
            itemImage = {
                data: fs.readFileSync(req.file.path),
                contentType: req.file.mimetype
            };
        }
    
        try {
            const productId = req.params.id;
            const existingProduct = await ProductModel.findById(productId);
    
            if (!existingProduct) {
                return res.status(404).send('Product not found');
            }
    
            const updateData = {
                itemName, category, fabricator, clothRate, clothName, averagePiece, purchaseRate,
                totalExpense, quantityS, quantityM, quantityL, quantityXL, quantityXXL, fabrication, sizeWiseRateS,
                sizeWiseRateMLXL, sizeWiseRateXXL, margin, discount, packingCharge
            };
    
            
            if (itemImage) {
                updateData.itemImage = itemImage;
            } else {
                updateData.itemImage = existingProduct.itemImage;
            }
    
            const updatedProduct = await ProductModel.findByIdAndUpdate(productId, updateData, { new: true });
    
            if (!updatedProduct) {
                return res.status(404).send('Product not found after update');
            }
    
            const items = await ProductModel.find().sort({ itemName: 'asc' });
            res.render('index.ejs', { items });
        } catch (err) {
            console.error('Error updating product:', err);
            res.status(500).send('Internal Server Error');
        }
    }
    
    


};