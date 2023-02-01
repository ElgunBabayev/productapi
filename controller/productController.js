const { model } = require("mongoose");
const { product } = require("../model/Product");

const productController = {
  getAll: (req, res) => {
    product.find({}, (err, doc) => {
      if (!err) {
        res.json(doc);
      }
    });
  },
  add: (req, res) => {
    let newProduct = new product({
      productName: req.body.productName,
      productDescription: req.body.productDescription
    })
    newProduct.save(function (err, doc) {
      if (!err) {
          res.json(doc)
      }
      else {
          res.status(500).json(err)
      }
  })
  }
};

module.exports = {
  productController,
};
