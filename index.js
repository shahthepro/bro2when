const Discord = require('discord.js')
const keys = require('./keys.json')

const bot = new Discord.Client()

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
  console.log('bro2when is online')
})

bot.on('message', message => {
  if (message.content.startsWith('?bro2when')) {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    message.reply(randomMessage)
  }
})

bot.login(keys.token)
