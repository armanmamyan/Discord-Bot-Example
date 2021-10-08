module.exports = (client, discordId, embed, attachment) => {
    ;

    client.users
    .fetch(discordId)
    .then((user) => {
        user
        .send({
            embeds: [embed],
            files: [attachment],
        })
        .then(() => process.exit())
        .catch(err => console.log(err))
    });
}