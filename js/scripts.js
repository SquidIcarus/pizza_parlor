//Business Logic

function OrderTotal() {
    this.pizza = {};
    this.side = {};
    this.drink = {};
    this.dessert = {};
}

function TotalPizzas() {
    this.pizzas = {};
}

function MyPie(size, dough, sauce, [], cheese) {
    this.size = size;
    this.dough = dough;
    this.sauce = sauce;
    this.toppings = [];
    this.cheese = cheese;
}

MyPie.prototype.addTopping = function (topping) {
    this.toppings.push(topping);
};

// User Interface Logic



