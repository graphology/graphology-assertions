/**
 * Graphology Assertions
 * ======================
 *
 * Various assertions concerning graphs.
 */
var isEqual = require('lodash/isEqual');

/**
 * Function returning whether the given graphs have the same nodes.
 *
 * @param  {Graph}   G - First graph.
 * @param  {Graph}   H - Second graph.
 * @return {boolean}
 */
exports.sameNodes = function(G, H) {

  if (G.order !== H.order)
    return false;

  var ng = G.nodes(),
      l = G.order,
      i;

  for (i = 0; i < l; i++) {
    if (!H.hasNode(ng[i]))
      return false;
  }

  return true;
};

/**
 * Function returning whether the given graphs have the same nodes & if these
 * nodes have the same attributes.
 *
 * @param  {Graph}   G - First graph.
 * @param  {Graph}   H - Second graph.
 * @return {boolean}
 */
exports.sameNodesDeep = function(G, H) {

  if (G.order !== H.order)
    return false;

  var ng = G.nodes(),
      l = G.order,
      e,
      i;

  for (i = 0; i < l; i++) {
    if (!H.hasNode(ng[i]))
      return false;

    e = isEqual(
      G.getNodeAttributes(ng[i]),
      H.getNodeAttributes(ng[i])
    );

    if (!e)
      return false;
  }

  return true;
};
