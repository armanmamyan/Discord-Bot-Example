require("dotenv").config();
const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const csv = require("csv");
const fs = require("fs");
const privateMessage = require("./private-message");
const config = require("./config.json");
const imageGenerator = require("./imageGenerator");
const  DataImageAttachment = require("dataimageattachment")

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  fs.createReadStream("test.csv")
    .pipe(csv.parse())
    .on("data", async(row) => {
      // Discord ID is the latest element on the array
      const discordId = row.slice(row.length - 1)[0];
      const image = await imageGenerator(config.image);
      const attachment = await new DataImageAttachment(image, "racoon.png")

      // Create Message
        // const embed = new MessageEmbed()
        // .setTitle('some title')
        // .setDescription('some description')
        // .setImage('image url')

      const embed = await new MessageEmbed()
        .setTitle('Welcome to Raccoon Verse')
        .setDescription('New NFT collection which will become a new trend of NFT industry. Whitelist is open now, so hurry up claim yours.  https://discord.gg/FTBKZeJHt2')
        .setTimestamp();

        privateMessage(client, discordId, embed, attachment);
    })
    .on("end", () => {
      console.log("CSV file successfully processed");
    });
});

client.login(config.tokenID);