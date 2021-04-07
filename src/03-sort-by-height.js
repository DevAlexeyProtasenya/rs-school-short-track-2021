/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sorted = new Array(0);
  arr.forEach((element) => {
    if (element !== -1) {
      sorted.push(element);
    }
  });
  sorted.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      // eslint-disable-next-line no-param-reassign
      arr[i] = sorted.shift();
    }
  }
  return arr;
}

module.exports = sortByHeight;
