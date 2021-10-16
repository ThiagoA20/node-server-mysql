# Vanilla nodejs server + docker + mysql
---

## Structure
The design pattern used was the factory pattern, where the initial module is
the `index.js` file and the other modules are just functions that will return
the functions of the module, so the main function will be exported and then
imported inside an more high level module until it reach the `index.js` file.

This design pattern will help to perform tests more easy. The `index.js` file
calls the `core.js` that init the database and the server and then redirect the
requests to functions inside the server that will return a value, where if it is
valid, then will get data from the database and call the server again to send the
response.

The server and the database are inside two docker containers connected through a
docker network.

---

## Get started
> Pull the mysql image: `docker pull mysql`

> set the database password: `docker run --name name-of-database-container -e MYSQL_ROOT_PASSWORD=database-password -d mysql`

> The mysql container will start running by default on the port 3306.

>Connect to the container: `docker exec -it name-of-database-container`

>Connect to mysql: `mysql -p` then input your password.

>Create a new database and exit the container.

>create a network: `docker network create name-of-the-network`

>connect the running database container to the network: `docker network connect name-of-the-network name-of-database-container`

>check the ip of the database container: `docker network inspect name-of-the-network`

>open the database file, then, in the createConnection, input the ip in the host, the user (default = root), the port (default = 3306),
input the password and the database name. (for security reasons, those informations should be inside a
.env file lately!).

> Create the server image: `sudo docker build -t tag-name-of-the-image .`

> Create the container: `sudo docker run -dt -p 5000:5000 --name container-name tag-name-of-the-image`

> Connect the container of the server in the network, enter the container, start the server and exit the container, so now the application should be running.
