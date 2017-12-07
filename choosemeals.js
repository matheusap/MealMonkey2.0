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
            $scope.remaining = Math.round(($scope.budget - $scope.total) * 100 / 100);
            console.log($scope.remaining);
        }

        if (item == "Pasta")
        {
            $scope.cart.push({Item: "Shrimp Scampi with Pasta", price: 24.29, done:false});
            $scope.total += 24.29;

            $scope.remaining = Math.round(($scope.budget - $scope.total) * 100 / 100);
            console.log($scope.remaining);
        }

        if (item == "Chili")
        {
            $scope.cart.push({Item: "Creamy White Chili", price: 11.28, done:false});
            $scope.total += 11.28;

            $scope.remaining = Math.round(($scope.budget - $scope.total) * 100 / 100);
            
            console.log($scope.remaining);
        }

        if (item == "Chicken")
        {
            $scope.cart.push({Item: "Orange, Honey and Soy Chicken", price: 15.56, done:false});
            $scope.total += 15.56;

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
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Fat free Flour Tortillas"});
                }
                $scope.mealFound = false;
                
                //Ingredient 2
                $scope.temp = "1-1/2 ounces:Taco Seasoning Mix";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Taco Seasoning Mix"});
                }
                $scope.mealFound = false;
                
                //Ingredient 3
                $scope.temp = "3/4 pound:Cheddar Cheese";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Cheddar Cheese"});
                }
                $scope.mealFound = false;
                
                //Ingredient 4
                $scope.temp = "3-1/2 cups:Refried Beans";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Refried Beans"});
                }
                $scope.mealFound = false;
                
                //Ingredient 5
                $scope.temp = "1 pound:Lean Ground Beef";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Lean Ground Beef"});
                }
                $scope.mealFound = false;
                
                //Ingredient 6
                $scope.temp = "2:Green Onion";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Green Onion"});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "2:Roma Tomato";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Roma Tomato"});
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
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Linguine Pasta"});
                }
                $scope.mealFound = false;
                
                //Ingredient 2
                $scope.temp = "2 tablespoon:Salted Butter";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Salted Butter"});
                }
                $scope.mealFound = false;
                
                //Ingredient 3
                $scope.temp = "2 tablespoon:Olive Oil";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Olive Oil"});
                }
                $scope.mealFound = false;
                
                //Ingredient 4
                $scope.temp = "2:Shallots";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Shallots"});
                }
                $scope.mealFound = false;
                
                //Ingredient 5
                $scope.temp = "2 clove:Garlic";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Garlic"});
                }
                $scope.mealFound = false;
                
                //Ingredient 6
                $scope.temp = "1 pound:Shrimp";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Shrimp"});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1/2 cup:Dry White Wine";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Dry White Wine"});
                }
                $scope.mealFound = false;
                
                //Ingredient 8
                $scope.temp = "1:Lemon";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Lemon"});
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
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Chicken Breasts"});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1:Onion";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Onion"});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "2 clove:Garlic";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Garlic"});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "31 ounce:Great Northern Beans";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Great Northern Beans"});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "14.5 ounce:Chicken Broth";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Chicken Broth"});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "8 ounce:Chopped Green Chile";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Chopped Green Chile"});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1 cup:Sour Cream";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Sour Cream"});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1/2 cup:Heavy Whipping Cream";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Heavy Whipping Cream"});
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
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Chicken Breasts"});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "2:Orange";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Orange"});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1/4 cup:Soy Sauce";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Soy Sauce"});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1/4 cup:Honey";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Honey"});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1 tablespoon:Garlic Paste";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Garlic Paste"});
                }
                $scope.mealFound = false;
                
                //Ingredient 7
                $scope.temp = "1 tablespoon:Ginger Paste";
                $scope.temp = $scope.temp.split(":");
                
                console.log($scope.temp);
                angular.forEach($scope.finalList,function(y) {
                    if(y.Item.split(":")[1] == $scope.temp[1])
                    {
                        $scope.mealFound = true;
                    }

                })
                if(!$scope.mealFound)
                {
                    $scope.finalList.push({Item:"Ginger Paste"});
                }
                $scope.mealFound = false;
                
                $scope.totalServings += 2;
                $scope.totalCost += 15.56;

            }


        });   
        console.log($scope.finalList);

    }

}