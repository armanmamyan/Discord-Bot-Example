module.exports = (client, discordId, embed) => {
    client.users
    .fetch(discordId)
    .then((user) => {
        user.send({embeds: [embed]}).catch(err => console.log(err))
    })
}