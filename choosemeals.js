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
        var meals = $scope.cart;
        console.log(meals);
        $scope.totalCost = 0;

        //Spaghetti
        $scope.groundBeef = 0;
        $scope.spaghetti = 0;
        $scope.pastaSauce = 0;

        //Hamburgers
        $scope.buns = 0;
        $scope.tomatoes = 0;
        $scope.onions = 0;
        $scope.lettuce = 0;

        $scope.totalServings = 0;
        //groundbeef

        $scope.finalList = [];


        angular.forEach(meals,function(x) {

            console.log("\nIteration " + x.Item);

            if(x.Item == "Mexican Lasagna II"){

                $scope.finalList.push({Item:"4 Fat free Flour Tortillas"});
                $scope.finalList.push({Item:"1-1/2 ounces taco seasoning mix"});
                $scope.finalList.push({Item:"3/4 pound Cheddar cheese"});
                $scope.finalList.push({Item:"3-1/2 cups refried beans"});
                $scope.finalList.push({Item:"1 pound lean ground beef"});
                $scope.finalList.push({Item:"2 green onions"});
                $scope.finalList.push({Item:"2 roma (plum) tomato"});
                $scope.totalServings += 8;
                $scope.totalCost += 12.53;

            }
            else if(x.Item == "Shrimp Scampi with Pasta"){

               // console.log("\nBurgers" + i);

                $scope.finalList.push({Item:"16 oz linguine pasta"});
                $scope.finalList.push({Item:"2 tbsp salted butter"});
                $scope.finalList.push({Item:"2 tbsp olive oil"});
                $scope.finalList.push({Item:"2 shallots"});
                $scope.finalList.push({Item:"2 cloves garlic"});
                $scope.finalList.push({Item:"1 lb shrimp"});
                $scope.finalList.push({Item:"1/2 cup dry white wine"});
                $scope.finalList.push({Item:"1 lemon"});
                $scope.totalServings += 6;
                $scope.totalCost += 24.29;

            }
            else if(x.Item == "Creamy White Chili"){

                //console.log("\nBurgers" + i);

                $scope.finalList.push({Item:"1 lb chicken breasts"});
                $scope.finalList.push({Item:"1 onion"});
                $scope.finalList.push({Item:"2 cloves garlic"});
                $scope.finalList.push({Item:"31 oz cans great northern beans"});                
                $scope.finalList.push({Item:"14.5 oz can chicken broth"});
                $scope.finalList.push({Item:"8 oz cans chopped green chiles"});
                $scope.finalList.push({Item:"1 cup sour cream"});
                $scope.finalList.push({Item:"1/2 cup heavy whipping cream"});
                $scope.totalServings += 8;
                $scope.totalCost += 11.28;

            }
            else if(x.Item == "Orange, Honey and Soy Chicken"){

                //console.log("\nBurgers" + i);
                $scope.finalList.push({Item:"2 chicken breasts"});
                $scope.finalList.push({Item:"2 oranges"});  
                $scope.finalList.push({Item:"1/4 cup soy sauce"});
                $scope.finalList.push({Item:"1/4 cup honey"});                
                $scope.finalList.push({Item:"1 tbsp garlic paste"});
                $scope.finalList.push({Item:"1 tbsp ginger paste"});
                $scope.totalServings += 2;
                $scope.totalCost += 15.56;

            }
            
            
        });   
        console.log($scope.finalList);

    }

}