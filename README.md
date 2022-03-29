[![view on npm](https://badgen.net/npm/v/defer-promise)](https://www.npmjs.org/package/defer-promise)
[![npm module downloads](https://badgen.net/npm/dt/defer-promise)](https://www.npmjs.org/package/defer-promise)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/75lb/defer-promise)](https://github.com/75lb/defer-promise/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/75lb/defer-promise)](https://github.com/75lb/defer-promise/network/dependents?dependent_type=PACKAGE)
[![Node.js CI](https://github.com/75lb/defer-promise/actions/workflows/node.js.yml/badge.svg)](https://github.com/75lb/defer-promise/actions/workflows/node.js.yml)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# defer-promise

Isomorphic function returning a deferred promise with `resolve` and `reject` methods. If the global `Promise.defer()` method exists it will use that, else polyfill.

```js
import defer from 'defer-promise'
const deferred = defer()

/* Async function using a callback instead of returning a promise */
doSomething((result, err) => {
  if (err) {
    deferred.reject(err)
  } else {
    deferred.resolve(result)
  }
})

const result = await deferred.promise;
```

## Load anywhere

This library can be loaded anywhere, natively without transpilation.

Common JS:

```js
const defer = require('defer-promise')
```

Node.js with ECMAScript Module support enabled:

```js
import defer from 'defer-promise'
```

Modern browser ECMAScript Module:

```js
import defer from './node_modules/defer-promise/index.js'
```

* * *

&copy; 2015-22 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
