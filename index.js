const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
const fs = require("fs")
const ytdl = require("ytdl-core")
const notifier = require("node-notifier")
const date = new Date()

readline.question("[+] URL: ", function(url) {
    const infourl = ytdl.getInfo(url)
    ytdl(url, {filter: 'videoandaudio'}).pipe(fs.createWriteStream(`${date.getTime()}.mp4`))
    notifier.notify({
        title: "Youtube Downloader",
        message: `Video baixado!`,
        icon: "./yt.png",
        sound: true
    })
})
