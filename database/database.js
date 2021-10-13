function databaseMain(){

    const mysql = require('mysql2')

    function start(){
        console.log("[Database] Connecting...")
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            port: 3306,
            password: "123password"
        });
            
        connection.connect(function(err){
            if (err) throw err;
            console.log("Connected!");
        });
    }

    function stop(){
        console.log("[Database] Stoping...")
    }

    return {
        start,
        stop
    }
}

module.exports = {databaseMain}