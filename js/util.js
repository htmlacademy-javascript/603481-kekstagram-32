const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = function (min, max) {
  const previousValues = new Set();

  return () => {
    if (previousValues.size >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${min} до ${max}`);
    }

    let currentValue;
    do {
      currentValue = getRandomInteger(min, max);
    } while (previousValues.has(currentValue));

    previousValues.add(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement};
