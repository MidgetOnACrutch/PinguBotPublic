const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ">";

var fs = require('fs');

//Bot login
client.login("Your bot token");

//Do on bot login
client.on("ready", () => {
    client.user.setGame("Say >Help");
    console.log(`Logged in as ${client.user.tag}!`);
});

//Get current date and time in EST
function dateTime(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var m = today.getMinutes();
    var h = today.getHours();
    var morn = "";

    if(dd<10) {
        dd="0"+dd
    } 

    if(mm<10) {
        mm="0"+mm
    } 

    if(m < 10) {
        m="0"+m
    }

    if(h > 12){
        h=h-12
        morn = " PM"
    } else {
        morn = " AM"
    }

    today = " at " + h + ":" + m + morn + " est on " + mm+"/"+dd+"/"+yyyy;

    return String(today);
}

//When bot detects a new member
client.on('guildMemberAdd', member => {   
    var announcment = client.channels.get("328624665142755328");
    announcment.send('@here **NOOT NOOT!** Welcome our new member <@' + member.id + '>');
    member.send("Insert message to be sent to new members private message");
})

//When bot sees a message
client.on("message", msg => {   
    //Language filter
    const filtered = [/*Put words to be filtered here. Example - "Stupid","Jerk","Baby"*/];
    for (const filter of filtered) {
        if (!msg.content.toLowerCase().includes(filter)) continue;
        msg.delete();
        msg.channel.send(`${msg.author} language please :frowning:`);
    }

    //Ignores if its a bot message or doesnt have the prefix
    if (msg.author.bot) return;
    if(msg.content.indexOf(prefix) !== 0) return;

    //Gets all the arguments in a message. Each word seperated by a space is a arg. Example - >purge 10 - purge is the command, 10 is the arg
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    //Converts everything to lowercase so commands are not case sensitive
    const command = args.shift().toLowerCase();

    try {
        //Get reference to wanted command
        let commandFile = require(`./commands/${command}.js`);

        //Call command
        commandFile.func(client, msg, args);

        //Command log
        var log = msg.author.username + " used the " + command + " command" + dateTime();
        console.log(log);

        //Save command log to file
        fs.appendFile('./log.txt', log + "\r\n", function (err) {
            if (err) throw err;
        });

        //Remove reference to command for live updating commands
        try {
            delete require.cache[require.resolve(`./commands/${command}.js`)];
        } catch(errtwo){
            //Should never be needed but here in case
        }
    } catch (err) {
        //Command log
        var log = msg.author.username + " tried to use a command that doesn't exist" + dateTime();
        console.log(log);

        //Save command log to file
        fs.appendFile('./log.txt', log + "\r\n", function (err) {
            if (err) throw err;
        });

        //Remove reference to command if it was a command
        try {
            delete require.cache[require.resolve(`./commands/${command}.js`)];
        } catch(errtwo){
            //No command
        }
    }
});