module.exports = {
    help: () => {       //Help text that gets returned
        return "Use this command for more information about other commands. >help or >help [command to search]";
    }
    ,
    func: (client, message, args) => {
        if(args[0] == null){        //If you type >help
            const testFolder = './commands/';
            const fs = require('fs');

            var commandArray = [];
	
	        //Loops through every file in the commands folder and adds them to the commandArray
            fs.readdirSync(testFolder).forEach(file => {
                str = file;
                str = str.slice(0, -3);
                str = str.charAt(0).toUpperCase() + str.slice(1);
                commandArray.push(str);
            })

            var commandList = "";

            //Loops through the commandArray and adds it as a string to the command list
            for(i = 0; i < commandArray.length; i++){
                if(i == 0){
                    commandList = "__**Commands**__```\n" + commandArray[i];
                } else {
                    commandList = commandList + "\n" + commandArray[i];
                }
            }

            commandList = commandList + "```__**Type >Help [command] for specific information about a command.**__"

            //Sends the full list of commands to the requester
            message.author.send(commandList);

        } else if(args[1] == null){     //If you say >help [command name here]
            try {
                //The wanted command
                var helpSearch = args[0];

                //Deletes the cached command file if it exists (gets rid of old copy of command file. Allows for live updates to the bot)
                try {
                    delete require.cache[require.resolve(`./${helpSearch}.js`)];
                } catch(err){
                    //Should never be needed but here in case
                }

                //Capitalizes the first letter of the wanted command if found
                var helpSearchCaps = helpSearch.charAt(0).toUpperCase() + helpSearch.slice(1);

                //Grabs a reference to the command
                let commandFile = require(`D:/Discord Bots/PinguBot/commands/${helpSearch}.js`);

                //Gets the help string from the command file
                var helpString = commandFile.help();

                //Sends the help text to the requester
                message.author.send("__**" + helpSearchCaps + "**__```\n" + helpString + "```");  
            } catch (err) {     //Catch for if the command isnt found
                message.author.send("There is no command with that name.")
            }
        } else {        //Case where user uses more than one argument. Example >help ping hello
            message.author.send("This command only takes one argument.")
        }
    }
}