# PinguBot Public Version
Current version - 1.0

### This is a basic full commented skeleton of PinguBot that is freely available to the public to be used as a starting point for your own bot.


##Setting up your new bot

First things first, Node.js
>This is REQUIRED or else nothing will work. [Link](https://nodejs.org/en/)

Next, coding enviroment if you dont have one already
>I highly suggest Visual Studio Code, compleatly free and very lightweight. [Link](https://code.visualstudio.com/)

Last step for code setup, installing discord.js
1. Start by opening Visual Studio Code.
2. Navigate to the file button in the top left and click Open Folder. 
3. Find the PinguBotPublic folder you should already have downloaded somewhere (if not do so now).
   * This should open the folder into Visual Studio Code.
4. Still in Visual Studio Code, click View and click Integrated Terminal.
5. Finally, in the Terminal that opened at the bottom type npm install discord.js and hit enter.
   * Wait for it to download everything and your all done. Dont worry about any errors in the Terminal log, thats normal.
   
Next step is setting up your bots account
1. Go to the [Discord Developers](https://discordapp.com/developers/docs/intro) site and sign in with your discord account.
2. After logging in click on **My Apps** on the side bar than click new app.
3. Give your bot a name and give it a profile picture than click create app.
4. Next click on the **Create a Bot User** button. This turns your app into a bot account.

Finally in order to use your bot you need to do a few more things
1. First, on your bots dashboard, click the **Click to reveal** next to token and copy that big string of letters and numbers
   * **DO NOT SHARE THIS, THIS WILL LET OTHER PEOPLE USE YOUR BOT ACCOUNT!**
2. Open the bot.js file in the PinguBot public folder paste your token inside the quotation marks where is says client.login("Your bot token") replacing Your bot token. It should end up looking something like this
```
client.login("as2345Df545g62fh892h18918h9")
```
3. Your bot can now login but its not on your server. To invite your bot copy the Client ID from your bots dashboard and go to [this](https://discordapi.com/permissions.html) site and paste your client ID in the field at the bottom left. Finally check off all the permissions you want your bot to have (I suggest giving them every permission) and than click the link that gets generated at the bottom. Finally select the server you want to add them to and TADA your bot is now on your server.
