const Product = require('../models/product');

exports.getAddProduct = ({ res }) => {
  res.render('add-product', {
    pageTitle: 'Add Product Page',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res) => {
  const products = Product.fetchAll(products => {
    res.render('shop', {
      pageTitle: 'Add Product Page',
      path: '/',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
      products
    });
  });
};
