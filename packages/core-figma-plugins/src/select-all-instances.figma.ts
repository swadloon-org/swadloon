import '@figma/plugin-typings';

/**
 * @see https://www.figma.com/plugin-docs/intro/
 */

const pattern = /Icon/;

figma.notify(`Selecting nodes matching the pattern: '${pattern}'`);

function predicate(node: SceneNode) {
  if (node.type !== 'INSTANCE') {
    return false;
  }
  console.log(node.name);
  return pattern.test(node.name);
}

if (!figma.currentPage.selection?.length) {
  throw new Error(`Please set your selection for the current page`);
}

const selection = figma.currentPage.selection
  .flatMap((node: FrameNode | PageNode | SceneNode) => {
    console.log(`Finding in selection node: ${node.name}`);

    if ((node as PageNode | FrameNode)['findAll']) {
      const result = (node as PageNode | FrameNode).findAll(predicate);
      console.log(`FindAll found: ${result.map((node) => node.name)}`);

      return result;
    }
    return node;
  })
  .filter((node) => node !== undefined) as readonly SceneNode[];

figma.currentPage.selection = selection;
