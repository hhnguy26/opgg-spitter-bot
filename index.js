const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ">"

client.on('ready', () => {
    console.log('Ready!');
})

client.on('message', (message) => {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    var args = message.content.toLowerCase().split(" ").slice(1);

    if(message.content.startsWith(prefix + 's')) {
        var baseUrl = "http://oce.op.gg/summoner/userName=";
        var a = args.join(' ');
        var b = a.replace(/joined the lobby/g, ' ');
        var c = b.replace(/\s\s/g, '');
        var names = c.split('\n');
        for (i = 0; i < names.length; i++) {
            names[i] = names[i].replace(/\s/g, '+');
            message.channel.send(baseUrl + names[i]);
        }

        console.log(names);

    }
        
});

client.login(process.env.BOT_TOKEN);