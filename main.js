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
// ccjt: R
// testbot: hello?
MPP.client.on("a", function (m) {
	let a = m.a.split(" ");
	let c = a[0].toLowerCase();
  a = a.slice(1);
	let substring = function(a){return m.a.substring(a).trim();}
	let send = function(a){MPP.chat.send(a);}
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
  "we'll fix it in post" we'll actually never
  DO NOT UNCOMMENT FOR GOD'S SAKE
  */
  if (c == "!help") {
				send("Commands: !userid - Tells your user id - !dice - Returns a random number between 1 and 20 ! !8ball - Shake a Magic 8 Ball™ and get a response.")
  }
  // personal command zone
  if (m.p.id == MPP.client.participantId) {
    // forbidden code xdd
  }
});
