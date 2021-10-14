function databaseMain(){

    const mysql = require('mysql2')

    var connection;

    // Create the database connection
    function start(){
        console.log("[Database] Connecting...")
        connection = mysql.createConnection({
           host: "172.18.0.2",
           user: "root",
           port: 3306,
           password: "123password",
           database: 'marketplace_restore'
        });

        connection.connect((err) => {
            if (err) throw err
        })

        console.log("[Database] Sucessfully Connected!")
    }

    function getInfo() {
        console.log("[Database] Getting data from database...")

        let data = new Promise(function(resolve, reject) {
            connection.query('SELECT * FROM products;', (err, rows) => {
                if (rows === undefined) {
                    reject(new Error("Error rows is undefined"))
                } else {
                    resolve(rows)
                }
            })
        })

        data.then(
            function(value) {
                return value
            },
            function(error) {
                console.log(error)
            }
        )

        return data
    }

    function deleteInfo(){}

    function addInfo(){}

    function stop(){
        console.log("[Database] Stoping...")
    }

    return {
        start,
        getInfo,
        deleteInfo,
        addInfo,
        stop
    }
}

module.exports = {databaseMain}