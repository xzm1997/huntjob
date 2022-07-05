function createList(num) {
  function createNode(value) {
    return {
      value: value,
      next: null
    }
  }

  let head = createNode(1);
  let node = head;

  for (let i = 2; i <= num; ++i) {
    node.next = createNode(i);
    node = node.next;
  }
  node.next = head;
  return head;
}

function delateListNode(num, nth) {
  // 创建循环链表
  let node = createList(num);
  // 当链表长度>1时，继续
  while (num > 1) {
    for (let i = 1; i <= nth-1; ++i) {
      if (i == nth - 1) {
        node.next = node.next.next;
        --num;
      }
      node = node.next;
    }
  }
}
