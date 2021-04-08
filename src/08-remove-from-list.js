/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function checkFirst(l, k) {
  let cur;
  if (l.value === k) {
    cur = l.next;
    checkFirst(cur, k);
  }
  return cur;
}

function removeKFromList(l, k) {
  const lCopy = checkFirst(l, k);
  let cur = lCopy;
  while (cur.next !== null) {
    if (cur.next.value === k) {
      if (cur.next.next !== null) {
        cur.next = cur.next.next;
      } else {
        cur.next = null;
      }
    } else {
      cur = cur.next;
    }
  }
  return lCopy;
}

module.exports = removeKFromList;
