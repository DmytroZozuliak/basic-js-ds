const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  // module.exports.Node = class {
  // 		constructor(data) {
  // 			this.data = data;
  // 			this.left = null;
  // 			this.right = null;
  // 	  }
  //  }
  constructor() {
    this.rootTree = null;
  }

  root() {
    if (this.rootTree) {
      return this.rootTree;
    } else {
      return null;
    }
  }

  add(data) {
    if (!data) {
      this.rootTree = null;
    }
    this.rootTree = addWithin(this.rootTree, data);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }
      return node;
    }
  }

  has(data) {
    if (!data) {
      return false;
    }
    return searchWithin(this.rootTree, data);

    function searchWithin(node, value) {
      console.log(value);
      if (!node) {
        return false;
      }

      console.log(node.data);
      if (node.data === value) {
        return true;
      }

      if (value < node.data) {
        return searchWithin(node.left, value);
      } else {
        return searchWithin(node.right, value);
      }
    }
  }

  find(data) {
    return findWithin(this.rootTree, data);

    function findWithin(node, value) {
      if (!node || !value) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        return findWithin(node.left, value);
      } else {
        return findWithin(node.right, value);
      }
    }
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(node, data) {
      if (!node) {
        return;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // если искомое значение равно значению, которое нашли
        if (!node.left && !node.right) {
          // если у ноды нет детей, то заменяем ноду на нулл
          return null;
        }

        // если у ноды нет левого литя, то заменяем ноду на правую сторону
        if (!node.left) {
          node = node.right;
          return node;
        }
        // если у ноды нет правого литя, то заменяем ноду на левую сторону
        if (!node.right) {
          node = node.left;
          return node;
        }

        // если у ноды есть оба и правое и левое дитя
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootTree) {
      return null;
    }

    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootTree) {
      return null;
    }

    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
};
