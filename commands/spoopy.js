//Get Month
function month(){
    var today = new Date();
    var mm = today.getMonth()+1; //January is 0 so we need to add one so its 1-12 not 0-11

    return String(mm) //Returns 1-12 in string form
}

//Get Day
function day(){
    var today = new Date();
    var dd = today.getDate();

    return String(dd)   //Returns 0-number of days this month in string form
}

var fs = require('fs');

module.exports = {
    help: () => {       //Help text that gets returned
        return "Check the current spoopy levels.";
    }
    ,
    func: (client, message, args) => {
        //NOTE - this commands purpose is to determine how close/not close it is to halloween and output an appropriate image based on how far it is to halloween 

        if(args[0] == null){
            if(month() === "1"){            //If its January
                if(parseInt(day()) < 31){ //If its before the 31st
                    message.channel.send("", {files: ["./spoop/noSpook.jpg"]});
                } else { //If its the 31st
                    message.channel.send("", {files: ["./spoop/spoopy.jpg"]});
                }
            } else if(month() === "2"){     //If its Febuary
                message.channel.send("", {files: ["./spoop/spoopy.jpg"]});
            } else if(month() === "3"){     //If its March
                message.channel.send("", {files: ["./spoop/spoopy.jpg"]});
            } else if(month() === "4"){     //If its April
                message.channel.send("", {files: ["./spoop/spoopy.jpg"]});
            } else if(month() === "5"){     //If its May
                if(parseInt(day()) < 2){    //If its before the 2nd
                    message.channel.send("", {files: ["./spoop/spoopy.jpg"]});
                } else { //If its the 2nd or beyond
                    message.channel.send("", {files: ["./spoop/pSpoopy.jpg"]});
                }
            } else if(month() === "6"){     //If its June
                message.channel.send("", {files: ["./spoop/pSpoopy.jpg"]});
            } else if(month() === "7"){     //If its July
                message.channel.send("", {files: ["./spoop/pSpoopy.jpg"]});
            } else if(month() === "8"){     //If its August
                message.channel.send("", {files: ["./spoop/spook.jpg"]});
            } else if(month() === "9"){     //If its September
                message.channel.send("", {files: ["./spoop/spook.jpg"]});
            } else if(month() === "10"){    //If its October
                if(parseInt(day()) < 31){ //If its before the 31st
                    message.channel.send("", {files: ["./spoop/spook.jpg"]});
                } else { //If its the 31st. HALLOWEEN
                    message.channel.send("", {files: ["./spoop/tooSpook.gif"]});
                    var log = message.author.username + " was spooped";
                    console.log(log);
                    fs.appendFile('./log.txt', log + "\r\n", function (err) {   //logs command to log.txt
                        if (err) throw err;
                    });
                }
            } else if(month() === "11"){    //If its November
                message.channel.send("", {files: ["./spoop/noSpook.jpg"]});
            } else if(month() === "12"){    //If its December
                message.channel.send("", {files: ["./spoop/noSpook.jpg"]});
            }
        } else { //If given any number of arguments. Example >spoopy hi there names bob
            message.channel.send("This commands doesnt have any arguments.")
        }
    }
}