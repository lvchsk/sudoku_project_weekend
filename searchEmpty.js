function solve(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array[i].length; j += 1) {
      if (array[i][j] === "-") {
        return array[i][j];
      } else if (!array[i][j] === "-") {
        solve(array);
      }
    }
  }
  return false;
}
console.log(solve(array));
