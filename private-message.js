module.exports = (client, discordId, embed, attachment, button) => {
    ;

    client.users
    .fetch(discordId)
    .then((user) => {
        user
        .send({
            embeds: [embed],
            files: [attachment],
            buttons: [button],
        })
        .then(() => process.exit())
        .catch(err => console.log(err))
    });
}