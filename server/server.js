function serverMain() {

    const http = require('http')

    const server = http.createServer((req, res) => {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write('<h1>Hello World</h1>')
        res.end()
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
        stop
    }
}

module.exports = {serverMain}