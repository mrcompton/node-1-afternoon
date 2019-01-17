const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller')

const app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ) );

app.post(`/api/messages`, mc.create);
app.get(`/api/messages`, mc.read);
app.put("/api/messages/:id", mc.update)
app.delete('/api/messages/:id', mc.delete)

app.listen(3001,() => {console.log('We are here on port 3001')});





