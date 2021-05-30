const router = require('express').Router();
const productModel = require('../models/products/productModel');

router.get('/', productModel.getAllProducts);
router.get('/:id', productModel.getAProduct);

router.post('/new', productModel.createProduct);

router.patch('/:id', productModel.updateProduct);

router.delete('/:id', productModel.deleteProduct);


module.exports = router;