
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config();
const ctrl = require('./controller')

const app = express();
const {CONNECTION_STRING} = process.env;

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connection between man and the machine created, Deus ex machina');
  });

  app.get('/api/inventory', ctrl.getAllInventory);

  app.get('/api/inventory/:id', ctrl.getInventory);
  
  app.post('/api/inventory', ctrl.createInventory);
  
  app.delete('/api/inventory/:id', ctrl.deleteInventory);
  
  app.put('/api/inventory/:id', ctrl.updateInventory);


app.listen(4000, ()=>console.log('4000 Grade me generously well master'))
