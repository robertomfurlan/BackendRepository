function addItem() {
    const newItem = document.getElementById('newItem').value;
    if (newItem.trim() !== '') {
      fetch('/shopping-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item: newItem })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Erro ao adicionar item à lista de compras.');
      })
      .then(data => {
        console.log(data.message);
        getShoppingList();
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
  
  function clearList() {
    fetch('/shopping-list', {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Erro ao limpar lista de compras.');
    })
    .then(data => {
      console.log(data.message);
      getShoppingList();
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  function getShoppingList() {
    fetch('/shopping-list')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Erro ao obter lista de compras.');
    })
    .then(data => {
      const shoppingList = document.getElementById('shoppingList');
      shoppingList.innerHTML = '';
      data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        shoppingList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  // Carregar a lista de compras ao carregar a página
  getShoppingList();
  