const express = require('express')
const app = express()


app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Hello world!')
})

app.all('/get_data', (req, res) => {
    console.log("get-data api")
    res.send('hii how are you')
})

app.listen(process.env.PORT || 3000)