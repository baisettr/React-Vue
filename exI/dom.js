const rootA = document.getElementById('rootA');
const rootB = document.getElementById('rootB');

const nodeA = document.getElementById('nodeA');
const nodeB = document.getElementById('nodeB');

function getPathFromNodeToRoot(root, node) {
    const path = [];
    while (node !== root) {
        const parent = node.parentElement;
        const children = Array.from(parent.children);
        const nodeIndex = children.indexOf(node);
        path.push(nodeIndex);
        node = parent;
    }
    return path;
}

function getNodeFromRootByPath(root, path) {
    const ref = [...path];
    while (ref.length) {
        root = root.children[ref.pop(0)]
    }
    return root;
}

function getSymmetricNode() {
    const pathNode = getPathFromNodeToRoot(rootA, nodeA);
    return getNodeFromRootByPath(rootB, pathNode);
}

let targetNode = getSymmetricNode(rootA, rootB, nodeA);




function findDomNodeInTree(rootA, rootB, targetNode) {
    if (rootA === targetNode) {
        return rootB;
    }

    var nodeB = null;

    for (let i = 0; i < rootA.childNodes.length && nodeB === null; i++) {
        nodeB = findDomNodeInTree(rootA.childNodes[i], rootB.childNodes[i], targetNode);
    }

    return nodeB;
}