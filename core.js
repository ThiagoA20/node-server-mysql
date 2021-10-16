function createCore () {

    const {serverMain} = require("./server/server.js")
    const {databaseMain} = require("./database/database.js")

    const webserver = serverMain()
    const database = databaseMain()

    async function start() {
        console.log("[Core] Starting...")

        try {
            console.log("[Core] Creating Webserver...")
            await webserver.start()
        } catch (error) {
            console.log("[Core] An error occurred while creating webserver, please check the logs!")
        }

        try {
            console.log("[Core] Connecting database...")
            await database.start()
            console.log(`[Core] Succes, the application is running on port ${webserver.PORT}`)
        } catch (error){
            console.log("[Core] An error occurred while connecting to database, please check the logs!")
            console.log(error)
        }

        requestResponse()
    }

    async function requestResponse() {
        console.log(JSON.stringify(await database.getInfo()))
        await database.addInfo()
        await database.getInfo()
        await database.deleteInfo()
        await database.getInfo()
    }

    async function stop(){
        console.log("[Core] Stoping...")
        await webserver.stop()
        await database.stop()
        console.log("[Core] Succes, the application stoped!")
    }

    return {
        start,
        stop
    }
}

module.exports = {createCore}