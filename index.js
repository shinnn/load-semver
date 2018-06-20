'use strict';

const loadFromCwdOrNpm = require('load-from-cwd-or-npm');

const promise = loadFromCwdOrNpm('semver');

module.exports = async function loadSemver() {
	return promise;
};
