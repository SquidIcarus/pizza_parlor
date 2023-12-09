## TEST ##
```
DESCRIPTION: OrderTotal(pizza, sides, drinks, dessert);

TEST: “Creates an object of empty strings to hold the total order of pizzas, sides, drinks and desserts”;
CODE: let wholeOrder = new OrderTotal();
EXPECT: _OrderTotal_ {pizza: {…}, side: {…}, drink: {…}, dessert: {…}};

DESCRIPTION: TotalPizza(pizzas); 

TEST: "Creates an object of an empty array to hold the total amount of pizzas.";
CODE: let pizzaOrders = new TotalPizzas();
EXPECT: _TotalPizzas_ {pizzas: {…}};

```