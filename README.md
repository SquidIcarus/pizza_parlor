## TEST ##
```
DESCRIPTION: OrderTotal(pizza, sides, drinks, dessert);

TEST: “Creates an object of empty strings to hold the total order of pizzas, sides, drinks and desserts”;
CODE: let wholeOrder = new OrderTotal();
EXPECT: _OrderTotal_ {pizza: {…}, side: {…}, drink: {…}, dessert: {…}};

DESCRIPTION: MyPie(size, dough, sauce, topping, cheese);

TEST: "Creates an object with a pizza build of choice size, dough, sauce, toppings and cheese."
CODE: let pizzaOne = new MyPie("12", "Chicago", "Tomato", "Pepperoni", "Mozzarella");
EXPECT: _MyPie_ {size: '12', dough: 'Chicago', sauce: 'Tomato', toppings: 'Pepperoni', cheese: 'Mozzarella'}

DESCRIPTION: MyPie.prototype.addTopping(topping)

TEST: "Adds toppings to empty array in MyPie object properties."
CODE: pizzaOne.addTopping(["pepperoni", "mushroom"]);
EXPECT: toppings: Array(1)
        0: (2) ['pepperoni', 'mushroom']
        length:1

DESCRIPTION: OrderTotal.prototype.addPizza(pizza);

TEST: "Adds complete pizza to empty array in OrderTotal object."
CODE: finishedOrder.addPizza(pizzaOne);
EXPECT: pizza: Array(1)
        0: MyPie {size: '12', dough: 'Chicago', sauce: 'tomato', toppings:Array(0), cheese: 'mozzarella'}
        length: 1;

```