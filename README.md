# PinguBot Public Version
Current version - 1.0

### This is a basic full commented skeleton of PinguBot that is freely available to the public to be used as a starting point for your own bot.


**Setting up your new bot**

**First things first, Node.js**
>[This](https://nodejs.org/en/) is REQUIRED or else nothing will work. 

**Next, coding enviroment if you dont have one already**
>I highly suggest [Visual Studio Code](https://code.visualstudio.com/), compleatly free and very lightweight. 

**Last step for code setup, installing discord.js**
1. Start by opening Visual Studio Code.
2. Navigate to the file button in the top left and click Open Folder. 
3. Find the PinguBotPublic folder you should already have downloaded somewhere (if not do so now).
   * This should open the folder into Visual Studio Code.
4. Still in Visual Studio Code, click View and click Integrated Terminal.
5. Finally, in the Terminal that opened at the bottom type npm install discord.js and hit enter.
   * Wait for it to download everything and your all done. Dont worry about any errors in the Terminal log, thats normal.
   
**Next step is setting up your bots account**
1. Go to the [Discord Developers](https://discordapp.com/developers/docs/intro) site and sign in with your discord account.
2. After logging in click on **My Apps** on the side bar than click new app.
3. Give your bot a name and a profile picture than click **Create App**.
4. Next click on the **Create a Bot User** button. This turns your app into a bot account.

**Finally in order to use your bot you need to do a few more important things**
1. First, on your bots dashboard, click the **Click to reveal** next to token and copy that big string of letters and numbers
   * **DO NOT SHARE THIS, THIS WILL LET OTHER PEOPLE USE YOUR BOT ACCOUNT!**
2. Open the bot.js file in the PinguBot public folder and paste your token inside the quotation marks where is says client.login("Your bot token"). It should end up looking something like this.
```
client.login("as2345Df545g62fh892h18918h9")
```
3. Your bot can now login but its not on your server. To invite your bot copy the Client ID from your bots dashboard and go to [this](https://discordapi.com/permissions.html) site and paste your client ID in the field at the bottom left. Check off all the permissions you want your bot to have (I suggest giving them every permission) and than click the link that gets generated at the bottom. Select the server you want to add them to and TADA your bot is now on your server.
4. Last thing is to bring the bot online. Go back into Visual Studio Code and in the Terminal we used before, type node . and hit enter. Wait for just a moment and if you did everything right it should say the bot has logged in as whatever you named it. Go check you discord server and it should show them as online. Congrats you now have a working discord bot. To turn the bot off go back to the Terminal window and hit CTRL and C. The bot may still appear as online for a few minutes.

**Creating basic commands**
>Will be added soon
