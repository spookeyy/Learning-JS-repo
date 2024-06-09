// linked list
// https://leetcode.com/problems/add-two-numbers/
// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

function ListNode(value) {
  this.value = value;
  this.next = null;
}


var addTwoNumbers = function (l1, l2) {
//solution
    let dummy = new ListNode();
    let curr = dummy;
    let carry = 0;
    while (l1 || l2 || carry) {
        let sum = 0;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        sum += carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
    }
    return dummy.next

};

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))