const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log('Toy listo guau guau')
    client.user.setActivity('!pochi', {type: 'WATCHING'})
})

client.on('message', message => {
    if(message.content === '!pochi') {
        message.channel.send('Grrrrr 🦷', {files: ['./images/pochi.jpg']})
    }
})

client.login('ODAzNjcxNzY2NjAwOTA4ODUx.YBBLqA.IbHqkX8eR4RJR7RpLgtn51OSmBE')