const { log } = require("console");
const fs = require("fs");
const { EOL } = require("os");
const path = require("path");

//функция валидации
//читает файл pazzles.txt и обрабатывает данные, приводя их в более удобный для работы вид

function stringToArray(puzzles, n) {
  const mainArr = [];
  for (let i = 0; i < puzzles.length - 1; i += 1) {
    const result = [];
    const arr = puzzles[i].split("");
    while (arr.length) {
      const strArr = arr.splice(0, 9);
      if (strArr.length === 9) {
        result.push(strArr);
      }
    }
    mainArr.push(result);
  }

  return mainArr[n];
}

module.exports = stringToArray;
