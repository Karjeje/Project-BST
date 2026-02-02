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

  getSuccessor(node) {
    curr = node.right;
    while (curr.left !== null) {
      curr = curr.left;
    }

    return curr;
  }

  deleteItem(value) {
    this.root = this._deleteRec(this.root, value);
  }

  _deleteRec(root, value) {
    if (root === null) return root;

    if (root.data > value) {
      root.left = this._deleteRec(root.left, value);
    } else if (root.data < value) {
      root.right = this._deleteRec(root.right, value);
    } else {
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      const succ = this.getSuccessor(root);
      root.data = succ.data;
      root.right = this._deleteRec(root.right, succ.data);
    }

    return root;
  }

  find(value) {
    return this._findRec(this.root, value);
  }

  _findRec(node, value) {
    if (node === null) return null;

    if (node.data === value) return node;

    if (node.data < value) {
      return this._findRec(node.right, value);
    } else {
      return this._findRec(node.left, value);
    }
  }

  levelOrderForEach(callback) {
    if (typeof callback !== 'function')
      throw new Error('A callback function is required.');

    if (this.root === null) return;

    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const curr = queue.shift();
      callback(curr);

      if (curr.left !== null) queue.push(curr.left);
      if (curr.right !== null) queue.push(curr.right);
    }
  }

  recLevelOrderForEach(callback) {
    if (typeof callback !== 'function')
      throw new Error('A callback function is required.');

    const queue = [this.root];

    const traverse = () => {
      if (queue.length === 0) return;

      const node = queue.shift();
      callback(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      traverse();
    };

    if (this.root) traverse();
  }

  _preOrderRec(node, callback) {
    if (node === null) return;

    callback(node);
    this._preOrderRec(node.left, callback);
    this._preOrderRec(node.right, callback);
  }

  preOrderForEach(callback) {
    if (typeof callback !== 'function')
      throw new Error('A callback function is required.');
    this._preOrderRec(this.root, callback);
  }

  _inOrderRec(node, callback) {
    if (node === null) return;

    this._inOrderRec(node.left, callback);
    callback(node);
    this._inOrderRec(node.right, callback);
  }

  inOrderForEach(callback) {
    if (typeof callback !== 'function')
      throw new Error('A callback function is required.');

    this._inOrderRec(this.root, callback);
  }

  _postOrderRec(node, callback) {
    if (node === null) return;

    this._postOrderRec(node.left, callback);
    this._postOrderRec(node.right, callback);
    callback(node);
  }

  postOrderForEach(callback) {
    if (typeof callback !== 'function')
      throw new Error('A callback function is required.');

    this._postOrderRec(this.root, callback);
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
