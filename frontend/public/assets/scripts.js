angular.module('shoppingListApp', [])
.controller('ShoppingListController', function() {
    var vm = this;
    
    vm.items = [];

    vm.newItem = {
        name: '',
        quantity: ''
    };

    vm.addItem = function() {
        if (vm.newItem.name && vm.newItem.quantity) {
            vm.items.push({
                name: vm.newItem.name,
                quantity: vm.newItem.quantity
            });
            
            vm.newItem.name = '';
            vm.newItem.quantity = '';
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    vm.deleteItem = function(index) {
        vm.items.splice(index, 1);
    };
});
