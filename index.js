var Binary = require('mongodb').Binary;

module.exports = {
  binToJUUIDString: function (binary) {
    var hex = binary.buffer.toString('hex')
      , msb = significantBit(hex.substr(0, 16))
      , lsb = significantBit(hex.substr(16, 16));
    hex = msb + lsb

    var uuid = hex.substr(0, 8) + '-' + hex.substr(8, 4) + '-' + hex.substr(12, 4)
      + '-' + hex.substr(16, 4) + '-' + hex.substr(20, 12)

    return uuid
  }
  , juuidStringToBin: function (juuid) {
    var hex = juuid.replace(/[{}-]/g, '')
      , msb = significantBit(hex.substr(0, 16))
      , lsb = significantBit(hex.substr(16, 16));
    hex = msb + lsb

    return new Binary(new Buffer(hexToBase64(hex), 'base64'), 3)
  }
  , binToCSUUIDString: function (binary) {
    var hex = binary.buffer.toString('hex')
      , a = hex.substr(6, 2) + hex.substr(4, 2) + hex.substr(2, 2) + hex.substr(0, 2)
      , b = hex.substr(10, 2) + hex.substr(8, 2)
      , c = hex.substr(14, 2) + hex.substr(12, 2)
      , d = hex.substr(16, 16);
    hex = a + b + c + d;
    var uuid = hex.substr(0, 8) + '-' + hex.substr(8, 4) + '-' + hex.substr(12, 4) + '-' + hex.substr(16, 4) + '-' + hex.substr(20, 12);
    return uuid;
  }
  , csuuidStringToBin: function (csuuid) {
    var hex = csuuid.replace(/[{}-]/g, '') // remove extra characters
      , a = hex.substr(6, 2) + hex.substr(4, 2) + hex.substr(2, 2) + hex.substr(0, 2)
      , b = hex.substr(10, 2) + hex.substr(8, 2)
      , c = hex.substr(14, 2) + hex.substr(12, 2)
      , d = hex.substr(16, 16);
    hex = a + b + c + d;

    return new Binary(new Buffer(hexToBase64(hex), 'base64'), 3);
  }
  , hexToBase64: hexToBase64
}

function hexToBase64(hex) {
  return new Buffer(hex, 'hex').toString('base64')
}

function significantBit(msb) {
  msb = msb.substr(14, 2) + msb.substr(12, 2) + msb.substr(10, 2) + msb.substr(8, 2)
    + msb.substr(6, 2) + msb.substr(4, 2) + msb.substr(2, 2) + msb.substr(0, 2)

  return msb
}
