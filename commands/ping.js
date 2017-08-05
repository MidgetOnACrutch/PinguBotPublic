module.exports = {
    help: () => {       //Help text that gets returned
        return "Send a Noot Noot!";
    }
    ,
    func: (client, message, args) => {
        if(args[0] == null){        //If no arguments. Example >ping
            message.channel.send("Noot Noot!");
        } else {        //If there are any number of arguments. Example >ping hi there names bob
            message.channel.send("This commands doesnt have any arguments.")
        }
    }
}