// Read from our .env file.
require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

// Create a new discord client (to connect to discord)
// and let it view guilds (discord servers) that it's in.
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// To make sure that everything works, we'll send a message
// when our bot connects to discord.
client.once("ready", () => {
    console.log("Connected Successfully!");
});

// Receive messages. This will run every time
// someone sends a message.
client.on("messageCreate", (msg) => {
    // Don't handle messages from bots.
    if(msg.author.bot) return;

    msg.channel.send("It works!");
});

// We also need to log in to discord.
client.login(process.env.BOT_TOKEN);