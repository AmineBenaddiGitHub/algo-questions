/*
You have a "mini" version of solitaire in front of you. There is a row of cards,
where each card has a rank from 1 to 13 and a color of "red" or "black".
In one move, you may place a card onto another card immediately to its left
if its rank is exactly one less and its color is opposite, then remove the moved
card from its original position.
Return the maximum number of valid moves you can make by repeatedly scanning
left to right.

Example:

const cards = [
  { rank: 7, color: "black" },
  { rank: 6, color: "red" },
  { rank: 5, color: "black" },
  { rank: 9, color: "red" }
];

const cards2 = [
  { rank: 8, color: "black" },
  { rank: 7, color: "red" },
  { rank: 6, color: "red" },
  { rank: 5, color: "black" }
];

> maxSolitaireMoves(cards)
> 2 // 6 onto 7, 5 onto 6

> maxSolitaireMoves(cards2)
> 2 // 7 onto 8, 5 onto 6
*/

function maxSolitaireMoves(cards) {
  let response = 0;
  cards.forEach((c) => {
    c.minRank = c.rank;
    c.maxRank = c.rank;
    c.minColor = c.color;
    c.maxColor = c.color;
  });
  let { card, matchingCard } = allowedMove(cards);
  while (matchingCard > -1) {
    const currCard = cards[card];
    const targetCard = cards[matchingCard];
    if (currCard.maxRank < targetCard.minRank) {
      targetCard.minRank = currCard.minRank;
      targetCard.minColor = currCard.minColor;
    }
    if (currCard.minRank > targetCard.maxRank) {
      targetCard.maxRank = currCard.maxRank;
      targetCard.maxColor = currCard.maxColor;
    }
    cards.splice(card, 1);
    response += 1;
    ({ card, matchingCard } = allowedMove(cards));
  }
  return { response, cards };
}

function allowedMove(cards) {
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const matchingCard = cards.findIndex(
      (c) =>
        (c.maxRank < card.minRank && c.maxColor !== card.minColor) ||
        (c.minRank > card.maxRank && c.minColor !== card.maxColor),
    );
    if (matchingCard) return { card: i, matchingCard };
  }
  return { card: undefined, matchingCard: undefined };
}

const cards = [
  { rank: 7, color: "black" },
  { rank: 6, color: "red" },
  { rank: 5, color: "black" },
  { rank: 9, color: "red" },
];

const cards2 = [
  { rank: 8, color: "black" },
  { rank: 7, color: "red" },
  { rank: 6, color: "red" },
  { rank: 5, color: "black" },
];

const cards3 = [
  { rank: 8, color: "black" },
  { rank: 7, color: "red" },
  { rank: 6, color: "black" },
  { rank: 5, color: "red" },
];

const cards4 = [
  { rank: 5, color: "black" },
  { rank: 6, color: "red" },
  { rank: 7, color: "black" },
  { rank: 8, color: "red" },
];

console.log(maxSolitaireMoves(cards));
console.log(maxSolitaireMoves(cards2));
console.log(maxSolitaireMoves(cards3));
console.log(maxSolitaireMoves(cards4));
