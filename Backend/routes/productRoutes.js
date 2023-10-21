const express = require("express");
const router = express.Router();

const {
    getProducts,
    getCategories,
    getsingleProduct,
    postCategories,
} = require("../controllers/productController");

router.get("/products", getProducts);
router.get("/products/:id", getsingleProduct);

router.post('/categories', postCategories);
router.get('/categories', getCategories);

module.exports = router;