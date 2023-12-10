//Business Logic

function OrderTotal() {
    this.pizza = [];
    this.side = {};
    this.drink = {};
    this.dessert = {};
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

OrderTotal.prototype.addPizza = function (pizza) {
    this.pizza.push(pizza);
}

// User Interface Logic

function addToppings(event) {
    event.preventDefault();

    const checkboxes = document.querySelectorAll('input[name="topping"]:checked');
    if (checkboxes.length === 0) {
        return;
    }

    const pizzaOne = new MyPie("large", "Chicago", "Tomato", [], "Mozzarella");
    checkboxes.forEach((checkbox) => {
        pizzaOne.addTopping(checkbox.value);
    });

    console.log(pizzaOne);
}
