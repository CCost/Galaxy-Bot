const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json");

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.username} succesfully!`);
});

bot.on("guildMemberAdd", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome ${member.user.username} to ${guild.name}! If you want to talk to the leader, go ahead! His name is ${guild.owner.displayName}!`);
});

bot.on("message", msg => {

  if (command === "help") {
	var embed = new Discord.RichEmbed() {
		
	}
    msg.channel.sendEmbed(`     Fun:\n          Nothing here yet!\n     Moderation:\n          Nothing here yet!\n     Other:\n          Help`);
  }

});

bot.login(process.env.BOT_TOKEN);
