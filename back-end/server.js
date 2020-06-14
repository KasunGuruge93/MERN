const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')



require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = "mongodb://localhost:27017/mern"

mongoose.connect(uri, {useNewUrlParser : true, useCreateIndex: true, useUnifiedTopology :true})

const connection = mongoose.connection

connection.once('open', () => {
 console.log('connected successfully')
})

const exerciseRouter = require('./routes/exercises')
const userRouter =  require('./routes/users')

app.use('/exercises', exerciseRouter)
app.use('/users', userRouter)

app.listen(port, () => 
console.log(`server is running on port: ${port}`))

