module.exports = {
    name: "leave",
    description: "Desconecta el bot del canal de voz",
    execute(message) {
        if (!message.guild.me.voice.channel){
            return message.channel.send({
				embed: {
					color: "FF0000",
					description: "No estoy conectado a nungun canal de voz"
				}
			});
        } 
        message.guild.me.voice.channel.leave();
    }
}