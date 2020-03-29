const crypto = require('crypto')

// export default não existe no node 
module.exports = function generateUniqueId () {
    return (crypto.randomBytes(4).toString('HEX'))
}