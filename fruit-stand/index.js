/*
Define a FruitStand class that allows you to add different types of fruits with their quantities and prices,
update them, and calculate the total value of all the fruits in the stand.
Implement the following methods: addFruit(name, quantity, price), updateQuantity(name, quantity), and totalValue()
*/

function FruitStand() {
  return {
    stand: {},
    addFruit: function (fruitName, fruitQuantity, fruitPrice) {
      if (fruitName && fruitQuantity && fruitPrice) {
        this.stand[fruitName] = {
          quantity: fruitQuantity,
          price: fruitPrice,
        };
      }
    },
    updateQuantity: function (fruitName, fruitQuantity) {
      if (this.stand.hasOwnProperty(fruitName)) {
        this.stand[fruitName].quantity = fruitQuantity;
      }
    },
    updatePrice: function (fruitName, fruitPrice) {
      if (this.stand.hasOwnProperty(fruitName)) {
        this.stand[fruitName].price = fruitPrice;
      }
    },
    totalValue: function () {
      return Object.values(this.stand).reduce(
        (acc, val) => acc + val.quantity * val.price,
        0
      );
    },
  };
}

const stand = FruitStand();

stand.addFruit("apple", 10, 0.5);
stand.addFruit("banana", 5, 0.2);
stand.addFruit("cherry", 20, 0.1);

stand.updateQuantity("banana", 10);
stand.updatePrice("banana", 0.3);

// This one is ignored because of typo
stand.updateQuantity("bananas", 10);

// This one is ignored because of typo
stand.updatePrice("bananas", 300);

// This one is ignored because of missing data
stand.addFruit("kaki");

console.log(stand.totalValue());
