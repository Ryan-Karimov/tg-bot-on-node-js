// Пример adminController.js
const productController = require('./productController');
const Order = require('../models/order');

function getOrders(bot, msg) {
  // Логика получения заказов
}

function addProduct(bot, msg) {
  // Логика добавления продукта
  productController.addProduct(msg);
}

module.exports = {
  getOrders,
  addProduct
};
