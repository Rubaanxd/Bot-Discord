const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const Token = process.env.TOKEN;

client.once('ready', () => {
	console.log('Ready!');
});

client.login(config.token);