const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("602151678442995732")
setInterval(function() {
channel.send(`اكتب هنا ااش تريد يكتب فب السبام`);
}, 30)
})

client.login(process.env.BOT_TOKEN);