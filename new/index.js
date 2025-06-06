let localStorage = require("./localStorage.json")
const Client = require('mpp-client-net')
const config = require('./config.json')
const token = config.token
const client = new Client("wss://mppclone.com", token)
const MPP = {
    client: client,
    chat: (msg, rt) => {
        if (rt) {
            client.sendArray([{
                m: "a",
                message: m,
                reply_to:rt
            }]);
        } else {
            client.sendArray([{
                m: "a",
                message: m
            }]);
        }
    } 
}
client.start();
client.setChannel('test');
let prefix = '.'
MPP.client.on('a', (m) => {
    let a = m.a.toLowerCase().split(' ')
    let c = a[0]
    let cmd = a[0].substring(prefix.length)
    let substring = m.a.substring(c.length).trim()

    if (c.startsWith(prefix)) {
        if (cmd == "test") {
            send('icles')
        }
    }
})
