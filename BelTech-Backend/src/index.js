require('./models/Users')
const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)

const mongoUri = 'mongodb+srv://Naseer:loginpassword@cluster0.zrzy6.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoUri)

mongoose.connection.on('connected', () => {
    console.log('Connected to mongoose instance');
})


mongoose.connection.on('error', (err) => {
    console.log('Error connecting mongo' , err);
})


app.get('/', (req, res) => {
    res.send("Hi there!")
})

app.listen(3000, () => {
    console.log('Listenting on port 3000')
})