const colorGen = (color) =>
  Array.from({ length: 13 }, (_, idx) => {
    return { number: idx + 1, type: color };
  });
const cards = [
  ...colorGen("yellow"),
  ...colorGen("yellow"),
  ...colorGen("red"),
  ...colorGen("red"),
  ...colorGen("blue"),
  ...colorGen("blue"),
  ...colorGen("black"),
  ...colorGen("black"),
  { number: null, type: "wildcard" },
  { number: null, type: "wildcard" },
];

const createPlayerTray = () => {
  const res = [];
  for (let i = 0; i < 14; i++) {
    const idx = Math.floor(Math.random() * cards.length);
    res.push(cards[idx]);
    cards.splice(idx, 1);
  }
  return res;
};

const validSets = (tray) => {
  const res = [];
  const blackCards = tray
    .filter((e) => e.type === "black")
    .sort((a, b) => a.number - b.number);
  const redCards = tray
    .filter((e) => e.type === "red")
    .sort((a, b) => a.number - b.number);
  const yellowCards = tray
    .filter((e) => e.type === "yellow")
    .sort((a, b) => a.number - b.number);
  const blueCards = tray
    .filter((e) => e.type === "blue")
    .sort((a, b) => a.number - b.number);
  const wildCards = tray.filter((e) => e.type === "wildcard");
  [blackCards, redCards, yellowCards, blueCards].forEach((card) => {
    card.forEach((v, idx, arr) => {
      if (
        v.number + 1 === arr[idx + 1]?.number &&
        arr[idx + 1]?.number + 1 === arr[idx + 2]?.number
      ) {
        res.push([v, arr[idx + 1], arr[idx + 2]]);
        if (arr[idx + 2]?.number + 1 === arr[idx + 3]?.number) {
          res.push([v, arr[idx + 1], arr[idx + 2], arr[idx + 3]]);
        }
      } else if (
        v.number + 2 === arr[idx + 1]?.number &&
        wildCards.length > 0
      ) {
        res.push([v, arr[idx + 1], wildCards[0]]);
      } else if (wildCards.length > 1) {
        res.push([v, wildCards[0], wildCards[1]]);
      }
    });
  });
  for (let i = 1; i < 14; i++) {
    const cardsWithSameNumber = tray.filter((e) => e.number === i);
    if (cardsWithSameNumber.length > 2) res.push(cardsWithSameNumber);
    else if (cardsWithSameNumber.length === 2 && wildCards.length > 0)
      res.push([...cardsWithSameNumber, wildCards[0]]);
    else if (cardsWithSameNumber.length === 1 && wildCards.length > 1)
      res.push([...cardsWithSameNumber, wildCards[0], wildCards[1]]);
  }
  return res;
};

console.log(validSets(createPlayerTray()));
