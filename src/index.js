module.exports = function towelSort (matrix) {
    let endArray = [];
    if(matrix) {
      for(let i = 0; i < matrix.length; i++) {
        (i == 0 || i%2 == 0) ? endArray.push(matrix[i]) : endArray.push(matrix[i].reverse())
      }
      return endArray.flat();
    } else return [];
}
