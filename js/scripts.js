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

function MyPie(size, dough, sauce, toppings, cheese) {
    this.size = size;
    this.dough = dough;
    this.sauce = sauce;
    this.toppings = [toppings];
    this.cheese = cheese;
}
