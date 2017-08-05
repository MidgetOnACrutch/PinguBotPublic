var fs = require('fs');

module.exports = {      //Help text that gets returned
    help: () => {
        return "ADMIN - Purge a defined number of messages from the current channel. >purge [amount to purge]";
    }
    ,
    func: (client, message, args) => {
    if(args[0] == null){        //If no argument give. Example >purge
        message.channel.send("You need to tell me how many messages you want purged.");
    } else if(args[1] == null){
            if((message.member.roles.has("role id here"))){ //Only users with this id can use this command
                let purgeAmount = args[0]; //Gets number to purge
                if(isNaN(purgeAmount)){ //Checks if the purge amount is actually a number and not a string
                    message.reply("You need to give me a number silly.");
                    var log = message.author.username + " tried to purge but gave a character instead of a number.";
                    console.log(log);
                    fs.appendFile('./log.txt', log + "\r\n", function (err) {       //logs command to the log.txt
                        if (err) throw err;
                    });
                } else {        //if the purge amount is a number
                    let messagecount = parseInt(purgeAmount)+1; //converts to int and adds one that way if you delete 10 messages it will delete the purge command plus 10 messages
                    if(messagecount <= 100){ //Checks if the amount of messages to delete is 100 or less because of discord limitations
                        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)); //Fetches the desired number of messages and deletes them
                        if(messagecount === 1){ //If only one message
                            message.reply(' Purged ' + purgeAmount + " message!");
                            var log = message.author.username + " purged " + purgeAmount + " message.";
                            console.log(log);
                            fs.appendFile('./log.txt', log + "\r\n", function (err) {
                                if (err) throw err;
                            });
                        } else { //If more than one
                            message.reply(' Purged ' + purgeAmount + " messages!");
                            var log = message.author.username + " purged " + purgeAmount + " messages.";
                            console.log(log);
                            fs.appendFile('./log.txt', log + "\r\n", function (err) { //logs command to log.txt
                                if (err) throw err;
                            });
                        }
                    } else { //If more than 100 messages where requested for deletion
                        message.reply(' I can only purge up to 100 messages');
                        var log = message.author.username + " tried to purge too many messages."
                        console.log(log);
                        fs.appendFile('./log.txt', log + "\r\n", function (err) {   //logs command to log.txt
                            if (err) throw err;
                        });
                    }
                }
            } else { //If the user doesnt have permission to use the command
                message.reply(' You do not have permission to do that');
                var log = message.author.username + " tried to purge but didn't have permision.";
                console.log(log);
                fs.appendFile('./log.txt', log + "\r\n", function (err) {   //logs command to log.txt
                    if (err) throw err;
                });
            }
        } else { //If more than one argument is given. Example >purge 10 hi
            message.channel.send("This commands only takes one argument.")
        }
    }
}