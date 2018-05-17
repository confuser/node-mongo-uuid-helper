const { Binary } = require('mongodb')

module.exports = {
  binToJUUIDString: function (binary) {
    let hex = binary.buffer.toString('hex')
    let msb = hex.substr(0, 16)
    let lsb = hex.substr(16, 16)

    msb = significantBit(msb)
    lsb = significantBit(lsb)
    hex = msb + lsb

    const uuid = hex.substr(0, 8) + '-' + hex.substr(8, 4) + '-' + hex.substr(12, 4) +
        '-' + hex.substr(16, 4) + '-' + hex.substr(20, 12)

    return uuid
  },
  juuidStringToBin: function (juuid) {
    let hex = juuid.replace(/[{}-]/g, '') // remove extra characters
    let msb = hex.substr(0, 16)
    let lsb = hex.substr(16, 16)

    msb = significantBit(msb)
    lsb = significantBit(lsb)

    hex = msb + lsb

    return new Binary(Buffer.from(hexToBase64(hex), 'base64'), 3)
  },
  hexToBase64
}

function hexToBase64 (hex) {
  return Buffer.from(hex, 'hex').toString('base64')
}

function significantBit (msb) {
  msb = msb.substr(14, 2) + msb.substr(12, 2) + msb.substr(10, 2) + msb.substr(8, 2) +
    msb.substr(6, 2) + msb.substr(4, 2) + msb.substr(2, 2) + msb.substr(0, 2)

  return msb
}
