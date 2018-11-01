require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive =  require('massive')


const port = process.env.PORT

const app = express();
app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );

app.listen(port, () => {
    console.log(`Ship docked at port: ${port}`)
})