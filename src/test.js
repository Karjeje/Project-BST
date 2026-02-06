import { Tree, prettyPrint } from './index.js';

//1.
function randomArr() {
  const n = Math.floor(Math.random() * 16);
  const arr = [];
  for (let i = 0; i < n; i++) {
    const number = Math.floor(Math.random() * 100);
    arr.push(number);
  }

  return arr;
}

const randomArray = randomArr();
console.log(randomArray);
const tree = new Tree(randomArray);

//2.
console.log('Is balanced:', tree.isBalanced());

//3.
console.log('Level order:');
tree.levelOrderForEach((node) => console.log(node.data));

console.log('In order:');
tree.inOrderForEach((node) => console.log(node.data));

console.log('Pre order:');
tree.preOrderForEach((node) => console.log(node.data));

console.log('Post order');
tree.postOrderForEach((node) => console.log(node.data));

//4.
tree.insert(102);
tree.insert(150);
tree.insert(122);

//5.
console.log('Is balanced:', tree.isBalanced());

//6.
tree.rebalance();

//7.
console.log('Is balanced', tree.isBalanced());

//8.
console.log('Level order:');
tree.levelOrderForEach((node) => console.log(node.data));

console.log('In order:');
tree.inOrderForEach((node) => console.log(node.data));

console.log('Pre order:');
tree.preOrderForEach((node) => console.log(node.data));

console.log('Post order');
tree.postOrderForEach((node) => console.log(node.data));

console.log('Root:', tree.root.data);
prettyPrint(tree.root);
