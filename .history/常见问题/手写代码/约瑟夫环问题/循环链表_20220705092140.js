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
}
