const Discord = require('discord.js')

const bot = new Discord.Client()

const messages = [
  `I don't know`, 
  `I'm not sure`, 
  '*Angry Bro2-D2 noises*', 
  `It's coming soon:tm: but I don't know when`,
  `We don't know if or when it is coming`,
  `I'm gonna ban you if you ask that again`,
  `*Bro2 bonk*`,
  `Thanks for your asking, your enquiry is really important to us!
I’m going to tell you now, we do not know when it'll be here. Bye~`,
  `Do you know that a kitten gets killed everytime you ask that question?`,
  `*Events go brrrrrr...*`
]

const messages_bro2why = [
  '42',
  'bananas',
  'because koalas decided it to be so',
  'are you sure you want the answer to that?',
  'we might never find out',
  "that's highly classified",
  "if I tell you, I'd have to ban you",
  "you can't handle the truth"
]

bot.on('ready', () => {
  console.log('bro2when is online')
})

bot.on('message', message => {
  if (/^[!?@]?bro2when.*/i.test(message.content)) {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    message.reply(randomMessage)
  }
})

bot.on('message', message => {
  if (/^[!?@]?bro2why.*/i.test(message.content)) {
    const randomMessage = messages_bro2why[Math.floor(Math.random() * messages_bro2why.length)]
    message.reply(randomMessage)
  }
})

bot.login(process.env.BOT_TOKEN)
