import '@figma/plugin-typings';

/**
 * Remove Spaces in Components & Styles Names
 */

const components = figma.root.children.flatMap((pageNode) => {
  return pageNode.findAll((node) => node.type === 'COMPONENT');
});

const styles = [
  ...figma.getLocalEffectStyles(),
  ...figma.getLocalGridStyles(),
  ...figma.getLocalPaintStyles(),
  ...figma.getLocalTextStyles(),
];

const updatedObjs = [...components, ...styles].filter((obj) => {
  let updated = false;
  if (obj.name !== obj.name.trim()) {
    obj.name = obj.name.trim();
    updated = true;
  }
  if (obj.name !== obj.name.replace(/\s/g, '')) {
    obj.name = obj.name.replace(/\s/g, '');
    updated = true;
  }
  if (obj.name.startsWith('.')) {
    obj.name = obj.name.replace('.', '_');
    updated = true;
  }
  return updated;
});

figma.notify(`Cleaned up ${updatedObjs.length} name(s)`);
