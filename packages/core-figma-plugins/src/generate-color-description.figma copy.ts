/**
 * @see https://www.figma.com/plugin-docs/intro/
 */

import '@figma/plugin-typings';
const name = 'Atom/AppIcon/iOS/1024pxMask';

if (!(figma.currentPage.selection && figma.currentPage.selection.length)) {
  figma.notify(`Please select a root artboard`);
}

figma.notify(`Selecting all components with the name: '${name}'`);

// Create a list of all instances of the selected component node.
const instanceNodes = figma.root.children.flatMap((pageNode) => {
  return pageNode.findAll((node) => {
    if (node.type !== 'INSTANCE') {
      // Ignore non-instance nodes.
      return false;
    }
    // The node is an instance of the selected component node
    // if its master component ID matches the component node's ID.
    return node.name === name;
  });
}) as readonly InstanceNode[];

console.log(instanceNodes);

figma.currentPage.selection = instanceNodes.map((instance) => instance.children[1]);
