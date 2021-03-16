const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require("./config.json");

client.once('ready', () => {
	console.log('Ready!');
});
//Escuchando mensajes
client.on("message", function (message) {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();

	switch (command) {

		case "ping":
			const timeTaken = Date.now() - message.createdTimestamp;
			message.channel.send({
				embed: {
					color: 1752220,
					description: `${timeTaken} ms.`
				}
			});
			break;
	}

});

client.login(token); //Coneccion a Discord
