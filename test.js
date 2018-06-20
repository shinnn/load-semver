'use strict';

const loadSemver = require('.');
const test = require('tape');

const version = '      v10.45.6-2';

test('loadSemver()', async t => {
	const {parse, SemVer} = await loadSemver();

	t.equal(typeof SemVer, 'function', 'should load `semver` module.');

	t.equal(
		parse(version, false),
		null,
		'should parse semver string.'
	);

	const semver = parse(version, true);

	t.equal(semver.loose, true, 'should support `loose` mode.');
	t.equal(semver.major, 10, 'should parse major version.');
	t.equal(semver.minor, 45, 'should parse minor version.');
	t.equal(semver.patch, 6, 'should parse patch version.');
	t.deepEqual(semver.prerelease, [2], 'should parse additional pre-release labels.');

	t.end();
});
