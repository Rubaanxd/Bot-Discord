module.exports = {
    name: "leave",
    description: "Desconecta el bot del canal de voz",
    execute(message) {
        if (!message.guild.me.voice.channel) return message.channel.send("No estoy conectado a ningun canal de voz");
        message.guild.me.voice.channel.leave();
    }
}