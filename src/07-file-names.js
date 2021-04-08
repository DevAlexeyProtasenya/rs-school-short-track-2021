/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const matches = new Map();
  const result = names.map((element) => {
    if (matches.get(element) === undefined) {
      matches.set(element, 1);
    } else {
      matches.set(element, matches.get(element) + 1);
      // eslint-disable-next-line no-param-reassign
      element = `${element}(${matches.get(element) - 1})`;
      matches.set(element, 1);
    }
    return element;
  });
  return result;
}

module.exports = renameFiles;
