const express = require('express');
const bodyParser = require('body-parser');
const shoppingListController = require('./controllers/shoppingListController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/shopping-list', shoppingListController.getShoppingList);
app.post('/shopping-list', shoppingListController.addItem);
app.delete('/shopping-list', shoppingListController.clearList);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
