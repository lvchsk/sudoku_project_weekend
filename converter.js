const { log } = require('console');
const fs = require('fs');
const { EOL } = require('os');
const path = require('path');
// const puzzles = fs.readFileSync(path.join(__dirname, 'puzzles.txt'), 'utf-8').split(EOL);

 //функция валидации
//читает файл pazzles.txt и обрабатывает данные, приводя их в более удобный для работы вид
  
function stringToArray(puzzles, n) {
  let mainArr = []
  //console.log(puzzles)
  
  for (let i = 0; i < puzzles.length - 1; i += 1) {
    let result = [];
    let arr = puzzles[i].split('');
    // console.log(arr)
    while (arr.length) {
      const strArr = arr.splice(0,9);
      if (strArr.length === 9) {
        result.push(strArr);
      }
    }
    // console.log(result)
    mainArr.push(result)
  }
  return mainArr[n];
}

// можно раскомментить строку снизу, чтобы посмотреть на работу функции

//console.log(stringToArray(puzzles))

module.exports = stringToArray;