const adminHandlers = require('./handlers/adminHandlers');
const authHandlers = require('./handlers/authHandlers');
const userHandlers = require('./handlers/userHandlers');

function setupRoutes(bot) {
  // Настройка маршрутов для администраторов
  adminHandlers.handleAdminCommands(bot);

  // Настройка маршрутов для аутентификации и регистрации
  authHandlers.handleAuthCommands(bot);

  // Настройка маршрутов для пользователей
  userHandlers.handleUserCommands(bot);
}

module.exports = {
  setupRoutes
};
