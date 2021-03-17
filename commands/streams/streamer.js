const Discord = require('discord.js');
module.exports = {
    name: 'streamer',
    description: 'Information about the arguments provided.',
    args: true,
    execute(message, args) {

        const rubaanxd = new Discord.MessageEmbed()
            .setColor("6441a5")
            .setTitle("RubaanxD")
            .setURL("https://www.twitch.tv/rubaanxd")
            .setDescription("Me llamo Ruben intento ser gamer aunque no salgo de los mismos juegos. \n La verdad soy bien mal hablado, intento cuidar mi lenguaje pero a veces se me salen, asi que si escuchas alguna no te espantes ni te ofendas.")
            .addField("Horario", "Estos dias hago stream")
            .addFields(
                { name: 'Lunes', value: 'A partir de las 9:30 PM Hora CDMX', inline: true },
                { name: 'Miercoles', value: 'A partir de las 9:30 PM Hora CDMX', inline: true },
                { name: 'Viernes', value: 'A partir de las 9:30 PM Hora CDMX', inline: true },
            )
            .setImage("https://i.ibb.co/tLKxrGb/rubaanxd.png")

        const mankarlitos = new Discord.MessageEmbed()
            .setColor("6441a5")
            .setTitle("Mankarlitos")
            .setURL("https://www.twitch.tv/mankarlitos")
            .setDescription("Intento de Jugador de shooters entre otros, tratando de pasarla bien junto con mis amigos (bueno a veces) y de entretener a mi audiencia, Los TKM")
            .addField("Horario", "Estos dias hago stream")
            .addFields(
                { name: 'Lunes', value: 'De 9:00 PM a 1:00 AM', inline: true },
                { name: 'Martes', value: 'De 9:00 PM a 1:00 AM', inline: true },
                { name: 'Miercoles', value: 'De 9:00 PM a 1:00 AM', inline: true },
                { name: 'Jueves', value: 'De 9:00 PM a 1:00 AM', inline: true },
                { name: 'Viernes', value: 'De 9:00 PM a 1:00 AM', inline: true },
            )
            .setImage("https://i.ibb.co/Wt4FVbB/mankarlitos.png")
        switch (args[0]) {
            case "foo":
                message.channel.send("bar");
                break;

            case "rubaanxd":
                message.channel.send(rubaanxd);
                break;

            case "mankarlitos":
                message.channel.send(mankarlitos);
                break;
        }
    },
};