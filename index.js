require("dotenv").config();
const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const csv = require("csv");
const fs = require("fs");
const privateMessage = require("./private-message");
const configs = require("./config.json");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  fs.createReadStream("test.csv")
    .pipe(csv.parse())
    .on("data", (row) => {
      // Discord ID is the latest element on the array
      const discordId = row.slice(row.length - 1)[0];

      // Create Message
        // const embed = new MessageEmbed()
        // .setTitle('some title')
        // .setDescription('some description')
        // .setImage('image url')

      const embed = new MessageEmbed()
        .setTitle('Welcome to Discord Bot Commands')
        .setDescription('Hey There. This is you title description')
        .setTimestamp();
        privateMessage(client, discordId, embed);
    })
    .on("end", () => {
      console.log("CSV file successfully processed");
    });
});

client.login(configs.tokenID);