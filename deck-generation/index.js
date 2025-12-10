/*
Make a data structure for a deck of cards, and implement a shuffle() method,
and a draw(n) method (where you draw n cards).
Calling draw() when the deck is empty returns an empty array.

Example usage:

const deck = new Deck();
deck.shuffle();
console.log(deck.draw(5)); // Example: ['10♠', 'K♥', '3♣', 'J♦', '7♠']
console.log(deck.draw(5).length); // 5
console.log(deck.draw(2)); // Example: ['5♣', 'A♠']
*/

class Deck {
  #cards = [];
  constructor() {
    this.#cards = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ]
      .map((n) => ["♠", "♥", "♣", "♦"].map((s) => n + s))
      .flat();
  }
  shuffle() {
    const shuffled = [];
    while (this.#cards.length > 0) {
      const randIdx = Math.floor(this.#cards.length * Math.random());
      shuffled.push(this.#cards.splice(randIdx, 1)[0]);
    }
    this.#cards = shuffled;
  }
  draw(n = 5) {
    return this.#cards.splice(0, n);
  }
}

const deck = new Deck();
deck.shuffle();
for (let i = 0; i < 20; i++) {
  console.log(deck.draw(5));
}
