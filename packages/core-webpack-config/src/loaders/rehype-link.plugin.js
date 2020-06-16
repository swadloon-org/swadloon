const visit = require('unist-util-visit');

module.exports = (options) => {
  options = options || {};

  return (tree, file) => {
    visit(tree, 'elem', visitor);

    function visitor(node) {
      console.log(node);
    }
  };
};
