let itemId = 1;
let items = [];

class Item {
    constructor(name, quantity) {
        this.id = itemId++;
        this.name = name;
        this.quantity = quantity;
    }
}

function addItem(name, quantity) {
    const newItem = new Item(name, quantity);
    items.push(newItem);
    return newItem;
}

function getAllItems() {
    return items;
}

function deleteItem(id) {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items.splice(index, 1);
        return true;
    }
    return false;
}

export { Item, addItem, getAllItems, deleteItem };
