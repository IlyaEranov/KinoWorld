import express from "express"
import cors from "cors"
import cookiParser from "cookie-parser"
import postgres from "postgres"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()