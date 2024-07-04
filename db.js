const { Client } = require('pg')

const client = new Client({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

const connectDB = async () => {
    client
    .connect()
    .then(() => {
        console.log(' conectamos')
    }).catch((err) => {
        console.error("nao ta certo isso aqui nao vei")
    })
}

module.exports = connectDB