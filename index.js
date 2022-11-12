const { Client, Collection, GatewayIntentBits } = require("discord.js");
require("dotenv/config");
const fs = require("node:fs");
const path = require('node:path');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.commands = new Collection();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventsPath = path.join(__dirname, 'src/events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(".js"));
const commandsPath = path.join(__dirname, 'src/commands');
const commandFolders = fs.readdirSync(commandsPath);

(async () => {
    for (file of functions) {
        require(`./src/functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, eventsPath);
    client.handleCommands(commandFolders, commandsPath);
    client.login(process.env.TOKEN);
})()