//Business Logic

function OrderTotal() {
    this.pizzas = [];
}

function MyPie(size, dough, sauce, toppings, cheese) {
    this.size = size;
    this.dough = dough;
    this.sauce = sauce;
    this.toppings = toppings;
    this.cheese = cheese;
    this.price = 0;
}

MyPie.prototype.addTopping = function (topping) {
    this.toppings.push(topping);
}

OrderTotal.prototype.addPizza = function (pizza) {
    this.pizzas.push(pizza);
}

const orderTotal = new OrderTotal();

MyPie.prototype.sizePrice = function () {
    const sizePrices = {
        "small": 8,
        "medium": 10,
        "large": 12,
        "party": 15
    };
    const basePrice = sizePrices[this.size] || 0;
    const toppingPrice = this.toppings.length * 2

    this.price = basePrice + toppingPrice;
}

// User Interface Logic


function addToppings(event) {
    event.preventDefault();

    const errorMessage = document.getElementById("errorMessage");
    const sizeElem = document.querySelector('input[name="size"]:checked');
    const doughElem = document.querySelector('input[name="dough"]:checked');
    const sauceElem = document.querySelector('input[name="sauce"]:checked');
    const cheeseElem = document.querySelector('input[name="cheese"]:checked');
    const toppingCheckboxes = document.querySelectorAll('input[name="topping"]:checked');
    const toppings = Array.from(toppingCheckboxes).map(checkbox => checkbox.value);

    if (!sizeElem || !doughElem || !sauceElem || !cheeseElem || toppings.length === 0) {
        errorMessage.textContent = "Please select an item from each category.";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";

    const size = sizeElem.value;
    const dough = doughElem.value;
    const sauce = sauceElem.value;
    const cheese = cheeseElem.value;


    const pizza = new MyPie(size, dough, sauce, toppings, cheese);
    pizza.sizePrice();

    orderTotal.addPizza(pizza);
    displayBuiltPizzas(orderTotal.pizzas);
}

function displayBuiltPizzas(pizzas) {
    const builtPizzaDetails = document.getElementById("builtPizzaDetails");
    builtPizzaDetails.innerHTML = "";

    pizzas.forEach((pizza, index) => {

        const pizzaInfo = document.createElement("div");
        pizzaInfo.innerHTML =
            `<h3>Pizza ${index + 1}:</h3>
                <p>Size: ${pizza.size}</p>
                <p>Dough: ${pizza.dough}</p>
                <p>Sauce: ${pizza.sauce}</p>
                <p>Toppings: ${pizza.toppings.join(", ")}</p>
                <p>Cheese: ${pizza.cheese}</p>
                <p>Price: $${pizza.price}</p>`;
        builtPizzaDetails.appendChild(pizzaInfo);

        document.getElementById("pizzaOrder").reset();

    });
}

window.onload = function () {
    const form = document.getElementById("pizzaOrder");
    form.addEventListener("submit", function (event) {
        addToppings(event)
    });
}



