const Discord = require('discord.js');
const client = new Discord.Client();

const { Player } = require("discord-music-player");
const player = new Player(client, {
    leaveOnEnd: false,
    leaveOnStop: false,
    leaveOnEmpty: true,
    timeout: 0,
    volume: 150,
    quality: 'high',
});
// You can define the Player as *client.player* to easly access it.
client.player = player;
module.exports = {
    name: "queue",
    description: "Muestra la cola de Reproduccion",
    aliases: ["q"],
    execute(message, args) {
        let queue = client.player.getQueue(message);
        if(queue){
            message.channel.send('Queue:\n'+(queue.songs.map((song, i) => {
                return `${i === 0 ? 'Now Playing' : `#${i+1}`} - ${song.name} | ${song.author}`
            }).join('\n')));
        }
    }
}