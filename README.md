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

DESCRIPTION: MyPie(size, dough, sauce, toppings, cheese);

TEST: "Creates an object with a pizza build of choice size, dough, sauce, toppings and cheese."
CODE: let pizzaOne = new MyPie("12", "Chicago", "Tomato", "Pepperoni", "Mozzerella");
EXPECT: _MyPie_ {size: '12', dough: 'Chicago', sauce: 'Tomato', toppings: 'Pepperoni', cheese: 'Mozzarella'}

```