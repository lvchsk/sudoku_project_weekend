const searchEmpty = require('./searchEmpty');
const check = require('./checkCurrent');

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить..
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(puzzle) {
  const position = searchEmpty(puzzle);
  if (position === false) {
    return puzzle
  }

  for (let number = 1; number <= 9; number += 1) {
    if (check(number, position, puzzle)) {
      puzzle[position[0]][position[1]] = String(number);
      return solve(puzzle)
    }
  }
  return puzzle
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(puzzle) {
  return !searchEmpty(puzzle)
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  console.log(board)
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
