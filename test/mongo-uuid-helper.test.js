var uuidHelper = require('../')

require('should')

describe('Mongo UUID Helper', function () {

  describe('#binToJUUIDString', function () {

    it('should convert binary to a juuid string', function () {
      var juuidStr = 'ae51c849-3f2a-4a37-986d-55ed5b02307f'
        , binary = uuidHelper.juuidStringToBin(juuidStr)

      uuidHelper.binToJUUIDString(binary).should.equal(juuidStr)
    })

  })

  describe('#binToCSUUIDString', function () {
    it('should convert binary to a csuuid string', function () {
      var csuuidStr = '0c552563-77d2-4562-a9bd-739ba2c6e1fe',
          binary = uuidHelper.csuuidStringToBin(csuuidStr)

      uuidHelper.binToCSUUIDString(binary).should.equal(csuuidStr)
    })
  })

})
