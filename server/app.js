const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config({path:'./config/config.env'})

app.use(express.json())

app.use(cors({
    origin: "*",
    credentials: true
}))


app.get("/",(req,res)=>{
    res.json("I am working")
})                           
    

module.exports = app ;