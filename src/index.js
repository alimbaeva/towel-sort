
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = [];
  if (matrix !== undefined) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0 && i != 0) {
        let num = [];
        num.push((matrix[i]).reverse());
        for (n in num) {
          for (let y = 0; y < num[n].length; y++) {
            arr.push(num[n][y])
          }
        }
      } else {
        let num = [];
        num.push(matrix[i]);
        for (n in num) {

          for (let y = 0; y < num[n].length; y++) {
            arr.push(num[n][y])
          }
        }
      }
    }
  }
  return arr;
}
