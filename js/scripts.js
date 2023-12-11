//Business Logic

function OrderTotal() {
    this.pizzas = [];
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
    this.pizzas.push(pizza);
}

// User Interface Logic

function addToppings(event) {
    event.preventDefault();

    const sizeInputs = document.querySelectorAll('input[name="size"]');
    let selectedSize = "";
    sizeInputs.forEach((input) => {
        if (input.checked) {
            selectedSize = input.value;
        }
    });

    const dough = document.querySelector('input[name="dough"]:checked').value;
    const sauce = document.querySelector('input[name="sauce"]:checked').value;
    const cheese = document.querySelector('input[name="cheese"]:checked').value;
    const checkboxes = document.querySelectorAll('input[name="topping"]:checked');
    if (selectedSize === "" || checkboxes.length === 0) {
        return;
    }

    const pizza = new MyPie(selectedSize, dough, sauce, [], cheese);

    checkboxes.forEach((checkbox) => {
        pizza.addTopping(checkbox.value);
    });

    const orderTotal = new OrderTotal();
    orderTotal.addPizza(pizza);

    displayBuiltPizza(orderTotal.pizzas);

    function displayBuiltPizza(pizzas) {
        const builtPizzaDetails = document.getElementById("builtPizzaDetails");
        builtPizzaDetails.innerHTML = "";

        pizzas.forEach((pizza, index) => {
            const pizzaInfo = document.createElement("div");
            pizzaInfo.innerHTML = `<h3>Pizza ${index + 1}:<h /3>
                <p>Size: ${pizza.size}</p>
                <p>Dough: ${pizza.dough}</p>
                <p>Sauce: ${pizza.sauce}</p>
                <p>Toppings: ${pizza.toppings.join(", ")}</p>
                <p>Cheese: ${pizza.cheese}</p>`;
            builtPizzaDetails.appendChild(pizzaInfo);
        });
    }


    document.getElementById("pizzaOrder").reset
}
