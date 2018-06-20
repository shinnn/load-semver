# load-semver

[![npm version](https://img.shields.io/npm/v/load-semver.svg)](https://www.npmjs.com/package/load-semver)
[![Build Status](https://travis-ci.org/shinnn/load-semver.svg?branch=master)](https://travis-ci.org/shinnn/load-semver)

Load [`semver`](https://www.npmjs.com/package/request) module from [either CWD or `npm` CLI directory](https://github.com/shinnn/load-from-cwd-or-npm).

```javascript
const loadSemver = require('load-semver');

(async () => {
  const {parse} = await loadSemver();
  const {major, minor, patch} = parse('1.25.48');

  major; //=> 1
  minor; //=> 25
  patch; //=> 48
})();

```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install load-semver
```

## API

```javascript
const loadSemver = require('load-semver');
```

### loadSemver()

Return: `Promise<Function>`

Read [the document of `load-from-cwd-or-npm`](https://github.com/shinnn/load-from-cwd-or-npm#api) for the detailed loading algorithm.

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
