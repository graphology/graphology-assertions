/**
 * Graphology Utils Unit Tests
 * ============================
 */
var assert = require('assert'),
    Graph = require('graphology'),
    lib = require('./index.js');

var sameNodes = lib.sameNodes,
    sameDeepNodes = lib.sameDeepNodes;

describe('graphology-utils', function() {

  describe('#.sameNodes', function() {

    it('should return `true` if both graphs\' nodes are the same.', function() {
      var G = new Graph(),
          H = new Graph();

      G.addNodesFrom(['John', 'Martha', 'Elvis']);
      H.addNodesFrom(['Martha', 'Elvis']);

      assert.strictEqual(sameNodes(G, H), false);

      H.addNode('John');

      assert.strictEqual(sameNodes(G, H), true);

      H.addNode('Estelle');

      assert.strictEqual(sameNodes(G, H), false);
    });
  });

  describe('#.sameDeepNodes', function() {

    it('should return `true` if both graphs\' nodes & their attributes are the same.', function() {
      var G = new Graph(),
          H = new Graph();

      G.addNodesFrom(['John', 'Martha', 'Elvis']);
      H.addNodesFrom(['Martha', 'Elvis']);

      assert.strictEqual(sameDeepNodes(G, H), false);

      H.addNode('John');

      assert.strictEqual(sameDeepNodes(G, H), true);

      H.setNodeAttribute('Martha', 'age', 45);

      assert.strictEqual(sameDeepNodes(G, H), false);

      G.setNodeAttribute('Martha', 'age', 45);

      assert.strictEqual(sameDeepNodes(G, H), true);
    });
  });
});
