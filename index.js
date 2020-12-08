const Discord = require('discord.js')

const bot = new Discord.Client()

const answers = {
  when: [
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
  ],
  why: [
    '42',
    'bananas',
    'Because koalas decided it to be so',
    'Are you sure you want the answer to that?',
    'We might never find out',
    `That's highly classified`,
    `If I tell you, I'd have to ban you`,
    `You can't handle the truth`,
    `*Kangaroo Punch*`
  ],
  how: [
    `I'm doing good, Thanks for asking :tears:`,
    `Here have this internet cookie :cookie:`,
    `Just know that I love you all :love:`
  ]
}

bot.on('ready', () => {
  console.log('bro2when is online')
})

const matchRegex = /^[!?@]?bro2([a-z]+)\s.*/i

bot.on('message', message => {
  const out = (message.content.toString() || '').match(matchRegex)

  if (out) {
    const [, keyword] = out

    if (answers[keyword]) {
      const randomMessage = answers[keyword][Math.floor(Math.random() * answers[keyword].length)]
      message.reply(randomMessage)
    }
  }
})


bot.login(process.env.BOT_TOKEN)
