require("./config/db")
const express = require('express')
const app = express()
const authRoute = require('./routes/authRoute')


app.use(express.json())

app.use('/api',authRoute)


app.listen(3000, ()=>{
    console.log('Server listen on 3000 port')
})

