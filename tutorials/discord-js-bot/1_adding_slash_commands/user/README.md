# Adding Slash Commands to our Bot

If you haven't seen the previous tutorial, make sure to read it first. You can access the whole series [here](https://cratecode.com/unit/ru1w1f268c).

It covers how to create a simple discord bot that responds to any message you send. I've copied over the final code from that tutorial here, but you'll need to fill in the `.env` file again. You can just go back and copy it from there to here.

## What are Slash Commands?

Before we get started with adding slash commands to our bot, we should figure out what they are in the first place. For years, Discord bots have been using text commands. Usually they start with a prefix (`!`), then the command name and any arguments. For example, many bots responded to `!help`.

Recently, Discord has added slash commands, which is a dedicated system for bot commands that make it easier for you (the author of the bot) and and users. They work a like text commands; you can access them by typing `/` then the command name in the discord chat.

The other reason to use slash commands is because Discord no longer allows bots above 100 servers to use text commands. If you want to make a bot that gets into at least 100 servers, you should skip text commands entirely. That's what we're going to do.

## How do we Create Slash Commands?

Traditional message commands work like this: the bot listens for messages (like what we did in the previous tutorial), checks if any of them are a command, and if so, handles the command.

Slash commands work a bit differently. First, you need to tell discord your list of commands. This will make the command display on a user's screen and lets them run it, but doesn't make the command do anything quite yet.

Once the command is on discord, discord will tell your bot whenever someone runs your command. Just like text commands, you listen for anyone using it and handle it if you do. The difference is that text commands work off of text (messages), while slash commands have their own special place to be handled.

## Sending Slash Commands to Discord

## Handling Slash Commands

## What to do Next?

