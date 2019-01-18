const Discord = require('discord.js');

const client = new Discord.Client();

process.on('SIGINT', function () {
    client.destroy();
    process.exit();
});

client.on('ready', () => {
    console.log('Yikes bot ready');
});

client.on('message', message => {
    if (message.author.bot) {
        return;
    }

    if (message.content === 'yikes') {
        const channel = message.channel;
        message.delete();
        channel.send('🇾 🇮 🇰 🇪 🇸');
    } else if (message.content === 'YIKES') {
        const channel = message.channel;
        message.delete();
        channel.send('🇾 🇮 🇰 🇪 🇸❗')
    }
});

client.login('');
