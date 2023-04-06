class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    let price = this.size.price + this.stuffing.price;
    this.toppings.forEach((topping) => {
      price += topping.price;
    });
    return price;
  }

  calculateCalories() {
    let calories = this.size.calories + this.stuffing.calories;
    this.toppings.forEach((topping) => {
      calories += topping.calories;
    });
    return calories;
  }
}

Hamburger.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { price: 100, calories: 40 };
Hamburger.STUFFING_CHEESE = { price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { price: 15, calories: 10 };
Hamburger.TOPPING_SPICE = { price: 15, calories: 0 };
Hamburger.TOPPING_MAYO = { price: 20, calories: 5 };

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log(`Price: ${hamburger.calculatePrice()}, Calories: ${hamburger.calculateCalories()}`);
