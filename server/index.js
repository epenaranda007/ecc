const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const handler = require('./requestHandler');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../dist'));

app.post('/api/form1', handler.saveForm1Information);
app.put('/api/form2', handler.saveForm2Information);
app.put('/api/form3', handler.saveForm3Information);

/* * Unhandled Endpoints & Needed for React-Router * */
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});