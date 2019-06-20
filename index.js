const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '642010118:AAENJ-XUKCA5n0TImQKhFKvutbko2eG5vGI'

const bot = new TelegramBot(TOKEN, {polling:true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello from Heroku, bot says:"Hi,"' + {msg.from.first_name})
})
