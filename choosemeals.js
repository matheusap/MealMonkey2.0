angular.module('myApp', [])
    .controller('shoppingCart', mainCtrl);

function mainCtrl ($scope) 
{
    $scope.cart = [];
    $scope.total=0;
    $scope.budget = 100;
    $scope.remaining=$scope.budget;
    console.log("mainCtrl");
    
    $scope.addItem = function (item)
    {
        console.log("I made it to the function");
        if (item == "Burrito")
        {
            $scope.cart.push({Item: "Mexican Lasagna II", price: 12.53, done:false});
            $scope.total += 12.53;            
            $scope.remaining = $scope.budget - $scope.total;
            console.log($scope.remaining);
        }
        
        if (item == "Pasta")
        {
            $scope.cart.push({Item: "Shrimp Scampi with Pasta", price: 24.29, done:false});
            $scope.total += 24.29;
            
            $scope.remaining = $scope.budget - $scope.total;
            console.log($scope.remaining);
        }
        
        if (item == "Chili")
        {
            $scope.cart.push({Item: "Creamy White Chili", price: 11.28, done:false});
            $scope.total += 11.28;
            
            $scope.remaining = $scope.budget - $scope.total;
            console.log($scope.remaining);
        }

        if (item == "Chicken")
        {
            $scope.cart.push({Item: "Orange, Honey and Soy Chicken", price: 15.56, done:false});
            $scope.total += 15.56;
            
            $scope.remaining = $scope.budget - $scope.total;
            console.log($scope.remaining);
        }
        
        for(var i  = 0; i <$scope.cart.length; i++)
        {
            console.log($scope.cart[i].Item);
        }

    }

    $scope.remove = function()
    {
        var oldCart = $scope.cart;
        $scope.cart=[];
        $scope.total=0;
        $scope.remaining = $scope.budget;
        angular.forEach(oldCart,function(x) {
            if(!x.done){
                $scope.cart.push(x);
                $scope.total += x.price;
                $scope.remaining = $scope.budget - $scope.total;
            }
        });
    };
    $scope.generateGroceryList = function()
    {
        /*
        Now the customer gets sent to the next webpage...
        */
        
        
        
    }

}