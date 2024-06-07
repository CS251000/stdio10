
import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import { connectUsingMongoose } from './src/config/mongoose.js';
import ProductController from './src/controllers/product.controller.js';
import { uploadFile } from './src/middlewares/add-image.middleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


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



app.get('/',productController.getAllProducts);
app.get('/add-product',productController.getAddProduct);
app.post('/',uploadFile.single('itemImage'),productController.postaddProduct);
app.post('/delete-product/:id',productController.deleteProduct);
app.get('/info-product/:id',uploadFile.single('itemImage'), productController.getProduct);
app.get('/update-product/:id',uploadFile.single('itemImage'), productController.getUpdateProduct);
app.post('/update-product/:id',uploadFile.single('itemImage'), productController.postUpdateProduct);



const port = 8800;
app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
    connectUsingMongoose();
})