/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let minEl = n.toString().split('')[0];
  let minPos = 0;
  const array = n.toString().split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minEl) {
      minEl = array[i];
      minPos = i;
    }
  }
  array.splice(minPos, 1);
  return parseInt(array.join(''), 10);
}

module.exports = deleteDigit;
