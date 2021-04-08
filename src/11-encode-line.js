/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

const addElem = (amount, current) => {
  if (amount > 1) {
    return amount + current;
  }
  return current;
};

function encodeLine(str) {
  const strArr = str.split('');
  let result = '';
  let current = strArr[0];
  let amount = 1;
  if (str !== '') {
    for (let i = 1; i < strArr.length; i++) {
      if (current === strArr[i]) {
        amount++;
      } else {
        result += addElem(amount, current);
        current = strArr[i];
        amount = 1;
      }
    }
    result += addElem(amount, current);
  }
  return result;
}

module.exports = encodeLine;
