function checkAdmin(bot, msg, next) {
    // Логика проверки роли администратора
    if (msg.from.id === 12345) { // Пример проверки по userId
      next();
    } else {
      bot.sendMessage(msg.chat.id, 'Доступ запрещен');
    }
  }
  
  module.exports = {
    checkAdmin
  };
  