// import npm modules necessary
const express = require('express')
const axios = require('axios')
require('dotenv').config()

// initialize our express server
const app = express()

// stub out a home route that returns word hello
app.get('/', (req, res) => {
    axios.get(`http://www.omdbapi.com/?s=star+wars&apikey=${process.env.OMDB_API_KEY}`)
        .then(response => {
           res.send(response.data)
        })
})

// call app dot listen to start up server
app.listen(3000, () => {
    console.log("We up and running 🏀")
})