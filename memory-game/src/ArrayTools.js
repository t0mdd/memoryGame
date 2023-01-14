const { random, floor } = Math;

const randomIndexInArray = (array) => floor(array.length*random());
const removeItemAtIndex = (index, array) => [
  ...array.slice(0, index),
  ...array.slice(index + 1)
];

const randomSubarrayOfSize = (size, array) => {
  const nextItemIndex = randomIndexInArray(array);
  return (size === 1) ? [array[nextItemIndex]] : [
    array[nextItemIndex], 
    ...randomSubarrayOfSize(size - 1, removeItemAtIndex(nextItemIndex, array))
  ];
}

const randomPermutationOfArray = (array) => (
  array
  .map((item) => ({ item, weight: random() }))
  .sort((x, y) => x.weight - y.weight)
  .map((weightedItem) => weightedItem.item)
)

const naturalsFromZeroTo = (n) => (
  Array(n+1).fill(null).map((slot, index) => index)
);

const isDerangement = (naturalsFromZero) => (
  naturalsFromZero.every((item, index) => item !== index)
);

const randomDerangementOfArray = (array) => {
  let eventualDerangement = naturalsFromZeroTo(array.length - 1);
  while (!isDerangement(eventualDerangement)) {
    eventualDerangement = randomPermutationOfArray(eventualDerangement);
  }
  return array.map((item, index) => array[eventualDerangement[index]]);
};

export {
  randomDerangementOfArray,
  randomSubarrayOfSize
};
