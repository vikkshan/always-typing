const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const { Client, GatewayIntentBits: gib, Collection } = require("discord.js");
const client = new Client({
  intents: [
    gib.Guilds,
    gib.GuildEmojisAndStickers,
    gib.DirectMessages,
    gib.GuildBans,
    gib.MessageContent,
    gib.GuildInvites,
    gib.GuildWebhooks,
    gib.GuildMessages,
    gib.GuildMembers,
    gib.GuildIntegrations,
    gib.GuildVoiceStates,
    gib.GuildMessageReactions
  ],
});
module.exports = client;

client.login(process.env.token);

client.on("ready", () => {
  console.log("Bot is online")
  setInterval(() => {
    const channel = client.channels.cache.get("1005745587641126957"); if (!channel) return;
    channel.sendTyping().catch(() => { /* */ });
  }, 2000)
})
setInterval(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  }
}, 5000);