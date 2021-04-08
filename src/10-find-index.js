/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  let result = -1;
  while (start <= end) {
    const meadle = Math.floor((start + end) / 2);
    if (array[meadle] < value) {
      start = meadle + 1;
    } else if (array[meadle] > value) {
      end = meadle - 1;
    } else {
      result = meadle;
      break;
    }
  }
  return result;
}

module.exports = findIndex;
