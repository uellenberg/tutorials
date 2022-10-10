# Creating a Discord.JS Bot

Discord is a social platform for people all around the world to share in their common interests. Like many social platforms, discord can be enhanced with bots—little automations that can do anything from increasing your productivity to playing music for you, and even playing mini games inside of discord. The possibilities for a discord bot are nearly endless.

So, how do we make one?

## Discord.JS

The first step is to write a program that connects to discord. We'll do that using a library called [discord.js](https://discord.js.org/).

Before we go any further, I'd like to give a quick reminder about how Cratecode works to anyone reading this. If you haven't already, signing up to Cratecode gives you access to writing and running your code in-browser. That means you can create your discord bot and follow this tutorial in the same window. If you still aren't signed up, you can keep reading, but you'll have to write your code somewhere other than Cratecode.

Now, where were we? `discord.js` is a JavaScript library that lets us connect to discord. To use it, run `yarn add discord.js` in the console (or `npm i discord.js`, your pick). Now that we have `discord.js` installed, we can start using it.

## A Simple Discord Bot

Now, open up or create a file called `index.js`. If you're creating your bot on Cratecode, you can click the folder icon to your right, then double click on `index.js`. Now, we have to connect it to discord. [Here's an example piece of code that you can use to do that](../examples/basic.js).

If you try to run this code, you might notice a glaring issue: `BOT_TOKEN` isn't defined. We need credentials (think username and password) to log in to discord. Before we can get our `BOT_TOKEN`, we need to talk about how to secure it.

## .env Files

One common practice is to store "secrets" (like passwords) in a file called `.env`. Then, if we want to send our code to someone else, we can simply send it without the `.env` file, and our secrets our same. In order to do this, we need to do three things. First, we'll install a library called `dotenv`, which works with `.env.` files. You can do this by typing `yarn add dotenv` into your console. Next, we need to tell `dotenv` to load our `.env` file. You can do this by adding `require("dotenv).config();` to the very top of your `index.js` file. Now, all that's left is to create a `.env` file and add secrets to it.

## Creating a Bot Account

To connect to discord, we need a bot account. It's similar to your discord account, but it has a little "Bot" badge next to it and it can be used as a discord bot. To create a bot account, you first need to do it. Here's how:
1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Press the `New Application` button.
3. Give your bot a name and press the `Create` button. I'll call mine `Counter Bot`, but you can call yours anything.

Now, you should see your bot application's page. You can change the details (like the username, profile picture, and description) for your bot here, and you can always come back at any time from the discord developer portal. To make your bot account, click the `Bot` button in the panel to the left. After that, click the `Add Bot` button. Congratulations, your bot now has a discord account!

## Bot Token

On this page you can access something called the `token`. The token is basically a username and password all-in-one. If someone gets access to it, they'll have full access to your bot, and can do anything with it that they want. Because of this, make sure that you don't give your bot tokens to anyone unless you really trust them. Luckily, you can reset the token at any time in case it does get leaked.

Now that that's out of the way, let's get the bot token. All you need to do is click the `Reset Token` button. It's important to note that if you reload the page, you won't be able to access your bot token (you can always reset it again though), so make sure to copy it. Now, let's add it to our bot.

## Using Our Bot Token

The first thing we need to do is create a file called `.env`. Inside of this file, add a line that starts with `BOT_TOKEN=`, then paste your bot token so that it's next to the equals sign. If your bot token was `ABCDEFG`, for example, you should have a file that looks like:
```
BOT_TOKEN=ABCDEFG
```

Once you have that, it's time to actually use the bot token. Open up `index.js` again, and look at the bottom where it says `BOT_TOKEN`. You need to replace it with `process.env.BOT_TOKEN`, so the whole line reads `client.login(process.env.BOT_TOKEN);`.

`process.env` contains all of our secrets stored in the `.env` file. Doing `process.env.BOT_TOKEN` gets the bot token stored in it. For the example `.env` file above, doing `process.env.BOT_TOKEN` would be `"ABCDEFG"`, and so would pass `"ABCDEFG"` to the `client.login` function.

Now, let's do a quick check to ensure that our bot is actually setup. Click the `Run` button (or if you aren't on Cratecode, type `node index.js`). You should now see a message that says `Connected Successfully!`. If you don't, or if you received an error, then there's something wrong with your setup. In the end, your file should look like [this](../examples/authed.js).