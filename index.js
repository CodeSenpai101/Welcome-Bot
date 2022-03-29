const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTU4MDkwMjY4NzY5NDE5Mzg0.YkIRGA.cli1eIDX_NEQ6-q-F_WnJ0xokrI"

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
  if (message.content == "hi"){
      message.reply("Hello World")
  }
})

client.login(process.env.TOKEN)