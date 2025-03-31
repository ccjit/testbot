// dev comments
/*
1. kick command [ ]
2. user change commands (!color, !name...) [ ]
*/



let whitelisted = [
    'bfcd3dabed0ab33cc18cebf5', // ccjt
    '8703f0cc55518aade8cbcffe' // test account
]
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
  let e = false
  let the = false
  let space = false
  MPP.client.on("a", function (m) {
      let a = m.a.split(" ");
      let c = a[0].toLowerCase();
    a = a.slice(1);
      let substring = function(a){return m.a.substring(a).trim();}
      let send = function(a){MPP.chat.send(a);}
      let kick = function(id, ms) {MPP.client.sendArray([{"m":"kickban","_id":id,"ms":ms}]);}
    
      // cmds
    if (c == "!fun") {
      send(funresponses[Math.floor(Math.random() * funresponses.length)])
    }
    if (c == "!info") {
      send(inforesponses[Math.floor(Math.random() * inforesponses.length)])
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
          send("your ID is " + m.p.id)
      }
    if (c == "!about") {
      send("TestBot - Made by ccjt & TestBot | Programming: ccjt - Ideas: TestBot | This bot is open-source on GitHub and free for you to use. | Made in 2025")
      send("GitHub page for TestBot: https://github.com/ccjit/testbot/")
    }
    if (c == "!8ball") {
      send(ball[Math.floor(Math.random() * ball.length)])
    }
    /*
      if (c == "!help") {
      if (a.length == 0) {
            send("Categories: info, fun - use !help [category] to find the commands in it")
            send("Example: !help fun")
            send("Wrong example: !fun")
          } else {
        if (a[1] == "info") {
                  send("!userid - Tells your user id")
          } else {
          if (a[1] == "fun") {
                      send("!dice - Returns a random number between 1 and 20 ! !8ball - Shake a Magic 8 Ball™ and get a response.")
              }
        }
        }
    }
    // "we'll fix it in post" we'll actually never
    // DO NOT UNCOMMENT FOR GOD'S SAKE
    // */
    
    if (c == "!help") {
        send("Commands: !userid - Tells your user id | !dice - Returns a random number between 1 and 20 | !8ball - Shake a Magic 8 Ball™ and get a response.")
        if (m.p.id == MPP.client.participantId || whitelisted.includes(m.p._id)) {
            send("Personal commands: !events - Check list of possible events (not working)")
            if (MPP.client.channel.crown.userId == MPP.client.participantId || whitelisted.includes(m.p._id)) {
                send("Owner commands: !kick - Kicks someone - Usage: !kick [id] [seconds] [one word reason] | !crown - Gives crown to ID - Usage: !crown [id]")
            }
        }
    } 
    
    // personal command zone
    if (m.p._id == MPP.client.participantId || whitelisted.includes(m.p._id)) {
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
        if (c == "!kick") { 
            if (MPP.client.channel.crown.userId == MPP.client.participantId || whitelisted.includes(m.p._id)) {
                let mem = MPP.client.channel.name
                kick(a[1], parseInt(a[2]))
                MPP.client.setChannel('test/awkward')
                send("You've been kicked from " + mem + " for " + a[2] + " minutes. `Reason: " + a[3] + "`")
                MPP.client.setChannel(mem)
            } else {
                send("I don't have crown! Ask @" + MPP.client.channel.crown.userId + " for the crown to use this command.")
            }
        }
        if (c == "!crown") {
            if (MPP.client.channel.crown.userId == MPP.client.participantId || whitelisted.includes(m.p._id)) {
                MPP.client.sendArray([{
                    "m":"chown",
                    "id":a[1]
                }]);
            } else {
                send("I don't have crown! Ask @" + MPP.client.channel.crown.userId + " for the crown to use this command.")
            }
        }
    }
    if (m.p._id != MPP.client.participantId) {
        if (e) {
            if (m.a.includes('e')) {
                kick(m.p._id, 0)
            }
        }
        if (the) {
            if (m.a.includes('the')) {
                kick(m.p._id, 0)
            }
        }
        if (space) {
            if (m.a.includes(' ')) {
                kick(m.p._id, 0)
            }
        }
    }
});
