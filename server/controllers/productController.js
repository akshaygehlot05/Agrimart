const Product = require("../models/Product");
const products = require("../data/Products");

const getProducts = async (req, res) => {
  try {
    const productsList = await Product.find();
    res.json(productsList);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const seedProducts = async (req, res) => {
  try {
    await Product.deleteMany();

    const createdProducts = await Product.insertMany(products);

    res.json({
      message: "Products Seeded Successfully",
      count: createdProducts.length,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProducts,
  addProduct,
  seedProducts,
  deleteProduct,
};