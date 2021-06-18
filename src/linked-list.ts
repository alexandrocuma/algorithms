const ListNode = function (value, next = null) {
  this.val = value,
    this.next = next
}

const LinkedList = (l1, l2) => {
  console.log(`\nList No.1 is: `, l1)
  console.log(`List No.2 is: `, l2)
  let result = new ListNode(0)
  let current = result
  let carry = 0
  let sum = 0
  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum += l1.val
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val
      l2 = l2.next
    }

    carry = Math.floor(sum / 10);
    sum = sum % 10;

    current.next = new ListNode(sum);
    current = current.next;

    sum = carry;
    carry = 0;
  }
  return result.next
}

const createLinkedList = (array) => {
  console.log(`\nThe array to create Linked List is: `, array)
  let result = new ListNode(0)
  let current = result
  while (array.length) {
    current.next = new ListNode(array.shift());
    current = current.next;
  }
  return result.next
}

const LINKED_LIST_TESTS = [
  {
    firstArray: [1, 2, 4], secondArray: [6, 4, 5]
  },
  {
    firstArray: [2, 6, 6, 5, 4, 9, 6, 2, 5, 2, 3, 6, 8, 1, 5, 8, 5, 9, 8, 4, 7, 6, 2, 1, 1, 4, 5, 9, 9, 8, 3, 2, 7, 3, 2, 4, 8, 1, 5, 2, 7, 2, 3, 7, 1, 4, 9, 4, 2, 3, 4, 9, 2, 7, 9, 5, 6, 4, 5, 1, 7, 1, 4, 8, 3, 2, 3, 2, 6, 4, 1, 3, 6, 7, 9, 1, 9, 8, 9, 1, 5, 6, 7, 6, 8, 1, 2, 6, 3, 2, 1, 8, 3, 7, 3, 1, 9, 9, 2, 9, 8, 3, 5, 8, 2, 9, 7, 8, 2, 5, 1, 9, 5, 6, 8, 5, 8, 9, 3, 6, 7, 8, 3, 5, 9, 4, 1, 8, 2, 9, 7, 7, 9, 9, 9, 9, 5, 2, 4, 4, 2, 1, 1, 1, 8, 4, 8, 8, 2, 8, 3, 3, 4, 1, 6, 7, 3, 7, 5, 8, 1, 1, 6, 4, 2, 9, 7, 9, 2, 4, 5, 2, 3, 2, 6, 4, 5, 9, 5, 3, 6, 4, 6, 9, 3, 4, 4, 9, 6, 5, 8, 6, 4, 8, 4, 9, 9, 1, 8, 8, 7, 5, 1, 3, 6, 6, 6, 2, 4, 2, 5, 1, 4, 2, 2, 4, 1, 6, 4, 3, 4, 9, 4, 7, 8, 6, 8, 9, 6, 6],
    secondArray: [5, 9, 4, 3, 3, 9, 4, 6, 2, 1, 8, 7, 8, 6, 1, 8, 2, 2, 8, 4, 3, 1, 2, 7, 8, 4, 4, 8, 2, 9, 3, 3, 1, 7, 8, 5, 8, 4, 7, 3, 2, 6, 8, 3, 1, 2, 7, 3, 1, 1, 6, 2, 4, 4, 9, 2, 7, 3, 5, 2, 2, 7, 4, 5, 3, 3, 3, 3, 2, 5, 9, 9, 1, 7, 4, 5, 6, 3, 2, 7, 9, 9, 9, 2, 8, 6, 6, 2, 9, 4, 4, 7, 2, 1, 7, 2, 6, 3, 7, 4, 4, 2, 2, 8, 5, 8, 2, 4, 6, 1, 8, 5, 2, 8, 9, 5, 6, 9, 2, 5, 1, 9, 1, 4, 2, 9, 2, 6, 9, 8, 3, 9, 1, 4, 2, 2, 6, 2, 8, 5, 7, 4, 5, 5, 1, 6, 2, 4, 7, 5, 2, 9, 3, 3, 7, 7, 5, 3, 3, 6, 9, 2, 1, 3, 2, 1, 2, 9, 4, 6, 7, 1, 2, 8, 5, 6, 2, 5, 2, 4, 1, 6, 6, 3, 1, 7, 9, 1, 2, 8, 5, 9, 6, 7, 8, 3, 1, 1, 9, 2, 2, 4, 3, 6, 1, 1, 8, 8, 9, 6, 5, 8, 6, 4, 7, 2, 4, 3, 4, 9, 2]
  },
  {
    firstArray: [2, 8, 5, 0],
    secondArray: [7, 4, 9, 1]
  }
]

console.log("The sum of Linked List is: ", LinkedList(
  createLinkedList(LINKED_LIST_TESTS[0].firstArray),
  createLinkedList(LINKED_LIST_TESTS[0].secondArray)
))

console.log("The sum of Linked List is: ", LinkedList(
  createLinkedList(LINKED_LIST_TESTS[1].firstArray),
  createLinkedList(LINKED_LIST_TESTS[1].secondArray)
))

console.log("The sum of Linked List is: ", LinkedList(
  createLinkedList(LINKED_LIST_TESTS[2].firstArray),
  createLinkedList(LINKED_LIST_TESTS[2].secondArray)
))

