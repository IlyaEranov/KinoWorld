import Pool from "postgres"
const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "postgres"
})

module.exports = pool