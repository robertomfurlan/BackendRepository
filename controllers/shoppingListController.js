let shoppingList = [];

function getShoppingList(req, res) {
  res.json(shoppingList);
}

function addItem(req, res) {
  const newItem = req.body.item;
  shoppingList.push(newItem);
  res.status(201).json({ message: 'Item adicionado à lista de compras.' });
}

function clearList(req, res) {
  shoppingList = [];
  res.json({ message: 'Lista de compras limpa.' });
}

module.exports = {
  getShoppingList,
  addItem,
  clearList
};
