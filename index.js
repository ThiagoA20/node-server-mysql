const {createCore} = require('./core.js')

const core = createCore();

try {

    async function Init() {
        await core.start()
        core.stop()
    }

    Init()

} catch (error) {
    console.log("[Index] Uncaught Error!")
    console.log(error)
}
