require('dotenv').config()
const express = require('express');
const massive = require('massive')
const { CONNECTION_STRING, SERVER_PORT } = process.env

const app = express();
app.use(express.json());

app.get('/api/house/:id', (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.getSingleHouse(req.params).then((response) => {
        if (response[0]) {
            res.send(response[0])
        } else {
            res.sendStatus(404)
        }
    })
})

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance);
    console.log(`db connected y'all`);
    
    app.listen(SERVER_PORT, () => console.log(`Kenny says to listen to port ${SERVER_PORT}`));
})