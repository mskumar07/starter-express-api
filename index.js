require("dotenv").config()
const express = require('express')
const app = express()
const {Sequelize,DataTypes} = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
  });

const fast = sequelize.define('fast', {
    email: Sequelize.STRING,
})

sequelize.sync()
  .then(() => {
    console.log('Database and tables created!');
  })
  .catch(err => {
    console.error('Error creating database and tables:', err);
  });

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Hello world!')
})

app.all('/get_data', (req, res) => {
    console.log("get-data api")
    res.send('hii how are you')
})

app.all('/db_get_data', async (req, res) => {
    const Data = await fast.findAll()
    res.send({title:Data})
})

app.listen(process.env.PORT || 3000)