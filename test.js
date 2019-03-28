let WebSocket = require("websocket").w3cwebsocket
let nano = require("./nano-websocket-client")

nano.on("io-error", function (e) {
    console.log("io-error", e.type)
})
nano.on("close", function (e) {
    console.log("close", e.type)
})
nano.on("chat.hello", function (e) {
    console.log("chat.hello", e)
})
nano.init({
    host: "127.0.0.1",
    port: 1234,
    path: "/ws",
    log: true,
    webSocket: WebSocket,
    handshakeCallback: () => {
        console.log("handshakeCallback")
    }
}, function () {
    console.log("initCallback")
    nano.request("chat.login", { name: "我的名字" }, function (data) {
        console.log("chat.login.res", data)
    })
})
