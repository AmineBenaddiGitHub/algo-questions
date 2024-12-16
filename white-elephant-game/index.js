/**
Make a white elephant gift exchange class that simulates the game.
It should generate a sequence of random but valid gift-opening and
gift-stealing moves for n participants, tracks steal counts and frozen
gifts, and ends the game when everyone has a gift.
 */

function WhiteElephantGame(players, percentageSelectGift = 0.5) {
  this.lastUser = 0;
  this.percentageSelectGift = percentageSelectGift;
  this.availableGifts = Array.from({ length: players }, (_, idx) => idx);
  this.results = Array.from({ length: players }, (_, idx) => idx).reduce(
    (acc, v) => {
      acc[v] = -1;
      return acc;
    },
    {}
  );
  this.currentUser = -1;
  this.frozenGifts = [];
}

WhiteElephantGame.prototype.nextMove = function () {
  const shouldGetGift = Math.random() < this.percentageSelectGift;
  console.log(this.currentUser, this.availableGifts, this.frozenGifts);
  const currentUser =
    this.currentUser === -1 ? this.lastUser : this.currentUser;
  if (
    currentUser === 0 ||
    this.frozenGifts.length === this.lastUser ||
    shouldGetGift
  ) {
    const giftIdx = Math.floor(Math.random() * this.availableGifts.length);
    this.results[currentUser] = this.availableGifts[giftIdx];
    this.availableGifts.splice(giftIdx, 1);
    this.currentUser = -1;
    this.frozenGifts = [];
    this.lastUser += 1;
  } else {
    let previousPlayer = Math.floor(Math.random() * this.lastUser);
    while (this.frozenGifts.includes(this.results[previousPlayer])) {
      previousPlayer = Math.floor(Math.random() * this.lastUser);
    }
    this.results[currentUser] = this.results[previousPlayer];
    this.results[previousPlayer] = 0;
    this.currentUser = previousPlayer;
    this.frozenGifts.push(this.results[currentUser]);
  }
  return this.results;
};

const game = new WhiteElephantGame(5, 0.001);

while (game.lastUser !== 5) {
  console.log(game.nextMove());
}
