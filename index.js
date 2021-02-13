const Discord = require('discord.js')

const bot = new Discord.Client()
const stephBot = new Discord.Client()

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

const stephTeaseAnswers = [
  `Want to know when the next update is coming? Soon™`,
  `The next car for the car hunt is a car with an engine`,
  `I will tell you everything you want to know about the game. Are you ready? Call me in 40 years.`,
  `You won’t have another event like the DS2. The next one will be DS3.`,
  `I'm busy giving relationship advice to people, get back to me later, duh.`
]

bot.on('ready', () => {
  console.log('bro2when is online')
})

stephBot.on('ready', () => {
  console.log('stephBot is online')
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

stephBot.on('message', message => {
  const command = message.content.toString()
    .replace(/[^a-z ]/gi, '')
    .replace(/\s+/g, ' ')
    .toLowerCase()

  const validCommand = command.startsWith('steph tease me') || 
    command.startsWith('tease me steph')

  if (validCommand) {
    const randomMessage = stephTeaseAnswers[Math.floor(Math.random() * stephTeaseAnswers.length)]
    message.reply(randomMessage)
  }
})

bot.login(process.env.BOT_TOKEN)
stephBot.login(process.env.STEPH_BOT_TOKEN)
