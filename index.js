const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
const fs = require("fs")
const ytdl = require("ytdl-core")
const notifier = require("node-notifier")
const { getInfo } = require("ytdl-core")

readline.question("[+] URL: ", function(url) {
    try {
        ytdl(url).pipe(fs.createWriteStream("video_baixado.mp4"))
        notifier.notify({
            title: "YouTube Downloader",
            message: "Video baixado!",
            icon: "./yt.png",
            sound: true
        })
    } catch (e) {
        console.log("Erro: " + e)
        process.exit()
    }
})
