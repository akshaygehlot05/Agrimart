const express = require("express");
const router = express.Router();

const {
  getProducts,
  addProduct,
  seedProducts,
  deleteProduct,
} = require("../controllers/productController");

router.get("/", getProducts);

router.post("/", addProduct);

router.delete("/:id", deleteProduct);

// Seed Products Route
router.get("/seed", seedProducts);

module.exports = router;