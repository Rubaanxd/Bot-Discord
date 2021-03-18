module.exports = {
    name: "join",
    description: "Conecta el bot a tu canal de voz",
    execute(message) {
        if (!message.member.voice.channel) {
            return message.channel.send({
				embed: {
					color: "FF0000",
					description: "Tienes que estar conectado a un canal de Voz"
				}
			});
        } 
        message.member.voice.channel.join();
    }
}