
import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import { connectUsingMongoose } from './src/config/mongoose.js';
import ProductController from './src/controllers/product.controller.js';




const app= express();
app.use(express.static('public'));

const productController= new ProductController();

app.use(ejsLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set(
  'views',
  path.join(path.resolve(), 'src', 'views')
);



app.get('/',(req,res)=>{
    res.render('index.ejs');
});
app.get('/add-product',productController.getAddProduct);
app.post('/',productController.postaddProduct);
const port = 8000;
app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
    connectUsingMongoose();
})