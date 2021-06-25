const Discord = require('discord.js')
const client = new Discord.Client()
var generalChannel;
client.on('ready', () =>{
    console.log("Connected as " +client.user.tag)

    client.user.setActivity("Working in the Sac Group Chat!")

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        guild.channels.cache.forEach((channel) =>{
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`);
        });
        //General channel id: XXXX
    });

    generalChannel = client.channels.cache.get("XXXX")
    generalChannel.send("```Q&A Bot is now Online, Made By F_i_n_n___#0001 and 4K0Hz#8933```")
});
client.on('message', message => {
    if (message.guild === null) { generalChannel.send("```" + message.author.tag + " Said: " + message.content + "```") ;}
});
client.login("XXXX")