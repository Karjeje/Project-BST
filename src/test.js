import { Tree, prettyPrint } from './index.js';

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new Tree(arr);

console.log('Root:', tree.root.data);
prettyPrint(tree.root);
