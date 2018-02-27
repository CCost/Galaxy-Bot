const Discord = require("discord.js");
const bot = new Discord.Client();
const p = "g!";

bot.on("ready", () => {
	console.log(`Logged in as ${bot.user.username} succesfully!`);
	bot.user.setPresence({ status: 'online', game: { name: 'g!help' } });
});

bot.on("guildMemberAdd", member => {
	let guild = member.guild;
	guild.defaultChannel.send(`**Welcome ${member.user.username} to ${guild.name}! I hope you have a nice time!**`);
});

bot.on("message", msg => {
	if (msg.content === (p + "help")) {
		var embed = new Discord.RichEmbed()
			.setColor(c)
			.setTitle("Help")
			.setDescription(`     Fun:\n          Nothing here yet!\n\n     Moderation:\n\n          Nothing here yet!\n\n     Other:\n          Help - Shows you a list of commands`);
		msg.channel.send(embed);
	}
});

bot.login(process.env.BOT_TOKEN);
