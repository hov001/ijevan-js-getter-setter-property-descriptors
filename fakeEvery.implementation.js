function fakeEvery(array = [], cb = () => {}) {
  for (let idx = 0; idx < array.length; idx++) {
    if (!cb(array[idx], idx, array)) {
      return false;
    }
  }

  return true;
}

const isValid = fakeEvery([4, 2, 22], function (item) {
  return item % 2 === 0;
});

console.log(isValid);
