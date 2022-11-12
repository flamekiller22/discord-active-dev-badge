# Get Discord's Active Developer Badge

Well it's as simple as it sounds. All you have to do is host a docker container using the image URL below (for arm64 only):

`ghcr.io/flamekiller22/discord-active-dev-badge:main`

And add 3 environment variables:
TOKEN => your discord bot's token
GUILD_ID => the guild ID where you're going to use the slash commands
CLIENT_ID => the client ID of your bot.
