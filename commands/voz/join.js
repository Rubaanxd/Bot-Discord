module.exports = {
    name: "join",
    description: "Conecta el bot a tu canal de voz",
    execute(message) {
        if (!message.member.voice.channel) return message.channel.send("Debes estar conectado a un canal de voz!"); 
        message.member.voice.channel.join();
    }
}