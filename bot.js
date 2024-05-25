const TelegramBot = require('node-telegram-bot-api');
const config = require('./config/config');
const { setupRoutes } = require('./routes');
require('./utils/database');

const bot = new TelegramBot(config.telegramToken, { polling: true });

setupRoutes(bot);

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Я ваш новый Telegram бот.');
});

// Обработка текстовых сообщений
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   const text = msg.text;

//   // Ответ на каждое сообщение
//   bot.sendMessage(chatId, `Вы сказали: "${text}"`);
// });
