var Binary = require('mongodb').Binary

module.exports =
{ binToJUUIDString: function (binary) {
    var hex = binary.buffer.toString('hex')
      , msb = hex.substr(0, 16)
      , lsb = hex.substr(16, 16)

    msb = significantBit(msb)

    lsb = significantBit(lsb)

    hex = msb + lsb

    var uuid = hex.substr(0, 8) + '-' + hex.substr(8, 4) + '-' + hex.substr(12, 4)
      + '-' + hex.substr(16, 4) + '-' + hex.substr(20, 12)

    return uuid
  }

, juuidStringToBin: function (juuid) {
    var hex = juuid.replace(/[{}-]/g, '') // remove extra characters
      , msb = hex.substr(0, 16)
      , lsb = hex.substr(16, 16)

    msb = significantBit(msb)
    lsb = significantBit(lsb)

    hex = msb + lsb

    return new Binary(new Buffer(hexToBase64(hex), 'base64'), 3)
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
