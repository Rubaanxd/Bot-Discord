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

// Init the event listener only once (at the top of your code).
client.player
    // Emitted when channel was empty.
    .on('channelEmpty', (message, queue) =>
        message.channel.send(`The **${queue.connection.channel}** was empty, music was removed!`))
    // Emitted when a song was added to the queue.
    .on('songAdd', (message, queue, song) =>
        message.channel.send(`**${song.name}** has been added to the queue!`))
    // Emitted when a playlist was added to the queue.
    .on('playlistAdd', (message, queue, playlist) =>
        message.channel.send(`${playlist.name} playlist with ${playlist.videoCount} songs has been added to the queue!`))
    // Emitted when there was no more music to play.
    .on('queueEnd', (message, queue) =>
        message.channel.send(`The queue ended, nothing more to play!`))
    // Emitted when a song changed.
    .on('songChanged', (message, newSong, oldSong) =>
        message.channel.send(`**${newSong.name}** is now playing!`))
    // Emitted when a first song in the queue started playing (after play method).
    .on('songFirst', (message, song) =>
        message.channel.send(`**${song.name}** is now playing!`))
    // Emitted when someone disconnected the bot from the channel.
    .on('clientDisconnect', (message, queue) =>
        message.channel.send(`I got disconnected from the channel, music was removed.`))
    // Emitted when there was an error with NonAsync functions.
    .on('error', (message, error) => {
        switch (error) {
            // Thrown when the YouTube search could not find any song with that query.
            case 'SearchIsNull':
                message.channel.send(`No song with that query was found.`);
                break;
            // Thrown when the provided YouTube Playlist could not be found.
            case 'InvalidPlaylist':
                message.channel.send(`No Playlist was found with that link.`);
                break;
            // Thrown when the provided Spotify Song could not be found.
            case 'InvalidSpotify':
                message.channel.send(`No Spotify Song was found with that link.`);
                break;
            // Thrown when the Guild Queue does not exist (no music is playing).
            case 'QueueIsNull':
                message.channel.send(`There is no music playing right now.`);
                break;
            // Thrown when the Members is not in a VoiceChannel.
            case 'VoiceChannelTypeInvalid':
                message.channel.send(`You need to be in a Voice Channel to play music.`);
                break;
            // Thrown when the current playing song was an live transmission (that is unsupported).
            case 'LiveUnsupported':
                message.channel.send(`We do not support YouTube Livestreams.`);
                break;
            // Thrown when the current playing song was unavailable.
            case 'VideoUnavailable':
                message.channel.send(`Something went wrong while playing the current song, skipping...`);
                break;
            // Thrown when provided argument was Not A Number.
            case 'NotANumber':
                message.channel.send(`The provided argument was Not A Number.`);
                break;
            // Thrown when the first method argument was not a Discord Message object.
            case 'MessageTypeInvalid':
                message.channel.send(`The Message object was not provided.`);
                break;
            // Thrown when the Guild Queue does not exist (no music is playing).
            default:
                message.channel.send(`**Unknown Error Ocurred:** ${error}`);
                break;
        }
    });

module.exports = {
    name: "play-q",
    description: "Reproduce una playlist",
    aliases: ["pq"],
    execute(message, args) {
        client.player.playlist(message, {
            search: args.join(' '),
            maxSongs: -1
        });
    }
}