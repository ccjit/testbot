// ==UserScript==
// @name         TestBot - Tampermonkey Version
// @namespace    https://github.com/ccjit/testbot/blob/main/main.js
// @version      v1.0-alpha7
// @description  take over the world, not really, much
// @author       ccjt & TestGirl
// @match        https://multiplayerpiano.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=multiplayerpiano.net
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    let mem = "lobby"
    if (localStorage("whitelist") == undefined) {
        let whitelist = [
            'bfcd3dabed0ab33cc18cebf5', // ccjt
            '1f2fd4b5d634d96f0a193ae8', // ccjt too
            '8703f0cc55518aade8cbcffe', // testgirl
        ]
        localStorage.setItem("whitelist", whitelist);
    } else {
        let whitelist = localStorage("whitelist")
    }
    // random response area
    let inforesponses = [
        "I didn't even tell you you can't do that! Wait, that's my fault. Just know that this also doesn't work.",
        "Doesn't work.",
        "Why did you try this? The command didn't even say \"!info\".",
        "Hmm, it seems this command doesn't work. Try using the actual format which is \"!help info\". That'd be appreciated.",
        "I appreciate your time and effort into making your dummy brain think about this possibility, but it simply won't work.",
        "!help info"
    ]
    let funresponses = [
        "Yeah, I thought showing the wrong example would lead to this.",
        "I thought I told you not to do that.",
        "You know what, fine, here's the fun category: ||do the right command or else i'll grab you by the feet tonight||",
        "Hmm, I am having trouble understanding. Maybe it's because I explicitly told you this was wrong, but you still tried anyway.",
        "Very funny, haha. Now do the actual command until something bad happens.",
        "!help fun"
    ]
    let ownerresponses = [
        "Seriously. You're an owner and you ***still*** do this? What kinda level of brain damage do you have in that headphone-dented head of yours?",
        "Wow. You have this much power yet still commit the same rookie mistake.",
        "You know what? If the command name is \"owner\", I might aswell make it do something useful. Bot owner: ccjt & TestGirl"
    ]
    let personalresponses = [
        "You know what, I predicted this. If changing the wrong example for owners to be \"!personal\" instead of \"!fun\", I basically called it and knew this would happen. Checkmate.",
        "I still said it was a wrong example, I just changed the example. but yet here we are..."
    ]
    let ball = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ]
    let facts = [
        "If you see a room with more than 5 people in it, there's a 50% chance it'll be chaotic. YOLO",
        "The programmer for this bot (ccjt) is a transfem.",
        "It is most likely that when a new command category gets added, there will be a wrong example command for it.",
        "When testing !8ball for the first time, I asked it if we're living in a simulation. It replied with no. After that, I tried convincing it otherwise but it wouldn't budge. I gave up shortly after. I guess it was an over-success.",
        "If you've never met keX, be ready. They cuss a lot. She's a cussing machine; Only no cussing can defeat them. But no cussing is for pu$$sies."
    ]
    let categoryresponses = [
        "It looks like you've misspelled the category, or it just doesn't exist. Here are the categories that exist: ",
        "Oops! That category doesn't exist. Please try one of these categories: ",
        "I couldn't find this category. Please try again. Categories: ",
        "Did you intend for this to happen or not? Anyway, here are the categories: ",
        "Uncaught ReferenceError: " + a[1] + " is not a valid category. Categories: ",
        "If you see this response message, you either were spamming invalid categories or you're just plain lucky. Valid categories: "
    ]
    let e = false
    let the = false
    let space = false
    let oldhelp = false
    // startup message
    MPP.chat.send("TestBot is on. Use〈!help〉to use commands.")
    // main script
    MPP.client.on("a", function (m) {
        let a = m.a.split(" ");
        let c = a[0].toLowerCase();
        let crown = MPP.client.channel.crown.userId
        let name = m.p.name
        let color = m.p.color
        let tid = m.p.id
        let id = m.p._id
        let whitelisted = function(id){if(whitelist.indexOf(id)<-1){return true}else{return false}}
        let ppl = function(id, info){return eval(`MPP.client.ppl[${id}].${info}`)}
        let substring = function(a){return m.a.substring(a).trim();}
        let send = function(a){MPP.chat.send(a);}
        let kick = function(id, ms){MPP.client.sendArray([{"m":"kickban","_id":id,"ms":ms}]);}
        let whitelist = function(id){whitelist.push(id);localStorage.setItem("whitelist", whitelist);}
        // commands
        if (c == "!fun") {
            send(funresponses[Math.floor(Math.random() * funresponses.length)])
        }
        if (c == "!info") {
            send(inforesponses[Math.floor(Math.random() * inforesponses.length)])
        }
        if (c == "!owner") {
            send(ownerresponses[Math.floor(Math.random() * ownerresponses.length)])
        }
        if (c == "!personal") {
            send(personalresponses[Math.floor(Math.random() * personalresponses.length)])
        }
        if (c == "!funfact") {
            send(facts[Math.floor(Math.random() * facts.length)])
        }
        if (c == "!dice") {
            if (a.length == 0) {
                send(`${Math.floor(Math.random() * 20)}`)
            } else if (a.length == 1) {
                send(`${Math.floor(Math.random() * parseInt(a[1]))}`)
            } else {
                send(`${Math.floor(Math.random() * parseInt(a[2]) + parseInt(a[1]))}`)
            }
        }
        if (c == "!userid") {
            send("your ID is " + id)
        }
        if (c == "!about") {
            send("TestBot - Made by ccjt & TestGirl | Programming: ccjt - Ideas: TestGirl | This bot is open-source on GitHub and free for you to use. | Made in 2025")
            send("GitHub page for TestBot: https://github.com/ccjit/testbot/")
            if (a.length == 1) {
                send(`${a[1]}'s info - Name: ${ppl(a[1], "name")}, Color: ${ppl(a[1], "color")}, Mouse Position: X ${ppl(a[1], "mouseX")} Y ${ppl(a[1], "mouseY")}, AFK: ${ppl(a[1], "afk")}`)
            }
        }
        if (c == "!8ball") {
            send(ball[Math.floor(Math.random() * ball.length)])
        }
        if (c == "!say") {
            if (whitelist.indexOf(id) > -1) {
                send(substring(4))
            } else {
                send(name + ": " + substring(4))
            }
        }
        if (c == "!currevents") {
            send("Event statuses: E: " + e ? "on" : "off" + " - The: " + the ? "on" : "off" + " - Space: " + space ? "on" : "off")
        }
        if (c == "!stopevents") {
            if (e) {
                let e = false
                send("Event \"E\" stopped.")
            }
            if (the) {
                let the = false
                send("Event \"The\" stopped.")
            }
            if (space) {
                let space = false
                send("Event \"Space\" stopped.")
            }
        }
      if (c == "!help") {
              if (a.length == 0) {
                  if (whitelisted(id)) {
                      send("Categories: info, fun, personal, owner - use !help [category] to find the commands in it")
                      send("Example: !help personal")
                      send("Wrong example: !personal")
                  } else {
                      send("Categories: info, fun - use !help [category] to find the commands in it")
                      send("Example: !help fun")
                      send("Wrong example: !fun")
                  }
              } else {
                  if (!oldhelp) {
                      if (a[1] == "info") {
                          send("!userid - Tells your user id | !about - Bot info OR get info from user - Usage: !about (returns bot info), !about [id] (returns user info)")
                      } else if (a[1] == "fun") {
                          send("!dice - Returns a random number between 1 and 20 | !8ball - Shake a Magic 8 Ball™ and get a response. | !say -  Makes the bot say something. | !funfact - Tells you a randomly picked fact.")
                      } else if (whitelisted(id) && a[1] == "owner") {
                          if (crown == MPP.client.participantId) {
                              send("Owner commands: !kick - Kicks someone - Usage: !kick [id] [seconds] [one word reason] | !crown - Gives crown to ID - Usage: !crown [id] | !say (owner's version) - Makes the bot say something, but with no added text. !oldhelp - Toggles old help command on/off. | !flashbang - Flashbangs everyone without force dark background on. ||[1]||")
                              send("!setting - Changes a room setting. | !whitelist - Whitelists ID, potentially dangerous. ||[2]||")
                          } else {
                              send("Owner commands: !say (owner's version) - Makes the bot say something, but with no added text. !oldhelp - Toggles old help command on/off. | !whitelist - Whitelists ID, potentially dangerous.")
                          }
                      } else if (whitelisted(id) && a[1] == "personal") {
                          send("Personal commands: !name - Sets the bot name. | !events - Check list of possible events. | !stopevents - Stop all currently running events. | !currevents - See what events are happening right now.")
                      }
                      if (whitelisted(id)) {
                          send(categoryresponses[Math.floor(Math.random()*categoryresponses.length)] + "info, fun, personal, owner")
                      } else {
                          send(categoryresponses[Math.floor(Math.random()*categoryresponses.length)] + "info, fun")
                      }
                  }
              }
          } else {
              send("Commands: !userid - Tells your user id | !dice - Returns a random number between 1 and 20 | !8ball - Shake a Magic 8 Ball™ and get a response. | !say - Makes the bot say what you command it to do | !about - Bot info OR get info from user - Usage: !about (returns bot info), !about [id] (returns user info) ||[1]||")
              send("!funfact - Tells you a randomly picked fact. ||[2]||")
              if (id == MPP.client.participantId || whitelist.includes(id)) {
                  if (crown == MPP.client.participantId || whitelist.includes(id)) {
                      send("Owner commands: !kick - Kicks someone - Usage: !kick [id] [seconds] [one word reason] | !crown - Gives crown to ID - Usage: !crown [id] | !name - Sets the bot name. | !say (owner's version) - Makes the bot say something, but with no added text. !oldhelp - Toggles old help command on/off. ||[1]||")
                      send("!setting [room setting] - Changes desired room setting. ||[2]||")
                      send("Personal commands: !events - Check list of possible events")
                  }
              }
          }
        // personal command zone
        if (id == MPP.client.participantId || whitelist.includes(id)) {
            if (c == "!events") {
                send("Events: !e - kicks people who say the letter E for 0 minutes | !the - bans the word \"the\" from being sent in chat | !spacebar - kick user who sent a messsge with a space anywhere on it")
            }
            if (c == "!e") {
                send("You cannot say E, good luck!")
            }
            if (c == "!the") {
                send("The word \"the\" is banned, have fun~")
            }
            if (c == "!space") {
                send("No spaces. Nowyou'llhavetotypelikethis.")
            }
            if (c == "!name") {
                MPP.client.sendArray([{
                    "m": "userset",
                    "set": {
                        "name": substring(5)
                    }
                }])
                send()
            }
            if (c == "!flashbang") {
                MPP.client.sendArray([{
                    "m":"chset",
                    "set":{
                        "color":"#ffffff",
                        "color2":"#ffffff",
                    }
                }])
                setTimeout(() => { MPP.client.sendArray([{
                    "m":"chset",
                    "set":{
                        "color":"#131313",
                        "color2":"#131313",
                    }
                }]) }, 1000);
                send("get flashbanged idiots")
            }
        }
        // whitelisted users street
        if (whitelisted(id)) {
            if (c == "!whitelist") {
                if (a.length == 0) {
                    send("Please specify an ID to whitelist.")
                } else if (a.length == 1) {
                    send("Are you sure you want to do this? Send `" + a[0] + " " + a[1] + " y` to confirm.")
                } else if (a.length == 2) {
                    if (a[2] == "y") {
                        whitelist(a[1])
                        send("Successfully whitelisted. Amount of Whitelisted IDs: " + whitelist.length)
                    }
                }
            }
            if (c == "!crown") {
                if (crown == MPP.client.participantId || (crown == MPP.client.participantId && whitelist.includes(id))) {
                    MPP.client.sendArray([{
                        "m": "chown",
                        "id": JSON.stringify(substring(5))
                    }]);
                } else {
                    send("I don't have crown! Ask @" + crown + " for the crown to use this command.")
                }
            }
            if (c == "!kick") {
                if (crown == MPP.client.participantId || (crown == MPP.client.participantId && whitelist.includes(id))) {
                    let mem = MPP.client.desiredChannelId
                    kick(a[1], parseInt(a[2]))
                    MPP.client.setChannel('test/awkward')
                    send("You've been kicked from " + mem + " for " + a[2] + " minutes. `Reason: " + a[3] + "`")
                    MPP.client.setChannel(mem)
                } else {
                    send("I don't have crown! Ask @" + crown + " for the crown to use this command.")
                }
            }
            if (c == "!oldhelp") {
                if (oldhelp) {
                    send("Help command is now in the new format.")
                    let oldhelp = false
                } else {
                    send("Help command is now in the old format.")
                    let oldhelp = true
                }
            }
        }
        if (crown == MPP.client.participantId) {
            if (c == "!setting") {
                if (a[1] == "color") {
                    MPP.client.sendArray([{
                        "m": "chset",
                        "set": {
                            "color": a[2],
                        }
                    }]);
                } else if (a[1] == "color2") {
                    MPP.client.sendArray([{
                        "m": "chset",
                        "set": {
                            "color2": a[2],
                        }
                    }]);
                } else if (a[1] = "chat") {
                    MPP.client.sendArray([{
                        "m": "chset",
                        "set": {
                            "chat": eval(a[2]),
                        }
                    }]);
                } else if (a[1] == "nocussing") {
                    send("No cussing is for pussies!")
                } else if (a[1] == "crownsolo") {
                    MPP.client.sendArray([{
                        "m": "chset",
                        "set": {
                            "crownsolo": eval(a[2]),
                        }
                    }]);
                } else if (a[1] == 'visible') {
                    MPP.client.sendArray([{
                        "m": "chset",
                        "set": {
                            "visible": eval(a[2]),
                        }
                    }]);
                }
            }
        }
        // event checks
        if (id != MPP.client.participantId) {
            if (e) {
                if (m.a.indexOf('e') > -1) {
                    kick(id, 0)
                }
            }
            if (the) {
                if (m.a.indexOf('the') > -1) {
                    kick(id, 0)
                }
            }
            if (space) {
                if (m.a.indexOf(' ') > -1) {
                    kick(id, 0)
                }
            }
        }
    });
})();
