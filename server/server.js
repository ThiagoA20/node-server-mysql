function serverMain() {

    const http = require('http')

    function onRequest(url) {
        if (url === "/") {
            return true
        } else {
            return false
        }
    }

    function sendResponse() {}

    const server = http.createServer((req, res) => {
        if (onRequest(req.url)) {
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write('<h1>Hello World</h1>')
            sendResponse()
            res.end()
        } else {
            res.writeHead(404, {"Content-Type": "application/json"})
            res.write(JSON.stringify({message: "Path not found"}))
            res.end()
        }
    })

    const PORT = process.env.PORT || 5000

    function start() {
        console.log('[Server] Starting...')
        return server.listen(PORT, () => {console.log(`[Server] Listening at port: ${PORT}`)})
    }

    function stop() {
        console.log('[Server] Stoping...')
        server.close()
    }

    return {
        PORT,
        start,
        onRequest,
        sendResponse,
        stop
    }
}

module.exports = {serverMain}