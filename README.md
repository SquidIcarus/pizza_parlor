# Object-Oriented Code Review 4

# https://squidicarus.github.io/pizza_parlor/

## Pizza Parlor##

A website to build your favorite pizza!

## Main objectives for this project

- Constructors & prototypes are used successfully.
- Application works as expected.
- Tests are included for each business logic behavior and code is committed after each test passes.
- Project is in a polished, portfolio-quality state.
- The prompt's required functionality and baseline project requirements are in place by the deadline.

## Setup/Installation Requirements

**How to clone repository**

1. Go to 
**https://github.com/SquidIcarus/pizza_parlor.git**
and click on the "Code" button and copy the URL.

2. Open Terminal/GitBash

3. Within the desired directory, use the **git clone** command followed by the copied repository URL.

4. Press enter and the repository should be cloned to your directory.



## Technologies used:

**software Tools**
- GitBash
- VsCode

**Language**
- HTML
- CSS
- JavaScript

## Known Bugs
- Error message does't work as intended
- Still need to add price and total cost
- Still needs style...

## TEST ##
```
DESCRIPTION: OrderTotal(pizza);

TEST: “Creates an object that holds an array of built pizzas”;
CODE: let wholeOrder = new OrderTotal();
EXPECT: _OrderTotal_ {pizzas: Array(0)}

DESCRIPTION: MyPie(size, dough, sauce, topping, cheese);

TEST: "Creates an object with a pizza build of choice size, dough, sauce, toppings and cheese."
CODE: let pizzaOne = new MyPie("medium", "Chicago", "Tomato", "Pepperoni", "Mozzarella");
EXPECT: _MyPie_ {size: 'medium', dough: 'Chicago', sauce: 'Tomato', toppings: 'Pepperoni', cheese: 'Mozzarella'}

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
        0: MyPie {size: 'medium', dough: 'Chicago', sauce: 'tomato', toppings:Array(0), cheese: 'mozzarella'}
        length: 1;

DESCRIPTION: MyPie.prototype.sizePrice();

TEST: "Defines the price for each MyPie property this.price"
CODE:  pizzaOne.sizePrice();
EXPECT: 12

```

## License
[Copyright © 2023 Landon Leadford](LICENSE.txt)