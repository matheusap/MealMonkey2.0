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
            $scope.total += Math.round(12.53 * 100 / 100);          
            $scope.remaining = Math.round(($scope.budget - $scope.total) * 100 / 100);
            console.log($scope.remaining);
        }

        if (item == "Pasta")
        {
            $scope.cart.push({Item: "Shrimp Scampi with Pasta", price: 24.29, done:false});
            $scope.total += Math.round(24.29 * 100 / 100);

            $scope.remaining = Math.round(($scope.budget - $scope.total) * 100 / 100);
            console.log($scope.remaining);
        }

        if (item == "Chili")
        {
            $scope.cart.push({Item: "Creamy White Chili", price: 11.28, done:false});
            $scope.total += Math.round(11.28 * 100 / 100);

            $scope.remaining = Math.round(($scope.budget - $scope.total) * 100 / 100);
            
            console.log($scope.remaining);
        }

        if (item == "Chicken")
        {
            $scope.cart.push({Item: "Orange, Honey and Soy Chicken", price: 15.56, done:false});
            $scope.total += Math.round(15.56 * 100 / 100);

            $scope.remaining = Math.round(($scope.budget - $scope.total) * 100 / 100);
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
    $scope.removeIngredient = function()
    {
        var oldList = $scope.finalList;
        $scope.finalList=[];
        $scope.totalCost=5;
        angular.forEach(oldList,function(x) {
            if(!x.done){
                $scope.finalList.push(x);
                $scope.totalCost += 3.50;//Math.round(x.price * 100 / 100);
            }
        });
    }
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
        $scope.mealFound = false;


        angular.forEach(meals,function(x) {

            console.log("\nIteration " + x.Item);

            if(x.Item == "Mexican Lasagna II"){
                
                //Ingredient 1
                $scope.temp = "4:Fat free Flour Tortillas";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                        y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({
                        Item:"Fat free Flour Tortillas", 
                        Quantity:$scope.temp[0],
                        Repeats: 1
                                          });
                }
                $scope.mealFound = false;
                
                //Ingredient 2
                $scope.temp = "1-1/2 ounces:Taco Seasoning Mix";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Taco Seasoning Mix", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 3
                $scope.temp = "3/4 pound:Cheddar Cheese";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Cheddar Cheese", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 4
                $scope.temp = "3-1/2 cups:Refried Beans";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Refried Beans", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 5
                $scope.temp = "1 pound:Lean Ground Beef";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Lean Ground Beef", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 6
                $scope.temp = "2:Green Onion";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Green Onion", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "2:Roma Tomato";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Roma Tomato", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                $scope.totalServings += 8;
                $scope.totalCost += 12.53;

            }
            else if(x.Item == "Shrimp Scampi with Pasta"){

                //Ingredient 1
                $scope.temp = "16 ounce:Linguine Pasta";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Linguine Pasta", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 2
                $scope.temp = "2 tablespoon:Salted Butter";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Salted Butter", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 3
                $scope.temp = "2 tablespoon:Olive Oil";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Olive Oil", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 4
                $scope.temp = "2:Shallots";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Shallots", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 5
                $scope.temp = "2 clove:Garlic";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Garlic", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 6
                $scope.temp = "1 pound:Shrimp";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Shrimp", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1/2 cup:Dry White Wine";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Dry White Wine", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 8
                $scope.temp = "1:Lemon";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Lemon", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                $scope.totalServings += 6;
                $scope.totalCost += 24.29;

            }
            else if(x.Item == "Creamy White Chili"){

                //Ingredient 7
                $scope.temp = "1 pound:Chicken Breasts";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Chicken Breasts", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1:Onion";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Onion", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "2 clove:Garlic";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Garlic", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "31 ounce:Great Northern Beans"
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Great Northern Beans", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "14.5 ounce:Chicken Broth";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Chicken Broth", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "8 ounce:Chopped Green Chile";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Chopped Green Chile", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1 cup:Sour Cream";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Sour Cream", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1/2 cup:Heavy Whipping Cream";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Heavy Whipping Cream", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                $scope.totalServings += 8;
                $scope.totalCost += 11.28;

            }
            else if(x.Item == "Orange, Honey and Soy Chicken"){
                
                //Ingredient 7
                $scope.temp = "2:Chicken Breasts";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Chicken Breasts", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "2:Orange";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Orange", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1/4 cup:Soy Sauce";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Soy Sauce", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1/4 cup:Honey";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Honey", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1 tablespoon:Garlic Paste";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Garlic Paste", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1 tablespoon:Ginger Paste";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item == $scope.temp[1])
                    {
                        $scope.mealFound = true;                         y.Repeats = y.Repeats + 1;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Ginger Paste", 
                        Quantity:$scope.temp[0],
                        Repeats: 1});
                }
                $scope.mealFound = false;
                
                $scope.totalServings += 2;
                $scope.totalCost += 15.56;

            }


        });   
        console.log($scope.finalList);

    }

}