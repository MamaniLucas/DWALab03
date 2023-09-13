
const { config } = require('dotenv');
const pg = require('pg');

const express = require('express')
config()

const app = express()

const port = 4500

const pool =  new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
})
app.get("/", (req, res) => {
    res.send('HELLO WORLD RENDER !') 
})

app.get("/ping", async (req, res) => { 
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})


app.listen(port)
console.log(`Server on port, ${port}`)