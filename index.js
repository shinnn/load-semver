'use strict';

const loadFromCwdOrNpm = require('load-from-cwd-or-npm');

const promise = loadFromCwdOrNpm('semver');

module.exports = function loadSemver() {
  return promise;
};
