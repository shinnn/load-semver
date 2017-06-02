'use strict';

var loadFromCwdOrNpm = require('load-from-cwd-or-npm');

var promise = loadFromCwdOrNpm('semver');

module.exports = function loadSemver() {
  return promise;
};
