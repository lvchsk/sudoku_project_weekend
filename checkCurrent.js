const check = (number, position, array) => {
  const [x, y] = position;
  // console.log(x,y)

  for (let i = 0; i < 9; i += 1) {
    // console.log(array[i][y]);
    // console.log('-------------------------------------');
    // console.log(number)
    if (array[i][y] == number) {
      
      return false;
    }
  }

  for (let i = 0; i < 9; i += 1) {
    if (array[x][i] == number) {
      return false;
    }
  }

  return true;
};
module.exports = check;