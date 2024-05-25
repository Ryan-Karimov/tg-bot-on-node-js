// Пример adminHandlers.js
const adminController = require('../controllers/adminController');

function handleAdminCommands(bot) {
  bot.onText(/\/addproduct/, (msg) => {
    adminController.addProduct(bot, msg);
  });

  bot.onText(/\/orders/, (msg) => {
    adminController.getOrders(bot, msg);
  });
}

module.exports = {
  handleAdminCommands
};
