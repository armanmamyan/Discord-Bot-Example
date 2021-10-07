module.exports = (client, discordId, embed) => {
    client.users
    .fetch(discordId)
    .then((user) => {
        user
        .send({embeds: [embed]})
        .then(() => process.exit())
        .catch(err => console.log(err))
    });
}