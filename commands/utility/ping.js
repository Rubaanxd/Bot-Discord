module.exports = {
	name: 'ping',
	description: 'Muestra la latencia del bot al servidor.',
	execute(message) {
		const timeTaken = Date.now() - message.createdTimestamp;
			message.channel.send({
				embed: {
					color: 1752220,
					description: `${timeTaken} ms.`
				}
			});
	},
};