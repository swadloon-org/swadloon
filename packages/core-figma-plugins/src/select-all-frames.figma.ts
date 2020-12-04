import '@figma/plugin-typings';

/**
 * @see https://www.figma.com/plugin-docs/intro/
 */

const name = 'Icon';

if (!(figma.currentPage.selection && figma.currentPage.selection.length)) {
  figma.notify(`Please select a root artboard`);
}

figma.notify(`Selecting all frames with the name: '${name}'`);

const nodes = figma.currentPage.findAll((node) => {
  if (node.type !== 'FRAME') {
    return false;
  }
  console.log(node.name);
  return node.name === name;
}) as readonly SceneNode[];

figma.notify(`Found ${nodes.length} frame nodes`);
