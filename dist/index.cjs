'use strict';

/**
 * @module defer-promise
 */

function defer () {
  if (typeof Promise !== 'undefined' && Promise.defer) {
    return Promise.defer()
  } else {
    var deferred = {};
    deferred.promise = new Promise(function (resolve, reject) {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });
    return deferred
  }
}

module.exports = defer;
