const Discord = require('discord.io')
const keys = require('./keys.json')

const bot = new Discord.Client({
   token: keys.token,
   autorun: true
});

const messages = [
  `I don't know`, 
  `I'm not sure`, 
  '*Angry Bro2-D2 noises*', 
  `It's coming soon:tm: but I don't know when`,
  `We don't know if or when it is coming`,
  `I'm gonna ban you if you ask that again`,
  `*Bro2 bonk*`
]

bot.on('ready', () => {
  `bro2when is online`
})
bot.on('message', (user, userID, channelID, message) => {
  if (message.startsWith('?bro2when')) {
    bot.sendMessage({
      to: channelID,
      message: messages[Math.floor(Math.random() * messages.length)]
    })
  }
})
