angular.module('app', [])
.controller('ProductController', ['$scope', function($scope) {
    $scope.products = [
        { title: 'Mouse', price: 499, stock: 20 },
        { title: 'Keyboard', price: 499, stock: 12 }
    ];

    $scope.product = { title: '', price: null, stock: null };

    $scope.addProduct = function() {
        if (!$scope.product.title || $scope.product.price == null || $scope.product.stock == null) return;

        $scope.products.push({
            title: $scope.product.title,  
            price: Number($scope.product.price),
            stock: Number($scope.product.stock)
        });

        $scope.reset();
    };

    $scope.remove = function(index) {
        $scope.products.splice(index, 1);
    };

    $scope.reset = function() {
        $scope.product = { title: '', price: null, stock: null };
    };
}]);
