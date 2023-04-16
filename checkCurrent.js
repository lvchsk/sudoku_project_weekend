const check = (number, position, array) => {
  const [x, y] = position;

  for (let i = 0; i < 9; i += 1) {
    if (array[i][y] === number && i !== x) {
      return false;
    }
  }

  for (let i = 0; i < 9; i += 1) {
    if (array[x][i] === number && i !== y) {
      return false;
    }
  }

  return true;
};
module.exports = check;