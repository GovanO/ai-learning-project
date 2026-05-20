require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN; // Replace with your bot token from BotFather
const bot = new TelegramBot(token, { polling: true });

// /start command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Welcome! Use /help to see available commands.');
});

// /help command
bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Available commands:\n/start - Start the bot\n/help - Show this help message\n/echo - Echo your message');
});
