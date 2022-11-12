const { Events, InteractionType } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (interaction.isChatInputCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);
	
			if (!command) {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}
	
			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(`Error executing ${interaction.commandName}`);
				try {
					await interaction.reply("```diff\n- An error occurred while performing your request.```");
				} catch (err) {
					await interaction.editReply("```diff\n- An error occurred while performing your request.```");
				} finally {
					console.error(error);
				}
			}
		}
	}
};