module.exports = {
    name: "streamers",
    description: "Muestra los streamers dentro de esta comunidad",
    execute(message) {
        message.channel.send({
            embed: {
                color: "#6441a5",
                title: "rubaanxd , mankarlitos",
                description: "Para mas informacion escribe .streamer nombre del streamer"
            }
        });
    }
};