import ProductRepository from "../repositories/product.repository.js";

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
            res.render('productadded.ejs');
        }catch(err){
            console.log(err);
        }
    }


}