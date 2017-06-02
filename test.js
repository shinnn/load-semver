'use strict';

const loadSemver = require('.');
const test = require('tape');

const version = '      v10.45.6-2';

test('loadSemver()', async t => {
  const {parse, SemVer} = await loadSemver();

  t.strictEqual(typeof SemVer, 'function', 'should load `semver` module.');

  t.strictEqual(
    parse(version, false),
    null,
    'should parse semver string.'
  );

  const semver = parse(version, true);

  t.strictEqual(semver.loose, true, 'should support `loose` mode.');
  t.strictEqual(semver.major, 10, 'should parse major version.');
  t.strictEqual(semver.minor, 45, 'should parse minor version.');
  t.strictEqual(semver.patch, 6, 'should parse patch version.');
  t.deepEqual(semver.prerelease, [2], 'should parse additional pre-release labels.');

  t.end();
});
