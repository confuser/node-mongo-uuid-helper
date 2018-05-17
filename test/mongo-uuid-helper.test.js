const assert = require('assert')
const uuidHelper = require('../')

describe('Mongo UUID Helper', function () {
  describe('#binToJUUIDString', function () {
    it('should convert binary to a juuid string', function () {
      const juuidStr = 'ae51c849-3f2a-4a37-986d-55ed5b02307f'
      const binary = uuidHelper.juuidStringToBin(juuidStr)

      assert.strictEqual(uuidHelper.binToJUUIDString(binary), juuidStr)
    })
  })
})
