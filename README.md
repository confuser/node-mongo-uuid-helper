# Mongo UUID Helper

[![build status](https://secure.travis-ci.org/confuser/node-mongo-uuid-helper.png)](http://travis-ci.org/confuser/node-mongo-uuid-helper)
[![Coverage Status](https://coveralls.io/repos/confuser/node-mongo-uuid-helper/badge.png?branch=master)](https://coveralls.io/r/confuser/node-mongo-uuid-helper?branch=master)


A NodeJS UUID helper, based on the [C# driver UUID helper](https://github.com/mongodb/mongo-csharp-driver/blob/master/uuidhelpers.js)

Currently only implements JUUID, PR's welcome.

## Installation

```
npm install mongo-uuid-helper --save
```

## Usage
```js
var uuidHelper = require('mongo-uuid-helper')
  , binData = uuidHelper.juuidStringToBin('ae51c849-3f2a-4a37-986d-55ed5b02307f')
  , jUUID = uuidHelper.binToJUUIDString(binData)
```
