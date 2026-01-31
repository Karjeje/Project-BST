class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    const sortedUnique = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(sortedUnique, 0, sortedUnique.length - 1);
  }

  buildTree(array, start, end) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let root = new Node(array[mid]);

    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);

    return root;
  }

  insert(value) {
    this.root = this._insertRec(this.root, value);
  }

  _insertRec(root, value) {
    if (root === null) return new Node(value);

    if (value < root.data) {
      root.left = this._insertRec(root.left, value);
    } else {
      root.right = this._insertRec(root.right, value);
    }

    return root;
  }

  getSuccessor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) {
      curr = curr.left;
    }

    return curr;
  }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

export { Tree, Node, prettyPrint };
