[![Build Status](https://travis-ci.org/graphology/graphology-assertions.svg)](https://travis-ci.org/graphology/graphology-assertions)

# Graphology Assertions

Assertions to be used with [`graphology`](https://graphology.github.io).

## Installation

```
npm install graphology-assertions
```

## Usage

* [#.sameNodes](#samenodes)
* [#.sameNodesDeep](#samenodesdeep)

### #.sameNodes

Returns whether two graphs have the same nodes.

```js
import {sameNodes} from 'graphology-assertions';

sameNodes(G, H);
```

### #.sameNodesDeep

Returns whether two graphs have the same nodes & whether those nodes have the same attributes.

```js
import {sameNodesDeep} from 'graphology-assertions';

sameNodesDeep(G, H);
```
