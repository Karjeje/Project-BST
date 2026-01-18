class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }
}

function buildTree(array, start, end) {
  if (array.length === 0) return null;
  if (start > end) return null;
  const set = [...new Set(array)];
  set.sort((a, b) => a - b);

  let mid = start + Math.floor((end - start) / 2);
  let root = new Node(array[mid]);

  root.left = buildTree(array, start, mid - 1);
  root.right = buildTree(array, mid + 1, end);

  return root;
}
