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

// User Interface Logic
function handleForm(event) {
    event.preventDefault();
    const userSelections = document.querySelectorAll("input[name=topping]:checked");
    const userSelectionsArray = Array.from(userSelections);

    const resultsHeading = document.createElement("h2");
    resultsHeading.append("Your pizza order:");
    document.body.append(resultsHeading);

    userSelectionsArray.forEach(function (element) {
        const paragraph = document.createElement("p");
        paragraph.append(element.value);
        document.body.append(paragraph);
    });
}

window.addEventListener("load", function () {
    this.document.querySelector("form#pizzaOrder").addEventListener("submit", handleForm);
});
